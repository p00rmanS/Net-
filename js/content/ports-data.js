/**
 * content/ports-data.js — Common ports and protocols for the Port Trainer.
 */
(function (NetReady) {
  'use strict';

  NetReady.PORTS = [
    { port: 20, proto: 'TCP', name: 'FTP (data)', desc: 'File Transfer Protocol data channel.' },
    { port: 21, proto: 'TCP', name: 'FTP (control)', desc: 'File Transfer Protocol control/command channel.' },
    { port: 22, proto: 'TCP', name: 'SSH', desc: 'Secure Shell — encrypted remote command-line access.' },
    { port: 23, proto: 'TCP', name: 'Telnet', desc: 'Unencrypted remote command-line access (legacy, insecure).' },
    { port: 25, proto: 'TCP', name: 'SMTP', desc: 'Simple Mail Transfer Protocol — sending email between servers.' },
    { port: 53, proto: 'TCP/UDP', name: 'DNS', desc: 'Domain Name System — resolves domain names to IP addresses.' },
    { port: 67, proto: 'UDP', name: 'DHCP (server)', desc: 'DHCP server listens for client requests.' },
    { port: 68, proto: 'UDP', name: 'DHCP (client)', desc: 'DHCP client listens for server offers.' },
    { port: 69, proto: 'UDP', name: 'TFTP', desc: 'Trivial File Transfer Protocol — simple, unauthenticated file transfer.' },
    { port: 80, proto: 'TCP', name: 'HTTP', desc: 'Hypertext Transfer Protocol — unencrypted web traffic.' },
    { port: 110, proto: 'TCP', name: 'POP3', desc: 'Post Office Protocol v3 — downloads email from a mail server.' },
    { port: 119, proto: 'TCP', name: 'NNTP', desc: 'Network News Transfer Protocol — Usenet news article transfer.' },
    { port: 123, proto: 'UDP', name: 'NTP', desc: 'Network Time Protocol — synchronizes clocks across devices.' },
    { port: 143, proto: 'TCP', name: 'IMAP', desc: 'Internet Message Access Protocol — manages email on the server (supports multiple devices).' },
    { port: 161, proto: 'UDP', name: 'SNMP', desc: 'Simple Network Management Protocol — monitors and manages network devices.' },
    { port: 162, proto: 'UDP', name: 'SNMP Trap', desc: 'Unsolicited SNMP alert messages sent from managed devices.' },
    { port: 179, proto: 'TCP', name: 'BGP', desc: 'Border Gateway Protocol — exchanges routing information between autonomous systems on the internet.' },
    { port: 389, proto: 'TCP', name: 'LDAP', desc: 'Lightweight Directory Access Protocol — queries and modifies directory services (e.g., Active Directory).' },
    { port: 443, proto: 'TCP', name: 'HTTPS', desc: 'HTTP Secure — encrypted web traffic using TLS.' },
    { port: 445, proto: 'TCP', name: 'SMB', desc: 'Server Message Block — Windows file and printer sharing.' },
    { port: 514, proto: 'UDP', name: 'Syslog', desc: 'Standard protocol for forwarding log messages to a central server.' },
    { port: 587, proto: 'TCP', name: 'SMTP (submission)', desc: 'Authenticated email submission from a client to a mail server.' },
    { port: 636, proto: 'TCP', name: 'LDAPS', desc: 'LDAP over TLS/SSL — encrypted directory service queries.' },
    { port: 1433, proto: 'TCP', name: 'Microsoft SQL Server', desc: 'Default port for Microsoft SQL Server database connections.' },
    { port: 1521, proto: 'TCP', name: 'Oracle DB', desc: 'Default port for Oracle database listener connections.' },
    { port: 1701, proto: 'UDP', name: 'L2TP', desc: 'Layer 2 Tunneling Protocol — often paired with IPsec for VPNs.' },
    { port: 1723, proto: 'TCP', name: 'PPTP', desc: 'Point-to-Point Tunneling Protocol — legacy, weak VPN protocol.' },
    { port: 3306, proto: 'TCP', name: 'MySQL', desc: 'Default port for MySQL/MariaDB database connections.' },
    { port: 3389, proto: 'TCP', name: 'RDP', desc: 'Remote Desktop Protocol — Windows remote graphical desktop access.' },
    { port: 5060, proto: 'TCP/UDP', name: 'SIP', desc: 'Session Initiation Protocol — sets up and tears down VoIP/video calls.' },
    { port: 5061, proto: 'TCP', name: 'SIP (TLS)', desc: 'Encrypted SIP signaling over TLS.' },
  ];
}(window.NetReady));
