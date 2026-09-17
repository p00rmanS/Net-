/**
 * content/module-4.js — Module 4: IPv4 Addressing and Subnetting
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  NetReady.LESSONS['4-1'] = {
    id: '4-1',
    moduleId: 4,
    slug: 'binary-and-ipv4-structure',
    title: 'Binary Fundamentals and IPv4 Structure',
    estMinutes: 14,
    outcomes: [
      'Convert an 8-bit binary octet to decimal and back without a calculator.',
      'Explain why IPv4 addresses are written as four decimal octets separated by dots.',
      'Identify the network portion versus the host portion of an address given a subnet mask.',
    ],
    whyItMatters:
      'Subnetting is impossible without binary fluency. This lesson is the "multiplication table" of networking — slow to learn once, fast forever after.',
    simpleEnglish:
      'An IPv4 address is 32 bits long, split into four 8-bit sections called octets, written in decimal and separated by dots (e.g., 192.168.1.10). Each bit position in an octet has a fixed decimal value: 128, 64, 32, 16, 8, 4, 2, 1. A subnet mask marks which bits belong to the network portion versus the host portion.',
    taglish:
      'Ang IPv4 address ay binubuo ng 32 bits, hinahati sa apat na grupo na tinatawag na octet (walong bits bawat isa), tapos isinusulat sa decimal para mas madaling basahin ng tao. Bawat position sa loob ng isang octet may fixed na value: 128, 64, 32, 16, 8, 4, 2, 1 — kapag "on" (1) ang bit, isasama mo yung value niya sa total. Ang subnet mask naman ang "guide" kung alin sa 32 bits ang para sa network (parang barangay) at alin ang para sa host (parang bahay sa loob ng barangay).',
    analogy: {
      title: 'Address ng bahay: barangay + house number',
      text:
        'Isipin mo ang buong IP address parang kumpletong address ng bahay mo: "Barangay San Isidro, House #45." Ang subnet mask ang nagsasabi kung saan nagtatapos ang "barangay" na bahagi (network) at saan nagsisimula ang "house number" na bahagi (host). Kapag mali ang pagkaintindi mo sa hangganan nito, baka isipin mong iba ang barangay mo obwaymang magkapitbahay lang talaga kayo.',
    },
    howItWorks: [
      'Each octet is 8 bits, and each bit is either 0 or 1. Reading left to right, bit values are 128, 64, 32, 16, 8, 4, 2, 1.',
      'To convert binary to decimal, add up the values of every bit that is set to 1 (e.g., 11000000 = 128 + 64 = 192).',
      'To convert decimal to binary, repeatedly subtract the largest bit value that fits, marking that bit as 1, until you reach zero.',
      'A subnet mask (also 32 bits) uses consecutive 1s to mark the network portion and consecutive 0s to mark the host portion, aligned bit-for-bit with the IP address.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram binary-table" role="img" aria-label="Table of bit position values 128 64 32 16 8 4 2 1">
        <table class="lesson-table binary-octet">
          <thead><tr><th>128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th></tr></thead>
          <tbody><tr><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody>
        </table>
        <p class="diagram-caption">128 + 64 = <strong>192</strong></p>
      </div>`,
    },
    realWorldExample:
      'When you see a router configured with IP 192.168.1.1 and mask 255.255.255.0, the binary breakdown shows the first 24 bits (192.168.1) are the network portion, and the last 8 bits are available for host addresses.',
    proTips: [
      'Memorize the 8 bit values (128-64-32-16-8-4-2-1) cold — you will use them in every single subnetting problem for the rest of your networking career.',
      'Practice converting your own home router\'s IP address to binary by hand as a first real-world exercise.',
    ],
    examAlert:
      'The exam does not give you a calculator for most conceptual questions — fast manual binary/decimal conversion is a required skill, not optional.',
    beginnerMistakes: [
      'Memorizing binary-to-decimal conversions for a few common numbers instead of understanding the bit-value method that works for any number.',
      'Forgetting an octet maxes out at 255 (11111111), never 256.',
      'Mixing up which side (left = network, right = host) the mask marks first.',
    ],
    keyTerms: [
      { term: 'Bit', def: 'A single binary digit, either 0 or 1 — the smallest unit of digital data.' },
      { term: 'Octet', def: 'A group of 8 bits; an IPv4 address consists of four octets.' },
      { term: 'Subnet mask', def: 'A 32-bit value that marks which portion of an IP address is the network ID and which is the host ID.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the decimal value of the binary octet 11110000?',
        options: ['128', '224', '240', '255'],
        correct: 2,
        explanation: '128 + 64 + 32 + 16 = 240.',
      },
      {
        prompt: 'How many bits make up a full IPv4 address?',
        options: ['8', '16', '24', '32'],
        correct: 3,
        explanation: 'IPv4 addresses are 32 bits total, split into four 8-bit octets.',
      },
      {
        prompt: 'In a subnet mask, what do the consecutive 1 bits (from the left) represent?',
        options: ['The host portion', 'The network portion', 'The broadcast address only', 'The default gateway'],
        correct: 1,
        explanation: 'Consecutive 1 bits in a subnet mask, counted from the left, mark the network portion of the address.',
      },
    ],
    miniScenario: {
      prompt: 'You are given the binary octet 11001000.',
      task: 'Convert it to decimal by hand, showing which bit values you added together.',
    },
    recap:
      'IPv4 addresses are 32 bits across four octets, written in decimal. Bit values (128-64-32-16-8-4-2-1) let you convert binary to decimal and back. A subnet mask marks the network portion (1 bits) versus the host portion (0 bits).',
    classroomAnswer:
      '"Every IP address is really just 32 ones and zeros — we write it in decimal for humans, but the mask tells us exactly which bits are network and which are host."',
  };

  NetReady.LESSONS['4-2'] = {
    id: '4-2',
    moduleId: 4,
    slug: 'address-types-and-cidr',
    title: 'Address Types, Private Ranges, and CIDR Notation',
    estMinutes: 12,
    outcomes: [
      'Identify public, private, loopback, and link-local address ranges.',
      'Convert between subnet mask notation and CIDR (slash) notation.',
      'Explain why private addresses require NAT to reach the public internet.',
    ],
    whyItMatters:
      'Recognizing address ranges on sight lets you instantly spot misconfigurations, like a device stuck with a link-local address instead of a real DHCP-assigned one.',
    simpleEnglish:
      'Not all IPv4 addresses are the same kind. Private addresses (like 192.168.x.x, 10.x.x.x, 172.16-31.x.x) are reserved for internal networks and are not routable on the public internet. Loopback (127.x.x.x) refers to the device itself. Link-local (169.254.x.x) is auto-assigned when DHCP fails. CIDR notation (like /24) is a shorthand for the subnet mask, showing how many bits are the network portion.',
    taglish:
      'Meron tayong iba\'t-ibang "klase" ng IP address depende sa gamit. Yung private addresses (192.168.x.x, 10.x.x.x, 172.16-31.x.x) — parang internal lang ito sa bahay o opisina niyo, hindi ito makikita sa labas ng internet nang direkta (kailangan ng NAT para makalabas). Ang loopback (127.0.0.1) ay parang tinatawagan mo yung sarili mo — ginagamit para i-test kung gumagana yung network stack ng device mo mismo. Ang link-local (169.254.x.x) ay yung "auto-assigned" na address kapag nabigo yung DHCP — parang default na "walang address" signal na may problema.',
    analogy: {
      title: 'Numero ng extension sa opisina',
      text:
        'Isipin mo ang private IP addresses parang internal extension numbers sa isang malaking opisina — gumagana lang sila sa loob ng building, kailangan pa ng operator (NAT) para ikonekta papunta sa labas na linya. Ang loopback address ay parang tumawag ka sa sarili mong extension — nasusubukan mo lang kung gumagana yung telepono mo mismo. Ang link-local ay parang "walang linya" na senyales — signal na may problema sa pag-connect sa totoong network.',
    },
    howItWorks: [
      'Private ranges (RFC 1918): 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 — reserved for internal use, never routed on the public internet.',
      'Loopback range: 127.0.0.0/8, most commonly seen as 127.0.0.1 ("localhost").',
      'Link-local (APIPA): 169.254.0.0/16, automatically self-assigned by Windows when DHCP is unreachable — a strong troubleshooting clue.',
      'CIDR notation writes the number of network bits after a slash (e.g., 255.255.255.0 = /24, since 24 bits are set to 1).',
      'NAT (Network Address Translation) allows many private-address devices to share one public IP address when reaching the internet.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Range</th><th>CIDR</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td>10.0.0.0 - 10.255.255.255</td><td>/8</td><td>Private (large networks)</td></tr>
          <tr><td>172.16.0.0 - 172.31.255.255</td><td>/12</td><td>Private (medium networks)</td></tr>
          <tr><td>192.168.0.0 - 192.168.255.255</td><td>/16</td><td>Private (small/home networks)</td></tr>
          <tr><td>127.0.0.0 - 127.255.255.255</td><td>/8</td><td>Loopback (the device itself)</td></tr>
          <tr><td>169.254.0.0 - 169.254.255.255</td><td>/16</td><td>Link-local / APIPA (DHCP failure)</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'When a user reports "no internet" and `ipconfig` shows an address starting with 169.254, that instantly tells you DHCP failed — before you check anything else.',
    proTips: [
      'Seeing a 169.254.x.x address is one of the fastest, most reliable troubleshooting clues in all of Network+ — memorize it.',
      'CIDR notation is used constantly in real configuration files and cloud consoles — get comfortable converting /24, /25, /26, /27, /28, /29, /30 to their dotted-decimal mask equivalents.',
    ],
    examAlert:
      'The exam expects you to instantly recognize private ranges on sight (10.x, 172.16-31.x, 192.168.x) without needing to calculate anything — memorize these three ranges exactly.',
    beginnerMistakes: [
      'Thinking any address starting with "172" is private — only 172.16.0.0 through 172.31.255.255 is private; 172.32.x.x and above are public.',
      'Confusing loopback (127.x.x.x, tests your own device) with link-local (169.254.x.x, DHCP failure).',
      'Forgetting that private addresses need NAT to communicate with the public internet.',
    ],
    keyTerms: [
      { term: 'Private IP address', def: 'An address from a reserved range (RFC 1918) used only within internal networks, not routable on the public internet.' },
      { term: 'Loopback address', def: 'An address (127.0.0.1) that always refers back to the local device itself.' },
      { term: 'APIPA / link-local', def: 'An automatically self-assigned address (169.254.x.x) used when a device cannot reach a DHCP server.' },
      { term: 'CIDR notation', def: 'A shorthand (e.g., /24) indicating how many bits of an address are the network portion.' },
      { term: 'NAT', def: 'Network Address Translation — allows private IP addresses to share a public IP address when accessing the internet.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A laptop shows IP address 169.254.12.34. What does this indicate?',
        options: [
          'A normal, healthy internet connection.',
          'The device failed to reach a DHCP server and self-assigned a link-local address.',
          'The device is using a public IP address.',
          'The device is in loopback test mode.',
        ],
        correct: 1,
        explanation: '169.254.x.x is the APIPA/link-local range, a strong sign DHCP failed.',
      },
      {
        prompt: 'Which of these is a valid private IP address range?',
        options: ['172.32.0.0/16', '192.168.0.0/16', '11.0.0.0/8', '169.255.0.0/16'],
        correct: 1,
        explanation: '192.168.0.0/16 is one of the three RFC 1918 private ranges; the others are not private ranges.',
      },
      {
        prompt: 'A subnet mask of 255.255.255.0 is written in CIDR notation as:',
        options: ['/16', '/24', '/28', '/30'],
        correct: 1,
        explanation: '255.255.255.0 has 24 bits set to 1, so its CIDR notation is /24.',
      },
    ],
    miniScenario: {
      prompt: 'A coworker asks why their home laptop (192.168.1.10) can browse the internet at all, since 192.168.x.x is not routable publicly.',
      task: 'Explain in one sentence what technology makes this possible.',
    },
    recap:
      'Private ranges (10.x, 172.16-31.x, 192.168.x) stay internal and need NAT to reach the internet. Loopback (127.x) tests the local device. Link-local (169.254.x) signals DHCP failure. CIDR notation is shorthand for the subnet mask.',
    classroomAnswer:
      '"If I see 169.254, I immediately know DHCP failed — and if I see a private range trying to reach the internet, I know NAT has to be involved somewhere."',
  };

  NetReady.LESSONS['4-3'] = {
    id: '4-3',
    moduleId: 4,
    slug: 'manual-subnetting-method',
    title: 'Network ID, Broadcast ID, and Fast Manual Subnetting',
    estMinutes: 16,
    outcomes: [
      'Calculate the network ID, broadcast ID, and usable host range for any given IP/CIDR.',
      'Use the "magic number" method to subnet quickly without full binary conversion.',
      'Explain why usable hosts is always 2 less than total addresses in a subnet.',
    ],
    whyItMatters:
      'This is the single most heavily tested hands-on skill in Network+ — and the one most beginners fear most. The magic number method removes the fear by turning it into simple subtraction.',
    simpleEnglish:
      'Every subnet has a Network ID (the "name" of the subnet, all host bits 0), a Broadcast ID (all host bits 1, used to reach every device in that subnet), and a range of usable host addresses in between. The "magic number" method finds subnet boundaries fast: subtract the interesting octet\'s mask value from 256 to get the block size, then list multiples of that block size.',
    taglish:
      'Bawat subnet may Network ID (parang "pangalan" ng barangay — lahat host bits ay 0) at Broadcast ID (parang "megaphone address" — lahat host bits ay 1, ginagamit para maabot lahat ng device sa loob ng subnet na iyon). Sa pagitan nila, andun yung mga usable host addresses — mga totoong address na pwedeng i-assign sa mga device. Ang "magic number method" ay shortcut: ibawas mo yung value ng subnet mask sa 256, at yun na yung "block size" — mula doon, magbibilang ka na lang ng multiples para makuha yung bawat subnet boundary.',
    analogy: {
      title: 'Paghahati ng lupa sa mga lote',
      text:
        'Isipin mo may malaking lupa ka (network) na hahatiin mo sa mga pantay na lote (subnets). Ang Network ID ay parang "simula" ng bawat lote — hindi ito totoong bahay, address lang ito ng buong lote. Ang Broadcast ID ay parang "katapusan" ng lote — reserved din, hindi rin totoong bahay. Sa pagitan nila, doon mo puwedeng itayo ang mga totoong bahay (usable hosts).',
    },
    howItWorks: [
      'Step 1: Identify the "interesting octet" — the octet where the subnet mask is not 255 or 0 (e.g., mask 255.255.255.192 has its interesting octet in the 4th position, value 192).',
      'Step 2: Calculate the block size using the magic number: 256 - mask value (e.g., 256 - 192 = 64).',
      'Step 3: List subnet boundaries as multiples of the block size (0, 64, 128, 192 for a /26).',
      'Step 4: Find which block the given IP address falls into — that block\'s starting number is the Network ID.',
      'Step 5: The Broadcast ID is one less than the next block\'s starting number.',
      'Step 6: Usable hosts are every address between Network ID and Broadcast ID, exclusive — total addresses minus 2.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram subnet-blocks" role="img" aria-label="Example subnet block layout for a /26 network showing four blocks of 64 addresses each">
        <div class="subnet-block"><strong>0-63</strong><br>Net ID: .0<br>Bcast: .63</div>
        <div class="subnet-block"><strong>64-127</strong><br>Net ID: .64<br>Bcast: .127</div>
        <div class="subnet-block"><strong>128-191</strong><br>Net ID: .128<br>Bcast: .191</div>
        <div class="subnet-block"><strong>192-255</strong><br>Net ID: .192<br>Bcast: .255</div>
      </div>
      <p class="diagram-caption">Example: 192.168.1.0/26 &rarr; block size 64, four subnets</p>`,
    },
    realWorldExample:
      'Given IP 192.168.1.130 with mask 255.255.255.192 (/26): block size is 64, so boundaries are 0, 64, 128, 192. The address 130 falls in the 128 block, so Network ID = 192.168.1.128, Broadcast ID = 192.168.1.191, usable hosts = .129 through .190.',
    proTips: [
      'Practice the magic number method until it takes under 30 seconds per problem — speed matters under exam time pressure.',
      'Use this platform\'s Subnet Calculator to check your manual work, but always solve by hand first — the exam will not give you a calculator tool.',
    ],
    examAlert:
      'PBQs frequently ask you to fill in Network ID, Broadcast ID, first usable host, last usable host, and total usable hosts for a given IP/CIDR — practice producing all five values together, not just one at a time.',
    beginnerMistakes: [
      'Forgetting to subtract 2 for usable hosts (Network ID and Broadcast ID are never assignable to a device).',
      'Working in the wrong octet when the mask spans a "clean" boundary (e.g., forgetting a /24 network I.D. is just the full third octet, unchanged).',
      'Rushing and misreading the given IP address digit by digit.',
    ],
    keyTerms: [
      { term: 'Network ID', def: 'The first address in a subnet, with all host bits set to 0 — identifies the subnet itself, never assigned to a device.' },
      { term: 'Broadcast ID', def: 'The last address in a subnet, with all host bits set to 1 — used to reach every device in that subnet, never assigned to a device.' },
      { term: 'Block size (magic number)', def: 'The size of each subnet in that octet, calculated as 256 minus the mask value in the interesting octet.' },
      { term: 'Usable host range', def: 'All addresses between the Network ID and Broadcast ID, available to assign to actual devices.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'For 192.168.1.0/26, what is the block size (magic number)?',
        options: ['32', '64', '128', '16'],
        correct: 1,
        explanation: '/26 means mask 255.255.255.192; 256 - 192 = 64.',
      },
      {
        prompt: 'Why is the number of usable hosts always 2 less than the total addresses in a subnet?',
        options: [
          'Because two addresses are reserved for DNS servers.',
          'Because the Network ID and Broadcast ID are reserved and never assignable to a device.',
          'Because of a Windows-specific limitation.',
          'Because IPv4 always wastes 2 addresses randomly.',
        ],
        correct: 1,
        explanation: 'The first (Network ID) and last (Broadcast ID) addresses in every subnet are reserved, not assignable to hosts.',
      },
      {
        prompt: 'Given IP 10.0.0.70 with mask 255.255.255.192 (/26), what is the Network ID?',
        options: ['10.0.0.0', '10.0.0.64', '10.0.0.128', '10.0.0.192'],
        correct: 1,
        explanation: 'Block size is 64; boundaries are 0, 64, 128, 192. Address 70 falls in the 64 block, so Network ID = 10.0.0.64.',
      },
    ],
    miniScenario: {
      prompt: 'You are given IP 172.16.5.200 with mask 255.255.255.224 (/27).',
      task: 'Manually calculate the block size, Network ID, Broadcast ID, and usable host range — then verify your answer using the Subnet Calculator tool.',
    },
    recap:
      'Every subnet has a reserved Network ID (all host bits 0) and Broadcast ID (all host bits 1). The magic number method (256 minus the mask value) quickly finds block boundaries. Usable hosts = total addresses minus 2.',
    classroomAnswer:
      '"I find the block size with 256 minus the mask, list the boundaries, find which block my address falls in, and the two ends of that block are my Network ID and Broadcast ID."',
    interactiveToolId: 'subnet-calculator',
  };

  NetReady.LESSONS['4-4'] = {
    id: '4-4',
    moduleId: 4,
    slug: 'vlsm-and-summarization',
    title: 'VLSM and Route Summarization',
    estMinutes: 13,
    outcomes: [
      'Explain why VLSM is more efficient than using one fixed subnet size everywhere.',
      'Design subnets of different sizes for different-sized departments from one address block.',
      'Explain the purpose of route summarization in reducing routing table size.',
    ],
    whyItMatters:
      'Real networks are never uniform — the accounting department needs 10 addresses, the sales floor needs 100. VLSM prevents massive address waste, and summarization keeps routers efficient.',
    simpleEnglish:
      'VLSM (Variable Length Subnet Masking) allows different subnets within the same network to have different sizes, matching the actual number of hosts needed instead of wasting addresses on a one-size-fits-all scheme. Route summarization combines multiple contiguous subnets into a single, larger routing table entry to reduce complexity.',
    taglish:
      'Ang VLSM ay parang "custom-fit" na paghahati ng address space — hindi lahat ng department kailangan ng parehong laki ng subnet. Kung 5 lang katao sa IT department pero 150 sa sales, hindi tama na parehong laki ng subnet ang ibigay mo sa kanila — sayang ang mga address. Sa VLSM, binibigyan mo ng maliit na subnet yung IT at malaking subnet yung sales, base sa aktwal na pangangailangan. Ang route summarization naman parang "pagsasama-sama ng maraming maliit na entry sa isang malaking entry" sa routing table, para mas magaan at mabilis ang pag-navigate ng router.',
    analogy: {
      title: 'Pagbibigay ng puwang sa condo',
      text:
        'Isipin mo isang condo building na maghahati ng puwang sa iba\'t-ibang klase ng unit — studio para sa iisang tao, at 3-bedroom para sa malaking pamilya. Hindi tama na bigyan mo ng parehong laki ang lahat — sasayangin mo ang espasyo. Ganun din ang VLSM: binibigyan mo ng tamang laki ng subnet ang bawat department, base sa aktwal na bilang ng kailangan nilang address.',
    },
    howItWorks: [
      'Start with the largest host requirement first, allocate the smallest subnet that fits it (with room for growth), then move to the next largest requirement.',
      'Each subnet\'s size is chosen independently — a /30 for a point-to-point router link, a /26 for a 50-person department, a /24 for a large floor.',
      'For summarization, routers combine multiple contiguous subnet routes that share a common prefix into a single, shorter-prefix route (e.g., four /26 subnets can summarize into one /24 route).',
      'Summarization reduces routing table size, which reduces memory use and speeds up route lookups on routers handling many networks.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Department</th><th>Hosts Needed</th><th>Subnet Assigned</th></tr></thead>
        <tbody>
          <tr><td>Sales floor</td><td>100</td><td>/25 (126 usable)</td></tr>
          <tr><td>Accounting</td><td>25</td><td>/27 (30 usable)</td></tr>
          <tr><td>IT department</td><td>6</td><td>/29 (6 usable)</td></tr>
          <tr><td>Router-to-router link</td><td>2</td><td>/30 (2 usable)</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'An ISP might summarize hundreds of individual customer /30 point-to-point links into a handful of larger routes advertised to the rest of the internet, dramatically shrinking global routing tables.',
    proTips: [
      'Always allocate from largest requirement to smallest to avoid awkward leftover fragments that do not fit remaining needs.',
      'A /30 subnet (2 usable hosts) is the classic choice for a point-to-point link between two routers — memorize this as a common exam scenario.',
    ],
    examAlert:
      'Expect a PBQ-style scenario listing several departments with different host counts, asking you to assign the most efficient subnet size to each — practice this exact task repeatedly.',
    beginnerMistakes: [
      'Using the same subnet size for every department "to keep it simple," wasting huge numbers of addresses.',
      'Forgetting to leave room for reasonable future growth when choosing a subnet size.',
      'Confusing VLSM (variable subnet sizes) with summarization (combining routes) — they solve different but related problems.',
    ],
    keyTerms: [
      { term: 'VLSM', def: 'Variable Length Subnet Masking — using different subnet mask sizes within the same network to match actual host requirements.' },
      { term: 'Route summarization', def: 'Combining multiple contiguous routes into a single, larger route to reduce routing table size.' },
      { term: 'Point-to-point link', def: 'A direct connection between exactly two devices (commonly two routers), typically needing only a /30 subnet.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Why is VLSM more efficient than using a single fixed subnet size across an entire organization?',
        options: [
          'It is not actually more efficient.',
          'It matches subnet size to actual host requirements, reducing wasted addresses.',
          'It removes the need for subnet masks entirely.',
          'It only works with IPv6.',
        ],
        correct: 1,
        explanation: 'VLSM lets each subnet be sized appropriately, avoiding the waste of forcing small departments into large, uniform subnets.',
      },
      {
        prompt: 'What is the most common subnet size for a direct router-to-router link?',
        options: ['/24', '/27', '/29', '/30'],
        correct: 3,
        explanation: 'A /30 provides exactly 2 usable addresses, ideal for a point-to-point link between two routers.',
      },
      {
        prompt: 'What is the primary purpose of route summarization?',
        options: [
          'To make subnets bigger for more hosts.',
          'To combine multiple contiguous routes into fewer, larger routing table entries.',
          'To assign public IP addresses to private devices.',
          'To encrypt routing table entries.',
        ],
        correct: 1,
        explanation: 'Summarization reduces routing table size and complexity by combining adjacent routes into one entry.',
      },
    ],
    miniScenario: {
      prompt: 'You must design subnets for: Warehouse (50 hosts), Front Office (12 hosts), and a router link to the ISP (2 hosts), all from the 10.10.0.0/24 block.',
      task: 'Assign an appropriately sized subnet (CIDR) to each, allocating largest-to-smallest.',
    },
    recap:
      'VLSM matches subnet size to actual host needs instead of wasting addresses on a uniform size. Route summarization combines contiguous subnets into fewer, larger routing table entries for efficiency.',
    classroomAnswer:
      '"I size each subnet for what it actually needs, biggest requirement first — and where possible, I let routers summarize those subnets into one clean route upstream."',
  };

  NetReady.LESSONS['4-5'] = {
    id: '4-5',
    moduleId: 4,
    slug: 'subnetting-practice-lab',
    title: 'Subnetting Practice: Using the Calculator and Generator',
    estMinutes: 20,
    outcomes: [
      'Use the built-in Subnet Calculator to verify manual subnetting work instantly.',
      'Generate unlimited fresh subnetting practice problems with the Practice Generator.',
      'Build confidence solving CIDR problems from /24 through /30 under time pressure.',
    ],
    whyItMatters:
      'Understanding the theory is step one; building calculation speed under pressure is step two. This lesson connects everything from this module into deliberate, repeatable practice.',
    simpleEnglish:
      'This lesson does not introduce new theory — it is a practice lab. Use the interactive Subnet Calculator below to check any IP/CIDR combination instantly, and use the Practice Generator to create a fresh, randomized subnetting problem (with a full step-by-step solution) every time you need more reps.',
    taglish:
      'Wala nang bagong teorya dito — practice lab na ito. Gamitin mo ang Subnet Calculator para i-verify agad ang sagot mo, at gamitin ang Practice Generator para makakuha ng bagong random na problema kada gusto mong mag-ensayo — may kasama pang step-by-step solution kada isa, kaya kahit gaano karaming beses, hindi ka maubusan ng practice material.',
    analogy: {
      title: 'Flashcards na walang katapusan',
      text:
        'Isipin mo ang Practice Generator parang isang deck ng flashcards na hindi kailanman mauubos — kada i-click mo, may bagong tanong. Sa halip na mag-memorize ng iisang set ng 10 problema, marami kang makikitang variation, kaya mas totoong natetest ang pag-intindi mo, hindi lang ang memorya mo.',
    },
    howItWorks: [
      'The Subnet Calculator accepts any IP address and CIDR/mask, then instantly shows Network ID, Broadcast ID, usable host range, total hosts, and the binary breakdown.',
      'The Practice Generator randomly creates a new IP/CIDR combination on demand and lets you check your manual answer against a full worked solution.',
      'Use Study Mode first (see the solution steps to learn the pattern), then switch to timed self-quizzing once you feel confident.',
    ],
    visual: {
      type: 'demo',
      html: `<p class="diagram-caption">Open the <strong>Subnet Calculator</strong> and <strong>Subnetting Practice Generator</strong> from the Study Tools menu to use them alongside this lesson.</p>`,
    },
    realWorldExample:
      'Network engineers verify subnet plans with calculators constantly on the job — the goal is not to avoid tools forever, but to understand the math well enough to sanity-check any tool\'s output.',
    proTips: [
      'Set a personal goal: solve a /26, /27, /28, /29, and /30 problem correctly, by hand, in under 90 seconds each, before checking the calculator.',
      'Mix up which octet is "interesting" in your practice — do not only practice 4th-octet subnetting; try /20, /21, /22 problems that subnet within the 3rd octet too.',
    ],
    examAlert:
      'Performance-based subnetting questions reward speed and accuracy equally — practicing until the magic number method is automatic is the single highest-leverage thing you can do to raise your score.',
    beginnerMistakes: [
      'Relying on the calculator from the start instead of building manual fluency first.',
      'Only practicing "clean" /24-based problems and getting caught off guard by /20-/23 (3rd octet) problems.',
      'Stopping practice after getting one problem right instead of building repeated, spaced practice over several sessions.',
    ],
    keyTerms: [
      { term: 'Practice Generator', def: 'A tool that creates unlimited, randomized subnetting problems with full step-by-step solutions for repeated practice.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the main benefit of using a practice generator instead of a fixed worksheet of 10 problems?',
        options: [
          'It removes the need to understand subnetting theory.',
          'It provides unlimited, varied practice so you are tested on understanding, not memorized answers.',
          'It is faster than doing any manual subnetting.',
          'It only works for /24 networks.',
        ],
        correct: 1,
        explanation: 'Unlimited randomized problems prevent rote memorization of a fixed set and build genuine calculation fluency.',
      },
      {
        prompt: 'What is the recommended practice order for building subnetting skill?',
        options: [
          'Always use the calculator first, then guess the manual steps.',
          'Learn the pattern with worked solutions in Study Mode, then self-test under time pressure.',
          'Skip manual practice entirely once the calculator exists.',
          'Only practice /24-based problems.',
        ],
        correct: 1,
        explanation: 'Learning the worked pattern first, then testing yourself under time pressure, builds durable, exam-ready speed.',
      },
      {
        prompt: 'Why should you practice subnetting problems in octets other than the 4th (e.g., /21, /22)?',
        options: [
          'Those problems never appear on the real exam.',
          'The magic number method works the same way in any octet, and the exam is not limited to 4th-octet problems.',
          'They are impossible to calculate manually.',
          'Only /30 subnets are tested.',
        ],
        correct: 1,
        explanation: 'Network+ can test subnetting in any octet — practicing only 4th-octet problems leaves a real gap.',
      },
    ],
    miniScenario: {
      prompt: 'You want to check whether your manual answer for 172.20.64.0/20 is correct.',
      task: 'Open the Subnet Calculator, enter this IP/CIDR, and compare its Network ID and Broadcast ID against your own hand-calculated answer.',
    },
    recap:
      'This lesson is a practice lab: use the Subnet Calculator to verify answers instantly and the Practice Generator for unlimited, varied subnetting reps until the magic number method becomes automatic.',
    classroomAnswer:
      '"I don\'t just memorize a few practice problems — I use the generator to get fresh ones until the method is muscle memory."',
    interactiveToolId: 'subnet-calculator',
  };
}(window.NetReady));
