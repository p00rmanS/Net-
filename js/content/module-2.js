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
      title: 'Parehong restaurant, pero mas kaunting departamento na lang sa org chart',
      text:
        'Kung ang OSI ay isang detalyadong recipe book na may pitong hakbang, ang TCP/IP naman ay parang "quick summary card" na may apat na hakbang lang pero pareho pa rin ang resulta. Balikan natin ang parehong restaurant mula sa Lesson 2-1, pero sa pagkakataong ito, isipin mo na lang bilang apat na malalaking departamento sa org chart: "Kitchen & Local Delivery" ang pinagsamang Physical at Data Link (kalan, kawali, at paghahatid sa tamang table sa loob mismo ng restaurant), "Courier Service" ang Network/Internet layer (pagpili ng ruta papunta sa ibang branch), "Order Assurance" ang Transport layer (yung waiter na nagsisiguro kumpletong dumating ang order), at "Customer Experience" na iisang malaking departamento na lang para sa dating tatlong hiwalay na istasyon — Session, Presentation, at Application — dahil mula sa pag-upo ng customer, pagbasa ng menu, hanggang sa aktwal na pag-order, iisang karanasan naman ito sa mata ng management. Parehong restaurant, parehong trabaho — mas kaunti lang ang kahon sa org chart.',
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

  NetReady.LESSONS['2-5'] = NetReady.lesson(2, {
    id: '2-5',
    slug: 'encapsulation-and-decapsulation-in-detail',
    title: 'Encapsulation and Decapsulation in Detail: Headers, PDUs, and a Packet Followed Hop by Hop',
    minutes: 18,
    outcomes: [
      `Name the PDU at each OSI layer and list what each header contains.`,
      `Walk a packet down the sender's stack and up the receiver's stack.`,
      `Explain what changes and what stays the same at each router hop.`,
      `Calculate frame overhead and relate it to MTU and MSS.`,
    ],
    why: `The exam begins with the OSI model and explicitly lists encapsulation and decapsulation, the Ethernet, IP, and TCP/UDP headers, TCP flags, payload, and MTU. Everything else in networking (switching, routing, firewalls, troubleshooting) depends on knowing which header a device reads.`,
    simple: `Encapsulation is wrapping data in headers as it moves down the layers. The application hands data to the transport layer, which adds a TCP or UDP header (making a segment or datagram). The network layer adds an IP header (making a packet). The data link layer adds an Ethernet header and a trailer (making a frame). The physical layer sends bits. At the receiver the process reverses: decapsulation removes each header in turn, passing the contents up. Each device reads only the headers at its own layer: a switch reads the Ethernet header, a router reads the IP header, a firewall may read up to the TCP or application data. At every router the Ethernet header is removed and replaced, but the IP addresses stay the same from source to destination.`,
    taglish: `Ang encapsulation ay pagbabalot ng data ng header habang bumababa sa mga layer. Ibibigay ng application ang data sa transport layer na magdadagdag ng TCP o UDP header (segment o datagram). Magdadagdag ang network layer ng IP header (packet). Magdadagdag ang data link layer ng Ethernet header at trailer (frame). Ang physical layer ay nagpapadala ng bits. Sa receiver, baligtad: tinatanggal ang bawat header (decapsulation) at ipinapasa pataas. Ang bawat device ay binabasa lang ang header sa sarili niyang layer: switch ang Ethernet, router ang IP, firewall hanggang TCP o application. Sa bawat router, pinapalitan ang Ethernet header, pero hindi nagbabago ang IP address mula source hanggang destination.`,
    analogy: {
      title: 'Sulat sa loob ng sobre sa loob ng kahon',
      text: `Ang sulat mo (data) ay inilalagay sa sobre na may pangalan ng tatanggap (TCP/UDP header), tapos sa kahon na may address ng bahay (IP header), tapos ilalagay sa trak ng LBC na may tag ng sangay ng pagdadalhan (Ethernet header). Sa bawat sangay, papalitan ang trak at tag, pero hindi binubuksan ang kahon at sobre. Sa dulo, binubuksan ang bawat balot (decapsulation) hanggang makuha ang sulat.`,
    },
    steps: [
      `PDUs (protocol data units) by layer: Layers 5 to 7 data, Layer 4 segment (TCP) or datagram (UDP), Layer 3 packet, Layer 2 frame, Layer 1 bits.`,
      `TCP header (at least 20 bytes): source port, destination port, sequence number, acknowledgment number, flags (SYN, ACK, FIN, RST, PSH, URG), window size, checksum. UDP header is only 8 bytes: source port, destination port, length, checksum.`,
      `IP header (at least 20 bytes for IPv4): version, TTL, protocol number (6 TCP, 17 UDP, 1 ICMP, 47 GRE, 50 ESP, 51 AH, 89 OSPF), source IP, destination IP, header checksum, and fragmentation fields.`,
      `Ethernet frame: 14-byte header (destination MAC 6 bytes, source MAC 6 bytes, EtherType 2 bytes, for example 0x0800 for IPv4, 0x86DD for IPv6, 0x0806 for ARP) plus a 4-byte frame check sequence (FCS) trailer. An 802.1Q tag adds 4 bytes between the source MAC and EtherType.`,
      `Payload and MTU: the standard Ethernet payload limit (MTU) is 1500 bytes. The maximum frame is 1518 bytes (1522 with a VLAN tag): 14 + 1500 + 4 = 1518. For a TCP segment, the MSS is 1500 minus 20 (IP) minus 20 (TCP) = 1460 bytes of application data.`,
      `Sending: the application data goes down; TCP adds ports, IP adds addresses, and the NIC adds MAC addresses and the FCS. For a destination on another subnet, the destination MAC is the default gateway's MAC while the destination IP is the real server.`,
      `Switch: reads the destination MAC, forwards the frame, and does not change it. Router: decapsulates the frame, reads the destination IP, decrements TTL (and recalculates the checksum), looks up the route, and encapsulates the packet in a new frame with the next hop's MAC addresses.`,
      `Receiving: the NIC checks the destination MAC and the FCS (drops corrupt frames, which count as CRC errors), the IP layer checks the destination IP and protocol field, TCP or UDP uses the destination port to find the application, and the data is delivered.`,
      `Firewalls and NAT: a stateful firewall tracks TCP flags and ports; NAT rewrites IP addresses (and ports for PAT) in the IP and transport headers and fixes the checksums.`,
    ],
    deepDive: [
      {
        title: 'The headers, drawn out',
        code: `Ethernet frame (Layer 2)
+-----------+-----------+----------+-----------------------------+-----+
| Dest MAC  | Src MAC   | EtherType|       Payload (up to 1500)  | FCS |
|  6 bytes  |  6 bytes  | 2 bytes  |                             | 4 B |
+-----------+-----------+----------+-----------------------------+-----+
                                   |
                        IP packet (Layer 3)
                        +---------+---------+--------------------+
                        | IP hdr  | TCP hdr | Application data   |
                        | 20 B    | 20 B    | up to 1460 B (MSS) |
                        +---------+---------+--------------------+

IP header key fields:  version | TTL | protocol (6=TCP) | src IP | dst IP
TCP header key fields: src port | dst port | seq | ack | flags | window`,
        note: `Add it up: 14 + 20 + 20 + 1460 + 4 = 1518 bytes, the largest standard Ethernet frame.`,
      },
      {
        title: 'A web request followed hop by hop',
        text: `PC 192.168.1.10 (MAC AA:AA) requests a page from a web server at 203.0.113.80. The default gateway is 192.168.1.1 (MAC BB:BB). Watch which fields change at the router.`,
        code: `At the PC (before the router)
  Ethernet : dst MAC BB:BB (gateway)   src MAC AA:AA   type 0x0800
  IP       : src 192.168.1.10          dst 203.0.113.80  TTL 128  proto 6
  TCP      : src port 50412            dst port 443      flags SYN

At the router (after routing; next hop is the ISP router with MAC CC:CC)
  Ethernet : dst MAC CC:CC             src MAC DD:DD (router's WAN port)
  IP       : src 203.0.113.2*          dst 203.0.113.80  TTL 127  proto 6
  TCP      : src port 50412*           dst port 443      flags SYN
  (*after NAT/PAT the source IP and port are rewritten; without NAT they stay)`,
        note: `MAC addresses change at every Layer 3 hop; IP addresses stay end to end unless NAT rewrites them; TTL drops by 1 at each router; ports stay the same unless PAT rewrites them.`,
      },
      {
        title: 'Which device reads which layer?',
        code: `Device               Reads                         Typical decision
-------------------  ----------------------------  ------------------------------------
Hub / repeater       Nothing (signals)             Repeat bits to all ports
Switch               Ethernet header (dst MAC)     Forward to the port with that MAC
Router               IP header (dst IP, TTL)       Pick the next hop, rewrite Ethernet
Stateful firewall    IP + TCP/UDP (ports, flags)   Permit or deny the connection
Load balancer        TCP/UDP or HTTP (L4 or L7)    Choose a server for the session
NIC                  Ethernet header and FCS       Accept or discard the frame`,
      },
      {
        title: 'Decapsulation at the server, in order',
        code: `1. NIC receives bits and builds the frame; FCS check passes (otherwise it counts as a CRC error)
2. Destination MAC matches the NIC -> remove the Ethernet header and trailer
3. IP layer: destination IP is this server -> remove the IP header; protocol 6 means pass to TCP
4. TCP layer: check the sequence number, send an ACK; destination port 443 -> deliver to the web server process
5. Application receives the HTTP request data`,
        note: `A failure at any step produces a characteristic symptom: CRC errors (step 1), a silent drop on a wrong IP (3), a TCP reset from a closed port (4).`,
      },
    ],
    table: {
      label: 'Table of PDUs and headers by layer',
      head: ['OSI layer', 'PDU', 'Key header information', 'Device that reads it'],
      rows: [
        ['7 to 5 Application, Presentation, Session', 'Data', 'Protocol content (HTTP, DNS)', 'Proxy, WAF, application firewall'],
        ['4 Transport', 'Segment (TCP) / datagram (UDP)', 'Ports, sequence numbers, flags', 'Stateful firewall, load balancer'],
        ['3 Network', 'Packet', 'Source and destination IP, TTL, protocol', 'Router, Layer 3 switch'],
        ['2 Data Link', 'Frame', 'Source and destination MAC, EtherType, FCS', 'Switch, NIC'],
        ['1 Physical', 'Bits', 'Signals on the medium', 'Hub, repeater, cabling'],
      ],
      caption: 'Each layer adds its own header; each device reads its own layer.',
    },
    example: `A user cannot reach a server in another VLAN. A packet capture at the user's PC shows frames with the correct destination IP but the destination MAC set to the server's MAC instead of the gateway's. The PC's subnet mask is wrong (/16 instead of /24), so it believed the server was on its own subnet and ARPed for it directly instead of sending to the gateway. Fixing the mask makes the PC use the gateway's MAC, and the router can forward the packet.`,
    tips: [
      `Remember: MAC addresses are for the next hop, IP addresses are for the end-to-end destination.`,
      `A frame's FCS is checked at every hop; a bad FCS is dropped silently and shows up as a CRC error counter.`,
      `To go from MTU to MSS, subtract 40 bytes for IPv4 plus TCP (60 for IPv6 plus TCP).`,
    ],
    exam: `Know the PDU names, what each header contains, that routers rewrite the Ethernet header but not the IP addresses, that TTL decreases per hop, and the frame size arithmetic (1500 MTU, 1518 frame). Be able to map a TCP flag or header field to the symptom it explains.`,
    mistakes: [
      `Saying the destination MAC is the final server's MAC for an off-subnet destination.`,
      `Confusing a segment (Layer 4), a packet (Layer 3), and a frame (Layer 2).`,
      `Forgetting that the FCS trailer is part of the Ethernet frame size.`,
    ],
    terms: [
      { term: 'Encapsulation', def: `Adding a header (and sometimes a trailer) at each layer as data moves down the stack.` },
      { term: 'Decapsulation', def: `Removing headers layer by layer as data moves up the stack at the receiver.` },
      { term: 'PDU', def: `Protocol data unit: bits, frame, packet, segment or datagram, or data.` },
      { term: 'EtherType', def: `Frame field that says which protocol the payload carries, such as IPv4 or ARP.` },
      { term: 'FCS', def: `Frame check sequence, a trailer used to detect corrupted frames.` },
      { term: 'MTU / MSS', def: `Largest packet an interface can send / largest TCP payload per segment.` },
    ],
    checks: [
      {
        prompt: `A packet crosses a router. Which header field is rewritten by the router even without NAT?`,
        options: [`The destination MAC address (new frame for the next hop)`, `The source IP address`, `The destination port`, `The TCP sequence number`],
        correct: 0,
        explanation: `The router builds a new Ethernet frame for the next hop; the IP addresses and ports stay unchanged unless NAT is applied.`,
      },
      {
        prompt: `What is the largest standard Ethernet frame, including header and FCS, for a 1500-byte MTU?`,
        options: [`1500 bytes`, `1514 bytes`, `1518 bytes`, `9000 bytes`],
        correct: 2,
        explanation: `14 bytes of header plus 1500 bytes of payload plus 4 bytes of FCS equals 1518.`,
      },
      {
        prompt: `Which PDU name belongs to Layer 3?`,
        options: [`Frame`, `Segment`, `Packet`, `Bits`],
        correct: 2,
        explanation: `Layer 3 data is a packet; frames are Layer 2 and segments are Layer 4.`,
      },
    ],
    mini: {
      prompt: `A capture shows an Ethernet frame with EtherType 0x0806.`,
      task: `What protocol does the payload carry, and what does the sender want?`,
    },
    recap: `Data is wrapped with a TCP or UDP header, an IP header, and an Ethernet header and trailer on the way down, and unwrapped in reverse at the receiver. Switches read MACs, routers read IPs and rewrite the frame at each hop, firewalls read ports and flags, and the MTU and MSS arithmetic follows from the header sizes.`,
    classroom: `"Ang MAC ay para sa susunod na hakbang, ang IP ay para sa huling destinasyon."`,
  });

  NetReady.LESSONS['2-6'] = NetReady.lesson(2, {
    id: '2-6',
    slug: 'tcp-and-udp-internals-handshake-flags-windows-and-retransmission',
    title: 'TCP and UDP Internals: Handshake, Flags, Windows, and Retransmission',
    minutes: 16,
    outcomes: [
      `Walk through the TCP three-way handshake and connection teardown.`,
      `Name the TCP flags and what each does.`,
      `Explain sequence numbers, acknowledgments, and the sliding window.`,
      `Explain when UDP is a better choice than TCP.`,
    ],
    why: `Layer 4 behavior explains many symptoms: slow transfers, half-open connections, resets, and choppy voice. The exam expects you to know how TCP guarantees delivery and how UDP gives up guarantees for speed.`,
    simple: `TCP is like a phone call: you dial, the other side answers, you confirm, and then you talk while checking that every sentence was heard. UDP is like dropping postcards in a mailbox: fast and simple, with no confirmation. TCP numbers every byte, waits for acknowledgments, resends what is lost, and slows down when the network or the receiver is overloaded.`,
    taglish: `Ang TCP ay parang tawag sa telepono: tatawag, sasagot, magkukumpirmahan, saka mag-uusap habang tinitiyak na narinig ang bawat pangungusap. Ang UDP ay parang postcard na ihuhulog lang: mabilis, walang kumpirmasyon. Binibilang ng TCP ang bawat byte, naghihintay ng ACK, at nagpapadala ulit ng nawala.`,
    analogy: {
      title: 'Registered mail at postcard',
      text: `Ang TCP ay registered mail na may resibo: kapag walang resibo, ipadadala ulit. Ang UDP ay postcard: hindi mo alam kung dumating, pero mura at mabilis, tama para sa live na tawag kung saan walang silbi ang lumang mensahe.`,
    },
    steps: [
      `TCP is connection-oriented, reliable, and ordered. It uses sequence numbers, acknowledgments, flow control, and congestion control. UDP is connectionless and unreliable (best effort): no handshake, no retransmission, no ordering, and an 8-byte header compared with TCP's minimum of 20 bytes.`,
      `Three-way handshake: the client sends SYN with an initial sequence number (ISN), the server replies SYN-ACK with its own ISN and an acknowledgment of the client's ISN plus 1, and the client sends ACK. The connection is now ESTABLISHED. A server that has sent SYN-ACK and is waiting for the ACK is in SYN_RECEIVED (half-open).`,
      `TCP flags: SYN (synchronize, start), ACK (acknowledgment valid), FIN (finish, graceful close), RST (reset, abort immediately), PSH (push data to the application now), URG (urgent pointer valid). Nmap scans and firewalls use unusual flag combinations such as NULL (no flags), FIN, and Xmas (FIN, PSH, URG) to probe.`,
      `Teardown: each side closes its own direction with FIN and the other side acknowledges, so a normal close takes four steps (FIN, ACK, FIN, ACK). The side that closes first enters TIME_WAIT (about 30 to 120 seconds) so late packets are not mistaken for a new connection. RST ends a connection abruptly, for example when a client contacts a closed port.`,
      `Sequence and acknowledgment numbers: the sequence number identifies the first byte in a segment, and the acknowledgment number is the next byte the receiver expects. Missing numbers tell the receiver that data was lost, and out-of-order segments are reassembled before delivery to the application.`,
      `Retransmission: if the sender does not get an ACK before the retransmission timeout (RTO), or receives three duplicate ACKs (fast retransmit), it resends the segment. Frequent retransmits show packet loss or congestion.`,
      `Flow control with the sliding window: the receiver advertises a window size (how many bytes it can accept before sending an ACK). The sender may have that much data in flight. A zero window means the receiver is full and the sender must pause. Window scaling allows windows beyond 64 KB on fast, long links.`,
      `Congestion control: TCP starts slowly (slow start), grows the congestion window until loss occurs, then backs off (congestion avoidance, multiplicative decrease). This is why one lost packet on a high-latency link cuts the throughput sharply. The bandwidth-delay product (bandwidth multiplied by round-trip time) tells how much data must be in flight to fill a link.`,
      `MSS (maximum segment size) is the largest TCP payload, usually 1460 bytes on Ethernet (1500 MTU minus 20 IP and 20 TCP header bytes). It is negotiated in the handshake. A mismatch with path MTU causes fragmentation or black-hole problems.`,
      `UDP is chosen when speed and low delay matter more than perfect delivery or when the application handles reliability itself: DNS queries, DHCP, TFTP, SNMP, NTP, VoIP and video streams (RTP), online games, and QUIC (which builds reliability on top of UDP). A late voice packet is useless, so retransmitting it would make things worse.`,
    ],
    deepDive: [
      {
        title: 'A handshake and a close in a packet capture',
        text: `This capture shows a client at 10.1.1.25 opening a web connection, sending a request, and closing. Notice the acknowledgment values: each ACK is the sender's last sequence number plus the number of bytes it carries (SYN and FIN each count as one).`,
        code: `1  10.1.1.25:51514 -> 203.0.113.9:443   [SYN]      seq=1000
2  203.0.113.9:443   -> 10.1.1.25:51514 [SYN, ACK] seq=5000 ack=1001
3  10.1.1.25:51514 -> 203.0.113.9:443   [ACK]      seq=1001 ack=5001
4  10.1.1.25:51514 -> 203.0.113.9:443   [PSH, ACK] seq=1001 ack=5001 len=300
5  203.0.113.9:443   -> 10.1.1.25:51514 [ACK]      seq=5001 ack=1301
...
9  10.1.1.25:51514 -> 203.0.113.9:443   [FIN, ACK]
10 203.0.113.9:443   -> 10.1.1.25:51514 [ACK]
11 203.0.113.9:443   -> 10.1.1.25:51514 [FIN, ACK]
12 10.1.1.25:51514 -> 203.0.113.9:443   [ACK]        (client enters TIME_WAIT)`,
        note: `Packets 1 to 3 are the handshake. If you see only SYN packets with no replies, a firewall is dropping them. If you see SYN followed by RST, the port is closed.`,
      },
      {
        title: 'Why a long link needs a big window',
        text: `A 1 Gbps link with 100 ms round-trip time can hold 1,000,000,000 x 0.1 / 8 = 12.5 MB in flight. With the old 64 KB maximum window, a single connection could send only 65,535 bytes per round trip, which is about 5.2 Mbps. Window scaling (RFC 7323) lifts the limit so one transfer can fill the pipe.`,
        code: `BDP = bandwidth x RTT = 1 Gbps x 0.1 s = 100 Mb = 12.5 MB
Max throughput with 64 KB window = 65,535 B x 8 / 0.1 s = about 5.2 Mbps`,
      },
    ],
    table: {
      label: 'TCP compared with UDP',
      head: ['Feature', 'TCP', 'UDP'],
      rows: [
        ['Connection', 'Connection-oriented, handshake', 'Connectionless'],
        ['Reliability', 'Acknowledgments and retransmission', 'Best effort, none'],
        ['Ordering', 'Sequence numbers, reordered', 'Not guaranteed'],
        ['Header size', '20 bytes minimum', '8 bytes'],
        ['Flow and congestion control', 'Yes, sliding window', 'No'],
        ['Typical uses', 'Web, email, file transfer, SSH', 'DNS, DHCP, VoIP, video, games, NTP'],
      ],
      caption: 'TCP trades speed for reliability; UDP trades reliability for speed.',
    },
    example: `A branch office complains that file copies to the data center crawl at 6 Mbps on a 1 Gbps link, while pings look fine. A capture shows a small receive window and no window scaling because a firewall was stripping TCP options. After the firewall change, one transfer reaches several hundred megabits per second.`,
    tips: [
      `SYN, SYN-ACK, ACK. Memorize it, and remember FIN closes gracefully while RST aborts.`,
      `Many SYNs without completed handshakes point to a SYN flood or a firewall dropping replies.`,
      `Voice and video use UDP because a late packet is worse than a lost packet.`,
    ],
    exam: `Know the three-way handshake order, the TCP flags (SYN, ACK, FIN, RST, PSH, URG), that the window controls flow, that UDP is connectionless, and which services use UDP.`,
    mistakes: [
      `Believing UDP is always faster in practice. It only avoids overhead; it does not fix a congested path.`,
      `Treating RST as a normal close. It is an abrupt abort.`,
      `Forgetting that retransmissions and a shrinking window are signs of packet loss, not of a slow server.`,
    ],
    terms: [
      { term: 'Three-way handshake', def: `SYN, SYN-ACK, ACK exchange that opens a TCP connection.` },
      { term: 'Sequence number', def: `Counter that identifies the position of data bytes in a TCP stream.` },
      { term: 'Sliding window', def: `Flow control where the receiver advertises how much data it can accept.` },
      { term: 'RST', def: `TCP flag that aborts a connection immediately.` },
      { term: 'MSS', def: `Maximum segment size: the largest TCP payload in one segment.` },
      { term: 'TIME_WAIT', def: `State held by the closing side so late packets do not corrupt a new connection.` },
      { term: 'Bandwidth-delay product', def: `Bandwidth times round-trip time: the data needed in flight to fill a link.` },
    ],
    commands: [
      { os: 'Windows', cmd: 'netstat -an | find "SYN_RECEIVED"', desc: `Counts half-open connections that may indicate a SYN flood.` },
      { os: 'Linux', cmd: 'ss -tan state established', desc: `Lists established TCP connections.` },
      { os: 'Linux', cmd: 'sudo tcpdump -nn "tcp[tcpflags] & tcp-syn != 0"', desc: `Captures packets with the SYN flag set to watch connection attempts.` },
    ],
    checks: [
      {
        prompt: `What is the correct order of the TCP three-way handshake?`,
        options: [`SYN, ACK, SYN-ACK`, `SYN, SYN-ACK, ACK`, `ACK, SYN, FIN`, `SYN-ACK, SYN, ACK`],
        correct: 1,
        explanation: `The client sends SYN, the server answers SYN-ACK, and the client completes with ACK.`,
      },
      {
        prompt: `A client contacts a port where nothing is listening, and the server immediately sends back a segment that ends the attempt. Which TCP flag is used?`,
        options: [`FIN`, `PSH`, `RST`, `URG`],
        correct: 2,
        explanation: `A closed port answers a SYN with RST, which resets the connection.`,
      },
      {
        prompt: `Which protocol is the best choice for a live voice call and why?`,
        options: [`TCP, because it retransmits every lost packet`, `UDP, because late packets are useless and delay must stay low`, `TCP, because it uses less overhead`, `UDP, because it encrypts the media`],
        correct: 1,
        explanation: `Voice tolerates a little loss but not delay. UDP avoids retransmission delays.`,
      },
    ],
    mini: {
      prompt: `A capture shows hundreds of SYN packets from random addresses to the web server and no final ACKs.`,
      task: `Name the attack and two defenses.`,
    },
    recap: `TCP opens with SYN, SYN-ACK, ACK, numbers bytes, acknowledges data, retransmits losses, and controls flow with the sliding window. FIN closes gracefully and RST aborts. UDP is connectionless and light, ideal for DNS, DHCP, voice, and video.`,
    classroom: `"TCP: SYN, SYN-ACK, ACK. May resibo ang bawat byte. UDP: postcard, walang resibo, pero mabilis."`,
  });

}(window.NetReady));
