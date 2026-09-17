/**
 * content/labs-data.js — Guided labs (safe, simulated — no real terminal
 * access is available in a static, offline site, so command output is
 * simulated and clearly labeled as such).
 */
(function (NetReady) {
  'use strict';

  NetReady.LABS = [
    {
      id: 'lab-office-subnet',
      moduleId: 4,
      type: 'subnet-plan',
      title: 'Build a Small Office Subnet Plan',
      estMinutes: 30,
      scenario:
        'You are the newly hired IT technician for a small architecture firm moving into a new office. The firm has three departments and needs an efficient, non-wasteful IPv4 addressing plan.',
      businessRequirement:
        'Design subnets for: Design Studio (50 hosts), Front Office (20 hosts), Server Closet (6 hosts), and a future point-to-point link to a second office (2 hosts) — all carved from the single address block 192.168.10.0/24, using VLSM so no department wastes more addresses than necessary.',
      diagram: {
        type: 'diagram',
        html: `<div class="lesson-diagram lab-diagram" role="img" aria-label="Office network diagram with four segments: design studio, front office, server closet, and a point to point link, all connected to a central router">
          <div class="net-node router">Core Router<br><small>192.168.10.0/24</small></div>
          <div class="net-line">&darr;</div>
          <div class="net-row">
            <div class="net-node">Design Studio<br><small>50 hosts</small></div>
            <div class="net-node">Front Office<br><small>20 hosts</small></div>
            <div class="net-node">Server Closet<br><small>6 hosts</small></div>
            <div class="net-node">Branch Link<br><small>2 hosts</small></div>
          </div>
        </div>`,
      },
      tools: 'This platform\'s Subnet Calculator (Study Tools menu) — open it in a second tab/window to check your work as you go.',
      startingState:
        'You have one address block: 192.168.10.0/24 (254 usable addresses total). No subnets have been created yet.',
      requirements: [
        { key: 'studio', label: 'Design Studio', hosts: 50 },
        { key: 'office', label: 'Front Office', hosts: 20 },
        { key: 'closet', label: 'Server Closet', hosts: 6 },
        { key: 'link', label: 'Branch Link', hosts: 2 },
      ],
      totalAddresses: 256,
      objectives: [
        'Allocate a subnet for Design Studio (50 hosts) using the smallest CIDR that fits with reasonable growth room.',
        'Allocate a subnet for Front Office (20 hosts).',
        'Allocate a subnet for Server Closet (6 hosts).',
        'Allocate a subnet for the future Branch Link (2 hosts).',
        'List the Network ID, Broadcast ID, and usable host range for each subnet.',
        'Confirm no two subnets overlap.',
      ],
      hints: [
        'Level 1: Start with the LARGEST requirement first (Design Studio) to avoid awkward leftover fragments.',
        'Level 2: Remember usable hosts = 2^(host bits) - 2. For 50 hosts, you need at least 6 host bits (2^6 - 2 = 62), which is a /26.',
        'Level 3: A working allocation is: Design Studio = 192.168.10.0/26 (62 usable), Front Office = 192.168.10.64/27 (30 usable), Server Closet = 192.168.10.96/29 (6 usable), Branch Link = 192.168.10.104/30 (2 usable).',
      ],
      validation:
        'Each subnet must provide at least the required number of usable hosts, no two subnets may share any address, and every subnet must fall within 192.168.10.0/24.',
      expectedResult:
        'Four correctly sized, non-overlapping subnets that together use address space efficiently, leaving room in the /24 block for future growth.',
      troubleshooting: [
        'If two subnets overlap, you allocated a later subnet without accounting for the full size of an earlier one — recheck block boundaries with the magic number method.',
        'If a subnet is too small for its department, recount required host bits: hosts needed <= 2^(host bits) - 2.',
      ],
      reflection: [
        'Why did allocating the largest requirement first make this plan easier to design?',
        'What would happen to this plan if the Design Studio grew to 70 people next year?',
      ],
      taglishDebrief:
        'Kapag ginawa mo munang unahin yung pinakamalaking requirement (Design Studio), mas madali mong mahahanap yung tamang puwang para sa mas maliliit na departamento pagkatapos — parang paglalagay muna ng pinakamalaking gamit sa maleta bago yung maliliit.',
      resetNote: 'Use the "Reset Lab" control to clear your entered answers and try again from the starting state.',
    },

    {
      id: 'lab-vlan-assignment',
      moduleId: 7,
      type: 'match',
      title: 'Diagnose and Fix a VLAN Assignment Problem',
      estMinutes: 20,
      scenario:
        'A mid-size company just finished a switch refresh. Since the change, several departments report they can reach some internal resources but not others — despite every cable and port testing physically fine.',
      businessRequirement:
        'Correctly assign each device/port to its intended VLAN so that Staff, Guest, Voice, and Server traffic are properly isolated from each other, matching the company\'s security design.',
      diagram: {
        type: 'diagram',
        html: `<div class="lesson-diagram lab-diagram" role="img" aria-label="Office switch with five ports needing correct VLAN assignment: staff PC, guest kiosk, IP phone, file server, and an unused port">
          <div class="net-node router">Access Switch</div>
          <div class="net-line">&darr;</div>
          <div class="net-row">
            <div class="net-node">Port 3<br><small>Staff PC</small></div>
            <div class="net-node">Port 7<br><small>Guest Kiosk</small></div>
            <div class="net-node">Port 9<br><small>IP Phone</small></div>
            <div class="net-node">Port 12<br><small>File Server</small></div>
            <div class="net-node">Port 24<br><small>Unused</small></div>
          </div>
        </div>`,
      },
      tools: 'No special tool required — this lab tests your understanding of VLAN purpose directly. Review Module 7, Lessons 1-2 if you want a refresher first.',
      startingState:
        'The switch has four defined VLANs: VLAN 10 (Staff), VLAN 20 (Guest), VLAN 30 (Voice), and VLAN 40 (Servers), plus the factory-default native VLAN 1.',
      objectives: [
        'Assign the correct VLAN to each active port based on what is connected to it.',
        'Decide the correct VLAN for the unused port, applying a security best practice rather than just picking any VLAN.',
      ],
      hints: [
        'Level 1: Match each device to the VLAN whose name describes its purpose — a phone belongs in the voice VLAN, a guest kiosk belongs in the guest VLAN.',
        'Level 2: An unused port should never be left on a "real," active VLAN by default — remember the native VLAN hardening advice from Module 7, Lesson 2.',
        'Level 3: Staff PC -> VLAN 10, Guest Kiosk -> VLAN 20, IP Phone -> VLAN 30, File Server -> VLAN 40, Unused Port -> an unused/parking VLAN (not the active native VLAN 1), or administratively shut down.',
      ],
      validation: 'Each port must be assigned to the VLAN matching its connected device\'s purpose, and the unused port must not be left on the default native VLAN.',
      expectedResult: 'All five ports correctly assigned, with device traffic properly isolated by VLAN and the unused port hardened rather than left on an active default VLAN.',
      troubleshooting: [
        'If a department reports isolation from resources they should reach, double check whether their port and the resource\'s port share the same VLAN.',
        'If an unused port is left on the native VLAN, it becomes an easy, overlooked entry point — always assign unused ports to a dedicated "parking" VLAN or disable them.',
      ],
      reflection: [
        'Why does leaving an unused port on the default native VLAN create a security risk, even if nothing is currently plugged into it?',
        'What symptom would a user see if their device were accidentally assigned to the wrong VLAN?',
      ],
      taglishDebrief:
        'Kapag hindi tama ang VLAN assignment, hindi ito nakikita agad sa physical layer — maganda pa rin ang ilaw ng cable, pero hiwalay pa rin sila sa dapat nilang marating. Kaya kapag may "isolated" na department pero maayos naman ang mga kable, VLAN assignment dapat ang unahin mong tingnan, hindi ang cabling.',
      resetNote: 'Use the "Reset Lab" control to clear your selections and try again from the starting state.',
      matchItems: [
        { id: 'staff-pc', label: 'Port 3 — Staff PC (needs access to internal file shares and staff resources)', options: ['VLAN 10 — Staff', 'VLAN 20 — Guest', 'VLAN 30 — Voice', 'VLAN 40 — Servers'], correctIndex: 0 },
        { id: 'guest-kiosk', label: 'Port 7 — Guest Kiosk (visitor internet access only, must be isolated from internal resources)', options: ['VLAN 10 — Staff', 'VLAN 20 — Guest', 'VLAN 30 — Voice', 'VLAN 40 — Servers'], correctIndex: 1 },
        { id: 'ip-phone', label: 'Port 9 — IP Phone (needs prioritized, separated voice traffic)', options: ['VLAN 10 — Staff', 'VLAN 20 — Guest', 'VLAN 30 — Voice', 'VLAN 40 — Servers'], correctIndex: 2 },
        { id: 'file-server', label: 'Port 12 — File Server (hosts sensitive internal company data)', options: ['VLAN 10 — Staff', 'VLAN 20 — Guest', 'VLAN 30 — Voice', 'VLAN 40 — Servers'], correctIndex: 3 },
        { id: 'unused-port', label: 'Port 24 — Currently unused, no device connected', options: ['VLAN 10 — Staff', 'VLAN 40 — Servers', 'Native VLAN 1 (default)', 'A dedicated unused/parking VLAN'], correctIndex: 3 },
      ],
    },

    {
      id: 'lab-static-routing',
      moduleId: 8,
      type: 'match',
      title: 'Configure Static Routes for a Small Multi-Site Network',
      estMinutes: 20,
      scenario:
        'A company has three routers connecting its headquarters and two branch networks. You need to configure static routes on the headquarters router so it knows how to reach each remote network.',
      businessRequirement:
        'For each remote destination network, select the correct next-hop router address so traffic reaches its intended destination without relying on a dynamic routing protocol.',
      diagram: {
        type: 'diagram',
        html: `<div class="lesson-diagram lab-diagram" role="img" aria-label="Headquarters router connected point to point to Branch A router and Branch B router, each hosting a different local network">
          <div class="net-row">
            <div class="net-node">Branch A Router<br><small>Link: 10.0.1.2<br>LAN: 192.168.20.0/24</small></div>
            <div class="net-node highlight">HQ Router<br><small>10.0.1.1 / 10.0.2.1</small></div>
            <div class="net-node">Branch B Router<br><small>Link: 10.0.2.2<br>LAN: 192.168.30.0/24</small></div>
          </div>
        </div>`,
      },
      tools: 'No special tool required — apply what you learned in Module 8, Lesson 1 about routing tables and next-hop selection.',
      startingState:
        'The HQ router has two directly connected point-to-point links: 10.0.1.1 (to Branch A) and 10.0.2.1 (to Branch B). It has no static routes configured yet for either branch\'s internal LAN.',
      objectives: [
        'Select the correct next-hop address for reaching the Branch A LAN (192.168.20.0/24).',
        'Select the correct next-hop address for reaching the Branch B LAN (192.168.30.0/24).',
        'Select the correct next-hop for a general internet-bound default route, given an ISP link also exists at 10.0.3.2.',
      ],
      hints: [
        'Level 1: Match each destination NETWORK to the router that directly connects to it — the next hop is always the neighboring router\'s interface facing HQ.',
        'Level 2: The Branch A LAN is only reachable through the Branch A router, even though its LAN address (192.168.20.0/24) looks unrelated to the 10.0.1.x link address.',
        'Level 3: Route to 192.168.20.0/24 via 10.0.1.2 (Branch A router). Route to 192.168.30.0/24 via 10.0.2.2 (Branch B router). Default route (0.0.0.0/0) via 10.0.3.2 (the ISP link).',
      ],
      validation: 'Each destination network must be routed via the next-hop address of the router that actually connects to that destination, not just any available link.',
      expectedResult: 'HQ can reach both branch LANs and the internet, each via the correct, specific next hop rather than a guess.',
      troubleshooting: [
        'If Branch A traffic is routed via the Branch B link (or vice versa), double-check which router\'s interface actually faces which branch network.',
        'Remember: the default route only handles traffic with NO more specific matching route — it should never be used for a known branch LAN that has its own explicit route.',
      ],
      reflection: [
        'Why is it important to add a specific route for each branch LAN instead of relying only on a default route pointed at the ISP?',
        'What administrative distance would a static route like this typically have compared to a dynamic routing protocol route to the same destination?',
      ],
      taglishDebrief:
        'Ang bawat static route, parang direksyon na sinasabi mo sa router: "Kung papunta ka dito, dumaan ka riyan." Kung mali ang next hop na inilagay mo, hindi mo naman masisisi ang router — susundin lang niya nang eksakto ang sinabi mo, kahit mali.',
      resetNote: 'Use the "Reset Lab" control to clear your selections and try again from the starting state.',
      matchItems: [
        { id: 'route-branch-a', label: 'Route to 192.168.20.0/24 (Branch A LAN) — which next hop?', options: ['10.0.1.2 (Branch A router)', '10.0.2.2 (Branch B router)', '10.0.3.2 (ISP link)'], correctIndex: 0 },
        { id: 'route-branch-b', label: 'Route to 192.168.30.0/24 (Branch B LAN) — which next hop?', options: ['10.0.1.2 (Branch A router)', '10.0.2.2 (Branch B router)', '10.0.3.2 (ISP link)'], correctIndex: 1 },
        { id: 'route-default', label: 'Default route (0.0.0.0/0) for general internet traffic — which next hop?', options: ['10.0.1.2 (Branch A router)', '10.0.2.2 (Branch B router)', '10.0.3.2 (ISP link)'], correctIndex: 2 },
      ],
    },

    {
      id: 'lab-restaurant-wifi-capacity',
      moduleId: 9,
      type: 'match',
      title: 'Restaurant Wi-Fi: Coverage vs. Capacity Decisions',
      estMinutes: 20,
      scenario:
        'You are planning Wi-Fi for a busy restaurant (the same one from Module 9, Lesson 5). The owner reports several confusing, seemingly unrelated complaints and wants your recommendation for each.',
      businessRequirement:
        'For each reported symptom, correctly classify it as primarily a coverage problem, a capacity problem, or an interference problem, and choose the matching fix.',
      diagram: {
        type: 'diagram',
        html: `<div class="lesson-diagram lab-diagram" role="img" aria-label="Restaurant floor plan with dining area, kitchen, and storage room, each reporting different Wi-Fi complaints">
          <div class="net-row">
            <div class="net-node">Dining Area<br><small>Packed on Fridays</small></div>
            <div class="net-node">Near Kitchen<br><small>Microwaves running</small></div>
            <div class="net-node">Storage Room<br><small>No signal at all</small></div>
          </div>
        </div>`,
      },
      tools: 'No special tool required — apply the coverage vs. capacity vs. interference reasoning from Module 9, Lesson 5.',
      startingState:
        'The restaurant currently has a single access point mounted near the front entrance, installed when the dining room was much smaller before a recent expansion.',
      objectives: [
        'Classify each reported symptom by its most likely root cause.',
        'Match each symptom to the single best-fitting fix.',
      ],
      hints: [
        'Level 1: Ask "does this happen only when busy, only in one physical spot, or all the time everywhere?" — the pattern reveals the category.',
        'Level 2: A dead zone that never works, even when empty, points to coverage. A slow network only during rush hour points to capacity. A problem only near a specific appliance points to interference.',
        'Level 3: Storage room (never works) = coverage, needs another AP or better placement. Friday dinner rush slowness = capacity, needs AP capacity planning for peak occupancy. Slow only near the kitchen microwaves = interference, needs channel/band adjustment or moving the AP.',
      ],
      validation: 'Each symptom must be matched to the cause category (and fix) that its specific pattern actually supports, not just the most common guess.',
      expectedResult: 'All three complaints correctly diagnosed, each with an appropriately different fix rather than one generic "add more Wi-Fi" answer.',
      troubleshooting: [
        'Resist the urge to apply the same fix to every complaint — coverage, capacity, and interference problems have different root causes and different correct fixes.',
        'If unsure, ask when and where the problem happens — the pattern almost always reveals the category.',
      ],
      reflection: [
        'Why would simply adding more access points fix the storage room problem but do nothing for the microwave interference problem?',
        'How would you test whether the Friday rush slowdown is really a capacity problem before recommending a fix?',
      ],
      taglishDebrief:
        'Tatlong magkaibang sakit, tatlong magkaibang gamot — hindi porket "mabagal ang Wi-Fi" ay iisa lang ang dapat gawin. Ang tamang diagnosis muna, bago ang gamot, tulad ng ginagawa ng isang mahusay na doktor.',
      resetNote: 'Use the "Reset Lab" control to clear your selections and try again from the starting state.',
      matchItems: [
        { id: 'storage-room', label: 'Storage room has zero Wi-Fi signal at all times, even when the restaurant is empty', options: ['Coverage — add/reposition an access point', 'Capacity — add more access point capacity for peak load', 'Interference — change channel or move away from the interference source'], correctIndex: 0 },
        { id: 'friday-rush', label: 'Dining area Wi-Fi works fine most of the time, but becomes unusable specifically during the packed Friday dinner rush', options: ['Coverage — add/reposition an access point', 'Capacity — add more access point capacity for peak load', 'Interference — change channel or move away from the interference source'], correctIndex: 1 },
        { id: 'kitchen-area', label: 'Wi-Fi near the kitchen specifically degrades whenever the microwaves are running', options: ['Coverage — add/reposition an access point', 'Capacity — add more access point capacity for peak load', 'Interference — change channel or move away from the interference source'], correctIndex: 2 },
      ],
    },

    {
      id: 'lab-harden-office-network',
      moduleId: 12,
      type: 'checklist',
      title: 'Harden a Small Office Network',
      estMinutes: 25,
      scenario:
        'You have been asked to review a small office\'s network before it goes live for a new branch opening. The previous technician left several settings at factory defaults "to save time."',
      businessRequirement:
        'Review the proposed action list below and select every action that is a genuine, recommended security hardening step. Do not select actions that would actually reduce security or are irrelevant busywork.',
      diagram: {
        type: 'diagram',
        html: `<div class="lesson-diagram lab-diagram" role="img" aria-label="A small office network with a router, switch, and access point, all currently at factory default settings, needing a security review">
          <div class="net-node router">Router (default admin/admin login)</div>
          <div class="net-line">&darr;</div>
          <div class="net-node">Switch (native VLAN 1, all ports open)</div>
          <div class="net-line">&darr;</div>
          <div class="net-node">Access Point (open guest network, WPA2-Personal for staff)</div>
        </div>`,
      },
      tools: 'No special tool required — apply the hardening and security concepts from Module 12.',
      startingState:
        'Every device is running factory-default credentials and configuration. No formal security review has been performed yet.',
      objectives: [
        'Identify which proposed actions are genuine security improvements.',
        'Avoid selecting actions that sound plausible but are not actually correct hardening practices.',
      ],
      hints: [
        'Level 1: Ask of each action, "does this reduce the attack surface, or does it just sound technical?"',
        'Level 2: Revisit Module 7 (native VLAN, port security) and Module 12 (device hardening, least privilege, segmentation) for the specific practices this checklist is testing.',
        'Level 3: The genuinely correct actions are: change default credentials, disable unused ports, change the native VLAN away from default, enable WPA3/strong WPA2 on Wi-Fi, apply firmware/security patches, and enforce least privilege for admin accounts. The incorrect ones are: leaving native VLAN at default, combining guest and internal traffic on one VLAN, and disabling logging to "improve performance."',
      ],
      validation: 'Full credit requires selecting every genuinely correct hardening action and avoiding every incorrect one.',
      expectedResult: 'A hardened baseline configuration reflecting real, defensible security practices rather than security theater.',
      troubleshooting: [
        'If your score is lower than expected, review any item you were unsure about against the specific Module 12 lesson it comes from.',
        'Remember: an action that sounds "more secure" is not always actually correct — always tie your reasoning back to a specific principle (least privilege, reduced attack surface, segmentation).',
      ],
      reflection: [
        'Which single action on this list would you prioritize first if you only had time for one, and why?',
        'Why is "disabling logging to improve performance" a bad idea even though it might genuinely reduce device load slightly?',
      ],
      taglishDebrief:
        'Hindi lahat ng "parang technical" na aksyon ay talagang nagpapataas ng seguridad — minsan, mas mahalaga pa ring alamin kung BAKIT tama o mali ang isang hakbang, kaysa basta sundin ang checklist nang walang pag-unawa.',
      resetNote: 'Use the "Reset Lab" control to clear your selections and try again from the starting state.',
      checklistItems: [
        { id: 'ck-default-creds', label: 'Change all default administrator usernames and passwords on the router, switch, and access point', correct: true },
        { id: 'ck-unused-ports', label: 'Disable unused switch ports', correct: true },
        { id: 'ck-native-vlan', label: 'Leave the switch\'s native VLAN at its factory default (VLAN 1) to save configuration time', correct: false },
        { id: 'ck-wifi-encryption', label: 'Enable WPA3 (or strong WPA2) with a strong passphrase on the staff wireless network', correct: true },
        { id: 'ck-guest-isolation', label: 'Put guest Wi-Fi traffic on the same VLAN as internal servers to simplify the network', correct: false },
        { id: 'ck-patches', label: 'Apply the latest available firmware and security patches to all three devices', correct: true },
        { id: 'ck-least-privilege', label: 'Create a limited-privilege admin account for daily use instead of always using the full administrator account', correct: true },
        { id: 'ck-disable-logging', label: 'Disable device logging entirely to slightly reduce CPU load', correct: false },
      ],
    },

    {
      id: 'lab-campus-vlsm-plan',
      moduleId: 4,
      type: 'subnet-plan',
      title: 'Campus Network VLSM Plan',
      estMinutes: 25,
      scenario:
        'A small college campus is standing up its network from one larger address block. You have been asked to design an efficient VLSM plan for five very differently-sized segments.',
      businessRequirement:
        'Design subnets for: Dorm A (200 hosts), Dorm B (200 hosts), the Library (100 hosts), the Admin Building (60 hosts), and a Security Camera subnet (14 hosts) — all carved from the single address block 172.16.0.0/22 (1024 addresses), using VLSM so no segment wastes more addresses than necessary.',
      diagram: {
        type: 'diagram',
        html: `<div class="lesson-diagram lab-diagram" role="img" aria-label="Campus network diagram with five segments: Dorm A, Dorm B, Library, Admin Building, and Security Cameras, all connected to a central core router">
          <div class="net-node router">Core Router<br><small>172.16.0.0/22</small></div>
          <div class="net-line">&darr;</div>
          <div class="net-row">
            <div class="net-node">Dorm A<br><small>200 hosts</small></div>
            <div class="net-node">Dorm B<br><small>200 hosts</small></div>
            <div class="net-node">Library<br><small>100 hosts</small></div>
            <div class="net-node">Admin Bldg<br><small>60 hosts</small></div>
            <div class="net-node">Cameras<br><small>14 hosts</small></div>
          </div>
        </div>`,
      },
      tools: 'This platform\'s Subnet Calculator (Study Tools menu) — open it in a second tab/window to check your work as you go.',
      startingState:
        'You have one address block: 172.16.0.0/22 (1022 usable addresses total across the whole block). No subnets have been created yet.',
      requirements: [
        { key: 'dormA', label: 'Dorm A', hosts: 200 },
        { key: 'dormB', label: 'Dorm B', hosts: 200 },
        { key: 'library', label: 'Library', hosts: 100 },
        { key: 'admin', label: 'Admin Building', hosts: 60 },
        { key: 'cameras', label: 'Security Cameras', hosts: 14 },
      ],
      totalAddresses: 1024,
      objectives: [
        'Allocate a subnet for Dorm A (200 hosts) using the smallest CIDR that fits.',
        'Allocate a subnet for Dorm B (200 hosts).',
        'Allocate a subnet for the Library (100 hosts).',
        'Allocate a subnet for the Admin Building (60 hosts).',
        'Allocate a subnet for the Security Camera segment (14 hosts).',
        'Confirm no two subnets overlap and the whole plan fits inside the /22 block.',
      ],
      hints: [
        'Level 1: Start with the two LARGEST requirements first (Dorm A and Dorm B) to avoid awkward leftover fragments.',
        'Level 2: For 200 hosts, a /25 (126 usable) is not enough — you need a /24 (254 usable). For 14 hosts, 2^4 - 2 = 14 exactly, so a /28 is the tightest fit.',
        'Level 3: A working allocation is: Dorm A = 172.16.0.0/24 (254 usable), Dorm B = 172.16.1.0/24 (254 usable), Library = 172.16.2.0/25 (126 usable), Admin Building = 172.16.2.128/26 (62 usable), Cameras = 172.16.2.192/28 (14 usable).',
      ],
      validation:
        'Each subnet must provide at least the required number of usable hosts, use the smallest CIDR that still fits, no two subnets may share any address, and the total must fall within 172.16.0.0/22.',
      expectedResult:
        'Five correctly sized, non-overlapping subnets that together use address space efficiently, leaving unused room in the /22 block for future growth.',
      troubleshooting: [
        'If a subnet is too small for its segment, recount required host bits: hosts needed <= 2^(host bits) - 2.',
        'If the plan exceeds the /22 budget, check whether the two large dorm subnets were oversized beyond the /24 they actually need.',
      ],
      reflection: [
        'Why does the Security Camera subnet need exactly a /28 rather than a /27 or /29?',
        'If a third 200-host dorm were added later, would this /22 block still have room for it? Show the math.',
      ],
      taglishDebrief:
        'Kapag magkakaiba nang husto ang laki ng bawat segment (200 hosts vs. 14 hosts lang), mas kailangan mong maging eksakto sa VLSM — kasi kung pareho mong bibigyan ng malaking CIDR ang lahat, mauubos agad ang address space kahit hindi naman kailangan.',
      resetNote: 'Use the "Reset Lab" control to clear your entered answers and try again from the starting state.',
    },

    {
      id: 'lab-troubleshooting-ticket-triage',
      moduleId: 13,
      type: 'match',
      title: 'Troubleshooting Ticket Triage: First Move, Right Tool',
      estMinutes: 20,
      scenario:
        'You are the on-call technician for a help desk. Six tickets just came in. For each one, you need to pick the single best FIRST diagnostic action or tool before doing anything else.',
      businessRequirement:
        'For each ticket, choose the first diagnostic step that most directly targets the described symptom, rather than a generic or premature action.',
      diagram: {
        type: 'diagram',
        html: `<div class="lesson-diagram lab-diagram" role="img" aria-label="Help desk ticket queue with six incoming tickets describing different network symptoms">
          <div class="net-node router">Help Desk Queue</div>
          <div class="net-line">&darr;</div>
          <div class="net-row">
            <div class="net-node">Ticket 1<br><small>APIPA address</small></div>
            <div class="net-node">Ticket 2<br><small>Rising CRC errors</small></div>
            <div class="net-node">Ticket 3<br><small>Cross-VLAN failure</small></div>
          </div>
          <div class="net-row">
            <div class="net-node">Ticket 4<br><small>Need per-hop latency</small></div>
            <div class="net-node">Ticket 5<br><small>Suspected duplicate IP</small></div>
            <div class="net-node">Ticket 6<br><small>Wi-Fi drops near microwave</small></div>
          </div>
        </div>`,
      },
      tools: 'No special tool required — this lab tests the symptom-to-tool and symptom-to-action mapping from Module 13, Lessons 2-6.',
      startingState: 'Six open tickets, each with only the symptom described — no other diagnosis has been performed yet.',
      objectives: [
        'Match each ticket\'s symptom to the single best first diagnostic action or tool.',
        'Avoid picking a plausible-sounding but non-diagnostic first step.',
      ],
      hints: [
        'Level 1: Ask "what layer does this symptom describe?" — physical, VLAN/switching, IP/DHCP, or wireless-specific.',
        'Level 2: Recall the exact "question to tool" table from Lesson 13-6, and the symptom patterns from Lessons 13-2 through 13-5.',
        'Level 3: Ticket 1 (APIPA) -> check DHCP server/scope and the port\'s VLAN. Ticket 2 (rising CRC on one port) -> test/replace the physical cable. Ticket 3 (cross-VLAN failure) -> check inter-VLAN routing on the Layer 3 device. Ticket 4 (per-hop latency) -> traceroute/tracert. Ticket 5 (duplicate IP suspicion) -> check the ARP table. Ticket 6 (Wi-Fi drops near microwave) -> use a Wi-Fi analyzer to check channel/interference.',
      ],
      validation: 'Each ticket must be matched to the first action that most directly and specifically targets its described symptom.',
      expectedResult: 'All six tickets correctly triaged to the diagnostic step that would actually move each investigation forward.',
      troubleshooting: [
        'If you picked a "fix" instead of a "diagnostic step" for a ticket, back up — the methodology tests the theory before implementing a solution.',
        'If two tickets seem to want the same tool, re-read the symptom for the one clue (an isolated port, a specific VLAN boundary, an appliance correlation) that tells them apart.',
      ],
      reflection: [
        'Which ticket in this set was easiest to mis-diagnose, and what specific word or phrase in it was the deciding clue?',
        'For Ticket 3 (cross-VLAN failure), why is "check inter-VLAN routing" the better first step than "replace the switch"?',
      ],
      taglishDebrief:
        'Bawat ticket dito, may isang specific na clue na nagsasabi kung saang layer ka dapat tumingin muna — huwag basta gagamit ng parehong solusyon sa lahat, tulad ng ginagawa ng isang mahusay na technician na sumusunod sa ebidensya bawat ticket.',
      resetNote: 'Use the "Reset Lab" control to clear your selections and try again from the starting state.',
      matchItems: [
        { id: 'ticket-apipa', label: 'Ticket 1: A user\'s laptop shows IP 169.254.31.9 and cannot reach anything on the network.', options: ['Check the DHCP server/scope and the port\'s VLAN assignment', 'Run a cable tester on the patch cable', 'Restart the user\'s web browser', 'Check the ARP table for a MAC conflict'], correctIndex: 0 },
        { id: 'ticket-crc', label: 'Ticket 2: One specific switch port shows a rapidly rising CRC error count; every other port is clean.', options: ['Reboot the DHCP server', 'Test/replace the physical cable on that port', 'Check the default gateway configuration', 'Run nslookup against the DNS server'], correctIndex: 1 },
        { id: 'ticket-vlan', label: 'Ticket 3: Users on VLAN 20 cannot reach a file server on VLAN 30, though intra-VLAN traffic works fine for both.', options: ['Replace the access switch', 'Restart the affected user\'s workstation', 'Check inter-VLAN routing on the Layer 3 device (missing/misconfigured SVI)', 'Clear the DNS cache'], correctIndex: 2 },
        { id: 'ticket-traceroute', label: 'Ticket 4: You need to see the exact path packets take to a remote server and the latency at each hop.', options: ['traceroute / tracert', 'arp', 'nslookup', 'netstat / ss'], correctIndex: 0 },
        { id: 'ticket-arp', label: 'Ticket 5: You suspect two devices on the same local segment have a duplicate IP address.', options: ['ping the default gateway', 'Check the ARP table for conflicting entries', 'Run a Wi-Fi analyzer', 'Restart the DHCP service'], correctIndex: 1 },
        { id: 'ticket-wifi-interference', label: 'Ticket 6: Wi-Fi near the break room drops specifically whenever the microwave oven is running.', options: ['Use a Wi-Fi analyzer to check channel usage and interference', 'Reboot the core router', 'Check static routes to the break room subnet', 'Clear the ARP cache on the access point'], correctIndex: 0 },
      ],
    },
  ];
}(window.NetReady));
