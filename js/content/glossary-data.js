/**
 * content/glossary-data.js — Supplementary glossary terms.
 *
 * The glossary tool merges this list with every keyTerm defined inline
 * across all lessons (see js/content/module-*.js), so authors only ever
 * define a term once. These entries cover common N10-009 vocabulary that
 * is referenced by study tools (like the Port Trainer) even in domains
 * whose full lessons are still on the roadmap — a glossary should not be
 * artificially limited to only what has a finished lesson yet.
 */
(function (NetReady) {
  'use strict';

  NetReady.GLOSSARY_EXTRA = [
    { term: 'MAC address', def: 'A 48-bit physical address burned into a network interface, used for Layer 2 (Data Link) delivery within a local segment.' },
    { term: 'TCP', def: 'Transmission Control Protocol — a connection-oriented Transport layer protocol providing reliable, ordered delivery via a three-way handshake.' },
    { term: 'UDP', def: 'User Datagram Protocol — a connectionless Transport layer protocol offering fast delivery with no reliability guarantees.' },
    { term: 'DNS', def: 'Domain Name System — translates human-readable domain names into IP addresses.' },
    { term: 'DHCP', def: 'Dynamic Host Configuration Protocol — automatically assigns IP addresses and network settings to devices.' },
    { term: 'DORA process', def: 'The four-step DHCP exchange: Discover, Offer, Request, Acknowledge.' },
    { term: 'HTTP', def: 'Hypertext Transfer Protocol — the unencrypted protocol used to transfer web pages, using TCP port 80.' },
    { term: 'HTTPS', def: 'HTTP Secure — HTTP encrypted with TLS, using TCP port 443.' },
    { term: 'SSH', def: 'Secure Shell — an encrypted protocol for remote command-line access, using TCP port 22.' },
    { term: 'FTP', def: 'File Transfer Protocol — transfers files using TCP ports 20 (data) and 21 (control), unencrypted.' },
    { term: 'SMTP', def: 'Simple Mail Transfer Protocol — used to send email between mail servers, using TCP port 25.' },
    { term: 'VLAN', def: 'Virtual LAN — a logical grouping of devices on a switch that separates broadcast domains without requiring separate physical hardware.' },
    { term: 'Trunk port', def: 'A switch port configured to carry traffic for multiple VLANs simultaneously, typically using 802.1Q tagging.' },
    { term: 'Access port', def: 'A switch port assigned to a single VLAN, typically connecting to an end-user device.' },
    { term: 'Default gateway', def: 'The router address a device uses to reach destinations outside its own local subnet.' },
    { term: 'Firewall', def: 'A security device or software that filters network traffic based on defined rules.' },
    { term: 'NAT', def: 'Network Address Translation — allows private IP addresses to share one or more public IP addresses.' },
    { term: 'Switch', def: 'A Layer 2 device that forwards frames between devices on the same network using MAC addresses.' },
    { term: 'Router', def: 'A Layer 3 device that forwards packets between different networks using IP addresses.' },
    { term: 'Access point (AP)', def: 'A device that allows wireless clients to connect to a wired network.' },
    { term: 'SSID', def: 'Service Set Identifier — the human-readable name broadcast by a wireless network.' },
    { term: 'WPA3', def: 'Wi-Fi Protected Access 3 — the current generation of Wi-Fi security and encryption standard.' },
    { term: 'Latency', def: 'The time delay for data to travel from source to destination.' },
    { term: 'Jitter', def: 'The variation in latency between packets over time, especially disruptive to real-time voice/video.' },
    { term: 'Packet loss', def: 'The percentage of transmitted packets that never arrive at their destination.' },
    { term: 'Three-way handshake', def: 'The SYN, SYN-ACK, ACK sequence TCP uses to establish a reliable connection.' },
    { term: 'Subnet mask', def: 'A 32-bit value marking which portion of an IP address is the network ID versus the host ID.' },
    { term: 'CIDR', def: 'Classless Inter-Domain Routing — slash notation (e.g., /24) expressing how many bits of an address are the network portion.' },
    { term: 'Broadcast domain', def: 'The set of devices that receive a given broadcast frame; routers separate broadcast domains.' },
    { term: 'Collision domain', def: 'The set of devices that could cause a data collision if they transmit at the same time; switches separate collision domains per port.' },
    { term: 'STP', def: 'Spanning Tree Protocol — prevents Layer 2 loops in networks with redundant switch links.' },
    { term: 'ARP', def: 'Address Resolution Protocol — resolves a known IP address to its corresponding MAC address on a local network.' },
    { term: 'ICMP', def: 'Internet Control Message Protocol — used for diagnostics and error reporting, including ping and traceroute.' },
    { term: 'Loopback address', def: 'The address (127.0.0.1) that always refers back to the local device itself.' },
    { term: 'APIPA', def: 'Automatic Private IP Addressing — a self-assigned 169.254.x.x address used when DHCP is unreachable.' },
    { term: 'Zero trust', def: 'A security model that assumes no user or device is automatically trusted, requiring continuous verification.' },
    { term: 'CIA triad', def: 'Confidentiality, Integrity, and Availability — the three core goals of information security.' },
    { term: 'Encapsulation', def: 'The process of wrapping data with layer-specific headers as it moves down the OSI/TCP-IP stack for transmission.' },
    { term: 'PDU (Protocol Data Unit)', def: 'The name of the data unit at a given layer: segment (Transport), packet (Network), frame (Data Link).' },
    { term: 'SOC', def: 'Security Operations Center — a team that monitors an organization\'s networks and systems for security threats.' },
  ];
}(window.NetReady));
