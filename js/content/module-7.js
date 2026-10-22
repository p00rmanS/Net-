/**
 * content/module-7.js — Module 7: Switching, VLANs, and Layer 2
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  NetReady.LESSONS['7-1'] = {
    id: '7-1',
    moduleId: 7,
    slug: 'vlans-access-trunk-8021q',
    title: 'VLANs: Purpose, Access vs. Trunk Ports, and 802.1Q Tagging',
    estMinutes: 13,
    outcomes: [
      'Explain why VLANs exist and what problem they solve.',
      'Differentiate an access port from a trunk port.',
      'Explain how 802.1Q tagging lets one physical link carry multiple VLANs.',
    ],
    whyItMatters:
      'VLANs are the single most common way real organizations segment their networks — nearly every office, campus, and data center switch you will ever touch is running them.',
    simpleEnglish:
      'A VLAN (Virtual LAN) is a logical grouping of devices on a switch that behaves as its own separate network, even if the devices are physically plugged into the same switch. An access port belongs to exactly one VLAN and is used to connect end devices like PCs and printers. A trunk port carries traffic for multiple VLANs simultaneously, typically used between switches, using 802.1Q tags inserted into each frame to identify which VLAN it belongs to.',
    taglish:
      'Ang VLAN ay parang paghahati ng isang malaking silid gamit ang mga hindi nakikitang pader — kahit magkasama sa parehong physical switch ang mga device, puwede silang gawing magkahiwalay na "silid" o network, hiwalay ang broadcast at trapiko nila sa isa\'t isa. Ang access port ay parang pinto na papunta lang sa isang specific na silid (isang VLAN lang) — dito ikinokonekta ang mga ordinaryong device tulad ng computer o printer. Ang trunk port naman parang malaking corridor na dinadaanan ng maraming silid nang sabay-sabay — dito dumadaan ang traffic ng MARAMING VLAN, karaniwang ginagamit sa pagitan ng dalawang switch. Para malaman kung aling silid (VLAN) ang pinanggalingan ng bawat frame sa trunk, may "tatak" o tag (802.1Q) na idinadagdag dito.',
    analogy: {
      title: 'Silid-silid sa loob ng isang gusali, may corridor sa gitna',
      text:
        'Isipin mo ang isang malaking opisina na may iisang building (physical switch) pero hinati sa maraming departamento gamit ang hindi nakikitang mga pader (VLANs) — HR sa isang "silid," Accounting sa isa pa, kahit magkalapit sila physically. Ang access port ay parang pinto papunta sa isang partikular na silid lang. Ang trunk port naman parang service corridor na ginagamit ng lahat ng departamento nang sabay — pero para hindi maguluhan kung saang departamento galing ang bawat parcel (frame), may sticker o tag na nakalagay dito (802.1Q) na nagsasabi, "Ito ay para sa HR" o "Ito ay para sa Accounting."',
    },
    howItWorks: [
      'Without VLANs, every device on a switch shares one broadcast domain — as the network grows, broadcast traffic and security exposure grow with it.',
      'A VLAN creates a separate broadcast domain in software, without needing separate physical switches for each group.',
      'An access port is assigned to exactly one VLAN; frames leaving that port have no VLAN tag (the switch strips it before delivery to the end device).',
      'A trunk port carries frames for multiple VLANs; 802.1Q inserts a 4-byte tag into the Ethernet frame header identifying the VLAN ID (1-4094) before the frame crosses the trunk.',
      'The receiving switch reads the tag to know which VLAN the frame belongs to, then forwards it appropriately — access ports on the far end never see the tag itself.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Two switches connected by a trunk port carrying VLAN 10 and VLAN 20, each switch also has access ports for end devices in each VLAN">
        <div class="net-row">
          <div class="net-node">Switch A<br><small>VLAN 10 + VLAN 20 access ports</small></div>
          <div class="net-node highlight">Trunk Port<br><small>802.1Q tagged: VLAN 10, VLAN 20</small></div>
          <div class="net-node">Switch B<br><small>VLAN 10 + VLAN 20 access ports</small></div>
        </div>
      </div>`,
    },
    realWorldExample:
      'A hospital might put medical devices on VLAN 10, guest Wi-Fi on VLAN 20, and administrative computers on VLAN 30 — all sharing the same physical switches and cabling, but completely isolated from each other in terms of broadcast traffic and, with proper ACLs, security.',
    proTips: [
      'When troubleshooting "device can\'t reach anything," always check its VLAN assignment first — a device accidentally placed in the wrong VLAN can be completely isolated even with perfect cabling.',
      'A trunk port carrying VLANs it should not is a common, easily overlooked security gap — only trunk the VLANs actually needed on that link.',
    ],
    examAlert:
      'The exam commonly describes a device that cannot communicate with others "on the same switch" — recognize this as classic mis-configured VLAN assignment, not a cabling or IP addressing issue.',
    beginnerMistakes: [
      'Assuming VLANs require separate physical switches — they do not; one switch can host many VLANs.',
      'Forgetting that access ports never see 802.1Q tags — tagging only happens on trunk links between switches (or to a tagged-aware device).',
      'Confusing the VLAN ID range limit (1-4094) or assuming VLAN numbers must be sequential/contiguous.',
    ],
    keyTerms: [
      { term: 'VLAN', def: 'Virtual LAN — a logical grouping of switch ports that behaves as its own separate broadcast domain.' },
      { term: 'Access port', def: 'A switch port assigned to exactly one VLAN, typically connecting an end-user device.' },
      { term: 'Trunk port', def: 'A switch port carrying tagged traffic for multiple VLANs, typically used between switches.' },
      { term: '802.1Q', def: 'The IEEE standard defining how VLAN tags are inserted into Ethernet frames on trunk links.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the main purpose of a VLAN?',
        options: [
          'To physically separate switches into different buildings.',
          'To create a separate logical broadcast domain without needing separate physical switches.',
          'To increase the maximum cable length.',
          'To encrypt traffic between two devices.',
        ],
        correct: 1,
        explanation: 'VLANs let one physical switch infrastructure be logically divided into multiple separate broadcast domains.',
      },
      {
        prompt: 'What is the key difference between an access port and a trunk port?',
        options: [
          'Access ports are always faster than trunk ports.',
          'An access port belongs to one VLAN; a trunk port carries tagged traffic for multiple VLANs.',
          'Trunk ports can only connect end-user devices.',
          'There is no functional difference.',
        ],
        correct: 1,
        explanation: 'Access ports serve a single VLAN for end devices; trunk ports carry multiple VLANs, typically between switches.',
      },
      {
        prompt: 'What does 802.1Q tagging accomplish?',
        options: [
          'It encrypts frames crossing a trunk link.',
          'It inserts a VLAN identifier into the Ethernet frame so the receiving switch knows which VLAN it belongs to.',
          'It converts frames from Ethernet to fiber signaling.',
          'It doubles the maximum frame size automatically.',
        ],
        correct: 1,
        explanation: '802.1Q adds a VLAN ID tag to frames on trunk links so switches can correctly identify and forward VLAN traffic.',
      },
    ],
    miniScenario: {
      prompt: 'A user\'s computer is plugged into the same switch as their coworker\'s, but they cannot see each other on the network at all, even for basic local file sharing.',
      task: 'Name the most likely configuration issue to check first, and explain why.',
    },
    recap:
      'VLANs create separate logical broadcast domains on shared physical switches. Access ports belong to one VLAN and serve end devices; trunk ports carry multiple VLANs between switches using 802.1Q tags.',
    classroomAnswer:
      '"VLANs let me carve one switch into many logical networks — access ports serve individual devices, and trunk ports, tagged with 802.1Q, carry all those VLANs between switches."',
  };

  NetReady.LESSONS['7-2'] = {
    id: '7-2',
    moduleId: 7,
    slug: 'inter-vlan-routing-native-voice-vlan',
    title: 'Inter-VLAN Routing, Native VLAN, and Voice VLAN',
    estMinutes: 12,
    outcomes: [
      'Explain why devices in different VLANs need a router (or Layer 3 switch) to communicate.',
      'Define the native VLAN and explain the risk of leaving it at default.',
      'Explain the purpose of a dedicated voice VLAN.',
    ],
    whyItMatters:
      'VLANs isolate traffic by design — but real organizations still need some devices in different VLANs to talk to each other, which is exactly what inter-VLAN routing solves.',
    simpleEnglish:
      'Since VLANs are separate broadcast domains, devices in different VLANs cannot communicate directly at Layer 2 — a router or Layer 3 switch must route between them, often using a "router-on-a-stick" configuration with subinterfaces, or a Layer 3 switch with switched virtual interfaces (SVIs). The native VLAN is the one VLAN on a trunk link whose traffic is sent untagged; leaving it at the factory default (usually VLAN 1) is a common security risk. A voice VLAN is a dedicated VLAN for IP phone traffic, separating it from regular data traffic for quality and security reasons.',
    taglish:
      'Dahil magkahiwalay na broadcast domain ang bawat VLAN, kailangan ng router o Layer 3 switch para makipag-usap ang mga device sa magkaibang VLAN — hindi ito kayang gawin ng ordinaryong Layer 2 switch mag-isa. Ang native VLAN ay yung isang VLAN sa trunk link na hindi na kailangan pang tatakan (untagged) — kung iniwan mo ito sa default (kadalasan VLAN 1), maaari itong maging security risk dahil predictable at madalas hindi sinasadyang open. Ang voice VLAN naman ay hiwalay na VLAN para sa IP phone traffic — inihihiwalay ito sa regular data traffic para sa mas magandang audio quality at seguridad.',
    analogy: {
      title: 'Kailangan ng interpreter sa pagitan ng dalawang silid',
      text:
        'Isipin mo muli ang mga VLAN parang magkahiwalay na silid na may sariling wika. Kahit magkatabi sila, hindi sila direktang magkakaintindihan nang walang interpreter (router). Ang native VLAN naman parang default na "common area" sa gusali na hindi kailangan ng espesyal na ID badge — kung hindi mo binago ito, kahit sinong estranghero puwedeng dumaan doon nang hindi napapansin, kaya delikado kung iiwan mo itong default.',
    },
    howItWorks: [
      'A "router-on-a-stick" uses one physical router interface divided into subinterfaces, each configured for a specific VLAN, allowing a single link to route between many VLANs.',
      'A Layer 3 switch instead uses SVIs (switched virtual interfaces) — a virtual routing interface for each VLAN, directly on the switch itself, which is more common in modern networks.',
      'The native VLAN on a trunk carries untagged traffic; both ends of the trunk must agree on which VLAN is native, or traffic can leak between VLANs unexpectedly.',
      'Best practice is to change the native VLAN away from the default (VLAN 1) and never use it for actual user traffic, reducing the attack surface for VLAN-hopping techniques.',
      'A voice VLAN is typically configured alongside a data VLAN on the same access port (many IP phones have a built-in switch passthrough for a PC), keeping voice traffic prioritized and separated.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Concept</th><th>What It Solves</th></tr></thead>
        <tbody>
          <tr><td>Router-on-a-stick / SVI</td><td>Lets devices in different VLANs communicate (inter-VLAN routing)</td></tr>
          <tr><td>Native VLAN</td><td>Carries untagged traffic on a trunk — should be changed from default</td></tr>
          <tr><td>Voice VLAN</td><td>Separates IP phone traffic from data for quality and security</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'An office IP phone often has a PC plugged into it — the phone tags its own traffic into the voice VLAN while passing the PC\'s traffic through untouched on the data VLAN, all over a single Ethernet cable.',
    proTips: [
      'Always change the native VLAN to an unused VLAN ID as a standard hardening step on any trunk configuration — this single habit closes a common VLAN-hopping attack vector.',
      'Voice VLANs are usually paired with Quality of Service (QoS) settings to prioritize voice traffic, since call quality suffers noticeably from latency and jitter.',
    ],
    examAlert:
      'Expect a question naming "router-on-a-stick" directly and asking what problem it solves — memorize that phrase as inter-VLAN routing over subinterfaces on a single physical link.',
    beginnerMistakes: [
      'Assuming a Layer 2 switch alone can route traffic between VLANs — it cannot, by definition, without Layer 3 capability.',
      'Leaving the native VLAN at its default value without considering the security implications.',
      'Forgetting that voice and data can share the same physical access port cable via separate VLANs.',
    ],
    keyTerms: [
      { term: 'Inter-VLAN routing', def: 'The process of routing traffic between different VLANs, requiring Layer 3 functionality.' },
      { term: 'Router-on-a-stick', def: 'A configuration using one physical router interface with multiple VLAN-tagged subinterfaces to route between VLANs.' },
      { term: 'SVI (switched virtual interface)', def: 'A virtual Layer 3 interface on a switch representing a VLAN, used for inter-VLAN routing.' },
      { term: 'Native VLAN', def: 'The VLAN on a trunk link whose traffic is sent untagged.' },
      { term: 'Voice VLAN', def: 'A VLAN dedicated to IP phone traffic, separated from regular data traffic.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Why can\'t two devices in different VLANs communicate using only a Layer 2 switch?',
        options: [
          'Layer 2 switches cannot forward any traffic at all.',
          'VLANs are separate broadcast domains, and crossing between them requires Layer 3 routing.',
          'Different VLANs must always use different physical cabling.',
          'Layer 2 switches only support one VLAN at a time.',
        ],
        correct: 1,
        explanation: 'Since each VLAN is its own broadcast domain, a Layer 3 device (router or Layer 3 switch) is required to route between them.',
      },
      {
        prompt: 'What is a security concern with leaving the native VLAN at its factory default?',
        options: [
          'It automatically encrypts all traffic, which is undesirable.',
          'A predictable, unchanged native VLAN is a known target for VLAN-hopping techniques.',
          'It prevents any devices from connecting at all.',
          'It disables inter-VLAN routing entirely.',
        ],
        correct: 1,
        explanation: 'Leaving the native VLAN at default is a well-known, easily exploitable configuration weakness.',
      },
      {
        prompt: 'What is the purpose of a dedicated voice VLAN?',
        options: [
          'To block all voice traffic for security.',
          'To separate IP phone traffic from data traffic for quality and security.',
          'To replace the need for a data VLAN entirely.',
          'To increase the maximum VLAN ID range.',
        ],
        correct: 1,
        explanation: 'Voice VLANs isolate and prioritize phone traffic, improving call quality and reducing security exposure.',
      },
    ],
    miniScenario: {
      prompt: 'A company wants an IP phone and the employee\'s PC to share a single Ethernet cable and switch port, while keeping voice and data traffic logically separated.',
      task: 'Explain what VLAN configuration accomplishes this, in one or two sentences.',
    },
    recap:
      'Inter-VLAN routing (via router-on-a-stick or Layer 3 switch SVIs) lets devices in different VLANs communicate. The native VLAN carries untagged trunk traffic and should be changed from default. Voice VLANs separate phone traffic from data on the same physical link.',
    classroomAnswer:
      '"VLANs isolate traffic by design, so the moment two VLANs need to talk, I need Layer 3 — and I always double check the native VLAN has been changed from its default."',
  };

  NetReady.LESSONS['7-3'] = {
    id: '7-3',
    moduleId: 7,
    slug: 'spanning-tree-protocol',
    title: 'Spanning Tree Protocol (STP/RSTP)',
    estMinutes: 13,
    outcomes: [
      'Explain why Layer 2 loops are dangerous and how STP prevents them.',
      'Define root bridge and explain how one is elected.',
      'Identify the difference between STP and RSTP.',
    ],
    whyItMatters:
      'Redundant switch links are great for reliability but create loops that can melt down an entire network in seconds — STP is the safety mechanism that makes redundancy possible without disaster.',
    simpleEnglish:
      'When switches are connected with redundant (backup) links for reliability, those extra links can create Layer 2 loops, causing broadcast storms that overwhelm the network almost instantly. Spanning Tree Protocol (STP) prevents this by electing a root bridge and calculating a loop-free logical path, blocking redundant links until they are needed (e.g., if the primary link fails). RSTP (Rapid STP) does the same job but converges much faster after a topology change.',
    taglish:
      'Kapag may mga redundant na kable sa pagitan ng mga switch (para sa backup, kung sakaling masira ang isa), pwede itong lumikha ng loop — at kapag nangyari iyon, magkakaroon ng "broadcast storm" na parang walang katapusang echo na paulit-ulit na pumapalibot sa network, sapat para i-crash ang buong sistema sa loob lang ng ilang segundo. Ang Spanning Tree Protocol (STP) ang solusyon dito — humahalal ito ng "root bridge" (parang pangunahing sentro), at pagkatapos, kina-calculate nito ang isang landas na walang loop, tapos ibinabalik yung ibang redundant links sa "blocking" mode hanggang kailanganin lang sila (halimbawa, kung masira ang pangunahing link). Ang RSTP (Rapid STP) ay parehong ginagawa pero mas mabilis mag-adjust kapag may pagbabago sa network.',
    analogy: {
      title: 'Backup na kalsada na sarado hangga\'t hindi kailangan',
      text:
        'Isipin mo ang dalawang switch na magkakonekta gamit ang dalawang kable bilang backup sa isa\'t isa — parang dalawang kalsada papunta sa parehong destinasyon. Kung parehong bukas ang dalawang kalsada nang sabay, maaaring maligaw ang mga sasakyan (data) sa walang-katapusang pag-ikot (loop). Ang STP ang parang traffic authority na nagsasabi, "Isa lang muna ang bukas na kalsada, ang isa naka-standby lang" — kaya walang paligoy-ligoy, pero kung masira ang unang kalsada, agad na bubuksan ang backup.',
    },
    howItWorks: [
      'STP elects a single root bridge (the switch with the lowest bridge ID, a combination of priority and MAC address) as the reference point for the loop-free topology.',
      'Every other switch calculates the shortest path back to the root bridge and designates one root port accordingly.',
      'Redundant paths are placed into a blocking state, meaning they do not forward normal traffic but remain ready to activate if the active path fails.',
      'Port roles include root port (best path to root), designated port (best path for a segment), and blocking/alternate port (backup, not currently forwarding).',
      'RSTP (802.1w) achieves the same loop-free outcome but converges in seconds instead of the 30-50 seconds classic STP can take, which matters enormously in real production networks.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Three switches connected in a triangle with STP blocking one redundant link to prevent a loop">
        <div class="net-row">
          <div class="net-node highlight">Root Bridge</div>
          <div class="net-node">Switch B</div>
        </div>
        <div class="net-line">Redundant link: BLOCKED (standby) unless the active path fails</div>
        <div class="net-node">Switch C</div>
      </div>`,
    },
    realWorldExample:
      'A data center wiring three switches in a triangle for redundancy relies on STP to keep exactly one path active at a time — without it, a single accidental loop-forming cable connection could bring the whole segment down within seconds.',
    proTips: [
      'A sudden, unexplained network-wide slowdown right after someone plugs in a new cable is a classic symptom of an accidental Layer 2 loop — check STP status immediately.',
      'RSTP is the modern default in virtually all current switches; classic STP is mostly a legacy/exam-theory reference point today.',
    ],
    examAlert:
      'The exam frequently tests root bridge election (lowest bridge ID wins) and the difference between STP\'s slow convergence and RSTP\'s fast convergence — know both cold.',
    beginnerMistakes: [
      'Assuming redundant links are automatically safe without STP — without it, redundancy is exactly what causes catastrophic loops.',
      'Forgetting that a blocked port is not broken — it is intentionally standing by, ready to activate if needed.',
      'Confusing STP\'s slower convergence time with RSTP\'s much faster one when comparing the two on the exam.',
    ],
    keyTerms: [
      { term: 'STP', def: 'Spanning Tree Protocol — prevents Layer 2 loops by electing a root bridge and blocking redundant paths. (Careful: "STP" also means Shielded Twisted Pair cabling in Module 3 — same acronym, completely different topic, decide from context.)' },
      { term: 'Root bridge', def: 'The switch elected as the reference point for the STP loop-free topology, chosen by lowest bridge ID.' },
      { term: 'Blocking port', def: 'A port that does not forward traffic but stands by as a backup path.' },
      { term: 'RSTP', def: 'Rapid Spanning Tree Protocol — achieves the same loop prevention as STP but converges far faster.' },
      { term: 'Broadcast storm', def: 'A network meltdown caused by broadcast traffic circulating endlessly through a Layer 2 loop.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What problem does Spanning Tree Protocol solve?',
        options: [
          'It encrypts traffic between switches.',
          'It prevents Layer 2 loops and the broadcast storms they cause, while still allowing redundant links.',
          'It assigns IP addresses to switches.',
          'It increases the maximum VLAN count.',
        ],
        correct: 1,
        explanation: 'STP\'s core purpose is enabling safe physical redundancy without creating destructive Layer 2 loops.',
      },
      {
        prompt: 'How is the root bridge elected in STP?',
        options: [
          'Randomly, by the first switch to power on.',
          'By the switch with the lowest bridge ID (priority + MAC address).',
          'By whichever switch has the most connected ports.',
          'By manual IP address configuration only.',
        ],
        correct: 1,
        explanation: 'The switch with the lowest bridge ID becomes the root bridge, the reference point for the entire topology.',
      },
      {
        prompt: 'What is the main advantage of RSTP over classic STP?',
        options: [
          'RSTP supports more VLANs.',
          'RSTP converges to a stable topology far faster after a change.',
          'RSTP eliminates the need for a root bridge.',
          'RSTP only works on wireless networks.',
        ],
        correct: 1,
        explanation: 'RSTP achieves the same loop-free result as STP but recovers from topology changes in seconds instead of tens of seconds.',
      },
    ],
    miniScenario: {
      prompt: 'Right after a technician connects a new redundant cable between two switches, the entire office network suddenly grinds to a halt.',
      task: 'Explain what likely happened and why STP (if properly enabled) should have prevented it.',
    },
    recap:
      'STP prevents Layer 2 loops by electing a root bridge and blocking redundant paths until needed, avoiding broadcast storms. RSTP performs the same function with much faster convergence, and is the modern standard.',
    classroomAnswer:
      '"Redundant links are only safe because STP is quietly managing them — blocking the backup path until it\'s actually needed, and RSTP does that recovery in seconds, not tens of seconds."',
  };

  NetReady.LESSONS['7-4'] = {
    id: '7-4',
    moduleId: 7,
    slug: 'interface-config-port-security-mtu',
    title: 'Interface Configuration, Port Security, and MTU',
    estMinutes: 12,
    outcomes: [
      'Explain what port security accomplishes and how it works.',
      'Define MTU and explain what jumbo frames are used for.',
      'Identify common interface configuration issues technicians must check.',
    ],
    whyItMatters:
      'Basic interface hygiene — port security, correct duplex/speed, and appropriate MTU — quietly prevents an enormous share of real-world network problems and security incidents.',
    simpleEnglish:
      'Port security restricts which MAC addresses are allowed to connect to a specific switch port, helping prevent unauthorized devices from joining the network. MTU (Maximum Transmission Unit) is the largest frame size a link will carry, typically 1500 bytes on standard Ethernet; jumbo frames raise this limit (often to 9000 bytes) to improve efficiency for large data transfers, but every device along the path must support the same higher MTU or fragmentation/drops occur. Interface configuration also includes matching speed and duplex settings between connected devices.',
    taglish:
      'Ang port security ay naglilimita kung aling mga MAC address lang ang pwedeng kumonekta sa isang specific na switch port — nakakatulong ito para maiwasan ang unauthorized na device na basta na lang sumali sa network. Ang MTU (Maximum Transmission Unit) ay ang pinakamalaking laki ng frame na kayang dalhin ng isang link — karaniwan, 1500 bytes lang ito sa standard Ethernet. Ang jumbo frames ay nagpapataas ng limitasyong ito (madalas hanggang 9000 bytes) para maging mas efficient sa paglipat ng malalaking data — pero kailangan LAHAT ng device sa buong landas ay suportado rin ang mas mataas na MTU, kung hindi, magkakaroon ng fragmentation o pagkawala ng data. Ang interface configuration din ay kasama ang pagtutugma ng speed at duplex settings sa pagitan ng dalawang magkakonektang device.',
    analogy: {
      title: 'Guest list sa pinto, at sukat ng kahon sa padala',
      text:
        'Isipin mo ang port security parang guest list sa pinto ng isang party — pinapayagan lang pumasok ang mga pangalan (MAC addresses) na nasa listahan. Ang MTU naman parang pinakamalaking sukat ng kahon na tinatanggap ng isang courier — kung ipadala mo ang isang sobrang laking kahon (frame) sa isang courier na may maliit na limitasyon, kailangan mo itong hatiin sa mas maliliit na kahon (fragmentation), o baka basta na lang tanggihan.',
    },
    howItWorks: [
      'Port security can limit the number of MAC addresses allowed on a port, statically define allowed addresses, or dynamically learn and lock the first address(es) seen.',
      'Violations (an unauthorized MAC appearing) can trigger actions like dropping traffic, disabling the port, or just logging an alert, depending on configuration.',
      'Standard Ethernet MTU is 1500 bytes; jumbo frames raise this (commonly to 9000 bytes) to reduce per-frame overhead for high-throughput scenarios like storage traffic or data center backbones.',
      'If MTU is mismatched along a path, large frames may be fragmented (if allowed) or silently dropped (if fragmentation is disabled), causing confusing intermittent performance issues.',
      'Speed and duplex mismatches between a switch port and connected device can cause excessive collisions or extremely poor performance even though the link technically "connects."',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Setting</th><th>Typical Value</th><th>Risk If Misconfigured</th></tr></thead>
        <tbody>
          <tr><td>Port security</td><td>Limit to 1-2 known MAC addresses</td><td>Unauthorized device access</td></tr>
          <tr><td>Standard MTU</td><td>1500 bytes</td><td>Fragmentation/drops if mismatched with jumbo frames</td></tr>
          <tr><td>Jumbo frame MTU</td><td>~9000 bytes</td><td>Must be supported end-to-end or performance suffers</td></tr>
          <tr><td>Speed/Duplex</td><td>Auto-negotiated or matched manually</td><td>Collisions, poor throughput if mismatched</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A storage area network (SAN) between servers and a storage array commonly enables jumbo frames across every switch and NIC in the path to reduce overhead when moving very large blocks of data — forgetting even one device in that path causes mysterious performance problems.',
    proTips: [
      'When enabling jumbo frames, change the MTU on every device along the entire path at the same time — a single mismatched device can silently degrade performance for everyone.',
      'Port security violations are a great first thing to check when investigating "a device randomly lost network access" tickets.',
    ],
    examAlert:
      'Remember the standard Ethernet MTU value (1500 bytes) and the common jumbo frame value (9000 bytes) — the exam may ask you to recognize symptoms of an MTU mismatch versus other physical-layer problems.',
    beginnerMistakes: [
      'Enabling jumbo frames on only some devices in a path instead of the entire end-to-end route.',
      'Forgetting that port security can lock out even legitimate devices if a network card is replaced (changing the MAC address) without updating the allowed list.',
      'Assuming a link that "connects" is automatically performing well — speed/duplex mismatches can quietly cripple throughput.',
    ],
    keyTerms: [
      { term: 'Port security', def: 'A switch feature restricting which MAC addresses are permitted to connect to a specific port.' },
      { term: 'MTU', def: 'Maximum Transmission Unit — the largest frame size a network link will carry.' },
      { term: 'Jumbo frame', def: 'An Ethernet frame larger than the standard 1500-byte MTU, often up to 9000 bytes, used to improve throughput efficiency.' },
      { term: 'Duplex mismatch', def: 'A misconfiguration where two connected devices disagree on half- vs. full-duplex operation, degrading performance.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What does port security primarily control?',
        options: [
          'Which VLANs are allowed on a trunk link.',
          'Which MAC addresses are permitted to connect to a specific switch port.',
          'The maximum frame size on a link.',
          'The encryption method used on a link.',
        ],
        correct: 1,
        explanation: 'Port security restricts port access based on allowed MAC addresses, helping prevent unauthorized connections.',
      },
      {
        prompt: 'What is the standard MTU for Ethernet?',
        options: ['500 bytes', '1500 bytes', '4500 bytes', '9000 bytes'],
        correct: 1,
        explanation: '1500 bytes is the standard Ethernet MTU; 9000 bytes is a common jumbo frame value.',
      },
      {
        prompt: 'Why must jumbo frames be enabled on every device along a path, not just some?',
        options: [
          'It is only a cosmetic setting with no real effect.',
          'A mismatched MTU somewhere in the path can cause fragmentation or dropped frames, degrading performance.',
          'Jumbo frames automatically disable themselves if only partially configured.',
          'Only routers need jumbo frames enabled, never switches.',
        ],
        correct: 1,
        explanation: 'Inconsistent MTU along a path is a common, hard-to-diagnose cause of performance problems.',
      },
    ],
    miniScenario: {
      prompt: 'A server\'s network card was just replaced after a hardware failure, and now it cannot connect to the network at all, even though cabling and switch port both test fine.',
      task: 'Name a switch-side configuration that could explain this, and why replacing hardware would trigger it.',
    },
    recap:
      'Port security restricts switch port access by MAC address. MTU defines the largest frame a link carries (1500 bytes standard, up to 9000 for jumbo frames), which must match end-to-end. Speed/duplex mismatches silently degrade performance even on a "connected" link.',
    classroomAnswer:
      '"A link that connects isn\'t the same as a link that works well — I always check port security, MTU consistency, and speed/duplex matching before assuming a physical connection is fine."',
  };

  NetReady.LESSONS['7-5'] = {
    id: '7-5',
    moduleId: 7,
    slug: 'link-aggregation-and-layer2-attacks',
    title: 'Link Aggregation (LACP) and Layer 2 Attacks',
    estMinutes: 13,
    outcomes: [
      'Explain what link aggregation accomplishes and how LACP negotiates it.',
      'Identify common Layer 2 attacks: VLAN hopping, MAC flooding, ARP spoofing.',
      'Explain how DHCP snooping and Dynamic ARP Inspection defend against these attacks.',
    ],
    whyItMatters:
      'Layer 2 feels "local and safe," but it hosts some of the most classic, still-common attacks in networking — and the defenses against them are directly testable, practical switch features.',
    simpleEnglish:
      'Link aggregation combines multiple physical links between two devices into one logical link, increasing bandwidth and providing redundancy; LACP (Link Aggregation Control Protocol) automatically negotiates and manages this bundling. Layer 2 attacks include VLAN hopping (tricking a switch into granting access to VLANs the attacker should not reach), MAC flooding (overwhelming a switch\'s MAC address table to force it into flooding all traffic, which an attacker can then capture), and ARP spoofing (sending forged ARP replies to redirect traffic through an attacker\'s device). DHCP snooping and Dynamic ARP Inspection (DAI) are switch features that defend against rogue DHCP servers and ARP-based attacks respectively.',
    taglish:
      'Ang link aggregation ay pagsasama-sama ng maraming physical na koneksyon sa pagitan ng dalawang device papunta sa isang "logical" na koneksyon — nagdaragdag ito ng bandwidth at nagbibigay ng redundancy. Ang LACP ang protocol na awtomatikong nag-aayos nito. May mga karaniwang atake sa Layer 2: ang VLAN hopping ay panlolokong pumasok sa VLAN na hindi dapat ma-access ng attacker; ang MAC flooding ay pagbaha ng maraming pekeng MAC address para mapuno ang MAC table ng switch, kaya mapipilitan itong i-flood ang lahat ng traffic sa lahat ng port (na puwedeng i-capture ng attacker); ang ARP spoofing ay pagpapadala ng pekeng ARP reply para i-redirect ang traffic papunta muna sa device ng attacker bago ito ipasa sa tunay na destinasyon. Ang DHCP snooping at Dynamic ARP Inspection (DAI) ay mga switch feature na nagtatanggol laban sa rogue DHCP server at ARP-based na atake, ayon sa pagkakabanggit.',
    analogy: {
      title: 'Pagsasanib ng mga daanan, at mga manloloko sa checkpoint',
      text:
        'Isipin mo ang link aggregation parang pagsasanib ng dalawa o higit pang makikitid na kalsada papunta sa isang malapad na highway — mas maraming sasakyan ang kayang dumaan nang sabay-sabay, at kung masira ang isang lane, may iba pa. Ang MAC flooding naman parang pagpapasok ng napakaraming pekeng ID sa isang maliit na guest book (MAC table) hanggang mapuno ito — kapag puno na, mapipilitan ang "security guard" (switch) na hayaan na lang ang lahat dumaan sa lahat ng pinto, kaya mas madaling makinig ang manloloko sa lahat ng usapan. Ang ARP spoofing naman parang nagpapanggap na "post office" sa gitna ng dalawang taong nagsusulatan, para mabasa niya muna ang bawat sulat bago ito ipasa.',
    },
    howItWorks: [
      'LACP negotiates which physical links can be bundled into an aggregated group, balancing traffic across them and automatically removing a failed link from the bundle without breaking the connection.',
      'VLAN hopping techniques (like double-tagging) attempt to make a switch forward traffic into a VLAN the attacker\'s port should not have access to.',
      'MAC flooding sends a massive number of fake source MAC addresses to exhaust a switch\'s MAC address table capacity, forcing it into a fail-open flooding behavior that an attacker can sniff.',
      'ARP spoofing (or ARP poisoning) sends forged ARP replies claiming the attacker\'s MAC address corresponds to another device\'s IP (often the default gateway), redirecting victim traffic through the attacker for interception (an on-path attack).',
      'DHCP snooping designates trusted vs. untrusted ports, blocking DHCP server responses from untrusted ports to prevent rogue DHCP servers from handing out malicious configuration.',
      'Dynamic ARP Inspection (DAI) validates ARP packets against a trusted binding table (often built from DHCP snooping data), dropping forged ARP replies before they can poison other devices.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Attack</th><th>What It Does</th><th>Defense</th></tr></thead>
        <tbody>
          <tr><td>VLAN hopping</td><td>Gains access to a VLAN the attacker shouldn't reach</td><td>Disable unused ports, set unused native VLAN</td></tr>
          <tr><td>MAC flooding</td><td>Overwhelms MAC table, forces traffic flooding</td><td>Port security (limit MAC addresses per port)</td></tr>
          <tr><td>ARP spoofing</td><td>Redirects traffic via forged ARP replies</td><td>Dynamic ARP Inspection (DAI)</td></tr>
          <tr><td>Rogue DHCP server</td><td>Hands out malicious network configuration</td><td>DHCP snooping</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A SOC analyst noticing unusual amounts of traffic being sniffed on a single port might discover a MAC flooding attack in progress — the fix (port security limiting MAC addresses per port) is a simple, already-built-in switch feature.',
    proTips: [
      'Pairing DHCP snooping with Dynamic ARP Inspection is a standard, high-value hardening combo — DHCP snooping builds the trusted binding table that DAI then relies on.',
      'Disabling unused switch ports and setting an unused VLAN as the native VLAN closes off two of the easiest VLAN-hopping entry points at almost no cost.',
    ],
    examAlert:
      'The exam commonly pairs each Layer 2 attack with its specific defense — memorize the attack-to-defense pairing (MAC flooding → port security, ARP spoofing → DAI, rogue DHCP → DHCP snooping) as a set.',
    beginnerMistakes: [
      'Confusing MAC flooding (overwhelms the MAC table to force flooding) with VLAN hopping (gains unauthorized VLAN access) — they are different attacks with different mechanisms.',
      'Assuming ARP spoofing only affects the two directly targeted devices — it commonly targets the default gateway, silently intercepting traffic for an entire subnet.',
      'Forgetting that link aggregation is about combining links for bandwidth/redundancy, unrelated to any of these security topics, despite both being "Layer 2 switching" concepts.',
    ],
    keyTerms: [
      { term: 'LACP', def: 'Link Aggregation Control Protocol — negotiates and manages bundling multiple physical links into one logical link.' },
      { term: 'VLAN hopping', def: 'An attack technique attempting to gain unauthorized access to a VLAN.' },
      { term: 'MAC flooding', def: 'An attack that overwhelms a switch\'s MAC address table, forcing it to flood traffic to all ports.' },
      { term: 'ARP spoofing', def: 'An attack sending forged ARP replies to redirect traffic through an attacker\'s device.' },
      { term: 'DHCP snooping', def: 'A switch feature that blocks unauthorized DHCP server responses from untrusted ports.' },
      { term: 'Dynamic ARP Inspection (DAI)', def: 'A switch feature that validates ARP packets against a trusted binding table to block spoofed replies.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What does LACP accomplish?',
        options: [
          'It encrypts traffic between two switches.',
          'It negotiates and manages combining multiple physical links into one logical, higher-bandwidth link.',
          'It prevents VLAN hopping attacks.',
          'It assigns IP addresses automatically.',
        ],
        correct: 1,
        explanation: 'LACP is the protocol that negotiates link aggregation bundles for increased bandwidth and redundancy.',
      },
      {
        prompt: 'Which switch feature specifically defends against forged ARP replies?',
        options: ['DHCP snooping', 'Dynamic ARP Inspection (DAI)', 'Port security', 'LACP'],
        correct: 1,
        explanation: 'DAI validates ARP packets against a trusted binding table, dropping forged replies before they cause harm.',
      },
      {
        prompt: 'What does MAC flooding attempt to accomplish?',
        options: [
          'Gain access to a restricted VLAN.',
          'Overwhelm a switch\'s MAC address table, forcing it to flood traffic to all ports so an attacker can sniff it.',
          'Redirect traffic through a forged default gateway.',
          'Assign malicious DHCP configuration to victims.',
        ],
        correct: 1,
        explanation: 'MAC flooding exhausts table capacity to force fail-open flooding behavior, enabling traffic interception.',
      },
    ],
    miniScenario: {
      prompt: 'A SOC analyst notices that a laptop on the network is somehow intercepting traffic meant for the default gateway.',
      task: 'Name the most likely attack technique in use, and name the switch feature that would have prevented it.',
    },
    recap:
      'LACP bundles multiple physical links into one logical link for bandwidth and redundancy. Layer 2 attacks include VLAN hopping, MAC flooding, and ARP spoofing — defended against respectively through careful port/VLAN hygiene, port security, and Dynamic ARP Inspection, often paired with DHCP snooping.',
    classroomAnswer:
      '"Every classic Layer 2 attack has a matching built-in switch defense — MAC flooding gets port security, ARP spoofing gets DAI, rogue DHCP gets DHCP snooping — it\'s just a matter of turning them on."',
  };

  NetReady.LESSONS['7-6'] = {
    id: '7-6',
    moduleId: 7,
    slug: 'common-networking-appliances',
    title: 'Common Networking Appliances: Routers, Firewalls, NAS, SAN, and More',
    estMinutes: 12,
    outcomes: [
      'Match common networking appliances to their primary function.',
      'Differentiate NAS from SAN.',
      'Explain where firewalls and IDS/IPS fit relative to routers and switches.',
    ],
    whyItMatters:
      'Real job postings and real exam questions constantly expect you to recognize appliances by name and know at a glance what each one actually does — this lesson is a fast, practical reference for that recognition skill.',
    simpleEnglish:
      'A network relies on many specialized appliances working together. Routers forward packets between networks; switches forward frames within a network. Firewalls filter traffic based on rules to block unwanted access. IDS (Intrusion Detection System) monitors and alerts on suspicious activity without blocking it; IPS (Intrusion Prevention System) does the same but can actively block detected threats. Load balancers and proxies (covered in Module 6) manage and forward client/server traffic. NAS (Network Attached Storage) provides file-level storage accessible over the network; SAN (Storage Area Network) provides block-level storage over a dedicated high-speed network, typically for demanding server workloads.',
    taglish:
      'Ang isang network ay umaasa sa maraming espesyal na appliance na magkakasamang gumagana. Ang router ang nagpapadala ng packets sa pagitan ng magkaibang network; ang switch naman nagpapadala ng frames sa loob mismo ng isang network. Ang firewall ay sumasala ng traffic base sa mga alituntunin para harangin ang hindi gustong access. Ang IDS (Intrusion Detection System) ay nagmo-monitor at nag-aalerto sa kakaibang aktibidad pero hindi ito basta humaharang; ang IPS (Intrusion Prevention System) naman parehong ginagawa pero aktibo niya ring hinaharang ang nakitang banta. Ang NAS (Network Attached Storage) ay nagbibigay ng storage na naa-access sa antas ng file sa loob ng network; ang SAN (Storage Area Network) naman nagbibigay ng storage sa antas ng block gamit ang dedikadong high-speed network, karaniwang para sa mabibigat na workload ng server.',
    analogy: {
      title: 'Mga espesyalistang tauhan sa isang malaking opisina',
      text:
        'Isipin mo ang network appliances parang iba\'t-ibang espesyalistang empleyado sa isang malaking opisina. Ang router ang courier na nagpapadala ng parcel sa ibang branch. Ang switch ang internal mail clerk na naghahatid sa loob mismo ng gusali. Ang firewall ang security guard sa pintuan na sumusuri kung sino ang papapasukin. Ang IDS ay parang CCTV operator na nagbabantay at nagre-report lang ng kahina-hinala — hindi siya humaharang. Ang IPS naman parehong CCTV operator pero may kapangyarihang agad na isara ang pinto kapag may nakitang panganib. Ang NAS ay parang isang shared filing cabinet na maa-access ng kahit sino sa opisina; ang SAN naman parang isang buong dedikadong warehouse na direktang kumokonekta lang sa mga sobrang mabibigat na proyekto.',
    },
    howItWorks: [
      'Routers operate at Layer 3, using IP addresses to forward packets between different networks, and often provide NAT/PAT and basic firewall filtering as well.',
      'Switches operate at Layer 2 (or Layer 3, for Layer 3 switches), using MAC addresses to forward frames within a network.',
      'Firewalls sit at a network boundary, inspecting and filtering traffic based on rules (source/destination, port, protocol, and in modern firewalls, application-aware inspection).',
      'IDS monitors traffic and generates alerts on suspicious patterns without interrupting traffic flow; IPS sits inline and can actively drop or block malicious traffic in real time.',
      'NAS presents storage as shared files/folders over standard network protocols (like SMB or NFS), simple to deploy and manage.',
      'SAN presents storage as raw block devices over a dedicated high-speed network (often fiber channel or iSCSI), giving servers near-local-disk performance for demanding workloads like databases and virtualization.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Appliance</th><th>Primary Job</th><th>OSI Layer Focus</th></tr></thead>
        <tbody>
          <tr><td>Router</td><td>Forward packets between networks</td><td>Layer 3</td></tr>
          <tr><td>Switch</td><td>Forward frames within a network</td><td>Layer 2 (or 3)</td></tr>
          <tr><td>Firewall</td><td>Filter traffic by rule</td><td>Layer 3-7</td></tr>
          <tr><td>IDS</td><td>Detect and alert on threats</td><td>Layer 3-7 (monitoring)</td></tr>
          <tr><td>IPS</td><td>Detect and actively block threats</td><td>Layer 3-7 (inline)</td></tr>
          <tr><td>NAS</td><td>Shared file-level storage</td><td>Application (SMB/NFS)</td></tr>
          <tr><td>SAN</td><td>Dedicated block-level storage</td><td>Below file system, high-speed</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A hospital\'s electronic records database server connects to a SAN for guaranteed fast, dedicated storage performance, while staff share ordinary documents and scanned files through a much simpler NAS device down the hall.',
    proTips: [
      'A quick way to remember IDS vs. IPS: IDS "Detects and alerts" (passive, out-of-band); IPS "Prevents" (active, inline, can block).',
      'When a question describes storage "as if it were a local hard drive" for a server, think SAN; when it describes "a shared folder anyone on the network can open," think NAS.',
    ],
    examAlert:
      'Expect direct matching questions pairing an appliance name with its function — this lesson\'s table is close to the exact format the real exam uses for this objective.',
    beginnerMistakes: [
      'Assuming IDS and IPS are interchangeable — the key difference is whether the system can actively block traffic (IPS) or only alert (IDS).',
      'Confusing NAS (simple, file-level, network protocol) with SAN (dedicated, block-level, high-performance).',
      'Forgetting that many routers now include firewall functionality, blurring the line between "router" and "firewall" in consumer and small-business equipment.',
    ],
    keyTerms: [
      { term: 'IDS', def: 'Intrusion Detection System — monitors traffic and alerts on suspicious activity without blocking it.' },
      { term: 'IPS', def: 'Intrusion Prevention System — monitors traffic and can actively block detected threats in real time.' },
      { term: 'NAS', def: 'Network Attached Storage — provides file-level storage accessible over a standard network.' },
      { term: 'SAN', def: 'Storage Area Network — provides block-level storage over a dedicated, high-speed network.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the key difference between IDS and IPS?',
        options: [
          'IDS is hardware-only; IPS is software-only.',
          'IDS only alerts on suspicious activity; IPS can actively block it in real time.',
          'IDS and IPS are the exact same technology with different names.',
          'IPS only works on wireless networks.',
        ],
        correct: 1,
        explanation: 'IDS is passive/alerting; IPS sits inline and can actively prevent detected threats.',
      },
      {
        prompt: 'Which storage technology presents itself as raw block-level storage over a dedicated high-speed network?',
        options: ['NAS', 'SAN', 'A proxy server', 'A load balancer'],
        correct: 1,
        explanation: 'SAN provides block-level storage, typically for demanding server workloads, over a dedicated network.',
      },
      {
        prompt: 'At which OSI layer does a traditional router primarily operate?',
        options: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 7'],
        correct: 2,
        explanation: 'Routers make forwarding decisions based on IP addresses, which is Layer 3.',
      },
    ],
    miniScenario: {
      prompt: 'A company needs extremely fast, dedicated storage for a busy database server, and separately wants a simple shared folder for general office documents.',
      task: 'Recommend which storage technology fits each need, and explain why briefly.',
    },
    recap:
      'Routers forward between networks (Layer 3); switches forward within a network (Layer 2/3). Firewalls filter traffic; IDS alerts on threats while IPS actively blocks them. NAS provides simple file-level storage; SAN provides dedicated, high-performance block-level storage.',
    classroomAnswer:
      '"Once I can name the appliance, I already know its job — router moves between networks, switch moves within one, firewall filters, IDS watches, IPS acts, and NAS/SAN are just two different flavors of network storage."',
  };

  NetReady.LESSONS['7-7'] = {
    id: '7-7',
    moduleId: 7,
    slug: 'network-topologies',
    title: 'Network Topologies: Mesh, Star, Spine-Leaf, and More',
    estMinutes: 12,
    outcomes: [
      'Identify common network topologies by their structure.',
      'Explain why data centers favor spine-and-leaf over traditional three-tier designs.',
      'Explain the tradeoff between mesh redundancy and cabling complexity.',
    ],
    whyItMatters:
      'Topology diagrams are the "floor plan" of a network — recognizing the pattern instantly tells you how traffic flows and where the likely failure points are.',
    simpleEnglish:
      'A network topology is the pattern of how devices are interconnected. A star (hub-and-spoke) topology connects every device to one central point, like a switch. A mesh topology connects many devices directly to each other for maximum redundancy (full mesh connects every device to every other; partial mesh connects only some pairs). A point-to-point topology is a direct link between exactly two devices. A three-tier design (core, distribution, access layers) is a traditional enterprise/campus architecture. A spine-and-leaf topology, common in modern data centers, connects every leaf switch to every spine switch, giving predictable, low-latency paths between any two points. A collapsed core combines the core and distribution layers into one layer for smaller networks.',
    taglish:
      'Ang network topology ay ang pattern kung paano magkakaugnay ang mga device. Ang star (hub-and-spoke) topology ay kumokonekta ang bawat device papunta sa iisang sentro, tulad ng isang switch — parang gulong na may mga spokes. Ang mesh topology naman direktang kumokonekta ng maraming device sa isa\'t isa para sa pinakamataas na redundancy — full mesh kung LAHAT konektado sa lahat, partial mesh kung ilan lang. Ang point-to-point ay direktang koneksyon sa pagitan lamang ng dalawang device. Ang three-tier design (core, distribution, access layers) ay tradisyunal na disenyo ng malalaking network. Ang spine-and-leaf naman, karaniwan sa modernong data center, kumokonekta ang BAWAT leaf switch papunta sa BAWAT spine switch — kaya predictable at mabilis ang landas sa pagitan ng kahit anong dalawang punto. Ang collapsed core ay pagsasama ng core at distribution layers sa isang layer lang, para sa mas maliliit na network.',
    analogy: {
      title: 'Gulong, sari-sariling daan, at grid ng lungsod',
      text:
        'Isipin mo ang star topology parang gulong ng bisikleta — lahat ng spokes (devices) dumadaan sa gitnang hub. Ang mesh topology naman parang isang lungsod kung saan direktang magkakonekta ang bawat kalye sa bawat isa — mas maraming ruta, mas maraming backup, pero mas komplikado ring i-maintain. Ang spine-and-leaf ay parang grid system ng modernong lungsod — bawat "leaf" na kalye direktang kumokonekta sa BAWAT "spine" na main road, kaya kahit saan ka nanggaling, palaging pareho at predictable ang bilang ng "left turns" (hops) papunta kahit saan.',
    },
    howItWorks: [
      'Star/hub-and-spoke: simple to manage and troubleshoot, but the central point is a single point of failure.',
      'Full mesh: maximum redundancy and fault tolerance, but cabling and management complexity grow rapidly as devices are added — often reserved for critical core links only.',
      'Point-to-point: the simplest possible topology, a dedicated link between exactly two endpoints, common for WAN links between two sites.',
      'Three-tier (core, distribution, access): traditional enterprise design separating high-speed backbone (core), policy/aggregation (distribution), and end-device connectivity (access) into distinct layers.',
      'Spine-and-leaf: every leaf switch (where servers connect) links to every spine switch (the backbone); any leaf-to-leaf path is always exactly two hops, giving predictable low latency and easy horizontal scaling — the modern data center standard.',
      'Collapsed core: merges core and distribution into a single layer, reducing cost and complexity for smaller networks that do not need three full tiers.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Spine and leaf topology showing every leaf switch connected to every spine switch">
        <div class="net-row">
          <div class="net-node">Spine 1</div>
          <div class="net-node">Spine 2</div>
        </div>
        <div class="diagram-caption">Every leaf below connects to BOTH spines above</div>
        <div class="net-row">
          <div class="net-node">Leaf A</div>
          <div class="net-node">Leaf B</div>
          <div class="net-node">Leaf C</div>
        </div>
      </div>`,
    },
    realWorldExample:
      'A cloud provider\'s data center uses spine-and-leaf so that adding more server capacity is as simple as adding another leaf switch connected to the existing spines, without redesigning the whole network — a traditional three-tier design scales far less gracefully for this use case.',
    proTips: [
      'When a question mentions "predictable latency between any two servers" or "easy horizontal scaling" in a data center context, think spine-and-leaf immediately.',
      'Remember collapsed core is a deliberate simplification for smaller networks, not a mistake or a lesser version of three-tier design.',
    ],
    examAlert:
      'Expect the exam to describe a topology\'s characteristics (e.g., "every device connects to a central switch" or "every leaf connects to every spine") and ask you to name it — practice recognizing the pattern from a description, not just a picture.',
    beginnerMistakes: [
      'Assuming mesh topologies are always the "best" choice without considering the real cabling and management cost as the network grows.',
      'Confusing three-tier (core/distribution/access, traditional campus design) with spine-and-leaf (modern data center design) — they solve similar problems in different eras and contexts.',
      'Forgetting a star topology\'s central point is a single point of failure, even though it is the simplest to manage.',
    ],
    keyTerms: [
      { term: 'Star (hub-and-spoke) topology', def: 'A topology where every device connects to one central point.' },
      { term: 'Mesh topology', def: 'A topology with direct connections between many devices, for redundancy (full or partial).' },
      { term: 'Three-tier architecture', def: 'A traditional network design with core, distribution, and access layers.' },
      { term: 'Spine-and-leaf', def: 'A modern data center topology where every leaf switch connects to every spine switch, giving predictable low-latency paths.' },
      { term: 'Collapsed core', def: 'A design merging the core and distribution layers into one, for smaller networks.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the main advantage of a spine-and-leaf topology in a data center?',
        options: [
          'It requires the fewest total cables of any topology.',
          'It provides predictable, low-latency paths between any two points and scales easily by adding leaf switches.',
          'It eliminates the need for any switches at all.',
          'It only works with wireless connections.',
        ],
        correct: 1,
        explanation: 'Spine-and-leaf guarantees a consistent, short path between any two leaf switches while scaling gracefully.',
      },
      {
        prompt: 'What is a key downside of a full mesh topology as the network grows?',
        options: [
          'It provides no redundancy at all.',
          'Cabling and management complexity grow rapidly as more devices are added.',
          'It cannot be used for any critical infrastructure.',
          'It requires wireless connections exclusively.',
        ],
        correct: 1,
        explanation: 'Full mesh redundancy comes at the cost of rapidly increasing cabling and management complexity.',
      },
      {
        prompt: 'What does a collapsed core design do?',
        options: [
          'Adds a fourth layer to the traditional three-tier model.',
          'Merges the core and distribution layers into a single layer, for smaller networks.',
          'Removes the need for an access layer.',
          'Only applies to wireless networks.',
        ],
        correct: 1,
        explanation: 'Collapsed core simplifies the traditional three-tier model by combining core and distribution for smaller-scale needs.',
      },
    ],
    miniScenario: {
      prompt: 'A growing cloud provider needs to add server racks regularly without redesigning its data center network each time, and wants consistent performance between any two servers.',
      task: 'Recommend a topology for this scenario and explain why it fits better than a traditional three-tier design.',
    },
    recap:
      'Star topologies centralize connections through one point; mesh topologies maximize redundancy at the cost of complexity; three-tier is the traditional campus design; spine-and-leaf is the modern data center standard for predictable, scalable performance; collapsed core simplifies three-tier for smaller networks.',
    classroomAnswer:
      '"Once I recognize the pattern — one hub, full mesh, or every leaf touching every spine — I already know the tradeoffs the design team was making."',
  };

  NetReady.LESSONS['7-8'] = {
    id: '7-8',
    moduleId: 7,
    slug: 'quality-of-service',
    title: 'Quality of Service (QoS): Prioritizing, Shaping, and Policing Traffic',
    estMinutes: 12,
    outcomes: [
      'Explain what QoS accomplishes, and why it cannot create bandwidth that does not exist.',
      'Differentiate classification/marking (DSCP, CoS) from queuing/prioritization.',
      'Differentiate traffic shaping from traffic policing.',
    ],
    whyItMatters:
      'QoS is the direct, practical fix for the classic "the network is fine but calls still sound choppy" complaint — and the exam expects you to name the specific QoS mechanism at play, not just say "prioritize the traffic."',
    simpleEnglish:
      'QoS (Quality of Service) is a set of techniques that manage how a network treats different types of traffic when there is not enough bandwidth for everything to move at once, giving latency-sensitive traffic (like voice and video calls) priority over latency-tolerant traffic (like file downloads or email sync). Classification and marking tags each packet or frame with a priority label — DSCP (Differentiated Services Code Point) does this in the IP header at Layer 3, while CoS (Class of Service, using 802.1p) does it in the Layer 2 802.1Q VLAN tag — so every device along the path can recognize and honor the same priority consistently. Queuing/prioritization then actually acts on those labels, serving higher-priority traffic first when a link is congested. Traffic shaping smooths out bursty traffic by buffering (briefly delaying) packets that exceed a defined rate, evening out the flow without dropping anything. Traffic policing, by contrast, simply drops or re-marks (downgrades the priority of) traffic that exceeds a defined rate, with no buffering at all.',
    taglish:
      'Ang QoS (Quality of Service) ay isang set ng techniques na namamahala kung paano tinatrato ng network ang iba\'t-ibang klase ng traffic kapag hindi sapat ang bandwidth para sa lahat nang sabay-sabay — binibigyan ng priority ang latency-sensitive na traffic (tulad ng voice at video call) kaysa sa latency-tolerant na traffic (tulad ng file download o email sync). Ang classification at marking ay naglalagay ng priority label sa bawat packet o frame — ang DSCP (Differentiated Services Code Point) ay ginagawa ito sa IP header sa Layer 3, habang ang CoS (Class of Service, gamit ang 802.1p) ay ginagawa ito sa Layer 2 802.1Q VLAN tag — para makilala at sundin ng bawat device sa daan ang parehong priority nang pare-pareho. Ang queuing/prioritization naman ang aktwal na gumagawa base sa mga label na ito — inuunahan ang mas mataas na priority na traffic kapag congested ang link. Ang traffic shaping ay pinapantay ang biglaang pagdaloy ng traffic sa pamamagitan ng pag-buffer (pansamantalang pag-antala) sa mga packet na lumagpas sa takdang rate, nang walang itinatapon. Ang traffic policing naman ay basta tinatanggihan o binabaan ang priority (re-mark) ng traffic na lumagpas sa takdang rate, walang buffering, tuwiran lang na aksyon.',
    analogy: {
      title: 'VIP lane sa toll plaza',
      text:
        'Isipin mo ang QoS parang toll plaza na may hiwalay na lane para sa mga emergency vehicle (ambulansya) — kapag matrapik, unahin muna ang emergency kotse (voice/video) kaysa sa regular na sasakyan (file download). Ang marking ay parang sticker na nakadikit sa bumper ng sasakyan na nagsasabing "priority ako" — nakikita ito ng bawat checkpoint (router/switch) sa daan kaya alam nilang unahin ito. Ang shaping ay parang traffic officer na maayos na pinapabagal ang sobrang bilis na daloy ng sasakyan sa pamamagitan ng pag-antala sa ilan (hindi pagtanggi), para maging pantay-pantay ang takbo. Ang policing naman ay parang traffic officer na basta tumatanggi (nagpapabalik o nagpaparusa) sa sasakyan na lumagpas sa takdang bilang — walang pag-antala, tinatanggihan agad.',
    },
    howItWorks: [
      'QoS matters most when a link is congested or oversubscribed — with abundant unused bandwidth, QoS mechanisms have little practical effect because nothing is actually competing for capacity.',
      'DSCP marks a 6-bit field in the IP header, readable by any Layer 3 device, and survives across routed networks; CoS marks a 3-bit field inside the 802.1Q VLAN tag, which only exists within a Layer 2 (switched) trunk link.',
      'Once marked, switches and routers place traffic into different priority queues, always fully servicing higher-priority queues before lower-priority ones during congestion.',
      'Traffic shaping buffers packets that exceed a contracted rate, releasing them slightly delayed but intact — trading a small amount of added latency to avoid dropping data.',
      'Traffic policing enforces a rate limit strictly at the moment of arrival, dropping or downgrading excess traffic immediately with no buffering — simpler to implement, but can cause outright loss for bursty traffic.',
      'For QoS markings to actually work end-to-end, every device along the path must be configured to honor them consistently — one misconfigured device that ignores or strips markings can undermine the entire scheme.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Mechanism</th><th>What It Does</th></tr></thead>
        <tbody>
          <tr><td>Marking (DSCP / CoS)</td><td>Tags traffic with a priority label (Layer 3 / Layer 2)</td></tr>
          <tr><td>Queuing / prioritization</td><td>Serves higher-priority traffic first during congestion</td></tr>
          <tr><td>Shaping</td><td>Buffers/delays excess traffic to smooth bursts, no drops</td></tr>
          <tr><td>Policing</td><td>Drops or re-marks traffic exceeding a rate limit, no buffering</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'An office shares a single 50 Mbps internet link between VoIP desk phones and a large nightly file backup. Without QoS, the backup can saturate the link and make calls choppy and delayed. With QoS marking voice traffic (DSCP) and giving it strict priority queuing, calls stay clear throughout the night while the backup simply takes a little longer to finish, quietly using whatever bandwidth is left over.',
    proTips: [
      'If a scenario describes traffic being delayed/buffered rather than lost, that is shaping; if it describes traffic being dropped or downgraded outright, that is policing.',
      'QoS cannot manufacture bandwidth that does not exist — it only decides who gets to use the limited bandwidth that IS available first. If total bandwidth is genuinely insufficient for all needs, QoS delays the pain, it does not eliminate it.',
    ],
    examAlert:
      'A classic exam distractor implies QoS "increases available bandwidth" — it does not; QoS only changes the ORDER and TREATMENT of traffic competing for existing, limited bandwidth.',
    beginnerMistakes: [
      'Confusing traffic shaping (buffers and delays, no data loss) with traffic policing (drops or re-marks immediately, no buffering).',
      'Assuming QoS only matters for voice/video — any scenario with competing traffic types and limited bandwidth can benefit from proper classification and prioritization.',
      'Forgetting that markings must be honored consistently end-to-end — a single device that ignores DSCP/CoS tags breaks the prioritization for the rest of the path.',
    ],
    keyTerms: [
      { term: 'QoS', def: 'Quality of Service — techniques for prioritizing and managing different traffic types when bandwidth is limited.' },
      { term: 'DSCP', def: 'Differentiated Services Code Point — a Layer 3 field in the IP header used to mark traffic priority.' },
      { term: 'CoS', def: 'Class of Service — a Layer 2 priority marking carried in the 802.1Q VLAN tag (802.1p).' },
      { term: 'Traffic shaping', def: 'Buffering/delaying traffic that exceeds a defined rate to smooth bursts without dropping data.' },
      { term: 'Traffic policing', def: 'Dropping or re-marking traffic that exceeds a defined rate, with no buffering.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What does QoS primarily accomplish on a congested network link?',
        options: [
          'It increases the total available bandwidth on the link.',
          'It manages how existing, limited bandwidth is prioritized among different traffic types.',
          'It eliminates the need for any bandwidth planning.',
          'It only applies to wireless networks.',
        ],
        correct: 1,
        explanation: 'QoS changes the treatment and order of competing traffic — it does not create additional capacity.',
      },
      {
        prompt: 'What is the key difference between traffic shaping and traffic policing?',
        options: [
          'They are identical mechanisms with different names.',
          'Shaping buffers/delays excess traffic to smooth it out; policing drops or re-marks excess traffic immediately with no buffering.',
          'Policing always provides better performance than shaping.',
          'Shaping only works on wireless networks.',
        ],
        correct: 1,
        explanation: 'Shaping trades a little delay to avoid loss; policing enforces a hard limit immediately, which can cause drops.',
      },
      {
        prompt: 'What is the main difference between DSCP and CoS marking?',
        options: [
          'They mark traffic at the same layer using the same field.',
          'DSCP marks priority in the Layer 3 IP header; CoS marks priority in the Layer 2 802.1Q VLAN tag.',
          'CoS works across routed networks, while DSCP only works on a single switch.',
          'DSCP is used only for wireless traffic.',
        ],
        correct: 1,
        explanation: 'DSCP is a Layer 3 (IP header) marking that survives routing; CoS is a Layer 2 marking confined to switched/trunk links.',
      },
    ],
    miniScenario: {
      prompt: 'An office\'s VoIP calls become choppy every evening at the exact time a large scheduled backup job runs, even though the internet link is not literally broken.',
      task: 'Explain which QoS mechanisms (marking and queuing/prioritization) would address this, and why simply buying more bandwidth is not the only reasonable fix.',
    },
    recap:
      'QoS prioritizes limited bandwidth among competing traffic types rather than creating new capacity. Marking (DSCP at Layer 3, CoS at Layer 2) tags traffic priority; queuing then serves higher-priority traffic first. Shaping buffers excess traffic to smooth bursts without loss; policing drops or re-marks excess traffic immediately with no buffering.',
    classroomAnswer:
      '"QoS doesn\'t make the pipe bigger — it decides who goes first when the pipe is full, and whether excess traffic gets politely delayed (shaping) or turned away at the door (policing)."',
  };

  NetReady.LESSONS['7-9'] = {
    id: '7-9',
    moduleId: 7,
    slug: 'how-a-switch-works',
    title: 'How a Switch Works: MAC Tables, Flooding, and Collision vs. Broadcast Domains',
    estMinutes: 14,
    outcomes: [
      `Explain how a switch learns MAC addresses and builds its MAC address (CAM) table.`,
      `Describe the difference between forwarding, flooding, and filtering.`,
      `Tell collision domains apart from broadcast domains and name what separates each.`,
      `Explain duplex, autonegotiation, and why a duplex mismatch causes slow, error-filled links.`,
    ],
    whyItMatters: `Every other Layer 2 topic (VLANs, STP, port security) assumes you already understand what a switch does with a frame the moment it arrives. Exam questions about "which device breaks up a collision domain?" or "why is this link slow with late collisions?" are really questions about this lesson.`,
    simpleEnglish: `A switch is a device that remembers which MAC address lives behind which port. When a frame comes in, the switch writes down the SOURCE MAC and the port it came from (learning). Then it looks at the DESTINATION MAC: if it knows the port, it sends the frame out that one port only (forwarding). If it does not know the destination, or the frame is a broadcast, it sends a copy out every port except the one it arrived on (flooding). A hub never remembered anything, so it repeated every frame to everyone. That is why a hub is one big collision domain, while each switch port is its own collision domain. Broadcast domains are bigger: a switch passes broadcasts to every port in the same VLAN, and only a router (or a Layer 3 switch) stops them.`,
    taglish: `Ang switch ay parang receptionist na may notebook. Tuwing may dumadating na frame, isinusulat niya: "Si MAC AA:AA galing sa Port 1." Yan ang learning. Kapag may frame na papunta kay AA:AA, alam na niya — Port 1 lang ang pagpapadalhan niya (forwarding). Kung hindi pa niya kilala ang destination, o kung broadcast, ipapadala niya sa lahat ng port maliban sa pinanggalingan (flooding). Ang hub, walang notebook — isinisigaw niya sa lahat. Kaya ang hub ay isang malaking collision domain, pero sa switch, bawat port ay sarili niyang collision domain. Ang broadcast domain naman ay mas malaki: ang router lang (o VLAN boundary) ang humaharang sa broadcast.`,
    analogy: {
      title: 'Receptionist na may notebook',
      text: `Isipin ang receptionist ng condo. Tuwing may residenteng dumadaan, isinusulat niya sa notebook kung aling unit sila (source MAC → port). Kapag may bisitang naghahanap kay "Aling Nena", tinitingnan niya ang notebook at itinuturo ang tamang unit. Kung wala pa sa notebook, tinatawag niya ang bawat palapag para itanong (flood). Kapag may announcement para sa lahat ng nasa building, yun ang broadcast — hanggang hindi hinaharang ng guard sa gate (router), aabot sa lahat.`,
    },
    howItWorks: [
      `Learn: a frame arrives on port 3 with source MAC AAAA. The switch records "AAAA is on port 3" in its MAC address table (also called the CAM table, for content-addressable memory). Entries age out after a timeout (commonly 300 seconds on many switches) if the device stays silent.`,
      `Forward: if the destination MAC is in the table, the frame leaves only through that port. This is what makes switches efficient and also gives a modest privacy benefit compared with a hub.`,
      `Flood: if the destination is unknown unicast, or the frame is a broadcast (FF:FF:FF:FF:FF:FF), the switch sends it out every port in the same VLAN except the ingress port. Multicast is flooded too unless IGMP snooping is enabled.`,
      `Filter: if the destination is on the same port the frame arrived on, the switch drops the frame instead of sending it back.`,
      `Collision domain: the set of devices that can have their transmissions collide. A hub (or a shared coax bus) puts everyone in one collision domain. Each switch port is its own collision domain, and a full-duplex link has no collisions at all.`,
      `Broadcast domain: the set of devices that receive a Layer 2 broadcast. Switch ports in the same VLAN share one; a router interface or a different VLAN starts a new one. Rule of thumb: switches cut collision domains, routers cut broadcast domains.`,
      `CSMA/CD (Carrier Sense Multiple Access with Collision Detection) is how half-duplex Ethernet shares a wire: listen first, send, and if a collision is detected, back off for a random time. Full duplex does not need it. Wi-Fi uses CSMA/CA (Collision Avoidance) because a radio cannot listen while it transmits.`,
      `Duplex and autonegotiation: two ends of a link negotiate speed and duplex. If one side is hard-coded to full duplex and the other is left on auto, the auto side may fall back to half duplex. The result is a duplex mismatch: the link comes up but is slow, with late collisions and CRC errors climbing on the half-duplex side.`,
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Table comparing hub, switch and router by collision and broadcast domains">
        <div class="table-scroll"><table class="lesson-table">
          <thead><tr><th>Device</th><th>Collision domains</th><th>Broadcast domains</th></tr></thead>
          <tbody>
            <tr><td>Hub (4 ports)</td><td>1 shared by all ports</td><td>1</td></tr>
            <tr><td>Switch (4 ports, one VLAN)</td><td>4, one per port</td><td>1</td></tr>
            <tr><td>Switch (4 ports, two VLANs)</td><td>4, one per port</td><td>2</td></tr>
            <tr><td>Router (3 interfaces)</td><td>3, one per interface</td><td>3, one per interface</td></tr>
          </tbody>
        </table></div>
        <p class="diagram-caption">Switches cut collision domains. Routers (and VLANs) cut broadcast domains.</p>
      </div>`,
    },
    realWorldExample: `A small office complains that a new IP camera link is "slow", yet the link light is green. On the switch, the technician sees climbing late collisions and CRC errors on that port. The port was hard-set to 100/full, but the camera was on auto and fell back to 100/half. Setting both ends the same (or both to auto) clears the errors immediately.`,
    proTips: [
      `Best practice: leave both ends on autonegotiation, or hard-code BOTH ends identically. Never hard-code just one side.`,
      `Late collisions on a modern switched network almost always mean a duplex mismatch, not a "real" collision problem.`,
      `If a switch runs out of CAM table space (a MAC flooding attack), it starts flooding everything like a hub. That is why port security limits MACs per port.`,
    ],
    examAlert: `Memorize: switch = many collision domains, one broadcast domain per VLAN. Router = separates broadcast domains. Hub = everything in one collision domain. CSMA/CD = wired half-duplex; CSMA/CA = wireless.`,
    beginnerMistakes: [
      `Saying a switch "breaks up broadcast domains" — it does not, unless VLANs are configured.`,
      `Thinking collisions still happen on a full-duplex switched link — they cannot.`,
      `Hard-coding speed/duplex on only one end of a link.`,
    ],
    keyTerms: [
      { term: 'MAC address table (CAM table)', def: `The switch's learned list of MAC address → port (and VLAN) mappings.` },
      { term: 'Flooding', def: 'Sending a frame out all ports in the VLAN except the one it arrived on, used for broadcasts and unknown unicast.' },
      { term: 'Collision domain', def: 'A network segment where simultaneous transmissions can collide.' },
      { term: 'Broadcast domain', def: 'The group of devices that all receive a Layer 2 broadcast.' },
      { term: 'CSMA/CD', def: 'Listen-before-sending method with collision detection used by half-duplex Ethernet.' },
      { term: 'Duplex mismatch', def: 'One end full duplex, the other half duplex, causing late collisions and slow throughput.' },
    ],
    commands: [
      { os: 'Cisco IOS', cmd: 'show mac address-table', desc: 'Displays learned MAC addresses with their VLAN and port.' },
      { os: 'Cisco IOS', cmd: `show interfaces status', desc: 'Shows each port's speed, duplex, and VLAN at a glance.` },
      { os: 'Cisco IOS', cmd: 'show interfaces gi0/1', desc: 'Shows error counters such as CRC errors and late collisions.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A switch receives a frame whose destination MAC is not in its MAC table. What does it do?',
        options: [
          'Drops the frame.',
          'Floods it out every port in the VLAN except the ingress port.',
          'Sends it only to the default gateway.',
          'Sends it back out the port it arrived on.',
        ],
        correct: 1,
        explanation: 'Unknown unicast frames are flooded so the destination can answer, which lets the switch learn its location.',
      },
      {
        prompt: 'Which device separates broadcast domains?',
        options: ['Hub', 'Unmanaged switch within a single VLAN', 'Router', 'Repeater'],
        correct: 2,
        explanation: 'Routers (or Layer 3 interfaces) do not forward Layer 2 broadcasts, so each interface is its own broadcast domain.',
      },
      {
        prompt: 'A switch port shows rising late collisions and CRC errors, though the link is up. What is the most likely cause?',
        options: ['Duplex mismatch', 'Expired DHCP lease', 'Wrong DNS server', 'Spanning tree root change'],
        correct: 0,
        explanation: 'Late collisions on a switched link point to one end running half duplex while the other runs full duplex.',
      },
    ],
    miniScenario: {
      prompt: 'You replace a switch with a hub in a lab "just for testing" and packet captures on one PC suddenly show traffic between two other PCs.',
      task: 'Explain why this happens and what it says about collision domains.',
    },
    recap: `Switches learn source MACs, forward known unicast to one port, and flood unknown unicast and broadcasts within the VLAN. Each switch port is its own collision domain; broadcast domains end at routers and VLAN boundaries. Mismatched duplex settings cause late collisions and slow links.`,
    classroomAnswer: `"Switch: learn the source, forward by the destination, flood when it doesn't know. Switches cut collision domains; routers cut broadcast domains."`,
  };

  NetReady.LESSONS['7-10'] = {
    id: '7-10',
    moduleId: 7,
    slug: 'layer-2-security-features',
    title: 'Layer 2 Security Features: DHCP Snooping, DAI, BPDU Guard, and Private VLANs',
    estMinutes: 15,
    outcomes: [
      `Explain how DHCP snooping stops rogue DHCP servers and builds a binding table.`,
      `Explain how Dynamic ARP Inspection uses that table to stop ARP spoofing.`,
      `Describe BPDU Guard, Root Guard, and storm control and what each protects.`,
      `Explain private VLANs and MACsec at a high level.`,
    ],
    whyItMatters: `Most attacks inside a network happen at Layer 2 because switches trust whatever frames arrive. The Network+ exam expects you to match each Layer 2 attack to the switch feature that stops it.`,
    simpleEnglish: `Managed switches have built-in defenses against people who plug in a rogue device. DHCP snooping marks ports as trusted (where the real DHCP server lives) or untrusted (everything else) and drops DHCP offers that come from untrusted ports. It also records which IP, MAC, port, and VLAN each legitimate lease belongs to. Dynamic ARP Inspection (DAI) checks ARP messages against that record and drops forged ones. BPDU Guard shuts down an edge port if it ever receives a spanning tree BPDU, which means someone plugged in a switch. Root Guard stops a port from accepting a new root bridge. Storm control limits broadcast, multicast, and unknown-unicast floods. Private VLANs isolate hosts from each other inside the same subnet, and MACsec encrypts frames hop by hop.`,
    taglish: `Ang managed switch ay may sariling "guwardiya" laban sa mga nagsaksak ng kung anu-anong device. Ang DHCP snooping: ang trusted port lang (kung nasaan ang totoong DHCP server) ang puwedeng magbigay ng DHCP offer; ang rogue router na isinaksak ng empleyado sa untrusted port ay ba-block. Nagtatala rin siya ng binding table (IP, MAC, port, VLAN). Ginagamit ng DAI ang table na yan para i-check ang ARP — kapag peke ang ARP reply, drop. Ang BPDU Guard naman: kapag may dumating na BPDU sa port na dapat ay para sa PC lang, i-shutdown ang port. Ang private VLAN ay parang hiwalay na kuwarto sa loob ng iisang bahay — hindi nagkakakitaan ang mga host kahit iisang subnet.`,
    analogy: {
      title: 'Guwardiya at listahan ng bisita sa condo',
      text: `Ang DHCP snooping ay parang guard na ang may awtoridad lang magbigay ng visitor pass ay ang front desk (trusted port). Ang binding table ay ang logbook ng lahat ng nabigyan ng pass. Ang DAI ay ang guard na nagche-check kung sinasabi ng isang bisita na "ako si Mr. Santos sa Unit 5" — tinitingnan niya sa logbook kung totoo.`,
    },
    howItWorks: [
      `DHCP snooping: ports are trusted (uplink to the real DHCP server or router) or untrusted (user ports). DHCP server messages (Offer, Ack) arriving on an untrusted port are dropped. This defeats rogue DHCP servers and DHCP starvation floods when combined with rate limits.`,
      `DHCP snooping binding table: for each legitimate lease the switch stores client MAC, IP, VLAN, port, and lease time. Other features depend on it.`,
      `Dynamic ARP Inspection (DAI): intercepts ARP on untrusted ports and compares the IP-to-MAC claim against the DHCP snooping binding table (or static ARP ACLs). Mismatches are dropped. This stops ARP spoofing / poisoning used for on-path attacks.`,
      `IP Source Guard: also uses the binding table to block traffic from a port whose source IP or MAC does not match its lease, which stops simple IP spoofing.`,
      `BPDU Guard: enabled on PortFast/edge ports. If a BPDU arrives, the port is placed in an err-disabled state, since an end-user port should never receive one. Root Guard: on ports facing downstream, stops a switch from becoming the new root bridge by putting the port in a root-inconsistent state if superior BPDUs arrive.`,
      `Storm control: sets a threshold (percent of bandwidth) for broadcast, multicast, or unknown-unicast traffic on a port and drops or shuts the port when exceeded, limiting the damage of loops and floods.`,
      `Private VLANs (PVLANs): split one VLAN/subnet into sub-groups. Promiscuous ports (usually the router) talk to everyone; isolated ports talk only to the promiscuous port; community ports talk to their own community and the promiscuous port. Common in hosting and guest environments.`,
      `MACsec (IEEE 802.1AE): encrypts Ethernet frames at Layer 2 between directly connected devices (hop by hop), protecting against taps on switch-to-switch or switch-to-host links.`,
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Table matching Layer 2 attacks to the switch feature that stops them">
        <div class="table-scroll"><table class="lesson-table">
          <thead><tr><th>Threat</th><th>Defense</th></tr></thead>
          <tbody>
            <tr><td>Rogue DHCP server</td><td>DHCP snooping (untrusted ports)</td></tr>
            <tr><td>ARP spoofing / poisoning</td><td>Dynamic ARP Inspection</td></tr>
            <tr><td>Spoofed source IP</td><td>IP Source Guard</td></tr>
            <tr><td>Rogue switch on an edge port</td><td>BPDU Guard</td></tr>
            <tr><td>Rogue switch claiming root</td><td>Root Guard</td></tr>
            <tr><td>MAC flooding</td><td>Port security (MAC limit)</td></tr>
            <tr><td>Broadcast storm</td><td>Storm control, STP</td></tr>
            <tr><td>Hosts reaching each other in one subnet</td><td>Private VLANs</td></tr>
            <tr><td>Sniffing a link</td><td>MACsec</td></tr>
          </tbody>
        </table></div>
      </div>`,
    },
    realWorldExample: `An employee plugs a home Wi-Fi router into a wall jack. It starts handing out 192.168.0.x addresses and half of the floor loses network access. With DHCP snooping on, the switch drops the router's DHCP offers because that port is untrusted, and the floor never notices.`,
    proTips: [
      `DHCP snooping must be enabled BEFORE DAI will work, because DAI relies on the binding table.`,
      `A port that suddenly goes err-disabled after enabling BPDU Guard usually means someone connected a switch or a loop. Find the device before you re-enable the port.`,
      `Trusted ports are uplinks and the DHCP server link only. Everything else is untrusted by default.`,
    ],
    examAlert: `Expect scenario matching: "rogue DHCP server" = DHCP snooping; "ARP poisoning" = DAI; "unauthorized switch on an access port" = BPDU Guard; "user MAC flood" = port security. Know that err-disabled is how many of these features react.`,
    beginnerMistakes: [
      `Marking every port as trusted, which disables the protection.`,
      `Enabling DAI without DHCP snooping on networks that use DHCP.`,
      `Confusing BPDU Guard (shut the edge port) with Root Guard (block a superior BPDU).`,
    ],
    keyTerms: [
      { term: 'DHCP snooping', def: 'Switch feature that filters DHCP server messages by trusted/untrusted port and builds a binding table.' },
      { term: 'Dynamic ARP Inspection (DAI)', def: 'Drops ARP messages whose IP-MAC pairing does not match the binding table.' },
      { term: 'BPDU Guard', def: 'Disables an edge port that receives spanning tree BPDUs.' },
      { term: 'Root Guard', def: 'Prevents a port from accepting a better root bridge.' },
      { term: 'Private VLAN', def: 'A VLAN subdivided into isolated and community groups within one subnet.' },
      { term: 'MACsec', def: 'IEEE 802.1AE hop-by-hop Layer 2 encryption.' },
    ],
    commands: [
      { os: 'Cisco IOS', cmd: 'show ip dhcp snooping binding', desc: 'Lists the learned IP/MAC/port/VLAN bindings.' },
      { os: 'Cisco IOS', cmd: 'show ip arp inspection', desc: 'Shows DAI status and drop counters.' },
      { os: 'Cisco IOS', cmd: 'show interfaces status err-disabled', desc: 'Lists ports shut down by security features.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Users on one floor receive 192.168.0.x addresses from an unknown device. Which switch feature prevents this?',
        options: ['BPDU Guard', 'DHCP snooping', 'Storm control', 'MACsec'],
        correct: 1,
        explanation: 'DHCP snooping drops DHCP offers that arrive on untrusted ports.',
      },
      {
        prompt: 'What does Dynamic ARP Inspection compare ARP messages against?',
        options: ['The routing table', 'The DHCP snooping binding table', 'The DNS cache', 'The STP topology'],
        correct: 1,
        explanation: 'DAI trusts the bindings that DHCP snooping recorded, or static ARP ACLs.',
      },
      {
        prompt: 'A user port goes err-disabled right after someone connects a small desktop switch. Which feature most likely did this?',
        options: ['Root Guard', 'BPDU Guard', 'IP Source Guard', 'Private VLAN'],
        correct: 1,
        explanation: 'BPDU Guard disables an edge port when it receives a BPDU, which a switch sends.',
      },
    ],
    miniScenario: {
      prompt: 'Two tenants share a VLAN and subnet in a hosting rack. Policy says their servers must never talk to each other, but both must reach the gateway.',
      task: 'Which feature fits, and which port type does the gateway use?',
    },
    recap: `DHCP snooping, DAI, IP Source Guard, BPDU Guard, Root Guard, storm control, private VLANs, and MACsec each address a specific Layer 2 weakness. DHCP snooping's binding table powers both DAI and IP Source Guard.`,
    classroomAnswer: `"Rogue DHCP: snooping. Fake ARP: DAI. Rogue switch on an edge port: BPDU Guard. Isolating hosts in one subnet: private VLAN."`,
  };

  NetReady.LESSONS['7-11'] = NetReady.lesson(7, {
    id: '7-11',
    slug: 'switch-configuration-deep-dive',
    title: 'Switch Configuration Deep Dive: VLAN Database, VTP, Router-on-a-Stick, and STP Root Election',
    minutes: 15,
    outcomes: [
      `Explain what the VLAN database is and what VTP does (and its risks).`,
      `Describe router-on-a-stick and a Layer 3 switch SVI for inter-VLAN routing.`,
      `Explain how STP elects a root bridge and assigns port roles and states.`,
      `Explain flow control, auto-MDI-X, and QinQ at a high level.`,
    ],
    why: `Switch configuration questions are some of the most scenario-heavy on the exam: "which port becomes the root port?", "why did a VLAN disappear?", "how do two VLANs talk?". This lesson ties those mechanics together.`,
    simple: `A switch keeps a VLAN database listing which VLAN IDs and names exist; ports are then assigned to those VLANs. VTP (VLAN Trunking Protocol, Cisco) can automatically copy the VLAN database between switches, which is convenient but dangerous: a switch with a higher revision number can overwrite everyone's VLANs. Inter-VLAN routing needs a Layer 3 device. Router-on-a-stick uses one trunk link to a router with a sub-interface for each VLAN; a Layer 3 switch uses switch virtual interfaces (SVIs), one per VLAN, and is faster. Spanning Tree Protocol first elects one root bridge (lowest bridge ID: priority then MAC), then every other switch picks a root port toward the root, designated ports forward on each segment, and the remaining ports block to prevent loops.`,
    taglish: `May VLAN database ang switch: listahan ng mga VLAN ID at pangalan; ang mga port ay itatalaga sa mga VLAN na ito. Ang VTP ay kumokopya ng VLAN database sa ibang switch — madali pero delikado: ang switch na mas mataas ang revision number ay puwedeng mag-overwrite ng lahat ng VLAN. Kailangan ng Layer 3 para mag-usap ang mga VLAN. Sa router-on-a-stick, isang trunk papunta sa router na may sub-interface bawat VLAN; sa Layer 3 switch, SVI bawat VLAN, mas mabilis. Sa STP, una ang pagpili ng root bridge (pinakamababang bridge ID: priority tapos MAC). Bawat ibang switch ay pipili ng root port papunta sa root, may designated port sa bawat segment, at ang natitira ay magba-block para walang loop.`,
    analogy: {
      title: 'Punong-abala ng kasal',
      text: `Ang root bridge ay ang punong-abala ng kasal: lahat ng bisita ay naghahanap ng pinakamaikling daan papunta sa kanya. Ang mga daan na magdudulot ng paikot-ikot ay isinasara (blocking). Ang router-on-a-stick ay iisang waiter na umiikot sa lahat ng mesa; ang SVI ay waiter na nakatalaga sa bawat mesa.`,
    },
    steps: [
      `VLAN database: VLAN 1 is the default, 1002 to 1005 are reserved on Cisco switches, and normal VLANs are 2 to 1001 (extended 1006 to 4094). A port assigned to a VLAN that is not in the database gets no connectivity.`,
      `VTP modes: server (can create, modify, delete VLANs and advertises them), client (learns VLANs, cannot create them), transparent (keeps its own VLANs, forwards VTP). A new switch with a higher configuration revision number can wipe the VLANs on the entire network, so reset the revision number before adding a switch.`,
      `Router-on-a-stick: one physical router interface becomes an 802.1Q trunk with sub-interfaces (for example Gi0/0.10, Gi0/0.20), each with an IP address that is the default gateway for that VLAN. Simple, but the single link is a bottleneck.`,
      `Layer 3 switch with SVIs: create interface vlan 10, interface vlan 20 with IP addresses, and enable ip routing. Routing is done in hardware and scales better.`,
      `STP root election: switches exchange BPDUs; the bridge ID is priority (default 32768, plus VLAN ID in PVST) and MAC address. The lowest bridge ID wins. Set the priority lower on the switch you want as root (usually a core switch) rather than leaving it to the lowest MAC, which may be an old edge switch.`,
      `Port roles: root port (best path to the root, on non-root switches), designated port (forwarding port for each segment), alternate/backup (blocking). Path cost depends on link speed.`,
      `Classic STP states: blocking, listening, learning, forwarding (plus disabled). It takes up to about 30 to 50 seconds to converge. RSTP uses discarding, learning, and forwarding and converges in seconds. PortFast puts edge ports straight into forwarding.`,
      `Protection: BPDU Guard shuts an edge port that receives a BPDU; Root Guard prevents an unwanted switch from becoming root; Loop Guard stops a blocked port from forwarding if BPDUs stop arriving (unidirectional link).`,
      `Other features: Ethernet flow control (802.3x pause frames) asks a sender to pause when a buffer is full; auto-MDI-X lets a port detect and swap transmit and receive pairs so any cable works; QinQ (802.1ad) stacks a second VLAN tag so a provider can carry customers' VLANs transparently.`,
    ],
    table: {
      label: 'Table of STP port roles and states',
      head: ['Item', 'Meaning'],
      rows: [
        ['Root bridge', 'Switch with the lowest bridge ID (priority then MAC)'],
        ['Root port', 'Best path toward the root on a non-root switch'],
        ['Designated port', 'Forwarding port for a segment'],
        ['Blocking / discarding', 'Port that prevents a loop'],
        ['Forwarding', 'Port sending and receiving user traffic'],
        ['PortFast', 'Edge port goes directly to forwarding'],
      ],
      caption: 'One root, one best path per switch, everything else blocked.',
    },
    example: `A technician plugs a lab switch into the network and half the company's VLANs disappear. The lab switch had been a VTP server with a higher revision number, and it overwrote the real VLAN database. Restoring the VLANs and setting production switches to VTP transparent mode (or using VTPv3 with a password) prevents a repeat.`,
    tips: [
      `Always set the root bridge priority intentionally; never accept the default election result.`,
      `"Router on a stick" = single trunk with sub-interfaces. "SVI" = Layer 3 switch interfaces.`,
      `After adding any switch, reset its VTP revision number or put it in transparent mode first.`,
    ],
    exam: `Know: lowest bridge ID wins root, root port versus designated port, blocking prevents loops, RSTP is faster than STP, PortFast on edge ports with BPDU Guard, router-on-a-stick versus SVI, and VTP's overwrite risk.`,
    mistakes: [
      `Putting PortFast on switch-to-switch links.`,
      `Leaving the default priority so an old edge switch becomes root.`,
      `Forgetting to create a VLAN in the database before assigning ports.`,
    ],
    terms: [
      { term: 'VLAN database', def: `The list of VLAN IDs and names stored on a switch.` },
      { term: 'VTP', def: `Cisco protocol that propagates VLAN definitions between switches.` },
      { term: 'Router-on-a-stick', def: `Inter-VLAN routing over one trunk with router sub-interfaces.` },
      { term: 'SVI', def: `Switch virtual interface, a Layer 3 interface for a VLAN.` },
      { term: 'Root bridge', def: `The STP reference switch with the lowest bridge ID.` },
      { term: 'PortFast', def: `Feature that puts an edge port directly into forwarding.` },
    ],
    commands: [
      { os: 'Cisco IOS', cmd: 'show spanning-tree', desc: `Shows the root bridge, port roles, and states per VLAN.` },
      { os: 'Cisco IOS', cmd: 'show vlan brief', desc: `Lists VLANs in the database and the ports assigned.` },
      { os: 'Cisco IOS', cmd: 'show vtp status', desc: `Shows VTP mode, domain, and revision number.` },
      { os: 'Cisco IOS', cmd: 'show ip interface brief', desc: `Shows SVIs and router sub-interfaces with their addresses.` },
    ],
    checks: [
      {
        prompt: `How does STP choose the root bridge?`,
        options: [`The switch with the most ports`, `The lowest bridge ID (priority, then MAC)`, `The fastest uplink`, `The switch that booted first`],
        correct: 1,
        explanation: `The lowest bridge ID, made of priority and MAC, becomes the root.`,
      },
      {
        prompt: `Which design routes between VLANs using a single trunk to a router with sub-interfaces?`,
        options: [`SVI routing`, `Router-on-a-stick`, `Port channel`, `Spine-leaf`],
        correct: 1,
        explanation: `Router-on-a-stick uses sub-interfaces on one 802.1Q trunk.`,
      },
      {
        prompt: `After plugging in a switch, many VLANs vanish. What is a likely cause?`,
        options: [`A VTP revision number overwrote the VLAN database`, `A DNS error`, `Low RSSI`, `An expired lease`],
        correct: 0,
        explanation: `A VTP server with a higher revision number can replace VLANs on other switches.`,
      },
    ],
    mini: {
      prompt: `A branch's oldest edge switch keeps becoming the STP root and traffic takes odd paths.`,
      task: `What should you configure?`,
    },
    recap: `Keep the VLAN database consistent (and guard against VTP overwrites), route VLANs with router-on-a-stick or SVIs, elect the root intentionally using bridge priority, and protect edge ports with PortFast and BPDU Guard.`,
    classroom: `"Ang pinakamababang bridge ID ang hari ng STP — kaya ikaw ang magtakda kung sino."`,
  });
}(window.NetReady));
