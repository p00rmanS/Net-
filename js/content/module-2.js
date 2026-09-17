/**
 * content/module-2.js — Module 2: OSI and TCP/IP Models
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  NetReady.LESSONS['2-1'] = {
    id: '2-1',
    moduleId: 2,
    slug: 'osi-seven-layers',
    title: 'The Seven OSI Layers',
    estMinutes: 14,
    outcomes: [
      'Recite all seven OSI layers in order, both top-down and bottom-up.',
      'Give one real function performed at each layer.',
      'Explain why the OSI model is a reference model, not something literally implemented as seven separate pieces of software.',
    ],
    whyItMatters:
      'The OSI model is the shared vocabulary every network professional uses to describe "where" a problem lives. Saying "it\'s a Layer 3 issue" instantly tells a coworker to check IP addressing and routing, not cabling.',
    simpleEnglish:
      'The OSI (Open Systems Interconnection) model breaks networking into seven conceptual layers, each responsible for a specific job, from the physical cable at the bottom to the application the user sees at the top: Physical, Data Link, Network, Transport, Session, Presentation, Application.',
    taglish:
      'Ang OSI model ay parang restaurant kitchen na may pitong estasyon, bawat estasyon may sariling trabaho bago makarating ang pagkain (data) sa customer (user). Hindi ito literal na "pitong hiwalay na software" — ito ay paraan lang para intindihin at pag-usapan natin kung saang bahagi ng proseso maaaring magkaroon ng problema.',
    analogy: {
      title: 'Restaurant kitchen, mula sa dapur hanggang sa customer',
      text:
        'Layer 1 (Physical) = ang mismong kusina at kagamitan — kalan, kawali (cables, connectors, signals). Layer 2 (Data Link) = paglagay ng order sa tamang tray papunta sa tamang table sa loob mismo ng restaurant (MAC addresses, local delivery). Layer 3 (Network) = pagpili ng ruta papunta sa ibang branch ng restaurant sa ibang lungsod (IP addressing, routing). Layer 4 (Transport) = pagsisiguro na kumpleto at tama ang inorder — parang waiter na nagcocompare ng order slip (TCP reliability, UDP speed). Layer 5 (Session) = ang buong pag-uusap mula sa pag-upo hanggang sa pag-alis ng customer (session start/end). Layer 6 (Presentation) = pag-translate ng menu sa wika ng customer at pag-ayos ng presentation ng pagkain (formatting, encryption). Layer 7 (Application) = ang mismong karanasan ng customer sa pag-order (the app the user actually uses, like a browser or email client).',
    },
    howItWorks: [
      'Layer 1 - Physical: raw bits over cables, fiber, or radio waves. Deals with voltages, connectors, and signaling.',
      'Layer 2 - Data Link: organizes bits into frames, uses MAC addresses, handles local delivery within one network segment (switches live here).',
      'Layer 3 - Network: handles logical addressing (IP) and routing between different networks (routers live here).',
      'Layer 4 - Transport: manages end-to-end delivery, reliability, and flow control (TCP and UDP live here).',
      'Layer 5 - Session: establishes, manages, and terminates communication sessions between applications.',
      'Layer 6 - Presentation: translates data format, handles encryption/decryption and compression so the application layer can understand it.',
      'Layer 7 - Application: the interface the user directly interacts with (browsers, email clients, file transfer apps).',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram osi-stack" role="img" aria-label="The seven OSI layers stacked from Application at top to Physical at bottom">
        <div class="osi-layer l7">7 &middot; Application</div>
        <div class="osi-layer l6">6 &middot; Presentation</div>
        <div class="osi-layer l5">5 &middot; Session</div>
        <div class="osi-layer l4">4 &middot; Transport</div>
        <div class="osi-layer l3">3 &middot; Network</div>
        <div class="osi-layer l2">2 &middot; Data Link</div>
        <div class="osi-layer l1">1 &middot; Physical</div>
      </div>`,
    },
    realWorldExample:
      'When a switch\'s port shows "link down," that is a Layer 1 or Layer 2 problem (cable or interface), not a Layer 3 IP addressing problem — knowing the model tells you exactly where to start troubleshooting.',
    proTips: [
      'Classic top-down mnemonic: "All People Seem To Need Data Processing" (Application, Presentation, Session, Transport, Network, Data Link, Physical).',
      'Classic bottom-up mnemonic: "Please Do Not Throw Sausage Pizza Away" (Physical, Data Link, Network, Transport, Session, Presentation, Application).',
    ],
    examAlert:
      'The exam frequently asks "at which layer does [device/protocol] operate?" — memorize the layer-to-device and layer-to-protocol mapping cold; it is one of the highest-yield topics on the whole exam.',
    beginnerMistakes: [
      'Trying to memorize the layer numbers without understanding what job each layer actually performs.',
      'Assuming every real-world protocol maps to exactly one clean OSI layer (some, like SSL/TLS, blur across layers in practice).',
      'Mixing up Layer 2 (Data Link, local MAC-based delivery) with Layer 3 (Network, IP-based routing between networks).',
    ],
    keyTerms: [
      { term: 'OSI Model', def: 'Open Systems Interconnection model — a seven-layer conceptual framework describing how network communication functions are organized.' },
      { term: 'Reference model', def: 'A conceptual framework used for understanding and discussing systems, not a literal, rigid implementation.' },
      { term: 'PDU (Protocol Data Unit)', def: 'The name for the unit of data at a specific layer (e.g., frame at Layer 2, packet at Layer 3).' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Which OSI layer is responsible for logical addressing and routing between different networks?',
        options: ['Layer 2 - Data Link', 'Layer 3 - Network', 'Layer 4 - Transport', 'Layer 7 - Application'],
        correct: 1,
        explanation: 'The Network layer (Layer 3) handles IP addressing and routing decisions between networks.',
      },
      {
        prompt: 'A switch primarily operates at which OSI layer?',
        options: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 4'],
        correct: 1,
        explanation: 'Switches forward frames using MAC addresses, which is Data Link layer (Layer 2) functionality.',
      },
      {
        prompt: 'Why is the OSI model called a "reference model"?',
        options: [
          'Because it is only used for referencing old technology.',
          'Because it is a conceptual framework for discussion and troubleshooting, not a literal seven-piece software stack.',
          'Because only Cisco devices follow it.',
          'Because it replaces the need for the TCP/IP model.',
        ],
        correct: 1,
        explanation: 'OSI is a conceptual, vendor-neutral tool for understanding and communicating about network functions, not a rigid literal implementation.',
      },
    ],
    miniScenario: {
      prompt: 'A coworker says, "The issue is at Layer 1."',
      task: 'Explain in one sentence what kind of problem they most likely mean, and give one example of a Layer 1 issue.',
    },
    recap:
      'The OSI model has seven layers: Physical, Data Link, Network, Transport, Session, Presentation, Application. It is a shared reference framework for discussing and troubleshooting network functions, not a literal seven-part implementation.',
    classroomAnswer:
      '"OSI gives everyone a shared way to say exactly where in the process a problem lives — from raw cables at Layer 1 up to the app the user sees at Layer 7."',
  };

  NetReady.LESSONS['2-2'] = {
    id: '2-2',
    moduleId: 2,
    slug: 'tcp-ip-model-mapping',
    title: 'TCP/IP Model and Mapping to OSI',
    estMinutes: 10,
    outcomes: [
      'Name the four layers of the TCP/IP model.',
      'Map each TCP/IP layer to its corresponding OSI layer(s).',
      'Explain why the TCP/IP model is the one actually implemented on the real internet.',
    ],
    whyItMatters:
      'While OSI is the teaching and troubleshooting reference, TCP/IP is the model actually running underneath the internet. Network+ expects you to move fluently between both.',
    simpleEnglish:
      'The TCP/IP model has four layers: Network Access (or Link), Internet, Transport, and Application. It combines several OSI layers into broader categories. The Internet layer roughly matches OSI Layer 3, and the TCP/IP Transport layer matches OSI Layer 4. The TCP/IP Application layer combines OSI Layers 5, 6, and 7.',
    taglish:
      'Ang TCP/IP model parang "simplified version" ng OSI — mas kaunting layers pero pareho lang naman ang concept. Apat lang ang layers: Network Access, Internet, Transport, at Application. Dito rin talaga "totoong" gumagana ang internet — ang OSI mas ginagamit natin bilang teaching tool at common language, pero ang TCP/IP ang aktwal na blueprint ng modern networking.',
    analogy: {
      title: 'Buod ng recipe book',
      text:
        'Kung ang OSI ay isang detalyadong recipe book na may pitong hakbang, ang TCP/IP naman ay parang "quick summary card" na may apat na hakbang lang pero pareho pa rin ang resulta. Minsan pinagsasama ng summary card yung ilang steps sa isa, tulad ng pagsasama ng Session, Presentation, at Application sa isang "Application" layer na lang sa TCP/IP.',
    },
    howItWorks: [
      'TCP/IP Network Access (Link) layer combines OSI Physical and Data Link (Layers 1-2).',
      'TCP/IP Internet layer matches OSI Network (Layer 3) — this is where IP addressing and routing happen.',
      'TCP/IP Transport layer matches OSI Transport (Layer 4) — TCP and UDP live here in both models.',
      'TCP/IP Application layer combines OSI Session, Presentation, and Application (Layers 5-7).',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram model-map" role="img" aria-label="Side by side mapping of OSI seven layers to TCP/IP four layers">
        <div class="map-col">
          <div class="osi-layer l7">7 Application</div>
          <div class="osi-layer l6">6 Presentation</div>
          <div class="osi-layer l5">5 Session</div>
          <div class="osi-layer l4">4 Transport</div>
          <div class="osi-layer l3">3 Network</div>
          <div class="osi-layer l2">2 Data Link</div>
          <div class="osi-layer l1">1 Physical</div>
        </div>
        <div class="map-col">
          <div class="tcp-layer span3">Application</div>
          <div class="tcp-layer span1">Transport</div>
          <div class="tcp-layer span1">Internet</div>
          <div class="tcp-layer span2">Network Access</div>
        </div>
      </div>`,
    },
    realWorldExample:
      'When engineers configure real devices, they talk about "the IP layer" (TCP/IP Internet layer) far more often than "the OSI Network layer" — but on the exam, both phrasings must be recognized as equivalent.',
    proTips: [
      'If a question mixes OSI and TCP/IP terms, first identify which model it is using, then translate mentally before answering.',
      'Remember TCP/IP has 4 layers, OSI has 7 — an easy elimination trick on ambiguous questions.',
    ],
    examAlert:
      'Do not confuse "TCP/IP model" (the 4-layer architecture) with "TCP/IP protocol suite" (the actual collection of protocols like TCP, IP, UDP, HTTP). The exam may reference both terms.',
    beginnerMistakes: [
      'Assuming TCP/IP and OSI are competing, contradictory models instead of complementary descriptions of the same reality.',
      'Forgetting that TCP/IP\'s Application layer covers what OSI splits into three separate layers.',
      'Mixing up the layer count (4 vs 7) when asked to recall directly.',
    ],
    keyTerms: [
      { term: 'TCP/IP Model', def: 'A four-layer networking model (Network Access, Internet, Transport, Application) that reflects how the modern internet is actually implemented.' },
      { term: 'Internet layer', def: 'The TCP/IP layer responsible for logical addressing and routing, corresponding to OSI Layer 3.' },
      { term: 'Network Access layer', def: 'The TCP/IP layer combining physical transmission and local frame delivery, corresponding to OSI Layers 1-2.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'How many layers does the TCP/IP model have?',
        options: ['Three', 'Four', 'Five', 'Seven'],
        correct: 1,
        explanation: 'The TCP/IP model has four layers: Network Access, Internet, Transport, and Application.',
      },
      {
        prompt: 'The TCP/IP Application layer corresponds to which OSI layers?',
        options: ['Layers 1-2', 'Layer 3 only', 'Layer 4 only', 'Layers 5, 6, and 7'],
        correct: 3,
        explanation: 'TCP/IP\'s single Application layer absorbs OSI\'s Session, Presentation, and Application layers.',
      },
      {
        prompt: 'Which statement correctly compares the two models?',
        options: [
          'OSI and TCP/IP describe completely unrelated systems.',
          'TCP/IP is a simplified, 4-layer model that reflects the real internet; OSI is a detailed 7-layer teaching/reference model.',
          'TCP/IP has more layers than OSI.',
          'OSI is only used for wireless networks.',
        ],
        correct: 1,
        explanation: 'Both describe the same underlying concepts; TCP/IP is the practically-implemented, condensed version.',
      },
    ],
    miniScenario: {
      prompt: 'A junior technician says "IP addressing happens at the Internet layer" and a classmate insists "no, it\'s the Network layer."',
      task: 'Explain in one sentence why both technicians are correct.',
    },
    recap:
      'TCP/IP has four layers (Network Access, Internet, Transport, Application) that map onto OSI\'s seven. TCP/IP is what actually runs the internet; OSI remains the richer teaching and troubleshooting reference.',
    classroomAnswer:
      '"They\'re both right — Internet layer in TCP/IP and Network layer in OSI are the same job, just different names in different models."',
  };

  NetReady.LESSONS['2-3'] = {
    id: '2-3',
    moduleId: 2,
    slug: 'devices-protocols-per-layer',
    title: 'Devices and Protocols at Each Layer',
    estMinutes: 13,
    outcomes: [
      'Assign common network devices to their correct OSI layer.',
      'Assign common protocols to their correct OSI layer.',
      'Use layer knowledge to narrow down where in a network problem might live.',
    ],
    whyItMatters:
      'Layer-by-layer troubleshooting is only useful once you know which devices and protocols actually belong to each layer — this lesson turns the abstract model into a practical checklist.',
    simpleEnglish:
      'Different devices and protocols are associated with different OSI layers based on the job they do. Hubs and cables work at Layer 1. Switches and bridges work at Layer 2. Routers work at Layer 3. Firewalls can operate at multiple layers depending on type. Protocols like HTTP, DNS, and SMTP are Application layer; TCP and UDP are Transport layer; IP is Network layer; Ethernet is Data Link layer.',
    taglish:
      'Bawat device o protocol, may "trabaho" sa specific layer. Kapag alam mo yan, mas mabilis mong ma-narrow down kung saan nanggagaling ang problema. Halimbawa, kung hindi nag-a-assign ng IP address, hindi mo pupuntahan yung switch (Layer 2) — puproblemahin mo yung DHCP server o configuration sa Layer 3/Application.',
    analogy: {
      title: 'Mga tauhan sa kusina ayon sa estasyon',
      text:
        'Sa restaurant kitchen analogy natin, ang hub/cable ay parang mismong kagamitan sa kusina (Layer 1). Ang switch ay parang waiter na naghahatid papunta sa tamang table gamit ang table number (MAC address, Layer 2). Ang router ay parang delivery rider na nagpapadala papunta sa ibang branch gamit ang address (IP, Layer 3). Ang application (HTTP, DNS, SMTP) ay parang mismong menu at order na hinihiling ng customer (Layer 7).',
    },
    howItWorks: [
      'Layer 1 devices: hubs, repeaters, cables, transceivers — they move raw signals without understanding addresses.',
      'Layer 2 devices: switches, bridges, wireless access points (for client association) — they use MAC addresses to forward frames.',
      'Layer 3 devices: routers, Layer 3 switches — they use IP addresses to forward packets between networks.',
      'Layer 4-7 devices: many modern firewalls, load balancers, and proxies inspect Transport and Application layer data to make smarter decisions.',
      'Protocols map similarly: Ethernet/Wi-Fi (Layer 2), IP/ICMP (Layer 3), TCP/UDP (Layer 4), HTTP/HTTPS/DNS/DHCP/FTP/SMTP (Layer 7).',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Layer</th><th>Example Devices</th><th>Example Protocols</th></tr></thead>
        <tbody>
          <tr><td>7 Application</td><td>-</td><td>HTTP, HTTPS, DNS, SMTP, FTP</td></tr>
          <tr><td>4 Transport</td><td>-</td><td>TCP, UDP</td></tr>
          <tr><td>3 Network</td><td>Router, Layer 3 switch</td><td>IP, ICMP</td></tr>
          <tr><td>2 Data Link</td><td>Switch, bridge, AP (bridging)</td><td>Ethernet, Wi-Fi (802.11)</td></tr>
          <tr><td>1 Physical</td><td>Hub, repeater, cabling</td><td>-</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A next-generation firewall inspecting the actual website domain name inside HTTPS traffic (not just IP addresses) is operating at the Application layer for that function, even though it also handles Layer 3/4 filtering.',
    proTips: [
      'Build your own flashcard deck (or use this platform\'s built-in one) purely for device-to-layer and protocol-to-layer pairs — this is pure memorization that pays off fast.',
      'When troubleshooting, work from Layer 1 upward: check physical connectivity first, since a Layer 1 failure will masquerade as every higher-layer symptom.',
    ],
    examAlert:
      'Watch for questions describing a "Layer 3 switch" — this is a real device category (a switch with routing capability) and is intentionally used to test whether you understand that device categories are not always locked to one layer.',
    beginnerMistakes: [
      'Assuming all switches are strictly Layer 2 (Layer 3 switches exist and route between VLANs).',
      'Forgetting ICMP (used by ping) is a Layer 3 protocol, not Layer 4.',
      'Mixing up which protocols are TCP-based versus UDP-based when discussing the Transport layer.',
    ],
    keyTerms: [
      { term: 'Hub', def: 'A basic Layer 1 device that repeats electrical signals to all ports without understanding addresses.' },
      { term: 'Bridge', def: 'A Layer 2 device that forwards frames between two network segments based on MAC addresses.' },
      { term: 'Layer 3 switch', def: 'A switch capable of routing between VLANs/networks using IP addresses, blending Layer 2 and Layer 3 functions.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Which device makes forwarding decisions based on IP addresses?',
        options: ['Hub', 'Switch', 'Router', 'Repeater'],
        correct: 2,
        explanation: 'Routers forward packets based on IP addresses, which is Layer 3 functionality.',
      },
      {
        prompt: 'ICMP, the protocol used by the ping command, operates at which layer?',
        options: ['Layer 2', 'Layer 3', 'Layer 4', 'Layer 7'],
        correct: 1,
        explanation: 'ICMP is a Network layer (Layer 3) protocol, working alongside IP.',
      },
      {
        prompt: 'A "Layer 3 switch" is best described as:',
        options: [
          'A switch that only works at Layer 1.',
          'A switch with added routing capability, blending Layer 2 and Layer 3 functions.',
          'A router with no switching capability.',
          'A device that does not exist in real networks.',
        ],
        correct: 1,
        explanation: 'Layer 3 switches combine traditional Layer 2 switching with IP routing between VLANs.',
      },
    ],
    miniScenario: {
      prompt: 'Two devices on the same switch cannot reach a website, but they can ping each other successfully.',
      task: 'Using the layer table, name at least two layers/protocols you would check next, and explain your reasoning.',
    },
    recap:
      'Devices and protocols map to specific OSI layers: hubs/cabling (L1), switches/Ethernet (L2), routers/IP (L3), TCP/UDP (L4), and application protocols like HTTP/DNS (L7). Some devices, like Layer 3 switches, blend functions across layers.',
    classroomAnswer:
      '"Once I know which layer a device or protocol lives at, I know exactly what kind of problem it can and can\'t cause — that\'s the whole point of memorizing this table."',
  };

  NetReady.LESSONS['2-4'] = {
    id: '2-4',
    moduleId: 2,
    slug: 'what-happens-when-i-open-a-website',
    title: '"What Happens When I Open a Website?" — Layer-by-Layer Walkthrough',
    estMinutes: 15,
    outcomes: [
      'Trace the full journey of a web request from browser to server and back through every OSI layer.',
      'Identify which layer is responsible for each step of that journey.',
      'Apply this walkthrough as a troubleshooting checklist for "the website won\'t load" complaints.',
    ],
    whyItMatters:
      'This is the single most common interview and exam scenario question in networking. Being able to narrate this story fluently proves you actually understand the model instead of memorizing it.',
    simpleEnglish:
      'Opening a website triggers a chain reaction through every layer: the browser (Application) builds an HTTP request, DNS resolves the domain to an IP address, TCP (Transport) establishes a reliable connection, IP (Network) figures out the path, Ethernet/Wi-Fi (Data Link) delivers it across the local network, and the Physical layer actually transmits the signal. The server processes the request and everything happens again in reverse to send the page back.',
    taglish:
      'Kapag nag-type ka ng website sa browser, parang nag-order ka sa isang malaking restaurant chain. Una, tinatanong mo muna kung saan yung branch (DNS lookup). Pagkatapos, nagpapadala ka ng order (HTTP request) gamit ang reliable delivery service (TCP handshake). Yung order na yun, dinadala papunta sa tamang address (IP routing) hanggang sa mismong kusina (server). Doon, inihahanda ang sagot (webpage), at ibinabalik ang parehong proseso papunta sa\'yo.',
    analogy: {
      title: 'Pag-order mula sa isang malayong branch',
      text:
        'Isipin mo gustong-gusto mong order ng pagkain mula sa isang paboritong restaurant sa ibang lungsod. Una, tatanungin mo muna ang directory kung saan yung eksaktong address ng branch nila (DNS). Pagkatapos, tatawag ka para kumpirmahin kung bukas at handa silang tumanggap ng order (TCP three-way handshake). Saka mo lang ibibigay ang buong order mo (HTTP request), dadalhin ito papunta sa tamang address gamit ang delivery route (IP routing sa network), at sa huli, aktwal na darating ang courier gamit ang tunay na sasakyan (physical transmission).',
    },
    howItWorks: [
      '1. Application (L7): The browser builds an HTTP/HTTPS GET request for the requested page.',
      '2. Application (L7) - DNS: If the browser does not already know the site\'s IP address, it asks a DNS server to resolve the domain name into an IP address.',
      '3. Transport (L4): The browser\'s device performs a TCP three-way handshake (SYN, SYN-ACK, ACK) with the server\'s IP to establish a reliable connection (or uses UDP/QUIC for some modern HTTPS traffic).',
      '4. Network (L3): IP determines the logical path; if the server is on a different network, routers along the way forward the packet hop by hop using routing tables.',
      '5. Data Link (L2): On each local network segment, Ethernet or Wi-Fi frames carry the packet using MAC addresses, switch by switch.',
      '6. Physical (L1): The frame becomes electrical signals, light pulses, or radio waves and is physically transmitted across cabling or air.',
      '7. The server receives the transmission and de-encapsulates it back up through the same layers, then its Application layer (web server software) builds an HTTP response.',
      '8. The response travels back down through the server\'s layers and back up through the client\'s layers, and the browser renders the page.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram request-journey" role="img" aria-label="Step by step journey of a web request from browser through DNS, TCP handshake, routing, and back">
        <ol class="journey-list">
          <li><strong>Browser</strong> builds HTTP request (App layer)</li>
          <li><strong>DNS</strong> resolves domain to IP address</li>
          <li><strong>TCP handshake</strong> establishes connection (Transport)</li>
          <li><strong>IP routing</strong> finds the path (Network)</li>
          <li><strong>Ethernet/Wi-Fi</strong> delivers locally hop by hop (Data Link)</li>
          <li><strong>Signal</strong> travels the physical medium (Physical)</li>
          <li><strong>Server</strong> responds, reversing the whole journey back</li>
        </ol>
      </div>`,
    },
    realWorldExample:
      'If DNS is broken but the network itself is fine, a user can often still reach a website by typing its raw IP address directly — proof that the failure was specifically at the DNS/Application step, not at lower layers.',
    proTips: [
      'When troubleshooting "the site won\'t load," walk this exact sequence: can you resolve DNS? Can you reach the IP directly? Can you complete a TCP connection (e.g., via telnet/curl to the port)? Each step isolates a different layer.',
      'This walkthrough is one of the most common "explain it to me" interview questions for entry-level IT roles — practice saying it out loud, not just reading it.',
    ],
    examAlert:
      'Expect scenario-based questions that describe symptoms (e.g., "can ping the IP but the website name does not resolve") and ask you to identify the broken component — that phrasing is testing this exact end-to-end model.',
    beginnerMistakes: [
      'Jumping straight to "the internet is down" instead of isolating which specific step in the chain is failing.',
      'Forgetting DNS resolution happens before the TCP handshake, not after.',
      'Assuming a successful ping means everything is fine — ping only tests Layer 3 reachability, not DNS, TCP, or the application itself.',
    ],
    keyTerms: [
      { term: 'DNS resolution', def: 'The process of translating a human-readable domain name into an IP address.' },
      { term: 'TCP three-way handshake', def: 'The SYN, SYN-ACK, ACK exchange that establishes a reliable TCP connection before data transfer begins.' },
      { term: 'Hop', def: 'One leg of a packet\'s journey across a single router along the path to its destination.' },
    ],
    commands: [
      { os: 'Windows', cmd: 'nslookup example.com', desc: 'Manually test DNS resolution for a domain.' },
      { os: 'Windows', cmd: 'tracert example.com', desc: 'Show each router hop along the path to the destination.' },
      { os: 'Linux/macOS', cmd: 'dig example.com', desc: 'Detailed DNS resolution query and response.' },
      { os: 'Linux/macOS', cmd: 'traceroute example.com', desc: 'Show each router hop along the path to the destination.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the correct order of these steps when opening a website?',
        options: [
          'TCP handshake, DNS resolution, HTTP request, IP routing',
          'DNS resolution, TCP handshake, HTTP request, IP routing (per hop as needed)',
          'HTTP request, IP routing, DNS resolution, TCP handshake',
          'IP routing, HTTP request, TCP handshake, DNS resolution',
        ],
        correct: 1,
        explanation: 'The browser must resolve the domain to an IP first, then establish a TCP connection, then send the HTTP request — with IP routing occurring at each hop throughout.',
      },
      {
        prompt: 'A user can successfully ping a website\'s IP address directly, but typing the domain name fails. What is most likely broken?',
        options: ['The physical cable', 'DNS resolution', 'The TCP handshake', 'The Ethernet switch'],
        correct: 1,
        explanation: 'Since the IP address works (proving Layers 1-3 are fine), the failure is isolated to the DNS/Application layer step.',
      },
      {
        prompt: 'What does a successful ping actually confirm?',
        options: [
          'The website\'s application is fully working.',
          'DNS is functioning correctly.',
          'Basic Layer 3 (IP) reachability to the destination.',
          'The TCP handshake has completed.',
        ],
        correct: 2,
        explanation: 'Ping uses ICMP at Layer 3 — it only confirms IP-level reachability, not DNS, TCP, or application health.',
      },
    ],
    miniScenario: {
      prompt: 'A user reports: "I can ping google.com by IP, but the browser says the page can\'t be reached."',
      task: 'Using this lesson\'s step-by-step model, list the next TWO things you would check, in order, and explain why.',
    },
    recap:
      'Opening a website walks through every OSI layer: DNS resolution and the HTTP request (Application), the TCP handshake (Transport), IP routing (Network), local frame delivery (Data Link), and physical transmission (Physical) — then the whole thing reverses for the response.',
    classroomAnswer:
      '"I trace it step by step — DNS, then TCP handshake, then routing, then the local link — because each step tells me exactly which layer actually broke."',
  };
}(window.NetReady));
