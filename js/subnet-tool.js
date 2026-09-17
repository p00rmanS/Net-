/**
 * subnet-tool.js — pure IPv4 subnetting math: used by both the Subnet
 * Calculator and the Subnetting Practice Generator (which produces
 * effectively unlimited randomized problems with full worked solutions).
 */
(function (NetReady) {
  'use strict';

  function isValidOctet(n) {
    return Number.isInteger(n) && n >= 0 && n <= 255;
  }

  function parseIp(ipStr) {
    const parts = String(ipStr).trim().split('.');
    if (parts.length !== 4) return null;
    const nums = parts.map((p) => Number(p));
    if (!nums.every(isValidOctet)) return null;
    return nums;
  }

  function ipToInt(octets) {
    return ((octets[0] << 24) | (octets[1] << 16) | (octets[2] << 8) | octets[3]) >>> 0;
  }

  function intToIp(n) {
    return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.');
  }

  function cidrToMaskInt(cidr) {
    return cidr === 0 ? 0 : (0xffffffff << (32 - cidr)) >>> 0;
  }

  function maskIntToOctets(maskInt) {
    return [(maskInt >>> 24) & 255, (maskInt >>> 16) & 255, (maskInt >>> 8) & 255, maskInt & 255];
  }

  function maskOctetsToCidr(octets) {
    return octets.reduce((bits, octet) => bits + octet.toString(2).split('1').length - 1, 0);
  }

  function toBinaryOctet(n) {
    return n.toString(2).padStart(8, '0');
  }

  const SubnetTool = {
    parseIp,
    ipToInt,
    intToIp,
    cidrToMaskInt,
    toBinaryOctet,

    maskFromCidr(cidr) {
      return maskIntToOctets(cidrToMaskInt(cidr));
    },

    cidrFromMaskString(maskStr) {
      const octets = parseIp(maskStr);
      if (!octets) return null;
      return maskOctetsToCidr(octets);
    },

    /**
     * Full breakdown for an IP + CIDR combination.
     * Returns null if input is invalid.
     */
    calculate(ipStr, cidr) {
      const octets = parseIp(ipStr);
      if (!octets || cidr === null || cidr === undefined) return null;
      cidr = Number(cidr);
      if (!Number.isInteger(cidr) || cidr < 0 || cidr > 32) return null;

      const ipInt = ipToInt(octets);
      const maskInt = cidrToMaskInt(cidr);
      const networkInt = (ipInt & maskInt) >>> 0;
      const hostBits = 32 - cidr;
      const blockSize = hostBits >= 32 ? Math.pow(2, 32) : Math.pow(2, hostBits);
      const broadcastInt = hostBits === 0 ? networkInt : (networkInt + blockSize - 1) >>> 0;
      const totalAddresses = blockSize;
      const usableHosts = hostBits <= 1 ? 0 : totalAddresses - 2;
      const firstHostInt = hostBits <= 1 ? networkInt : networkInt + 1;
      const lastHostInt = hostBits <= 1 ? broadcastInt : broadcastInt - 1;

      return {
        input: { ip: octets.join('.'), cidr },
        mask: maskIntToOctets(maskInt).join('.'),
        wildcard: maskIntToOctets(maskInt).map((o) => 255 - o).join('.'),
        networkId: intToIp(networkInt),
        broadcastId: intToIp(broadcastInt),
        firstHost: usableHosts > 0 ? intToIp(firstHostInt) : 'n/a',
        lastHost: usableHosts > 0 ? intToIp(lastHostInt) : 'n/a',
        totalAddresses,
        usableHosts,
        blockSize,
        binaryOctets: octets.map(toBinaryOctet),
        maskBinaryOctets: maskIntToOctets(maskInt).map(toBinaryOctet),
      };
    },

    /**
     * Generates a random, solvable subnetting practice problem with a full
     * worked solution. Acts as an unlimited practice generator rather than
     * a fixed, memorizable worksheet.
     */
    generateProblem(options) {
      options = options || {};
      const cidrPool = options.cidrPool || [24, 25, 26, 27, 28, 29, 30, 20, 21, 22, 23];
      const cidr = options.cidr || cidrPool[Math.floor(Math.random() * cidrPool.length)];
      const baseOctets = [
        Math.floor(Math.random() * 223) + 1,
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 254) + 1,
      ];
      const ip = baseOctets.join('.');
      const solution = SubnetTool.calculate(ip, cidr);
      return { ip, cidr, solution };
    },
  };

  NetReady.SubnetTool = SubnetTool;
}(window.NetReady));
