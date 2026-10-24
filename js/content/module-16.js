/**
 * content/module-16.js — Module 16: Deep Dives (worked examples and walkthroughs)
 *
 * In-depth lessons that go beyond definitions: step-by-step worked problems,
 * annotated configuration, and sample command output, then the same
 * troubleshooting questions a technician asks on the job. Built with
 * NetReady.lesson() and the optional `deepDive` worked-example blocks.
 * Addresses use documentation ranges (192.0.2.0/24, 198.51.100.0/24,
 * 203.0.113.0/24) or private ranges, and example.com for names.
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  NetReady.LESSONS['16-1'] = NetReady.lesson(16, {
    id: '16-1',
    slug: 'deep-dive-subnetting-worked-problems',
    title: 'Deep Dive: Subnetting Mastery With Fully Worked Problems',
    minutes: 25,
    outcomes: [
      `Solve any "network ID, broadcast, first and last host" problem in under a minute using the block-size method.`,
      `Work backwards from a host or subnet requirement to the correct prefix length.`,
      `Allocate a VLSM plan largest-first with no overlaps, and summarize contiguous networks.`,
      `Check your own answers with a short verification routine.`,
    ],
    why: `Subnetting is the single most testable skill on the exam and the one beginners fear most. It is a pattern, not magic. This lesson shows the pattern on seven different problems with every step written out, so you can copy the method and make it automatic.`,
    simple: `Every subnetting question is the same five steps. Step 1: write the prefix length and find the interesting octet, the one where the mask is neither 255 nor 0. Step 2: compute the block size, which is 256 minus the mask value in that octet. Step 3: list the multiples of the block size; the one at or just below your address is the network ID. Step 4: the broadcast address is the next multiple minus 1. Step 5: the usable range runs from network ID plus 1 to broadcast minus 1. Usable hosts are 2 to the power of host bits, minus 2. To go backwards from a requirement, find the smallest number of host bits h where 2^h minus 2 is at least the hosts needed; the prefix is 32 minus h.`,
    taglish: `Iisa lang ang pattern ng bawat subnetting problem. (1) Hanapin ang interesting octet — yung hindi 255 o 0 ang mask. (2) Block size = 256 minus ang mask value doon. (3) Ilista ang multiples ng block size; ang pinakamalapit na multiple na hindi lalampas sa address mo ang network ID. (4) Broadcast = susunod na multiple minus 1. (5) Usable range = network ID plus 1 hanggang broadcast minus 1. Usable hosts = 2 na itinaas sa host bits, minus 2. Kung pabalik ang tanong, hanapin ang pinakamaliit na host bits h na ang 2^h minus 2 ay sapat sa kailangan; ang prefix ay 32 minus h.`,
    analogy: {
      title: 'Hagdan na may pantay na baitang',
      text: `Isipin ang hagdan na may baitang na pare-pareho ang taas (block size). Kapag alam mo ang taas ng baitang, madali mong makikita kung saang baitang nakatayo ang isang tao (network ID) at kung saan ang susunod na baitang (kung saan nagtatapos ang subnet mo, minus 1 ang broadcast).`,
    },
    steps: [
      `Know the mask values per octet by heart: 128, 192, 224, 240, 248, 252, 254, 255 (that is 1, 2, 3, 4, 5, 6, 7, 8 network bits). The block size is 256 minus the mask value: 128, 64, 32, 16, 8, 4, 2, 1.`,
      `Prefix to interesting octet: /1 to /8 is the first octet, /9 to /16 the second, /17 to /24 the third, /25 to /32 the fourth. Octets before it are copied as they are; octets after it are 0 (network) or 255 (broadcast).`,
      `Host count: usable hosts = 2^(32 minus prefix) minus 2. Subnet count when borrowing n bits is 2^n.`,
      `Always verify: the network ID must be a multiple of the block size in the interesting octet, the broadcast must be one less than a multiple, and (network ID + block size) is the next subnet.`,
      `VLSM rule: sort requirements largest to smallest, give each the smallest block that fits (hosts + 2 addresses rounded up to a power of two), and place each block at the next free address that is a multiple of its own size.`,
      `Summarization rule: a group of contiguous networks can be summarized into one prefix only if the count is a power of two and the first network ID is a multiple of the whole group's size.`,
    ],
    deepDive: [
      {
        title: 'Problem 1: 192.168.10.77/27',
        text: `The mask is 255.255.255.224, so the interesting octet is the fourth and the block size is 256 minus 224 = 32. Multiples of 32: 0, 32, 64, 96. The address ends in 77, which sits between 64 and 96.`,
        code: `Network ID     : 192.168.10.64
Broadcast      : 192.168.10.95   (96 - 1)
First host     : 192.168.10.65
Last host      : 192.168.10.94
Usable hosts   : 2^5 - 2 = 30
Next subnet    : 192.168.10.96`,
        note: `Find the multiple just below the address; the broadcast is one below the next multiple.`,
      },
      {
        title: 'Problem 2: 172.16.45.200/21 (interesting octet is the third)',
        text: `/21 means 16 bits in the first two octets plus 5 bits in the third, so the third octet mask is 248 and the block size is 256 minus 248 = 8. Multiples of 8 near 45: 40, 48. The address's third octet is 45, so the network starts at 40. The fourth octet of the network is 0 and of the broadcast is 255.`,
        code: `Mask           : 255.255.248.0
Network ID     : 172.16.40.0
Broadcast      : 172.16.47.255   (48 - 1 in the third octet, 255 in the fourth)
First host     : 172.16.40.1
Last host      : 172.16.47.254
Usable hosts   : 2^11 - 2 = 2046`,
        note: `When the interesting octet is not the last one, the later octets are 0 for the network and 255 for the broadcast.`,
      },
      {
        title: 'Problem 3: 10.20.30.40/13 (interesting octet is the second)',
        text: `/13 is 8 bits in the first octet plus 5 in the second: mask 255.248.0.0, block size 8 in the second octet. Multiples of 8 near 20: 16, 24. So the network starts at 16.`,
        code: `Network ID     : 10.16.0.0
Broadcast      : 10.23.255.255
First host     : 10.16.0.1
Last host      : 10.23.255.254
Usable hosts   : 2^19 - 2 = 524,286`,
      },
      {
        title: 'Problem 4: working backwards from a requirement',
        text: `Requirement A: "Split 192.168.5.0/24 into at least 6 equal subnets." You need 2^n at least 6, so n = 3 bits (8 subnets). The new prefix is /27 (24 + 3), block size 32, 30 hosts per subnet. Requirement B: "A subnet must hold 50 hosts." You need 2^h minus 2 at least 50: h = 5 gives 30 (too small), h = 6 gives 62 (fits). The prefix is 32 minus 6 = /26.`,
        code: `Requirement A subnets (/27):
  192.168.5.0, .32, .64, .96, .128, .160, .192, .224

Requirement B: /26 -> mask 255.255.255.192, 62 usable hosts`,
        note: `Subnets use 2^n (borrowed bits). Hosts use 2^h - 2 (remaining host bits).`,
      },
      {
        title: 'Problem 5: from a mask to a prefix, then solve',
        text: `Given 10.1.1.100 with mask 255.255.255.240: 240 is 4 network bits in the last octet, so the prefix is /28 and the block size is 16. Multiples of 16 near 100: 96, 112.`,
        code: `Prefix         : /28
Network ID     : 10.1.1.96
Broadcast      : 10.1.1.111
Usable range   : 10.1.1.97 - 10.1.1.110  (14 hosts)`,
      },
      {
        title: 'Problem 6: a complete VLSM plan for 192.168.50.0/24',
        text: `Requirements: Sales 100 hosts, Engineering 50, Management 20, Guest 10, one WAN link 2. Sort largest first and pick the smallest block that fits (hosts plus network and broadcast): 100 hosts need 128 addresses (/25), 50 need 64 (/26), 20 need 32 (/27), 10 need 16 (/28), 2 need 4 (/30). Place each at the next free multiple of its own size.`,
        code: `Sales        192.168.50.0/25     .0   - .127   (126 hosts)
Engineering  192.168.50.128/26   .128 - .191   (62 hosts)
Management   192.168.50.192/27   .192 - .223   (30 hosts)
Guest        192.168.50.224/28   .224 - .239   (14 hosts)
WAN link     192.168.50.240/30   .240 - .243   (2 hosts)
Unused       192.168.50.244 - .255 (12 addresses, free for growth)`,
        note: `Largest first keeps every block aligned, so nothing overlaps and the unused space stays in one piece.`,
      },
      {
        title: 'Problem 7: route summarization',
        text: `Can 192.168.4.0/24, 192.168.5.0/24, 192.168.6.0/24, and 192.168.7.0/24 be summarized? Four networks is a power of two, and the first third-octet value (4) is a multiple of 4, so yes. The summary is 192.168.4.0/22 (mask 255.255.252.0). By contrast, 192.168.1.0 through 192.168.4.0 cannot be one summary: the first value (1) is not a multiple of 4.`,
        code: `192.168.4.0/24 ... 192.168.7.0/24  ->  192.168.4.0/22
  third octet 4 = 00000100
  third octet 7 = 00000111
  first 6 bits shared -> 16 + 6 = 22 bits in common`,
        note: `The common bits are the summary; the number of networks must be a power of two and start on a boundary.`,
      },
    ],
    table: {
      label: 'Table of CIDR prefixes, masks, block sizes and hosts',
      head: ['Prefix', 'Last-octet mask', 'Block size', 'Usable hosts'],
      rows: [
        ['/24', '255.255.255.0', '256', '254'],
        ['/25', '255.255.255.128', '128', '126'],
        ['/26', '255.255.255.192', '64', '62'],
        ['/27', '255.255.255.224', '32', '30'],
        ['/28', '255.255.255.240', '16', '14'],
        ['/29', '255.255.255.248', '8', '6'],
        ['/30', '255.255.255.252', '4', '2'],
      ],
      caption: 'Memorize this table and the rest of subnetting is arithmetic.',
    },
    example: `A technician is asked to add a 40-host VLAN to a site that uses 10.8.0.0/22 and already has the first two /24s used. The next free /24 boundary in 10.8.0.0/22 is 10.8.2.0. A /26 (62 hosts) fits the 40 hosts, so the new VLAN gets 10.8.2.0/26, leaving 10.8.2.64 onward available. Because blocks were aligned, no existing network had to change.`,
    tips: [
      `Always write the block size first; everything else follows from it.`,
      `If your network ID is not a multiple of the block size, you made an error. Check before you move on.`,
      `On the exam, use the scratch pad: write 128 64 32 16 8 4 2 1 across the top and draw the octet.`,
    ],
    exam: `Expect to be given an IP and a prefix or mask and asked for the network ID, broadcast, usable range or host count, and to choose the correct VLSM plan or summary. Recognize the traps: forgetting to subtract 2, miscounting which octet is interesting, and not aligning blocks.`,
    mistakes: [
      `Using 2^h instead of 2^h minus 2 for usable hosts.`,
      `Starting a smaller VLSM block before a larger one, which leaves misaligned gaps.`,
      `Summarizing networks that are not on a power-of-two boundary.`,
    ],
    terms: [
      { term: 'Block size', def: `The size of each subnet in the interesting octet: 256 minus the mask value.` },
      { term: 'Interesting octet', def: `The octet where the mask is neither 0 nor 255.` },
      { term: 'VLSM', def: `Variable-length subnet masking: giving each subnet a different size.` },
      { term: 'Summarization', def: `Combining contiguous networks into one shorter-prefix route.` },
      { term: 'Wildcard mask', def: `The inverse of a subnet mask, used in ACLs and OSPF network statements.` },
    ],
    checks: [
      {
        prompt: `What is the broadcast address for 192.168.10.77/27?`,
        options: [`192.168.10.64`, `192.168.10.95`, `192.168.10.96`, `192.168.10.127`],
        correct: 1,
        explanation: `The block size is 32; the host is in the 64 block, so the broadcast is the next multiple (96) minus 1, which is 95.`,
      },
      {
        prompt: `How many usable hosts does a /26 provide?`,
        options: [`30`, `62`, `64`, `126`],
        correct: 1,
        explanation: `A /26 has 6 host bits: 2^6 minus 2 equals 62.`,
      },
      {
        prompt: `Which summary covers 192.168.4.0/24 through 192.168.7.0/24 exactly?`,
        options: [`192.168.4.0/21`, `192.168.4.0/22`, `192.168.4.0/23`, `192.168.0.0/22`],
        correct: 1,
        explanation: `Four contiguous networks starting on a multiple of four combine into a /22.`,
      },
    ],
    mini: {
      prompt: `A new VLAN needs 28 hosts and another needs 12. You are allocating from 172.20.0.0/24 largest first.`,
      task: `Which prefixes do you assign, and what are the two network IDs?`,
    },
    recap: `Find the interesting octet, compute the block size, locate the multiple below the address, and read off the network ID, broadcast, and range. Work backwards with 2^h minus 2. Plan VLSM largest first on aligned boundaries, and summarize only power-of-two groups that start on a boundary.`,
    classroom: `"Block size muna. Lahat ng sagot ay nakasabit sa block size."`,
  });

  NetReady.LESSONS['16-2'] = NetReady.lesson(16, {
    id: '16-2',
    slug: 'deep-dive-ospf-adjacency-and-cost',
    title: 'Deep Dive: How OSPF Really Works, From Hello Packets to the Routing Table',
    minutes: 24,
    outcomes: [
      `Follow an OSPF neighbor through every state from Down to Full.`,
      `Explain DR/BDR election, router ID selection, and why 2-Way/DROther is normal.`,
      `Calculate OSPF cost and fix the reference bandwidth problem.`,
      `Diagnose why an OSPF adjacency will not form.`,
    ],
    why: `OSPF is the most common interior routing protocol and the one the exam describes in the most detail. Knowing the neighbor states and the usual failure causes lets you solve scenario questions and real outages.`,
    simple: `OSPF is a link-state protocol. Each router describes its own links in link-state advertisements (LSAs), floods them to every router in its area, and every router builds an identical map called the link-state database. Each router then runs the shortest-path-first algorithm on that map to build its own routing table, choosing the lowest total cost. To share LSAs, routers first become neighbors by exchanging Hello packets, then exchange database summaries, and finally reach the Full state. On a shared Ethernet segment, routers elect a designated router (DR) and backup (BDR) so that everyone does not have to form a full adjacency with everyone else.`,
    taglish: `Ang OSPF ay link-state: bawat router ay nagbabalita ng sarili niyang links (LSA), ipinapadala sa lahat sa area, kaya pare-pareho ang mapa (link-state database) ng lahat. Tapos tinatakbo ng bawat router ang SPF algorithm para gumawa ng sarili niyang routing table na pinakamababa ang total cost. Para makapagpalitan ng LSA, kailangan munang maging neighbor sa pamamagitan ng Hello packets, tapos magpalitan ng database summary, hanggang Full state. Sa shared na Ethernet, may election ng DR at BDR para hindi kailangang mag-full adjacency ang lahat sa lahat.`,
    analogy: {
      title: 'Mga kapitbahay na may parehong mapa',
      text: `Isipin na bawat bahay ay nagsusulat kung anong mga kalsada ang konektado sa kanya at ibinabahagi sa lahat. Pagkatapos, bawat isa ay may kumpletong mapa ng subdivision at siya mismo ang pumipili ng pinakamabilis na ruta. Ang DR ay ang tagapamahala ng homeowners na nagpapamigay ng mapa para hindi lahat ay nag-uusap sa lahat.`,
    },
    steps: [
      `Transport: OSPF runs directly over IP (protocol 89), using multicast 224.0.0.5 (all OSPF routers) and 224.0.0.6 (all DRs). Its administrative distance is 110.`,
      `Hello and dead timers: on broadcast and point-to-point networks, Hello every 10 seconds and Dead after 40 seconds; on non-broadcast networks 30 and 120. Both must match on neighbors.`,
      `Neighbor states: Down (nothing heard), Init (heard a Hello but not yet seen myself listed), 2-Way (bidirectional, my router ID appears in their Hello), ExStart (choose master and slave for database exchange), Exchange (swap database descriptions), Loading (request missing LSAs), Full (databases synchronized).`,
      `DR/BDR: on a multi-access segment the router with the highest priority (default 1; 0 means never) becomes DR, with ties broken by the highest router ID. The election is not preemptive: a better router joining later does not take over. Routers that are neither DR nor BDR (DROthers) stay in 2-Way with each other and are Full only with the DR and BDR. On point-to-point links there is no election.`,
      `Router ID: chosen as the manually configured router-id, otherwise the highest IPv4 address on a loopback interface, otherwise the highest IPv4 address on an active physical interface. Set it manually so it never changes unexpectedly.`,
      `Cost: cost = reference bandwidth divided by interface bandwidth, with a minimum of 1. The default reference is 100 Mbps, so FastEthernet and anything faster all cost 1. On modern networks, raise it (for example auto-cost reference-bandwidth 100000 for 100 Gbps) on every router so 1 Gbps and 10 Gbps links get different costs.`,
      `Areas: area 0 is the backbone and every other area must connect to it. Routers with interfaces in more than one area are area border routers (ABRs); routers that redistribute outside routes are ASBRs. Areas keep LSA flooding and the database small.`,
      `LSA types to know: Type 1 router LSA (a router's links within the area), Type 2 network LSA (the DR describes a multi-access segment), Type 3 summary LSA (ABR advertises networks between areas), Type 4 ASBR summary, Type 5 external LSA (redistributed routes), Type 7 NSSA external.`,
    ],
    deepDive: [
      {
        title: 'Configuring two routers and verifying the neighbor',
        text: `R1 and R2 share the 10.0.0.0/24 segment. R1 also has the LAN 192.168.1.0/24, and R2 has 192.168.2.0/24. The network statement uses a wildcard mask (the inverse of the subnet mask) and decides which interfaces run OSPF. The passive-interface command stops Hellos on the user LAN while still advertising it.`,
        code: `R1(config)# router ospf 1
R1(config-router)# router-id 1.1.1.1
R1(config-router)# network 10.0.0.0 0.0.0.255 area 0
R1(config-router)# network 192.168.1.0 0.0.0.255 area 0
R1(config-router)# passive-interface GigabitEthernet0/1
R1(config-router)# auto-cost reference-bandwidth 10000`,
        note: `A passive interface advertises its network but sends no Hellos, so no one can form a neighbor there. Always use it on user-facing LANs.`,
      },
      {
        title: 'Reading the neighbor table',
        text: `On a segment with three routers, the output on R3 might look like this. R3 is Full with the DR (R2) and the BDR (R1), which is the expected pattern for a DROther. Two DROthers would show each other as 2WAY/DROTHER, and that is normal, not a fault.`,
        code: `R3# show ip ospf neighbor

Neighbor ID     Pri   State           Dead Time   Address         Interface
1.1.1.1           1   FULL/BDR        00:00:36    10.0.0.1        GigabitEthernet0/0
2.2.2.2           1   FULL/DR         00:00:38    10.0.0.2        GigabitEthernet0/0`,
      },
      {
        title: 'Verifying learned routes and cost',
        text: `Learned OSPF routes show the code O, the administrative distance and cost in square brackets (110 and the total cost), the next hop, and how long the route has existed. The cost here is 2: 1 for the 10.0.0.0/24 link and 1 for R2's LAN interface at the default reference bandwidth.`,
        code: `R1# show ip route ospf
O    192.168.2.0/24 [110/2] via 10.0.0.2, 00:12:44, GigabitEthernet0/0`,
      },
      {
        title: 'Cost arithmetic with different reference bandwidths',
        text: `Cost = reference bandwidth in Mbps divided by the interface bandwidth in Mbps, rounded down, minimum 1.`,
        code: `Reference 100 Mbps (default)         Reference 10,000 Mbps (raised)
  10 Mbps Ethernet   = 10                 10 Mbps   = 1000
  100 Mbps           = 1                  100 Mbps  = 100
  1 Gbps             = 1  (same!)         1 Gbps    = 10
  10 Gbps            = 1  (same!)         10 Gbps   = 1
  T1 (1.544 Mbps)    = 64                 T1        = 6476`,
        note: `With the default reference bandwidth, 100 Mbps, 1 Gbps, and 10 Gbps links look identical to OSPF, so it may choose a slow path. Raise the reference bandwidth on all routers consistently.`,
      },
      {
        title: 'Troubleshooting checklist: why will not the neighbor come up?',
        text: `Work from the symptom state. Stuck in Down or Init usually means a Layer 1 to 3 problem or a mismatched Hello setting. Stuck in ExStart or Exchange almost always means an MTU mismatch. Never reaching 2-Way means one router does not see its own ID in the neighbor's Hello.`,
        code: `Check (both routers must agree):
  - IP addresses are in the same subnet, same mask
  - Same area ID on the interface
  - Hello and Dead timers identical
  - Same authentication type and key
  - Same MTU on the link  (mismatch -> stuck in EXSTART)
  - Same network type (broadcast vs point-to-point)
  - Unique router IDs (duplicates cause flapping)
  - Interface not passive; no ACL blocking protocol 89
  - Stub flags (area type) match`,
      },
    ],
    table: {
      label: 'Table of OSPF neighbor states',
      head: ['State', 'Meaning', 'If stuck here'],
      rows: [
        ['Down', 'No Hello heard', 'Layer 1 to 3 problem, passive interface, ACL'],
        ['Init', 'Heard a Hello, not yet listed in it', 'One-way communication, ACL or authentication'],
        ['2-Way', 'Bidirectional; DR/BDR chosen', 'Normal for DROther pairs'],
        ['ExStart', 'Choosing master and slave', 'MTU mismatch, duplicate router ID'],
        ['Exchange', 'Swapping database descriptions', 'MTU mismatch'],
        ['Loading', 'Requesting missing LSAs', 'Corrupt LSA, MTU'],
        ['Full', 'Databases synchronized', 'This is the goal'],
      ],
      caption: 'Where a neighbor is stuck tells you which settings to check.',
    },
    example: `After a link upgrade from 100 Mbps to 10 Gbps, traffic still takes a slow 1 Gbps path through a distant office. show ip route shows both paths with the same cost because the reference bandwidth is still 100 Mbps. Setting auto-cost reference-bandwidth 100000 on every router makes the 10 Gbps path cost 10 and the 1 Gbps path 100, so OSPF prefers the fast link.`,
    tips: [
      `Neighbors stuck in ExStart almost always point to an MTU mismatch.`,
      `Set router IDs manually (usually a loopback) so they never change when interfaces flap.`,
      `Match the reference bandwidth on every router, or costs will disagree across the area.`,
    ],
    exam: `Know OSPF details: link-state, area 0 backbone, AD 110, Hello 10 and Dead 40, multicast 224.0.0.5/6, the DR/BDR election by priority then router ID, cost based on bandwidth, and that adjacency requires matching area, timers, subnet, authentication, and MTU.`,
    mistakes: [
      `Thinking 2-Way/DROTHER between two routers is a failure.`,
      `Leaving the default reference bandwidth on a network with Gigabit links.`,
      `Advertising a user LAN without making the interface passive.`,
    ],
    terms: [
      { term: 'LSA', def: `Link-state advertisement describing a router's links or a network.` },
      { term: 'Link-state database', def: `The collection of LSAs every router in an area holds identically.` },
      { term: 'DR / BDR', def: `Designated and backup designated router elected on multi-access networks.` },
      { term: 'Router ID', def: `32-bit identifier of an OSPF router, written like an IPv4 address.` },
      { term: 'ABR / ASBR', def: `Area border router / autonomous system boundary router.` },
      { term: 'Passive interface', def: `Interface that is advertised but does not send OSPF Hellos.` },
    ],
    commands: [
      { os: 'Cisco IOS', cmd: 'show ip ospf neighbor', desc: `Lists neighbors with state, priority, dead timer, and interface.` },
      { os: 'Cisco IOS', cmd: 'show ip ospf interface brief', desc: `Shows which interfaces run OSPF, their area, cost, and neighbor count.` },
      { os: 'Cisco IOS', cmd: 'show ip route ospf', desc: `Displays only the routes learned from OSPF.` },
      { os: 'Cisco IOS', cmd: 'show ip ospf database', desc: `Displays the link-state database by LSA type.` },
    ],
    checks: [
      {
        prompt: `Two OSPF routers are stuck in the ExStart state. What is the most likely cause?`,
        options: [`An MTU mismatch`, `A wrong DNS server`, `A bad VLAN name`, `A missing default gateway on a PC`],
        correct: 0,
        explanation: `Exchanging database descriptions fails if the two interfaces have different MTUs, leaving the neighbors in ExStart or Exchange.`,
      },
      {
        prompt: `On an Ethernet segment, which router becomes the DR?`,
        options: [`The one with the lowest router ID`, `The one with the highest priority, then highest router ID`, `The first router powered on, regardless of priority`, `The one with the most interfaces`],
        correct: 1,
        explanation: `Highest priority wins, with the highest router ID as the tie-breaker, and the election is not preemptive.`,
      },
      {
        prompt: `With the default 100 Mbps reference bandwidth, what is the OSPF cost of a 10 Gbps interface?`,
        options: [`1`, `10`, `100`, `0`],
        correct: 0,
        explanation: `Cost is 100 divided by 10,000 rounded down, which is below 1, so the minimum cost of 1 applies.`,
      },
    ],
    mini: {
      prompt: `A new router on a LAN has priority 200, but the existing DR (priority 1) keeps the DR role after the new router joins.`,
      task: `Explain why and how you could make the new router the DR.`,
    },
    recap: `OSPF routers become neighbors through Hello packets (matching area, timers, subnet, authentication, MTU), synchronize LSA databases to Full, and run SPF using bandwidth-based cost. DR and BDR reduce adjacencies on shared segments, and stuck states point to specific mismatches.`,
    classroom: `"Hello muna, saka database, saka SPF. Kapag hindi nagkakasundo ang neighbor, tingnan ang area, timers, subnet, authentication, at MTU."`,
  });

  NetReady.LESSONS['16-3'] = NetReady.lesson(16, {
    id: '16-3',
    slug: 'deep-dive-vlan-trunk-stp-configuration',
    title: 'Deep Dive: Configuring VLANs, Trunks, Port Security, and STP on a Switch',
    minutes: 24,
    outcomes: [
      `Configure access ports, trunk ports, and inter-VLAN routing with router sub-interfaces.`,
      `Apply PortFast, BPDU Guard, and port security the right way.`,
      `Read show vlan, show interfaces trunk, and show spanning-tree output.`,
      `Diagnose native VLAN mismatches, missing VLANs, and trunk allow-list problems.`,
    ],
    why: `Configuration questions on the exam show a snippet and ask what is wrong, and real switch work follows the same order every time: create VLANs, assign ports, build trunks, protect the edge, then verify.`,
    simple: `A VLAN is created in the switch's VLAN database, and each access port is assigned to exactly one VLAN. A trunk port carries many VLANs between switches using 802.1Q tags; frames of the native VLAN are sent untagged. The trunk's allowed list controls which VLANs may cross it. Access ports that face PCs should use PortFast so they come up immediately, with BPDU Guard to err-disable the port if a switch is plugged in, and port security to limit the number of MAC addresses. Devices in different VLANs need a Layer 3 device: either a router with a sub-interface per VLAN (router-on-a-stick) or a Layer 3 switch with a VLAN interface (SVI) per VLAN.`,
    taglish: `Ginagawa ang VLAN sa VLAN database ng switch, at bawat access port ay itinatalaga sa isang VLAN lang. Ang trunk ay nagdadala ng maraming VLAN sa pagitan ng switch gamit ang 802.1Q tag; ang native VLAN ay walang tag. Ang allowed list ng trunk ang nagsasabi kung aling VLAN ang pwedeng tumawid. Sa access port ng PC, gumamit ng PortFast para agad mag-up, BPDU Guard para ma-err-disable kung may nagsaksak na switch, at port security para limitahan ang MAC address. Para mag-usap ang magkaibang VLAN, kailangan ng Layer 3: router-on-a-stick (sub-interface bawat VLAN) o Layer 3 switch (SVI bawat VLAN).`,
    analogy: {
      title: 'Mga kulay ng ID sa opisina',
      text: `Isipin na ang bawat VLAN ay kulay ng ID: pula para sa Sales, asul para sa Engineering. Ang access port ay pintuan na iisang kulay lang ang pinapapasok. Ang trunk ay hallway na dinadaanan ng lahat ng kulay, kaya may sticker (tag) ang bawat tao. Ang router ay receptionist na nagdadala ng mensahe mula sa isang kulay papunta sa iba.`,
    },
    steps: [
      `Step 1, create VLANs: define the VLAN ID and a descriptive name. If a port is assigned to a VLAN that does not exist, it stays inactive.`,
      `Step 2, access ports: set the mode to access and assign the VLAN. Add a voice VLAN for an IP phone if needed.`,
      `Step 3, trunks: set the mode to trunk, restrict the allowed VLANs to what is needed, and set the native VLAN to an unused VLAN on both ends (never leave users on the native VLAN).`,
      `Step 4, edge protection: enable PortFast and BPDU Guard on access ports; add port security with a maximum MAC count, sticky learning, and a violation action.`,
      `Step 5, inter-VLAN routing: router sub-interface per VLAN with encapsulation dot1q and the VLAN ID, or an SVI per VLAN with ip routing enabled on a Layer 3 switch.`,
      `Step 6, spanning tree: make the intended switch the root by lowering its priority, then verify the root, the root ports, and blocked ports.`,
      `Step 7, verify and document: use the show commands, then record the VLAN plan, trunk allow-lists, and port assignments.`,
    ],
    deepDive: [
      {
        title: 'Creating VLANs and access ports',
        code: `SW1(config)# vlan 10
SW1(config-vlan)# name SALES
SW1(config)# vlan 20
SW1(config-vlan)# name ENGINEERING
SW1(config)# vlan 99
SW1(config-vlan)# name NATIVE-UNUSED

SW1(config)# interface range GigabitEthernet0/1 - 12
SW1(config-if-range)# switchport mode access
SW1(config-if-range)# switchport access vlan 10
SW1(config-if-range)# spanning-tree portfast
SW1(config-if-range)# spanning-tree bpduguard enable
SW1(config-if-range)# switchport port-security
SW1(config-if-range)# switchport port-security maximum 2
SW1(config-if-range)# switchport port-security mac-address sticky
SW1(config-if-range)# switchport port-security violation restrict`,
        note: `Violation modes: protect drops silently, restrict drops and logs, shutdown (the default) err-disables the port.`,
      },
      {
        title: 'Building the trunk',
        text: `Some older Layer 3 capable switches need the encapsulation command first; newer ones support only 802.1Q and reject it. The native VLAN must match on both ends or Layer 2 traffic leaks between VLANs and CDP warns of a mismatch.`,
        code: `SW1(config)# interface GigabitEthernet0/24
SW1(config-if)# switchport trunk encapsulation dot1q   ! only where required
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk allowed vlan 10,20,99
SW1(config-if)# switchport trunk native vlan 99
SW1(config-if)# switchport nonegotiate`,
        note: `Set the trunk mode explicitly and disable DTP negotiation with nonegotiate so an attacker cannot talk a port into trunking.`,
      },
      {
        title: 'Inter-VLAN routing with router-on-a-stick',
        text: `The router's physical interface has no IP address of its own; each sub-interface becomes the default gateway for one VLAN.`,
        code: `R1(config)# interface GigabitEthernet0/0
R1(config-if)# no shutdown
R1(config)# interface GigabitEthernet0/0.10
R1(config-subif)# encapsulation dot1q 10
R1(config-subif)# ip address 192.168.10.1 255.255.255.0
R1(config)# interface GigabitEthernet0/0.20
R1(config-subif)# encapsulation dot1q 20
R1(config-subif)# ip address 192.168.20.1 255.255.255.0`,
      },
      {
        title: 'Reading show vlan brief and show interfaces trunk',
        code: `SW1# show vlan brief
VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi0/13, Gi0/14, Gi0/15
10   SALES                            active    Gi0/1, Gi0/2, Gi0/3
20   ENGINEERING                      active    Gi0/4, Gi0/5
99   NATIVE-UNUSED                    active

SW1# show interfaces trunk
Port        Mode         Encapsulation  Status        Native vlan
Gi0/24      on           802.1q         trunking      99

Port        Vlans allowed on trunk
Gi0/24      10,20,99

Port        Vlans allowed and active in management domain
Gi0/24      10,20,99`,
        note: `Check the status says trunking, the native VLAN matches on both ends, and every needed VLAN appears in the allowed and active list.`,
      },
      {
        title: 'Making a switch the STP root and reading the output',
        code: `SW1(config)# spanning-tree vlan 10,20 root primary
  (or:  spanning-tree vlan 10 priority 4096)

SW1# show spanning-tree vlan 10
VLAN0010
  Spanning tree enabled protocol rstp
  Root ID    Priority    4106
             Address     0011.2233.4455
             This bridge is the root
  Interface        Role Sts Cost      Prio.Nbr Type
  Gi0/1            Desg FWD 4         128.1    P2p Edge
  Gi0/24           Desg FWD 4         128.24   P2p`,
        note: `Priority is the base value plus the VLAN number (4096 + 10 = 4106). "This bridge is the root" confirms the election result.`,
      },
      {
        title: 'Four classic faults and their fixes',
        code: `Symptom                                   Cause                              Fix
----------------------------------------- ---------------------------------- ------------------------------
Port stays inactive in show vlan brief    VLAN not created                   vlan <id> then verify
Users in VLAN 20 cannot cross the trunk   VLAN not in allowed list           switchport trunk allowed vlan add 20
CDP: NATIVE_VLAN_MISMATCH log message     Native VLANs differ                Make both ends the same
Port went err-disabled after a plug-in   BPDU Guard or port-security hit    Remove device, shutdown/no shutdown`,
      },
    ],
    table: {
      label: 'Table of switch ports and their roles',
      head: ['Port type', 'VLANs carried', 'Typical use', 'Key commands'],
      rows: [
        ['Access', 'One', 'PC, printer, phone', 'switchport mode access, access vlan'],
        ['Trunk', 'Many, tagged 802.1Q', 'Switch to switch, switch to router', 'switchport mode trunk, allowed vlan'],
        ['Native VLAN', 'One, untagged on the trunk', 'Management or unused VLAN', 'switchport trunk native vlan'],
        ['Edge (PortFast)', 'One', 'End devices only', 'spanning-tree portfast, bpduguard'],
      ],
      caption: 'Access carries one VLAN; trunk carries many; edge ports get extra protection.',
    },
    example: `After a new switch is cabled in, the Engineering team cannot reach the server VLAN even though pings work inside each VLAN. show interfaces trunk reveals that the new uplink allows VLANs 10 and 99 only. Adding VLAN 20 to the allowed list with switchport trunk allowed vlan add 20 restores connectivity, and the engineer saves the configuration.`,
    tips: [
      `Use "allowed vlan add" rather than "allowed vlan" when extending a list; the second form replaces the list.`,
      `Never put user devices in the native VLAN; use an unused VLAN as native on every trunk.`,
      `Save the configuration (copy running-config startup-config) or it is lost at reboot.`,
    ],
    exam: `Expect snippets with a wrong or missing command: VLAN not created, trunk missing a VLAN, mismatched native VLAN, PortFast on a trunk, wrong sub-interface encapsulation. Know that BPDU Guard err-disables the port and that DTP should be turned off.`,
    mistakes: [
      `Replacing the allowed VLAN list instead of adding to it.`,
      `Enabling PortFast on switch-to-switch links.`,
      `Forgetting no shutdown on the router's physical interface in router-on-a-stick.`,
    ],
    terms: [
      { term: 'Access port', def: `Switch port belonging to a single VLAN, used for end devices.` },
      { term: 'Trunk port', def: `Port that carries multiple VLANs with 802.1Q tags.` },
      { term: 'Native VLAN', def: `The VLAN whose frames cross an 802.1Q trunk untagged.` },
      { term: 'Sub-interface', def: `Logical interface on a router for one VLAN, used in router-on-a-stick.` },
      { term: 'Sticky MAC', def: `Port security feature that learns and saves MAC addresses automatically.` },
      { term: 'Err-disabled', def: `State a port enters after a protection feature shuts it down.` },
    ],
    commands: [
      { os: 'Cisco IOS', cmd: 'show vlan brief', desc: `Lists VLANs and the access ports in each.` },
      { os: 'Cisco IOS', cmd: 'show interfaces trunk', desc: `Shows trunk status, native VLAN, and allowed VLANs.` },
      { os: 'Cisco IOS', cmd: 'show spanning-tree vlan 10', desc: `Shows the root bridge and port roles for a VLAN.` },
      { os: 'Cisco IOS', cmd: 'show port-security interface gi0/1', desc: `Shows port security status, maximum MACs, and violations.` },
    ],
    checks: [
      {
        prompt: `Users in VLAN 20 cannot communicate across a new trunk, but VLAN 10 works. What should you check first?`,
        options: [`Whether VLAN 20 is in the trunk's allowed list`, `The PC wallpaper`, `The DNS suffix`, `The printer toner`],
        correct: 0,
        explanation: `A VLAN missing from the allowed list is blocked from crossing the trunk.`,
      },
      {
        prompt: `Which command makes a port come up immediately and skip the STP listening and learning delay?`,
        options: [`spanning-tree portfast`, `switchport mode trunk`, `ip helper-address`, `shutdown`],
        correct: 0,
        explanation: `PortFast moves an edge port straight to forwarding.`,
      },
      {
        prompt: `A port with BPDU Guard enabled is err-disabled after someone connects a small switch. What happened?`,
        options: [`The port received a BPDU, which BPDU Guard treats as a violation`, `DHCP ran out of addresses`, `The VLAN was deleted`, `The cable was too long`],
        correct: 0,
        explanation: `Edge ports should never receive BPDUs; BPDU Guard shuts the port when one arrives.`,
      },
    ],
    mini: {
      prompt: `Two switches are connected by a trunk, but the log shows repeated native VLAN mismatch messages.`,
      task: `What is wrong, and what is the security risk if it is left alone?`,
    },
    recap: `Create VLANs, assign access ports, build trunks with an explicit allowed list and an unused native VLAN, protect edge ports with PortFast, BPDU Guard, and port security, route between VLANs with sub-interfaces or SVIs, set the STP root deliberately, and verify with show commands.`,
    classroom: `"VLAN muna, port assignment, trunk, proteksyon, routing, verify. Laging sa ganitong pagkakasunod."`,
  });

  NetReady.LESSONS['16-4'] = NetReady.lesson(16, {
    id: '16-4',
    slug: 'deep-dive-writing-access-control-lists',
    title: 'Deep Dive: Writing, Ordering, and Troubleshooting Access Control Lists',
    minutes: 22,
    outcomes: [
      `Write standard and extended ACLs with correct wildcard masks.`,
      `Explain top-down matching, the implicit deny, and where to place and apply an ACL.`,
      `Read ACL hit counters to find which rule is blocking or allowing traffic.`,
      `Fix common ACL mistakes: wrong order, wrong direction, forgotten return traffic.`,
    ],
    why: `ACLs are the basic traffic filter in routers, Layer 3 switches, firewalls, and cloud network rules. The exam shows a rule list and asks which packet is permitted or why a user is blocked, which is exactly the skill of reading an ACL top to bottom.`,
    simple: `An access control list is an ordered list of permit and deny rules. The device compares each packet against the rules from the top and stops at the first match. If nothing matches, the invisible final rule, the implicit deny, drops the packet. A standard ACL matches only the source address. An extended ACL matches protocol, source, destination, and ports. ACLs use wildcard masks, which are the inverse of subnet masks: a 0 bit means "must match" and a 1 bit means "ignore". An ACL does nothing until it is applied to an interface in a direction, inbound or outbound.`,
    taglish: `Ang ACL ay listahan ng permit at deny na rules na sinusunod mula itaas pababa; humihinto sa unang tugma. Kapag walang tumugma, may nakatagong huling rule — implicit deny — na naghuhulog ng packet. Ang standard ACL ay source address lang ang tinitingnan; ang extended ay protocol, source, destination, at port. Wildcard mask ang gamit, kabaligtaran ng subnet mask: ang 0 ay "dapat tumugma," ang 1 ay "huwag pansinin." Walang epekto ang ACL hanggang hindi inilalapat sa interface sa isang direksyon (in o out).`,
    analogy: {
      title: 'Listahan ng bisita sa gate',
      text: `Ang guard sa gate ay may listahan na binabasa mula itaas. Kapag nakita ang pangalan mo sa unang linya na "papasukin," pasok ka agad at hindi na niya babasahin ang iba. Kung wala ka sa kahit anong linya, hindi ka papasukin — iyon ang implicit deny. Kaya mahalaga ang pagkakasunod-sunod: kung nasa itaas ang "huwag papasukin ang lahat," walang makakapasok kahit nasa ibaba ang pangalan mo.`,
    },
    steps: [
      `Types: standard ACLs (numbers 1 to 99 and 1300 to 1999) filter by source only; extended ACLs (100 to 199 and 2000 to 2699) filter by protocol, source, destination, and port. Named ACLs work for both and are easier to edit.`,
      `Matching: rules are checked in order; the first match decides. More specific rules must be above more general ones.`,
      `Implicit deny: every ACL ends with a hidden deny of all traffic. Add a permit for what you need, and add an explicit deny with log at the end if you want to see what is dropped.`,
      `Wildcard masks: subtract the subnet mask from 255.255.255.255. A /24 has wildcard 0.0.0.255, a /27 has 0.0.0.31, a /26 has 0.0.0.63, and a single host is 0.0.0.0 (the keyword host) while "any" means 0.0.0.0 255.255.255.255.`,
      `Placement: put extended ACLs close to the source so unwanted traffic is dropped early; put standard ACLs close to the destination because they only see the source address and could block too much if placed early.`,
      `Direction: inbound filters packets as they enter the interface, before routing; outbound filters packets as they leave. One ACL per interface per direction per protocol.`,
      `Stateless nature: a basic ACL does not remember connections, so replies must also be permitted. Stateful firewalls track connections and allow replies automatically.`,
    ],
    deepDive: [
      {
        title: 'Wildcard mask arithmetic',
        code: `Subnet mask         Wildcard (255.255.255.255 minus mask)
255.255.255.0       0.0.0.255          (/24)
255.255.255.224     0.0.0.31           (/27)
255.255.255.192     0.0.0.63           (/26)
255.255.252.0       0.0.3.255          (/22)

Match one host:      host 10.1.1.10    (same as 10.1.1.10 0.0.0.0)
Match everything:    any               (same as 0.0.0.0 255.255.255.255)
Match a range:       192.168.10.64 0.0.0.31  ->  192.168.10.64 to 192.168.10.95`,
        note: `Wildcard 0 = must match, 1 = do not care. The wildcard for a subnet is the block size minus 1 in the interesting octet.`,
      },
      {
        title: 'Building an extended ACL for a real requirement',
        text: `Requirement: the Sales LAN 192.168.10.0/24 may browse the web (HTTP and HTTPS) and use DNS to the corporate DNS server 10.1.1.53, may reach the file server 10.1.1.20 on SMB (TCP 445), and nothing else. Place it inbound on the Sales LAN interface, which is the closest to the source.`,
        code: `R1(config)# ip access-list extended SALES-IN
R1(config-ext-nacl)# permit udp 192.168.10.0 0.0.0.255 host 10.1.1.53 eq 53
R1(config-ext-nacl)# permit tcp 192.168.10.0 0.0.0.255 host 10.1.1.53 eq 53
R1(config-ext-nacl)# permit tcp 192.168.10.0 0.0.0.255 host 10.1.1.20 eq 445
R1(config-ext-nacl)# permit tcp 192.168.10.0 0.0.0.255 any eq 80
R1(config-ext-nacl)# permit tcp 192.168.10.0 0.0.0.255 any eq 443
R1(config-ext-nacl)# deny   ip any any log

R1(config)# interface GigabitEthernet0/1
R1(config-if)# ip access-group SALES-IN in`,
        note: `Because it is applied inbound on the LAN interface, replies are not filtered by this list; the implicit deny at the end would otherwise drop them if the list were applied the other way.`,
      },
      {
        title: 'Reading the hit counters',
        text: `Counters show which rule is actually matching. If a user complains that a site is blocked, generate the traffic and see which line's count increases.`,
        code: `R1# show access-lists
Extended IP access list SALES-IN
    10 permit udp 192.168.10.0 0.0.0.255 host 10.1.1.53 eq domain (112 matches)
    20 permit tcp 192.168.10.0 0.0.0.255 host 10.1.1.53 eq domain
    30 permit tcp 192.168.10.0 0.0.0.255 host 10.1.1.20 eq 445 (8 matches)
    40 permit tcp 192.168.10.0 0.0.0.255 any eq www (2040 matches)
    50 permit tcp 192.168.10.0 0.0.0.255 any eq 443 (5633 matches)
    60 deny ip any any log (17 matches)`,
        note: `Sequence numbers (10, 20, ...) let you insert a rule between lines later, for example sequence 35, without rewriting the list.`,
      },
      {
        title: 'Reading an ACL top to bottom: three test packets',
        text: `Given the list above, decide each packet by walking down the rules.`,
        code: `Packet A: TCP from 192.168.10.44 to 10.1.1.20 port 445
  -> Line 10 (UDP) no, 20 (TCP 53) no, 30 (TCP 445 to host 10.1.1.20) YES -> PERMIT

Packet B: TCP from 192.168.10.44 to 203.0.113.9 port 22
  -> Lines 10 to 50 no match -> Line 60 deny -> DENY

Packet C: UDP from 192.168.20.5 to 10.1.1.53 port 53   (a different LAN)
  -> This ACL is applied only on the Sales interface, so it is never checked here`,
      },
      {
        title: 'A standard ACL to protect remote access',
        text: `Only the management subnet 10.9.9.0/24 may log in to the router over SSH. A standard ACL is applied to the VTY lines with access-class (not access-group).`,
        code: `R1(config)# access-list 10 permit 10.9.9.0 0.0.0.255
R1(config)# line vty 0 4
R1(config-line)# access-class 10 in
R1(config-line)# transport input ssh`,
      },
      {
        title: 'Common mistakes and how to find them',
        code: `Mistake                              Symptom                             How to find it
------------------------------------ ----------------------------------- ------------------------------
Broad deny above a specific permit   Permit never matches (0 matches)    show access-lists counters
Applied in the wrong direction       Rule has no effect or blocks all    show ip interface (shows ACL in/out)
Forgot return traffic (stateless)    One-way connectivity                Look for deny hits on replies
Wrong wildcard (used subnet mask)    Rule matches almost nothing         Recheck 0 = match, 1 = ignore
Missing "permit any" at the end      Everything else dropped             Implicit deny hit counts`,
      },
    ],
    table: {
      label: 'Table comparing standard and extended ACLs',
      head: ['', 'Standard', 'Extended'],
      rows: [
        ['Numbers', '1 to 99, 1300 to 1999', '100 to 199, 2000 to 2699'],
        ['Matches', 'Source address only', 'Protocol, source, destination, ports'],
        ['Best placement', 'Near the destination', 'Near the source'],
        ['Typical use', 'Limit who can reach management or a network', 'Precise traffic policy'],
      ],
      caption: 'First match wins; everything unmatched is denied.',
    },
    example: `A contractor reports that she cannot reach the intranet after a firewall cleanup. show access-lists shows a new rule "deny ip 192.168.50.0 0.0.0.255 any" placed above the existing permit for the contractor VLAN, and that rule's counter is climbing with each attempt. Moving the permit to a lower sequence number than the deny, or narrowing the deny, restores her access and the counters then increase on the permit instead.`,
    tips: [
      `When writing ACLs, think in the order: most specific permits first, then broader permits, then deny.`,
      `Use remarks or named ACL descriptions so the next engineer knows why each line exists.`,
      `Test with the counters, and keep a rollback copy of the configuration before changing a production ACL.`,
    ],
    exam: `Be able to trace a packet through an ACL, convert a subnet mask to a wildcard, recall standard (source only) versus extended (protocol, ports) and placement rules, and remember the implicit deny and that ACLs apply per interface and direction.`,
    mistakes: [
      `Using the subnet mask instead of a wildcard mask.`,
      `Placing a general deny above a specific permit.`,
      `Forgetting the implicit deny at the end and blocking return traffic.`,
    ],
    terms: [
      { term: 'ACL', def: `Ordered list of permit and deny rules applied to traffic.` },
      { term: 'Wildcard mask', def: `Inverse mask where 0 means match and 1 means ignore.` },
      { term: 'Implicit deny', def: `Hidden final rule that drops traffic matching no earlier rule.` },
      { term: 'Inbound / outbound', def: `Direction in which an ACL is applied to an interface.` },
      { term: 'access-class', def: `Command that applies an ACL to VTY (remote login) lines.` },
    ],
    commands: [
      { os: 'Cisco IOS', cmd: 'show access-lists', desc: `Displays all ACLs with sequence numbers and match counters.` },
      { os: 'Cisco IOS', cmd: 'show ip interface gi0/1', desc: `Shows which ACL is applied to the interface in each direction.` },
      { os: 'Cisco IOS', cmd: 'clear ip access-list counters', desc: `Resets ACL hit counters before a test.` },
    ],
    checks: [
      {
        prompt: `What is the wildcard mask that matches the subnet 192.168.10.64/27?`,
        options: [`0.0.0.15`, `0.0.0.31`, `0.0.0.63`, `255.255.255.224`],
        correct: 1,
        explanation: `The /27 mask is 255.255.255.224; subtracting from 255.255.255.255 gives 0.0.0.31.`,
      },
      {
        prompt: `A packet matches no rule in an ACL. What happens to it?`,
        options: [`It is permitted`, `It is dropped by the implicit deny`, `It is logged and permitted`, `It is sent to the next ACL`],
        correct: 1,
        explanation: `Every ACL ends with an invisible deny of all traffic.`,
      },
      {
        prompt: `Where should an extended ACL generally be placed?`,
        options: [`Close to the destination`, `Close to the source`, `On the DNS server`, `On every interface`],
        correct: 1,
        explanation: `Placing extended ACLs near the source drops unwanted traffic before it crosses the network.`,
      },
    ],
    mini: {
      prompt: `An ACL has line 10: deny ip 10.1.0.0 0.0.255.255 any, and line 20: permit tcp host 10.1.5.5 any eq 443.`,
      task: `Will traffic from 10.1.5.5 to a website on TCP 443 be permitted, and what do you change?`,
    },
    recap: `ACLs match from the top and stop at the first hit; unmatched traffic is dropped. Use wildcard masks, put specific rules first, apply the list to the right interface and direction, read counters to troubleshoot, and remember that basic ACLs are stateless.`,
    classroom: `"Una ang pinaka-specific, huli ang pinaka-general, at laging may nakatagong deny sa dulo."`,
  });

  NetReady.LESSONS['16-5'] = NetReady.lesson(16, {
    id: '16-5',
    slug: 'deep-dive-dns-resolution-and-troubleshooting',
    title: 'Deep Dive: DNS Resolution, Zone Files, Caching, and Troubleshooting with dig and nslookup',
    minutes: 23,
    outcomes: [
      `Trace a full DNS lookup from the stub resolver to the authoritative server.`,
      `Read a zone file and explain each record, TTL, and the SOA values.`,
      `Interpret dig and nslookup output and DNS response codes.`,
      `Explain DNS caching, split-horizon DNS, zone transfers, DNSSEC, DoH, and DoT.`,
    ],
    why: `When "the internet is down" it is DNS about half the time. Knowing what each step and record does lets you diagnose from symptoms, and the exam lists record types, zones, and DNS problems explicitly.`,
    simple: `When an application needs www.example.com, the device's stub resolver asks a recursive resolver (usually from DHCP, such as your router or ISP). The recursive resolver checks its cache; if it has no answer it asks a root server, which points to the .com servers, which point to example.com's authoritative servers, which return the answer. The recursive resolver caches the result for the record's TTL and gives the answer to the client. DNS uses UDP port 53 for most queries and TCP port 53 for large responses and zone transfers.`,
    taglish: `Kapag kailangan ng app ang www.example.com, tinatanong ng stub resolver ng device ang recursive resolver (karaniwan galing sa DHCP, gaya ng router o ISP). Titingnan nito ang cache; kung wala, tatanungin ang root server, na ituturo ang .com servers, na ituturo ang authoritative server ng example.com, na magbibigay ng sagot. Ica-cache ito ng recursive resolver ayon sa TTL at ibibigay sa client. UDP port 53 ang karaniwan; TCP port 53 para sa malalaking sagot at zone transfer.`,
    analogy: {
      title: 'Pagtatanong ng address sa barangay',
      text: `Tinatanong mo ang kapitbahay (resolver) kung saan nakatira si "www." Kung hindi niya alam, tatanungin niya ang munisipyo (root), na ituturo ang tanggapan ng probinsya (.com), na ituturo ang barangay hall ng example (authoritative) na may eksaktong address. Isusulat niya ito sa notebook para hindi na magtanong ulit hanggang mag-expire ang tala (TTL).`,
    },
    steps: [
      `Stub resolver: the small client on your device; it asks the configured DNS server and caches answers briefly. Check your DNS server with ipconfig /all or resolvectl status.`,
      `Recursive resolver: does the legwork, caches, and returns the final answer. Public examples are 1.1.1.1 and 8.8.8.8; most home networks use the router or ISP resolver.`,
      `Iterative queries: the recursive resolver walks root, then TLD, then authoritative servers; each reply refers it to the next server (an NS referral).`,
      `Authoritative server: holds the zone data and answers with the AA (authoritative answer) flag. A zone can have a primary and secondary servers kept in sync by zone transfer.`,
      `TTL: how long a resolver may cache an answer. Low TTLs (60 to 300 seconds) speed up changes; high TTLs (hours) reduce load. After a change, old answers may persist until the TTL expires.`,
      `Negative caching: failed lookups (NXDOMAIN) are cached for the SOA negative-cache value.`,
      `Response codes: NOERROR (success, possibly with no data), NXDOMAIN (name does not exist), SERVFAIL (server could not complete the lookup), REFUSED (policy denied the query).`,
      `Security: DNSSEC signs records (RRSIG, DNSKEY, DS) to prove they were not altered; DNS over HTTPS (TCP 443) and DNS over TLS (TCP 853) encrypt queries; split-horizon DNS returns different answers to internal and external clients.`,
    ],
    deepDive: [
      {
        title: 'A zone file, line by line',
        text: `This is an illustrative zone for example.com using documentation addresses. The SOA record names the primary server and administrator, the serial number (increase it on every change so secondaries notice), and timers for secondary servers and negative caching.`,
        code: `$TTL 3600
@     IN  SOA  ns1.example.com. admin.example.com. (
              2026102301 ; serial (date + counter)
              7200       ; refresh: secondary checks every 2 hours
              900        ; retry: after a failed refresh
              1209600    ; expire: secondary stops answering after 14 days
              300 )      ; negative-cache TTL
      IN  NS   ns1.example.com.
      IN  MX   10 mail.example.com.
      IN  TXT  "v=spf1 mx -all"
ns1   IN  A    192.0.2.2
www   IN  A    192.0.2.10
www   IN  AAAA 2001:db8::10
ftp   IN  CNAME www.example.com.
mail  IN  A    192.0.2.25
_sip._tcp IN SRV 10 60 5060 sip.example.com.
10.2.0.192.in-addr.arpa. IN PTR www.example.com.   ; reverse zone entry`,
        note: `A = IPv4, AAAA = IPv6, CNAME = alias, MX = mail (lower number is preferred), NS = name server, TXT = free text (SPF, verification), SRV = service location with priority, weight, port, and target, PTR = reverse lookup, SOA = zone authority and timers.`,
      },
      {
        title: 'Reading dig output',
        code: `$ dig www.example.com A

;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 41873
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; QUESTION SECTION:
;www.example.com.        IN  A

;; ANSWER SECTION:
www.example.com.   300  IN  A   192.0.2.10

;; Query time: 24 msec
;; SERVER: 192.168.1.1#53(192.168.1.1)`,
        note: `status: NOERROR means success. The number 300 is the remaining TTL, flags ra means the server offers recursion (no aa flag, so this came from a cache), and SERVER shows which resolver actually answered.`,
      },
      {
        title: 'Useful dig and nslookup commands',
        code: `dig +short www.example.com            # only the answer
dig www.example.com @8.8.8.8          # ask a specific resolver
dig example.com MX                    # mail servers
dig example.com NS                    # authoritative name servers
dig -x 192.0.2.10                     # reverse (PTR) lookup
dig +trace www.example.com            # follow root -> TLD -> authoritative
dig @ns1.example.com example.com AXFR # zone transfer (should be refused to outsiders)

nslookup www.example.com 8.8.8.8      # Windows: query a specific server
nslookup -type=MX example.com
ipconfig /flushdns                    # clear the Windows resolver cache
ipconfig /displaydns                  # show cached entries`,
      },
      {
        title: 'Diagnosing by comparing resolvers',
        text: `Query the internal resolver and a public one, and compare. The pattern tells you where the fault lies.`,
        code: `Internal resolver   Public resolver   Meaning
-----------------  ----------------  -----------------------------------------------
works              works             DNS is fine; look elsewhere (client cache, hosts file)
fails (SERVFAIL)   works             Internal resolver or its forwarders are broken
fails              fails             Authoritative server or zone problem
old IP             new IP            Cached record; wait for TTL or flush the cache
NXDOMAIN           NXDOMAIN          Name does not exist or typo
internal only      NXDOMAIN          Split-horizon zone (works as designed)`,
        note: `Always test with an IP address first (ping 8.8.8.8). If the IP works and the name fails, it is DNS.`,
      },
      {
        title: 'Other places a name can come from',
        text: `Before asking a DNS server, a client checks its local cache and the hosts file (C:\\Windows\\System32\\drivers\\etc\\hosts on Windows, /etc/hosts on Linux). A stale entry there overrides DNS. The DNS search suffix (for example corp.example.com) is appended to short names such as "fileserver", so a wrong suffix makes short names fail while fully qualified names work.`,
      },
    ],
    table: {
      label: 'Table of DNS record types',
      head: ['Record', 'Purpose', 'Example'],
      rows: [
        ['A / AAAA', 'Name to IPv4 / IPv6 address', 'www IN A 192.0.2.10'],
        ['CNAME', 'Alias to another name', 'ftp IN CNAME www'],
        ['MX', 'Mail server with priority', 'IN MX 10 mail'],
        ['NS', 'Authoritative name server', 'IN NS ns1'],
        ['PTR', 'Address to name (reverse)', '10.2.0.192.in-addr.arpa'],
        ['SOA', 'Zone authority and timers', 'serial, refresh, retry, expire'],
        ['SRV', 'Service host and port', '_sip._tcp 10 60 5060 sip'],
        ['TXT', 'Text data (SPF, verification)', '"v=spf1 mx -all"'],
      ],
      caption: 'Know what each record stores.',
    },
    example: `A company moves its website to a new server and changes the A record, but some users still reach the old site for an hour. The record's TTL was 3600 seconds, so resolvers cached the old address for up to an hour. Next time the admin lowers the TTL to 300 seconds a day before the change and raises it again afterwards.`,
    tips: [
      `Test by IP first, then by name; the difference isolates DNS.`,
      `Lower the TTL before a planned change, not after.`,
      `A CNAME cannot sit at the zone apex alongside other records (the apex needs SOA and NS).`,
    ],
    exam: `Know the record types and what each stores, the lookup order (cache, recursive, root, TLD, authoritative), UDP and TCP 53, DoH (443) and DoT (853), DNSSEC purpose, the meaning of TTL, and that NXDOMAIN means the name does not exist.`,
    mistakes: [
      `Forgetting to raise the SOA serial after editing a zone.`,
      `Testing only from one resolver and concluding DNS is fine everywhere.`,
      `Assuming a flushed local cache clears the resolver's cache too.`,
    ],
    terms: [
      { term: 'Recursive resolver', def: `Server that finds the answer on behalf of a client and caches it.` },
      { term: 'Authoritative server', def: `Server that holds the official records for a zone.` },
      { term: 'TTL', def: `Time to live; how long an answer may be cached.` },
      { term: 'NXDOMAIN', def: `Response meaning the queried name does not exist.` },
      { term: 'Zone transfer (AXFR)', def: `Copying a whole zone from a primary to a secondary server over TCP 53.` },
      { term: 'DNSSEC', def: `Signing of DNS data to verify authenticity and integrity.` },
    ],
    commands: [
      { os: 'Linux', cmd: 'dig +trace www.example.com', desc: `Follows the delegation chain from the root servers down to the answer.` },
      { os: 'Linux', cmd: 'dig -x 192.0.2.10', desc: `Performs a reverse lookup to find the PTR name for an address.` },
      { os: 'Windows', cmd: 'nslookup -type=MX example.com', desc: `Looks up the mail exchange records of a domain.` },
      { os: 'Windows', cmd: 'ipconfig /flushdns', desc: `Clears the local DNS resolver cache.` },
    ],
    checks: [
      {
        prompt: `A dig query returns status SERVFAIL from your internal resolver but works against 8.8.8.8. What is the likely cause?`,
        options: [`The internal resolver or its upstream forwarders are failing`, `The domain does not exist`, `The website's certificate expired`, `The user's cable is bad`],
        correct: 0,
        explanation: `A public resolver succeeding while the internal one fails points to the internal resolver or its forwarders.`,
      },
      {
        prompt: `Which record type maps an IP address back to a hostname?`,
        options: [`A`, `MX`, `PTR`, `SRV`],
        correct: 2,
        explanation: `PTR records provide reverse lookups from an address to a name.`,
      },
      {
        prompt: `You change a website's IP address, but some users still reach the old IP for 30 minutes. What explains this?`,
        options: [`DNS caching until the old TTL expires`, `A broken switch`, `Duplex mismatch`, `DHCP exhaustion`],
        correct: 0,
        explanation: `Resolvers keep the old answer until its TTL runs out.`,
      },
    ],
    mini: {
      prompt: `Short hostnames like "fileserver" fail, but "fileserver.corp.example.com" works on one laptop.`,
      task: `What setting would you check?`,
    },
    recap: `DNS resolves names through a stub resolver, a caching recursive resolver, and the root, TLD, and authoritative servers. TTLs control caching, record types store different data, and dig and nslookup comparisons between resolvers show where a failure lies.`,
    classroom: `"Kung gumagana ang IP pero ayaw ang pangalan, DNS. Ihambing mo ang dalawang resolver para malaman kung saan."`,
  });

  NetReady.LESSONS['16-6'] = NetReady.lesson(16, {
    id: '16-6',
    slug: 'deep-dive-dhcp-lease-lifecycle-and-relay',
    title: 'Deep Dive: The DHCP Lease Lifecycle, Options, Relay Agents, and Server Configuration',
    minutes: 22,
    outcomes: [
      `Follow DORA at the packet level, including ports and addresses.`,
      `Explain lease renewal timers, NAK, decline, and release.`,
      `Configure a DHCP pool with exclusions and options, and explain relay (IP helper).`,
      `Troubleshoot clients that get no address, a wrong address, or a duplicate.`,
    ],
    why: `DHCP failures make the whole network appear dead. The exam asks about the DORA steps, scope settings, options, and relay, and real technicians read DHCP bindings daily.`,
    simple: `A new client has no address, so it broadcasts. The four-step exchange is Discover (client asks for a server), Offer (server proposes an address), Request (client accepts one offer), and Acknowledge (server confirms the lease). Clients use UDP port 68 and servers UDP port 67. The lease has a duration; at 50 percent of it the client tries to renew with the same server, and at 87.5 percent it broadcasts to any server. Servers also hand out options such as the default gateway, DNS servers, and domain name. Because routers do not forward broadcasts, a relay agent (IP helper) on each router interface forwards DHCP requests as unicast to a central server.`,
    taglish: `Ang bagong client ay walang address kaya nagbo-broadcast. Apat na hakbang: Discover (maghanap ng server), Offer (mag-alok ang server), Request (tatanggapin ng client ang isang alok), Acknowledge (kumpirmasyon ng lease). UDP port 68 ang client at 67 ang server. May tagal ang lease; sa 50 porsiyento, susubukan ng client na mag-renew sa parehong server; sa 87.5 porsiyento, magbo-broadcast sa kahit sinong server. Nagbibigay din ang server ng options gaya ng gateway at DNS. Dahil hindi nagpapasa ng broadcast ang router, may relay agent (IP helper) sa interface na nagpapasa ng request bilang unicast sa central server.`,
    analogy: {
      title: 'Pagkuha ng numero ng upuan sa sinehan',
      text: `Pumasok ka sa sinehan na walang tiket at sumigaw ng "May bakante ba?" (Discover). Sumagot ang usher "Upuan 14!" (Offer). Sabi mo "Kukunin ko ang 14" (Request). Ibibigay niya ang tiket (Acknowledge) na may oras ng palabas (lease). Kapag malapit nang matapos, magtatanong ka ulit kung puwede pang manatili (renew).`,
    },
    steps: [
      `DHCPDISCOVER: client sends from 0.0.0.0 port 68 to 255.255.255.255 port 67 (broadcast), including its MAC address and a transaction ID.`,
      `DHCPOFFER: a server replies with an offered address, mask, lease time, and options, reserving that address for a short time. Several servers may offer.`,
      `DHCPREQUEST: the client broadcasts its choice, naming the selected server (server identifier, option 54) and the address it wants (option 50), so the other servers release their offers.`,
      `DHCPACK: the chosen server confirms and the client configures the address. The client may check with ARP that the address is not already in use; if it is, it sends DHCPDECLINE.`,
      `Lease timers: T1 is 50 percent of the lease; the client sends a unicast DHCPREQUEST to its server to renew. T2 is 87.5 percent; if unanswered, the client broadcasts to any server. If the lease expires, the client must stop using the address and start again.`,
      `Other messages: DHCPNAK (server refuses, such as when the client moved to a different subnet), DHCPRELEASE (client gives the address back), DHCPINFORM (client already has an address but wants options).`,
      `Common options: 1 subnet mask, 3 router (default gateway), 6 DNS servers, 15 domain name, 42 NTP servers, 51 lease time, 66 TFTP server name and 67 boot file name (PXE and phone provisioning), 150 Cisco TFTP server.`,
      `Relay agent: the router interface receives the broadcast, inserts its own interface address in the giaddr field (so the server knows which scope to use), and forwards it as unicast to the configured DHCP server. On Cisco devices this is ip helper-address.`,
      `Reservations: bind a specific address to a client's MAC address so a printer or server always gets the same one while still using DHCP. Exclusions keep a range out of the pool for static devices.`,
    ],
    deepDive: [
      {
        title: 'A DHCP pool on a Cisco router',
        text: `The router serves VLAN 10 (192.168.10.0/24). Addresses .1 to .20 are excluded for the gateway, servers, and printers. The pool hands out the rest with a one-day lease and the standard options.`,
        code: `R1(config)# ip dhcp excluded-address 192.168.10.1 192.168.10.20
R1(config)# ip dhcp pool SALES
R1(dhcp-config)# network 192.168.10.0 255.255.255.0
R1(dhcp-config)# default-router 192.168.10.1
R1(dhcp-config)# dns-server 10.1.1.53 8.8.8.8
R1(dhcp-config)# domain-name corp.example.com
R1(dhcp-config)# lease 1

R1(config)# ip dhcp pool PRINTER-1
R1(dhcp-config)# host 192.168.10.15 255.255.255.0
R1(dhcp-config)# client-identifier 0100.aabb.ccdd.ee   ! reservation by MAC`,
        note: `Pool size here is 254 minus the 20 excluded addresses, so 234 addresses; check that against the number of devices.`,
      },
      {
        title: 'Relay: serving a remote subnet from one central server',
        text: `The DHCP server lives at 10.1.1.5. Users on VLAN 20 are on a different subnet, so their broadcasts stop at the router. The helper address forwards them. The server must have a scope for 192.168.20.0/24, and it picks that scope using the router interface address in giaddr.`,
        code: `R1(config)# interface GigabitEthernet0/2
R1(config-if)# ip address 192.168.20.1 255.255.255.0
R1(config-if)# ip helper-address 10.1.1.5`,
        note: `Without a helper address, clients on that VLAN fall back to 169.254.x.x, even though the server is healthy.`,
      },
      {
        title: 'Reading the bindings and a Windows client',
        code: `R1# show ip dhcp binding
IP address       Client-ID/              Lease expiration        Type
                 Hardware address
192.168.10.21    0100.1122.3344.55       Oct 24 2026 08:15 AM    Automatic
192.168.10.22    0100.aabb.ccdd.ee       Infinite                Manual

C:\\> ipconfig /all
   DHCP Enabled. . . . . . . . . . . : Yes
   IPv4 Address. . . . . . . . . . . : 192.168.10.21
   Lease Obtained. . . . . . . . . . : Friday, October 23, 2026 8:15:00 AM
   Lease Expires . . . . . . . . . . : Saturday, October 24, 2026 8:15:00 AM
   Default Gateway . . . . . . . . . : 192.168.10.1
   DHCP Server . . . . . . . . . . . : 192.168.10.1
   DNS Servers . . . . . . . . . . . : 10.1.1.53`,
        note: `The DHCP Server line on a client tells you which server gave the address, which is the fastest way to spot a rogue DHCP server.`,
      },
      {
        title: 'Troubleshooting matrix',
        code: `Client symptom                          Likely cause                       Check / fix
--------------------------------------- ---------------------------------- ------------------------------
169.254.x.x on one VLAN only            No relay, or no scope for subnet   ip helper-address, server scope
169.254.x.x everywhere                  DHCP server down or pool empty     Server service, pool utilization
Right IP, wrong gateway or DNS          Wrong options or rogue server      DHCP Server line, snooping
"IP address conflict" message           Static IP inside the pool          Add an exclusion, find the device
Address changes every day               Short lease, no reservation        Reserve by MAC
Phones cannot find the provisioning     Option 66 or 150 missing           Add the option to the scope`,
        note: `On Windows use ipconfig /release then ipconfig /renew to repeat DORA after a fix.`,
      },
    ],
    table: {
      label: 'Table of the four DHCP messages and their addresses',
      head: ['Step', 'Message', 'Source', 'Destination'],
      rows: [
        ['1', 'Discover', '0.0.0.0:68', '255.255.255.255:67'],
        ['2', 'Offer', 'Server:67', 'Client (broadcast or unicast):68'],
        ['3', 'Request', '0.0.0.0:68', '255.255.255.255:67'],
        ['4', 'Acknowledge', 'Server:67', 'Client:68'],
      ],
      caption: 'DORA: Discover, Offer, Request, Acknowledge.',
    },
    example: `A new branch VLAN has clients showing 169.254 addresses. The central DHCP server is fine and other branches work. The branch router interface for the new VLAN has no ip helper-address, so the discover broadcasts never reach the server. Adding the helper address and a matching scope on the server fixes it in minutes.`,
    tips: [
      `Remember: Discover and Request are broadcasts from the client; Offer and Acknowledge come from the server.`,
      `169.254.x.x means no DHCP answer; a wrong but valid address means a wrong or rogue server.`,
      `Exclude every static address from the scope or reserve it in DHCP; never leave statics inside the pool.`,
    ],
    exam: `Know DORA, ports 67 and 68, the T1 50 percent and T2 87.5 percent renewal timers, common options (router, DNS, domain, NTP, TFTP), what a relay agent and giaddr do, and what a reservation and exclusion are.`,
    mistakes: [
      `Forgetting to create a scope on the server for a relayed subnet.`,
      `Leaving a static address inside the DHCP range.`,
      `Assuming a lease expires only when it runs out; clients renew at half the time.`,
    ],
    terms: [
      { term: 'DORA', def: `Discover, Offer, Request, Acknowledge: the DHCP exchange.` },
      { term: 'Lease', def: `The time a client may use an assigned address.` },
      { term: 'Relay agent / IP helper', def: `Router feature that forwards DHCP broadcasts to a server as unicast.` },
      { term: 'giaddr', def: `Gateway address field that tells the server which subnet the request came from.` },
      { term: 'Reservation', def: `A fixed address tied to a client's MAC address.` },
      { term: 'Exclusion', def: `Addresses within a scope that the server will not hand out.` },
    ],
    commands: [
      { os: 'Cisco IOS', cmd: 'show ip dhcp binding', desc: `Lists addresses handed out and their lease expiration.` },
      { os: 'Cisco IOS', cmd: 'show ip dhcp pool', desc: `Shows pool utilization and the number of leased addresses.` },
      { os: 'Windows', cmd: 'ipconfig /release && ipconfig /renew', desc: `Gives up the current lease and requests a new one.` },
      { os: 'Linux', cmd: 'sudo dhclient -v eth0', desc: `Requests a lease on eth0 and shows the DORA exchange.` },
    ],
    checks: [
      {
        prompt: `A client has used 40 percent of its lease. What happens next in the normal lifecycle?`,
        options: [`Nothing yet; renewal begins at 50 percent`, `The client releases the address`, `The client broadcasts a Discover`, `The server sends a NAK`],
        correct: 0,
        explanation: `The client tries to renew with the same server at T1, 50 percent of the lease.`,
      },
      {
        prompt: `Clients on a remote VLAN cannot get addresses, but the server works for the local VLAN. What is probably missing?`,
        options: [`An ip helper-address on the remote VLAN's router interface`, `A larger MTU`, `A longer cable`, `A new SSID`],
        correct: 0,
        explanation: `Without a relay agent, the clients' broadcasts never reach the central DHCP server.`,
      },
      {
        prompt: `Which UDP ports does DHCP use?`,
        options: [`67 (server) and 68 (client)`, `53 and 123`, `161 and 162`, `20 and 21`],
        correct: 0,
        explanation: `DHCP servers listen on UDP 67 and clients use UDP 68.`,
      },
    ],
    mini: {
      prompt: `A printer keeps getting a different IP address each week and users lose the printer.`,
      task: `What would you configure so the printer always has the same address?`,
    },
    recap: `DHCP works in four steps (DORA) over UDP 67 and 68, leases renew at 50 and 87.5 percent, options deliver gateway, DNS, and more, and relay agents let one server serve many subnets. Reservations and exclusions protect static devices.`,
    classroom: `"DORA ang proseso. Kapag walang sumagot, tingnan ang relay. Kapag mali ang sagot, hanapin ang rogue server."`,
  });

  NetReady.LESSONS['16-7'] = NetReady.lesson(16, {
    id: '16-7',
    slug: 'deep-dive-tls-handshake-and-https-troubleshooting',
    title: 'Deep Dive: The TLS Handshake, Certificate Validation, and HTTPS Troubleshooting',
    minutes: 22,
    outcomes: [
      `Describe the TLS 1.2 and TLS 1.3 handshakes and what is negotiated.`,
      `Explain how a client validates a server certificate, step by step.`,
      `Read a cipher suite name and explain forward secrecy.`,
      `Troubleshoot HTTPS failures with openssl and curl.`,
    ],
    why: `Almost every service you will manage uses TLS: websites, email, VPN portals, APIs. When HTTPS breaks, error messages are cryptic unless you know the handshake. This lesson connects PKI, ports, and troubleshooting in one flow.`,
    simple: `TLS gives a connection three things: encryption (privacy), integrity (no tampering), and authentication (you are talking to the real server). The client starts with a ClientHello listing the TLS versions and cipher suites it supports and the server name it wants (SNI). The server answers with its choice and its certificate. The client validates that certificate against its trusted roots, then both sides use an ephemeral Diffie-Hellman exchange to agree on fresh session keys that are never sent over the network. Everything after the handshake is encrypted with fast symmetric encryption such as AES. TLS 1.3 completes this in one round trip and removed old, weak options.`,
    taglish: `Tatlong bagay ang ibinibigay ng TLS: encryption (pribado), integrity (hindi nababago), at authentication (sigurado kang tunay ang server). Nagsisimula ang client sa ClientHello: nakalista ang TLS versions at cipher suites na kaya niya, at ang pangalan ng server na gusto niya (SNI). Sasagot ang server ng napili at ng certificate niya. Vini-validate ng client ang certificate laban sa mga pinagkakatiwalaang root, tapos nagkakasundo ang dalawa sa bagong session keys gamit ang ephemeral Diffie-Hellman — hindi kailanman ipinapadala ang key. Pagkatapos, symmetric encryption na gaya ng AES. Ang TLS 1.3 ay isang round trip lang at inalis ang mga lumang mahinang opsyon.`,
    analogy: {
      title: 'Pakikipag-usap sa bangko sa pamamagitan ng sealed na kahon',
      text: `Bago mag-usap, ipinapakita ng bangko ang ID na pinirmahan ng gobyerno (certificate). Sinusuri mo kung totoo at hindi pa expired. Pagkatapos, gumagawa kayo ng sikretong salita na kayo lang ang nakakaalam, hindi sinasabi nang malakas (key exchange). Mula roon, sa sealed na kahon na kayo magpapasa ng mensahe.`,
    },
    steps: [
      `TCP connects first (port 443 for HTTPS), then the TLS handshake begins. Port 443 is for web; other TLS-wrapped services use 465 or 587 (mail submission), 636 (LDAPS), 993 (IMAPS), 995 (POP3S).`,
      `ClientHello: supported TLS versions, cipher suites, a random value, extensions including SNI (the hostname, which lets one IP address serve many sites with different certificates), and in TLS 1.3 the client's key share.`,
      `ServerHello: the chosen version and cipher suite, the server's random value and, in TLS 1.3, its key share. The server then sends its certificate chain and proof that it holds the private key.`,
      `Certificate validation by the client: (1) the chain leads to a root in the trust store, (2) every certificate is within its validity dates, (3) the hostname matches the subject alternative names, (4) the certificate is not revoked (checked by OCSP or a stapled OCSP response), (5) key usage fits (server authentication).`,
      `Key agreement: with ECDHE (elliptic-curve ephemeral Diffie-Hellman), both sides compute the same shared secret without sending it. Because each connection uses new ephemeral keys, stealing the server's long-term key later does not decrypt recorded traffic: this is forward secrecy.`,
      `Round trips: TLS 1.2 normally needs two round trips before application data; TLS 1.3 needs one, and supports resuming earlier sessions with even less.`,
      `TLS 1.3 removed insecure features: RSA key transport (no forward secrecy), CBC and RC4 ciphers, SHA-1, compression, and renegotiation. Only authenticated encryption (AES-GCM, ChaCha20-Poly1305) remains.`,
      `Protections: HSTS (an HTTP header that tells browsers to use HTTPS only), OCSP stapling, and certificate transparency logs. Use TLS 1.2 or 1.3 only; SSL 3.0 and TLS 1.0 and 1.1 are deprecated.`,
    ],
    deepDive: [
      {
        title: 'Reading a cipher suite name',
        text: `Cipher suite names are sentences. For TLS 1.2 the name spells out each role. In TLS 1.3 the key exchange and authentication are negotiated separately, so the suite name only lists the bulk cipher and hash.`,
        code: `TLS 1.2:  TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
              |     |         |     |     |
              |     |         |     |     +-- hash used for the handshake / PRF
              |     |         |     +-------- mode: GCM (authenticated encryption)
              |     |         +-------------- bulk cipher: AES with 256-bit key
              |     +------------------------ server authentication: RSA certificate
              +------------------------------ key exchange: ephemeral ECDH (forward secrecy)

TLS 1.3:  TLS_AES_256_GCM_SHA384   (key exchange is always ephemeral)`,
        note: `Look for ECDHE or DHE in a TLS 1.2 suite name to confirm forward secrecy; suites starting with plain RSA key exchange lack it.`,
      },
      {
        title: 'The handshake as a sequence',
        code: `TLS 1.2 (2 round trips)                     TLS 1.3 (1 round trip)
Client                        Server          Client                         Server
  |-- ClientHello (SNI) ------->|               |-- ClientHello + key share ---->|
  |<-- ServerHello, Certificate,|               |<-- ServerHello + key share,    |
  |    ServerKeyExchange, Done -|               |    Certificate, Finished  -----|
  |-- ClientKeyExchange,        |               |-- Finished, then app data ---->|
  |   ChangeCipherSpec, Finished|
  |<-- ChangeCipherSpec, Finished|
  |==== encrypted application data ====|`,
        note: `In 1.3 the certificate itself is already encrypted, so an observer sees much less than in 1.2.`,
      },
      {
        title: 'Inspecting a server with openssl (illustrative output)',
        text: `openssl s_client opens a TLS connection and prints the chain, the negotiated protocol, and the verification result. Use -servername so SNI is sent; without it, a server hosting many sites may return a default certificate.`,
        code: `$ openssl s_client -connect www.example.com:443 -servername www.example.com
CONNECTED(00000003)
depth=2 CN = Example Root CA
verify return:1
depth=1 CN = Example Issuing CA 1
verify return:1
depth=0 CN = www.example.com
verify return:1
---
New, TLSv1.3, Cipher is TLS_AES_256_GCM_SHA384
Verification: OK

$ openssl s_client -connect www.example.com:443 -servername www.example.com 2>/dev/null | openssl x509 -noout -subject -issuer -dates
subject=CN = www.example.com
issuer=CN = Example Issuing CA 1
notBefore=Sep  1 00:00:00 2026 GMT
notAfter=Nov 30 23:59:59 2026 GMT`,
        note: `depth 0 is the server certificate, higher depths are the intermediates and the root. "Verification: OK" means the chain validated against local trust.`,
      },
      {
        title: 'Using curl to see the same story',
        code: `curl -vI https://www.example.com
*  TLSv1.3 (OUT), TLS handshake, Client hello (1):
*  TLSv1.3 (IN),  TLS handshake, Server hello (2):
*  SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384
*  Server certificate:
*   subject: CN=www.example.com
*   expire date: Nov 30 23:59:59 2026 GMT
*  SSL certificate verify ok.
> HEAD / HTTP/2
< HTTP/2 200
< strict-transport-security: max-age=31536000`,
        note: `curl -k skips validation; use it only to test whether a certificate is the problem, never as a fix.`,
      },
      {
        title: 'Troubleshooting table',
        code: `Symptom                                  Likely cause                      How to confirm / fix
---------------------------------------- --------------------------------- --------------------------------
Browser: certificate expired             Validity date passed or bad clock Check notAfter and device date
Browser: name does not match             Hostname not in SAN list          Reissue with the right names
Browser: unknown issuer                  Missing intermediate or private CA Serve the full chain; deploy root
Handshake failure / protocol error       No common version or cipher       openssl s_client -tls1_2 / -tls1_3
Connection times out on 443              Firewall or ACL blocking          Test port with nc or Test-NetConnection
Wrong site's certificate appears         SNI not sent or not supported     Use -servername; update client
Works on desktop, fails on old devices   Server requires TLS 1.2+          Upgrade clients or provide a legacy path
Corporate network shows odd issuer       TLS inspection by a proxy         Install the corporate root on devices`,
      },
    ],
    table: {
      label: 'Table comparing TLS 1.2 and TLS 1.3',
      head: ['', 'TLS 1.2', 'TLS 1.3'],
      rows: [
        ['Round trips to start', '2', '1 (0 with resumption)'],
        ['Forward secrecy', 'Only with ECDHE or DHE suites', 'Always'],
        ['Legacy ciphers (CBC, RC4)', 'Possible', 'Removed'],
        ['Certificate visible to observers', 'Yes', 'Encrypted'],
        ['Status', 'Acceptable', 'Preferred'],
      ],
      caption: 'Prefer TLS 1.3; allow 1.2 for compatibility; disable older versions.',
    },
    example: `After a firewall migration, mobile apps for a company's customer portal fail with a handshake error, while desktop browsers work. openssl s_client -tls1_2 works but -tls1_3 fails, and the server logs show the new load balancer only offers TLS 1.3 and weak, older apps only speak TLS 1.2. The team enables TLS 1.2 with ECDHE-AES-GCM suites on the load balancer, keeping security high while restoring compatibility.`,
    tips: [
      `Always include -servername when testing with openssl, or SNI-based servers may show the wrong certificate.`,
      `An incomplete chain works in some browsers (which fetch intermediates) and fails in apps; serve the full chain.`,
      `Never fix a certificate warning by disabling validation; fix the certificate or trust store.`,
    ],
    exam: `Know that TLS gives confidentiality, integrity, and authentication, that port 443 carries HTTPS, that SSL and early TLS are deprecated, what SNI and forward secrecy are, the reasons for certificate warnings, and that asymmetric cryptography establishes keys while symmetric encrypts the data.`,
    mistakes: [
      `Calling HTTPS "SSL" and allowing old protocol versions.`,
      `Serving only the leaf certificate without intermediates.`,
      `Ignoring that a wrong device clock invalidates certificates.`,
    ],
    terms: [
      { term: 'SNI', def: `Server Name Indication; the hostname the client asks for, sent during the handshake.` },
      { term: 'Cipher suite', def: `The set of algorithms used for key exchange, authentication, encryption, and hashing.` },
      { term: 'Forward secrecy', def: `Property that past sessions stay secret even if long-term keys are stolen later.` },
      { term: 'ECDHE', def: `Ephemeral elliptic-curve Diffie-Hellman key exchange.` },
      { term: 'HSTS', def: `HTTP header telling browsers to use only HTTPS for a site.` },
      { term: 'OCSP stapling', def: `Server attaches a signed revocation status to its certificate.` },
    ],
    commands: [
      { os: 'Linux', cmd: 'openssl s_client -connect host:443 -servername host', desc: `Opens a TLS connection and shows the chain, protocol, cipher, and verification result.` },
      { os: 'Linux', cmd: 'curl -vI https://host', desc: `Shows the TLS handshake details and response headers.` },
      { os: 'Windows', cmd: 'Test-NetConnection host -Port 443', desc: `Checks that TCP 443 is reachable before blaming TLS.` },
    ],
    checks: [
      {
        prompt: `What does forward secrecy protect against?`,
        options: [`Decryption of recorded past sessions if the server's long-term key is later stolen`, `A duplicate IP address`, `Packet loss`, `DNS poisoning`],
        correct: 0,
        explanation: `Ephemeral key exchange means each session's keys are not derivable from the server's long-term private key.`,
      },
      {
        prompt: `A server hosts many websites on one IP address. Which TLS extension tells it which certificate to present?`,
        options: [`SNI`, `OCSP`, `HSTS`, `CRL`],
        correct: 0,
        explanation: `Server Name Indication sends the requested hostname in the ClientHello.`,
      },
      {
        prompt: `Which is true of TLS 1.3 compared with TLS 1.2?`,
        options: [`It completes the handshake in one round trip and removed weak legacy options`, `It uses port 8443 only`, `It requires SSL 3.0`, `It does not use certificates`],
        correct: 0,
        explanation: `TLS 1.3 reduces latency and removes insecure features such as RSA key transport and CBC ciphers.`,
      },
    ],
    mini: {
      prompt: `A script fails with "unable to verify the first certificate" when calling an internal API, but a browser on the same PC works.`,
      task: `What is the likely cause and the correct fix?`,
    },
    recap: `TLS negotiates a version and cipher suite, validates the server's certificate chain, agrees on ephemeral keys for forward secrecy, then encrypts data symmetrically. TLS 1.3 is faster and safer. Diagnose with openssl s_client and curl, checking the chain, dates, names, SNI, version, and the port.`,
    classroom: `"Certificate muna ang sinusuri, saka ang susi, saka ang encryption. Kapag sira ang HTTPS, kunin mo ang chain, petsa, at pangalan."`,
  });

  NetReady.LESSONS['16-8'] = NetReady.lesson(16, {
    id: '16-8',
    slug: 'deep-dive-wifi-security-handshakes-and-8021x',
    title: 'Deep Dive: Wi-Fi Security, from the WPA2 Four-Way Handshake to WPA3 and 802.1X',
    minutes: 23,
    outcomes: [
      `Explain how a WPA2-Personal passphrase becomes the keys that encrypt traffic.`,
      `Describe why a captured handshake allows offline guessing and how WPA3-SAE prevents it.`,
      `Walk through the 802.1X and RADIUS authentication flow and name the main EAP types.`,
      `Choose the right Wi-Fi security design for home, guest, and enterprise networks.`,
    ],
    why: `Wi-Fi is the easiest network to attack because the signal travels through walls. The exam compares WPA2, WPA3, personal, enterprise, and EAP methods, and a real design decision depends on knowing why each one is safer or weaker.`,
    simple: `In WPA2-Personal, everyone shares one passphrase. The passphrase and the network name are processed into a Pairwise Master Key (PMK). When a client joins, the access point and the client run a four-message handshake that mixes the PMK with two random numbers (nonces) and their MAC addresses to create a fresh Pairwise Transient Key (PTK) for that client. The passphrase itself is never sent. However, an attacker who records the handshake can try guessing passphrases offline, so weak passphrases are cracked. WPA3-Personal replaces the pre-shared-key handshake with SAE, a password-authenticated key exchange that gives each session unique keys and makes offline guessing impractical. In WPA2/WPA3-Enterprise, each user authenticates individually through 802.1X to a RADIUS server, so there is no shared password.`,
    taglish: `Sa WPA2-Personal, iisa ang passphrase para sa lahat. Ang passphrase at pangalan ng network ay ginagawang Pairwise Master Key (PMK). Kapag sumali ang client, may four-message handshake ang AP at client na pinaghahalo ang PMK, dalawang random na numero (nonce), at MAC addresses para gumawa ng bagong Pairwise Transient Key (PTK) para sa client na iyon. Hindi kailanman ipinapadala ang passphrase. Pero kapag naitala ng attacker ang handshake, puwede siyang manghula ng passphrase offline — kaya nabibitak ang mahihinang passphrase. Pinalitan ito ng SAE sa WPA3, kaya bawat session ay may sariling key at halos imposible ang offline guessing. Sa Enterprise, bawat user ay nag-a-authenticate sa pamamagitan ng 802.1X at RADIUS, kaya walang shared password.`,
    analogy: {
      title: 'Susi ng bahay at ID ng bawat bisita',
      text: `Ang WPA2-Personal ay iisang susi na hawak ng buong pamilya at mga kaibigan: kapag kumalat ang susi, lahat ay may access. Ang Enterprise ay guwardiya na tumitingin ng sariling ID ng bawat tao at nag-iisyu ng pansamantalang susi na para lang sa kanila.`,
    },
    steps: [
      `Open versus secured: an open network has no encryption (anyone nearby can read traffic). WPA3 Enhanced Open (OWE) adds encryption to open networks without a password.`,
      `WPA2-Personal: PMK = PBKDF2 of the passphrase and SSID (4096 iterations of HMAC-SHA1). The PMK is the same for every client, which is why a weak passphrase is the weak point.`,
      `Four-way handshake: message 1, the AP sends its random ANonce. Message 2, the client sends its SNonce and a message integrity code (MIC) proving it knows the PMK. Message 3, the AP confirms and delivers the group key (GTK) for broadcast traffic. Message 4, the client acknowledges. Both sides derive the PTK from the PMK, ANonce, SNonce, and both MAC addresses.`,
      `Encryption: WPA2 uses AES-CCMP; WPA3 uses AES-CCMP (and GCMP-256 in the 192-bit mode). TKIP and WEP are obsolete.`,
      `Offline attack on WPA2-PSK: capture the handshake (possibly after forcing a client to reconnect with a deauthentication frame), then test guesses against the MIC offline at high speed. Defense: a long random passphrase (for example 20 or more characters), or move to WPA3 or Enterprise.`,
      `WPA3-Personal (SAE): each guess requires interaction with the access point, so offline dictionary attacks fail; each session gets unique keys with forward secrecy; protected management frames (PMF, 802.11w) are required, which blocks forged deauthentication.`,
      `Transition mode: WPA2/WPA3 mixed mode lets older clients connect, but an attacker can try to force a downgrade; use WPA3-only where all devices support it.`,
      `802.1X roles: the supplicant (client), the authenticator (access point or switch port), and the authentication server (RADIUS). The authenticator blocks everything except EAP traffic until the server accepts the user.`,
      `RADIUS: UDP 1812 for authentication and 1813 for accounting (older 1645 and 1646). Messages: Access-Request, Access-Challenge, Access-Accept, Access-Reject. The accept can also carry attributes that place the user in a specific VLAN.`,
      `EAP methods: EAP-TLS (client and server certificates, strongest, needs a PKI), PEAP (server certificate builds a TLS tunnel, username and password inside; common), EAP-TTLS (similar to PEAP), EAP-FAST (Cisco, uses protected access credentials). Clients must validate the server certificate or they can be tricked by an evil twin.`,
    ],
    deepDive: [
      {
        title: 'The four-way handshake, message by message',
        code: `Access point (authenticator)                    Client (supplicant)
   both already know the PMK
   |-- (1) ANonce ------------------------------->|   client picks SNonce,
   |                                              |   derives PTK
   |<-- (2) SNonce + MIC (proves PMK) ------------|
   derives PTK, verifies MIC
   |-- (3) install PTK, GTK (encrypted) + MIC --->|
   |<-- (4) ACK ----------------------------------|
   ====== data now encrypted with the PTK ======

PTK = PRF( PMK, ANonce, SNonce, AP MAC, client MAC )`,
        note: `The passphrase is never transmitted, but the MIC in message 2 lets an eavesdropper test passphrase guesses offline. That is the weakness WPA3-SAE removes.`,
      },
      {
        title: 'How much does passphrase strength matter?',
        text: `With a captured handshake an attacker tries guesses offline at very high speed, so the only protection is the number of possible passphrases. Every extra random character multiplies the work by the size of the character set.`,
        code: `Passphrase                    Strength          Offline risk
password1                     very weak         cracked from a common-word list in seconds
Summer2026!                   weak              predictable pattern, cracked quickly
correct horse battery staple  decent            four random words, hard but not impossible
k7#Vw2$pQz9!mR4tLx8@c         strong            20 random characters, not practical to guess`,
        note: `Random and long beats clever and short. With WPA3-SAE even a moderate passphrase is protected from offline guessing, though a strong one is still best.`,
      },
      {
        title: '802.1X with RADIUS: the conversation',
        code: `Client (supplicant)      Access point (authenticator)       RADIUS server
   |-- EAPOL-Start ----------->|                                    |
   |<-- EAP-Request/Identity --|                                    |
   |-- EAP-Response/Identity ->|-- RADIUS Access-Request ---------->|
   |                           |<-- Access-Challenge (TLS start) ---|
   |<====== TLS tunnel established, user credentials or certificate exchanged ======>|
   |                           |<-- Access-Accept (+ VLAN attrs) ---|
   |<-- EAP-Success -----------|                                    |
   |== keys derived (PMK from EAP), 4-way handshake, port opens ====|`,
        note: `The access point only relays EAP messages; the RADIUS server decides. The PMK in this case is unique per user session, which is why Enterprise has no shared password to leak.`,
      },
      {
        title: 'Choosing the right design',
        code: `Scenario                        Recommended security
------------------------------- ---------------------------------------------------
Home or tiny office             WPA3-Personal (or WPA2-AES with a 20+ char passphrase)
Guest Wi-Fi                     Separate VLAN + captive portal or OWE; internet only
Corporate staff                 WPA2/WPA3-Enterprise with EAP-TLS or PEAP, RADIUS, VLANs
IoT or legacy devices           Separate SSID and VLAN, WPA2-AES, firewall rules
Public hotspot                  OWE (Enhanced Open) at minimum, VPN for users`,
      },
    ],
    table: {
      label: 'Table comparing Wi-Fi security protocols',
      head: ['Protocol', 'Auth method', 'Encryption', 'Status'],
      rows: [
        ['WEP', 'Shared key', 'RC4', 'Broken, never use'],
        ['WPA (TKIP)', 'PSK or 802.1X', 'TKIP', 'Deprecated'],
        ['WPA2-Personal', 'PSK (shared passphrase)', 'AES-CCMP', 'Acceptable with a strong passphrase'],
        ['WPA2-Enterprise', '802.1X / EAP', 'AES-CCMP', 'Good'],
        ['WPA3-Personal', 'SAE', 'AES-CCMP/GCMP, PMF required', 'Preferred'],
        ['WPA3-Enterprise', '802.1X / EAP', 'AES-GCMP (192-bit mode available)', 'Best'],
      ],
      caption: 'Newer is better; Enterprise removes the shared password.',
    },
    example: `A company's staff Wi-Fi uses one shared WPA2 passphrase that former employees still know. The IT team moves staff to WPA2-Enterprise with EAP-TLS and certificates pushed to managed laptops, keeps the old SSID only for IoT on an isolated VLAN, and offers guests a separate captive portal network. When someone leaves, revoking their certificate cuts access without changing anything for everyone else.`,
    tips: [
      `For Enterprise Wi-Fi, always configure clients to validate the RADIUS server certificate, or an evil twin can harvest credentials.`,
      `Protected management frames (802.11w) block the deauthentication trick used to capture handshakes.`,
      `Do not hide the SSID or use MAC filtering as a security measure; both are easily bypassed.`,
    ],
    exam: `Know WPA2 versus WPA3, AES-CCMP versus TKIP, personal (PSK or SAE) versus enterprise (802.1X, RADIUS, EAP), RADIUS ports 1812 and 1813, EAP-TLS as the strongest, and that WPA3 adds SAE, forward secrecy, and required PMF. Know that WEP and TKIP are deprecated.`,
    mistakes: [
      `Using WPA2-Personal with a short, guessable passphrase.`,
      `Letting Enterprise clients skip server certificate validation.`,
      `Leaving WPA2/WPA3 transition mode on forever.`,
    ],
    terms: [
      { term: 'PMK / PTK', def: `Pairwise master key from the passphrase or EAP; pairwise transient key derived per session.` },
      { term: 'SAE', def: `Simultaneous Authentication of Equals, WPA3's password-based key exchange.` },
      { term: '802.1X', def: `Port-based network access control using EAP.` },
      { term: 'RADIUS', def: `Authentication, authorization, and accounting server protocol (UDP 1812/1813).` },
      { term: 'EAP-TLS', def: `EAP method that uses certificates on both the client and the server.` },
      { term: 'PMF (802.11w)', def: `Protected management frames, preventing forged deauthentication.` },
    ],
    checks: [
      {
        prompt: `Why can a captured WPA2-Personal handshake be attacked offline?`,
        options: [`The handshake allows an attacker to test passphrase guesses without contacting the network`, `The passphrase is sent in clear text`, `The AP uses WEP internally`, `The SSID is hidden`],
        correct: 0,
        explanation: `The MIC in the handshake lets an attacker verify guesses offline; strong passphrases or WPA3-SAE prevent this.`,
      },
      {
        prompt: `Which EAP method uses certificates on both the client and the server?`,
        options: [`EAP-TLS`, `PEAP`, `EAP-MD5`, `LEAP`],
        correct: 0,
        explanation: `EAP-TLS provides mutual certificate authentication and is the strongest common option.`,
      },
      {
        prompt: `What does WPA3-Personal use in place of the WPA2 pre-shared-key handshake?`,
        options: [`SAE`, `TKIP`, `WEP`, `WPS`],
        correct: 0,
        explanation: `Simultaneous Authentication of Equals prevents offline dictionary attacks and provides forward secrecy.`,
      },
    ],
    mini: {
      prompt: `A guest and a staff device both connect to the same open SSID, and a customer reports that a stranger can read unencrypted web traffic.`,
      task: `What two changes would you make?`,
    },
    recap: `WPA2-Personal derives keys from a shared passphrase through a four-way handshake and is only as strong as the passphrase; WPA3-SAE removes offline guessing; Enterprise uses 802.1X, RADIUS, and EAP so users authenticate individually. Choose the design by the scenario, and always validate the server certificate.`,
    classroom: `"Kapag iisa ang password ng lahat, iisa rin ang butas ng lahat. Kaya Enterprise para sa kumpanya, WPA3 para sa bahay."`,
  });

  NetReady.LESSONS['16-9'] = NetReady.lesson(16, {
    id: '16-9',
    slug: 'deep-dive-ipv6-neighbor-discovery-and-slaac',
    title: 'Deep Dive: IPv6 Neighbor Discovery, SLAAC, Duplicate Address Detection, and Troubleshooting',
    minutes: 22,
    outcomes: [
      `Name the five ICMPv6 Neighbor Discovery messages and what each does.`,
      `Walk through how a host builds and verifies its own IPv6 addresses.`,
      `Explain solicited-node multicast and the router advertisement flags.`,
      `Troubleshoot missing addresses, no default route, and dual-stack problems.`,
    ],
    why: `IPv6 replaces ARP and much of DHCP with Neighbor Discovery. If ICMPv6 is blocked, IPv6 stops working entirely, which surprises people used to blocking ICMP. The exam asks about SLAAC, NDP, and troubleshooting.`,
    simple: `IPv6 uses ICMPv6 for Neighbor Discovery Protocol (NDP). A new host first creates a link-local address (fe80::/10), then checks it is unique with Duplicate Address Detection. It sends a Router Solicitation to all routers (ff02::2); routers answer with a Router Advertisement containing the prefix, prefix length, lifetimes, the router's role as default gateway, and flags that say whether to use SLAAC or DHCPv6. The host builds a global address from the prefix plus an interface ID and checks it with DAD too. To find another host's MAC address on the link, the host sends a Neighbor Solicitation to a solicited-node multicast address and receives a Neighbor Advertisement, which replaces ARP.`,
    taglish: `Gumagamit ang IPv6 ng ICMPv6 para sa Neighbor Discovery (NDP). Una, gumagawa ang bagong host ng link-local address (fe80::/10) at tinitiyak na unique ito gamit ang Duplicate Address Detection. Magpapadala siya ng Router Solicitation sa lahat ng router (ff02::2); sasagot ang router ng Router Advertisement na may prefix, haba ng prefix, lifetimes, gateway, at flags kung SLAAC o DHCPv6 ang gagamitin. Gagawa ang host ng global address mula sa prefix at interface ID, at sine-check din ito ng DAD. Para malaman ang MAC ng ibang host, magpapadala siya ng Neighbor Solicitation sa solicited-node multicast at tatanggap ng Neighbor Advertisement — ito ang pumalit sa ARP.`,
    analogy: {
      title: 'Pagpasok sa bagong subdivision',
      text: `Pagdating mo, sumisigaw ka muna ng "May ibang gumagamit ba ng numerong ito?" (DAD). Tapos tinatanong mo ang guwardiya kung anong pangalan ng subdivision at saan ang labasan (Router Solicitation at Advertisement). Para hanapin ang bahay ng kapitbahay, tinatanong mo lang ang mga nakatira sa kalye na may parehong huling bahagi ng numero (solicited-node multicast), hindi ang buong subdivision.`,
    },
    steps: [
      `ICMPv6 NDP types: Router Solicitation (type 133), Router Advertisement (134), Neighbor Solicitation (135), Neighbor Advertisement (136), and Redirect (137).`,
      `Link-local first: every IPv6 interface automatically has a link-local address in fe80::/10, used for NDP and by routers as next-hop addresses.`,
      `Duplicate Address Detection: before using any new unicast address, the host sends a Neighbor Solicitation for it from the unspecified address (::). If someone answers, the address is a duplicate and is not used. While being checked, the address is tentative.`,
      `Router discovery: the host sends an RS to ff02::2 (all routers); the router replies with an RA to ff02::1 (all nodes) or unicast. Routers also send RAs periodically.`,
      `RA contents: prefix and length, valid and preferred lifetimes, the router lifetime (how long it may serve as default gateway), link MTU, and flags. The A flag in a prefix means the host may use SLAAC. The M flag (managed) means get addresses from DHCPv6. The O flag (other) means use SLAAC for the address but DHCPv6 for options such as DNS.`,
      `Address resolution: to reach 2001:db8:1::50 on the same link, the host sends an NS to the solicited-node multicast address ff02::1:ffXX:XXXX, where XX:XXXX are the last 24 bits of the target address. Only hosts whose addresses end in those bits listen, which is far more efficient than ARP's broadcast to everyone.`,
      `Neighbor cache: results are stored as neighbor entries (INCOMPLETE, REACHABLE, STALE, DELAY, PROBE) and refreshed with NUD (neighbor unreachability detection).`,
      `Address types: ::1 loopback, :: unspecified, fe80::/10 link-local, fc00::/7 unique local (ULA, in practice fd00::/8, like private IPv4), 2000::/3 global unicast, ff00::/8 multicast (ff02:: is link-local scope), and 2001:db8::/32 reserved for documentation.`,
      `Address lifecycle: tentative (checking), preferred (normal use), deprecated (existing connections only, new ones use another address), invalid (removed). Lifetimes in the RA control this.`,
    ],
    deepDive: [
      {
        title: 'What a host does when it joins the network',
        code: `1. Interface up -> create link-local fe80::21a:2bff:fe3c:4d5e (from EUI-64 or random ID)
2. DAD: send NS for that address from ::  -> no reply -> address is preferred
3. Send RS to ff02::2 ("any routers here?")
4. Receive RA: prefix 2001:db8:acad:1::/64, A=1, M=0, O=1, router lifetime 1800 s
5. Build global address: 2001:db8:acad:1:21a:2bff:fe3c:4d5e (or a random privacy ID)
6. DAD again for the global address -> preferred
7. Default route: ::/0 via the router's link-local address (fe80::1)
8. O flag set -> ask DHCPv6 (stateless) for DNS servers`,
        note: `Notice the default gateway is the router's link-local address, not its global address.`,
      },
      {
        title: 'Solicited-node multicast, computed',
        text: `Take the target 2001:db8:acad:1:21a:2bff:fe3c:4d5e. The last 24 bits are 3c:4d5e. The solicited-node address is the fixed prefix ff02::1:ff00:0/104 followed by those 24 bits.`,
        code: `Target address        : 2001:db8:acad:1:21a:2bff:fe3c:4d5e
Last 24 bits          : 3c:4d5e
Solicited-node address: ff02::1:ff3c:4d5e
Ethernet multicast MAC: 33:33:ff:3c:4d:5e   (33:33 + last 32 bits of the IPv6 address)`,
        note: `Only hosts whose addresses end in 3c:4d5e (usually just one) process this multicast, so most devices on the link are not disturbed.`,
      },
      {
        title: 'Reading host output (illustrative)',
        code: `$ ip -6 addr show eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP>
    inet6 2001:db8:acad:1:21a:2bff:fe3c:4d5e/64 scope global dynamic mngtmpaddr
       valid_lft 86389sec preferred_lft 14389sec
    inet6 fe80::21a:2bff:fe3c:4d5e/64 scope link

$ ip -6 route
2001:db8:acad:1::/64 dev eth0 proto kernel metric 256
fe80::/64 dev eth0 proto kernel metric 256
default via fe80::1 dev eth0 proto ra metric 1024

$ ip -6 neigh
fe80::1 dev eth0 lladdr 00:11:22:33:44:55 router REACHABLE

C:\\> ipconfig
   IPv6 Address. . . . . . . . . . . : 2001:db8:acad:1:21a:2bff:fe3c:4d5e
   Temporary IPv6 Address. . . . . . : 2001:db8:acad:1:9c4e:77aa:1d02:e381
   Link-local IPv6 Address . . . . . : fe80::21a:2bff:fe3c:4d5e%12
   Default Gateway . . . . . . . . . : fe80::1%12`,
        note: `"proto ra" shows the default route was learned from a Router Advertisement. A Temporary address is the privacy address used for outgoing connections.`,
      },
      {
        title: 'Troubleshooting guide',
        code: `Symptom                                 Likely cause                        Check / fix
--------------------------------------- ----------------------------------- ------------------------------
Only fe80:: address, no global address  No RA received or A flag off        Router RA config, ICMPv6 filtering
Global address but no default route     Router lifetime 0 or RA blocked     show ipv6 interface (RA settings)
IPv6 fails across a firewall            ICMPv6 blocked (NDP, PMTUD)         Permit required ICMPv6 types
Two hosts report duplicate address      DAD conflict or static clash        Change one address; check DHCPv6
Sites slow, IPv4 works                  Broken IPv6 path, dual-stack delay  Test ping -6, fix routing or AAAA
Name resolves to IPv6 but unreachable   AAAA published without v6 service   Remove AAAA or fix connectivity
Rogue RA hijacks gateway                Malicious or accidental router      RA Guard on switch ports`,
        note: `Unlike IPv4, you cannot simply block all ICMP: ICMPv6 neighbor discovery and Packet Too Big messages are required for IPv6 to work.`,
      },
    ],
    table: {
      label: 'Table of IPv6 Neighbor Discovery messages',
      head: ['Message', 'ICMPv6 type', 'Purpose'],
      rows: [
        ['Router Solicitation (RS)', '133', 'Host asks for routers to announce themselves'],
        ['Router Advertisement (RA)', '134', 'Router announces prefix, gateway, flags'],
        ['Neighbor Solicitation (NS)', '135', 'Address resolution, DAD, reachability check'],
        ['Neighbor Advertisement (NA)', '136', 'Reply with the link-layer address'],
        ['Redirect', '137', 'Router points to a better next hop'],
      ],
      caption: 'NDP replaces ARP, router discovery, and part of DHCP.',
    },
    example: `After a security hardening change, all IPv6 devices on a floor lose their global addresses overnight and keep only fe80:: addresses, while IPv4 is fine. The new switch ACL drops all ICMP "to be safe", including Router Advertisements. Permitting the NDP message types on the access ports restores SLAAC, and the team adds RA Guard so only the real router's RAs are accepted.`,
    tips: [
      `Never block ICMPv6 wholesale. Permit at least NDP and Packet Too Big.`,
      `The default gateway in IPv6 is normally a link-local address, written with a scope ID such as fe80::1%12 on Windows.`,
      `Know the mnemonic: RS 133, RA 134, NS 135, NA 136.`,
    ],
    exam: `Know that NDP uses ICMPv6, replaces ARP, uses multicast not broadcast, that SLAAC uses router advertisements, the M and O flags for DHCPv6, DAD, and the link-local, ULA, and global unicast prefixes. Troubleshooting questions often hinge on blocked ICMPv6 or a missing RA.`,
    mistakes: [
      `Blocking all ICMPv6 and breaking IPv6.`,
      `Expecting a global default gateway address instead of the router's link-local address.`,
      `Forgetting that SLAAC requires a /64.`,
    ],
    terms: [
      { term: 'NDP', def: `Neighbor Discovery Protocol, built on ICMPv6, replacing ARP and router discovery.` },
      { term: 'DAD', def: `Duplicate Address Detection, checking that an address is not already in use.` },
      { term: 'Solicited-node multicast', def: `Multicast address derived from the last 24 bits of a unicast address, used for address resolution.` },
      { term: 'RA Guard', def: `Switch feature that drops Router Advertisements from unauthorized ports.` },
      { term: 'ULA', def: `Unique local address (fc00::/7), the IPv6 equivalent of private addresses.` },
    ],
    commands: [
      { os: 'Linux', cmd: 'ip -6 addr', desc: `Shows IPv6 addresses with their scope and lifetimes.` },
      { os: 'Linux', cmd: 'ip -6 neigh', desc: `Shows the IPv6 neighbor cache (the ARP equivalent).` },
      { os: 'Windows', cmd: 'netsh interface ipv6 show neighbors', desc: `Lists the IPv6 neighbor cache on Windows.` },
      { os: 'Linux', cmd: 'ping -6 2001:db8::1', desc: `Tests IPv6 reachability to a destination.` },
    ],
    checks: [
      {
        prompt: `Which protocol replaces ARP in IPv6?`,
        options: [`Neighbor Discovery Protocol using ICMPv6`, `DHCPv6`, `IGMP`, `RIPng`],
        correct: 0,
        explanation: `NDP's Neighbor Solicitation and Advertisement messages resolve addresses to link-layer addresses.`,
      },
      {
        prompt: `A host has only an fe80:: address and no global address, while IPv4 works. What should you suspect first?`,
        options: [`No Router Advertisement is reaching the host`, `A bad DNS server`, `A duplex mismatch`, `An expired certificate`],
        correct: 0,
        explanation: `SLAAC depends on Router Advertisements to learn the prefix.`,
      },
      {
        prompt: `Why is blocking all ICMP on an IPv6 network a bad idea?`,
        options: [`ICMPv6 is required for Neighbor Discovery and path MTU discovery`, `ICMPv6 carries web traffic`, `It breaks IPv4 NAT`, `It disables DHCP`],
        correct: 0,
        explanation: `Without ICMPv6 NDP messages hosts cannot resolve neighbors or learn routers.`,
      },
    ],
    mini: {
      prompt: `A host's RA shows the M flag set to 1.`,
      task: `What does the host do for its address?`,
    },
    recap: `A host creates a link-local address, verifies it with DAD, learns the prefix and gateway from Router Advertisements, builds its own global address, and resolves neighbors with NS and NA to solicited-node multicast addresses. ICMPv6 must stay permitted, and RA Guard protects against rogue routers.`,
    classroom: `"Sa IPv6, ICMP ang nagpapatakbo ng network. Kapag hinarang mo lahat ng ICMP, nawala rin ang IPv6."`,
  });

  NetReady.LESSONS['16-10'] = NetReady.lesson(16, {
    id: '16-10',
    slug: 'deep-dive-building-and-troubleshooting-an-ipsec-vpn',
    title: 'Deep Dive: Building and Troubleshooting a Site-to-Site IPsec VPN',
    minutes: 24,
    outcomes: [
      `Plan a site-to-site IPsec VPN: addressing, interesting traffic, and matching parameters.`,
      `Explain IKE phase 1 and phase 2 and what each builds.`,
      `Read a basic configuration and the verification commands.`,
      `Troubleshoot a tunnel that is down, up with no traffic, or slow with large transfers.`,
    ],
    why: `Site-to-site VPNs connect branches to headquarters and offices to the cloud every day, and "VPN is down" is a classic ticket. This lesson puts the IPsec theory into one end-to-end build and a repeatable troubleshooting method.`,
    simple: `Two VPN gateways agree on how to protect traffic in two stages. In phase 1 (IKE) they authenticate each other with a pre-shared key or certificates, negotiate encryption and hash algorithms and a Diffie-Hellman group, and build a secure management channel. In phase 2 they negotiate the IPsec security associations that actually encrypt the user data (ESP in tunnel mode). Both sides must match on every parameter, and both must agree on which traffic is protected, the "interesting traffic", defined by mirror-image access lists. The tunnel is built when interesting traffic first appears. Traffic between the two private networks then travels encrypted across the internet. The VPN traffic must also bypass NAT.`,
    taglish: `Dalawang VPN gateway ang nagkakasundo sa dalawang yugto. Sa phase 1 (IKE), nag-a-authenticate sila sa isa't isa gamit ang pre-shared key o certificates, nagkakasundo sa encryption, hash, at Diffie-Hellman group, at gumagawa ng ligtas na management channel. Sa phase 2, nagkakasundo sila sa IPsec security associations na talagang nag-e-encrypt ng data (ESP sa tunnel mode). Dapat magkapareho ang lahat ng parameter, at magkapareho rin ang pagkaintindi nila kung anong traffic ang poprotektahan — ang "interesting traffic" — gamit ang salamin na access list. Nabubuo ang tunnel kapag may unang interesting traffic. Dapat ding hindi dumaan sa NAT ang VPN traffic.`,
    analogy: {
      title: 'Dalawang bangko na may armored van',
      text: `Phase 1 ay ang dalawang manager na nagpapakilala sa isa't isa at nagkakasundo sa lihim na salita para makapag-usap nang ligtas. Phase 2 ay ang pagkakasundo kung anong armored van at ruta ang gagamitin para sa mga pera (data). Kailangan pareho ang listahan ng mga aprubadong kargamento (interesting traffic) ng dalawang bangko.`,
    },
    steps: [
      `Plan the addresses: unique, non-overlapping LAN subnets at each site (for example HQ 10.1.0.0/16, branch 10.2.0.0/16) and public IP addresses for each gateway (HQ 198.51.100.1, branch 203.0.113.2 in this example).`,
      `IKE phase 1 (IKEv1 ISAKMP SA, UDP 500): authenticate peers (pre-shared key or certificate), agree on encryption (AES-256), hash (SHA-256), DH group (14 or higher; 19 and 20 are elliptic-curve groups), and lifetime (often 86400 seconds). Result: a bidirectional secure channel for negotiations.`,
      `IKE phase 2 (IPsec SAs): agree on the transform set (ESP with AES and SHA-HMAC), tunnel mode, optional perfect forward secrecy (a fresh DH exchange), and lifetime (often 3600 seconds). Result: two one-way IPsec SAs, one per direction.`,
      `IKEv2 (preferred) does the same with fewer messages: IKE_SA_INIT, IKE_AUTH, then child SAs. Terms differ but the concepts match.`,
      `Interesting traffic: an ACL on each side listing source and destination networks. The two ACLs must mirror each other (HQ permits 10.1.0.0/16 to 10.2.0.0/16; the branch permits 10.2.0.0/16 to 10.1.0.0/16).`,
      `NAT exemption: traffic between the sites must not be translated. Either add a deny line for it in the NAT ACL or use an identity NAT rule.`,
      `NAT traversal: if either gateway is behind NAT, ESP (protocol 50) cannot pass, so the tunnel uses UDP 4500 encapsulation automatically.`,
      `Firewall rules: allow UDP 500, UDP 4500, and ESP (IP protocol 50) between the gateways' public addresses.`,
      `MTU: ESP adds overhead, so clamp the TCP MSS (about 1350 to 1380) or lower the tunnel MTU, or large transfers will stall.`,
    ],
    deepDive: [
      {
        title: 'HQ gateway configuration (Cisco IOS, IKEv1 crypto map, illustrative)',
        text: `HQ has public address 198.51.100.1 on GigabitEthernet0/0 and LAN 10.1.0.0/16. The branch gateway is 203.0.113.2 with LAN 10.2.0.0/16. Replace the placeholder pre-shared key with a long random value and store it securely.`,
        code: `! Phase 1 policy
crypto isakmp policy 10
 encryption aes 256
 hash sha256
 authentication pre-share
 group 14
 lifetime 86400
crypto isakmp key <long-random-pre-shared-key> address 203.0.113.2

! Phase 2 transform set
crypto ipsec transform-set TS-AES256 esp-aes 256 esp-sha256-hmac
 mode tunnel

! Interesting traffic (mirror image on the branch)
ip access-list extended VPN-TRAFFIC
 permit ip 10.1.0.0 0.0.255.255 10.2.0.0 0.0.255.255

! Bind it together
crypto map VPNMAP 10 ipsec-isakmp
 set peer 203.0.113.2
 set transform-set TS-AES256
 match address VPN-TRAFFIC

interface GigabitEthernet0/0
 ip address 198.51.100.1 255.255.255.252
 crypto map VPNMAP

! Do not NAT the VPN traffic
ip access-list extended NAT-ACL
 deny   ip 10.1.0.0 0.0.255.255 10.2.0.0 0.0.255.255
 permit ip 10.1.0.0 0.0.255.255 any`,
        note: `The branch uses the same values with the peer, key address, and ACL source and destination swapped. Every parameter that is not a mirror must be identical.`,
      },
      {
        title: 'Verifying: is Phase 1 up?',
        text: `Generate interesting traffic (for example ping from an HQ LAN host to a branch host), then check the ISAKMP security association.`,
        code: `HQ# show crypto isakmp sa
IPv4 Crypto ISAKMP SA
dst             src             state          conn-id status
203.0.113.2     198.51.100.1    QM_IDLE           1001 ACTIVE`,
        note: `QM_IDLE with status ACTIVE means phase 1 is established and idle, waiting for quick-mode work. MM_NO_STATE or no entry means phase 1 is failing (mismatch, unreachable peer, or blocked UDP 500).`,
      },
      {
        title: 'Verifying: is data being protected?',
        code: `HQ# show crypto ipsec sa
interface: GigabitEthernet0/0
    local  ident (addr/mask/prot/port): (10.1.0.0/255.255.0.0/0/0)
    remote ident (addr/mask/prot/port): (10.2.0.0/255.255.0.0/0/0)
    current_peer 203.0.113.2
    #pkts encaps: 1204, #pkts encrypt: 1204, #pkts digest: 1204
    #pkts decaps: 1198, #pkts decrypt: 1198, #pkts verify: 1198
    #send errors 0, #recv errors 0`,
        note: `Both encaps and decaps should increase. Only encaps rising means traffic leaves but nothing comes back (remote side mismatch, routing, or firewall). Neither rising means traffic is not matching the interesting traffic ACL, or is being NATed.`,
      },
      {
        title: 'Troubleshooting flow',
        code: `Step 1  Can the gateways reach each other?         ping the peer public address; check UDP 500/4500, ESP
Step 2  Does phase 1 come up?                      show crypto isakmp sa
          none / MM_NO_STATE -> mismatch in encryption, hash, DH group, auth, or key
Step 3  Does phase 2 come up?                      show crypto ipsec sa
          phase 1 up, no IPsec SA -> transform set, PFS, or ACL mismatch (ACLs not mirrored)
Step 4  Is traffic matching the ACL?               hit counters on the interesting traffic ACL
          zero matches -> wrong ACL, wrong source address, or traffic NATed first
Step 5  Is traffic coming back?                    decaps counter; routes on the remote LAN
Step 6  Do small pings work but big transfers hang? MTU / MSS: ip tcp adjust-mss 1360, allow ICMP
Step 7  Rekey or lifetime problems?                SAs drop every hour -> lifetime mismatch`,
      },
      {
        title: 'The most common causes, ranked',
        code: `1. Pre-shared key typo or mismatch                         -> phase 1 fails
2. Phase 1 parameters not identical (hash, DH group, etc.)  -> phase 1 fails
3. Interesting-traffic ACLs not exact mirrors                -> phase 2 fails
4. VPN traffic being NATed                                    -> tunnel up, no matching traffic
5. Firewall blocks UDP 500/4500 or ESP                        -> tunnel never forms
6. Overlapping LAN subnets at both sites                      -> tunnel up, nothing works
7. MTU/MSS too large                                          -> small works, large hangs
8. Peer public IP changed (dynamic ISP address)               -> use dynamic peer or certificates`,
      },
    ],
    table: {
      label: 'Table of IPsec VPN parameters that must match',
      head: ['Phase', 'Parameter', 'Typical value'],
      rows: [
        ['1 (IKE)', 'Authentication', 'Pre-shared key or certificates'],
        ['1 (IKE)', 'Encryption / hash', 'AES-256 / SHA-256'],
        ['1 (IKE)', 'Diffie-Hellman group', '14 or higher (19, 20 elliptic curve)'],
        ['1 (IKE)', 'Lifetime', '86400 seconds'],
        ['2 (IPsec)', 'Protocol and mode', 'ESP, tunnel mode'],
        ['2 (IPsec)', 'Encryption / integrity', 'AES-256 / SHA-256 HMAC'],
        ['2 (IPsec)', 'Interesting traffic', 'Mirror-image ACLs'],
        ['2 (IPsec)', 'Lifetime and PFS', '3600 seconds; PFS group optional'],
      ],
      caption: 'Phase 1 builds the channel; phase 2 builds the data tunnels.',
    },
    example: `A new branch tunnel shows ACTIVE in show crypto isakmp sa, but users cannot reach HQ. show crypto ipsec sa shows zero encaps and the interesting traffic ACL has zero hits. The branch's NAT rule is translating the traffic to its public address before it reaches the crypto map. Adding a deny line for the HQ subnet in the NAT ACL fixes it, and encaps and decaps counters start rising.`,
    tips: [
      `Work in order: reachability, phase 1, phase 2, ACL hits, return traffic, MTU.`,
      `"Tunnel up but no traffic" is almost always NAT, routing, or non-mirrored ACLs.`,
      `Use certificates or a long, random pre-shared key; short keys defeat the encryption.`,
    ],
    exam: `Know IKE phases 1 and 2, UDP 500 and 4500, ESP tunnel mode for site-to-site, what interesting traffic and a mirrored ACL are, NAT-T, that overlapping subnets break VPNs, and that MTU/MSS causes "small works, big fails". Recognize that AH cannot cross NAT.`,
    mistakes: [
      `Typing the pre-shared key differently at each end.`,
      `Letting NAT translate traffic that should enter the tunnel.`,
      `Using the same private subnet at both sites.`,
    ],
    terms: [
      { term: 'IKE', def: `Internet Key Exchange; negotiates keys and security associations for IPsec.` },
      { term: 'Security association (SA)', def: `Agreed keys and algorithms for protecting one direction of traffic.` },
      { term: 'Interesting traffic', def: `Traffic matched by the VPN ACL that triggers and uses the tunnel.` },
      { term: 'Crypto map', def: `Cisco IOS configuration binding peer, transform set, and ACL to an interface.` },
      { term: 'PFS', def: `Perfect forward secrecy; a fresh key exchange for each phase 2 negotiation.` },
      { term: 'NAT-T', def: `NAT traversal; encapsulates ESP in UDP 4500 to pass through NAT.` },
    ],
    commands: [
      { os: 'Cisco IOS', cmd: 'show crypto isakmp sa', desc: `Shows phase 1 status; QM_IDLE ACTIVE means established.` },
      { os: 'Cisco IOS', cmd: 'show crypto ipsec sa', desc: `Shows phase 2 SAs and encapsulated and decapsulated packet counters.` },
      { os: 'Cisco IOS', cmd: 'clear crypto sa', desc: `Tears down the SAs so they renegotiate.` },
      { os: 'Cisco IOS', cmd: 'show access-lists VPN-TRAFFIC', desc: `Shows hit counters for the interesting traffic ACL.` },
    ],
    checks: [
      {
        prompt: `A VPN tunnel shows phase 1 ACTIVE, but show crypto ipsec sa shows zero encapsulated packets and users cannot connect. What is a likely cause?`,
        options: [`The traffic is being NATed before matching the VPN ACL`, `The SSID is hidden`, `DHCP is exhausted`, `A bad VLAN name`],
        correct: 0,
        explanation: `If the VPN traffic is translated first, it no longer matches the interesting traffic ACL, so nothing is encrypted.`,
      },
      {
        prompt: `Which two UDP ports does IPsec VPN negotiation commonly use?`,
        options: [`500 and 4500`, `53 and 67`, `161 and 162`, `123 and 69`],
        correct: 0,
        explanation: `IKE uses UDP 500, and NAT traversal uses UDP 4500.`,
      },
      {
        prompt: `Which problem makes a tunnel appear up, yet nothing passes between the sites, because both sites use 192.168.1.0/24?`,
        options: [`Overlapping subnets`, `Wrong SNMP community`, `Expired certificate`, `Low RSSI`],
        correct: 0,
        explanation: `With identical address ranges the routers cannot tell local from remote, so traffic is never sent into the tunnel.`,
      },
    ],
    mini: {
      prompt: `Small pings work across a new tunnel, but copying a 100 MB file freezes at 1 percent.`,
      task: `Name the cause and two possible fixes.`,
    },
    recap: `A site-to-site IPsec VPN needs unique subnets, matching IKE phase 1 and phase 2 parameters, mirror-image interesting traffic ACLs, NAT exemption, open UDP 500, UDP 4500, and ESP, and a safe MSS. Troubleshoot in order: reachability, phase 1, phase 2, ACL hits, return traffic, then MTU.`,
    classroom: `"Dalawang yugto bago tumakbo ang data. Kapag up ang tunnel pero walang daloy, tingnan ang NAT, ACL, at routes."`,
  });
}(window.NetReady));
