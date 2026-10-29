/**
 * content/labs-data-2.js — Additional guided match labs (performance-based
 * question practice) appended to NetReady.LABS.
 *
 * Each lab is a six-item matching exercise. The matchLab() helper fills in the
 * standard lab fields (hints, troubleshooting tips, reflection, reset note,
 * diagram) and places the correct option at a chosen position so the right
 * answer is not always first.
 */
(function (NetReady) {
  'use strict';

  function esc(t) {
    return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // item: { id, label, right, wrong: [..3 distractors..], pos }
  function matchLab(cfg) {
    const items = cfg.items.map((it) => {
      const options = it.wrong.slice();
      options.splice(Math.min(it.pos, options.length), 0, it.right);
      return { id: it.id, label: it.label, options, correctIndex: Math.min(it.pos, it.wrong.length) };
    });
    const nodes = cfg.items
      .map((it, i) => `<div class="net-node">Item ${i + 1}<br><small>${esc(it.short)}</small></div>`)
      .join('');
    return {
      id: cfg.id,
      moduleId: cfg.moduleId,
      type: 'match',
      title: cfg.title,
      estMinutes: cfg.minutes || 12,
      scenario: cfg.scenario,
      businessRequirement: cfg.requirement,
      diagram: {
        type: 'diagram',
        html: `<div class="lesson-diagram lab-diagram" role="img" aria-label="${esc(cfg.diagramLabel)}">
          <div class="net-node router">${esc(cfg.diagramTitle)}</div>
          <div class="net-line">&darr;</div>
          <div class="net-row">${nodes}</div>
        </div>`,
      },
      tools: cfg.tools,
      startingState: cfg.startingState,
      objectives: cfg.objectives,
      hints: cfg.hints,
      validation: cfg.validation,
      expectedResult: cfg.expected,
      troubleshooting: [
        'If two options both look right, re-read the item for the one specific clue (a number, a layer, or a symptom) that separates them.',
        'Review the lesson named in this lab, then come back and try the items you missed.',
      ],
      reflection: cfg.reflection,
      taglishDebrief: cfg.taglish,
      resetNote: 'Use the "Reset Lab" control to clear your selections and try again from the starting state.',
      matchItems: items,
    };
  }

  NetReady.LABS = (NetReady.LABS || []).concat([
    matchLab({
      id: 'lab-cabling-tools-connectors',
      moduleId: 3,
      title: 'Cabling Job Site: Pick the Right Tool or Connector',
      minutes: 12,
      scenario: 'You are the installer on a new office build. Six jobs come up during the day. For each one, pick the tool or component that fits the job.',
      requirement: 'Match each cabling task to the single correct tool, connector, or test instrument.',
      diagramLabel: 'Six cabling tasks on a job site',
      diagramTitle: 'Cabling Job List',
      tools: 'No special tool required. Review Module 3, Lessons 3-8, 3-11, and 3-12 first.',
      startingState: 'Six jobs listed, nothing selected yet.',
      objectives: ['Match tools such as crimpers, punchdown tools, tone generators, wire-map testers, OTDRs, and loopback adapters to their jobs.', 'Choose the right connector for the cable and the job.'],
      hints: [
        'Level 1: Decide whether each job is copper or fiber, and whether it is installing, tracing, or testing.',
        'Level 2: Crimper attaches plugs; punchdown seats wires; tone generator and probe traces; wire-map checks pin-to-pin wiring.',
        'Level 3: OTDR finds distance to a fiber fault; a loopback adapter tests a port; F-type connectors are for coax.',
      ],
      validation: 'Each job must match the tool or component designed for that exact task.',
      expected: 'All six cabling jobs matched to the correct tool or component.',
      reflection: ['Which job did you hesitate on, and which keyword in it gave the answer?', 'Why is a wire-map tester not enough to prove a cable meets Cat 6 performance?'],
      taglish: 'Bawat gamit ay may isang trabaho. Kapag alam mo kung kopya (copper) o fiber, at kung nag-iinstall, nagta-trace, o nagte-test, madali na ang pagpili.',
      items: [
        { id: 'job-plug', short: 'Attach RJ-45', label: 'Job 1: You must attach an RJ-45 plug to a new Cat 6 patch cable.', right: 'Cable crimper', wrong: ['Punchdown tool', 'Tone generator', 'OTDR'], pos: 2 },
        { id: 'job-jack', short: 'Seat wires', label: 'Job 2: You must terminate solid-core cable onto a keystone jack and a patch panel port.', right: 'Punchdown tool', wrong: ['Cable crimper', 'Loopback adapter', 'Optical power meter'], pos: 0 },
        { id: 'job-trace', short: 'Find the cable', label: 'Job 3: A cable in the ceiling is unlabeled and you must find which wall jack it ends at.', right: 'Tone generator and probe', wrong: ['Multimeter', 'Fusion splicer', 'Crimper'], pos: 3 },
        { id: 'job-wiremap', short: 'Split pair?', label: 'Job 4: A new drop links at only 100 Mbps and you suspect a split pair or crossed wires.', right: 'Wire-map tester', wrong: ['Spectrum analyzer', 'Punchdown tool', 'Light meter'], pos: 1 },
        { id: 'job-otdr', short: 'Fiber break', label: 'Job 5: A fiber run is dead and you need the distance to the break.', right: 'OTDR', wrong: ['Wire-map tester', 'Loopback adapter', 'Tone probe'], pos: 2 },
        { id: 'job-loopback', short: 'Test a port', label: 'Job 6: You need to prove whether a switch port or NIC is faulty without any cable run involved.', right: 'Loopback adapter', wrong: ['OTDR', 'Cable crimper', 'Fusion splicer'], pos: 1 },
      ],
    }),

    matchLab({
      id: 'lab-ports-protocols-match',
      moduleId: 6,
      title: 'Ports and Protocols: Match the Requirement',
      minutes: 12,
      scenario: 'The firewall team gives you six requirements and asks which protocol and default port each one needs so they can write the rules.',
      requirement: 'Choose the protocol and default port that satisfies each requirement.',
      diagramLabel: 'Six firewall rule requirements',
      diagramTitle: 'Firewall Rule Requests',
      tools: 'No special tool required. Use the Port and Protocol Trainer and Module 6 lessons for review.',
      startingState: 'Six requirements listed, nothing selected yet.',
      objectives: ['Recall common ports and protocols from the N10-009 list.', 'Distinguish secure protocols from their legacy equivalents.'],
      hints: [
        'Level 1: Ask whether the requirement needs encryption and whether it is management, web, name resolution, or directory traffic.',
        'Level 2: SSH 22, DNS 53, HTTPS 443, RDP 3389, SMTP 25, LDAPS 636.',
        'Level 3: Telnet 23 is the insecure twin of SSH; LDAP 389 is the unencrypted twin of LDAPS 636.',
      ],
      validation: 'Each requirement must match the protocol and port that satisfy it, preferring the secure option when encryption is required.',
      expected: 'All six requirements mapped to the correct protocol and port.',
      reflection: ['Which insecure protocol did you almost choose, and what is its secure replacement?', 'Why does DNS use both UDP and TCP port 53?'],
      taglish: 'Kapag kailangan ng encryption, piliin ang secure na bersyon: SSH sa halip na Telnet, HTTPS sa halip na HTTP, LDAPS sa halip na LDAP.',
      items: [
        { id: 'req-ssh', short: 'Secure CLI', label: 'Requirement 1: Administrators need an encrypted command-line session to routers and switches.', right: 'SSH, TCP 22', wrong: ['Telnet, TCP 23', 'FTP, TCP 21', 'SMTP, TCP 25'], pos: 0 },
        { id: 'req-dns', short: 'Name lookups', label: 'Requirement 2: Clients must resolve hostnames to IP addresses.', right: 'DNS, UDP/TCP 53', wrong: ['DHCP, UDP 67/68', 'NTP, UDP 123', 'SNMP, UDP 161'], pos: 2 },
        { id: 'req-https', short: 'Secure web', label: 'Requirement 3: Customers must reach the web store over an encrypted connection.', right: 'HTTPS, TCP 443', wrong: ['HTTP, TCP 80', 'SMB, TCP 445', 'TFTP, UDP 69'], pos: 1 },
        { id: 'req-rdp', short: 'Remote desktop', label: 'Requirement 4: Support staff need graphical remote access to Windows servers.', right: 'RDP, TCP 3389', wrong: ['SSH, TCP 22', 'LDAP, TCP 389', 'POP3, TCP 110'], pos: 3 },
        { id: 'req-smtp', short: 'Server mail', label: 'Requirement 5: Mail servers must relay messages to each other.', right: 'SMTP, TCP 25', wrong: ['IMAP, TCP 143', 'Syslog, UDP 514', 'SIP, TCP 5060'], pos: 1 },
        { id: 'req-ldaps', short: 'Secure directory', label: 'Requirement 6: Applications must query the directory with encryption.', right: 'LDAPS, TCP 636', wrong: ['LDAP, TCP 389', 'Kerberos, TCP 88', 'SNMP, UDP 162'], pos: 0 },
      ],
    }),

    matchLab({
      id: 'lab-interface-counters-diagnosis',
      moduleId: 13,
      title: 'Interface Status and Counters: Name the Cause',
      minutes: 14,
      scenario: 'You are reviewing switch output after a busy morning. Six interface symptoms need a most-likely cause before you touch anything.',
      requirement: 'Match each interface symptom to its most likely cause.',
      diagramLabel: 'Six switch interface symptoms',
      diagramTitle: 'Switch Interface Report',
      tools: 'No special tool required. Review Module 13, Lessons 13-2 and 13-14.',
      startingState: 'Six symptoms listed, nothing selected yet.',
      objectives: ['Interpret err-disabled, administratively down, CRC, giant, late collision, and power-deny indicators.', 'Choose the cause that best explains the single symptom.'],
      hints: [
        'Level 1: Decide whether the symptom is a state, a counter, or a power message.',
        'Level 2: Late collisions mean duplex; giants mean MTU; CRC means a physical problem; err-disabled means a protection feature fired.',
        'Level 3: Administratively down is a deliberate shutdown; power-deny is a PoE budget problem.',
      ],
      validation: 'Each symptom must be matched to the cause it most directly indicates.',
      expected: 'All six interface symptoms matched to their likely causes.',
      reflection: ['Which counter always needs a "clear and recheck" before you trust it?', 'Why must you fix the cause before re-enabling an err-disabled port?'],
      taglish: 'Ang pattern ng sintomas ang nagsasabi ng sanhi: late collision = duplex, giants = MTU, CRC = kable, err-disabled = protection feature.',
      items: [
        { id: 'sym-errdis', short: 'err-disabled', label: 'Symptom 1: A user port went err-disabled right after someone plugged in a small desktop switch.', right: 'BPDU Guard detected a BPDU on an edge port', wrong: ['DNS server failure', 'Expired DHCP lease', 'Wrong SSID'], pos: 1 },
        { id: 'sym-admin', short: 'admin down', label: 'Symptom 2: A port shows "administratively down".', right: 'Someone applied the shutdown command', wrong: ['A bad cable', 'A duplex mismatch', 'An MTU mismatch'], pos: 0 },
        { id: 'sym-late', short: 'late collisions', label: 'Symptom 3: A port that is up shows climbing late collisions.', right: 'Duplex mismatch between the two ends', wrong: ['An expired certificate', 'A wrong gateway', 'A full DHCP scope'], pos: 2 },
        { id: 'sym-giant', short: 'giants rising', label: 'Symptom 4: The giants counter is climbing on a port connected to a storage server.', right: 'Jumbo frames/MTU not matched along the path', wrong: ['A rogue DHCP server', 'A hidden SSID', 'A missing default route'], pos: 3 },
        { id: 'sym-crc', short: 'CRC errors', label: 'Symptom 5: One port shows steadily rising CRC errors; every other port is clean.', right: 'A damaged cable, connector, or interference on that link', wrong: ['A DNS cache problem', 'A VLAN name typo', 'A low UPS battery'], pos: 0 },
        { id: 'sym-poe', short: 'power-deny', label: 'Symptom 6: A new PoE camera will not power on and the port shows power-deny.', right: 'The switch PoE power budget is exhausted', wrong: ['A native VLAN mismatch', 'An ACL blocking ICMP', 'A hostname typo'], pos: 2 },
      ],
    }),

    matchLab({
      id: 'lab-security-device-selection',
      moduleId: 12,
      title: 'Security Design: Choose the Right Device or Feature',
      minutes: 14,
      scenario: 'A company is hardening its network. Six requirements have been written by the security manager and you must pick the device or feature that meets each.',
      requirement: 'Match each security requirement to the best device or feature.',
      diagramLabel: 'Six security requirements',
      diagramTitle: 'Security Requirements',
      tools: 'No special tool required. Review Module 12, Lessons 12-4, 12-10, 12-11, and 12-12.',
      startingState: 'Six requirements listed, nothing selected yet.',
      objectives: ['Match WAF, IPS, SIEM, 802.1X, reverse proxy, and screened subnet to their purposes.', 'Separate detection tools from prevention tools.'],
      hints: [
        'Level 1: Is the requirement about blocking, detecting, correlating, authenticating, hiding, or isolating?',
        'Level 2: IPS blocks inline; IDS only alerts; SIEM correlates logs; WAF understands web attacks.',
        'Level 3: 802.1X controls which devices may join a port; a screened subnet isolates public servers.',
      ],
      validation: 'Each requirement must match the device or feature built for that function.',
      expected: 'All six security requirements matched to the right control.',
      reflection: ['What is the difference between an IDS and an IPS in placement and action?', 'Why does a network firewall alone not stop SQL injection?'],
      taglish: 'Piliin ayon sa tungkulin: WAF para sa web attacks, IPS para humarang, SIEM para magdugtong ng logs, 802.1X para sa port access, DMZ para sa public servers.',
      items: [
        { id: 'sec-waf', short: 'SQL injection', label: 'Requirement 1: Block SQL injection and cross-site scripting aimed at the company website.', right: 'Web application firewall (WAF)', wrong: ['Stateless router ACL', 'Media converter', 'NTP server'], pos: 0 },
        { id: 'sec-ips', short: 'Block attacks', label: 'Requirement 2: Detect malicious traffic AND automatically drop it as it crosses the link.', right: 'Intrusion prevention system (IPS) placed inline', wrong: ['IDS connected to a SPAN port', 'Network tap alone', 'Syslog server'], pos: 2 },
        { id: 'sec-siem', short: 'Correlate logs', label: 'Requirement 3: Combine logs from firewalls, servers, and switches to spot an attack pattern.', right: 'SIEM', wrong: ['Load balancer', 'VPN concentrator', 'Hub'], pos: 1 },
        { id: 'sec-dot1x', short: 'Port access', label: 'Requirement 4: Only authenticated devices may use the wired switch ports.', right: '802.1X network access control', wrong: ['Port mirroring', 'Jumbo frames', 'QoS marking'], pos: 3 },
        { id: 'sec-proxy', short: 'Hide servers', label: 'Requirement 5: Hide the internal web servers from the internet and terminate TLS in front of them.', right: 'Reverse proxy', wrong: ['Forward proxy for users', 'DHCP relay', 'LACP bundle'], pos: 1 },
        { id: 'sec-dmz', short: 'Isolate public', label: 'Requirement 6: Public-facing servers must be separated from the internal LAN.', right: 'Screened subnet (DMZ)', wrong: ['Management VLAN', 'Guest Wi-Fi', 'Native VLAN'], pos: 0 },
      ],
    }),

    matchLab({
      id: 'lab-wifi-security-design',
      moduleId: 9,
      title: 'Wi-Fi Security Design: Right Protection for Each Scenario',
      minutes: 12,
      scenario: 'A consultant is reviewing Wi-Fi for six different environments. Pick the best security design for each.',
      requirement: 'Match each environment or need to the most appropriate Wi-Fi security design.',
      diagramLabel: 'Six Wi-Fi environments',
      diagramTitle: 'Wi-Fi Environments',
      tools: 'No special tool required. Review Module 9, Lessons 9-3 and 9-11, and Deep Dive 16-8.',
      startingState: 'Six scenarios listed, nothing selected yet.',
      objectives: ['Choose between WPA3-Personal, Enterprise 802.1X, guest isolation, OWE, and EAP-TLS.', 'Recognize WEP and WPS as unacceptable.'],
      hints: [
        'Level 1: Is it home, guest, staff, IoT, a public hotspot, or maximum security?',
        'Level 2: Enterprise uses 802.1X with RADIUS; personal uses a shared passphrase or SAE.',
        'Level 3: EAP-TLS uses certificates on both sides; OWE encrypts open networks without a password.',
      ],
      validation: 'Each scenario must receive the design that gives the right balance of security and practicality.',
      expected: 'All six Wi-Fi scenarios matched to a sound security design.',
      reflection: ['Why is a shared passphrase a weakness for a large staff network?', 'What do you gain by validating the RADIUS server certificate on clients?'],
      taglish: 'Ang bahay ay WPA3-Personal; ang kumpanya ay Enterprise na 802.1X; ang guest ay hiwalay na network; at huwag kailanman gumamit ng WEP o WPS.',
      items: [
        { id: 'wifi-home', short: 'Home', label: 'Scenario 1: A small home network with a few family devices.', right: 'WPA3-Personal with a strong passphrase', wrong: ['WEP', 'Open network with WPS', 'EAP-TLS with a private CA'], pos: 1 },
        { id: 'wifi-staff', short: 'Staff', label: 'Scenario 2: 500 employees who each need individual authentication and revocation.', right: 'WPA2/WPA3-Enterprise using 802.1X and RADIUS', wrong: ['One shared WPA2 passphrase', 'WEP', 'Hidden SSID only'], pos: 3 },
        { id: 'wifi-guest', short: 'Guests', label: 'Scenario 3: Visitors need internet access only, with no access to internal systems.', right: 'Separate guest SSID and VLAN with internet-only access', wrong: ['Put guests on the staff VLAN', 'Share the staff passphrase', 'Disable client isolation and firewall rules'], pos: 0 },
        { id: 'wifi-public', short: 'Hotspot', label: 'Scenario 4: A public cafe hotspot where users should not have to enter a password but traffic should still be encrypted.', right: 'WPA3 Enhanced Open (OWE)', wrong: ['WEP', 'Open network, no encryption', 'MAC filtering'], pos: 2 },
        { id: 'wifi-eaptls', short: 'Strongest', label: 'Scenario 5: A bank wants the strongest authentication for managed laptops.', right: '802.1X with EAP-TLS (client and server certificates)', wrong: ['PSK shared by the branch', 'PEAP with weak passwords and no server validation', 'WPS push button'], pos: 1 },
        { id: 'wifi-iot', short: 'IoT', label: 'Scenario 6: Older smart-building sensors that only support WPA2-AES.', right: 'Dedicated IoT SSID on an isolated VLAN with firewall rules', wrong: ['Join them to the staff VLAN', 'Enable WEP for compatibility', 'Leave the network open'], pos: 0 },
      ],
    }),

    matchLab({
      id: 'lab-dhcp-dns-triage',
      moduleId: 6,
      title: 'DHCP and DNS Triage: Symptom to Fix',
      minutes: 14,
      scenario: 'Six service tickets arrive in a row. For each one, choose the single most likely fix or next action.',
      requirement: 'Match each DHCP or DNS symptom to the best fix.',
      diagramLabel: 'Six DHCP and DNS tickets',
      diagramTitle: 'Service Desk Tickets',
      tools: 'No special tool required. Review Module 6, Lesson 6-7, and Deep Dives 16-5 and 16-6.',
      startingState: 'Six tickets listed, nothing selected yet.',
      objectives: ['Diagnose relay, rogue DHCP, scope, reservation, TTL, and name-resolution problems.', 'Pick the fix that addresses the actual cause.'],
      hints: [
        'Level 1: Does the client have an address at all, a wrong address, or no name resolution?',
        'Level 2: APIPA on one VLAN suggests a missing relay; a foreign gateway suggests a rogue DHCP server.',
        'Level 3: Old IPs after a DNS change are caching; IP conflicts come from statics inside the pool.',
      ],
      validation: 'Each ticket must be matched to the fix that targets its actual cause.',
      expected: 'All six tickets matched to the correct fix.',
      reflection: ['Which clue separates a missing relay from an exhausted scope?', 'Why should you lower a DNS TTL before a planned change?'],
      taglish: 'Hanapin ang tunay na sanhi: relay kung isang VLAN lang ang walang address, rogue server kung banyaga ang gateway, TTL kung luma pa ang sagot.',
      items: [
        { id: 'tkt-relay', short: 'APIPA, one VLAN', label: 'Ticket 1: Clients on the new VLAN 40 all show 169.254 addresses; other VLANs work and the DHCP server is healthy.', right: 'Add an ip helper-address (relay) on the VLAN 40 gateway interface', wrong: ['Increase the lease time', 'Change the DNS suffix', 'Replace the switch uplink cable'], pos: 2 },
        { id: 'tkt-rogue', short: 'Wrong gateway', label: 'Ticket 2: Some laptops receive a gateway of 192.168.0.1, but the company uses 10.20.0.0/24.', right: 'Find and remove the rogue DHCP server; enable DHCP snooping', wrong: ['Flush the DNS cache on the laptops', 'Increase the MTU', 'Change the SSID name'], pos: 0 },
        { id: 'tkt-dns', short: 'IP works, name fails', label: 'Ticket 3: A PC can ping 8.8.8.8 but cannot open any website by name.', right: 'Check the DNS server settings and resolver reachability', wrong: ['Replace the NIC', 'Add a VLAN to the trunk', 'Reset the spanning tree'], pos: 1 },
        { id: 'tkt-ttl', short: 'Old IP', label: 'Ticket 4: After a website was moved, some users still reach the old server for an hour.', right: 'Wait for the old record TTL to expire or flush caches; lower the TTL before future changes', wrong: ['Reboot the core router', 'Enable jumbo frames', 'Disable DHCP'], pos: 3 },
        { id: 'tkt-conflict', short: 'IP conflict', label: 'Ticket 5: A user gets repeated "IP address conflict" warnings; a printer was given a static address inside the DHCP range.', right: 'Exclude the static address from the pool or reserve it by MAC address', wrong: ['Shorten the DNS TTL', 'Change the default gateway', 'Replace the printer cable'], pos: 0 },
        { id: 'tkt-time', short: 'Cert expired, one PC', label: 'Ticket 6: Only one workstation reports "certificate expired" for sites that work everywhere else.', right: 'Correct the workstation date, time, and time sync (NTP)', wrong: ['Reissue the web server certificate', 'Increase the DHCP lease', 'Add a route to the firewall'], pos: 2 },
      ],
    }),

    matchLab({
      id: 'lab-troubleshooting-approach',
      moduleId: 13,
      title: 'Troubleshooting Methodology: Pick the Right Step or Approach',
      minutes: 14,
      scenario: 'Six on-call situations test whether you apply the methodology correctly: the right step at the right time, and the right approach for the problem.',
      requirement: 'Match each situation to the step or approach the methodology calls for.',
      diagramLabel: 'Six troubleshooting situations',
      diagramTitle: 'On-Call Situations',
      tools: 'No special tool required. Review Module 13, Lessons 13-1 and 13-13.',
      startingState: 'Six situations listed, nothing selected yet.',
      objectives: ['Apply the seven-step methodology and its sub-steps.', 'Choose bottom-up, top-down, divide and conquer, or escalation appropriately.'],
      hints: [
        'Level 1: Which step of the seven are you in: identify, theory, test, plan, implement, verify, or document?',
        'Level 2: Duplicate the problem and ask what changed during Identify; confirm theories before planning.',
        'Level 3: A failed theory means a new theory or escalation; separate problems get handled individually.',
      ],
      validation: 'Each situation must be matched to the action that the methodology requires at that point.',
      expected: 'All six situations matched to the correct step or approach.',
      reflection: ['Why change only one thing at a time?', 'When is escalation the right move rather than a failure?'],
      taglish: 'Sundin ang pagkakasunod-sunod: tukuyin, theory, test, plano, ipatupad, verify, document. Huwag laktawan ang test.',
      items: [
        { id: 'm-identify', short: 'Reported issue', label: 'Situation 1: A user reports "the system is slow" with no other detail.', right: 'Gather information, question the user, and try to duplicate the problem', wrong: ['Replace the user\'s switch port', 'Reboot all servers', 'Implement a QoS policy'], pos: 0 },
        { id: 'm-changed', short: 'Sudden failure', label: 'Situation 2: A service that worked yesterday has failed this morning across one department.', right: 'Determine what has changed (recent changes, updates, moves)', wrong: ['Close the ticket as a user error', 'Order new hardware immediately', 'Rewrite the firewall policy'], pos: 3 },
        { id: 'm-ping', short: 'No connectivity', label: 'Situation 3: A PC has no connectivity and you want to split the problem quickly by testing the middle layer.', right: 'Divide and conquer: ping the destination IP and move up or down based on the result', wrong: ['Top-down: reinstall the browser first', 'Replace the NIC without testing', 'Document and close'], pos: 1 },
        { id: 'm-failed', short: 'Test failed', label: 'Situation 4: You tested your theory and the result did not confirm it.', right: 'Establish a new theory or escalate', wrong: ['Implement the fix anyway', 'Skip to documentation', 'Blame the user'], pos: 2 },
        { id: 'm-three', short: 'Three tickets', label: 'Situation 5: Three unrelated complaints arrive at the same time.', right: 'Approach each problem individually, while watching for a common cause', wrong: ['Assume one cause and ignore two', 'Reboot everything at once', 'Wait for users to resolve them'], pos: 0 },
        { id: 'm-verify', short: 'Fix applied', label: 'Situation 6: The fix has been applied and the user says "I think it works".', right: 'Verify full system functionality and implement preventive measures, then document', wrong: ['Close the ticket without testing', 'Make another unrelated change', 'Delete the logs'], pos: 3 },
      ],
    }),
  ]);
}(window.NetReady));
