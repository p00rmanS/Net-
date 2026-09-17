/**
 * content/module-13.js — Module 13: Troubleshooting Methodology and Tools
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  NetReady.LESSONS['13-1'] = {
    id: '13-1',
    moduleId: 13,
    slug: 'troubleshooting-methodology',
    title: 'The Network+ Troubleshooting Methodology',
    estMinutes: 13,
    outcomes: [
      'Recite the seven-step CompTIA troubleshooting methodology in order.',
      'Explain why documentation is a required final step, not an optional afterthought.',
      'Apply the methodology to a realistic scenario.',
    ],
    whyItMatters:
      'This exact sequence is tested directly on the exam, but more importantly, it is the actual mental checklist that separates a technician who fixes things by luck from one who fixes things by process.',
    simpleEnglish:
      'CompTIA\'s troubleshooting methodology has seven steps: (1) Identify the problem — gather information, question users, identify symptoms, determine if anything changed recently. (2) Establish a theory of probable cause — start with the obvious, consider multiple approaches. (3) Test the theory to determine the cause — confirm or escalate/re-theorize if the test fails. (4) Establish a plan of action and identify potential effects — decide how to fix it and what else it might impact. (5) Implement the solution or escalate as necessary. (6) Verify full system functionality and, if applicable, implement preventive measures. (7) Document findings, actions, and outcomes.',
    taglish:
      'Ang troubleshooting methodology ng CompTIA ay may pitong hakbang: (1) Tukuyin ang problema — mangalap ng impormasyon, tanungin ang user, tukuyin ang mga sintomas, alamin kung may nagbago kamakailan. (2) Bumuo ng teorya kung ano ang malamang na sanhi — simulan sa pinaka-obvious, isaalang-alang ang maraming posibleng paraan. (3) Subukan ang teorya para tiyakin ang sanhi — kumpirmahin, o mag-escalate/bumuo ulit ng teorya kung hindi tumama ang test. (4) Gumawa ng plano ng aksyon at tukuyin ang posibleng epekto — desisyunan kung paano aayusin at ano pang maaapektuhan. (5) Ipatupad ang solusyon o i-escalate kung kinakailangan. (6) I-verify ang buong functionality ng sistema, at kung applicable, magpatupad ng preventive measures. (7) I-dokumento ang mga natuklasan, aksyon, at resulta.',
    analogy: {
      title: 'Doktor na nagsusuri, hindi basta nagbibigay ng gamot',
      text:
        'Isipin mo ang isang mahusay na doktor — hindi sila basta nagbibigay ng gamot bago pa man matukoy ang sakit. Una, kinukuwestiyon nila ang pasyente (identify the problem). Pagkatapos, bumubuo sila ng hinala kung ano ang sakit (theory). Tapos, nagpapa-test sila para kumpirmahin (test the theory). Kung tama, gumagawa sila ng plano ng gamutan (plan of action). Ibinibigay nila ang gamot (implement). Sinisiguro nilang gumaling ka na talaga (verify). At sa huli, isinusulat nila lahat sa iyong medical record (document) — para kung bumalik ka man, may makikita silang kasaysayan.',
    },
    howItWorks: [
      'Step 1 (Identify): question the user, identify symptoms, duplicate the problem if possible, determine if escalation is needed, and ask "what changed recently?" — a huge share of problems trace to a recent change.',
      'Step 2 (Theorize): consider the most likely and simplest explanations first (Occam\'s razor), but remain open to multiple possible causes.',
      'Step 3 (Test): perform a test that will confirm or rule out the theory — if the test fails to confirm it, return to Step 2 with a new theory, or escalate if you lack the access/expertise to continue.',
      'Step 4 (Plan): once the cause is confirmed, plan the specific fix and consider what else it might affect (e.g., will this change require a maintenance window? Could it impact other users?).',
      'Step 5 (Implement): carry out the solution, or escalate to someone with appropriate access/authority if the fix is beyond your scope.',
      'Step 6 (Verify): confirm the original problem is actually resolved and that nothing else broke as a side effect; add preventive measures if appropriate.',
      'Step 7 (Document): record what happened, what was done, and the outcome — this documentation is what makes the next similar incident faster to resolve.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="The seven step troubleshooting methodology as a numbered sequence">
        <ol class="journey-list">
          <li>Identify the problem</li>
          <li>Establish a theory of probable cause</li>
          <li>Test the theory to determine the cause</li>
          <li>Establish a plan of action (and identify potential effects)</li>
          <li>Implement the solution or escalate</li>
          <li>Verify full system functionality (and implement preventive measures)</li>
          <li>Document findings, actions, and outcomes</li>
        </ol>
      </div>`,
    },
    realWorldExample:
      'A technician who skips straight to "just reboot it" without first identifying the actual symptom or asking what changed recently might temporarily mask a problem that returns an hour later — following the full methodology, especially asking "what changed," often reveals the real root cause immediately.',
    proTips: [
      '"What changed recently?" is often the single highest-value question in the entire methodology — most problems are caused by a change, not spontaneous failure.',
      'Never skip documentation, even under time pressure — undocumented fixes are exactly why the same problem often gets "solved" repeatedly by different people who do not know it happened before.',
    ],
    examAlert:
      'Expect the exam to present the steps out of order and ask you to sequence them correctly, or to describe a scenario and ask which step is being performed — memorize the exact seven steps in order.',
    beginnerMistakes: [
      'Jumping straight to implementing a fix before properly identifying the problem or forming a testable theory.',
      'Testing a theory in a way that does not actually confirm or rule it out cleanly.',
      'Treating documentation as optional or something to do "later" — it frequently never gets done if skipped in the moment.',
    ],
    keyTerms: [
      { term: 'Troubleshooting methodology', def: 'CompTIA\'s structured seven-step process for diagnosing and resolving network problems.' },
      { term: 'Theory of probable cause', def: 'An educated hypothesis about what is causing a problem, to be tested before acting.' },
      { term: 'Escalation', def: 'Passing a problem to someone with greater access, expertise, or authority when it exceeds your own ability to resolve it.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the very first step in the CompTIA troubleshooting methodology?',
        options: ['Implement the solution', 'Identify the problem', 'Document findings', 'Test the theory'],
        correct: 1,
        explanation: 'Identifying the problem (gathering information, symptoms, and recent changes) always comes first.',
      },
      {
        prompt: 'What should you do if testing your theory of probable cause does NOT confirm it?',
        options: [
          'Implement the fix anyway.',
          'Return to establishing a new theory, or escalate if needed.',
          'Skip directly to documentation.',
          'Assume the problem does not actually exist.',
        ],
        correct: 1,
        explanation: 'A failed test means the theory was wrong — return to theorizing (or escalate) rather than proceeding on a disproven theory.',
      },
      {
        prompt: 'Why is documentation a required final step rather than an optional extra?',
        options: [
          'It is mostly a formality with no real value.',
          'It ensures the incident and its resolution are recorded, making future similar problems faster to diagnose and preventing repeated undocumented fixes.',
          'It replaces the need for the verification step.',
          'It is only required for problems affecting more than 100 users.',
        ],
        correct: 1,
        explanation: 'Documentation preserves institutional knowledge, directly benefiting future troubleshooting efforts.',
      },
    ],
    miniScenario: {
      prompt: 'A user reports their computer cannot reach the internet. You ask what changed recently, and they mention IT replaced their network cable yesterday.',
      task: 'Walk through how you would apply at least the first three steps of the methodology to this specific scenario.',
    },
    recap:
      'The seven-step methodology is: identify, theorize, test, plan, implement, verify, document. Asking "what changed?" during identification is high-value. Documentation is a required, not optional, final step.',
    classroomAnswer:
      '"I never skip straight to a fix — identify, theorize, test, THEN act, verify, and document, every single time, because skipping steps is exactly how problems come back."',
  };

  NetReady.LESSONS['13-2'] = {
    id: '13-2',
    moduleId: 13,
    slug: 'cabling-and-physical-interface-issues',
    title: 'Cabling and Physical Interface Issues',
    estMinutes: 13,
    outcomes: [
      'Identify common cable-related faults and their symptoms.',
      'Explain what rising interface error counters typically indicate.',
      'Identify common hardware-level physical layer issues.',
    ],
    whyItMatters:
      'Physical layer problems cause a huge share of real support tickets, and they are often the fastest to diagnose once you know exactly what symptom to look for — this is where troubleshooting starts, literally at Layer 1.',
    simpleEnglish:
      'Common cable issues include: using the incorrect cable type for the required speed/distance, signal degradation (attenuation) over too long a run, improper termination (badly crimped connectors causing intermittent connectivity), and TX/RX transposed (transmit and receive pins miswired, preventing communication despite an apparent physical connection). Interface issues show up as steadily increasing error counters (CRC errors, collisions) visible in interface statistics, or a port status that will not come up (link down) or flaps (up and down repeatedly). Hardware issues include PoE problems (insufficient power budget for connected devices), transceiver mismatches (incompatible SFP modules on either end of a fiber link), and generally weak or degraded signal strength.',
    taglish:
      'Kabilang sa mga karaniwang problema sa kable: paggamit ng maling klase ng kable para sa kailangang bilis o distansya, signal degradation (attenuation) dahil sobrang haba ng run, maling termination (pangit na pagkakakabit ng connector na nagdudulot ng pana-panahong koneksyon), at TX/RX transposed (nagkapalit ang transmit at receive pins, kaya hindi makapag-usap kahit mukhang konektado naman). Ang mga interface issue naman lumilitaw bilang patuloy na tumataas na error counters (CRC errors, collisions) na makikita sa interface statistics, o port status na hindi nagigising (link down) o paulit-ulit na nagbabago (flapping). Ang hardware issues naman kinabibilangan ng problema sa PoE (kulang na power budget para sa mga konektadong device), hindi tugmang transceiver (magkaibang klase ng SFP module sa magkabilang dulo ng fiber link), at pangkalahatang mahina o may kapansanan na signal strength.',
    analogy: {
      title: 'Baluktot na tubo at sirang plugs',
      text:
        'Isipin mo ang signal degradation parang tubig na dumadaloy sa isang napakahabang tubo — unti-unting humihina ang presyon habang lumalayo, hanggang sa halos wala nang lumalabas sa dulo. Ang TX/RX transposed naman parang dalawang taong may telepono, pero ang mikropono ng isa ay nakakonekta sa speaker ng isa — puwedeng "magkonekta" ang linya pero walang aktwal na naiintindihang usapan. Ang rising error counters naman parang paulit-ulit na ubo — minsan-minsan lang, hindi pa emergency, pero kung palala nang palala, senyales na malapit nang lumala ang sakit.',
    },
    howItWorks: [
      'Incorrect cable type: using Cat 5e where Cat 6a is needed for 10 Gbps, for example, causes performance far below expectation, or an inability to negotiate the desired speed at all.',
      'Signal degradation (attenuation): occurs when a cable run exceeds standard distance limits or uses lower-quality cable, weakening the signal until errors or link loss occur.',
      'Improper termination: poorly crimped or punched-down connectors create intermittent, unreliable connections that can be maddening to diagnose since they may work sometimes and fail other times.',
      'TX/RX transposed: incorrect wiring swaps transmit and receive pairs, which auto-MDI-X often corrects automatically on modern equipment, but can still cause total connectivity failure on older hardware lacking that feature.',
      'Rising interface error counters (CRC errors, runts, giants, collisions) viewed via interface statistics commands are a direct, quantifiable signal of a physical-layer problem, often before a link fully fails.',
      'PoE issues occur when total connected device power draw exceeds a switch\'s available power budget, causing some devices to fail to power on or behave erratically.',
      'Transceiver mismatches occur when incompatible SFP/SFP+ modules (wrong wavelength, single-mode vs. multimode mismatch) are used on either end of a fiber link, preventing the link from establishing at all.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Symptom</th><th>Likely Cause</th></tr></thead>
        <tbody>
          <tr><td>Intermittent connectivity, works sometimes</td><td>Improper termination (bad crimp/punch-down)</td></tr>
          <tr><td>Link up but zero communication</td><td>TX/RX transposed (on older, non-auto-MDI-X equipment)</td></tr>
          <tr><td>Steadily rising CRC errors/collisions</td><td>Physical-layer degradation, developing cable/interface fault</td></tr>
          <tr><td>PoE device won't power on</td><td>Exceeded switch power budget</td></tr>
          <tr><td>Fiber link won't come up at all</td><td>Transceiver mismatch (wavelength or mode type)</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A technician troubleshooting an intermittent office connection eventually discovers a poorly terminated RJ45 connector — the cable tests fine when perfectly still but fails intermittently whenever someone bumps the nearby desk, a classic signature of a bad termination.',
    proTips: [
      'Rising error counters are a leading indicator — catching and fixing a degrading physical link BEFORE it fully fails is far better than waiting for a complete outage.',
      'When a fiber link will not come up at all, checking for a simple transceiver mismatch (wrong type on one end) is often faster than assuming a complex configuration problem.',
    ],
    examAlert:
      'The exam commonly describes a specific physical symptom (intermittent connection, rising error counters, PoE device not powering) and asks you to identify the likely physical-layer cause — practice this pattern-matching directly.',
    beginnerMistakes: [
      'Jumping to configuration troubleshooting before ruling out simple physical-layer causes first — always check Layer 1 early.',
      'Ignoring gradually rising error counters until they cause a full outage, instead of treating them as an early warning sign.',
      'Assuming a "connected" link light means the connection is actually healthy — degraded signal quality can coexist with an apparently normal link status.',
    ],
    keyTerms: [
      { term: 'Attenuation', def: 'Signal weakening over distance or due to cable quality issues.' },
      { term: 'TX/RX transposed', def: 'A wiring fault where transmit and receive pairs are swapped.' },
      { term: 'CRC error', def: 'A frame that failed a cyclic redundancy check, indicating data corruption in transit.' },
      { term: 'Transceiver mismatch', def: 'Incompatible fiber transceiver modules on either end of a link, preventing it from establishing.' },
    ],
    commands: [
      { os: 'Cisco IOS', cmd: 'show interfaces', desc: 'Displays interface status and error counters (CRC errors, collisions, etc.).' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A network connection works fine when undisturbed but fails intermittently whenever the cable is bumped or moved. What is the most likely cause?',
        options: [
          'A routing protocol misconfiguration.',
          'Improper cable termination (a poorly crimped or punched-down connector).',
          'DNS server failure.',
          'An overloaded CPU on the router.',
        ],
        correct: 1,
        explanation: 'Physical movement triggering intermittent failure is a classic sign of a poor physical termination.',
      },
      {
        prompt: 'What does a steadily increasing CRC error counter on an interface typically indicate?',
        options: [
          'A perfectly healthy connection.',
          'A developing physical-layer problem, such as a degrading cable or interface.',
          'A successful software update.',
          'Normal expected behavior requiring no attention.',
        ],
        correct: 1,
        explanation: 'Rising CRC errors are a quantifiable early warning sign of physical-layer degradation.',
      },
      {
        prompt: 'A fiber link between two switches will not come up at all, despite correct cabling. What is a likely cause worth checking first?',
        options: [
          'A VLAN misconfiguration.',
          'A transceiver mismatch (incompatible SFP module type on one end).',
          'An incorrect subnet mask.',
          'A DHCP scope exhaustion.',
        ],
        correct: 1,
        explanation: 'Mismatched transceiver types are a common, simple cause of a fiber link failing to establish at all.',
      },
    ],
    miniScenario: {
      prompt: 'Several new PoE security cameras fail to power on after being added to an existing switch that already supports many other PoE devices.',
      task: 'Identify the most likely physical-layer cause, and explain how you would confirm it.',
    },
    recap:
      'Cable issues include wrong cable type, attenuation, improper termination, and TX/RX transposed wiring. Interface issues show up as rising error counters or unstable link status. Hardware issues include PoE power budget exhaustion and transceiver mismatches.',
    classroomAnswer:
      '"Before I ever touch a configuration, I rule out the physical layer first — bad termination, rising error counters, and PoE budget problems account for a huge share of tickets that look mysterious at first glance."',
  };

  NetReady.LESSONS['13-3'] = {
    id: '13-3',
    moduleId: 13,
    slug: 'switching-and-routing-issues',
    title: 'Switching and Routing Issues',
    estMinutes: 13,
    outcomes: [
      'Identify common switching-related problems (STP, VLAN assignment, ACLs).',
      'Identify common routing-related problems (routing table, default routes).',
      'Apply the troubleshooting methodology to a Layer 2/3 connectivity scenario.',
    ],
    whyItMatters:
      'Once physical connectivity is confirmed healthy, switching and routing misconfigurations are the next most common source of "why can\'t this device reach that device" tickets.',
    simpleEnglish:
      'Common switching issues include STP problems (a port stuck in blocking state, or a loop causing a broadcast storm), incorrect VLAN assignment (a device placed in the wrong VLAN, isolating it from where it needs to be), and ACL misconfigurations on switches blocking traffic that should be permitted. Common routing issues include an incomplete or incorrect routing table (missing a route to a needed destination), and a missing or incorrect default route (causing traffic to unknown destinations to be dropped instead of forwarded appropriately). Address-related issues include an incorrect gateway, IP address, or subnet mask configured on a device, silently breaking connectivity to specific destinations while others may still work.',
    taglish:
      'Kabilang sa mga karaniwang problema sa switching: problema sa STP (isang port na naka-stuck sa blocking state, o loop na nagdudulot ng broadcast storm), maling VLAN assignment (isang device na nailagay sa maling VLAN, na naghihiwalay dito mula sa dapat nitong marating), at maling ACL configuration sa switch na humaharang sa traffic na dapat pinapayagan. Kabilang naman sa mga karaniwang problema sa routing: hindi kumpleto o maling routing table (walang ruta papunta sa kailangang destinasyon), at nawawala o maling default route (nagdudulot ng pagkatanggal ng traffic papunta sa hindi kilalang destinasyon sa halip na iforward ito nang tama). Ang mga problema sa address naman ay kinabibilangan ng maling gateway, IP address, o subnet mask na naka-configure sa isang device — tahimik nitong sinisira ang koneksyon papunta sa specific na destinasyon habang gumagana pa rin ang iba.',
    analogy: {
      title: 'Maling sangay at nawawalang address sa sulat',
      text:
        'Isipin mo ang maling VLAN assignment parang inilagay ka sa maling sangay ng kumpanya — kahit anong sipag mo, hindi mo maaabot ang mga taong nasa tamang sangay dahil naiiba ka na sa grupo. Ang nawawalang default route naman parang isang sulat na walang alam kung saan ipapadala kapag hindi nakikilala ang address — sa halip na ipasa ito sa post office (default gateway) para hanapin ang paraan, itinatapon na lang ito. Ang maling subnet mask naman parang maling palagay sa laki ng iyong barangay — akala mo malaki ang saklaw mo, pero pala, konti lang pala talaga ang kasama mo, kaya "estranghero" na pala sa\'yo ang mga dapat sana kapitbahay mo.',
    },
    howItWorks: [
      'An STP port stuck in blocking when it should be forwarding (or a loop forming due to STP being disabled/misconfigured) causes either isolated connectivity or a full broadcast storm, respectively.',
      'A device in the wrong VLAN experiences complete isolation from its intended broadcast domain, even though physical connectivity and basic link status appear entirely normal.',
      'ACL misconfigurations on a switch (or router) may unintentionally block legitimate traffic, especially if a rule is too broad or a more specific "deny" rule is unintentionally placed before an intended "permit" rule.',
      'An incomplete routing table means some destinations are simply unreachable because no path is known — often revealed by checking the routing table directly for a missing entry.',
      'A missing or misconfigured default route causes any traffic to destinations not explicitly listed in the routing table to be dropped, even though specific known routes work fine.',
      'An incorrect IP address, subnet mask, or default gateway on an end device can cause it to believe destinations are on its own local subnet when they are not (or vice versa), causing traffic to be sent to the wrong place or not at all.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Symptom</th><th>Likely Layer 2/3 Cause</th></tr></thead>
        <tbody>
          <tr><td>Device isolated despite normal link status</td><td>Incorrect VLAN assignment</td></tr>
          <tr><td>Sudden network-wide slowdown after a cabling change</td><td>STP loop / broadcast storm</td></tr>
          <tr><td>Legitimate traffic unexpectedly blocked</td><td>Misordered or overly broad ACL rule</td></tr>
          <tr><td>Can reach some networks but not others</td><td>Incomplete/missing routing table entry</td></tr>
          <tr><td>Can reach local subnet only, nothing beyond</td><td>Missing/incorrect default route or gateway</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A user\'s new laptop can reach other devices on the same switch but nothing beyond the local network — checking the laptop\'s configuration reveals a default gateway address typo, explaining exactly why local traffic works but nothing requiring routing does.',
    proTips: [
      'When troubleshooting "device X can\'t reach device Y," always check VLAN assignment and IP configuration (address/mask/gateway) early — these two categories explain a huge share of real tickets.',
      'Always verify the actual routing table on a device experiencing partial connectivity — do not assume it matches what you think was configured.',
    ],
    examAlert:
      'The exam frequently presents a symptom (isolated device, partial reachability, sudden slowdown) and asks you to identify the Layer 2 or Layer 3 root cause — practice matching symptom patterns to causes as shown in this lesson\'s table.',
    beginnerMistakes: [
      'Assuming a working physical link means Layer 2/3 configuration must also be correct — they are independent potential failure points.',
      'Forgetting that a missing default route only affects traffic to unlisted destinations — local/known-route traffic can work perfectly fine at the same time, which can be confusing.',
      'Not checking ACL rule ORDER when legitimate traffic is unexpectedly blocked — the first matching rule wins.',
    ],
    keyTerms: [
      { term: 'VLAN assignment', def: 'The specific VLAN a switch port is configured to use, determining which broadcast domain a connected device belongs to.' },
      { term: 'Routing table', def: 'The list a router uses to determine where to forward traffic for each known destination.' },
      { term: 'Default route', def: 'A catch-all route used when no more specific route matches a destination.' },
    ],
    commands: [
      { os: 'Cisco IOS', cmd: 'show vlan brief', desc: 'Displays VLAN assignments for switch ports.' },
      { os: 'Cisco IOS', cmd: 'show ip route', desc: 'Displays the current routing table.' },
      { os: 'Windows', cmd: 'ipconfig /all', desc: 'Displays IP address, subnet mask, and default gateway configuration.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A device has a perfectly healthy physical link but cannot communicate with any other device, even ones on the same switch. What is a likely cause?',
        options: [
          'A DNS server outage.',
          'Incorrect VLAN assignment isolating the device into the wrong broadcast domain.',
          'A default route misconfiguration.',
          'An expired SSL certificate.',
        ],
        correct: 1,
        explanation: 'A healthy physical link with total isolation from same-switch devices strongly suggests a VLAN assignment problem.',
      },
      {
        prompt: 'A device can reach its own local subnet but cannot reach any other network. What is a likely cause?',
        options: [
          'A missing or incorrect default gateway/default route.',
          'A duplicate MAC address.',
          'An STP loop.',
          'A transceiver mismatch.',
        ],
        correct: 0,
        explanation: 'Local-only connectivity with no ability to reach other networks is the classic signature of a default gateway/route problem.',
      },
      {
        prompt: 'Legitimate traffic is unexpectedly being blocked by a switch ACL. What should you check first?',
        options: [
          'The physical cable length.',
          'The order of the ACL rules, since the first matching rule determines the outcome.',
          'The DNS server configuration.',
          'The PoE power budget.',
        ],
        correct: 1,
        explanation: 'ACLs process top-down, so rule order directly determines which traffic is permitted or denied.',
      },
    ],
    miniScenario: {
      prompt: 'After a network change, an entire floor of the office experiences a sudden, severe slowdown, and switches show unusually high broadcast traffic.',
      task: 'Identify the most likely Layer 2 cause, and name the protocol that should normally prevent this exact situation.',
    },
    recap:
      'Switching issues include STP problems, incorrect VLAN assignment, and ACL misconfigurations. Routing issues include incomplete routing tables and missing/incorrect default routes. Address misconfigurations (IP/mask/gateway) commonly cause partial, confusing connectivity patterns.',
    classroomAnswer:
      '"Physical link healthy but still broken means I move up the stack — VLAN assignment and IP configuration explain most of what I see next, and if it is total isolation with a healthy link, VLAN is my first guess every time."',
  };

  NetReady.LESSONS['13-4'] = {
    id: '13-4',
    moduleId: 13,
    slug: 'ip-addressing-and-dhcp-issues',
    title: 'IP Addressing and DHCP Troubleshooting',
    estMinutes: 12,
    outcomes: [
      'Diagnose symptoms of DHCP address pool exhaustion.',
      'Diagnose common incorrect IP/subnet mask/gateway configurations.',
      'Apply APIPA recognition as an immediate diagnostic signal.',
    ],
    whyItMatters:
      'IP addressing problems are some of the most common help-desk tickets in existence, and nearly all of them can be diagnosed in under two minutes once you know exactly which symptom points to which specific cause.',
    simpleEnglish:
      'DHCP address pool exhaustion occurs when a DHCP scope runs out of available addresses to assign, causing new devices to fail obtaining an address (often falling back to an APIPA address, 169.254.x.x). An incorrect IP address configuration can cause a device to be unreachable or to conflict with another device already using that address. An incorrect subnet mask can cause a device to misjudge which destinations are "local" versus "remote," causing confusing partial connectivity. An incorrect default gateway prevents a device from reaching anything outside its own local subnet, even though local communication works fine.',
    taglish:
      'Ang DHCP address pool exhaustion ay nangyayari kapag naubusan na ng available na address ang isang DHCP scope, kaya nabibigo ang mga bagong device na makakuha ng address — kadalasan bumabalik sila sa APIPA address (169.254.x.x). Ang maling IP address configuration ay puwedeng magdulot ng hindi maabot na device, o pagbanggaan (conflict) sa ibang device na gumagamit na ng parehong address. Ang maling subnet mask naman ay nagdudulot ng maling pagtantya ng device kung alin ang "local" at alin ang "malayo," nagdudulot ng nakakalitong bahagyang koneksyon. Ang maling default gateway naman ay pumipigil sa isang device na marating ang kahit ano sa labas ng sarili nitong local subnet, kahit gumagana pa rin ang local na komunikasyon.',
    analogy: {
      title: 'Puno na ang parking lot at maling sukat ng barangay',
      text:
        'Isipin mo ang DHCP pool exhaustion parang puno na ang parking lot ng isang building — hindi na makakapasok ang bagong sasakyan (device) kahit gusto niyang pumasok, kaya napipilitan siyang mag-park sa labas (APIPA address), malayo sa dapat niyang puntahan. Ang maling subnet mask naman parang maling pagkaintindi sa laki ng barangay mo — akala mo malayo na yung kapitbahay pero pala kasama mo pa pala sila, o kabaligtaran, akala mo kasama mo pa sila pero pala malayo na sila — kaya nalilito ka kung sino ba talaga ang dapat mong direktang lapitan at sino ang dapat dumaan muna sa ibang daan.',
    },
    howItWorks: [
      'A DHCP scope has a finite range of addresses; if more devices request addresses than the scope has available (common with short lease times and many transient devices, like a busy guest network), new requests fail.',
      'A device with an APIPA address (169.254.x.x) is immediately diagnosable as "could not reach a DHCP server" — check DHCP server health, scope availability, and any relay/helper configuration between the client and server if they are on different subnets.',
      'An IP address conflict (two devices claiming the same address) typically causes intermittent connectivity for both affected devices, often with OS-level warnings on modern systems.',
      'An incorrect subnet mask changes a device\'s calculation of its own network\'s size, potentially causing it to treat local devices as remote (routing unnecessarily) or remote devices as local (failing to route when it should).',
      'An incorrect default gateway address means the device has no valid path to reach anything outside its own subnet, even though its own subnet\'s internal communication remains completely unaffected.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Symptom</th><th>Likely Cause</th></tr></thead>
        <tbody>
          <tr><td>Device shows 169.254.x.x address</td><td>DHCP failure — check server health and scope/pool exhaustion</td></tr>
          <tr><td>Intermittent connectivity, OS shows IP conflict warning</td><td>Duplicate IP address assignment</td></tr>
          <tr><td>Confusing partial reachability to "nearby" addresses</td><td>Incorrect subnet mask</td></tr>
          <tr><td>Local communication fine, nothing beyond works</td><td>Incorrect or missing default gateway</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'During a large conference, dozens of attendee devices suddenly fail to get guest Wi-Fi access mid-event — the DHCP scope, sized for normal daily usage, has simply run out of available addresses under the unusually high device count, a classic pool exhaustion scenario.',
    proTips: [
      'Seeing 169.254.x.x is one of the fastest, most reliable diagnostic signals in all of networking — recognize it instantly and go straight to DHCP server/scope health.',
      'When sizing a DHCP scope, always plan for realistic peak device counts (like conferences or busy retail hours), not just average daily usage.',
    ],
    examAlert:
      'The exam commonly tests APIPA recognition (169.254.x.x = DHCP failure) and asks you to distinguish gateway problems (local works, nothing beyond) from subnet mask problems (confusing partial reachability) — practice both patterns.',
    beginnerMistakes: [
      'Not immediately recognizing 169.254.x.x as a DHCP failure signal.',
      'Confusing a subnet mask problem (misjudging what counts as "local") with a default gateway problem (no path beyond local at all) — they produce different, distinguishable symptom patterns.',
      'Assuming DHCP problems always mean the server is down — pool exhaustion can occur even with a perfectly healthy, running DHCP server.',
    ],
    keyTerms: [
      { term: 'DHCP scope', def: 'The defined range of IP addresses a DHCP server can assign to clients.' },
      { term: 'Address pool exhaustion', def: 'When a DHCP scope runs out of available addresses to assign to new clients.' },
      { term: 'IP address conflict', def: 'Two devices on the same network claiming the same IP address, causing intermittent connectivity.' },
    ],
    commands: [
      { os: 'Windows', cmd: 'ipconfig /release && ipconfig /renew', desc: 'Manually releases and requests a new DHCP-assigned address.' },
      { os: 'Linux', cmd: 'dhclient -r && dhclient', desc: 'Manually releases and requests a new DHCP-assigned address.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A device displays IP address 169.254.4.12. What should you check first?',
        options: [
          'The device\'s web browser settings.',
          'DHCP server health and scope/pool availability.',
          'The device\'s antivirus software.',
          'The device\'s screen resolution.',
        ],
        correct: 1,
        explanation: 'An APIPA address (169.254.x.x) directly signals a failed DHCP request, pointing to DHCP server/scope issues.',
      },
      {
        prompt: 'A device can communicate with everything on its local subnet but cannot reach anything beyond it. What is the most likely cause?',
        options: [
          'A duplicate IP address.',
          'An incorrect or missing default gateway.',
          'DHCP pool exhaustion.',
          'A transceiver mismatch.',
        ],
        correct: 1,
        explanation: 'This exact symptom pattern (local works, nothing beyond) is the classic signature of a default gateway problem.',
      },
      {
        prompt: 'What happens when a DHCP scope experiences address pool exhaustion?',
        options: [
          'All existing device connections are immediately dropped.',
          'New devices requesting an address fail to obtain one, often falling back to an APIPA address.',
          'The DHCP server automatically expands its own scope.',
          'Nothing — pool exhaustion has no real effect.',
        ],
        correct: 1,
        explanation: 'Once the pool is exhausted, new DHCP requests cannot be satisfied, causing new devices to fail to get a proper address.',
      },
    ],
    miniScenario: {
      prompt: 'During a large company event, many attendee devices suddenly fail to connect to the guest Wi-Fi network, despite the network working fine all morning.',
      task: 'Identify the most likely cause given the timing, and explain what you would check to confirm it.',
    },
    recap:
      'DHCP pool exhaustion prevents new devices from obtaining addresses, often producing an APIPA fallback. Incorrect IP addresses cause conflicts; incorrect subnet masks cause confusing partial reachability; incorrect default gateways block everything beyond the local subnet while local communication remains fine.',
    classroomAnswer:
      '"169.254 on sight means DHCP failed — beyond that, I separate gateway problems (nothing beyond local works) from subnet mask problems (confusing, inconsistent reachability) because they point to completely different fixes."',
  };

  NetReady.LESSONS['13-5'] = {
    id: '13-5',
    moduleId: 13,
    slug: 'performance-issues-congestion-latency-packet-loss',
    title: 'Performance Issues: Congestion, Latency, Packet Loss, and Wireless Interference',
    estMinutes: 12,
    outcomes: [
      'Differentiate congestion, latency, and packet loss as distinct performance problems.',
      'Identify common causes of wireless interference.',
      'Match a performance symptom to its most likely underlying cause.',
    ],
    whyItMatters:
      'This lesson connects directly back to the performance vocabulary from Module 1 — now applied specifically to diagnosing WHY a network is slow, not just naming the symptom.',
    simpleEnglish:
      'Congestion occurs when demand for bandwidth exceeds available capacity, causing queuing delays and potentially packet loss during peak usage. Latency is delay in data delivery, which can be caused by long physical distances, congested links, or inefficient routing paths. Packet loss is data that never arrives, often caused by congestion, faulty hardware, or poor wireless signal quality, forcing retransmissions that further degrade performance. Wireless interference comes from overlapping Wi-Fi channels, non-Wi-Fi devices operating on the same frequency (like microwaves or cordless phones on 2.4 GHz), and physical obstructions weakening signal strength.',
    taglish:
      'Ang congestion ay nangyayari kapag lumampas ang demand sa available na bandwidth, nagdudulot ng pagkaantala (queuing) at posibleng packet loss tuwing peak hours. Ang latency ay ang pagkaantala sa paghahatid ng data, na maaaring dulot ng malayong distansya, congested na link, o hindi efficient na ruta. Ang packet loss ay data na hindi na nakarating, madalas dulot ng congestion, sirang hardware, o mahinang wireless signal — pinipilit nitong mag-retransmit, na lalo pang nagpapababa ng performance. Ang wireless interference naman ay galing sa nagpapatong-patong na Wi-Fi channels, mga non-Wi-Fi na device na gumagamit ng parehong frequency (tulad ng microwave o cordless phone sa 2.4 GHz), at pisikal na hadlang na nagpapahina ng signal.',
    analogy: {
      title: 'Trapiko sa EDSA, layo ng biyahe, at nawawalang parcel',
      text:
        'Isipin mo ang congestion parang trapiko sa EDSA tuwing rush hour — maraming sasakyan (data), limitadong lane (bandwidth), kaya bumabagal ang lahat. Ang latency naman parang tagal ng biyahe mula Quezon City papuntang Makati — kahit walang trapiko, may minimum na oras na kailangan dahil sa layo. Ang packet loss naman parang mga parcel na nawala sa daan — kailangan pang ipadala ulit, kaya mas matagal pa ang kabuuang proseso. Ang wireless interference naman parang maraming taong sabay-sabay na nagsasalita sa parehong sound system — magulo, magkakahalo ang boses, hindi malinaw ang narinig ninuman.',
    },
    howItWorks: [
      'Congestion is diagnosed by observing high utilization on a link during the affected time period, often correlating with known peak usage times.',
      'Latency is measured directly via tools like ping (round-trip time) and traceroute (per-hop latency), helping isolate whether delay is occurring at a specific point in the path or overall.',
      'Packet loss is measured via extended ping tests or dedicated tools, and its presence forces TCP retransmissions, which further consume bandwidth and worsen perceived performance beyond the raw loss percentage alone.',
      'Wireless interference is diagnosed using a Wi-Fi analyzer to visualize channel usage and overlap, and by considering physical sources of interference (microwaves, Bluetooth devices, thick walls, metal objects) near the affected area.',
      'These four problems often compound each other: congestion can cause both increased latency (queuing delay) and packet loss (buffer overflow) simultaneously, so isolating the root cause requires looking at the whole picture, not just one symptom.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Symptom</th><th>Likely Cause</th><th>Diagnostic Tool</th></tr></thead>
        <tbody>
          <tr><td>Slow only during business hours</td><td>Congestion</td><td>Utilization/bandwidth monitoring</td></tr>
          <tr><td>Consistent delay on every request</td><td>Latency (distance or path)</td><td>ping, traceroute</td></tr>
          <tr><td>Missing data, retransmissions</td><td>Packet loss</td><td>Extended ping tests, packet capture</td></tr>
          <tr><td>Wi-Fi issues only near the kitchen/microwave</td><td>Wireless interference</td><td>Wi-Fi analyzer</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'An office\'s video calls consistently degrade every day between 12-1 PM when everyone streams music and video during lunch — this pattern-matching (specific, repeating time window) strongly points to congestion rather than a hardware fault, since a hardware problem would not correlate so precisely with a daily schedule.',
    proTips: [
      'Always check WHEN a performance problem occurs — a strong time-of-day correlation points toward congestion; a constant, unchanging problem points more toward latency, hardware, or configuration issues.',
      'Wireless interference troubleshooting should always include a simple physical check (what changed nearby? new microwave? new neighbor\'s network?) alongside any technical analyzer tools.',
    ],
    examAlert:
      'Expect the exam to describe a performance symptom pattern (only during peak hours, only in one physical area, consistent everywhere) and ask you to identify whether it is congestion, latency, packet loss, or interference — practice this pattern recognition specifically.',
    beginnerMistakes: [
      'Treating "the network is slow" as one problem instead of investigating which specific performance metric (congestion, latency, packet loss, interference) is actually responsible.',
      'Forgetting that packet loss triggers retransmissions, meaning its real-world performance impact is often worse than the raw loss percentage alone would suggest.',
      'Overlooking simple physical causes of wireless interference (a new microwave, a neighboring network) in favor of jumping straight to complex technical explanations.',
    ],
    keyTerms: [
      { term: 'Congestion', def: 'A condition where bandwidth demand exceeds available capacity, causing delays and potential packet loss.' },
      { term: 'Wireless interference', def: 'Degraded Wi-Fi performance caused by channel overlap, non-Wi-Fi devices, or physical obstructions.' },
    ],
    commands: [
      { os: 'Windows/Linux', cmd: 'ping -n 100 <host> (Windows) / ping -c 100 <host> (Linux)', desc: 'Extended ping test to reveal packet loss patterns over many attempts.' },
      { os: 'Windows', cmd: 'tracert <host>', desc: 'Shows per-hop latency to help isolate where delay is introduced.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A company\'s network consistently slows down every day between 12 and 1 PM. What is this pattern most consistent with?',
        options: ['A hardware failure', 'Congestion during peak usage', 'A DNS misconfiguration', 'A duplicate IP address'],
        correct: 1,
        explanation: 'A precise, repeating daily time correlation strongly suggests congestion during a predictable peak usage window.',
      },
      {
        prompt: 'What is a direct consequence of packet loss on overall network performance?',
        options: [
          'It has no real effect on performance.',
          'It forces retransmissions, which further consume bandwidth and worsen perceived performance.',
          'It automatically increases available bandwidth.',
          'It only affects wireless networks, never wired ones.',
        ],
        correct: 1,
        explanation: 'Lost packets must be retransmitted, compounding the performance impact beyond the raw loss percentage.',
      },
      {
        prompt: 'Wi-Fi performance degrades specifically near the office kitchen. What should you investigate?',
        options: [
          'A BGP misconfiguration.',
          'Wireless interference, possibly from a microwave or other 2.4 GHz device nearby.',
          'A duplicate IP address.',
          'An expired SSL certificate.',
        ],
        correct: 1,
        explanation: 'Localized Wi-Fi problems near a kitchen strongly suggest interference from microwaves or similar devices.',
      },
    ],
    miniScenario: {
      prompt: 'Users report video calls freezing randomly throughout the day, with no clear time pattern, and ping tests show occasional missing responses.',
      task: 'Identify which specific performance problem this points to, and name a tool you would use to investigate further.',
    },
    recap:
      'Congestion occurs when demand exceeds capacity; latency is delivery delay; packet loss is data that never arrives, forcing retransmissions; wireless interference degrades Wi-Fi from channel overlap or physical sources. Time-of-day patterns and diagnostic tools (ping, traceroute, Wi-Fi analyzer) help distinguish between them.',
    classroomAnswer:
      '"Slow is not one problem — I check timing, run ping and traceroute, and consider what changed physically nearby before I ever guess at a cause."',
  };

  NetReady.LESSONS['13-6'] = {
    id: '13-6',
    moduleId: 13,
    slug: 'troubleshooting-tools-and-command-line-utilities',
    title: 'Troubleshooting Tools and Command-Line Utilities',
    estMinutes: 13,
    outcomes: [
      'Match common troubleshooting tools to their specific purpose.',
      'Identify which command-line utility answers a specific diagnostic question.',
      'Explain the difference between a protocol analyzer and a Wi-Fi analyzer.',
    ],
    whyItMatters:
      'This lesson is your toolbox reference — the fastest technicians are not the ones who guess best, they are the ones who know instantly which single tool answers the exact question in front of them.',
    simpleEnglish:
      'A protocol analyzer (like Wireshark) captures and inspects actual packet contents for deep troubleshooting. Command-line tools each answer a specific question: ping tests basic reachability, traceroute/tracert shows the path and per-hop latency, nslookup/dig tests DNS resolution, netstat/ss shows active connections and listening ports, arp shows IP-to-MAC mappings, and ipconfig/ifconfig/ip shows local interface configuration. A cable tester checks physical wiring integrity and continuity. A Wi-Fi analyzer visualizes wireless channel usage, signal strength, and interference sources.',
    taglish:
      'Ang protocol analyzer (tulad ng Wireshark) ay kumukuha at sumusuri ng aktwal na laman ng packet para sa malalim na troubleshooting. Ang mga command-line tool naman, bawat isa may sariling sinasagot na tanong: ang ping ay sumusubok ng basic reachability, ang traceroute/tracert ay nagpapakita ng landas at latency bawat hop, ang nslookup/dig ay sumusubok ng DNS resolution, ang netstat/ss ay nagpapakita ng mga aktibong koneksyon at listening ports, ang arp ay nagpapakita ng IP-to-MAC mappings, at ang ipconfig/ifconfig/ip ay nagpapakita ng local interface configuration. Ang cable tester naman sumusuri ng integridad at continuity ng pisikal na wiring. Ang Wi-Fi analyzer naman nagpapakita ng paggamit ng wireless channel, lakas ng signal, at pinagmumulan ng interference.',
    analogy: {
      title: 'Toolbox ng isang mekaniko',
      text:
        'Isipin mo ang bawat tool parang specific na kagamitan sa toolbox ng isang mekaniko — hindi mo gagamitin ang martilyo para sa gawaing kailangan ng destornilyador. Ang ping ay parang pagkatok sa pinto para lang malaman kung may tao — mabilis, basic lang. Ang traceroute naman parang pagsundan mo ang buong biyahe ng courier mula umpisa hanggang dulo, tinitignan kung saan siya nagpahinga sa bawat himpilan. Ang protocol analyzer naman parang binuksan mo mismo ang parsel para basahin ang eksaktong laman nito — pinaka-detalyado sa lahat.',
    },
    howItWorks: [
      'Ping (ICMP echo request/reply) confirms basic Layer 3 reachability and round-trip latency to a destination — the fastest first-check tool for "is it even reachable."',
      'Traceroute/tracert reveals the path packets take and the latency at each hop, helping isolate exactly where delay or failure occurs along a multi-hop path.',
      'Nslookup/dig test DNS resolution directly, isolating whether a problem is DNS-related versus a deeper connectivity issue.',
      'Netstat/ss show active network connections and listening ports on a local machine, useful for confirming a service is actually listening or identifying unexpected connections.',
      'Arp displays the local IP-to-MAC address mapping table, useful for diagnosing duplicate IP conflicts or confirming a device is being seen correctly on the local segment.',
      'A protocol analyzer captures full packet contents for deep inspection — the tool of last resort when higher-level tools cannot explain a problem, but requiring more time and expertise to interpret.',
      'A cable tester verifies physical wiring (continuity, correct pinout, opens/shorts) — the appropriate first tool when a physical-layer problem is suspected.',
      'A Wi-Fi analyzer visualizes channel usage, signal strength, and overlapping networks — the appropriate tool for diagnosing wireless-specific performance problems.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Question You're Asking</th><th>Tool to Use</th></tr></thead>
        <tbody>
          <tr><td>"Is the destination reachable at all?"</td><td>ping</td></tr>
          <tr><td>"Where along the path is the delay/failure?"</td><td>traceroute / tracert</td></tr>
          <tr><td>"Is DNS resolving this name correctly?"</td><td>nslookup / dig</td></tr>
          <tr><td>"What is this machine currently connected to?"</td><td>netstat / ss</td></tr>
          <tr><td>"Is there an IP/MAC conflict on this segment?"</td><td>arp</td></tr>
          <tr><td>"What is actually inside these packets?"</td><td>protocol analyzer (Wireshark)</td></tr>
          <tr><td>"Is this physical cable wired correctly?"</td><td>cable tester</td></tr>
          <tr><td>"What's happening across Wi-Fi channels here?"</td><td>Wi-Fi analyzer</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A technician troubleshooting "the website is slow" runs ping (confirms basic reachability and rough latency), then traceroute (isolates that the delay appears at one specific hop outside the company\'s own network), concluding the problem lies with an upstream provider rather than internal infrastructure — all without ever needing a full protocol analyzer capture.',
    proTips: [
      'Work from the simplest, fastest tool (ping) toward more complex ones (protocol analyzer) only as needed — do not reach for the most powerful tool first when a simpler one answers the question just as well.',
      'Memorize this lesson\'s "question to tool" table directly — it maps almost one-to-one onto how real troubleshooting conversations actually unfold.',
    ],
    examAlert:
      'The exam frequently describes a diagnostic need in plain language ("verify DNS is resolving correctly," "see the path packets take") and asks you to name the specific tool — practice this exact mapping until it is automatic.',
    beginnerMistakes: [
      'Reaching for a full protocol analyzer capture before trying simpler, faster tools like ping and traceroute first.',
      'Confusing a protocol analyzer (captures packet contents) with a Wi-Fi analyzer (visualizes wireless channel/signal conditions) — they solve very different problems.',
      'Forgetting that ARP tables are local-segment-only — they cannot tell you anything about devices beyond your own local network.',
    ],
    keyTerms: [
      { term: 'Protocol analyzer', def: 'A tool (like Wireshark) that captures and inspects full packet contents.' },
      { term: 'Wi-Fi analyzer', def: 'A tool that visualizes wireless channel usage, signal strength, and interference.' },
      { term: 'Cable tester', def: 'A tool that verifies physical cable wiring integrity and continuity.' },
    ],
    commands: [
      { os: 'Windows', cmd: 'ping, tracert, nslookup, netstat, arp, ipconfig', desc: 'Core Windows command-line troubleshooting utilities.' },
      { os: 'Linux/macOS', cmd: 'ping, traceroute, dig, ss, arp, ip', desc: 'Core Linux/macOS command-line troubleshooting utilities.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Which tool would you use to determine exactly which hop along a multi-hop path is introducing delay?',
        options: ['ping', 'traceroute / tracert', 'arp', 'ipconfig'],
        correct: 1,
        explanation: 'Traceroute reveals per-hop latency, isolating exactly where along the path delay occurs.',
      },
      {
        prompt: 'What is the key difference between a protocol analyzer and a Wi-Fi analyzer?',
        options: [
          'They are the same tool with different names.',
          'A protocol analyzer captures full packet contents; a Wi-Fi analyzer visualizes wireless channel usage and signal conditions.',
          'A Wi-Fi analyzer only works on wired networks.',
          'A protocol analyzer cannot be used on wireless networks at all.',
        ],
        correct: 1,
        explanation: 'These tools serve different diagnostic purposes — deep packet inspection versus wireless environment visualization.',
      },
      {
        prompt: 'You suspect two devices on the same local network segment have a duplicate IP address. Which tool helps confirm this?',
        options: ['traceroute', 'arp', 'nslookup', 'A Wi-Fi analyzer'],
        correct: 1,
        explanation: 'The ARP table shows IP-to-MAC mappings on the local segment, helping reveal conflicting entries.',
      },
    ],
    miniScenario: {
      prompt: 'A user reports "the internet is slow" with no other details provided.',
      task: 'Describe the order of at least three tools you would use to narrow down the actual cause, and what each one would tell you.',
    },
    recap:
      'Ping tests basic reachability; traceroute isolates per-hop delay; nslookup/dig test DNS; netstat/ss show active connections; arp shows local IP-to-MAC mappings; a protocol analyzer inspects full packet contents; a cable tester verifies physical wiring; a Wi-Fi analyzer visualizes wireless conditions. Work from simple to complex tools as needed.',
    classroomAnswer:
      '"Every troubleshooting question has a specific tool that answers it fastest — I start simple with ping and traceroute, and only reach for a full packet capture when those simpler tools genuinely cannot explain what I am seeing."',
  };
}(window.NetReady));
