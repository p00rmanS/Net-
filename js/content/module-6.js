/**
 * content/module-6.js — Module 6: Ports, Protocols, and Network Services
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  NetReady.LESSONS['6-1'] = {
    id: '6-1',
    moduleId: 6,
    slug: 'tcp-vs-udp-and-handshake',
    title: 'TCP vs. UDP and the Three-Way Handshake',
    estMinutes: 13,
    outcomes: [
      'Explain the key difference between TCP and UDP.',
      'Walk through the TCP three-way handshake step by step.',
      'Match common applications to whether they use TCP or UDP, and explain why.',
    ],
    whyItMatters:
      'Almost everything you do online rides on one of these two Transport layer protocols — knowing which one, and why, explains a huge share of real-world network behavior.',
    simpleEnglish:
      'TCP (Transmission Control Protocol) is connection-oriented and reliable: it establishes a connection first, confirms every piece of data arrives, and resends anything lost. UDP (User Datagram Protocol) is connectionless and fast: it just sends data without setup or delivery guarantees. TCP connections begin with a three-way handshake: SYN, SYN-ACK, ACK.',
    taglish:
      'Ang TCP ay parang registered mail — may kumpirmasyon muna bago magpadala, at sinusubaybayan kung dumating ba talaga ang bawat piraso. Ang UDP naman parang basta pagsabit ng liham sa koreo nang walang tracking — mabilis, pero walang garantiya na dumating. Ang three-way handshake ng TCP ay parang pagbati bago mag-usap: "Kumusta?" (SYN), "Kumusta, ako\'y okay!" (SYN-ACK), "Sige, simulan na natin" (ACK) — saka pa lang talaga nagsisimula ang totoong usapan.',
    analogy: {
      title: 'Registered mail vs. basta pagsabit ng sulat',
      text:
        'Isipin mo ang TCP parang registered mail sa koreo — kailangan mong pumirma, may resibo, at may tracking kung dumating ba talaga. Kapag may nawala, ipapadala ulit. Ang UDP naman parang pag-post lang ng sulat sa mailbox nang walang tracking — mas mabilis at mas simple, pero kung nawala, wala kang malalaman at wala nang automatic na pagpapadala ulit.',
    },
    howItWorks: [
      'TCP establishes a connection via the three-way handshake: the client sends SYN (synchronize), the server replies SYN-ACK (synchronize-acknowledge), and the client responds ACK (acknowledge) — only then does data transfer begin.',
      'TCP tracks sequence numbers for every byte sent, allowing the receiver to detect missing or out-of-order data and request retransmission.',
      'TCP session teardown uses a four-step FIN/ACK exchange (each side independently signals it is finished sending).',
      'UDP sends datagrams immediately with no handshake, no guaranteed delivery, and no built-in retransmission — any reliability must be handled by the application itself, if needed.',
      'Because of this, TCP suits applications that need complete, ordered data (web pages, file transfers, email), while UDP suits applications that prioritize speed over perfection (video calls, live streaming, DNS lookups).',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="TCP three-way handshake: client sends SYN, server responds SYN-ACK, client responds ACK">
        <ol class="journey-list">
          <li><strong>Client &rarr; Server:</strong> SYN ("Can we talk?")</li>
          <li><strong>Server &rarr; Client:</strong> SYN-ACK ("Yes, and can you hear me?")</li>
          <li><strong>Client &rarr; Server:</strong> ACK ("Yes — let's begin.")</li>
        </ol>
        <p class="diagram-caption">Only after this exchange does actual application data start flowing.</p>
      </div>`,
    },
    realWorldExample:
      'A video call uses UDP (via RTP) because a slightly glitchy, dropped video frame is better than a call that freezes waiting to retransmit a lost packet — but a file download uses TCP because every byte must arrive intact.',
    proTips: [
      'When you see a scenario about an application that "cannot tolerate any data loss," think TCP. When you see "speed matters more than perfection," think UDP.',
      'Memorize the three-way handshake message order (SYN, SYN-ACK, ACK) — it appears constantly in packet-capture and troubleshooting questions.',
    ],
    examAlert:
      'A classic exam distractor swaps the handshake order or claims UDP performs a handshake — UDP performs NO handshake at all; this is one of its defining characteristics.',
    beginnerMistakes: [
      'Assuming UDP is simply "worse" than TCP — it is a deliberate design tradeoff, ideal when speed matters more than guaranteed delivery.',
      'Forgetting that TCP\'s reliability comes with overhead (handshake, acknowledgments, retransmissions), which UDP skips entirely.',
      'Mixing up the handshake step order (it is always SYN, then SYN-ACK, then ACK, never a different sequence).',
    ],
    keyTerms: [
      { term: 'TCP', def: 'Transmission Control Protocol — connection-oriented, reliable, ordered delivery via a three-way handshake.' },
      { term: 'UDP', def: 'User Datagram Protocol — connectionless, fast, no delivery guarantees.' },
      { term: 'Three-way handshake', def: 'The SYN, SYN-ACK, ACK exchange that establishes a TCP connection before data transfer.' },
      { term: 'Sequence number', def: 'A number TCP assigns to bytes of data so the receiver can detect loss or reordering.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the correct order of messages in the TCP three-way handshake?',
        options: ['ACK, SYN, SYN-ACK', 'SYN, SYN-ACK, ACK', 'SYN-ACK, SYN, ACK', 'ACK, SYN-ACK, SYN'],
        correct: 1,
        explanation: 'The handshake always proceeds SYN, then SYN-ACK, then ACK, establishing the connection before data flows.',
      },
      {
        prompt: 'Why would a live video call typically use UDP instead of TCP?',
        options: [
          'UDP is more secure than TCP.',
          'Speed matters more than guaranteed delivery — a dropped frame is preferable to a frozen call waiting for retransmission.',
          'UDP always uses less bandwidth than TCP.',
          'Video calls cannot technically function over TCP at all.',
        ],
        correct: 1,
        explanation: 'Real-time applications favor UDP\'s speed and lack of retransmission delay over TCP\'s guaranteed-but-slower delivery.',
      },
      {
        prompt: 'Which statement correctly describes UDP?',
        options: [
          'It performs a simplified two-step handshake.',
          'It performs no handshake and offers no delivery guarantee.',
          'It guarantees ordered delivery like TCP.',
          'It is only used for email protocols.',
        ],
        correct: 1,
        explanation: 'UDP is connectionless by design — no handshake, no built-in delivery guarantee.',
      },
    ],
    miniScenario: {
      prompt: 'An application needs to transfer a financial report where every byte must arrive correctly, in order, with no corruption.',
      task: 'Name which Transport layer protocol you would choose and explain why in one sentence.',
    },
    recap:
      'TCP is connection-oriented and reliable, starting every session with a SYN, SYN-ACK, ACK handshake. UDP is connectionless and fast, with no handshake or delivery guarantee. The choice between them is a deliberate tradeoff between reliability and speed.',
    classroomAnswer:
      '"If the data absolutely has to arrive intact, I reach for TCP and its handshake — if speed matters more than perfection, like a live call, UDP is the better fit."',
  };

  NetReady.LESSONS['6-2'] = {
    id: '6-2',
    moduleId: 6,
    slug: 'dns-records-and-resolution',
    title: 'DNS: Records, Resolution, and the Lookup Process',
    estMinutes: 13,
    outcomes: [
      'Explain the step-by-step process of resolving a domain name to an IP address.',
      'Identify common DNS record types and what each one stores.',
      'Recognize DNS-related troubleshooting symptoms.',
    ],
    whyItMatters:
      'DNS quietly runs behind almost everything on the internet — when it breaks, the internet "feels broken" even though every cable and router is working perfectly.',
    simpleEnglish:
      'DNS (Domain Name System) translates human-readable domain names into IP addresses. When you type a domain, your device checks its local cache, then asks a configured DNS resolver, which may in turn query root, TLD, and authoritative name servers until it finds the answer. Common DNS record types include A (IPv4 address), AAAA (IPv6 address), CNAME (alias to another name), MX (mail server), TXT (arbitrary text, often for verification/security), and NS (name server for a domain).',
    taglish:
      'Ang DNS ay parang phonebook ng internet — pinapalitan nito ang mahirap tandaang IP address ng madaling tandaang pangalan (halimbawa, google.com). Kapag nag-type ka ng domain, una, titingnan muna ng device mo kung meron na siyang naka-save (cache). Kung wala, magtatanong siya sa DNS resolver, na maaaring magtanong pa sa iba\'t-ibang antas ng mga name server (root, TLD, authoritative) hanggang mahanap ang sagot. Ang A record ay para sa IPv4 address, AAAA para sa IPv6, CNAME ay parang "alyas" papunta sa ibang pangalan, MX ay para malaman kung saang mail server dapat ipadala ang email, at TXT ay para sa iba\'t-ibang teksto, madalas ginagamit para sa verification.',
    analogy: {
      title: 'Paghahanap ng tao sa malaking siyudad, isa-isang tatanungin hanggang sa tamang barangay hall',
      text:
        'Isipin mo naghahanap ka ng eksaktong address ng isang taong "google.com" ang pangalan, sa loob ng napakalaking siyudad. Una, tinitingnan mo muna ang sarili mong tandaan — baka na-search mo na ito kamakailan (local cache). Kung wala kang natatandaan, tatanong ka sa isang taong laging may alam, ang iyong "tagapayo" (DNS resolver). Hindi rin alam agad ng tagapayo mo ang eksaktong address, pero alam niyang tanungin ang punong himpilan ng buong siyudad (root name server) — sasabihin lang nito kung aling distrito ang dapat puntahan (halimbawa, distrito ng ".com," ang TLD server). Sa distritong iyon, may isang barangay hall na eksaktong nakakaalam ng lahat tungkol dito — ang authoritative name server — at doon mo makukuha ang totoong sagot: puwedeng "narito ang eksaktong bahay niya" (A/AAAA record), o "hindi na siya dito, doon na siya sa kabilang pangalan" (CNAME), o "kung gusto mong magpadala ng sulat, dito dapat ipadala" (MX record), o kaya "narito ang verification note niya" (TXT record). Kapag natapos ang buong paghahanap, itatago mo na ang sagot sa sarili mong tandaan (na-cache) para hindi mo na kailangan ulitin ang buong proseso sa susunod.',
    },
    howItWorks: [
      'The device first checks its local DNS cache (and the hosts file) for a recent answer.',
      'If not cached, it queries its configured DNS resolver (often provided by the ISP or manually set, like a public resolver).',
      'The resolver may query a root name server, which points to the correct TLD (top-level domain, like .com) name server, which points to the authoritative name server for that specific domain.',
      'The authoritative name server returns the actual record (e.g., the A record with the IP address), which flows back to the original device and gets cached for future use.',
      'Common record types: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail exchange), TXT (text/verification), NS (name server), PTR (reverse lookup, IP to name).',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="DNS resolution chain from device to resolver to root, TLD, and authoritative name servers">
        <ol class="journey-list">
          <li><strong>Device</strong> checks local cache — if found, done.</li>
          <li><strong>DNS Resolver</strong> is queried if not cached.</li>
          <li><strong>Root name server</strong> points to the correct TLD server.</li>
          <li><strong>TLD name server</strong> (e.g., .com) points to the authoritative server.</li>
          <li><strong>Authoritative name server</strong> returns the actual record.</li>
        </ol>
      </div>`,
    },
    realWorldExample:
      'When a company migrates its website to a new host, it updates the A record for its domain — until DNS caches expire everywhere (based on the record\'s TTL), some visitors may briefly still reach the old server.',
    proTips: [
      'TTL (Time to Live) on a DNS record controls how long resolvers are allowed to cache it — lower it before a planned migration to speed up the cutover.',
      'MX records commonly have a priority number — lower numbers are tried first, which is a frequent point of confusion for beginners expecting "higher is better."',
    ],
    examAlert:
      'Expect a question giving you a record type abbreviation (A, AAAA, MX, CNAME, TXT, NS, PTR) and asking what it stores — memorize this list cold, it is extremely high-yield.',
    beginnerMistakes: [
      'Confusing an A record (IPv4 address) with an AAAA record (IPv6 address) — the extra A\'s hint at the longer IPv6 address, a useful memory trick.',
      'Assuming DNS problems mean the whole network is down — often only name resolution is broken while IP-level connectivity works fine.',
      'Forgetting that a CNAME points to another domain name, not directly to an IP address.',
    ],
    keyTerms: [
      { term: 'DNS resolver', def: 'A server that performs the lookup process on behalf of a client device.' },
      { term: 'Authoritative name server', def: 'The server that holds the actual, definitive DNS records for a specific domain.' },
      { term: 'A record', def: 'A DNS record mapping a domain name to an IPv4 address.' },
      { term: 'MX record', def: 'A DNS record specifying which mail server handles email for a domain.' },
      { term: 'TTL (Time to Live)', def: 'How long a DNS record may be cached before it must be re-queried.' },
    ],
    commands: [
      { os: 'Windows', cmd: 'nslookup example.com', desc: 'Query DNS records for a domain manually.' },
      { os: 'Linux/macOS', cmd: 'dig example.com MX', desc: 'Query a specific record type (here, mail servers) for a domain.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Which DNS record type maps a domain name to an IPv6 address?',
        options: ['A', 'AAAA', 'CNAME', 'MX'],
        correct: 1,
        explanation: 'AAAA records store IPv6 addresses (the extra letters are a memory hint for the longer address).',
      },
      {
        prompt: 'What does an MX record specify?',
        options: [
          'The IPv4 address of a web server.',
          'Which mail server handles email for a domain.',
          'An alias pointing to another domain name.',
          'The name servers authoritative for a domain.',
        ],
        correct: 1,
        explanation: 'MX (Mail Exchange) records tell the internet where to deliver email for a domain.',
      },
      {
        prompt: 'What does a record\'s TTL control?',
        options: [
          'How many devices can query the record simultaneously.',
          'How long resolvers are allowed to cache the record before re-querying.',
          'The maximum size of the record\'s value.',
          'Whether the record uses TCP or UDP.',
        ],
        correct: 1,
        explanation: 'TTL (Time to Live) sets the caching duration for a DNS record.',
      },
    ],
    miniScenario: {
      prompt: 'A company is migrating its website to a new server next week and wants visitors to switch over as quickly as possible once the change goes live.',
      task: 'Explain what DNS setting they should adjust in advance, and why.',
    },
    recap:
      'DNS resolves domain names to IP addresses through a chain of resolvers, root servers, TLD servers, and authoritative servers. Common record types include A, AAAA, CNAME, MX, TXT, NS, and PTR — each storing a different kind of information.',
    classroomAnswer:
      '"DNS is just the internet\'s phonebook — and once you know the record types (A, AAAA, MX, CNAME...) you can read almost any DNS-related question at a glance."',
  };

  NetReady.LESSONS['6-3'] = {
    id: '6-3',
    moduleId: 6,
    slug: 'dhcp-dora-process',
    title: 'DHCP: The DORA Process',
    estMinutes: 11,
    outcomes: [
      'Recite the four steps of the DHCP DORA process in order.',
      'Explain what information a DHCP server typically provides beyond an IP address.',
      'Identify common DHCP-related troubleshooting symptoms.',
    ],
    whyItMatters:
      'DHCP is the reason most devices "just work" the moment they connect to a network — understanding its handshake explains a huge share of "why can\'t this device get online" tickets.',
    simpleEnglish:
      'DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and network settings to devices. The process follows four steps, remembered as DORA: Discover (client broadcasts a request), Offer (a server responds with an available address), Request (client formally asks for that specific address), and Acknowledge (server confirms the assignment). Beyond an IP address, DHCP typically also provides the subnet mask, default gateway, and DNS server addresses.',
    taglish:
      'Ang DHCP ang dahilan kung bakit "basta na lang gumagana" ang mga device pagka-konekta sa network, walang kailangan i-type na settings. Sumusunod ito sa apat na hakbang, tinatawag na DORA: Discover (sumisigaw ang bagong device, "may DHCP server ba dito?"), Offer (may sumasagot na server na may alok na address), Request (opisyal na hihingin ng client ang specific na address na iyon), at Acknowledge (kukumpirmahin ng server). Bukod sa IP address, karaniwan ding ibinibigay ng DHCP ang subnet mask, default gateway, at DNS server.',
    analogy: {
      title: 'Pagpapaupa ng kwarto sa boarding house',
      text:
        'Isipin mo ang DHCP parang bagong boarder na dumating sa isang boarding house nang walang reservation. Sisigaw siya, "May bakanteng kwarto ba dito?" (Discover). Sasagot ang caretaker, "Oo, meron akong Room 5" (Offer). Sasabihin ng boarder, "Sige, gusto ko ng Room 5" (Request). At kukumpirmahin ng caretaker, "Sige, Room 5 na iyan, heto ang susi" (Acknowledge) — saka pa lang talaga siya makakapasok.',
    },
    howItWorks: [
      'Discover: the client, having no IP address yet, broadcasts a DHCPDISCOVER message to find any available DHCP server.',
      'Offer: one or more DHCP servers respond with a DHCPOFFER, proposing an available IP address and lease terms.',
      'Request: the client broadcasts a DHCPREQUEST formally asking to accept one specific offer (also used to renew an existing lease).',
      'Acknowledge: the server responds with a DHCPACK, finalizing the assignment; the client can now use the address, gateway, and DNS settings provided.',
      'Each assignment comes with a lease time; the client must renew before it expires or risk losing the address.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="DHCP DORA process: Discover, Offer, Request, Acknowledge">
        <ol class="journey-list">
          <li><strong>D</strong>iscover — client broadcasts a request for any DHCP server</li>
          <li><strong>O</strong>ffer — a server proposes an available address</li>
          <li><strong>R</strong>equest — client formally asks for that address</li>
          <li><strong>A</strong>cknowledge — server confirms the assignment</li>
        </ol>
      </div>`,
    },
    realWorldExample:
      'When a laptop connects to office Wi-Fi and instantly gets online with no manual configuration, the entire DORA exchange just completed in a fraction of a second in the background.',
    proTips: [
      'If a device shows a 169.254.x.x (APIPA) address, the DORA process failed somewhere — start by checking whether the DHCP server is reachable and has available leases.',
      'DHCP reservations let you guarantee a specific device always gets the same IP address (by MAC address) while still benefiting from automatic configuration.',
    ],
    examAlert:
      'Memorize "DORA" (Discover, Offer, Request, Acknowledge) exactly in order — this sequence is one of the most frequently and literally tested facts in all of Network+.',
    beginnerMistakes: [
      'Mixing up the order of Offer and Request (Discover always comes first, then Offer, then Request, then Acknowledge).',
      'Forgetting DHCP provides more than just an IP address — subnet mask, gateway, and DNS servers are typically included too.',
      'Assuming a DHCP-assigned address never changes — leases expire and can be renewed with a different address if the original is no longer available.',
    ],
    keyTerms: [
      { term: 'DHCP', def: 'Dynamic Host Configuration Protocol — automatically assigns IP addresses and network settings.' },
      { term: 'DORA', def: 'The four-step DHCP process: Discover, Offer, Request, Acknowledge.' },
      { term: 'Lease', def: 'The time period a DHCP-assigned address remains valid before requiring renewal.' },
      { term: 'DHCP reservation', def: 'A configuration that always assigns the same IP address to a specific device based on its MAC address.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What does the "O" in DORA stand for?',
        options: ['Open', 'Offer', 'Overwrite', 'Optimize'],
        correct: 1,
        explanation: 'DORA stands for Discover, Offer, Request, Acknowledge — the "O" is Offer.',
      },
      {
        prompt: 'Besides an IP address, what else does DHCP typically provide?',
        options: [
          'A MAC address for the device.',
          'The subnet mask, default gateway, and DNS server addresses.',
          'A permanent hostname that never changes.',
          'The device\'s physical location.',
        ],
        correct: 1,
        explanation: 'DHCP commonly bundles subnet mask, gateway, and DNS server settings along with the IP address.',
      },
      {
        prompt: 'A device shows a 169.254.x.x address. What does this suggest about DHCP?',
        options: [
          'DHCP succeeded normally.',
          'The DORA process failed to complete, so the device self-assigned a link-local address.',
          'The device intentionally chose a static address.',
          'DNS resolution failed.',
        ],
        correct: 1,
        explanation: 'An APIPA address (169.254.x.x) indicates the device could not complete DHCP and fell back to self-assignment.',
      },
    ],
    miniScenario: {
      prompt: 'You want a specific office printer to always receive the same IP address, but still want it configured automatically rather than manually.',
      task: 'Name the DHCP feature that solves this, and explain briefly how it works.',
    },
    recap:
      'DHCP automates IP configuration through the DORA process: Discover, Offer, Request, Acknowledge. Beyond an address, it typically provides subnet mask, gateway, and DNS settings, all governed by a renewable lease.',
    classroomAnswer:
      '"DORA — Discover, Offer, Request, Acknowledge — and once you know that order, DHCP troubleshooting is just figuring out which step broke."',
  };

  NetReady.LESSONS['6-4'] = {
    id: '6-4',
    moduleId: 6,
    slug: 'common-application-protocols',
    title: 'Common Application Protocols and Their Ports',
    estMinutes: 14,
    outcomes: [
      'Match common application protocols to their default port numbers.',
      'Differentiate secure and insecure versions of common protocols.',
      'Explain the practical difference between FTP, SFTP, and TFTP.',
    ],
    whyItMatters:
      'Port numbers are the addressing system within a single device — knowing them cold lets you read firewall rules, packet captures, and troubleshooting output fluently.',
    simpleEnglish:
      'Application protocols each use a well-known default port so devices know which service to connect to. HTTP (port 80) and HTTPS (port 443) serve web pages, the latter encrypted with TLS. SSH (port 22) provides secure remote command-line access, replacing the unencrypted Telnet (port 23). FTP (ports 20/21) transfers files unencrypted; SFTP (port 22, over SSH) and FTPS add encryption; TFTP (port 69) is a simple, unauthenticated file transfer used for things like network device firmware. Email uses SMTP (port 25 or 587) to send, and POP3 (port 110) or IMAP (port 143) to retrieve.',
    taglish:
      'Bawat application protocol may sariling "default na pinto" (port number) para malaman ng device kung anong klaseng serbisyo ang kokonektahin. Ang HTTP (port 80) at HTTPS (port 443) ay para sa website — naka-encrypt ang HTTPS gamit ang TLS, hindi ang HTTP. Ang SSH (port 22) ay secure na paraan ng remote access, kapalit ng lumang Telnet (port 23) na hindi naka-encrypt kaya delikado. Ang FTP (ports 20/21) naglilipat ng files pero walang encryption; ang SFTP (gumagamit ng SSH sa port 22) at FTPS ay may encryption na. Ang TFTP (port 69) naman simpleng file transfer na walang authentication, ginagamit madalas sa pag-load ng firmware sa mga network device. Sa email, ang SMTP (port 25 o 587) ang nagpapadala, habang ang POP3 (110) o IMAP (143) ang kumukuha ng email mula sa server.',
    analogy: {
      title: 'Bawat serbisyo, sariling pintuan sa gusali',
      text:
        'Isipin mo ang isang malaking gusali (ang device mo) na may maraming pintuan, bawat isa may sariling numero at trabaho — Pinto 80 para sa website, Pinto 22 para sa secure na remote access, Pinto 25 para sa pagpapadala ng sulat. Kapag alam mo kung aling pinto ang tamang gamitin, mas mabilis at mas organisado ang biyahe ng iyong data papasok o palabas ng gusali.',
    },
    howItWorks: [
      'HTTP (80) / HTTPS (443): serve web content; HTTPS adds TLS encryption on top of the same HTTP semantics.',
      'SSH (22): encrypted remote command-line access; also tunnels SFTP and secure copy (SCP).',
      'Telnet (23): unencrypted remote command-line access — considered insecure and largely replaced by SSH.',
      'FTP (20 data / 21 control): unencrypted file transfer; SFTP (over SSH, port 22) and FTPS (FTP + TLS) add encryption.',
      'TFTP (69, UDP): a stripped-down, unauthenticated file transfer protocol, commonly used to push firmware/configuration to network devices.',
      'SMTP (25 or 587 for authenticated submission): sends email between servers or from a client to a server.',
      'POP3 (110): downloads email to a single device, typically removing it from the server. IMAP (143): manages email on the server, syncing across multiple devices.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Protocol</th><th>Port</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td>HTTP / HTTPS</td><td>80 / 443</td><td>Web traffic (unencrypted / encrypted)</td></tr>
          <tr><td>SSH</td><td>22</td><td>Encrypted remote command-line access</td></tr>
          <tr><td>Telnet</td><td>23</td><td>Unencrypted remote command-line access (legacy)</td></tr>
          <tr><td>FTP</td><td>20 / 21</td><td>Unencrypted file transfer</td></tr>
          <tr><td>TFTP</td><td>69</td><td>Simple, unauthenticated file transfer</td></tr>
          <tr><td>SMTP</td><td>25 / 587</td><td>Sending email</td></tr>
          <tr><td>POP3 / IMAP</td><td>110 / 143</td><td>Retrieving email (download vs. sync)</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A network administrator pushing a configuration update to dozens of switches overnight might use TFTP for its simplicity, accepting the security tradeoff because it happens only on a trusted, isolated management network.',
    proTips: [
      'Build a personal drill habit: cover the port column and quiz yourself on this table daily until instant recall — the Port Trainer tool on this platform is built exactly for this.',
      'When comparing POP3 and IMAP, remember: POP3 "downloads and often deletes," IMAP "syncs and keeps" — that framing sticks better than the raw acronyms.',
    ],
    examAlert:
      'Port numbers are among the single highest-yield memorization items on the entire exam — expect direct "which port does X use" questions across multiple domains, not just this module.',
    beginnerMistakes: [
      'Confusing FTP\'s two ports (20 for data, 21 for control) as if it only used one.',
      'Assuming Telnet is still an acceptable choice for remote access — it sends everything, including passwords, in plaintext.',
      'Mixing up POP3 and IMAP\'s behavior regarding whether mail stays on the server.',
    ],
    keyTerms: [
      { term: 'Well-known port', def: 'A standardized default port number (0-1023) associated with a specific service.' },
      { term: 'TLS', def: 'Transport Layer Security — the encryption protocol underlying HTTPS and other secured services.' },
      { term: 'SFTP', def: 'SSH File Transfer Protocol — encrypted file transfer running over SSH on port 22.' },
    ],
    commands: [
      { os: 'Windows/Linux', cmd: 'ssh user@host', desc: 'Establish an encrypted remote command-line session.' },
      { os: 'Windows/Linux', cmd: 'curl -I https://example.com', desc: 'Fetch just the HTTP headers from a web server to check its response.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Which port does SSH use by default?',
        options: ['21', '22', '23', '25'],
        correct: 1,
        explanation: 'SSH uses port 22 for encrypted remote access and secure file transfer (SFTP).',
      },
      {
        prompt: 'What is the key practical difference between POP3 and IMAP?',
        options: [
          'POP3 encrypts email; IMAP does not.',
          'POP3 typically downloads and removes mail from the server; IMAP syncs and keeps mail on the server across devices.',
          'They are functionally identical.',
          'IMAP is only used for sending mail, never receiving.',
        ],
        correct: 1,
        explanation: 'POP3 is download-oriented (often single-device); IMAP keeps mail synced on the server for multi-device access.',
      },
      {
        prompt: 'Why is Telnet considered insecure compared to SSH?',
        options: [
          'Telnet uses a higher port number.',
          'Telnet transmits data, including credentials, in plaintext with no encryption.',
          'Telnet only works over UDP.',
          'Telnet cannot be used for command-line access at all.',
        ],
        correct: 1,
        explanation: 'Telnet lacks encryption entirely, exposing credentials and data to anyone who can observe the traffic.',
      },
    ],
    miniScenario: {
      prompt: 'A user wants to check their email from both their phone and laptop, and expects read/unread status to stay in sync across both.',
      task: 'Recommend POP3 or IMAP for this use case, and explain why in one sentence.',
    },
    recap:
      'Each application protocol has a well-known default port: HTTP/HTTPS (80/443), SSH (22), Telnet (23, insecure), FTP (20/21), TFTP (69), SMTP (25/587), POP3 (110), IMAP (143). Knowing these cold is one of the highest-yield exam skills.',
    classroomAnswer:
      '"Every service has its own default door number — once those are memorized, half of troubleshooting is just checking whether the right door is open."',
  };

  NetReady.LESSONS['6-5'] = {
    id: '6-5',
    moduleId: 6,
    slug: 'directory-management-realtime-protocols',
    title: 'Directory, Management, and Real-Time Protocols',
    estMinutes: 12,
    outcomes: [
      'Explain the purpose of LDAP, SNMP, and syslog.',
      'Identify SIP and RTP\'s roles in a VoIP call.',
      'Explain why accurate time synchronization (NTP) matters for network security and operations.',
    ],
    whyItMatters:
      'These protocols run quietly behind the scenes of enterprise IT — directory lookups, device monitoring, centralized logging, and voice/video calls — and show up constantly in both real jobs and the exam.',
    simpleEnglish:
      'LDAP (port 389, or LDAPS on 636 for encrypted) queries and manages directory services, like a company\'s list of user accounts (e.g., Active Directory). SNMP (port 161, traps on 162) monitors and manages network devices, collecting statistics and alerting on issues. Syslog (port 514) is a standard for forwarding log messages to a central server for storage and analysis. SIP (port 5060, or 5061 secured) sets up and tears down VoIP/video calls, while RTP actually carries the voice/video media once the call is established. NTP (port 123) synchronizes clocks across devices.',
    taglish:
      'Ang LDAP (port 389, o LDAPS sa 636 kung naka-encrypt) ay ginagamit para mag-query at mamahala ng directory service, tulad ng listahan ng mga user account sa isang kumpanya (halimbawa, Active Directory). Ang SNMP (port 161, traps sa 162) ay para sa pag-monitor at pamamahala ng mga network device — kinokolekta nito ang statistics at nagbibigay ng alerto kapag may problema. Ang syslog (port 514) ay standard na paraan ng pagpapadala ng log messages papunta sa isang sentral na server para sa storage at pagsusuri. Ang SIP (port 5060, o 5061 kung secure) ang nagse-setup at nagtatapos ng VoIP o video call, habang ang RTP naman ang aktwal na nagdadala ng boses o video kapag ongoing na ang usapan. Ang NTP (port 123) naman ang nag-sync ng oras sa lahat ng device.',
    analogy: {
      title: 'Telepono operator vs. aktwal na usapan',
      text:
        'Isipin mo ang SIP parang operator na nag-aayos ng tawag — siya ang nagse-set up kung sino ang tatawagan, kung kailan magsisimula, at kung kailan matatapos ang tawag. Ang RTP naman ang aktwal na boses na naririnig mo habang nag-uusap kayo — magkaiba ang trabaho nila kahit magkasama sila sa parehong tawag. Ang syslog naman parang isang central filing cabinet kung saan lahat ng ahensya (mga device) nagpapadala ng kanilang mga ulat (logs) para may isang lugar na titingnan kapag may imbestigasyon.',
    },
    howItWorks: [
      'LDAP allows applications to query directory information (usernames, group memberships, permissions); LDAPS adds TLS encryption to protect these queries.',
      'SNMP uses "managers" that poll "agents" on network devices for status information, and devices can also send unsolicited SNMP traps to alert on specific events.',
      'Syslog centralizes log collection from many devices into one server, essential for security monitoring, auditing, and troubleshooting across a whole network.',
      'A VoIP call\'s signaling (who is calling whom, ringing, hanging up) is handled by SIP; once connected, the actual audio/video stream flows over RTP, typically using UDP for speed.',
      'NTP keeps device clocks synchronized to a common, accurate time source — critical because mismatched timestamps break log correlation, certificate validation, and authentication protocols that rely on time windows.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Protocol</th><th>Port</th><th>Role</th></tr></thead>
        <tbody>
          <tr><td>LDAP / LDAPS</td><td>389 / 636</td><td>Directory service queries (e.g., Active Directory)</td></tr>
          <tr><td>SNMP / Trap</td><td>161 / 162</td><td>Device monitoring and management</td></tr>
          <tr><td>Syslog</td><td>514</td><td>Centralized log forwarding</td></tr>
          <tr><td>SIP / SIP-TLS</td><td>5060 / 5061</td><td>VoIP/video call setup and teardown</td></tr>
          <tr><td>RTP</td><td>(dynamic)</td><td>Carries actual voice/video media</td></tr>
          <tr><td>NTP</td><td>123</td><td>Clock synchronization</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A SOC analyst investigating an incident relies on syslog to correlate events across firewalls, servers, and switches — but that correlation only works if every device\'s clock is accurately synchronized via NTP; otherwise the timeline of events becomes unreliable.',
    proTips: [
      'Whenever you see "who called whom, and when did the call start/end" think SIP; whenever you see "the actual voice/video packets" think RTP.',
      'Always deploy NTP before deploying centralized logging — mismatched clocks make even perfect logs useless for investigation.',
    ],
    examAlert:
      'Expect a scenario distinguishing SIP (signaling) from RTP (media) in a VoIP troubleshooting question — this pairing is tested very literally and frequently.',
    beginnerMistakes: [
      'Confusing SIP (call setup/teardown) with RTP (the actual audio/video stream) — they serve completely different roles in the same call.',
      'Underestimating NTP\'s importance — inaccurate time silently breaks log analysis, security certificate validation, and some authentication schemes.',
      'Forgetting syslog\'s value is centralization — logs scattered across dozens of individual devices are far harder to correlate during an investigation.',
    ],
    keyTerms: [
      { term: 'LDAP', def: 'Lightweight Directory Access Protocol — queries and manages directory services like Active Directory.' },
      { term: 'SNMP', def: 'Simple Network Management Protocol — monitors and manages network devices.' },
      { term: 'Syslog', def: 'A standard protocol for forwarding log messages to a centralized server.' },
      { term: 'SIP', def: 'Session Initiation Protocol — sets up, manages, and tears down VoIP/video calls.' },
      { term: 'RTP', def: 'Real-time Transport Protocol — carries the actual voice/video media of a call.' },
      { term: 'NTP', def: 'Network Time Protocol — synchronizes clocks across devices.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'In a VoIP call, which protocol is responsible for actually carrying the voice audio once the call is connected?',
        options: ['SIP', 'RTP', 'LDAP', 'SNMP'],
        correct: 1,
        explanation: 'RTP carries the real-time media (audio/video); SIP only handles setup and teardown signaling.',
      },
      {
        prompt: 'Why is NTP considered critical for security investigations?',
        options: [
          'It encrypts all network traffic automatically.',
          'Accurate, synchronized clocks are necessary for correlating log events across multiple devices.',
          'It replaces the need for syslog entirely.',
          'It only matters for VoIP call quality.',
        ],
        correct: 1,
        explanation: 'Without synchronized time, timestamps across different devices cannot be reliably correlated during an investigation.',
      },
      {
        prompt: 'What is the primary purpose of SNMP?',
        options: [
          'Encrypting email traffic.',
          'Monitoring and managing network devices, including alerting via traps.',
          'Resolving domain names to IP addresses.',
          'Setting up VoIP calls.',
        ],
        correct: 1,
        explanation: 'SNMP is designed specifically for polling device status and receiving alert traps from network equipment.',
      },
    ],
    miniScenario: {
      prompt: 'A VoIP call connects successfully but the audio never comes through, even though the call shows as "active."',
      task: 'Identify which protocol (SIP or RTP) is most likely the source of the problem, and explain your reasoning.',
    },
    recap:
      'LDAP queries directory services, SNMP monitors network devices, syslog centralizes logging, SIP sets up VoIP calls while RTP carries the actual media, and NTP keeps clocks synchronized — a quiet but critical foundation for security and operations.',
    classroomAnswer:
      '"SIP is the operator setting up the call, RTP is the actual voice you hear — and none of my logs mean anything for an investigation unless NTP keeps every device\'s clock in sync."',
  };

  NetReady.LESSONS['6-6'] = {
    id: '6-6',
    moduleId: 6,
    slug: 'nat-proxies-load-balancers-cdns',
    title: 'NAT, PAT, Proxies, Load Balancers, and CDNs',
    estMinutes: 13,
    outcomes: [
      'Differentiate NAT from PAT.',
      'Explain what a proxy server and a load balancer each accomplish.',
      'Explain how a CDN improves content delivery performance.',
    ],
    whyItMatters:
      'These are the "traffic management" technologies that make the modern internet scalable and address-efficient — nearly every home network and every large website relies on at least one of them.',
    simpleEnglish:
      'NAT (Network Address Translation) allows private IP addresses to communicate with the public internet by translating them to a public address. PAT (Port Address Translation), the most common form of NAT, lets many internal devices share a single public IP address by tracking each connection with a unique port number. A proxy server sits between clients and the internet, forwarding requests on their behalf (often for content filtering, caching, or anonymity). A load balancer distributes incoming traffic across multiple servers to improve performance and reliability. A CDN (Content Delivery Network) caches content on servers geographically closer to users, reducing latency.',
    taglish:
      'Ang NAT ay nagbibigay-daan sa mga private IP address na makipag-usap sa public internet sa pamamagitan ng pag-translate sa kanila papunta sa isang public address. Ang PAT (ang pinaka-karaniwang klase ng NAT) ay nagpapahintulot sa maraming internal device na magshare ng iisang public IP address, gamit ang natatanging port number para masubaybayan ang bawat koneksyon nang hiwalay. Ang proxy server ay nasa pagitan ng mga client at ng internet, nagpapasa ng mga request sa ngalan nila — madalas ginagamit para sa content filtering, caching, o pagtatago ng identity. Ang load balancer naman namamahagi ng papasok na traffic sa maraming server para mas maganda ang performance at reliability. Ang CDN naman nagla-cache ng content sa mga server na mas malapit geograpiko sa users, para mabawasan ang latency.',
    analogy: {
      title: 'Isang numero ng opisina, maraming empleyado sa loob',
      text:
        'Isipin mo ang PAT parang isang opisinang may iisang pangunahing telepono number sa labas, pero maraming empleyado sa loob na may sariling extension. Kapag tumawag ka papunta sa opisina, hindi mo kailangan malaman ang exact extension ng empleyadong kausap mo — sinusubaybayan ito ng receptionist (ang router) gamit ang "port" bilang extension number. Ang CDN naman parang pagkakaroon ng sangay ng isang paboritong restaurant sa bawat lungsod — sa halip na magpadala ng pagkain mula sa iisang sentral na kusina papunta sa buong bansa, mas mabilis kung may sariling sangay sa bawat lugar.',
    },
    howItWorks: [
      'NAT translates a private IP address to a public one (and back) for internet-bound traffic — a one-to-one mapping in its basic form.',
      'PAT extends this by also tracking port numbers, allowing many private addresses to share a single public IP address simultaneously — this is what most home routers actually do.',
      'A forward proxy sits in front of clients, handling their outbound requests (useful for content filtering, caching frequently requested content, or masking client identity from the destination).',
      'A load balancer sits in front of a group of servers, distributing incoming requests across them based on rules like round-robin or server load, improving both performance and fault tolerance.',
      'A CDN distributes cached copies of content (images, videos, static web assets) across servers worldwide, so users are served from a nearby location instead of one distant origin server.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Technology</th><th>What It Does</th></tr></thead>
        <tbody>
          <tr><td>NAT</td><td>Translates private addresses to public ones (basic, often one-to-one)</td></tr>
          <tr><td>PAT</td><td>Many private addresses share one public IP, tracked by port number</td></tr>
          <tr><td>Proxy</td><td>Forwards client requests on their behalf (filtering, caching, anonymity)</td></tr>
          <tr><td>Load balancer</td><td>Distributes traffic across multiple servers</td></tr>
          <tr><td>CDN</td><td>Caches content geographically closer to users</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A busy e-commerce site uses a load balancer to spread shopper traffic across a dozen web servers, and a CDN to serve product images from a data center near each shopper\'s own country — both working together but solving different problems.',
    proTips: [
      'When a scenario says "one public IP address, many internal devices," think PAT specifically, not just NAT generically — PAT is the mechanism that actually enables the sharing.',
      'Remember the difference in scope: a proxy typically serves clients making outbound requests, while a load balancer typically serves incoming requests to a group of servers.',
    ],
    examAlert:
      'The exam may ask you to distinguish NAT from PAT specifically — remember PAT is a type of NAT that adds port-based tracking to allow address sharing, not a separate, unrelated technology.',
    beginnerMistakes: [
      'Using "NAT" and "PAT" interchangeably without realizing PAT is the specific mechanism enabling many-to-one address sharing.',
      'Confusing a proxy (serves outbound client requests) with a load balancer (serves inbound requests to servers) — they sit on "opposite sides" of a conversation.',
      'Assuming a CDN speeds up dynamic, personalized content the same way it speeds up static assets — CDNs are most effective for content that can be cached and reused.',
    ],
    keyTerms: [
      { term: 'NAT', def: 'Network Address Translation — converts private IP addresses to public ones for internet access.' },
      { term: 'PAT', def: 'Port Address Translation — a form of NAT allowing many devices to share one public IP address via port tracking.' },
      { term: 'Proxy server', def: 'A server that forwards client requests on their behalf, often for filtering, caching, or anonymity.' },
      { term: 'Load balancer', def: 'A device or service that distributes incoming traffic across multiple servers.' },
      { term: 'CDN', def: 'Content Delivery Network — caches content on geographically distributed servers to reduce latency.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What specifically allows many internal devices to share a single public IP address?',
        options: ['DNS', 'PAT', 'A proxy server', 'A CDN'],
        correct: 1,
        explanation: 'PAT (Port Address Translation) tracks each internal device\'s connections by port number, enabling shared public IP use.',
      },
      {
        prompt: 'What is the primary purpose of a load balancer?',
        options: [
          'Caching content closer to end users.',
          'Distributing incoming traffic across multiple servers for performance and reliability.',
          'Translating private addresses to public ones.',
          'Encrypting traffic between client and server.',
        ],
        correct: 1,
        explanation: 'Load balancers spread incoming requests across a server pool, improving both speed and fault tolerance.',
      },
      {
        prompt: 'How does a CDN improve performance for users far from a website\'s origin server?',
        options: [
          'By increasing the origin server\'s processing power.',
          'By caching content on servers geographically closer to users, reducing latency.',
          'By compressing all traffic to a single package.',
          'By converting all content into UDP packets.',
        ],
        correct: 1,
        explanation: 'CDNs reduce the physical distance data must travel by serving cached content from nearby edge servers.',
      },
    ],
    miniScenario: {
      prompt: 'A home network has one public IP address from the ISP, but five different devices are all browsing the internet simultaneously.',
      task: 'Name the specific technology making this possible, and briefly explain the mechanism it uses.',
    },
    recap:
      'NAT translates private to public addresses; PAT extends this so many devices can share one public IP via port tracking. Proxies forward client requests; load balancers distribute incoming server traffic; CDNs cache content near users to reduce latency.',
    classroomAnswer:
      '"One public IP, many devices — that\'s PAT doing the work behind the scenes, tracking everything by port number so the replies find their way back to the right device."',
  };

  NetReady.LESSONS['6-7'] = {
    id: '6-7',
    moduleId: 6,
    slug: 'advanced-dhcp-and-dns-scopes-relay-zones-security',
    title: 'Leveling Up DHCP and DNS: Scopes, Relay, Exclusions, Zones, and DNS Security',
    estMinutes: 14,
    outcomes: [
      'Explain DHCP scope, exclusions, and common option types beyond gateway and DNS.',
      'Explain why DHCP relay (IP helper) is needed when clients and the DHCP server sit on different subnets.',
      'Differentiate DNS zone types, authoritative vs. non-authoritative answers, and recursive queries.',
      'Explain what DNSSEC, DoH, and DoT each protect against, and how DoH and DoT differ from each other.',
    ],
    whyItMatters:
      'Lessons 6-2 and 6-3 taught the basic DORA handshake and lookup chain — this lesson covers the exact vocabulary the exam uses for the more advanced, real-world configuration and security details of both services.',
    simpleEnglish:
      'A DHCP scope is the range of addresses a server is allowed to hand out on a given subnet; an exclusion is a specific address inside that range deliberately withheld (often because it is assigned statically to something like a printer or server). DHCP options are extra settings delivered alongside the address — common examples include option 3 (default gateway), option 6 (DNS servers), and option 66/67 (used for network booting). When the DHCP client and the DHCP server are on different subnets, a router or Layer 3 switch must be configured with DHCP relay (often called an "IP helper") to forward the client\'s broadcast to the real server as a unicast, since ordinary broadcasts do not cross routers. On the DNS side, a forward zone maps names to addresses while a reverse zone maps addresses back to names (using PTR records); a primary zone is the editable, authoritative copy of a domain\'s records, while a secondary zone is a read-only replica kept in sync for redundancy. An authoritative answer comes directly from the zone\'s own server, while a non-authoritative answer comes from a resolver that is simply repeating a cached answer it looked up earlier. A recursive query asks a resolver to do all the walking (root, TLD, authoritative) and hand back only the final answer. DNSSEC adds cryptographic signatures to DNS records so a resolver can verify a response has not been tampered with, directly defending against DNS spoofing/poisoning. DoH (DNS over HTTPS) and DoT (DNS over TLS) both encrypt DNS queries in transit, but DoH tunnels them inside regular HTTPS traffic on port 443 (blending in with normal web traffic), while DoT uses its own dedicated port 853 (easier for a network administrator to specifically identify, allow, or block).',
    taglish:
      'Ang DHCP scope ay ang saklaw ng mga address na puwedeng ipamigay ng isang server sa isang partikular na subnet; ang exclusion naman ay isang specific na address sa loob ng saklaw na iyon na sinasadyang hindi ipinapamigay (kadalasan dahil static IP na ang nakatakda roon, tulad ng isang printer o server). Ang DHCP options ay karagdagang settings na kasabay ipinapadala ng address — halimbawa, option 3 (default gateway), option 6 (DNS servers), at option 66/67 (ginagamit para sa network booting). Kapag magkaibang subnet ang DHCP client at ang DHCP server, kailangan i-configure ang isang router o Layer 3 switch ng DHCP relay (madalas tawaging "IP helper") para ipasa ang broadcast ng client papunta sa tunay na server bilang unicast — dahil hindi tumatawid sa router ang ordinaryong broadcast. Sa DNS naman, ang forward zone ay nagmamapa ng pangalan papunta sa address, habang ang reverse zone naman ay address papunta sa pangalan (gamit ang PTR record); ang primary zone ay ang nae-edit at authoritative na kopya ng mga record ng isang domain, habang ang secondary zone ay read-only na kopya na pinapanatiling updated para sa redundancy. Ang authoritative na sagot ay direktang galing mismo sa server ng zone, habang ang non-authoritative na sagot ay galing sa isang resolver na inuulit lang ang naka-cache niyang sagot mula sa dati niyang tanong. Ang recursive query ay hinihiling sa resolver na siya na mismo ang maglakad (root, TLD, authoritative) at ibigay na lang ang final na sagot. Ang DNSSEC ay nagdaragdag ng cryptographic signature sa mga DNS record para ma-verify ng resolver na hindi ito ginalaw o binago — direktang tumutugon ito sa DNS spoofing/poisoning. Ang DoH at DoT naman, pareho nag-e-encrypt ng DNS queries habang naglalakbay, pero ang DoH ay isinasama ito sa loob ng regular na HTTPS traffic sa port 443 (nakakahalo sa normal na web traffic), habang ang DoT ay may sariling dedicated na port 853 (mas madaling makilala, i-allow, o i-block ng isang network administrator).',
    analogy: {
      title: 'Boarding house na may reserved na kwarto, at barangay hall na may selyo ng katunayan',
      text:
        'Balikan natin ang boarding house mula Lesson 6-3. Ang "scope" ay ang listahan ng mga kwartong puwedeng ipaupa ng caretaker — sabihin nating Room 1 hanggang Room 50. Pero may ilang kwarto sa loob ng listahang iyon na sinasadyang hindi ipinapaupa kahit bakante — halimbawa, permanenteng nakalaan ang Room 10 para sa printer ng opisina (static IP), kaya tinanggal ito sa listahan — ito ang "exclusion." Kung ang bagong boarder ay galing sa ibang gusali (ibang VLAN/subnet) at hindi maaabot ng kanyang sigaw ("May bakante ba?") ang caretaker dahil magkalayo sila, may isang messenger na nagpapasa ng tanong niya papunta sa caretaker — ito ang DHCP relay, o "IP helper." Ngayon, sa barangay hall naman, isipin mong may DALAWANG klase ng listahan: ang "forward" na listahan (pangalan papunta sa address) at ang "reverse" na listahan (address papunta sa pangalan) — parang directory na puwede mong hanapin sa dalawang paraan. Ang orihinal na barangay hall na gumagawa at nag-aapruba ng mga record ay ang "primary," habang may mga "secondary" na sangay na kumukuha lang ng kopya ng listahan bilang backup. Kung galing mismo sa barangay hall ang sagot, iyon ay "authoritative" — pero kung galing lang sa isang taong dati nang nagtanong at natandaan lang niya ang sagot, iyon ay "non-authoritative," parang narinig mo lang sa kapitbahay, hindi mo mismo kinumpirma sa opisina. Para masiguro namang hindi ka nililinlang ng peke na barangay hall (DNS spoofing), may DNSSEC — parang opisyal na selyo at lagda sa bawat listahan na maaari mong i-verify. At kapag gusto mong itago ang iyong tanong mula sa mga nanonood sa daan, may DoH at DoT — parang pagtatanong sa loob ng saradong sobre sa halip na sumisigaw sa bukas na kalye; ang DoH ay ipinapasok pa ang sobre sa loob ng regular na koreo (mas mahirap makilala), habang ang DoT ay may sarili niyang espesyal na daanan (mas madaling makilala kung sino ang gumagamit nito).',
    },
    howItWorks: [
      'DHCP scope: the full range of addresses (e.g., 192.168.1.100-192.168.1.200) a DHCP server is allowed to lease out on a given subnet or VLAN.',
      'DHCP exclusion: one or more specific addresses inside that scope that the server will never hand out, typically because they are already statically assigned to something (a printer, a server, a switch management interface).',
      'DHCP options: extra configuration values delivered with the lease — option 1 (subnet mask), option 3 (default gateway/router), option 6 (DNS servers), option 51 (lease time), and option 66/67 (boot server/bootfile, used for network-booting devices like VoIP phones) are common exam-relevant examples.',
      'DHCP relay/IP helper: a router or Layer 3 switch interface configured to forward a client\'s DHCP broadcast, as a targeted unicast, to a DHCP server that lives on a different subnet — required because broadcasts do not cross router boundaries on their own.',
      'DNS forward zone vs. reverse zone: a forward zone resolves names to addresses (the everyday case); a reverse zone resolves addresses back to names using PTR records (used for things like verifying a mail server\'s identity).',
      'DNS primary vs. secondary: the primary zone is the editable, authoritative source of a domain\'s records; a secondary zone is a read-only copy kept synchronized (via zone transfer) for redundancy and load distribution.',
      'Authoritative vs. non-authoritative answers: an authoritative answer comes straight from the zone\'s own authoritative server; a non-authoritative answer comes from a resolver returning a cached result it obtained earlier.',
      'Recursive query: the client asks its resolver to fully resolve the name and return only the final answer, with the resolver itself doing all the walking through root, TLD, and authoritative servers.',
      'DNSSEC adds digital signatures to DNS records so a resolver can cryptographically verify a response is genuine and unaltered, directly defending against DNS spoofing/cache poisoning.',
      'DoH (DNS over HTTPS, port 443) and DoT (DNS over TLS, port 853) both encrypt DNS queries so they cannot be read or tampered with in transit — DoH blends in with normal web traffic (harder to selectively block), while DoT runs on its own dedicated port (easier for network administrators to specifically identify and control).',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Term</th><th>What It Actually Means</th></tr></thead>
        <tbody>
          <tr><td>DHCP scope</td><td>The full range of leasable addresses on a subnet</td></tr>
          <tr><td>DHCP exclusion</td><td>An address inside the scope that is never leased out</td></tr>
          <tr><td>DHCP relay / IP helper</td><td>Forwards client broadcasts to a DHCP server on another subnet</td></tr>
          <tr><td>Forward zone / Reverse zone</td><td>Name&rarr;IP lookup vs. IP&rarr;Name (PTR) lookup</td></tr>
          <tr><td>Primary / Secondary zone</td><td>Editable authoritative copy vs. synced read-only copy</td></tr>
          <tr><td>Authoritative / Non-authoritative</td><td>Straight from the zone's own server vs. a cached answer</td></tr>
          <tr><td>DNSSEC</td><td>Signs records so tampering can be detected</td></tr>
          <tr><td>DoH / DoT</td><td>Encrypts DNS in transit — inside HTTPS (443) vs. its own port (853)</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A company\'s VoIP phones are on a separate VLAN from its DHCP server; without a DHCP relay configured on the Layer 3 switch connecting the VLANs, every new phone would fail to get an address at all, since its DHCP broadcast could never reach the server across the VLAN boundary on its own.',
    proTips: [
      'When you see "IP helper-address" in a router configuration, recognize it immediately as DHCP relay — it is one of the most literal exam-to-terminology mappings in this whole topic.',
      'If a resolver\'s answer is described as "non-authoritative," that is not a problem to fix — it is completely normal caching behavior, not an error.',
    ],
    examAlert:
      'Expect a scenario describing DHCP clients on one VLAN and the DHCP server on another, with the fix being to configure DHCP relay/IP helper on the routing device between them — this is a frequently tested configuration pattern.',
    beginnerMistakes: [
      'Confusing a DHCP exclusion (never leased to anyone) with a DHCP reservation (always leased to one specific device by MAC address) — they solve different problems.',
      'Assuming DoH and DoT both do the same thing in the same way — both encrypt DNS, but the port and traffic-blending behavior differ in ways that matter for network administrators trying to monitor or control DNS traffic.',
      'Treating a non-authoritative DNS answer as suspicious or wrong — it just means the answer came from cache rather than the source zone.',
    ],
    keyTerms: [
      { term: 'DHCP scope', def: 'The full range of addresses a DHCP server may lease on a given subnet.' },
      { term: 'DHCP exclusion', def: 'A specific address inside a scope that is deliberately never leased out.' },
      { term: 'DHCP relay (IP helper)', def: 'A router/Layer 3 switch function that forwards DHCP broadcasts to a server on a different subnet.' },
      { term: 'Authoritative answer', def: 'A DNS response that comes directly from the zone\'s own authoritative server, not from a cache.' },
      { term: 'DNSSEC', def: 'DNS Security Extensions — adds cryptographic signatures to DNS records so responses can be verified as untampered.' },
      { term: 'DoH / DoT', def: 'DNS over HTTPS (port 443) and DNS over TLS (port 853) — both encrypt DNS queries in transit, differing in port and traffic-blending behavior.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the key difference between a DHCP exclusion and a DHCP reservation?',
        options: [
          'They are two names for the exact same feature.',
          'An exclusion is never leased to anyone, while a reservation always leases the same address to one specific device by MAC address.',
          'A reservation is never leased to anyone, while an exclusion targets one specific device.',
          'Exclusions only apply to IPv6, reservations only apply to IPv4.',
        ],
        correct: 1,
        explanation: 'An exclusion removes an address from the pool entirely; a reservation guarantees one device always gets the same address.',
      },
      {
        prompt: 'DHCP clients on VLAN 20 cannot get an address from a DHCP server that lives on VLAN 30. What is most likely missing?',
        options: [
          'A DNS record for the DHCP server.',
          'DHCP relay (IP helper) configured on the Layer 3 device connecting the VLANs.',
          'A DHCP reservation for every client.',
          'A firewall rule allowing HTTPS traffic.',
        ],
        correct: 1,
        explanation: 'Since DHCP discovery broadcasts do not cross routers/VLANs, a relay (IP helper) must forward them to the server on the other subnet.',
      },
      {
        prompt: 'What is the main practical difference between DoH and DoT, given that both encrypt DNS queries?',
        options: [
          'DoH does not actually encrypt anything.',
          'DoH blends in with normal HTTPS traffic on port 443, while DoT uses its own dedicated port 853, making DoT easier to specifically identify and control.',
          'DoT is only usable on wireless networks.',
          'There is no difference at all between them.',
        ],
        correct: 1,
        explanation: 'The encryption goal is the same, but DoH\'s use of the shared HTTPS port makes it harder to selectively block than DoT\'s dedicated port.',
      },
    ],
    miniScenario: {
      prompt: 'A network administrator wants to be able to easily see and separately block DNS traffic on the firewall, distinct from regular web browsing traffic.',
      task: 'Explain which of DoH or DoT better supports that goal, and why.',
    },
    recap:
      'DHCP scope defines what can be leased; exclusions remove specific addresses from that pool; options deliver extra settings; relay/IP helper bridges DHCP across subnets. DNS zones split into forward/reverse and primary/secondary; answers are authoritative or cached (non-authoritative); DNSSEC verifies integrity; DoH and DoT both encrypt DNS but differ in port and how easily they can be identified/controlled.',
    classroomAnswer:
      '"Once you see \'IP helper\' as just DHCP relay, and \'non-authoritative\' as just \'this came from cache, not the source,\' this whole lesson stops sounding like new material and starts sounding like vocabulary for things you already understood."',
  };

  NetReady.LESSONS['6-8'] = {
    id: '6-8',
    moduleId: 6,
    slug: 'multicast-and-igmp',
    title: 'Multicast and IGMP: Sending One Stream to Many Receivers',
    estMinutes: 12,
    outcomes: [
      `Explain what multicast is and how it differs from unicast and broadcast.`,
      `Recognize the IPv4 multicast range and common reserved addresses.`,
      `Describe what IGMP and IGMP snooping do.`,
      `Name common multicast use cases and the IPv6 equivalent.`,
    ],
    whyItMatters: `Video streaming inside a company, IPTV, and many routing protocols depend on multicast. Without IGMP snooping, a multicast stream can flood a whole VLAN, and that shows up on the exam and in real outages.`,
    simpleEnglish: `Unicast is one sender to one receiver. Broadcast is one sender to everyone. Multicast is one sender to a chosen group of receivers who asked to join. IPv4 multicast uses addresses from 224.0.0.0 to 239.255.255.255 (224.0.0.0/4). Hosts use the Internet Group Management Protocol (IGMP) to tell the local router they want to join a group. A switch does not understand IP by default, so it would flood multicast to every port like a broadcast. IGMP snooping lets the switch listen to those join messages and send the stream only to the ports with interested receivers.`,
    taglish: `Ang unicast ay one-to-one, ang broadcast ay one-to-all, at ang multicast ay one-to-many na pumili — parang radio station: lahat puwedeng makinig, pero yung mga naka-tune in lang ang nakakatanggap. Ang IPv4 multicast ay 224.0.0.0 hanggang 239.255.255.255. Para sumali sa grupo, gumagamit ang host ng IGMP. Kung walang IGMP snooping ang switch, ibubuhos niya ang multicast sa lahat ng port. Kapag naka-enable, sa mga port lang na may nagpa-subscribe niya ipapadala.`,
    analogy: {
      title: 'Radio station at FM frequency',
      text: `Ang radio station ay nagbo-broadcast sa isang frequency (multicast group address), pero mga radyong naka-tune lang ang nakakarinig. Ang pag-tune ay ang IGMP join. Kapag walang nakatutok sa kapitbahayan (walang miyembro sa port), hindi na kailangang ipadala ang signal doon — yan ang ginagawa ng IGMP snooping.`,
    },
    howItWorks: [
      `Address range: IPv4 multicast is 224.0.0.0/4 (first octet 224 to 239). Well-known examples: 224.0.0.1 all hosts on the subnet, 224.0.0.2 all routers, 224.0.0.5 and 224.0.0.6 OSPF, 224.0.0.9 RIPv2, 224.0.0.251 mDNS.`,
      `Multicast MAC addresses: IPv4 multicast maps to Ethernet MAC addresses beginning 01:00:5E.`,
      `Joining: a host sends an IGMP membership report for the group it wants. A router acting as the IGMP querier periodically asks which groups are still wanted; hosts leaving stop reporting (IGMPv2 and later also send an explicit leave).`,
      `IGMP versions: v1 basic, v2 adds leave messages, v3 adds source-specific multicast (receivers choose which sources they accept).`,
      `IGMP snooping: the switch inspects IGMP messages and builds a table of which ports want which group. Multicast is then forwarded only to those ports instead of flooded across the VLAN.`,
      `Routing multicast between subnets needs a multicast routing protocol, most commonly PIM (Protocol Independent Multicast).`,
      `IPv6: no broadcast at all; multicast (ff00::/8) takes its place, and hosts join groups using MLD (Multicast Listener Discovery) rather than IGMP.`,
      `Typical uses: IPTV and live video, corporate all-hands streaming, financial market data feeds, software image distribution, and routing protocol hellos.`,
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Comparison of unicast, broadcast, and multicast">
        <div class="table-scroll"><table class="lesson-table">
          <thead><tr><th>Type</th><th>Who receives</th><th>Example address</th></tr></thead>
          <tbody>
            <tr><td>Unicast</td><td>One specific host</td><td>192.168.1.25</td></tr>
            <tr><td>Broadcast</td><td>Every host in the broadcast domain</td><td>192.168.1.255 / FF:FF:FF:FF:FF:FF</td></tr>
            <tr><td>Multicast</td><td>Only hosts that joined the group</td><td>239.1.1.1</td></tr>
            <tr><td>Anycast</td><td>Nearest of several hosts sharing one address</td><td>Public DNS resolvers</td></tr>
          </tbody>
        </table></div>
      </div>`,
    },
    realWorldExample: `A company streams its monthly town hall video by multicast. After a new switch is installed without IGMP snooping, every PC on the floor sees 8 Mbps of video it never requested, and Wi-Fi users on the same VLAN complain of slowness. Turning on IGMP snooping restricts the stream to the few ports with viewers.`,
    proTips: [
      `If multicast works within a subnet but not across routers, check that multicast routing (PIM) is enabled and that TTL on the stream is greater than 1.`,
      `Heavy unexplained traffic hitting every port in a VLAN is a classic symptom of multicast flooding without IGMP snooping.`,
    ],
    examAlert: `Remember 224.0.0.0 to 239.255.255.255 for IPv4 multicast, IGMP for joining, IGMP snooping for switches, and that IPv6 uses MLD and has no broadcast.`,
    beginnerMistakes: [
      `Confusing multicast with broadcast. Multicast only reaches hosts that joined.`,
      `Assuming a switch automatically limits multicast; it only does so with IGMP snooping.`,
      `Forgetting that IPv6 replaced broadcast with multicast.`,
    ],
    keyTerms: [
      { term: 'Multicast', def: `One-to-many delivery to a group of receivers that joined.` },
      { term: 'IGMP', def: `Protocol hosts use to join and leave IPv4 multicast groups.` },
      { term: 'IGMP snooping', def: `Switch feature that forwards multicast only to ports with group members.` },
      { term: 'PIM', def: `Protocol Independent Multicast, used to route multicast between networks.` },
      { term: 'MLD', def: `Multicast Listener Discovery, the IPv6 counterpart to IGMP.` },
    ],
    knowledgeCheck: [
      {
        prompt: 'Which range is reserved for IPv4 multicast?',
        options: ['10.0.0.0 - 10.255.255.255', '169.254.0.0 - 169.254.255.255', '224.0.0.0 - 239.255.255.255', '240.0.0.0 - 255.255.255.255'],
        correct: 2,
        explanation: 'IPv4 multicast is 224.0.0.0/4, which spans first octets 224 through 239.',
      },
      {
        prompt: 'What does IGMP snooping prevent?',
        options: [
          'ARP spoofing',
          'Multicast traffic being flooded to every port in a VLAN',
          'Rogue DHCP servers',
          'Duplicate IP addresses',
        ],
        correct: 1,
        explanation: 'The switch learns which ports joined each group and forwards multicast only there.',
      },
      {
        prompt: 'Which protocol takes the place of IGMP in IPv6?',
        options: ['ICMPv4', 'MLD', 'DHCPv6', 'ARP'],
        correct: 1,
        explanation: 'Multicast Listener Discovery handles group membership in IPv6.',
      },
    ],
    miniScenario: {
      prompt: 'A video stream plays fine for viewers in the same VLAN as the server but nobody on another subnet can receive it.',
      task: 'Name one thing to check first on the routers.',
    },
    recap: `Multicast delivers one stream to the hosts that joined a group. IPv4 uses 224.0.0.0/4 and IGMP, IPv6 uses ff00::/8 and MLD. IGMP snooping keeps switches from flooding multicast; PIM routes it between subnets.`,
    classroomAnswer: `"Multicast is a radio station: one transmission, only the tuned-in listeners get it. IGMP is the tuning, snooping keeps the switch from broadcasting it to everyone."`,
  };

  NetReady.LESSONS['6-9'] = {
    id: '6-9',
    moduleId: 6,
    slug: 'arp-and-icmp',
    title: 'ARP and ICMP: The Helper Protocols Behind Ping and Traceroute',
    estMinutes: 13,
    outcomes: [
      `Explain how ARP maps an IPv4 address to a MAC address on a local segment.`,
      `Describe what happens when the destination is on a different subnet.`,
      `Identify common ICMP message types and which tools use them.`,
      `Explain ARP spoofing and why blocking all ICMP can cause problems.`,
    ],
    whyItMatters: `Ping, traceroute, "Destination host unreachable", and ARP tables show up constantly in troubleshooting questions. Understanding the two helper protocols behind them makes those tools easy to interpret.`,
    simpleEnglish: `IP addresses are for getting a packet across networks, but on the final local hop a frame needs a MAC address. The Address Resolution Protocol (ARP) finds it: a host broadcasts "Who has 192.168.1.1? Tell 192.168.1.50." The owner replies with its MAC address by unicast, and the asker caches the answer in its ARP table. If the destination is on a different subnet, the host does not ARP for the far-away machine; it ARPs for its default gateway and sends the frame there. The Internet Control Message Protocol (ICMP) is the network's error and diagnostic messenger. Ping uses ICMP echo request and echo reply. Traceroute relies on ICMP Time Exceeded messages. ICMP is carried directly in IP (protocol number 1) and has no ports.`,
    taglish: `Kailangan ng MAC address para sa huling hakbang ng padala, kaya ginagamit ang ARP: nagsisigaw ang PC ng "Sino ang may 192.168.1.1?" (broadcast), sasagot ang may-ari ng MAC niya (unicast). Itatabi ang sagot sa ARP cache. Kapag nasa ibang subnet ang pupuntahan, hindi ARP ang destination mismo kundi ang default gateway. Ang ICMP naman ay parang mensahero ng mga ulat: "Echo request/reply" para sa ping, "Destination unreachable" kapag hindi maabot, at "Time Exceeded" kapag naubos ang TTL. Walang port number ang ICMP.`,
    analogy: {
      title: 'Pagtatanong sa barangay hall',
      text: `Ang ARP ay parang pagtatanong sa kalye ng "Sino dito si Mang Berto?" Lahat nakakarinig (broadcast), pero si Mang Berto lang ang sasagot (unicast) ng kanyang pinto (MAC). Ang ICMP ay ang sulat ng postmaster na nagsasabing "Hindi mahanap ang address" o "Naubos ang oras ng padala."`,
    },
    howItWorks: [
      `ARP request: broadcast to FF:FF:FF:FF:FF:FF asking for the MAC that owns a given IPv4 address on the local subnet.`,
      `ARP reply: unicast back to the requester containing the owner's MAC. The requester stores it in its ARP cache for a short time (often minutes).`,
      `Off-subnet traffic: the host compares the destination with its own subnet. If it is remote, it ARPs for the default gateway's MAC, and the router repeats the process on the next network.`,
      `Gratuitous ARP: a host announces its own IP-to-MAC mapping without being asked, used when an address changes, at failover (such as FHRP), or to detect duplicate IP addresses.`,
      `ARP spoofing / poisoning: an attacker sends forged ARP replies so victims associate the gateway's IP with the attacker's MAC, enabling an on-path attack. Dynamic ARP Inspection is the switch-level defense.`,
      `IPv6 has no ARP; it uses Neighbor Discovery (ICMPv6) for the same job.`,
      `ICMP types worth knowing: type 8 echo request, type 0 echo reply, type 3 destination unreachable (with codes such as network, host, port unreachable or fragmentation needed), type 11 time exceeded, type 5 redirect.`,
      `Tools: ping uses echo request/reply. Traceroute (tracert) sends packets with increasing TTL and reads the Time Exceeded replies to reveal each hop.`,
      `Path MTU Discovery depends on ICMP "fragmentation needed" messages. Blocking all ICMP at a firewall can cause strange problems where small packets work but large transfers hang.`,
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Table of ICMP message types and what uses them">
        <div class="table-scroll"><table class="lesson-table">
          <thead><tr><th>ICMP type</th><th>Meaning</th><th>Seen with</th></tr></thead>
          <tbody>
            <tr><td>8 / 0</td><td>Echo request / echo reply</td><td>ping</td></tr>
            <tr><td>3</td><td>Destination unreachable</td><td>Missing route, closed port, DF set but too big</td></tr>
            <tr><td>11</td><td>Time exceeded (TTL hit 0)</td><td>traceroute, routing loops</td></tr>
            <tr><td>5</td><td>Redirect</td><td>Router suggests a better gateway</td></tr>
          </tbody>
        </table></div>
      </div>`,
    },
    realWorldExample: `Users can ping the file server by IP but a few of them intermittently lose it. The ARP table on a PC shows the server's IP mapped to two different MAC addresses over time. A forgotten test machine with a duplicate IP address was answering ARP requests, and gratuitous ARP messages revealed the conflict.`,
    proTips: [
      `Use arp -a to view the ARP cache on Windows and Linux. Clearing it (arp -d) forces a fresh lookup after a NIC replacement.`,
      `"Request timed out" means no reply arrived; "Destination host unreachable" means a device actually reported back that it could not deliver. The wording points to different causes.`,
      `Do not block ICMP entirely. Permit at least echo, time exceeded, and fragmentation needed where practical.`,
    ],
    examAlert: `Be ready to say: ARP resolves IP to MAC (Layer 2/3 boundary), request is a broadcast, reply is unicast; ICMP has no ports; ping = echo; traceroute = TTL and Time Exceeded; IPv6 replaces ARP with NDP.`,
    beginnerMistakes: [
      `Thinking a host ARPs for a remote server's MAC. It ARPs for the default gateway.`,
      `Calling ICMP a TCP or UDP protocol. It rides directly on IP.`,
      `Treating a ping failure as proof the host is down; many hosts block echo replies.`,
    ],
    keyTerms: [
      { term: 'ARP', def: `Resolves an IPv4 address to a MAC address on the local network.` },
      { term: 'ARP cache', def: `Temporary table of IP-to-MAC mappings a host has learned.` },
      { term: 'Gratuitous ARP', def: `Unsolicited ARP announcing a host's own IP-to-MAC mapping.` },
      { term: 'ICMP', def: `Network-layer protocol for error reporting and diagnostics such as ping.` },
      { term: 'Echo request/reply', def: `ICMP messages used by ping.` },
      { term: 'Time Exceeded', def: `ICMP message sent when a packet's TTL reaches 0.` },
    ],
    commands: [
      { os: 'Windows', cmd: 'arp -a', desc: 'Displays the ARP cache of learned IP-to-MAC mappings.' },
      { os: 'Linux', cmd: 'ip neigh', desc: 'Shows the neighbor (ARP) table.' },
      { os: 'Windows', cmd: 'ping -n 4 192.168.1.1', desc: 'Sends four ICMP echo requests to test reachability.' },
      { os: 'Windows', cmd: 'tracert 8.8.8.8', desc: 'Maps the hops to a destination using TTL and ICMP.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A PC wants to send data to a server on a different subnet. Whose MAC address does it ARP for?',
        options: ['The remote server', 'The default gateway', 'The DNS server', 'The DHCP server'],
        correct: 1,
        explanation: `For off-subnet destinations the host sends the frame to its default gateway, so it resolves the gateway's MAC.`,
      },
      {
        prompt: 'Which ICMP message type does traceroute depend on to discover each hop?',
        options: ['Echo reply only', 'Time exceeded', 'Redirect', 'Source quench'],
        correct: 1,
        explanation: 'Each router that drops a packet at TTL 0 returns Time Exceeded, exposing its address.',
      },
      {
        prompt: 'Which statement about ICMP is true?',
        options: [
          'It uses TCP port 7.',
          'It uses UDP port 53.',
          'It has no port numbers and runs directly over IP.',
          'It is only used in IPv6.',
        ],
        correct: 2,
        explanation: 'ICMP is IP protocol number 1 and does not use TCP or UDP ports.',
      },
    ],
    miniScenario: {
      prompt: 'Your PC shows two different MAC addresses for the gateway IP in arp -a within a few minutes, and users report slow browsing.',
      task: 'What attack or misconfiguration could this indicate, and which switch feature helps defend against it?',
    },
    recap: `ARP maps IP to MAC on the local segment (broadcast request, unicast reply) and targets the gateway for remote destinations. ICMP carries diagnostics: echo for ping, time exceeded for traceroute, unreachable for delivery failures. ARP spoofing is countered by DAI; blocking all ICMP can break Path MTU Discovery.`,
    classroomAnswer: `"ARP asks who owns this IP so I can build the frame; ICMP is how the network tells me what went wrong or whether you are there."`,
  };
}(window.NetReady));
