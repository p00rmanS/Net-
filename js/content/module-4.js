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

  NetReady.LESSONS['4-6'] = NetReady.lesson(4, {
    id: '4-6',
    slug: 'classful-addressing-and-special-ranges',
    title: 'Classful Addressing and Special IPv4 Ranges: Class A to E, Loopback, and Reserved Blocks',
    minutes: 12,
    outcomes: [
      `Identify the class of an IPv4 address from its first octet and its default mask.`,
      `Recall the private, loopback, APIPA, and multicast ranges.`,
      `Explain why classful addressing gave way to CIDR.`,
    ],
    why: `Even though modern networks use CIDR, the exam still expects you to recognize Class A, B, and C ranges and the special-purpose blocks on sight.`,
    simple: `Originally, IPv4 addresses were split into classes by their first octet. Class A (1 to 126) used a default mask of /8, Class B (128 to 191) used /16, and Class C (192 to 223) used /24. Class D (224 to 239) is multicast and Class E (240 to 255) is reserved for experimental use. 127.0.0.0/8 is reserved for loopback (127.0.0.1 is your own machine), which is why Class A skips from 126 to 128. Private (RFC 1918) ranges are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. APIPA addresses are 169.254.0.0/16. Classful addressing wasted many addresses because blocks came in only three sizes, so CIDR and VLSM replaced it with prefixes of any length.`,
    taglish: `Noon, hinati ang IPv4 sa mga class ayon sa unang octet. Class A (1 hanggang 126) ay /8, Class B (128 hanggang 191) ay /16, Class C (192 hanggang 223) ay /24. Ang Class D (224 hanggang 239) ay multicast; ang Class E (240 hanggang 255) ay experimental. Ang 127.0.0.0/8 ay loopback — 127.0.0.1 ang sarili mong computer, kaya lumaktaw ang Class A mula 126 papuntang 128. Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Ang APIPA ay 169.254.0.0/16. Maraming nasayang na address sa classful kaya pinalitan ng CIDR at VLSM.`,
    analogy: {
      title: 'Tatlong laki lang ng lupa',
      text: `Isipin na tatlong laki lang ng lote ang ibinebenta: malaking-malaki, malaki, at maliit. Kung kailangan mo ng medyo malaki lang, kailangan mo pa ring bilhin ang pinakamalaki at masasayang ang sobra. Ang CIDR ay pagbebenta ng lote sa eksaktong laki na kailangan mo.`,
    },
    steps: [
      `Class A: first octet 1 to 126, default mask 255.0.0.0 (/8), about 16.7 million addresses per network.`,
      `Class B: first octet 128 to 191, default mask 255.255.0.0 (/16), about 65,000 addresses per network.`,
      `Class C: first octet 192 to 223, default mask 255.255.255.0 (/24), 254 usable hosts.`,
      `Class D: 224 to 239, used for multicast. Class E: 240 to 255, reserved or experimental.`,
      `Loopback: 127.0.0.0/8. Pinging 127.0.0.1 tests the local TCP/IP stack and does not leave the machine. IPv6 loopback is ::1.`,
      `Private ranges: 10.0.0.0/8 (Class A), 172.16.0.0 to 172.31.255.255 (172.16.0.0/12, Class B range), 192.168.0.0/16 (Class C range). They are not routed on the public internet and need NAT to reach it.`,
      `Link-local (APIPA): 169.254.0.0/16. A host that cannot find a DHCP server assigns itself one. Shared address space 100.64.0.0/10 is used by carriers for carrier-grade NAT.`,
      `Special addresses: 0.0.0.0 means "this host" or the default route, 255.255.255.255 is the limited broadcast, and 192.0.2.0/24 and similar blocks are reserved for documentation examples.`,
      `Why classless: with CIDR and VLSM, an organization receives a prefix that fits its need (for example /22), preventing waste and shrinking routing tables through summarization.`,
    ],
    table: {
      label: 'Table of IPv4 classes',
      head: ['Class', 'First octet', 'Default mask', 'Use'],
      rows: [
        ['A', '1 to 126', '/8', 'Very large networks'],
        ['B', '128 to 191', '/16', 'Medium networks'],
        ['C', '192 to 223', '/24', 'Small networks'],
        ['D', '224 to 239', 'n/a', 'Multicast'],
        ['E', '240 to 255', 'n/a', 'Experimental'],
        ['Loopback', '127', '/8', 'Local host testing'],
      ],
      caption: 'The first octet gives the class at a glance.',
    },
    example: `A technician sees 172.20.4.9 on a printer and 172.32.4.9 on a laptop and wonders if both are private. 172.16.0.0 through 172.31.255.255 is private; 172.32.4.9 is public address space, so the laptop's address is a misconfiguration.`,
    tips: [
      `Memorize the boundaries: 126, 127 (loopback), 128, 191, 192, 223, 224, 239.`,
      `172.16 to 172.31 is the private block. 172.15 and 172.32 are NOT private.`,
      `169.254.x.x always signals a DHCP failure.`,
    ],
    exam: `Expect "What class is 150.10.1.1?" (B) and "Which range is private?" Also know loopback 127.0.0.1, APIPA 169.254.0.0/16, and multicast 224.0.0.0 to 239.255.255.255.`,
    mistakes: [
      `Forgetting that 127.x.x.x is not Class A usable space.`,
      `Assuming all of 172.x.x.x is private.`,
      `Using default classful masks on modern CIDR networks.`,
    ],
    terms: [
      { term: 'Classful addressing', def: `Original IPv4 scheme with fixed Class A, B, and C network sizes.` },
      { term: 'Loopback', def: `127.0.0.0/8 range used for testing the local host.` },
      { term: 'APIPA / link-local', def: `169.254.0.0/16 self-assigned address when DHCP fails.` },
      { term: 'RFC 1918', def: `Document defining the private IPv4 ranges.` },
      { term: 'CIDR', def: `Classless Inter-Domain Routing, prefixes of any length.` },
    ],
    checks: [
      {
        prompt: `Which class does the address 150.25.4.1 belong to?`,
        options: [`Class A`, `Class B`, `Class C`, `Class D`],
        correct: 1,
        explanation: `First octet 128 to 191 is Class B.`,
      },
      {
        prompt: `Which of these is NOT a private address?`,
        options: [`10.50.1.1`, `172.20.5.5`, `172.32.5.5`, `192.168.100.1`],
        correct: 2,
        explanation: `The private block is 172.16.0.0 to 172.31.255.255; 172.32.x.x is public.`,
      },
      {
        prompt: `What does pinging 127.0.0.1 test?`,
        options: [`The default gateway`, `The local TCP/IP stack`, `The DNS server`, `The ISP`],
        correct: 1,
        explanation: `The loopback address never leaves the host and verifies the local network stack.`,
      },
    ],
    mini: {
      prompt: `A host shows 169.254.88.12.`,
      task: `Name what this means and what to check next.`,
    },
    recap: `Know the classes by first octet, the default masks, the private, loopback, APIPA, and multicast ranges, and that CIDR replaced rigid classes to stop address waste.`,
    classroom: `"Una ang unang octet: 1-126 A, 128-191 B, 192-223 C. Ang 127 ay para sa sarili mo."`,
  });

  NetReady.LESSONS['4-7'] = NetReady.lesson(4, {
    id: '4-7',
    slug: 'nat-in-depth-static-dynamic-pat-port-forwarding-and-cgnat',
    title: 'NAT in Depth: Static, Dynamic, PAT, Port Forwarding, and CGNAT',
    minutes: 16,
    outcomes: [
      `Explain why NAT exists and how it translates addresses.`,
      `Compare static NAT, dynamic NAT, and PAT.`,
      `Use the inside local, inside global, outside local, and outside global terms.`,
      `Explain port forwarding, hairpin NAT, and carrier-grade NAT.`,
    ],
    why: `NAT and PAT are on every exam and in every home and office. They also cause real problems: servers that are unreachable from outside, VoIP that fails, and VPNs that break. Knowing the types and the translation table lets you predict and fix those issues.`,
    simple: `Private addresses such as 192.168.1.10 cannot be routed on the internet. NAT rewrites the source address of outgoing packets to a public address and keeps a table so the replies come back to the right device. PAT goes further and also changes port numbers, so thousands of private hosts can share one public address. To let the outside reach a server inside, you create a static mapping or a port forward.`,
    taglish: `Hindi pwedeng i-route sa internet ang private address. Pinapalitan ng NAT ang source address ng lumalabas na packet ng public address at itinatala sa table para makabalik ang sagot sa tamang device. Ang PAT ay pati port number ang pinapalitan kaya iisang public IP ang magagamit ng libu-libong host. Para maabot mula sa labas ang server, gumagamit ng static mapping o port forward.`,
    analogy: {
      title: 'Receptionist ng malaking kumpanya',
      text: `Isang pampublikong numero lang ang kumpanya. Kapag may tumawag palabas, itinatala ng receptionist kung sino ang tumawag at saang extension. Pagbalik ng sagot, ang talaan ang magsasabi kung kaninong mesa ito ihahatid. Ang port forward ay nakatakdang utos: "lahat ng tawag sa extension 80 ay sa web server."`,
    },
    steps: [
      `NAT conserves public IPv4 addresses and hides the internal addressing scheme. It is performed by a router or firewall at the network edge. NAT is not a security feature by itself: it only blocks unsolicited inbound traffic as a side effect of having no translation entry.`,
      `Static NAT: a permanent one-to-one mapping of an inside address to a public address, such as 192.168.10.5 to 203.0.113.5. It is used so a server is reachable from outside at a fixed address, and both directions work.`,
      `Dynamic NAT: many-to-many mapping from a pool of public addresses, assigned as needed to inside hosts. When the pool is exhausted, new hosts cannot connect, so the number of simultaneous users is limited by the pool size.`,
      `PAT (Port Address Translation, also NAT overload): many-to-one. All inside hosts share one public address and are told apart by the source port number. This is what home routers do. Each translation entry holds inside address, inside port, public address, and public port. It supports about 65,000 ports per public address and per protocol.`,
      `Terminology (Cisco): inside local is the private address of the inside host as seen on the inside; inside global is the public address that represents that host on the outside; outside global is the real address of the outside host; outside local is how the outside host appears to the inside network (usually the same as the outside global).`,
      `Port forwarding (destination NAT): an inbound rule that maps a public address and port to a private address and port, such as public TCP 443 to 192.168.1.50:443. Port triggering opens an inbound port temporarily after the inside host makes an outbound connection on a trigger port. A DMZ host on a home router forwards all unsolicited traffic to one device and is risky.`,
      `Hairpin NAT (NAT loopback, NAT reflection): lets an inside client reach an inside server by its public address. Without it, the request leaves, reaches the router, and the router cannot send it back out the same interface it came in on. Split DNS (internal name resolves to the private address) is the usual alternative.`,
      `CGNAT (carrier-grade NAT, NAT444, using 100.64.0.0/10 shared address space, RFC 6598): the ISP puts many customers behind one public IPv4 address. Customers cannot port-forward, and peer-to-peer apps, game hosting, and some VPNs have problems. A router WAN address in 100.64.0.0/10 is a clue that you are behind CGNAT.`,
      `Troubleshooting: protocols that carry IP addresses inside their data (older FTP active mode, SIP, H.323) need an ALG (application layer gateway) or helper. IPsec ESP has no port numbers and needs NAT-T (UDP 4500). Check the translation table, the timeouts, and double NAT (two routers in a row), which breaks port forwarding.`,
    ],
    deepDive: [
      {
        title: 'Reading a PAT translation table',
        text: `Three inside PCs browse the web through one public address 203.0.113.1. The router keeps one row per connection. The inside hosts all use ports such as 51000 but the router assigns unique public ports so replies can be matched.`,
        code: `Router# show ip nat translations
Pro Inside global        Inside local         Outside local        Outside global
tcp 203.0.113.1:1024     192.168.1.10:51000   198.51.100.7:443     198.51.100.7:443
tcp 203.0.113.1:1025     192.168.1.11:51000   198.51.100.7:443     198.51.100.7:443
tcp 203.0.113.1:1026     192.168.1.12:49200   93.184.216.34:80     93.184.216.34:80`,
        note: `Two PCs use the same inside port 51000, and the router tells them apart with public ports 1024 and 1025. When the table fills or timeouts expire, new connections fail.`,
      },
      {
        title: 'Configuring PAT and a port forward on Cisco IOS',
        text: `The first block overloads all of the 192.168.1.0/24 network onto the outside interface address. The static line forwards public TCP 443 to an internal web server.`,
        code: `interface Gi0/0
  ip nat outside
interface Gi0/1
  ip nat inside
access-list 1 permit 192.168.1.0 0.0.0.255
ip nat inside source list 1 interface Gi0/0 overload

ip nat inside source static tcp 192.168.1.50 443 interface Gi0/0 443`,
      },
    ],
    table: {
      label: 'NAT types compared',
      head: ['Type', 'Mapping', 'Typical use'],
      rows: [
        ['Static NAT', 'One to one, permanent', 'Servers that must be reachable'],
        ['Dynamic NAT', 'Many to many from a pool', 'Limited public address pool'],
        ['PAT / overload', 'Many to one by port', 'Home and office internet access'],
        ['Port forwarding', 'Public port to private host and port', 'Hosting a service behind NAT'],
        ['CGNAT', 'ISP-level PAT over 100.64.0.0/10', 'ISPs short of IPv4 addresses'],
      ],
      caption: 'Ports are what let one public address serve many private hosts.',
    },
    example: `A small business hosts a web server on 192.168.1.50. The router forwards public TCP 443 to it. Staff cannot reach the site by its public name from inside, so the administrator enables hairpin NAT and, later, creates an internal DNS record pointing to the private address. A new branch behind a CGNAT ISP cannot host anything, so it uses a VPN to a cloud relay instead.`,
    tips: [
      `One public IP for many private hosts equals PAT. A permanent one-to-one mapping equals static NAT.`,
      `A WAN address of 100.64.x.x to 100.127.x.x means CGNAT, so inbound port forwarding will not work.`,
      `NAT is not a firewall. Add real firewall rules.`,
    ],
    exam: `Know static, dynamic, and PAT, that PAT uses ports, what port forwarding does, that NAT hides internal addressing but does not replace a firewall, and the problems of double NAT and CGNAT.`,
    mistakes: [
      `Calling NAT a security control that replaces a firewall.`,
      `Port forwarding behind a second router without also forwarding on the first (double NAT).`,
      `Forgetting NAT-T when an IPsec VPN must cross a NAT device.`,
    ],
    terms: [
      { term: 'NAT', def: `Network Address Translation: rewriting IP addresses as packets cross a boundary.` },
      { term: 'PAT', def: `Port Address Translation: many hosts share one public address using different ports.` },
      { term: 'Port forwarding', def: `Static inbound rule mapping a public port to a private host.` },
      { term: 'Hairpin NAT', def: `Allows inside clients to reach an inside server using its public address.` },
      { term: 'CGNAT', def: `ISP-scale NAT that places many customers behind shared public addresses.` },
      { term: 'Inside global', def: `Public address that represents an inside host to the outside world.` },
      { term: 'ALG', def: `Application layer gateway: NAT helper that fixes addresses embedded in application data.` },
    ],
    commands: [
      { os: 'Cisco IOS', cmd: 'show ip nat translations', desc: `Displays the active NAT translation table.` },
      { os: 'Cisco IOS', cmd: 'show ip nat statistics', desc: `Shows hits, misses, and pool usage.` },
      { os: 'Cisco IOS', cmd: 'clear ip nat translation *', desc: `Clears dynamic translation entries.` },
    ],
    checks: [
      {
        prompt: `Which NAT type allows hundreds of inside hosts to share a single public IP address by using different port numbers?`,
        options: [`Static NAT`, `Dynamic NAT`, `PAT`, `NAT64`],
        correct: 2,
        explanation: `PAT (NAT overload) maps many inside hosts to one public address, distinguishing them by port.`,
      },
      {
        prompt: `A home router WAN interface shows the address 100.72.14.9. What does this most likely mean?`,
        options: [`The router has a static public address`, `The ISP uses carrier-grade NAT`, `The router uses APIPA`, `IPv6 is disabled`],
        correct: 1,
        explanation: `100.64.0.0/10 is shared address space used for CGNAT, so inbound port forwarding will not work.`,
      },
      {
        prompt: `Users inside the office cannot open the company web server using its public address, but outside users can. What feature fixes this?`,
        options: [`Hairpin NAT or split DNS`, `Link aggregation`, `PoE`, `VLAN trunking`],
        correct: 0,
        explanation: `Hairpin NAT (or an internal DNS record) lets inside clients reach an inside server through its public name.`,
      },
    ],
    mini: {
      prompt: `You forwarded TCP 443 on your home router to a server, but it is still unreachable from the internet. The router WAN IP is 100.66.5.20.`,
      task: `Explain why and suggest two workarounds.`,
    },
    recap: `Static NAT is one-to-one, dynamic NAT uses a pool, and PAT shares one public address by port. Port forwarding exposes an inside service, hairpin NAT fixes inside access by public name, and CGNAT (100.64.0.0/10) puts many customers behind one address. NAT is not a firewall.`,
    classroom: `"Static: isa-isa. Dynamic: pool. PAT: port ang pagkakaiba. 100.64 ang tanda ng CGNAT. Hindi firewall ang NAT."`,
  });

}(window.NetReady));
