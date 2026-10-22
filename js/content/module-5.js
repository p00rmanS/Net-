/**
 * content/module-5.js — Module 5: IPv6 Addressing
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  NetReady.LESSONS['5-1'] = {
    id: '5-1',
    moduleId: 5,
    slug: 'ipv6-format-and-abbreviation',
    title: 'IPv6 Format and Abbreviation Rules',
    estMinutes: 12,
    outcomes: [
      'Explain why IPv6 was created and how its address space compares to IPv4.',
      'Write a full IPv6 address in its expanded and abbreviated forms.',
      'Apply the zero-compression and leading-zero rules correctly.',
    ],
    whyItMatters:
      'IPv6 addresses look intimidating at first glance, but the abbreviation rules are simple, mechanical steps — once you know them, reading and writing IPv6 addresses becomes second nature.',
    simpleEnglish:
      'IPv6 was created because the world was running out of IPv4 addresses. An IPv6 address is 128 bits long (compared to IPv4\'s 32 bits), written as eight groups of four hexadecimal digits separated by colons. Two abbreviation rules make addresses shorter to write: leading zeros within a group can be dropped, and one single consecutive run of all-zero groups can be replaced with a double colon (::).',
    taglish:
      'Ginawa ang IPv6 dahil unti-unti nang naubos ang mga available na IPv4 addresses sa buong mundo — parang naubusan na ng available na "phone numbers." Ang IPv6 address ay mas mahaba, 128 bits, isinusulat bilang walong grupo ng apat na hexadecimal digits, pinaghihiwalay ng colon. May dalawang paraan para paikliin ito: puwede mong tanggalin ang mga leading zero sa loob ng isang grupo, at puwede mo palitan ng dalawang colon (::) ang isang sunod-sunod na grupo ng puro zeros — pero isang beses lang puwede gamitin ang :: sa buong address.',
    analogy: {
      title: 'Pag-iikli ng mahabang serial number gamit ang "skip" — minsan lang puwede',
      text:
        'Bago ang abbreviation rules, isipin mo muna kung bakit kailangan ng IPv6: ang IPv4 ay parang isang subdivision na may limitadong lote — kapag puno na, wala nang bagong pwedeng tumira, kaya kailangan ng bagong, mas malaking lungsod (IPv6). Pero ang mismong hamon dito ay ibang usapin: paano mo isusulat nang mabilis ang isang napakahabang address tulad ng 2001:0DB8:0000:0000:0000:FF00:0042:8329? Isipin mo itong parang isang mahabang serial number na kailangan mong i-report sa kausap mo. Una, puwede mong tanggalin ang mga zero sa unahan ng bawat grupo — kaya nagiging DB8 na lang ang 0DB8, dahil hindi naman kailangan ang zero bago ang unang makabuluhang digit, tulad ng pagsulat ng "May 5" sa halip na "May 05." Pangalawa, kung may sunod-sunod na grupo na puro-zero (0000:0000:0000), puwede mo itong palitan ng iisang shortcut na "at marami pang zero dito" (ang :: sa IPv6) — parang paggamit ng "atbp." kapag paulit-ulit na ang sinasabi mo. Pero may catch: isang beses mo lang puwedeng gamitin ang shortcut na iyon sa buong address, kasi kung dalawang beses mong gagamitin, hindi na malalaman ng kausap mo kung ilang zero group talaga ang itinatago ng bawat "atbp." — magugulo sila kung saan hahati ang dalawang bahaging tinanggal mo.',
    },
    howItWorks: [
      'A full IPv6 address has 8 groups of 4 hex digits each, e.g., 2001:0db8:0000:0000:0000:ff00:0042:8329.',
      'Rule 1 (leading zeros): within each group, leading zeros can be dropped — 0db8 becomes db8, 0000 becomes 0.',
      'Rule 2 (zero compression): one single consecutive run of all-zero groups can be replaced with :: — applying both rules to the example above gives 2001:db8::ff00:42:8329.',
      'The :: shorthand can only be used ONCE per address, because using it twice would make the number of hidden zero groups ambiguous.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="IPv6 address abbreviation example showing the expanded and compressed forms">
        <p class="diagram-caption">Expanded: 2001:0db8:0000:0000:0000:ff00:0042:8329</p>
        <p class="diagram-caption">Drop leading zeros: 2001:db8:0:0:0:ff00:42:8329</p>
        <p class="diagram-caption">Compress the zero run: <strong>2001:db8::ff00:42:8329</strong></p>
      </div>`,
    },
    realWorldExample:
      'When you check your network settings on a modern device, you will often see both a private IPv4 address (like 192.168.1.10) and a much longer IPv6 address — most home and mobile networks now run both side by side.',
    proTips: [
      'When decompressing an abbreviated address for a manual exercise, count the total groups present, then insert exactly enough zero groups at the :: position to reach 8 groups total.',
      'A loopback address in IPv6 (::1) is a perfect example of zero compression taken to its extreme — it expands to 0000:0000:0000:0000:0000:0000:0000:0001.',
    ],
    examAlert:
      'The exam will test whether you know :: can only appear once in a valid address — an address with two :: sequences is invalid and is a common "spot the error" trap.',
    beginnerMistakes: [
      'Using :: more than once in a single address (invalid — creates ambiguity).',
      'Forgetting that leading zeros can be dropped per group, but trailing zeros within a group cannot.',
      'Assuming IPv6 replaces IPv4 entirely overnight — in practice, most networks run both simultaneously for years (dual stack).',
    ],
    keyTerms: [
      { term: 'IPv6', def: 'Internet Protocol version 6 — a 128-bit addressing scheme created to solve IPv4 address exhaustion.' },
      { term: 'Hextet', def: 'One of the eight 16-bit (4 hex digit) groups that make up an IPv6 address.' },
      { term: 'Zero compression (::)', def: 'A shorthand that replaces one consecutive run of all-zero hextets, usable only once per address.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'How many bits make up an IPv6 address?',
        options: ['32', '64', '128', '256'],
        correct: 2,
        explanation: 'IPv6 addresses are 128 bits long, a massive increase over IPv4\'s 32 bits.',
      },
      {
        prompt: 'Why is using "::" twice in the same IPv6 address invalid?',
        options: [
          'It is actually allowed and common.',
          'It would make the number of hidden zero groups ambiguous.',
          'It exceeds the maximum address length.',
          'It is only invalid for loopback addresses.',
        ],
        correct: 1,
        explanation: 'Using :: more than once removes the ability to determine exactly how many zero groups were compressed at each location.',
      },
      {
        prompt: 'What is the abbreviated form of 2001:0db8:0000:0000:0000:0000:0000:0001?',
        options: ['2001:db8::1', '2001:0db8::0001', '2001:db8:0:1', '2001::db8::1'],
        correct: 0,
        explanation: 'Dropping leading zeros and compressing the consecutive zero run gives 2001:db8::1.',
      },
    ],
    miniScenario: {
      prompt: 'You are given the abbreviated address fe80::1a2b:3c4d.',
      task: 'Expand it back to its full 8-group form, showing all leading zeros restored.',
    },
    recap:
      'IPv6 uses 128-bit addresses written as eight hex groups. Leading zeros within a group can be dropped, and exactly one run of consecutive all-zero groups can be compressed with ::, never more than once per address.',
    classroomAnswer:
      '"IPv6 exists because we ran out of IPv4 space — and once you know the two abbreviation rules, reading these long addresses gets a lot less scary."',
  };

  NetReady.LESSONS['5-2'] = {
    id: '5-2',
    moduleId: 5,
    slug: 'ipv6-address-types',
    title: 'IPv6 Address Types: Global Unicast, Link-Local, and More',
    estMinutes: 12,
    outcomes: [
      'Identify an IPv6 address type from its prefix.',
      'Explain the purpose of a link-local address and why every IPv6 interface has one.',
      'Explain why IPv6 has no broadcast address and what replaces it.',
    ],
    whyItMatters:
      'Just like IPv4 has private, public, and special-use ranges, IPv6 has its own categories — recognizing them on sight is essential for both configuration and troubleshooting.',
    simpleEnglish:
      'IPv6 defines several address types by their prefix. Global unicast addresses (2000::/3) are the IPv6 equivalent of public IPv4 addresses, routable on the internet. Link-local addresses (fe80::/10) are automatically assigned to every IPv6 interface and only work on the local segment, never routed. Unique local addresses (fc00::/7) are the IPv6 equivalent of private IPv4 addresses. Multicast addresses (ff00::/8) replace broadcast entirely — IPv6 has no broadcast address. Anycast addresses look like unicast addresses but are assigned to multiple devices, with traffic reaching the nearest one. The loopback address is ::1.',
    taglish:
      'May iba\'t-ibang klase ng IPv6 address depende sa prefix nito. Ang global unicast (2000::/3) ay parang public IPv4 — ruroutable sa buong internet. Ang link-local (fe80::/10) ay awtomatikong nakakabit sa bawat IPv6 interface, pero gumagana lang ito sa loob ng parehong local network, hindi ito ruroutable palabas. Ang unique local (fc00::/7) ay parang private IPv4 — panloob lang na gamit. Ang multicast (ff00::/8) ang kapalit ng broadcast — wala nang broadcast sa IPv6, multicast na lang ang ginagamit. Ang anycast parang unicast address pero binibigay sa maraming device, at ang pinakamalapit na device ang sasagot.',
    analogy: {
      title: 'Internal extension vs. buong mundong tatawagan',
      text:
        'Isipin mo ang link-local address parang internal extension number sa opisina — gumagana lang ito sa loob mismo ng gusali, hindi mo ito magagamit para tumawag sa ibang bansa. Ang global unicast naman parang buong international phone number — puwede mong tawagan kahit saan sa mundo. Ang multicast parang isang "party line" na sinali lang ng mga interesadong makinig, hindi katulad ng broadcast na parang megaphone na naririnig ng lahat gusto man nila o hindi.',
    },
    howItWorks: [
      'Global unicast (2000::/3): publicly routable, the IPv6 equivalent of a public IPv4 address.',
      'Link-local (fe80::/10): auto-assigned to every IPv6-enabled interface at startup, used for on-link communication like neighbor discovery, never routed beyond the local segment.',
      'Unique local (fc00::/7): privately routable within an organization, similar in purpose to RFC 1918 private IPv4 ranges.',
      'Multicast (ff00::/8): delivers to a group of interested listeners; IPv6 eliminates broadcast entirely, relying on well-known multicast groups instead.',
      'Anycast: uses addresses from the unicast range but assigned to multiple devices; routing delivers traffic to the topologically nearest one.',
      'Loopback: ::1, equivalent to IPv4\'s 127.0.0.1, always refers to the local device itself.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Type</th><th>Prefix</th><th>Scope</th></tr></thead>
        <tbody>
          <tr><td>Global unicast</td><td>2000::/3</td><td>Internet-routable (like public IPv4)</td></tr>
          <tr><td>Link-local</td><td>fe80::/10</td><td>Local segment only, never routed</td></tr>
          <tr><td>Unique local</td><td>fc00::/7</td><td>Private, org-internal (like RFC 1918)</td></tr>
          <tr><td>Multicast</td><td>ff00::/8</td><td>Delivered to a subscribed group</td></tr>
          <tr><td>Loopback</td><td>::1</td><td>The local device itself</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'Every IPv6-capable device automatically has a link-local address the moment it powers on, even with no DHCPv6 server present — this is why IPv6 neighbor discovery and basic local connectivity work "out of the box."',
    proTips: [
      'When you see fe80:: at the start of an address, immediately think "local segment only, never leaves this network" — this recognition saves time on both the exam and real troubleshooting.',
      'Because IPv6 eliminates broadcast, some Layer 2 attacks that rely on broadcast traffic (like certain DHCP starvation techniques) work differently or are mitigated in IPv6 environments.',
    ],
    examAlert:
      'A very common exam trap: asking what a device with only a link-local address (fe80::) can and cannot do — it can communicate on the local segment but cannot reach the wider internet without a global address.',
    beginnerMistakes: [
      'Assuming IPv6 has a broadcast address just like IPv4 — it does not; multicast replaces that function entirely.',
      'Confusing link-local (fe80::, local-only) with global unicast (2000::, internet-routable).',
      'Forgetting every IPv6 interface gets a link-local address automatically, regardless of whether any other configuration has happened yet.',
    ],
    keyTerms: [
      { term: 'Global unicast address', def: 'A publicly routable IPv6 address, the equivalent of a public IPv4 address.' },
      { term: 'Link-local address', def: 'An automatically assigned IPv6 address (fe80::/10) valid only on the local network segment.' },
      { term: 'Unique local address', def: 'A privately routable IPv6 address (fc00::/7), the equivalent of a private IPv4 range.' },
      { term: 'Anycast', def: 'An address type shared by multiple devices, where traffic is delivered to the nearest one.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Which IPv6 address type is automatically assigned to every interface and only works on the local segment?',
        options: ['Global unicast', 'Link-local', 'Unique local', 'Multicast'],
        correct: 1,
        explanation: 'Link-local addresses (fe80::/10) are auto-assigned and never routed beyond the local segment.',
      },
      {
        prompt: 'What replaces broadcast traffic entirely in IPv6?',
        options: ['Anycast', 'Multicast', 'Link-local', 'Loopback'],
        correct: 1,
        explanation: 'IPv6 has no broadcast address at all — multicast handles all group-delivery scenarios instead.',
      },
      {
        prompt: 'Which IPv6 prefix indicates a globally routable address, similar in role to a public IPv4 address?',
        options: ['fe80::/10', 'fc00::/7', '2000::/3', 'ff00::/8'],
        correct: 2,
        explanation: '2000::/3 is the global unicast range, routable across the public internet.',
      },
    ],
    miniScenario: {
      prompt: 'A device shows only an address starting with fe80:: and cannot reach any website.',
      task: 'Explain why this is expected behavior, and name what type of address the device would additionally need to reach the internet.',
    },
    recap:
      'IPv6 categorizes addresses by prefix: global unicast (2000::/3, internet-routable), link-local (fe80::/10, local-only, auto-assigned), unique local (fc00::/7, private), multicast (ff00::/8, replaces broadcast entirely), and loopback (::1).',
    classroomAnswer:
      '"I read the prefix first — fe80 means local-only, 2000 means globally routable — and I remember IPv6 has no broadcast at all, only multicast."',
  };

  NetReady.LESSONS['5-3'] = {
    id: '5-3',
    moduleId: 5,
    slug: 'slaac-dhcpv6-and-neighbor-discovery',
    title: 'SLAAC, DHCPv6, and Neighbor Discovery',
    estMinutes: 11,
    outcomes: [
      'Explain how SLAAC allows a device to self-configure an IPv6 address.',
      'Differentiate stateless and stateful DHCPv6.',
      'Describe what the Neighbor Discovery Protocol replaces from IPv4.',
    ],
    whyItMatters:
      'IPv6 was designed to reduce dependence on manual configuration and DHCP servers — SLAAC is one of its most distinctive features compared to IPv4.',
    simpleEnglish:
      'SLAAC (Stateless Address Autoconfiguration) lets a device generate its own global IPv6 address using information from a router advertisement, without needing a DHCP server at all. DHCPv6 can work in two modes: stateless (providing only extra options like DNS servers, while SLAAC still handles the address) or stateful (assigning the full address itself, similar to how DHCP works in IPv4). Neighbor Discovery Protocol (NDP) replaces ARP and some other IPv4 functions, handling address resolution, router discovery, and duplicate address detection.',
    taglish:
      'Ang SLAAC (Stateless Address Autoconfiguration) ay nagbibigay-daan sa isang device na gumawa ng sarili niyang global IPv6 address, base sa impormasyon mula sa router advertisement — hindi na kailangan ng DHCP server. Ang DHCPv6 naman may dalawang paraan: stateless (extra info lang tulad ng DNS server ang ibinibigay, ang address mismo ay galing pa rin sa SLAAC) at stateful (buong address mismo ang ibinibigay ng DHCPv6 server, parang tradisyunal na DHCP sa IPv4). Ang Neighbor Discovery Protocol (NDP) naman ang kapalit ng ARP sa IPv6 — ginagamit ito para malaman ang MAC address ng kapitbahay, mahanap ang router, at siguraduhing walang duplicate na address sa network.',
    analogy: {
      title: 'Sariling pagbuo ng address kumpara sa pagpapaassign',
      text:
        'Isipin mo ang SLAAC parang ikaw mismo ang gumagawa ng sarili mong ID number base sa pattern na ibinigay ng barangay (router advertisement) — hindi mo na kailangan pumila sa opisina (DHCP server) para makakuha ng numero. Ang stateful DHCPv6 naman parang tradisyunal na pagpila — pumupunta ka sa opisina at binibigyan ka nila ng eksaktong numero na gagamitin mo.',
    },
    howItWorks: [
      'A router periodically sends Router Advertisement (RA) messages containing the network prefix and configuration flags.',
      'With SLAAC, a receiving device combines the advertised prefix with a locally generated interface identifier to form its own global unicast address.',
      'The device then performs Duplicate Address Detection (DAD) using NDP to confirm no other device on the segment already has that address.',
      'Stateless DHCPv6 supplements SLAAC by providing additional configuration details (like DNS server addresses) without assigning the address itself.',
      'Stateful DHCPv6 assigns the full address and tracks lease state, much like traditional IPv4 DHCP.',
      'NDP also handles router discovery (finding the default gateway) and neighbor resolution (the IPv6 equivalent of ARP\'s IP-to-MAC lookup).',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="SLAAC process: router sends advertisement, device generates its own address, then performs duplicate address detection">
        <ol class="journey-list">
          <li><strong>Router</strong> sends a Router Advertisement with the network prefix</li>
          <li><strong>Device</strong> combines the prefix with its own interface identifier to build an address</li>
          <li><strong>Device</strong> performs Duplicate Address Detection via NDP</li>
          <li><strong>Device</strong> optionally queries stateless DHCPv6 for extras like DNS servers</li>
        </ol>
      </div>`,
    },
    realWorldExample:
      'A phone joining a Wi-Fi network with IPv6 enabled often gets online instantly via SLAAC, generating its own address from the router\'s advertisement, with no DHCP request ever needed for the address itself.',
    proTips: [
      'If DNS servers are not being received correctly on an otherwise-working SLAAC network, check whether the router is advertising stateless DHCPv6 options — this is a common real-world gap.',
      'NDP operates using ICMPv6 messages, which is why ICMPv6 must not be blanket-blocked by a firewall on an IPv6 network — doing so breaks core address configuration and resolution.',
    ],
    examAlert:
      'Expect a direct comparison question between stateless DHCPv6 (options only) and stateful DHCPv6 (full address assignment) — memorize which one still relies on SLAAC for addressing.',
    beginnerMistakes: [
      'Assuming SLAAC and DHCPv6 are mutually exclusive — stateless DHCPv6 commonly works alongside SLAAC.',
      'Forgetting that NDP replaces ARP\'s role in IPv6, not just router discovery.',
      'Blocking ICMPv6 entirely on a firewall, not realizing this breaks Neighbor Discovery and basic IPv6 functionality.',
    ],
    keyTerms: [
      { term: 'SLAAC', def: 'Stateless Address Autoconfiguration — lets a device generate its own IPv6 address from a router advertisement.' },
      { term: 'Router Advertisement (RA)', def: 'A message sent by an IPv6 router announcing the network prefix and configuration options.' },
      { term: 'DAD (Duplicate Address Detection)', def: 'A process using NDP to confirm a newly formed address is not already in use on the segment.' },
      { term: 'NDP (Neighbor Discovery Protocol)', def: 'An IPv6 protocol that replaces ARP and handles address resolution, router discovery, and duplicate address detection.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What does SLAAC allow a device to do?',
        options: [
          'Automatically generate its own global IPv6 address without needing a DHCP server.',
          'Convert IPv6 traffic into IPv4 traffic.',
          'Block ICMPv6 traffic automatically.',
          'Manually assign static addresses to other devices.',
        ],
        correct: 0,
        explanation: 'SLAAC lets a device build its own address using router advertisement information, without a DHCP server.',
      },
      {
        prompt: 'In stateless DHCPv6, what does the DHCPv6 server actually provide?',
        options: [
          'The full IPv6 address itself.',
          'Only additional configuration details like DNS servers; the address still comes from SLAAC.',
          'Nothing — stateless DHCPv6 does not exist.',
          'A MAC address for the device.',
        ],
        correct: 1,
        explanation: 'Stateless DHCPv6 supplements SLAAC-assigned addresses with extra options, without assigning the address itself.',
      },
      {
        prompt: 'What does NDP replace from the IPv4 world?',
        options: ['DHCP entirely', 'ARP (and adds router discovery and duplicate address detection)', 'DNS', 'TCP'],
        correct: 1,
        explanation: 'NDP takes over ARP\'s address-resolution role in IPv6 and adds router discovery and duplicate address detection.',
      },
    ],
    miniScenario: {
      prompt: 'A laptop on an IPv6 network has a valid global address and can reach websites, but fails to resolve any domain names.',
      task: 'Explain which configuration piece is most likely missing, and how stateless DHCPv6 could resolve it.',
    },
    recap:
      'SLAAC lets devices self-generate addresses from router advertisements. Stateless DHCPv6 adds extra options (like DNS) on top of SLAAC; stateful DHCPv6 assigns the full address like traditional DHCP. NDP replaces ARP and handles router discovery and duplicate address detection.',
    classroomAnswer:
      '"With SLAAC the device builds its own address from the router\'s advertisement — DHCPv6 either just tops that up with extras, or in stateful mode, takes over addressing completely."',
  };

  NetReady.LESSONS['5-4'] = {
    id: '5-4',
    moduleId: 5,
    slug: 'dual-stack-and-ipv6-troubleshooting',
    title: 'Dual Stack, Tunneling, Translation, and IPv6 Troubleshooting',
    estMinutes: 11,
    outcomes: [
      'Explain what dual stack means and why most networks use it today.',
      'Differentiate tunneling from translation as IPv4/IPv6 coexistence strategies.',
      'Apply IPv6-specific troubleshooting commands and interpret common failure patterns.',
    ],
    whyItMatters:
      'IPv4 and IPv6 will coexist for years to come — knowing how they interoperate, and how to troubleshoot each independently, is a practical daily skill.',
    simpleEnglish:
      'Dual stack means a device or network runs both IPv4 and IPv6 simultaneously, which is the most common real-world approach today. Tunneling encapsulates IPv6 traffic inside IPv4 packets (or vice versa) to cross networks that only support one protocol. Translation (like NAT64) converts between IPv4 and IPv6 addressing so devices using different protocol versions can still communicate. Troubleshooting IPv6 uses many of the same concepts as IPv4, but with IPv6-specific commands and address ranges to recognize.',
    taglish:
      'Ang dual stack ang pinaka-karaniwang setup ngayon — pareho gumagana ang IPv4 at IPv6 nang sabay-sabay sa parehong device o network. Ang tunneling naman ginagamit kapag kailangan dumaan ang IPv6 traffic sa isang network na IPv4-lang ang suporta — binabalot lang ang IPv6 packet sa loob ng IPv4 packet, parang naglalagay ka ng liham sa loob ng sobre. Ang translation (tulad ng NAT64) naman aktwal na kinukumberte ang address mula IPv4 papunta IPv6 o kabaligtaran, para magkaintindihan ang dalawang magkaibang device.',
    analogy: {
      title: 'Dalawang wika, sabay gamitin',
      text:
        'Isipin mo ang dual stack parang isang taong marunong mag-Tagalog at mag-Ingles — kaya niyang makipag-usap gamit ang alinman sa dalawa depende sa kausap. Ang tunneling naman parang paglalagay ng liham na naka-Ingles sa loob ng sobreng naka-address sa Tagalog — ang laman mismo (IPv6) hindi nagbago, binalot lang siya sa panlabas na "wika" (IPv4) para makarating. Ang translation naman parang may interpreter sa pagitan ng dalawang taong magkaibang wika — aktwal na kinukumberte ang mensahe.',
    },
    howItWorks: [
      'Dual stack: both IPv4 and IPv6 addresses/routing are configured and active at the same time on a device or network; applications use whichever protocol is appropriate for the destination.',
      'Tunneling (e.g., 6to4, Teredo): encapsulates IPv6 packets inside IPv4 packets so they can cross IPv4-only infrastructure, then de-encapsulates at the far end.',
      'Translation (e.g., NAT64/DNS64): actively converts addressing between IPv4 and IPv6, allowing an IPv6-only client to reach an IPv4-only server, or vice versa.',
      'Common IPv6 troubleshooting commands mirror IPv4 equivalents: ping uses ICMPv6, traceroute works similarly, and address configuration is verified with commands like `ipconfig` (Windows) or `ip -6 addr` (Linux).',
      'A device with only a link-local address (fe80::) but no global address indicates SLAAC/DHCPv6 has not completed successfully — the very first thing to check.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Strategy</th><th>What It Does</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>Dual stack</td><td>Runs IPv4 and IPv6 simultaneously</td><td>Most modern home/office networks</td></tr>
          <tr><td>Tunneling</td><td>Encapsulates one protocol inside the other</td><td>6to4, Teredo</td></tr>
          <tr><td>Translation</td><td>Converts addressing between protocols</td><td>NAT64 / DNS64</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A mobile carrier running an IPv6-only network uses NAT64/DNS64 translation so its IPv6-only phones can still reach older IPv4-only websites that have not adopted IPv6.',
    proTips: [
      'When troubleshooting "no internet" on a dual-stack device, check IPv4 and IPv6 connectivity separately — one protocol can be broken while the other works fine, which is a very common real-world scenario.',
      'Seeing only a link-local IPv6 address on a device is the IPv6 equivalent of seeing a 169.254.x.x APIPA address in IPv4 — both signal that automatic configuration did not fully complete.',
    ],
    examAlert:
      'The exam may describe a device that can reach IPv6 sites but not IPv4 sites (or vice versa) on a dual-stack network — recognize this as a protocol-specific failure, not a general connectivity failure.',
    beginnerMistakes: [
      'Assuming a working IPv4 connection guarantees IPv6 also works on a dual-stack device (or vice versa) — they must be diagnosed independently.',
      'Confusing tunneling (wrapping one protocol inside another, unchanged) with translation (actively converting between protocols).',
      'Forgetting that a link-local-only IPv6 address is a diagnostic clue, just like APIPA is for IPv4.',
    ],
    keyTerms: [
      { term: 'Dual stack', def: 'Running both IPv4 and IPv6 simultaneously on the same device or network.' },
      { term: 'Tunneling', def: 'Encapsulating one protocol\'s packets inside another protocol to cross incompatible network infrastructure.' },
      { term: 'NAT64 / DNS64', def: 'A translation mechanism allowing IPv6-only clients to reach IPv4-only resources.' },
    ],
    commands: [
      { os: 'Windows', cmd: 'ipconfig /all', desc: 'Shows both IPv4 and IPv6 addressing details for all adapters.' },
      { os: 'Linux/macOS', cmd: 'ip -6 addr show', desc: 'Displays IPv6 addresses assigned to network interfaces.' },
      { os: 'Windows/Linux', cmd: 'ping -6 <host>', desc: 'Forces ping to use IPv6 specifically.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What does "dual stack" mean?',
        options: [
          'A device runs only IPv6.',
          'A device or network runs both IPv4 and IPv6 simultaneously.',
          'Two separate physical networks stacked on top of each other.',
          'A backup power supply configuration.',
        ],
        correct: 1,
        explanation: 'Dual stack means both protocol versions are active and usable at the same time.',
      },
      {
        prompt: 'What is the key difference between tunneling and translation?',
        options: [
          'They are the same thing with different names.',
          'Tunneling encapsulates one protocol inside another unchanged; translation actively converts addressing between protocols.',
          'Tunneling only works with IPv4; translation only works with IPv6.',
          'Translation is faster than tunneling in every case.',
        ],
        correct: 1,
        explanation: 'Tunneling wraps packets for transport without changing them; translation actively converts between address families.',
      },
      {
        prompt: 'A dual-stack device can reach IPv6 websites but not IPv4 websites. What should you conclude?',
        options: [
          'The entire network connection is down.',
          'This is a protocol-specific IPv4 issue; IPv6 connectivity is proven to be working.',
          'IPv6 must also be broken since IPv4 is broken.',
          'The device has no valid MAC address.',
        ],
        correct: 1,
        explanation: 'Since IPv6 works, the underlying physical/link connectivity is fine — the fault is specific to the IPv4 configuration or path.',
      },
    ],
    miniScenario: {
      prompt: 'A user on a dual-stack network reports intermittent website failures, with some sites loading fine and others timing out.',
      task: 'Describe the first diagnostic step you would take to determine whether this is an IPv4-specific or IPv6-specific issue.',
    },
    recap:
      'Dual stack runs IPv4 and IPv6 together, the most common real-world approach. Tunneling encapsulates one protocol inside another; translation (NAT64/DNS64) actively converts between them. IPv6 troubleshooting mirrors IPv4 concepts but needs protocol-specific commands and diagnosis.',
    classroomAnswer:
      '"On a dual-stack device, I never assume IPv4 and IPv6 share a single point of failure — I test each one independently before concluding anything."',
  };

  NetReady.LESSONS['5-5'] = NetReady.lesson(5, {
    id: '5-5',
    slug: 'eui-64-and-ipv6-interface-ids',
    title: 'IPv6 Interface IDs: EUI-64, Privacy Addresses, and Address Planning',
    minutes: 12,
    outcomes: [
      `Explain how EUI-64 builds an interface ID from a MAC address.`,
      `Explain why privacy extensions and random interface IDs exist.`,
      `Plan a simple IPv6 prefix layout using /48, /64, and subnet IDs.`,
    ],
    why: `SLAAC is on the exam, and the EUI-64 step is the classic "how does the host build its own IPv6 address?" question. IPv6 planning questions ask about /64 and /48 sizes too.`,
    simple: `An IPv6 address is 128 bits: usually a 64-bit network prefix plus a 64-bit interface ID. With SLAAC, a host takes the prefix advertised by the router and creates its own interface ID. EUI-64 does it from the 48-bit MAC address: split the MAC in half, insert FFFE in the middle, and flip the 7th bit of the first byte (the universal/local bit). Because the MAC is embedded, EUI-64 addresses allow tracking a device across networks, so modern operating systems use random, temporary interface IDs (privacy extensions). In planning, ISPs commonly give a site a /48 or /56; subnets are almost always /64 so SLAAC works, which leaves 16 bits (/48) for subnet IDs, or 65,536 subnets.`,
    taglish: `Ang IPv6 address ay 128 bits: karaniwang 64-bit na network prefix at 64-bit na interface ID. Sa SLAAC, kinukuha ng host ang prefix mula sa router at gumagawa siya ng sarili niyang interface ID. Sa EUI-64, hinahati ang 48-bit na MAC sa gitna, ipinapasok ang FFFE, at binabaligtad ang ika-7 bit ng unang byte. Dahil nakasama ang MAC, nasusundan ang device kahit saan, kaya gumagamit ang modernong OS ng random na temporary ID (privacy extensions). Sa pagpaplano, /48 o /56 ang ibinibigay ng ISP sa site; /64 ang bawat subnet; sa /48 may 16 bits para sa subnet ID, kaya 65,536 na subnet.`,
    analogy: {
      title: 'Apelyido ng barangay at pangalan ng bahay',
      text: `Ang prefix ay pangalan ng barangay na ibinibigay ng router. Ang interface ID ay pangalan ng bahay na ikaw mismo ang gumagawa. Sa EUI-64, gumagamit ka ng serial number ng bahay mo (MAC) — pero kung gusto mong hindi ka masundan, mag-imbento ka ng random na pangalan bawat ilang oras (privacy).`,
    },
    steps: [
      `Structure: 3 parts for a typical global unicast address: global routing prefix (from the ISP, for example /48), subnet ID (16 bits for a /48), and interface ID (64 bits).`,
      `EUI-64 step 1: take the MAC, for example 00:1A:2B:3C:4D:5E.`,
      `EUI-64 step 2: split into 00:1A:2B and 3C:4D:5E and insert FF:FE in the middle: 00:1A:2B:FF:FE:3C:4D:5E.`,
      `EUI-64 step 3: flip the 7th bit (universal/local bit) of the first byte. 00 (00000000) becomes 02 (00000010). Result: 021A:2BFF:FE3C:4D5E as the interface ID.`,
      `Full address example: prefix 2001:db8:acad:1::/64 plus that interface ID gives 2001:db8:acad:1:21a:2bff:fe3c:4d5e (leading zeros dropped).`,
      `Privacy extensions (RFC 4941): the host uses random, temporary interface IDs for outgoing connections and rotates them, so a device cannot be tracked by MAC. Windows and most mobile OSes enable this by default.`,
      `Link-local addresses (fe80::/10) also use an interface ID, generated by EUI-64 or randomly, and exist on every IPv6 interface automatically.`,
      `Planning: a /64 is the standard subnet size (SLAAC requires /64). A /48 gives 65,536 /64 subnets; a /56 gives 256. Use a consistent scheme such as one subnet ID per VLAN.`,
      `DHCPv6 can still assign addresses (stateful) or just options such as DNS (stateless) when the router's RA flags say so.`,
    ],
    table: {
      label: 'Table of IPv6 address parts',
      head: ['Part', 'Size', 'Source'],
      rows: [
        ['Global routing prefix', 'Commonly /48 or /56', 'ISP'],
        ['Subnet ID', '16 bits (in a /48)', 'You'],
        ['Interface ID', '64 bits', 'EUI-64, random, or DHCPv6'],
        ['Link-local', 'fe80::/10', 'Auto on every interface'],
      ],
      caption: 'Prefix from the router, interface ID from the host.',
    },
    example: `A security audit notices that a laptop's IPv6 address keeps the same last 64 bits at home, in a hotel, and at work, showing the MAC-based interface ID. Enabling privacy extensions makes the laptop rotate random interface IDs, so it cannot be followed across networks.`,
    tips: [
      `The "FF:FE" in the middle and the flipped bit are the two giveaways of EUI-64 on the exam.`,
      `SLAAC needs a /64. A /80 or /96 will not work for it.`,
      `/64 per VLAN is the standard rule, even for tiny point-to-point links in most designs.`,
    ],
    exam: `Know the EUI-64 steps (split, insert FFFE, flip the 7th bit), that SLAAC uses a /64, and that privacy extensions use random IDs. Also remember there are 65,536 /64 subnets in a /48.`,
    mistakes: [
      `Forgetting to flip the universal/local bit.`,
      `Using subnets smaller than /64 on SLAAC networks.`,
      `Assuming IPv6 hosts always use their real MAC in the address; modern OSes randomize it.`,
    ],
    terms: [
      { term: 'EUI-64', def: `Method that builds a 64-bit interface ID from a 48-bit MAC address.` },
      { term: 'Interface ID', def: `The lower 64 bits of an IPv6 address identifying the host on its subnet.` },
      { term: 'Privacy extensions', def: `Feature that creates random temporary interface IDs to prevent tracking.` },
      { term: 'Subnet ID', def: `Bits between the site prefix and the interface ID used to number subnets.` },
      { term: 'SLAAC', def: `Stateless address autoconfiguration using router advertisements.` },
    ],
    checks: [
      {
        prompt: `Which two changes does EUI-64 make to a MAC address?`,
        options: [
          `Inserts FFFE in the middle and flips the 7th bit`,
          `Adds the router ID and removes the first byte`,
          `Reverses all bits`,
          `Encrypts it with a hash`,
        ],
        correct: 0,
        explanation: `EUI-64 inserts FF:FE between the two halves of the MAC and flips the universal/local bit.`,
      },
      {
        prompt: `What prefix length must a subnet use for SLAAC to work?`,
        options: [`/48`, `/56`, `/64`, `/96`],
        correct: 2,
        explanation: `SLAAC expects a 64-bit interface ID, so the subnet must be /64.`,
      },
      {
        prompt: `Why do modern operating systems use privacy extensions?`,
        options: [`To save addresses`, `To prevent tracking by a MAC-derived interface ID`, `To speed up routing`, `To disable DHCPv6`],
        correct: 1,
        explanation: `Random temporary interface IDs prevent a device from being tracked across networks.`,
      },
    ],
    mini: {
      prompt: `A site has been assigned 2001:db8:100::/48 and has 40 VLANs.`,
      task: `How many /64 subnets are available and does it fit?`,
    },
    recap: `IPv6 addresses combine a prefix and a 64-bit interface ID. EUI-64 builds the ID from the MAC with FFFE and a flipped bit; privacy extensions randomize it. Plan /64 subnets from a /48 or /56.`,
    classroom: `"Prefix galing sa router, interface ID galing sa host — at kung ayaw mong masundan, random."`,
  });
}(window.NetReady));
