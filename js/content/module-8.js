/**
 * content/module-8.js — Module 8: Routing and Wide Area Networking
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  NetReady.LESSONS['8-1'] = {
    id: '8-1',
    moduleId: 8,
    slug: 'routers-routing-tables-administrative-distance',
    title: 'Routers, Routing Tables, and Administrative Distance',
    estMinutes: 13,
    outcomes: [
      'Explain what information a routing table contains and how it is used.',
      'Define administrative distance and explain why it matters when multiple sources disagree.',
      'Explain what a default route is and when it gets used.',
    ],
    whyItMatters:
      'Every routing decision a router ever makes comes down to reading one table — understanding that table demystifies almost everything else in this module.',
    simpleEnglish:
      'A router forwards packets between networks by consulting its routing table, which lists known destination networks and the "next hop" to reach each one. When multiple sources (static routes, different routing protocols) offer a route to the same destination, the router uses administrative distance (AD) — a trust rating — to decide which source to believe; lower AD wins. A default route (0.0.0.0/0) is used as a catch-all when no more specific route matches the destination.',
    taglish:
      'Ang router ay gumagawa ng desisyon kung saan ipapadala ang packet base sa routing table nito — isang listahan ng mga kilalang destination network at ang "next hop" (susunod na hintuan) papunta doon. Kapag may ilang pinagmulan ng ruta papunta sa parehong destinasyon (halimbawa, static route at isang dynamic routing protocol), gagamit ang router ng administrative distance (AD) — parang "antas ng tiwala" — para malaman kung aling source ang paniniwalaan; ang mas mababang numero ang nananalo. Ang default route (0.0.0.0/0) ay parang "kung wala nang tumugma, dito na lang ipadala" — ginagamit ito kapag walang mas specific na ruta ang nahanap.',
    analogy: {
      title: 'Listahan ng address at antas ng pagtitiwala sa impormante',
      text:
        'Isipin mo ang routing table parang listahan ng mga kilalang address sa isang delivery company, kasama ang susunod na himpilan papunta sa bawat isa. Kung dalawang tao ang nagbigay sa iyo ng magkaibang direksyon papunta sa parehong lugar, susundin mo ang impormasyong galing sa mas mapagkakatiwalaang tao (mas mababang administrative distance). Ang default route naman parang sinasabi mong, "Kung hindi ko alam ang eksaktong address, ipadala na lang sa main post office (default gateway), sila na ang bahalang maghanap."',
    },
    howItWorks: [
      'A routing table entry typically includes the destination network, subnet mask, next-hop address, outgoing interface, and metric (a measure of "cost" to reach that destination).',
      'When multiple routing sources provide a route to the same destination, the router compares administrative distance values and trusts the lowest one (e.g., a directly connected route has AD 0, static routes commonly AD 1, OSPF AD 110, RIP AD 120).',
      'If AD is tied, the router then compares the metric (a protocol-specific cost value) to choose the best path.',
      'A default route (0.0.0.0/0) matches any destination not covered by a more specific route, commonly used to send unknown traffic toward the internet-facing gateway.',
      'Routers always prefer the most specific matching route available (longest prefix match) before falling back to a default route.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Route Source</th><th>Typical Administrative Distance</th></tr></thead>
        <tbody>
          <tr><td>Directly connected</td><td>0</td></tr>
          <tr><td>Static route</td><td>1</td></tr>
          <tr><td>EIGRP</td><td>90</td></tr>
          <tr><td>OSPF</td><td>110</td></tr>
          <tr><td>RIP</td><td>120</td></tr>
        </tbody>
      </table>
      <p class="diagram-caption">Lower administrative distance = more trusted route source.</p>`,
    },
    realWorldExample:
      'A network administrator might manually add a static route with a very low administrative distance as a "floating static route" — a backup path that only activates if the primary dynamic route disappears, because otherwise its low AD would make it always win over the dynamic route.',
    proTips: [
      'Memorize at least the relative order of common ADs (directly connected < static < EIGRP < OSPF < RIP) — you rarely need the exact numbers, but the ORDER is frequently tested.',
      'When troubleshooting "wrong path" issues, always check the routing table first — many routing mysteries are solved by simply reading what the router actually believes.',
    ],
    examAlert:
      'Remember: administrative distance decides which SOURCE to trust when routes conflict; metric decides the best path WITHIN a single source\'s routes. Do not confuse the two.',
    beginnerMistakes: [
      'Confusing administrative distance (trust between different sources) with metric (cost comparison within one source).',
      'Assuming a router will always use a default route even when a more specific matching route exists — the more specific route always wins.',
      'Forgetting that directly connected networks have the lowest administrative distance of all (most trusted).',
    ],
    keyTerms: [
      { term: 'Routing table', def: 'The list a router consults to decide where to forward each packet, containing destinations, next hops, and metrics.' },
      { term: 'Administrative distance (AD)', def: 'A trust rating used to choose between routes to the same destination learned from different sources; lower is more trusted.' },
      { term: 'Metric', def: 'A protocol-specific cost value used to select the best path among routes from the same source.' },
      { term: 'Default route', def: 'A catch-all route (0.0.0.0/0) used when no more specific route matches the destination.' },
    ],
    commands: [
      { os: 'Windows', cmd: 'route print', desc: 'Display the local routing table.' },
      { os: 'Linux/macOS', cmd: 'ip route', desc: 'Display the local routing table.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A router has both a static route and an OSPF route to the same destination network. Which one does it use by default?',
        options: [
          'The OSPF route, since dynamic protocols always win.',
          'The static route, since static routes typically have a lower administrative distance than OSPF.',
          'Both are used simultaneously for load balancing automatically.',
          'Neither — the router drops all traffic to that destination.',
        ],
        correct: 1,
        explanation: 'Static routes commonly have a lower (more trusted) administrative distance than OSPF, so the static route wins by default.',
      },
      {
        prompt: 'What is the purpose of a default route?',
        options: [
          'To block all outbound traffic.',
          'To provide a catch-all path for destinations not matched by any more specific route.',
          'To replace the need for a routing table entirely.',
          'To only handle broadcast traffic.',
        ],
        correct: 1,
        explanation: 'A default route (0.0.0.0/0) catches anything not covered by a more specific entry in the routing table.',
      },
      {
        prompt: 'What does administrative distance determine?',
        options: [
          'The physical distance between two routers.',
          'Which route SOURCE to trust when multiple sources offer a route to the same destination.',
          'The maximum number of hops a packet can take.',
          'The encryption strength of a routing protocol.',
        ],
        correct: 1,
        explanation: 'AD is a trust ranking between different route sources, not a measure of physical or hop distance.',
      },
    ],
    miniScenario: {
      prompt: 'A router has a directly connected route, a static route, and an OSPF route all pointing toward the same destination network.',
      task: 'Explain which one the router will actually use, and why, based on administrative distance.',
    },
    recap:
      'Routers forward packets by consulting a routing table of destinations, next hops, and metrics. Administrative distance resolves conflicts between different route sources (lower wins); metric resolves conflicts within one source. A default route catches anything not otherwise matched.',
    classroomAnswer:
      '"Whenever routes conflict, I think trust first (administrative distance), then cost second (metric) — and if nothing specific matches at all, the default route quietly catches it."',
  };

  NetReady.LESSONS['8-2'] = {
    id: '8-2',
    moduleId: 8,
    slug: 'static-dynamic-distance-vector-link-state',
    title: 'Static vs. Dynamic Routing: Distance-Vector and Link-State',
    estMinutes: 12,
    outcomes: [
      'Differentiate static routing from dynamic routing.',
      'Explain the core difference between distance-vector and link-state routing approaches.',
      'Identify a real-world scenario better suited to static vs. dynamic routing.',
    ],
    whyItMatters:
      'Every dynamic routing protocol you will ever study is really just one of two philosophies wearing different clothes — understanding that split makes learning OSPF, EIGRP, and BGP dramatically easier.',
    simpleEnglish:
      'Static routes are manually configured by an administrator and never change unless someone edits them; they are simple and predictable but do not adapt automatically to network failures. Dynamic routing protocols automatically discover and adapt to network changes by exchanging information with other routers. Distance-vector protocols (like RIP) share their entire routing table with directly connected neighbors, essentially routing "by rumor." Link-state protocols (like OSPF) build a complete map of the network topology and calculate the best path independently, routing "by map."',
    taglish:
      'Ang static route ay manual na itinatakda ng administrator at hindi ito nagbabago maliban kung baguhin ito ng tao — simple at predictable, pero hindi ito awtomatikong umaadjust kapag may nasira sa network. Ang dynamic routing protocol naman awtomatikong natutuklasan at umaadjust sa mga pagbabago sa network sa pamamagitan ng pagpapalitan ng impormasyon sa ibang router. Ang distance-vector protocol (tulad ng RIP) ay parang "pagkalat ng tsismis" — ibinabahagi nito ang BUONG routing table nito sa mga kalapit na kapitbahay lang. Ang link-state protocol naman (tulad ng OSPF) ay gumagawa ng KUMPLETONG mapa ng buong network topology, tapos kinakalkula nito mismo ang pinakamahusay na ruta — parang mayroon kang sariling GPS na may kumpletong mapa, hindi umaasa sa sabi-sabi.',
    analogy: {
      title: 'Tsismis sa kapitbahayan vs. sariling mapa ng GPS',
      text:
        'Isipin mo ang distance-vector routing parang pagkalat ng balita sa kapitbahayan — sinasabi mo lang sa pinakamalapit mong kapitbahay kung ano ang alam mo, tapos ipapasa nila naman ito sa kanilang mga kapitbahay, at ganoon paulit-ulit. Mabilis pero minsan luma na o mali na ang impormasyon pagdating sa dulo. Ang link-state routing naman parang mayroon kang sariling GPS na may buong, updated na mapa ng buong lungsod — hindi ka umaasa sa sinasabi ng iba, mismong ikaw ang kumakalkula ng pinakamahusay na ruta gamit ang kumpletong larawan.',
    },
    howItWorks: [
      'Static routing requires no protocol overhead and is highly predictable, making it ideal for small, stable networks or specific backup paths — but it requires manual updates if the network changes.',
      'Dynamic routing protocols automatically detect topology changes (like a failed link) and recalculate paths without administrator intervention.',
      'Distance-vector protocols share routing tables periodically with directly connected neighbors only, using hop count (or similar simple metrics) — simple but slower to converge and prone to routing loops without extra safeguards.',
      'Link-state protocols have every router build an identical, complete map of the network topology (via flooding link-state advertisements), then independently calculate the shortest path — faster convergence and more scalable, at the cost of more processing and memory.',
      'Hybrid protocols (like EIGRP) combine characteristics of both approaches to balance simplicity and efficiency.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th></th><th>Distance-Vector</th><th>Link-State</th></tr></thead>
        <tbody>
          <tr><td>Shares</td><td>Entire routing table with neighbors</td><td>Link-state info flooded to all routers</td></tr>
          <tr><td>View of network</td><td>Only what neighbors report ("by rumor")</td><td>Complete topology map ("by map")</td></tr>
          <tr><td>Convergence speed</td><td>Slower</td><td>Faster</td></tr>
          <tr><td>Example protocol</td><td>RIP</td><td>OSPF</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A small branch office with exactly one path to the internet often uses a simple static default route, since there is nothing to dynamically adapt to — but a large enterprise campus with multiple redundant paths relies on OSPF to automatically reroute traffic within seconds of a link failure.',
    proTips: [
      'When a scenario emphasizes "a small, simple, unchanging network," lean toward static routing being the appropriate answer, not automatically assuming dynamic is always "better."',
      'Remember EIGRP is often described as "hybrid" or "advanced distance-vector" — it borrows link-state-like features while remaining fundamentally distance-vector at its core.',
    ],
    examAlert:
      'Expect a direct comparison question contrasting "shares full table with neighbors only" (distance-vector) against "builds a complete topology map" (link-state) — this pairing is extremely high-yield.',
    beginnerMistakes: [
      'Assuming dynamic routing is always superior to static — static routing remains the right, simpler choice for small or highly stable environments.',
      'Confusing distance-vector\'s neighbor-only table sharing with link-state\'s network-wide topology flooding.',
      'Forgetting that static routes require manual intervention to adapt to network changes, unlike dynamic protocols.',
    ],
    keyTerms: [
      { term: 'Static route', def: 'A manually configured route that does not change automatically.' },
      { term: 'Dynamic routing protocol', def: 'A protocol that automatically discovers routes and adapts to network changes.' },
      { term: 'Distance-vector protocol', def: 'A routing approach sharing full routing tables with directly connected neighbors (e.g., RIP).' },
      { term: 'Link-state protocol', def: 'A routing approach where every router builds a complete network topology map and independently calculates best paths (e.g., OSPF).' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is a key disadvantage of static routing compared to dynamic routing?',
        options: [
          'It requires far more processing power on the router.',
          'It does not automatically adapt if the network topology changes.',
          'It cannot be used on any modern router.',
          'It always uses more bandwidth than dynamic protocols.',
        ],
        correct: 1,
        explanation: 'Static routes require manual updates; they do not react automatically to network changes like link failures.',
      },
      {
        prompt: 'What best describes a link-state routing protocol like OSPF?',
        options: [
          'It shares its full routing table only with directly connected neighbors.',
          'Every router builds a complete map of the network topology and independently calculates the best path.',
          'It never adapts to network changes.',
          'It only works on wireless networks.',
        ],
        correct: 1,
        explanation: 'Link-state protocols give every router a full topology view, enabling independent shortest-path calculation.',
      },
      {
        prompt: 'Which routing approach is often summarized as "routing by rumor"?',
        options: ['Static routing', 'Distance-vector routing', 'Link-state routing', 'Default routing'],
        correct: 1,
        explanation: 'Distance-vector protocols rely on information passed neighbor-to-neighbor, without a full independent topology view.',
      },
    ],
    miniScenario: {
      prompt: 'A small retail store has exactly one internet connection and no redundant paths of any kind.',
      task: 'Recommend static or dynamic routing for this scenario, and justify your choice in one sentence.',
    },
    recap:
      'Static routes are manual and stable but do not adapt automatically; dynamic protocols adjust automatically to changes. Distance-vector protocols share full tables with neighbors ("by rumor"); link-state protocols build a complete topology map and calculate paths independently ("by map").',
    classroomAnswer:
      '"Simple, unchanging network — static is fine. Complex, redundant network — dynamic, and whether that\'s distance-vector or link-state depends on how fast and how smart I need convergence to be."',
  };

  NetReady.LESSONS['8-3'] = {
    id: '8-3',
    moduleId: 8,
    slug: 'ospf-eigrp-bgp',
    title: 'OSPF, EIGRP, and BGP: Common Routing Protocols',
    estMinutes: 13,
    outcomes: [
      'Identify OSPF, EIGRP, and BGP by category and typical use case.',
      'Explain the difference between an interior and exterior gateway protocol.',
      'Explain why BGP is called "the protocol that runs the internet."',
    ],
    whyItMatters:
      'These three protocol names appear constantly on the exam and in real job postings — knowing which is which, and where each is actually used, separates surface memorization from real understanding.',
    simpleEnglish:
      'OSPF (Open Shortest Path First) is a link-state interior gateway protocol widely used within a single organization\'s network. EIGRP (Enhanced Interior Gateway Routing Protocol) is a Cisco-originated hybrid interior gateway protocol, also used within a single organization. BGP (Border Gateway Protocol) is the exterior gateway protocol that connects different autonomous systems (independently managed networks) together — it is the protocol that literally holds the global internet\'s routing together between ISPs and large organizations.',
    taglish:
      'Ang OSPF (Open Shortest Path First) ay isang link-state interior gateway protocol na malawakang ginagamit sa loob mismo ng isang organisasyon. Ang EIGRP (Enhanced Interior Gateway Routing Protocol) ay Cisco-originated na hybrid protocol, ginagamit din sa loob ng isang organisasyon. Ang BGP (Border Gateway Protocol) naman ang exterior gateway protocol na kumokonekta sa magkaibang "autonomous system" (mga hiwalay na pinamamahalaang network) — ito mismo ang protocol na literal na nagpapanatili sa ruta ng buong global internet, sa pagitan ng mga ISP at malalaking organisasyon.',
    analogy: {
      title: 'Panloob na daan ng opisina vs. kalsada sa pagitan ng mga bansa',
      text:
        'Isipin mo ang OSPF at EIGRP parang panloob na sistema ng kalsada sa loob mismo ng isang malaking kampus o siyudad — pinamamahalaan ito ng iisang awtoridad (ang organisasyon). Ang BGP naman parang kasunduan sa pagitan ng magkaibang bansa kung paano dadaan ang mga sasakyan (data) mula sa isang bansa papunta sa isa pa — hindi ito pinapamahalaan ng iisang awtoridad, kundi resulta ito ng kasunduan sa pagitan ng maraming independiyenteng "bansa" (autonomous systems).',
    },
    howItWorks: [
      'Interior Gateway Protocols (IGPs) like OSPF and EIGRP operate within a single autonomous system (one organization\'s network).',
      'OSPF uses link-state logic, calculating shortest paths using a cost metric based on bandwidth, and is a widely supported, vendor-neutral standard.',
      'EIGRP, originally Cisco-proprietary (now partially open), uses a hybrid approach combining distance-vector simplicity with faster convergence characteristics.',
      'BGP is the Exterior Gateway Protocol (EGP) used between different autonomous systems, making routing decisions based heavily on configured policies, not just shortest path — this is what allows the internet\'s many independent networks to interconnect.',
      'Because BGP prioritizes policy and stability over speed, it converges more slowly than IGPs, which is an acceptable tradeoff at internet scale.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Protocol</th><th>Category</th><th>Typical Scope</th></tr></thead>
        <tbody>
          <tr><td>OSPF</td><td>Interior Gateway Protocol (link-state)</td><td>Within one organization</td></tr>
          <tr><td>EIGRP</td><td>Interior Gateway Protocol (hybrid)</td><td>Within one organization (Cisco-heavy environments)</td></tr>
          <tr><td>BGP</td><td>Exterior Gateway Protocol</td><td>Between different autonomous systems (the internet)</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'When you access a website hosted by a company in another country, BGP is what determined the path your traffic took across the many independent ISP networks in between — no single company controls that entire path.',
    proTips: [
      'A fast way to remember: OSPF and EIGRP stay "inside the house" (one organization); BGP handles "between houses" (the whole internet).',
      'BGP is sometimes called "the protocol that runs the internet" — recognize this phrase instantly on the exam.',
    ],
    examAlert:
      'Expect a direct question asking you to classify a protocol as IGP or EGP — OSPF and EIGRP are IGPs, BGP is the EGP, full stop.',
    beginnerMistakes: [
      'Assuming EIGRP is a pure distance-vector protocol — it is technically classified as an advanced/hybrid distance-vector protocol.',
      'Forgetting BGP\'s scope is between autonomous systems, not used for routing within a single company\'s internal network.',
      'Mixing up "interior" and "exterior" gateway protocol terminology when asked to classify a given protocol.',
    ],
    keyTerms: [
      { term: 'OSPF', def: 'Open Shortest Path First — a link-state interior gateway routing protocol.' },
      { term: 'EIGRP', def: 'Enhanced Interior Gateway Routing Protocol — a Cisco-originated hybrid interior gateway protocol.' },
      { term: 'BGP', def: 'Border Gateway Protocol — the exterior gateway protocol connecting autonomous systems across the internet.' },
      { term: 'Autonomous system (AS)', def: 'A network or group of networks under a single administrative authority, identified by a unique AS number for BGP routing.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Which protocol is used to connect different autonomous systems together across the internet?',
        options: ['OSPF', 'EIGRP', 'BGP', 'STP'],
        correct: 2,
        explanation: 'BGP is the exterior gateway protocol that interconnects independently managed autonomous systems.',
      },
      {
        prompt: 'OSPF and EIGRP are both classified as what type of protocol?',
        options: ['Exterior gateway protocols', 'Interior gateway protocols', 'Layer 2 protocols only', 'Wireless-only protocols'],
        correct: 1,
        explanation: 'Both operate within a single autonomous system, making them interior gateway protocols (IGPs).',
      },
      {
        prompt: 'Why is BGP\'s slower convergence an acceptable tradeoff?',
        options: [
          'BGP never actually needs to converge.',
          'BGP prioritizes policy-based, stable routing decisions at internet scale over raw speed.',
          'Slower convergence makes BGP more secure automatically.',
          'BGP only operates on very small networks where speed does not matter.',
        ],
        correct: 1,
        explanation: 'At internet scale, stability and policy control matter more than the fast convergence needed inside a single organization.',
      },
    ],
    miniScenario: {
      prompt: 'A large enterprise wants fast, automatic rerouting within its own campus network, and separately needs to exchange routes with its two different internet service providers.',
      task: 'Name which protocol category fits each need (internal campus vs. exchanging routes with ISPs).',
    },
    recap:
      'OSPF and EIGRP are interior gateway protocols used within a single organization\'s network (link-state and hybrid, respectively). BGP is the exterior gateway protocol connecting independent autonomous systems — literally the protocol holding the global internet\'s routing together.',
    classroomAnswer:
      '"Inside one organization, I\'m thinking OSPF or EIGRP — the moment I\'m talking about connecting to another company\'s network entirely, like an ISP, that\'s BGP\'s job."',
  };

  NetReady.LESSONS['8-4'] = {
    id: '8-4',
    moduleId: 8,
    slug: 'fhrp-and-virtual-ip',
    title: 'First-Hop Redundancy Protocols (FHRP) and Virtual IPs',
    estMinutes: 11,
    outcomes: [
      'Explain the problem FHRP solves for client default gateways.',
      'Define virtual IP (VIP) in the context of gateway redundancy.',
      'Name common FHRP implementations.',
    ],
    whyItMatters:
      'A client device only ever points to one default gateway address — FHRP is the clever trick that lets that single address survive a router failure without touching every client\'s configuration.',
    simpleEnglish:
      'Every device on a network is configured with one default gateway address to reach other networks. If that gateway router fails, all those devices lose their path out — unless a First-Hop Redundancy Protocol (FHRP) is in place. FHRP lets two or more routers share a single virtual IP (VIP) address as the gateway; if the active router fails, a standby router seamlessly takes over that same virtual address, and client devices never notice a change.',
    taglish:
      'Ang bawat device sa network ay may nakatakdang isang default gateway address para makarating sa ibang network. Kung masira ang router na iyon, mawawalan ng daan palabas ang LAHAT ng device na iyon — maliban kung may First-Hop Redundancy Protocol (FHRP). Ang FHRP ay nagpapahintulot sa dalawa o higit pang router na magshare ng iisang "virtual IP" (VIP) address bilang gateway. Kung masira ang aktibong router, isang standby router ang kusang papalit gamit ang parehong virtual address — hindi na kailangang baguhin ang settings ng mga client device, at hindi rin nila mapapansin na may nagpalit sa likod ng eksena.',
    analogy: {
      title: 'Backup na cashier na pareho ang numero ng counter',
      text:
        'Isipin mo ang isang tindahan na may iisang "Counter 1" — kahit magpalit ng cashier sa likod, ang mga customer ay pupunta pa rin sa "Counter 1" nang hindi nag-aalala kung sino ang nasa likod. Ganito rin ang FHRP: kahit magpalit ng aktwal na router sa likod ng virtual IP address, hindi na kailangang baguhin ng mga device ang kanilang gateway setting — pareho pa rin ang "address ng counter" na tinuturo nila.',
    },
    howItWorks: [
      'Two or more routers are configured in a group, sharing one virtual IP address that client devices use as their default gateway.',
      'One router is active (forwarding traffic for the VIP) while one or more others stand by, monitoring the active router\'s health.',
      'If the active router fails or becomes unreachable, a standby router takes over the virtual IP (and its virtual MAC address) almost instantly.',
      'Common implementations include HSRP (Cisco-proprietary), VRRP (open standard), and GLBP (Cisco, adds load balancing across multiple routers).',
      'Because clients only ever reference the stable virtual IP, no client-side reconfiguration is ever needed during a failover event.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Two routers sharing one virtual IP as a default gateway, with one active and one standby">
        <div class="net-row">
          <div class="net-node highlight">Router A (Active)<br><small>Shares VIP 10.0.0.1</small></div>
          <div class="net-node">Router B (Standby)<br><small>Takes over VIP if A fails</small></div>
        </div>
        <p class="diagram-caption">Clients only ever point to 10.0.0.1 — the gateway itself — never to either router directly.</p>
      </div>`,
    },
    realWorldExample:
      'An office\'s two core routers run VRRP so that if one is rebooted for maintenance, every computer in the building keeps working without any noticeable interruption or reconfiguration.',
    proTips: [
      'When you see "default gateway redundancy" or "seamless router failover" in a scenario, think FHRP immediately.',
      'Remember HSRP and GLBP are Cisco-specific, while VRRP is the vendor-neutral open standard — useful for distinguishing them on the exam.',
    ],
    examAlert:
      'The exam may ask you to name the protocol category (FHRP) given a description of gateway failover behavior, or ask you to identify HSRP/VRRP/GLBP by name — know both directions.',
    beginnerMistakes: [
      'Assuming client devices need to be reconfigured during a gateway failover — the entire point of FHRP is that they do not.',
      'Confusing a virtual IP (shared gateway address) with a regular static IP assigned to one specific router interface.',
      'Forgetting that only one router in the group actively forwards traffic at a time in most basic FHRP setups (except GLBP\'s load-balancing variant).',
    ],
    keyTerms: [
      { term: 'FHRP', def: 'First-Hop Redundancy Protocol — allows multiple routers to share a virtual gateway IP for seamless failover.' },
      { term: 'Virtual IP (VIP)', def: 'A shared IP address used as the gateway, not tied permanently to one specific physical router.' },
      { term: 'HSRP', def: 'Hot Standby Router Protocol — a Cisco-proprietary FHRP implementation.' },
      { term: 'VRRP', def: 'Virtual Router Redundancy Protocol — an open-standard FHRP implementation.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What problem does FHRP solve?',
        options: [
          'It speeds up DNS resolution.',
          'It allows client devices to keep using the same default gateway address even if the active router fails.',
          'It encrypts traffic between routers.',
          'It assigns IP addresses to new devices automatically.',
        ],
        correct: 1,
        explanation: 'FHRP provides gateway redundancy through a shared virtual IP, avoiding the need to reconfigure clients during a failover.',
      },
      {
        prompt: 'What is a virtual IP (VIP) in the context of FHRP?',
        options: [
          'A temporary IP address that expires after 24 hours.',
          'A shared gateway address that can be actively served by different physical routers over time.',
          'An IPv6-only address type.',
          'An address reserved exclusively for VPN connections.',
        ],
        correct: 1,
        explanation: 'The VIP is the stable, shared address clients point to, regardless of which physical router is currently active.',
      },
      {
        prompt: 'Which of these is an open-standard FHRP implementation, unlike the Cisco-proprietary alternatives?',
        options: ['HSRP', 'GLBP', 'VRRP', 'EIGRP'],
        correct: 2,
        explanation: 'VRRP is the vendor-neutral open standard; HSRP and GLBP are Cisco-proprietary.',
      },
    ],
    miniScenario: {
      prompt: 'An office wants its two core routers to provide gateway redundancy, using open, vendor-neutral standards rather than being locked into one hardware vendor.',
      task: 'Name the specific protocol you would recommend, and explain why it fits the "vendor-neutral" requirement.',
    },
    recap:
      'FHRP lets multiple routers share one virtual gateway IP, so client devices survive a router failure without reconfiguration. Common implementations include HSRP and GLBP (Cisco) and VRRP (open standard).',
    classroomAnswer:
      '"Clients only ever trust one gateway address — FHRP is just the behind-the-scenes handoff that keeps that address alive even when the actual router behind it changes."',
  };

  NetReady.LESSONS['8-5'] = {
    id: '8-5',
    moduleId: 8,
    slug: 'wan-connection-types',
    title: 'WAN Connection Types: Leased Lines, MPLS, Broadband, and SD-WAN',
    estMinutes: 13,
    outcomes: [
      'Differentiate common WAN connection types by ownership and performance characteristics.',
      'Explain what MPLS accomplishes for a business network.',
      'Explain what problem SD-WAN solves compared to traditional WAN designs.',
    ],
    whyItMatters:
      'Choosing how to connect two office sites together is a real, expensive business decision — recognizing these WAN options and their tradeoffs is directly applicable both on the exam and on the job.',
    simpleEnglish:
      'A leased line is a dedicated, private point-to-point connection rented from a provider, offering guaranteed, consistent bandwidth at a premium price. MPLS (Multiprotocol Label Switching) is a provider technique that efficiently routes traffic between multiple business sites using labels rather than full routing lookups at every hop, commonly sold as a private, reliable WAN service. Metro Ethernet extends Ethernet connectivity across a metropolitan area, often at lower cost than traditional leased lines. Broadband (cable, DSL, fiber) offers shared, variable-speed internet access at a much lower cost, typically used with a VPN for site connectivity. Cellular and satellite provide wireless WAN connectivity, useful for mobile or remote locations. SD-WAN (Software-Defined WAN) intelligently manages traffic across multiple underlying connections (including cheaper broadband links), often replacing or supplementing expensive MPLS.',
    taglish:
      'Ang leased line ay dedicated at pribadong point-to-point na koneksyon na inuupahan mula sa isang provider — garantisadong consistent ang bandwidth, pero mas mahal. Ang MPLS naman ay isang teknik ng provider na mahusay na nagruruta ng traffic sa pagitan ng maraming site ng isang negosyo gamit ang mga "label" sa halip na buong routing lookup sa bawat hop — karaniwang ibinebenta bilang pribado at reliable na WAN service. Ang Metro Ethernet ay pinapalawig ang Ethernet connectivity sa buong lungsod, kadalasan mas mura kaysa tradisyunal na leased line. Ang broadband (cable, DSL, fiber) ay nagbibigay ng shared at variable-speed na internet access sa mas mababang halaga — kadalasang may kasamang VPN para sa site-to-site na koneksyon. Ang cellular at satellite naman ay nagbibigay ng wireless na WAN connectivity, kapaki-pakinabang para sa mobile o malalayong lokasyon. Ang SD-WAN (Software-Defined WAN) ay matalinong namamahala ng traffic sa maraming iba\'t-ibang koneksyon (kasama ang mas murang broadband), madalas kapalit o karagdagan sa mahal na MPLS.',
    analogy: {
      title: 'Pribadong sasakyan, VIP lane, at matalinong Waze',
      text:
        'Isipin mo ang leased line parang pagkakaroon ng sarili mong pribadong sasakyan na eksklusibo para sa iyo lang — laging available, pero mahal panatilihin. Ang MPLS parang VIP lane sa expressway — mas mabilis at reliable, pero kailangan mo pang bayaran ang access. Ang broadband parang pampublikong kalsada — mas mura, pero puwedeng magkaroon ng traffic depende sa ibang gumagamit. Ang SD-WAN naman parang matalinong Waze app na kusang pumipili ng pinakamahusay na kalsada (kahit anong klase) depende sa kasalukuyang kondisyon — kombinasyon ng mga mura at mamahaling ruta, pinamamahalaan nang matalino.',
    },
    howItWorks: [
      'Leased lines provide dedicated bandwidth with a service-level agreement, but cost significantly more than shared alternatives, scaling with distance and bandwidth needed.',
      'MPLS uses short path labels instead of long network address lookups at every router hop, improving efficiency and enabling providers to offer any-to-any private connectivity between many customer sites.',
      'Metro Ethernet delivers Ethernet-based WAN connectivity across a city, typically more affordable and simpler to manage than legacy leased-line technologies for metro-area needs.',
      'Broadband technologies (cable, DSL, fiber-to-the-home) are shared, consumer-grade or business-grade internet connections, often paired with site-to-site VPNs to connect locations affordably.',
      'Cellular (4G/5G) and satellite connectivity provide WAN access without fixed-line infrastructure, essential for temporary sites, mobile units, or remote/rural locations lacking wired options.',
      'SD-WAN adds an intelligent software layer on top of one or more underlying connections (MPLS, broadband, cellular), dynamically routing application traffic over whichever path performs best in real time, often reducing dependency on expensive MPLS alone.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>WAN Type</th><th>Cost</th><th>Best For</th></tr></thead>
        <tbody>
          <tr><td>Leased line</td><td>High</td><td>Guaranteed, dedicated bandwidth needs</td></tr>
          <tr><td>MPLS</td><td>High</td><td>Private, reliable multi-site connectivity</td></tr>
          <tr><td>Metro Ethernet</td><td>Medium</td><td>City-wide Ethernet-based connectivity</td></tr>
          <tr><td>Broadband (+ VPN)</td><td>Low</td><td>Cost-effective site connectivity</td></tr>
          <tr><td>Cellular / Satellite</td><td>Varies</td><td>Mobile or remote locations without wired options</td></tr>
          <tr><td>SD-WAN</td><td>Varies (optimizes existing links)</td><td>Intelligently combining multiple WAN links</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A retail chain with hundreds of small stores might replace expensive MPLS circuits at each location with SD-WAN running over ordinary business broadband, cutting costs dramatically while an intelligent software layer still guarantees priority for critical point-of-sale traffic.',
    proTips: [
      'When a scenario emphasizes "cost savings while still maintaining reliable performance across multiple connection types," think SD-WAN immediately.',
      'Remember MPLS is valued for private, efficient any-to-any connectivity, not raw internet access — it is a different value proposition than plain broadband.',
    ],
    examAlert:
      'Expect the exam to describe a business requirement (cost-sensitive, guaranteed bandwidth, remote/mobile site) and ask which WAN technology fits best — practice matching requirements to technology, not just definitions.',
    beginnerMistakes: [
      'Assuming all WAN technologies offer the same reliability and cost profile — they represent a real spectrum of tradeoffs.',
      'Confusing MPLS (a private, label-switched WAN service) with plain broadband internet access.',
      'Forgetting SD-WAN is a management/optimization LAYER, not a physical connection type by itself — it works on top of underlying links.',
    ],
    keyTerms: [
      { term: 'Leased line', def: 'A dedicated, private point-to-point WAN connection with guaranteed bandwidth.' },
      { term: 'MPLS', def: 'Multiprotocol Label Switching — an efficient, label-based WAN technology offering private multi-site connectivity.' },
      { term: 'Metro Ethernet', def: 'Ethernet-based WAN connectivity delivered across a metropolitan area.' },
      { term: 'SD-WAN', def: 'Software-Defined WAN — intelligently manages traffic across multiple underlying WAN connections.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is a key advantage of a leased line over broadband internet?',
        options: [
          'It is always cheaper than broadband.',
          'It provides dedicated, guaranteed bandwidth rather than shared, variable capacity.',
          'It only works for wireless connections.',
          'It eliminates the need for any routing equipment.',
        ],
        correct: 1,
        explanation: 'Leased lines offer dedicated capacity with a service-level guarantee, unlike shared broadband connections.',
      },
      {
        prompt: 'What does SD-WAN primarily add on top of existing WAN connections?',
        options: [
          'A completely new physical cabling standard.',
          'An intelligent software layer that dynamically routes traffic across multiple underlying connections for best performance.',
          'A replacement for all IP addressing.',
          'A dedicated satellite uplink.',
        ],
        correct: 1,
        explanation: 'SD-WAN is a management layer that optimizes traffic across whatever underlying links (MPLS, broadband, cellular) are available.',
      },
      {
        prompt: 'Which WAN option would best suit a temporary construction site with no wired infrastructure available?',
        options: ['MPLS', 'Leased line', 'Cellular', 'Metro Ethernet'],
        correct: 2,
        explanation: 'Cellular connectivity requires no fixed-line infrastructure, making it ideal for temporary or remote sites.',
      },
    ],
    miniScenario: {
      prompt: 'A company with 200 small retail branches wants to reduce its expensive MPLS costs while still prioritizing critical sales traffic and using cheaper internet connections where possible.',
      task: 'Recommend a WAN strategy for this company and explain why it fits the stated goals.',
    },
    recap:
      'WAN options span a cost/reliability spectrum: leased lines and MPLS offer dedicated, reliable, expensive connectivity; Metro Ethernet and broadband offer more affordable options; cellular and satellite serve mobile/remote needs; SD-WAN intelligently manages traffic across whichever mix of links a business uses.',
    classroomAnswer:
      '"Every WAN choice is a tradeoff between cost and guaranteed performance — and SD-WAN is increasingly how companies get to have both, by intelligently using cheaper links without sacrificing critical traffic."',
  };

  NetReady.LESSONS['8-6'] = {
    id: '8-6',
    moduleId: 8,
    slug: 'vpn-types-and-tunneling',
    title: 'VPN Types and Tunneling',
    estMinutes: 12,
    outcomes: [
      'Differentiate site-to-site VPNs from remote-access VPNs.',
      'Explain what a VPN tunnel actually does to protect data.',
      'Identify common VPN protocols and their general security characteristics.',
    ],
    whyItMatters:
      'VPNs are the everyday tool that makes secure remote work and secure site interconnection possible — and "how does a VPN actually work" is one of the most common real-world questions a network technician gets asked.',
    simpleEnglish:
      'A VPN (Virtual Private Network) creates an encrypted tunnel across a shared or public network (usually the internet), making traffic private and secure as if it traveled over a dedicated private line. A site-to-site VPN connects two entire networks (like two office branches) continuously, transparently to users. A remote-access VPN connects an individual user\'s device to a private network, commonly used by remote employees. Tunneling protocols like IPsec and SSL/TLS wrap the original data in an encrypted outer layer for the trip across the untrusted network, then unwrap it at the destination.',
    taglish:
      'Ang VPN (Virtual Private Network) ay gumagawa ng naka-encrypt na "tunnel" sa loob ng isang shared o public network (kadalasan ang internet), ginagawang pribado at secure ang traffic na parang dumaan ito sa sarili nitong dedikadong linya. Ang site-to-site VPN ay kumokonekta ng DALAWANG BUONG NETWORK (halimbawa, dalawang sangay ng opisina) nang tuloy-tuloy, hindi na kailangang gawin ito ng user nang manu-mano. Ang remote-access VPN naman ay kumokonekta ng ISANG device ng user papunta sa isang pribadong network — karaniwang ginagamit ng mga remote na empleyado. Ang mga tunneling protocol tulad ng IPsec at SSL/TLS ang bumabalot sa orihinal na data gamit ang naka-encrypt na panlabas na layer para sa biyahe nito papasok sa hindi mapagkakatiwalaang network, tapos binubuksan ito pagdating sa destinasyon.',
    analogy: {
      title: 'Naka-lock na sobreng dumadaan sa pampublikong koreo',
      text:
        'Isipin mo ang isang normal na internet connection parang nagpapadala ka ng postcard — kahit sino sa daan puwedeng basahin ang laman nito. Ang VPN naman ay parang naglalagay ka ng iyong sulat sa loob ng naka-lock na sobre bago ito ipadala sa parehong pampublikong koreo (internet) — kahit dumaan ito sa parehong daan, hindi na mababasa ng ibang tao ang laman nito hanggang sa marating nito ang tamang tatanggap na may susi.',
    },
    howItWorks: [
      'A site-to-site VPN establishes a persistent tunnel between two network gateways (routers or firewalls), so all traffic between the two sites is automatically encrypted without any per-user action.',
      'A remote-access VPN requires a user to run client software (or use a browser-based portal) to establish a temporary encrypted tunnel from their individual device into the private network.',
      'IPsec (Internet Protocol Security) operates at the network layer, commonly used for site-to-site VPNs, providing strong encryption and authentication.',
      'SSL/TLS VPNs operate at a higher layer, often used for remote-access VPNs because they can work through a standard web browser without dedicated client software in some configurations.',
      'Split tunneling (an optional VPN configuration) sends only traffic destined for the private network through the tunnel, while other internet traffic goes directly — a tradeoff between security and performance/cost.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>VPN Type</th><th>Connects</th><th>Typical Use</th></tr></thead>
        <tbody>
          <tr><td>Site-to-site</td><td>Two entire networks</td><td>Connecting branch offices continuously</td></tr>
          <tr><td>Remote-access</td><td>One user device to a private network</td><td>Remote/traveling employees</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'An employee working from home opens a remote-access VPN client to securely reach internal company file servers, while that same company\'s branch offices maintain always-on site-to-site VPN tunnels between their routers so employees at either location never have to think about it.',
    proTips: [
      'When a scenario describes "connecting an individual traveling employee," think remote-access VPN; when it describes "two office locations always connected," think site-to-site.',
      'Split tunneling improves performance (less traffic through the tunnel) but reduces the security team\'s visibility into the user\'s non-corporate internet traffic — know this tradeoff.',
    ],
    examAlert:
      'The exam may describe VPN behavior (persistent gateway-to-gateway vs. individual user-initiated) and ask you to classify it as site-to-site or remote-access — practice recognizing the pattern from behavior, not just the name.',
    beginnerMistakes: [
      'Assuming all VPNs work identically regardless of type — site-to-site and remote-access solve different problems for different audiences.',
      'Forgetting that a VPN protects data in transit across the untrusted network, but does not inherently secure the endpoints themselves.',
      'Confusing split tunneling\'s performance benefit with a security benefit — it is actually a security tradeoff, not a pure win.',
    ],
    keyTerms: [
      { term: 'VPN', def: 'Virtual Private Network — an encrypted tunnel providing secure communication over a shared or public network.' },
      { term: 'Site-to-site VPN', def: 'A persistent VPN tunnel connecting two entire networks, transparent to end users.' },
      { term: 'Remote-access VPN', def: 'A VPN connecting an individual user\'s device to a private network.' },
      { term: 'IPsec', def: 'A network-layer VPN protocol suite commonly used for site-to-site VPNs.' },
      { term: 'Split tunneling', def: 'A VPN configuration sending only private-network-bound traffic through the tunnel, with other traffic going directly to the internet.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the key difference between a site-to-site VPN and a remote-access VPN?',
        options: [
          'Site-to-site connects one user device; remote-access connects two networks.',
          'Site-to-site connects two entire networks continuously; remote-access connects an individual user\'s device to a private network.',
          'They are functionally identical, just different names.',
          'Remote-access VPNs never use encryption.',
        ],
        correct: 1,
        explanation: 'Site-to-site links whole networks persistently; remote-access serves individual users connecting on demand.',
      },
      {
        prompt: 'What does a VPN tunnel primarily protect?',
        options: [
          'It protects data in transit across an untrusted network by encrypting it.',
          'It physically secures the end-user device from theft.',
          'It guarantees the destination server is not compromised.',
          'It replaces the need for any authentication.',
        ],
        correct: 0,
        explanation: 'A VPN encrypts data as it crosses the untrusted network; it does not secure the endpoints themselves.',
      },
      {
        prompt: 'What is the tradeoff involved in enabling split tunneling?',
        options: [
          'It has no real tradeoff — it is purely beneficial.',
          'It improves performance by not routing all traffic through the tunnel, but reduces visibility into the user\'s other internet traffic.',
          'It doubles the encryption strength automatically.',
          'It disables remote access entirely.',
        ],
        correct: 1,
        explanation: 'Split tunneling trades some security visibility for improved performance and reduced tunnel load.',
      },
    ],
    miniScenario: {
      prompt: 'A company has two permanent office branches that always need to share resources, and also has traveling salespeople who occasionally need secure access to internal systems from hotels and airports.',
      task: 'Recommend which VPN type fits each of these two situations.',
    },
    recap:
      'VPNs create encrypted tunnels over untrusted networks. Site-to-site VPNs persistently connect two entire networks; remote-access VPNs connect individual user devices. IPsec and SSL/TLS are common tunneling protocols, and split tunneling trades some visibility for performance.',
    classroomAnswer:
      '"Two offices that always need each other — site-to-site. One traveling employee who needs in sometimes — remote-access. Either way, the tunnel is just an encrypted wrapper around the trip across the internet."',
  };
}(window.NetReady));
