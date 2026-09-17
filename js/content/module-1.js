/**
 * content/module-1.js — Module 1: Networking From Absolute Zero
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  NetReady.LESSONS['1-1'] = {
    id: '1-1',
    moduleId: 1,
    slug: 'what-is-a-network',
    title: 'What a Network Is (Clients, Servers, Hosts, Nodes)',
    estMinutes: 10,
    outcomes: [
      'Define "network" in one clear sentence.',
      'Distinguish between a client, a server, a peer, a host, a node, and an endpoint.',
      'Identify examples of each role in a home or small office setup.',
    ],
    whyItMatters:
      'Every single topic in this course — routing, switching, security, troubleshooting — is built on top of this one idea: devices exchanging data with each other. Get this foundation solid and everything else clicks faster.',
    simpleEnglish:
      'A network is two or more devices connected together so they can share data and resources. A client requests something (like a web page); a server provides it. A host is any device with an IP address on the network. A node is any connected device, including things like switches that are not "hosts" in the traditional sense. An endpoint is a device at the "edge" of the network, like a laptop or phone, where data starts or ends.',
    taglish:
      'Simple lang: network = dalawa o higit pang device na magkakonekta para makapag-share ng files, internet, printer, atbp. Yung client parang customer sa tindahan — humihingi siya ng bagay (halimbawa, website). Yung server parang tindera — sinasagot niya yung request. Yung "host" at "node" medyo magkatulad pero yung node mas broad — kahit switch o router na walang sariling IP address para sa user, node pa rin siya dahil connected siya sa network.',
    analogy: {
      title: 'Barangay at mga bahay',
      text:
        'Isipin mo ang network parang isang barangay. Bawat bahay (device) ay may sariling address (IP address). Kapag humingi ka ng tulong sa kapitbahay (client requesting a server), sumasagot sila (server responding). Ang node ay kahit anong "istraktura" sa barangay na konektado sa kalsada — kasama na dito ang mismong kalsada mismo (switch/router), hindi lang mga bahay.',
    },
    howItWorks: [
      'A device gets a physical or wireless connection to the network medium (cable or radio waves).',
      'The device is assigned an address (like an IP address) so other devices know where to send data to it.',
      'When a client needs something, it sends a request addressed to a server; the server processes and replies.',
      'All of this travels through intermediate nodes (switches, routers, access points) that never asked for the data themselves — they just forward it.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram client-server" role="img" aria-label="Diagram of a client requesting a web page from a server through a router">
        <div class="net-node client">Client<br><small>(your laptop)</small></div>
        <div class="net-line">&rarr;&rarr;&rarr;</div>
        <div class="net-node router">Router / Switch<br><small>(a node, not a host you interact with)</small></div>
        <div class="net-line">&rarr;&rarr;&rarr;</div>
        <div class="net-node server">Server<br><small>(hosts the website)</small></div>
      </div>`,
    },
    realWorldExample:
      'When you open a browser and type a web address, your laptop (client) sends a request through your home router (a node), across the internet, to a web server (server) that sends the page back.',
    proTips: [
      'When the exam says "host," think "anything that has been assigned its own IP address for communication," including servers and clients.',
      'Not every node is a host — a basic Layer 2 switch forwards frames without needing an IP address of its own to do its job (though it may have a management IP).',
    ],
    examAlert:
      'Exam questions often test whether you know a device can be BOTH a client and a server at different times (e.g., a mail server that is a client to a DNS server). Do not assume a role is fixed.',
    beginnerMistakes: [
      'Assuming "server" always means a giant machine in a data center — a laptop sharing a printer is technically acting as a server for that print job.',
      'Confusing "node" with only referring to computers — switches, routers, and printers are nodes too.',
      'Forgetting that peer-to-peer networks have devices acting as both client and server simultaneously.',
    ],
    keyTerms: [
      { term: 'Client', def: 'A device or program that requests a service or resource from a server.' },
      { term: 'Server', def: 'A device or program that provides a service or resource to clients.' },
      { term: 'Peer', def: 'A device that acts as both client and server in a peer-to-peer relationship, with no strict hierarchy.' },
      { term: 'Host', def: 'Any device assigned its own network address, capable of sending and receiving data as an endpoint of communication.' },
      { term: 'Node', def: 'Any device connected to the network, including hosts and intermediate devices like switches and routers.' },
      { term: 'Endpoint', def: 'A device at the edge of a network where a communication session starts or ends, like a laptop, phone, or IoT sensor.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Which best describes the relationship between a client and a server?',
        options: [
          'The client always has more processing power.',
          'The client requests a service; the server provides it.',
          'A server can never also be a client.',
          'Clients and servers must be on different continents.',
        ],
        correct: 1,
        explanation: 'The defining relationship is functional: one requests, the other provides — not about hardware size or location.',
      },
      {
        prompt: 'Which statement about "node" is most accurate?',
        options: [
          'Only computers are nodes.',
          'A node is any device connected to the network, including switches and routers.',
          'A node must have its own IP address.',
          'Nodes and endpoints mean exactly the same thing.',
        ],
        correct: 1,
        explanation: 'Node is the broadest term — it includes intermediate devices that forward traffic, not just end-user devices.',
      },
      {
        prompt: 'In a peer-to-peer file-sharing setup, a single computer is:',
        options: [
          'Only ever a client.',
          'Only ever a server.',
          'Potentially acting as both client and server at once.',
          'Not considered a node.',
        ],
        correct: 2,
        explanation: 'Peer-to-peer means each participant can request and provide resources, so a device may be both roles simultaneously.',
      },
    ],
    miniScenario: {
      prompt: 'You share your printer from your laptop so your sibling\'s laptop on the same Wi-Fi can print to it.',
      task: 'Identify which device is acting as the client and which is acting as the server during a print job, and explain why in one sentence.',
    },
    recap:
      'A network connects devices to share data. Clients request, servers provide, peers do both, hosts have their own address, nodes are any connected device, and endpoints sit at the network edge.',
    classroomAnswer:
      '"A network is just devices talking to each other — clients ask, servers answer, and everything connected, even the switches in between, counts as a node."',
  };

  NetReady.LESSONS['1-2'] = {
    id: '1-2',
    moduleId: 1,
    slug: 'network-types',
    title: 'LAN, WAN, WLAN, PAN, MAN, SAN, and VPN',
    estMinutes: 11,
    outcomes: [
      'Differentiate LAN, WAN, WLAN, PAN, MAN, and SAN by geographic scope.',
      'Explain what a VPN adds on top of an existing network connection.',
      'Match real-world examples to the correct network type.',
    ],
    whyItMatters:
      'These acronyms appear constantly in job descriptions, device manuals, and exam questions. Confusing a WAN with a LAN is a classic beginner mistake that trips up even confident test-takers.',
    simpleEnglish:
      'Network types are mostly defined by geographic scope: a PAN covers a few meters (like Bluetooth earbuds to your phone), a LAN covers a building or campus, a MAN covers a city, and a WAN spans a large region, country, or the globe. A WLAN is simply a wireless LAN. A SAN is a special-purpose network for storage. A VPN is not a size category — it is a secure, encrypted tunnel that can run over any of the above.',
    taglish:
      'Isipin mo size ng coverage. PAN — pinaka-maliit, parang personal space mo lang (Bluetooth headset sa phone mo). LAN — isang building o bahay, tulad ng Wi-Fi sa inyo. MAN — buong siyudad, tulad ng fiber network ng isang telco sa Maynila. WAN — buong bansa o mundo, tulad ng internet mismo o koneksyon ng maraming branch ng isang bangko. Ang VPN naman hindi tungkol sa laki — ito yung "lihim na lagusan" (secure tunnel) na ginagamit mo para ligtas kang makapag-connect kahit saan ka network.',
    analogy: {
      title: 'Saklaw ng boses mo',
      text:
        'PAN = pag-uusap mo sa sarili mong headset, konti lang ang layo. LAN = pag-shout mo sa buong bahay niyo, naririnig ng lahat sa loob. MAN = megaphone sa buong barangay o siyudad. WAN = tawag mo gamit ang telepono papunta sa ibang bansa — malayo na malayo pero kailangan ng infrastructure (telco/internet) para makarating. Ang VPN ay parang naka-lock na sobre — kahit anong "saklaw" ng usapan, ligtas at pribado ang laman.',
    },
    howItWorks: [
      'Geographic scope determines the category: PAN (meters) < LAN (a building) < MAN (a city) < WAN (regions/countries/global).',
      'A WLAN uses the same LAN concept but the medium is radio waves (Wi-Fi) instead of cabling.',
      'A SAN is purpose-built (often fiber-based, high-speed) to connect servers to shared storage devices, separate from normal user traffic.',
      'A VPN creates an encrypted tunnel over an existing network (often the public internet) so remote traffic behaves as if it were on a private LAN.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram scope-rings" role="img" aria-label="Concentric rings showing PAN, LAN, MAN, and WAN scope from smallest to largest">
        <div class="ring ring-pan">PAN<div class="ring ring-lan">LAN<div class="ring ring-man">MAN<div class="ring ring-wan">WAN</div></div></div></div>
      </div>`,
    },
    realWorldExample:
      'A remote employee in Cebu connects to their Manila office\'s internal file server using a VPN over their home internet (which is itself part of a larger WAN, the public internet).',
    proTips: [
      'When a question describes "connecting two office branches in different cities," think WAN, not LAN — even if each office\'s internal network is a LAN.',
      'A VPN can run on top of a LAN, MAN, or WAN — always identify the underlying network type separately from whether a VPN is used.',
    ],
    examAlert:
      'A very common distractor pairs "WLAN" with wireless WAN technology (like cellular). Remember: WLAN = wireless LAN (local, building-scale), not a wide-area wireless technology.',
    beginnerMistakes: [
      'Thinking WLAN and WAN are the same thing because both start with "W".',
      'Assuming a VPN is a type of network by size instead of a security feature layered on top of a network.',
      'Forgetting SAN exists and confusing it with LAN when storage networking questions appear.',
    ],
    keyTerms: [
      { term: 'LAN', def: 'Local Area Network — covers a single building or campus.' },
      { term: 'WAN', def: 'Wide Area Network — spans large geographic distances, connecting multiple LANs.' },
      { term: 'WLAN', def: 'Wireless Local Area Network — a LAN using Wi-Fi instead of cables.' },
      { term: 'PAN', def: 'Personal Area Network — very short range, like Bluetooth between a phone and earbuds.' },
      { term: 'MAN', def: 'Metropolitan Area Network — covers a city or large campus area.' },
      { term: 'SAN', def: 'Storage Area Network — a dedicated high-speed network connecting servers to shared storage.' },
      { term: 'VPN', def: 'Virtual Private Network — an encrypted tunnel that provides secure, private communication over a shared or public network.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A company connects its Manila and Cebu offices over the internet. What type of network connection is this?',
        options: ['LAN', 'PAN', 'WAN', 'SAN'],
        correct: 2,
        explanation: 'Connecting geographically distant sites is the defining trait of a WAN.',
      },
      {
        prompt: 'Which statement about VPNs is correct?',
        options: [
          'A VPN is a network size category like LAN or WAN.',
          'A VPN is an encrypted tunnel that can run over a LAN, MAN, or WAN.',
          'A VPN only works on wireless networks.',
          'A VPN replaces the need for an IP address.',
        ],
        correct: 1,
        explanation: 'VPN describes a security feature (an encrypted tunnel), not a geographic scope.',
      },
      {
        prompt: 'What best distinguishes a SAN from a typical LAN?',
        options: [
          'A SAN is purpose-built for connecting servers to shared storage, separate from normal user traffic.',
          'A SAN only uses wireless connections.',
          'A SAN is always smaller than a PAN.',
          'There is no real difference.',
        ],
        correct: 0,
        explanation: 'SANs are specialized, often high-speed networks dedicated to storage traffic, distinct from general LAN traffic.',
      },
    ],
    miniScenario: {
      prompt: 'Your Bluetooth mouse connects to your laptop, which is on your home Wi-Fi, which connects to the internet.',
      task: 'List all three network types involved in this chain, from smallest scope to largest.',
    },
    recap:
      'Network types scale by geographic reach: PAN, LAN/WLAN, MAN, WAN. SAN is a purpose-built storage network. VPN is a security feature (encrypted tunnel), not a size category.',
    classroomAnswer:
      '"Size-wise it goes PAN, LAN, MAN, WAN — and a VPN isn\'t about size at all, it\'s the encrypted tunnel I\'d use to connect securely over any of those."',
  };

  NetReady.LESSONS['1-3'] = {
    id: '1-3',
    moduleId: 1,
    slug: 'internet-intranet-extranet',
    title: 'Internet, Intranet, and Extranet',
    estMinutes: 8,
    outcomes: [
      'Differentiate internet, intranet, and extranet by audience and access.',
      'Give a real example of each from a typical company.',
      'Identify which one a public-facing company website belongs to.',
    ],
    whyItMatters:
      'These three terms describe "who is allowed in," which directly connects to network security concepts like DMZs and access control that appear later in this course.',
    simpleEnglish:
      'The internet is the global public network anyone can access. An intranet is a private network restricted to an organization\'s own members (employees). An extranet is a controlled extension of that private network to selected outsiders, like vendors or partners.',
    taglish:
      'Ang internet, alam na natin lahat — bukas sa buong mundo. Ang intranet parang "family group chat" ng isang company — mga empleyado lang ang pwedeng sumali, may sariling internal portal, HR system, atbp. Ang extranet naman parang "guest access" — piniling outsiders lang (halimbawa supplier o partner company) ang bibigyan mo ng access sa specific na parte ng internal network mo, hindi lahat.',
    analogy: {
      title: 'Bahay, sala, at guest room',
      text:
        'Ang internet parang kalsada sa labas — bukas sa lahat. Ang intranet parang loob mismo ng bahay niyo — pamilya lang ang laya kumilos kahit saan. Ang extranet parang guest room na binuksan niyo para sa piniling bisita (partner company) — may access sila sa specific na parte, pero hindi sa buong bahay.',
    },
    howItWorks: [
      'An intranet typically sits entirely behind a firewall, unreachable from the public internet.',
      'An extranet exposes a limited, authenticated slice of the intranet to specific external users, often via VPN or a dedicated portal.',
      'Access control (usernames, VPN certificates, or IP allow-lists) is what enforces the boundary between these zones.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram zones" role="img" aria-label="Diagram showing internet as outer public zone, extranet as a controlled middle zone, and intranet as the innermost private zone">
        <div class="zone zone-internet">Internet (public)
          <div class="zone zone-extranet">Extranet (partners, controlled access)
            <div class="zone zone-intranet">Intranet (employees only)</div>
          </div>
        </div>
      </div>`,
    },
    realWorldExample:
      'A hospital\'s public website (internet) lets anyone view visiting hours. Its internal patient records system (intranet) is only for staff. A partner insurance company might get limited extranet access to submit claims electronically.',
    proTips: [
      'When you see "restricted to employees only," think intranet. When you see "restricted to employees plus specific outside partners," think extranet.',
      'Extranets are commonly implemented using VPN access combined with strict authentication, which links this topic to later security lessons.',
    ],
    examAlert:
      'Watch for scenario questions describing a vendor who needs limited access to internal systems — that is a textbook extranet use case, not a VPN-only or intranet-only answer.',
    beginnerMistakes: [
      'Assuming "intranet" is just a smaller, slower version of the internet.',
      'Confusing extranet with a public-facing website — an extranet still requires authentication and is not open to everyone.',
      'Forgetting that a single organization can have all three simultaneously, each serving a different audience.',
    ],
    keyTerms: [
      { term: 'Internet', def: 'The global, publicly accessible network of interconnected networks.' },
      { term: 'Intranet', def: 'A private network restricted to members of a single organization.' },
      { term: 'Extranet', def: 'A controlled extension of an intranet granting limited access to selected external parties.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A company\'s internal HR portal, accessible only to employees, is an example of:',
        options: ['Internet', 'Intranet', 'Extranet', 'WAN'],
        correct: 1,
        explanation: 'Restricted to the organization\'s own members is the defining trait of an intranet.',
      },
      {
        prompt: 'A supplier is given limited, authenticated access to a company\'s inventory system to submit orders. This is best described as:',
        options: ['Internet', 'Intranet', 'Extranet', 'PAN'],
        correct: 2,
        explanation: 'Controlled access extended to an outside party is the definition of an extranet.',
      },
      {
        prompt: 'Which statement is TRUE about the internet, intranet, and extranet?',
        options: [
          'An organization can only have one of the three.',
          'They differ mainly by who is allowed to access them.',
          'Extranet means the same as internet.',
          'Intranet is always faster than the internet by definition.',
        ],
        correct: 1,
        explanation: 'The key differentiator among these three terms is audience/access control, not speed or size.',
      },
    ],
    miniScenario: {
      prompt: 'A university has a public course catalog website, an internal student records system, and a shared portal for partner companies offering internships.',
      task: 'Label each of the three systems as internet, intranet, or extranet.',
    },
    recap:
      'Internet is public, intranet is private to an organization, extranet is a controlled extension of the intranet to selected outsiders. The differentiator is who is allowed access.',
    classroomAnswer:
      '"Internet is for everyone, intranet is just for us, and extranet is us opening a controlled door for specific partners."',
  };

  NetReady.LESSONS['1-4'] = {
    id: '1-4',
    moduleId: 1,
    slug: 'performance-terms',
    title: 'Bandwidth, Throughput, Latency, Jitter, Packet Loss, and Availability',
    estMinutes: 12,
    outcomes: [
      'Define bandwidth, throughput, latency, jitter, packet loss, and availability precisely.',
      'Explain why bandwidth and throughput are not the same thing.',
      'Identify which metric matters most for a given real-world complaint (e.g., choppy video calls).',
    ],
    whyItMatters:
      'These six terms are the vocabulary of every network performance complaint you will ever troubleshoot — "the internet is slow" almost always maps to one of these specific, measurable causes.',
    simpleEnglish:
      'Bandwidth is the maximum theoretical capacity of a link (like the number of highway lanes). Throughput is what is actually achieved in practice (real traffic flow, which is always at or below bandwidth). Latency is the delay for data to travel from source to destination. Jitter is the variation in that latency over time. Packet loss is the percentage of data that never arrives. Availability is the percentage of time a system is operational and reachable.',
    taglish:
      'Bandwidth = kung ilang lanes ang kalsada (potential capacity). Throughput = kung gaano karaming sasakyan ang talagang dumaan (actual, in practice, laging mas mababa o pareho lang sa bandwidth dahil sa traffic, interference, atbp). Latency = tagal bago makarating ang sasakyan mula A papunta B. Jitter = kung hindi pantay-pantay yung oras ng pagdating ng mga sasakyan — minsan mabilis, minsan mabagal, kaya "nauutal" yung experience (kaya nagpuputol-putol ang video call). Packet loss = ilang sasakyan ang hindi na nakarating (nawala sa daan). Availability = ilang percent ng oras "bukas" at gumagana ang sistema.',
    analogy: {
      title: 'Highway ng EDSA',
      text:
        'Bandwidth = bilang ng lanes sa EDSA (8 lanes halimbawa) — potential capacity. Throughput = talagang bilang ng sasakyan na dumadaan bawat minuto sa rush hour — mas mababa dahil sa traffic. Latency = tagal ng biyahe mula Quezon City papuntang Makati. Jitter = minsan 20 minuto lang, minsan 1 oras — hindi predictable ang biyahe time. Packet loss = mga sasakyan na na-stranded o hindi nakarating (halimbawa nasira sa daan). Availability = ilang oras bukas ang EDSA sa isang buong araw (halimbawa may closure dahil sa kalamidad).',
    },
    howItWorks: [
      'Bandwidth is measured in bits per second (e.g., Mbps, Gbps) and describes theoretical maximum capacity of a link.',
      'Throughput is also measured in bits per second but reflects real, observed data transfer, which is affected by congestion, errors, and overhead.',
      'Latency is measured in milliseconds (ms), often tested with ping/round-trip time.',
      'Jitter is the variation (standard deviation) of latency between consecutive packets — high jitter is especially damaging to real-time voice/video.',
      'Packet loss is expressed as a percentage of packets sent that never arrive.',
      'Availability is often expressed as a percentage over a time period, famously described in "nines" (e.g., 99.9% = "three nines").',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Metric</th><th>Unit</th><th>Symptom When Bad</th></tr></thead>
        <tbody>
          <tr><td>Bandwidth</td><td>Mbps / Gbps</td><td>Link cannot support many simultaneous users</td></tr>
          <tr><td>Throughput</td><td>Mbps / Gbps</td><td>Downloads/uploads slower than advertised speed</td></tr>
          <tr><td>Latency</td><td>ms</td><td>Noticeable delay before a response (e.g., laggy games)</td></tr>
          <tr><td>Jitter</td><td>ms (variation)</td><td>Choppy, robotic voice/video calls</td></tr>
          <tr><td>Packet loss</td><td>%</td><td>Missing chunks of audio/video, retransmissions</td></tr>
          <tr><td>Availability</td><td>% uptime</td><td>Service is unreachable / "down"</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A video call that sounds fine but has jumbled, out-of-order audio usually points to high jitter, not low bandwidth — you can have plenty of bandwidth and still have a terrible call if jitter is high.',
    proTips: [
      'If a user says "the internet feels slow," ask clarifying questions to figure out which specific metric is the actual culprit before troubleshooting blindly.',
      'Real-time applications (VoIP, video conferencing) are far more sensitive to latency and jitter than to raw bandwidth.',
    ],
    examAlert:
      'A classic Network+ trap: a question gives a scenario where bandwidth is high but the user still experiences problems, expecting you to identify latency, jitter, or packet loss as the real cause — not bandwidth.',
    beginnerMistakes: [
      'Using "bandwidth" and "throughput" interchangeably (they are related but not identical).',
      'Assuming more bandwidth always fixes performance problems, even when the real issue is latency or packet loss.',
      'Forgetting that availability is about uptime/reachability, not speed.',
    ],
    keyTerms: [
      { term: 'Bandwidth', def: 'The theoretical maximum data capacity of a network link, measured in bits per second.' },
      { term: 'Throughput', def: 'The actual amount of data successfully transferred over a link in practice, always at or below bandwidth.' },
      { term: 'Latency', def: 'The time delay for data to travel from source to destination, usually measured in milliseconds.' },
      { term: 'Jitter', def: 'The variation in latency between packets over time.' },
      { term: 'Packet loss', def: 'The percentage of transmitted packets that fail to arrive at their destination.' },
      { term: 'Availability', def: 'The percentage of time a system or service is operational and reachable.' },
    ],
    commands: [
      { os: 'Windows/Linux', cmd: 'ping <host>', desc: 'Measures round-trip latency and can reveal packet loss over a sample of pings.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A user has a 100 Mbps internet plan but downloads only reach 40 Mbps during peak hours. This gap describes the difference between:',
        options: ['Latency and jitter', 'Bandwidth and throughput', 'Availability and packet loss', 'Unicast and multicast'],
        correct: 1,
        explanation: 'Bandwidth is the advertised maximum (100 Mbps); throughput is what is actually achieved (40 Mbps).',
      },
      {
        prompt: 'A video call has stable, low latency but the audio still sounds choppy and inconsistent. What is most likely the cause?',
        options: ['Low bandwidth', 'High jitter', 'High availability', 'Low latency'],
        correct: 1,
        explanation: 'Inconsistent, choppy real-time audio despite stable latency points to jitter — variation between packet arrival times.',
      },
      {
        prompt: 'A company advertises "99.99% uptime" for its service. This figure describes:',
        options: ['Bandwidth', 'Throughput', 'Availability', 'Jitter'],
        correct: 2,
        explanation: '"Uptime" percentage is the definition of availability.',
      },
    ],
    miniScenario: {
      prompt: 'A remote worker reports: "My internet speed test shows 200 Mbps, but my video calls keep freezing and audio cuts out randomly."',
      task: 'Name which metric(s) besides bandwidth you would investigate next, and explain why bandwidth alone does not explain the symptom.',
    },
    recap:
      'Bandwidth is theoretical capacity; throughput is actual achieved transfer. Latency is delay, jitter is delay variation, packet loss is missing data, and availability is uptime. Most "slow internet" complaints trace to one of these specific metrics.',
    classroomAnswer:
      '"High bandwidth doesn\'t guarantee a good experience — if latency or jitter is bad, calls will still lag or sound choppy even on a fast connection."',
  };

  NetReady.LESSONS['1-5'] = {
    id: '1-5',
    moduleId: 1,
    slug: 'traffic-and-encapsulation',
    title: 'Unicast, Multicast, Broadcast, Anycast, and Encapsulation',
    estMinutes: 12,
    outcomes: [
      'Differentiate unicast, multicast, broadcast, and anycast traffic patterns.',
      'Order the encapsulation units: data, segment, packet, frame, bits.',
      'Explain encapsulation and de-encapsulation in one sentence each.',
    ],
    whyItMatters:
      'These traffic patterns and the encapsulation process explain literally everything that happens when data moves across a network — this lesson is the bridge into Module 2\'s OSI model.',
    simpleEnglish:
      'Unicast is one sender to one specific receiver. Multicast is one sender to a specific group of interested receivers. Broadcast is one sender to every device on the local network. Anycast is one address shared by multiple servers, where traffic goes to the "nearest" or best-performing one. Encapsulation is the process of wrapping data with headers as it moves down the layers before transmission; de-encapsulation removes those headers as data moves back up the layers at the receiver.',
    taglish:
      'Unicast = pribadong usapan, isa lang kausap mo. Multicast = group chat na piniling members lang ang naka-join (halimbawa streaming sa mga subscribed users lang). Broadcast = megaphone announcement na naririnig ng LAHAT sa paligid, gusto man nila o hindi. Anycast = parang tumawag ka sa isang 911 hotline number — iisang number, pero yung pinakamalapit na branch/response center ang sasagot sa\'yo, hindi lahat sila sasagot. Encapsulation naman parang pagbalot ng regalo — bawat "layer" nagdadagdag ng sariling wrapping (header) bago ito ipadala, at pagdating sa destinasyon, unti-unting binubuksan (de-encapsulation) ang bawat wrapping.',
    analogy: {
      title: 'Sulat, group text, megaphone, at 911',
      text:
        'Unicast = personal na sulat na may isang tatanggap. Multicast = group text sa mga taong nag-sign up lang sa isang libangan (halimbawa mga taga-subscribe sa isang newsletter). Broadcast = announcement gamit ang megaphone sa buong palengke — lahat naririnig, kahit hindi interesado. Anycast = pagtawag sa isang generic hotline number kung saan kung sinong pinakamalapit na sasagot ang sasagot, hindi lahat ng branches.',
    },
    howItWorks: [
      'The sender application creates data, which gets encapsulated with a Transport layer header to become a segment (TCP) or datagram (UDP).',
      'The segment gets encapsulated with a Network layer (IP) header to become a packet.',
      'The packet gets encapsulated with a Data Link layer (Ethernet) header and trailer to become a frame.',
      'The frame is converted into bits for transmission over the physical medium.',
      'The receiving device reverses this process step by step (de-encapsulation), removing each header as it passes the data up to the next layer.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram encapsulation" role="img" aria-label="Encapsulation diagram showing data wrapped into segment, packet, frame, and bits">
        <div class="encap-layer l-data">Data</div>
        <div class="encap-layer l-segment">Segment <small>(+ TCP/UDP header)</small></div>
        <div class="encap-layer l-packet">Packet <small>(+ IP header)</small></div>
        <div class="encap-layer l-frame">Frame <small>(+ Ethernet header/trailer)</small></div>
        <div class="encap-layer l-bits">Bits <small>(transmitted on the wire/air)</small></div>
      </div>`,
    },
    realWorldExample:
      'Streaming a live sports broadcast to thousands of subscribed viewers efficiently often uses multicast so the network sends one stream to a group rather than duplicating it per viewer. DHCP discovery messages use broadcast because a new device does not yet know any specific server\'s address.',
    proTips: [
      'A quick memory aid for encapsulation order: "Do Ships Pass Frequently, Beware?" — Data, Segment, Packet, Frame, Bits (use mnemonics as a memory aid, never as a substitute for understanding why the order makes sense).',
      'Anycast is heavily used by DNS root servers and CDNs to route users to the nearest available server automatically.',
    ],
    examAlert:
      'Broadcast traffic does not cross routers by default — routers stop broadcast domains at their boundary. This single fact is tested repeatedly across multiple Network+ domains.',
    beginnerMistakes: [
      'Confusing multicast (a subscribed group) with broadcast (absolutely everyone).',
      'Forgetting the encapsulation order and mixing up "packet" (Layer 3) with "frame" (Layer 2).',
      'Assuming anycast means "sent to everyone" — it is actually sent to ONE of several possible destinations, chosen by proximity/routing.',
    ],
    keyTerms: [
      { term: 'Unicast', def: 'One-to-one communication between a single sender and a single receiver.' },
      { term: 'Multicast', def: 'One-to-many communication delivered only to devices that have joined a specific group.' },
      { term: 'Broadcast', def: 'One-to-all communication delivered to every device within the local network segment.' },
      { term: 'Anycast', def: 'One address shared by multiple servers; traffic is routed to the nearest or best-performing instance.' },
      { term: 'Encapsulation', def: 'The process of adding header (and sometimes trailer) information as data moves down through the layers before transmission.' },
      { term: 'De-encapsulation', def: 'The process of removing header/trailer information as data moves up through the layers at the receiving device.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A live stream sent only to viewers who subscribed to a specific channel is an example of:',
        options: ['Unicast', 'Multicast', 'Broadcast', 'Anycast'],
        correct: 1,
        explanation: 'Delivery to a specific, joined group — not everyone — is the definition of multicast.',
      },
      {
        prompt: 'Which correctly orders the encapsulation process from application data down to transmission?',
        options: [
          'Frame, Packet, Segment, Data, Bits',
          'Data, Segment, Packet, Frame, Bits',
          'Bits, Frame, Packet, Segment, Data',
          'Segment, Data, Frame, Packet, Bits',
        ],
        correct: 1,
        explanation: 'Encapsulation proceeds Data -> Segment (Transport) -> Packet (Network) -> Frame (Data Link) -> Bits (Physical).',
      },
      {
        prompt: 'Why do routers block broadcast traffic from crossing into other networks by default?',
        options: [
          'Broadcasts are illegal on the internet.',
          'To prevent broadcast traffic from consuming bandwidth and processing on every network everywhere.',
          'Routers are physically incapable of handling broadcast frames.',
          'Broadcasts only exist inside multicast groups.',
        ],
        correct: 1,
        explanation: 'Routers define the boundary of a broadcast domain specifically to contain broadcast traffic and protect other networks from unnecessary load.',
      },
    ],
    miniScenario: {
      prompt: 'A new laptop joins a network and needs an IP address but does not know where the DHCP server is located.',
      task: 'Name which traffic type (unicast, multicast, broadcast, or anycast) the laptop\'s initial DHCP discovery message uses, and explain why that type makes sense here.',
    },
    recap:
      'Unicast is one-to-one, multicast is one-to-a-group, broadcast is one-to-all-local, and anycast is one-address-to-nearest-instance. Encapsulation wraps data with headers going down the layers (Data, Segment, Packet, Frame, Bits); de-encapsulation reverses it at the receiver.',
    classroomAnswer:
      '"Traffic type depends on the audience — one person, a group, everyone locally, or the nearest server — and every message gets wrapped in layers of headers on the way out and unwrapped the same way coming in."',
  };
}(window.NetReady));
