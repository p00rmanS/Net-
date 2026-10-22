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
      { term: 'Latency', def: 'Delay in data delivery, caused by physical distance, congested links, or inefficient routing paths — measured directly with ping and traceroute.' },
      { term: 'Packet loss', def: 'Data that never arrives at its destination, forcing retransmissions that further degrade performance beyond the raw loss percentage alone.' },
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

  NetReady.LESSONS['13-7'] = {
    id: '13-7',
    moduleId: 13,
    slug: 'advanced-tools-and-device-show-commands',
    title: 'Advanced Troubleshooting Tools and Device "Show" Commands',
    estMinutes: 13,
    outcomes: [
      'Identify what Nmap, LLDP/CDP, and tcpdump are each used for.',
      'Explain the purpose of a visual fault locator, a speed tester, and a network tap.',
      'Match a basic networking device "show" command to the information it reveals.',
    ],
    whyItMatters:
      'Lesson 13-6 covered the everyday first-response tools — this lesson covers the more specialized tools and the exact device commands the exam expects you to recognize on sight, the ones you reach for only when the basics have already narrowed things down.',
    simpleEnglish:
      'Nmap is a network scanner that probes a range of addresses and ports to discover live hosts and identify which services are running on them. LLDP (Link Layer Discovery Protocol, vendor-neutral) and CDP (Cisco Discovery Protocol, Cisco-proprietary) let directly-connected devices automatically announce information about themselves (device type, port, capabilities) to their neighbor, which is invaluable for mapping a network you did not build yourself. Tcpdump is a command-line packet capture tool — functionally similar to Wireshark, but text-based and scriptable. A visual fault locator shines a visible laser through a fiber optic cable to reveal breaks or bad bends by literally showing where light leaks out. A speed tester measures actual, real-world throughput rather than a connection\'s theoretical rated speed. A network tap is a hardware device inserted inline between two devices that passively copies all passing traffic to a monitoring port, similar in purpose to port mirroring but implemented in dedicated hardware rather than switch configuration. On network devices themselves (mostly Cisco-style command-line interfaces), a family of "show" commands reveals different information directly from the device: show mac-address-table (the switch\'s MAC-to-port table), show route (the routing table), show interface (per-interface status, speed, and error counters), show config (the running or saved configuration), show arp (the device\'s ARP table), show vlan (VLAN-to-port assignments), and show power (PoE power budget and usage per port).',
    taglish:
      'Ang Nmap ay isang network scanner na sumususuri sa isang saklaw ng address at port para malaman kung aling mga host ang buhay at anong mga serbisyo ang tumatakbo sa kanila. Ang LLDP (vendor-neutral) at CDP (Cisco lang) ay nagpapahintulot sa mga direktang magkakonektang device na awtomatikong ipakilala ang sarili nila sa kapitbahay nila (klase ng device, port, kakayahan) — sobrang useful kapag hindi mo mismo ginawa ang network na iyong ina-audit. Ang tcpdump ay command-line na packet capture tool — halos pareho ng Wireshark, pero text-based at puwedeng i-script. Ang visual fault locator ay nagpapasok ng makikitang laser sa loob ng fiber optic cable para makita ang putol o baluktot na bahagi — literal mong makikita kung saan tumatagas ang liwanag. Ang speed tester ay sinusukat ang aktwal, totoong bilis, hindi lang ang teoretikal na rating ng koneksyon. Ang network tap ay hardware na inilalagay sa gitna ng dalawang device para kopyahin ang lahat ng dumadaang trapiko papunta sa isang monitoring port — kahalintulad ng port mirroring pero gamit ang dedikadong hardware sa halip na configuration lang. Sa mismong mga network device (kadalasan Cisco-style command line), may pamilya ng "show" commands na direktang nagpapakita ng impormasyon: show mac-address-table (MAC-to-port table ng switch), show route (routing table), show interface (status, bilis, at error counters bawat interface), show config (kasalukuyang o naka-save na configuration), show arp (ARP table ng device), show vlan (VLAN assignment bawat port), at show power (PoE power budget at paggamit bawat port).',
    analogy: {
      title: 'Ang mas sopistikadong toolbox sa likod ng service truck',
      text:
        'Sa Lesson 13-6, natutunan mo na ang mga pang-araw-araw na gamit — ang parang martilyo at destornilyador ng troubleshooting (ping, traceroute, arp). Pero minsan, kailangan mo ng mas sopistikadong kagamitan na nasa likod ng service truck, hindi laging dala-dala. Ang Nmap ay parang isang guwardiya na naglalakad sa buong gusali, kinakatok ang bawat pinto (port) para malaman kung alin ang bukas at anong klaseng silid (serbisyo) ang nasa likod nito. Ang LLDP at CDP naman ay parang mga device na nagbibigayan ng business card sa kapitbahay nila — awtomatiko nilang ipinapakilala ang sarili (modelo, port, kakayahan) sa direktang kausap nila, kaya kahit hindi mo alam kung ano ang nasa kabilang dulo ng kable, malalaman mo agad. Ang tcpdump ay parang Wireshark na walang graphical na interface — command-line lang, pero ganoon pa rin ka-detalyado ang nakikita. Ang visual fault locator ay parang flashlight na sinasabog mo sa loob ng fiber optic cable — kung may putol o sirang bahagi, makikita mo ang pulang liwanag na tumatagas doon. Ang speed tester ay literal na sinusukat ang aktwal na bilis, hindi lang ang teoretikal na rating. At ang network tap ay parang de-kalidad na dagdag-daanan na inilalagay sa gitna ng dalawang device para makopya ang lahat ng dumadaang trapiko papunta sa isang monitoring tool — passive lang, hindi nakikialam sa mismong daloy. At kung gusto mong marinig mismo ang sinasabi ng device tungkol sa sarili niya (sa halip na tanungin ang tao), tinatanong mo siya mismo gamit ang mga "show" command — parang hinihingi mo ang kanyang sariling logbook.',
    },
    howItWorks: [
      'Nmap scans a range of IP addresses and ports to discover live hosts and identify open ports/running services — useful for network discovery and auditing what is actually reachable.',
      'LLDP (vendor-neutral) and CDP (Cisco-only) let directly-connected devices exchange identity information automatically, making it much faster to map an unfamiliar network\'s physical topology.',
      'Tcpdump captures packet data from the command line, useful on servers or remote systems where a graphical tool like Wireshark is not practical.',
      'A visual fault locator shines visible laser light into fiber to reveal physical breaks or damage by sight, without needing specialized signal-testing equipment.',
      'A speed tester measures actual achieved throughput, which can reveal a real-world bottleneck that a device\'s rated "up to" speed does not.',
      'A network tap sits inline and passively duplicates all traffic to a monitoring device, offering a hardware-based alternative to switch-configured port mirroring.',
      '"Show" commands query the device directly for ground-truth data: show mac-address-table for Layer 2 forwarding entries, show route for the routing table, show interface for per-port status/errors, show config for the current configuration, show arp for IP-to-MAC mappings, show vlan for VLAN port assignments, and show power for PoE budget and draw.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Need To Know</th><th>Command / Tool</th></tr></thead>
        <tbody>
          <tr><td>Which hosts/ports are alive on a network?</td><td>Nmap</td></tr>
          <tr><td>What device is on the other end of this cable?</td><td>LLDP / CDP</td></tr>
          <tr><td>Command-line packet capture on a remote server?</td><td>tcpdump</td></tr>
          <tr><td>Exactly where is this fiber cable broken?</td><td>Visual fault locator</td></tr>
          <tr><td>What is our real, achieved throughput?</td><td>Speed tester</td></tr>
          <tr><td>Passively copy all inline traffic to a monitor?</td><td>Network tap</td></tr>
          <tr><td>Which port learned this MAC address?</td><td>show mac-address-table</td></tr>
          <tr><td>What does this router's routing table say?</td><td>show route</td></tr>
          <tr><td>Is this port up, and what are its error counters?</td><td>show interface</td></tr>
          <tr><td>What is this device's current configuration?</td><td>show config</td></tr>
          <tr><td>What VLAN is this port assigned to?</td><td>show vlan</td></tr>
          <tr><td>How much PoE power is this port drawing?</td><td>show power</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A technician inheriting an undocumented network runs LLDP neighbor discovery on each switch to rebuild an accurate physical topology map in an afternoon, instead of manually tracing every cable by hand.',
    proTips: [
      'Nmap is powerful enough to look like an attack if run against a network without authorization — always confirm you have explicit permission before scanning a network you do not own or manage.',
      'When two commands sound similar, tie them to what actually generated the entry: show mac-address-table reflects what the SWITCH learned at Layer 2, while show arp reflects what a DEVICE learned at Layer 3 — different tables, different layers.',
    ],
    examAlert:
      'The exam may describe a need in plain language ("see what device is connected to this port without asking anyone," "check how much PoE power this port is using") and expect you to name the exact tool or show command — treat the visual table in this lesson as a direct answer key to memorize.',
    beginnerMistakes: [
      'Confusing CDP (Cisco-only) with LLDP (works across vendors) — assuming CDP will work on non-Cisco gear.',
      'Forgetting that a network tap and port mirroring solve the same problem differently — a tap is dedicated hardware, port mirroring is a switch configuration feature.',
      'Running Nmap against a network without authorization — treat it with the same care as any other security tool.',
    ],
    keyTerms: [
      { term: 'Nmap', def: 'A network scanner that discovers live hosts and identifies open ports/services across a range of addresses.' },
      { term: 'LLDP / CDP', def: 'Protocols that let directly-connected devices automatically exchange identity information; LLDP is vendor-neutral, CDP is Cisco-proprietary.' },
      { term: 'Network tap', def: 'A hardware device inserted inline that passively duplicates all passing traffic to a monitoring port.' },
      { term: 'Visual fault locator', def: 'A tool that shines visible laser light into fiber optic cable to reveal physical breaks by sight.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A technician wants to identify what device is physically connected to a given switch port without physically tracing the cable or asking anyone. What should they use?',
        options: ['Nmap', 'LLDP or CDP neighbor information', 'A speed tester', 'show power'],
        correct: 1,
        explanation: 'LLDP/CDP let directly-connected devices announce their own identity automatically, revealing exactly what is on the other end.',
      },
      {
        prompt: 'Which tool would most directly help locate a physical break in a fiber optic cable?',
        options: ['tcpdump', 'A visual fault locator', 'Nmap', 'show vlan'],
        correct: 1,
        explanation: 'A visual fault locator shines visible light through the fiber, showing exactly where it leaks out at a break.',
      },
      {
        prompt: 'Which command would show a switch\'s Layer 2 table of which MAC addresses were learned on which ports?',
        options: ['show route', 'show power', 'show mac-address-table', 'show config'],
        correct: 2,
        explanation: 'show mac-address-table displays the switch\'s Layer 2 MAC-to-port forwarding table specifically.',
      },
    ],
    miniScenario: {
      prompt: 'You have just inherited management of a network with zero existing documentation, and need to find out what is actually connected to every switch port before your first change window.',
      task: 'Name the tool or protocol you would use first, and explain what it would tell you.',
    },
    recap:
      'Nmap discovers hosts/services; LLDP/CDP reveal directly-connected neighbor identity; tcpdump captures packets from the command line; a visual fault locator finds fiber breaks by sight; a speed tester measures real throughput; a network tap passively duplicates inline traffic. "Show" commands (mac-address-table, route, interface, config, arp, vlan, power) query a device directly for ground-truth data.',
    classroomAnswer:
      '"When I do not know a network, the very first thing I pull up is neighbor discovery and a few show commands — the devices themselves will tell you the truth faster than any diagram someone forgot to update."',
  };

  NetReady.LESSONS['13-8'] = NetReady.lesson(13, {
    id: '13-8',
    slug: 'physical-layer-troubleshooting-metrics',
    title: 'Physical Layer Troubleshooting: Crosstalk, Attenuation, Insertion Loss, Return Loss, Polarity, and LEDs',
    minutes: 13,
    outcomes: [
      `Define attenuation, crosstalk (NEXT/FEXT), insertion loss, and return loss.`,
      `Diagnose copper and fiber problems such as bent pins, TX/RX reversed, wrong cable type, and transceiver mismatch.`,
      `Interpret link LED indicators and basic interface counters.`,
    ],
    why: `The troubleshooting domain is the largest on the exam, and cabling and interface issues are an explicit objective. These terms appear in test reports and exam questions.`,
    simple: `Attenuation is the loss of signal strength as it travels; longer or poorer cables attenuate more. Crosstalk is interference from signals in adjacent pairs; NEXT (near-end crosstalk) is measured at the same end as the transmitter and FEXT at the far end. Insertion loss is the total signal loss through a link or connector; return loss measures signal reflected back, which is bad (higher return loss dB means less reflection, which is good). On fiber, dirty or poor connectors, tight bends, and the wrong polarity cause loss. Common physical problems include the wrong cable category, singlemode versus multimode mix-ups, a bent pin, damaged jacket, a transceiver that does not match the other end, TX and RX reversed, and exceeding distance limits. LED indicators show link and activity status at a glance.`,
    taglish: `Ang attenuation ay panghihina ng signal habang lumalayo; mas mahaba o mas mahina ang cable, mas malaki ang attenuation. Ang crosstalk ay interference mula sa katabing pares; NEXT sa malapit na dulo, FEXT sa malayong dulo. Ang insertion loss ay kabuuang nawala sa link o connector; ang return loss ay ang signal na bumabalik (reflection) — mas mataas na dB, mas kaunting reflection, mas maganda. Sa fiber, nagdudulot ng loss ang maruming connector, matalim na liko, at maling polarity. Karaniwang problema: maling category ng cable, singlemode at multimode na magkahalo, nabaluktot na pin, sirang jacket, hindi tugmang transceiver, TX at RX na nabaliktad, at paglampas sa distance limit. Ang LED ay mabilis na nagsasabi ng link at activity.`,
    analogy: {
      title: 'Hose ng tubig',
      text: `Ang attenuation ay humihinang tubig sa dulo ng mahabang hose. Ang crosstalk ay tubig na tumatagas mula sa katabing hose. Ang return loss ay tubig na bumabalik dahil sa barado. Ang bent pin ay buhol sa hose.`,
    },
    steps: [
      `Attenuation: measured in dB. Copper Ethernet is limited to 100 m (328 ft) for the permanent link plus patch cords. Exceeding it causes errors or no link.`,
      `Crosstalk: unwanted coupling between pairs. Twisted pairs, shielding, and proper termination reduce it. Untwisting wires too far at a jack or running cables next to power lines increases interference (EMI).`,
      `Insertion loss and return loss: certifiers measure them for both copper and fiber. High insertion loss means weak signal at the receiver; poor return loss indicates impedance mismatches or damaged connectors.`,
      `Fiber issues: dirty ferrules, excessive bending (violating the bend radius), broken fiber, and wrong polarity (transmit connected to transmit). Use a visual fault locator to see breaks with red light, and an OTDR to find the distance to a fault.`,
      `Wrong cable or media: using Cat 5 on a 10 Gbps link, using a patch cable made for voice (RJ-11) in an RJ-45 port, or connecting multimode optics to singlemode fiber leads to no link or high error rates.`,
      `Transceiver mismatch: both ends must use compatible optics (same wavelength and standard, SX with SX, LX with LX) and the host device must support the module; some vendors lock to branded optics.`,
      `Duplex and speed mismatches: late collisions, CRC errors, and low throughput; fix by matching or auto-negotiating both ends.`,
      `Bent or pushed-back pins: a connector with a damaged pin in the port or plug breaks one pair, and the link falls to 100 Mbps or fails. Inspect the port.`,
      `LED status: link light on means the physical link is up; blinking means activity; amber or off may indicate no link, a fault, a port error, or a speed fallback. Check the device manual because colors vary.`,
      `Interface counters: CRC errors and runts (physical or duplex issues), giants (MTU mismatch), drops (congestion), and input errors; clear the counters and watch whether they increase to tell old errors from active ones.`,
    ],
    table: {
      label: 'Table of physical layer symptoms and causes',
      head: ['Symptom', 'Likely cause'],
      rows: [
        ['No link light', 'Bad cable, port, wrong media, TX/RX reversed, no power'],
        ['Link at 100 Mbps instead of 1 Gbps', 'Damaged pair, bent pin, poor termination'],
        ['CRC errors rising', 'Bad cable, EMI, duplex mismatch, dirty fiber'],
        ['Works only with short cable', 'Attenuation, exceeded distance'],
        ['Fiber link will not come up', 'Polarity, SM/MM mismatch, dirty connector, wrong optic'],
        ['Intermittent drops when cable moves', 'Loose connector or broken conductor'],
      ],
      caption: 'Start at Layer 1: cable, connector, port, transceiver.',
    },
    example: `A conference room drop links at only 100 Mbps. The tester shows a split pair, and the jack has a bent contact. Re-terminating the jack and replacing the patch cable restores gigabit speed, and the CRC error counter stops rising.`,
    tips: [
      `Check LEDs and counters before opening a ticket with the carrier.`,
      `Swap one thing at a time: known-good cable, known-good port, known-good transceiver.`,
      `Clear counters, wait, then re-check to see if errors are still increasing.`,
    ],
    exam: `Know attenuation, crosstalk (NEXT/FEXT), insertion loss, return loss, the 100 m copper limit, SM/MM mismatch, TX/RX reversed, bent pins, duplex mismatch, and how to use LEDs and counters.`,
    mistakes: [
      `Replacing switches when the problem is a patch cable.`,
      `Using multimode optics on singlemode fiber.`,
      `Looking only at cumulative counters instead of watching for new errors.`,
    ],
    terms: [
      { term: 'Attenuation', def: `Loss of signal strength along a cable.` },
      { term: 'Crosstalk (NEXT/FEXT)', def: `Interference between adjacent pairs measured at the near or far end.` },
      { term: 'Insertion loss', def: `Total signal loss through a link or component.` },
      { term: 'Return loss', def: `Signal reflected back toward the source; higher dB is better.` },
      { term: 'Polarity', def: `Correct pairing of transmit and receive fibers.` },
      { term: 'CRC error', def: `Frame check failure, often from physical-layer problems.` },
    ],
    commands: [
      { os: 'Cisco IOS', cmd: 'show interfaces', desc: `Shows link status, CRC errors, runts, giants, and drops.` },
      { os: 'Cisco IOS', cmd: 'show interfaces transceiver', desc: `Displays optical power levels for an installed SFP.` },
      { os: 'Cisco IOS', cmd: 'clear counters', desc: `Resets interface counters so new errors can be spotted.` },
    ],
    checks: [
      {
        prompt: `A link negotiates 100 Mbps instead of 1 Gbps on a Cat 6 run. What is a likely cause?`,
        options: [`A damaged pair or bent pin`, `Expired DNS`, `Wrong VLAN`, `DHCP exhaustion`],
        correct: 0,
        explanation: `Gigabit needs all four pairs; a bad pair forces a fallback to 100 Mbps.`,
      },
      {
        prompt: `Which tool finds the distance to a break in a fiber cable?`,
        options: [`OTDR`, `Crimper`, `Tone probe`, `Multimeter`],
        correct: 0,
        explanation: `An optical time-domain reflectometer measures distance to faults and losses on fiber.`,
      },
      {
        prompt: `What does attenuation describe?`,
        options: [`Signal strength loss along the cable`, `Interference from nearby pairs`, `Reflected signal`, `Cable color`],
        correct: 0,
        explanation: `Attenuation is the weakening of a signal as it travels.`,
      },
    ],
    mini: {
      prompt: `A new SFP link shows no light though both ends use fiber.`,
      task: `Name three physical checks.`,
    },
    recap: `Layer 1 problems are measurable: attenuation, crosstalk, insertion loss, and return loss. Check the cable type, length, connectors, polarity, optics, LEDs, and counters first, swapping known-good parts one at a time.`,
    classroom: `"Bago mo sisihin ang software, tingnan mo muna ang kable, connector, at ilaw."`,
  });

  NetReady.LESSONS['13-9'] = NetReady.lesson(13, {
    id: '13-9',
    slug: 'network-service-and-host-issues',
    title: 'Network Service and Host Issues: Wrong Mask, Gateway, Duplicate IPs, Host Firewalls, Time, and Unresponsive Services',
    minutes: 13,
    outcomes: [
      `Diagnose incorrect subnet masks, gateways, and duplicate or expired IP addresses.`,
      `Recognize blocked ports from host firewalls and ACLs, and unresponsive services.`,
      `Explain how wrong time breaks Kerberos, certificates, and logs.`,
    ],
    why: `Network service issues are an explicit exam objective. Each symptom has a classic cause; matching them quickly is how you answer scenario questions.`,
    simple: `Most "network" problems are really configuration problems on the host or service. An incorrect subnet mask makes a host think remote devices are local (or local devices are remote), so it ARPs when it should use the gateway or the reverse. An incorrect default gateway allows local traffic but nothing beyond. A duplicate IP address causes intermittent connectivity and "IP conflict" warnings. An expired or missing lease leads to APIPA. A host-based firewall or an ACL can block specific TCP or UDP ports while ping still works. An unresponsive service means the port is closed or the process is stopped even though the host is up. Incorrect time breaks certificates, Kerberos authentication, and log correlation.`,
    taglish: `Kadalasan, ang "network problem" ay configuration problem sa host o service. Ang maling subnet mask ay nagpapalinlang sa host kung local o remote ang kausap. Ang maling gateway: gumagana ang local pero walang labas. Ang duplicate IP ay nagdudulot ng paputol-putol na koneksyon at "IP conflict". Ang expired o walang lease ay APIPA. Ang host firewall o ACL ay puwedeng harangan ang partikular na port habang gumagana ang ping. Ang unresponsive service ay sarado ang port o patay ang process kahit buhay ang host. Ang maling oras ay sumisira sa certificates, Kerberos, at logs.`,
    analogy: {
      title: 'Maling address sa sobre',
      text: `Kapag mali ang zip code (mask), napupunta ang sulat sa maling distrito. Kapag mali ang daan papunta sa post office (gateway), hindi lalabas ang sulat sa barangay. Kapag dalawang bahay ang may parehong numero (duplicate IP), pabago-bago ang tatanggap. Kapag sarado ang bintana ng opisina (service/port), hindi ka mapapagsilbihan kahit bukas ang gusali.`,
    },
    steps: [
      `Incorrect subnet mask: a host with 192.168.1.10/24 sees 192.168.1.50 as local, but if mistakenly set to /30 it sees it as remote and sends to the gateway, or if too wide it treats distant hosts as local and ARPs for them in vain.`,
      `Incorrect default gateway: the host can reach its own subnet but not other networks. Verify the gateway is on the same subnet and is the router's real interface.`,
      `Duplicate IP: two devices using one address cause intermittent connectivity and conflict pop-ups; find the second device with arp -a and the MAC addresses, then fix the DHCP reservation or static assignment.`,
      `Expired IP or DHCP failure: lease expired and not renewed; APIPA 169.254.x.x appears. Renew (ipconfig /release then /renew), check the DHCP server and relay.`,
      `Exhausted DHCP scope: no free addresses. Increase the scope, shorten the lease, or remove stale reservations.`,
      `Rogue DHCP server: wrong gateway and DNS received from an unauthorized device; check with ipconfig /all and use DHCP snooping.`,
      `Blocked TCP/UDP ports: host firewall (Windows Defender Firewall, iptables) or an ACL blocks a port; test with telnet, nc, Test-NetConnection, or Nmap to see if the port is open, closed, or filtered. A ping working does not mean the service port is open.`,
      `Unresponsive service: the server is up but the application is stopped or crashed; check the process or service status, listening ports with netstat -an or ss -ltn, and the service logs.`,
      `Incorrect time: Kerberos tolerates only a few minutes of clock skew; TLS certificates are checked against the date; logs from devices with different clocks cannot be correlated. Fix with NTP.`,
      `Untrusted SSL certificate and hardware failure: covered earlier; always include them in the checklist, together with NIC, switch port, and power supply faults.`,
    ],
    table: {
      label: 'Table of service symptoms and likely causes',
      head: ['Symptom', 'Likely cause'],
      rows: [
        ['Local works, nothing beyond', 'Wrong default gateway (or router down)'],
        ['Cannot reach some local hosts', 'Wrong subnet mask'],
        ['Intermittent drops and IP conflict message', 'Duplicate IP address'],
        ['169.254.x.x address', 'DHCP failure or expired lease'],
        ['Ping works but app fails', 'Blocked port or stopped service'],
        ['Login or certificate errors only on one device', 'Incorrect time'],
        ['Wrong gateway and DNS from DHCP', 'Rogue DHCP server'],
      ],
      caption: 'Symptom first, then the likely cause, then the proof.',
    },
    example: `A user can ping a file server but cannot open shares. Test-NetConnection to port 445 shows it is filtered. The user's laptop firewall profile switched to "Public" after a network change and blocked file sharing; changing the profile and adding the correct rule resolves it.`,
    tips: [
      `Test the port, not just ping. Ping proves IP reachability only.`,
      `Compare a working host against the broken one; the difference is often the bug.`,
      `Fix time with NTP before chasing mysterious authentication or certificate failures.`,
    ],
    exam: `Match symptoms to causes: no remote access = gateway; local partial = mask; intermittent = duplicate IP; 169.254 = DHCP; ping works but app fails = port or service; auth and certificate errors = time.`,
    mistakes: [
      `Assuming ping success means the service is available.`,
      `Disabling the host firewall instead of adding a precise rule.`,
      `Ignoring clock drift.`,
    ],
    terms: [
      { term: 'Duplicate IP', def: `Two devices using the same IP address on one network.` },
      { term: 'Host-based firewall', def: `Firewall running on the endpoint that filters its traffic.` },
      { term: 'Filtered port', def: `Port whose traffic is silently dropped by a firewall.` },
      { term: 'Clock skew', def: `Difference between device clocks that can break authentication.` },
      { term: 'Unresponsive service', def: `Service that does not answer even though the host is up.` },
    ],
    commands: [
      { os: 'Windows', cmd: 'Test-NetConnection server -Port 445', desc: `Tests whether a TCP port on a host is reachable.` },
      { os: 'Windows', cmd: 'netstat -an', desc: `Lists listening ports and active connections on a host.` },
      { os: 'Linux', cmd: 'ss -ltn', desc: `Lists listening TCP sockets.` },
      { os: 'Windows', cmd: 'w32tm /query /status', desc: `Shows the time service status and synchronization source.` },
    ],
    checks: [
      {
        prompt: `A host can reach devices on its own subnet but nothing beyond it. What is the most likely cause?`,
        options: [`Wrong default gateway`, `Duplicate MAC`, `Low RSSI`, `Wrong VLAN name`],
        correct: 0,
        explanation: `A bad or missing default gateway blocks traffic to other networks.`,
      },
      {
        prompt: `A server answers ping but the web application does not load. What should you test next?`,
        options: [`The TCP port and service status`, `The monitor cable`, `The DHCP lease`, `The router fan`],
        correct: 0,
        explanation: `Ping tests IP reachability; the port or service may be blocked or stopped.`,
      },
      {
        prompt: `Kerberos logins fail only on one workstation whose clock is 20 minutes off. What is the fix?`,
        options: [`Correct the time with NTP`, `Change the subnet mask`, `Replace the NIC`, `Add a VLAN`],
        correct: 0,
        explanation: `Kerberos requires clocks to be closely synchronized.`,
      },
    ],
    mini: {
      prompt: `A PC randomly loses connection and shows an "IP address conflict" message.`,
      task: `Describe two steps to find the other device.`,
    },
    recap: `Most service problems are host or configuration problems: mask, gateway, duplicate or expired IPs, blocked ports, stopped services, and wrong time. Test ports as well as pings and compare working and broken hosts.`,
    classroom: `"Ping lang ang unang hakbang. Sunod ang port, service, at oras."`,
  });

  NetReady.LESSONS['13-10'] = NetReady.lesson(13, {
    id: '13-10',
    slug: 'troubleshooting-software-tools-roundup',
    title: 'Troubleshooting Software Tools Roundup: Protocol Analyzers, Scanners, Speed Tests, Terminal Emulators, and IPAM',
    minutes: 13,
    outcomes: [
      `Choose the right software tool for a given troubleshooting task.`,
      `Explain the difference between a protocol analyzer, a port scanner, an IP scanner, and a NetFlow analyzer.`,
      `Recognize the role of terminal emulators, TFTP/SFTP servers, Wi-Fi analyzers, and IPAM.`,
    ],
    why: `The tools objective asks you to pick a tool from a description. This roundup gives you a one-line job for each so the choice is automatic.`,
    simple: `A protocol analyzer (Wireshark, tcpdump) captures and decodes packets so you can see exactly what is on the wire. A port scanner such as Nmap finds open ports and services on hosts; an IP scanner finds which addresses are alive on a subnet. A NetFlow or IPFIX analyzer summarizes who is talking to whom and how much, which reveals bandwidth hogs. A bandwidth speed tester measures throughput to a test server. A Wi-Fi analyzer shows nearby networks, channels, and signal strength. A terminal emulator (PuTTY, Tera Term) connects to device consoles over SSH, Telnet, or serial. A TFTP or SFTP server stores configuration backups and firmware images for devices. IPAM (IP address management) tracks subnets, addresses, and DHCP/DNS records in one place.`,
    taglish: `Ang protocol analyzer (Wireshark, tcpdump) ay kumukuha at nagde-decode ng packets. Ang port scanner gaya ng Nmap ay naghahanap ng bukas na port at service; ang IP scanner ay naghahanap ng aktibong address sa subnet. Ang NetFlow o IPFIX analyzer ay nagbubuod kung sino ang nag-uusap at gaano karami — nakikita ang bandwidth hog. Ang speed tester ay sumusukat ng throughput. Ang Wi-Fi analyzer ay nagpapakita ng kalapit na network, channel, at lakas. Ang terminal emulator (PuTTY, Tera Term) ay kumokonekta sa console gamit ang SSH, Telnet, o serial. Ang TFTP o SFTP server ay para sa backup ng config at firmware. Ang IPAM ay nagsusubaybay ng subnet, address, at DHCP/DNS records sa iisang lugar.`,
    analogy: {
      title: 'Toolbox ng mekaniko',
      text: `Bawat tool ay may trabaho: ang analyzer ay stethoscope, ang scanner ay flashlight na naghahanap ng mga bukas na pinto, ang flow analyzer ay traffic report, ang terminal emulator ay susi sa hood, at ang IPAM ay logbook ng lahat ng sasakyan sa garahe.`,
    },
    steps: [
      `Protocol analyzer (packet sniffer): Wireshark (GUI) and tcpdump (CLI). Captures traffic on an interface, applies capture and display filters, and follows TCP streams. Needs a mirror port or tap to see other devices' traffic on a switch. Beware of privacy: captures can include passwords sent in clear text.`,
      `Port scanner: Nmap identifies open TCP/UDP ports, services, and sometimes OS versions. Use only on networks you are authorized to test. Open, closed, and filtered are the three typical port states.`,
      `IP scanner: sweeps a range with ping or ARP to find active hosts and sometimes names and MAC addresses; useful for finding unknown devices and duplicate IPs.`,
      `NetFlow / sFlow / IPFIX analyzers: collect flow records from routers and switches to show top talkers, applications, and trends for capacity planning and spotting anomalies.`,
      `Bandwidth speed tester: measures upload and download throughput and latency to a test server; iperf measures throughput between two of your own hosts to isolate the network from the internet.`,
      `Wi-Fi analyzer: lists SSIDs, channels, signal strength, and interference; used for site surveys and channel planning. A spectrum analyzer goes further and shows non-Wi-Fi noise.`,
      `Terminal emulator: PuTTY, Tera Term, or SecureCRT provides console and remote CLI access to switches, routers, and firewalls using SSH, Telnet, or a serial COM port with a console cable.`,
      `TFTP/SFTP server: a simple file server for copying device configurations and firmware images. TFTP has no authentication or encryption, so prefer SFTP.`,
      `IPAM: central database of IP ranges, assignments, VLANs, and DHCP/DNS integration; prevents overlaps and duplicates and documents who uses what.`,
      `Built-in command-line tools complete the kit: ping, traceroute, nslookup/dig, ipconfig/ifconfig/ip, arp, netstat, route, and nmap, plus packet capture on the device itself.`,
    ],
    table: {
      label: 'Table matching tasks to software tools',
      head: ['Task', 'Tool'],
      rows: [
        ['See the packets on the wire', 'Protocol analyzer (Wireshark, tcpdump)'],
        ['Find open ports on a server', 'Port scanner (Nmap)'],
        ['Find which IPs are in use', 'IP scanner'],
        ['Find top bandwidth users', 'NetFlow / IPFIX analyzer'],
        ['Measure throughput between two hosts', 'iperf / speed tester'],
        ['Check channels and signal strength', 'Wi-Fi analyzer'],
        ['Connect to a device console', 'Terminal emulator (PuTTY)'],
        ['Back up configs and firmware', 'TFTP or SFTP server'],
        ['Track subnets and addresses', 'IPAM'],
      ],
      caption: 'One job per tool; choose the tool, then the filter.',
    },
    example: `Users complain that video calls are slow every Tuesday at 3 p.m. A NetFlow analyzer shows one server sending 700 Mbps to an external backup service at that hour. Moving the backup window and shaping it solves the complaints; a packet capture was not needed.`,
    tips: [
      `For "what is using all my bandwidth?" use flow data. For "what is inside this conversation?" use a packet capture.`,
      `Capture on the right interface and with a mirror port when looking at other hosts.`,
      `Scan and capture only with authorization.`,
    ],
    exam: `Match tool to purpose: analyzer = packets, Nmap = ports, IP scanner = live hosts, NetFlow = traffic summaries, Wi-Fi analyzer = signal and channels, terminal emulator = CLI access, TFTP = config transfer, IPAM = address tracking.`,
    mistakes: [
      `Running a packet capture on a switch port that cannot see the target traffic.`,
      `Using TFTP to move sensitive configs over untrusted networks.`,
      `Scanning networks you do not own or manage.`,
    ],
    terms: [
      { term: 'Protocol analyzer', def: `Software that captures and decodes network packets.` },
      { term: 'Port scanner', def: `Tool that finds open ports and services on hosts.` },
      { term: 'NetFlow / IPFIX', def: `Flow records that summarize traffic conversations.` },
      { term: 'Terminal emulator', def: `Program providing remote or console command-line access.` },
      { term: 'IPAM', def: `IP address management system for tracking addresses and subnets.` },
    ],
    checks: [
      {
        prompt: `Which tool would you use to see which TCP ports are open on a server?`,
        options: [`Nmap`, `A crimper`, `A tone generator`, `A loopback plug`],
        correct: 0,
        explanation: `Nmap is a port scanner that reports open, closed, and filtered ports.`,
      },
      {
        prompt: `You want to find which hosts are consuming the most bandwidth over the past day. What is best?`,
        options: [`NetFlow analyzer`, `Wire-map tester`, `Terminal emulator`, `TFTP server`],
        correct: 0,
        explanation: `Flow data summarizes top talkers and trends.`,
      },
      {
        prompt: `Which software is used to connect to a switch's console port over a serial cable?`,
        options: [`Terminal emulator such as PuTTY`, `Wi-Fi analyzer`, `IPAM`, `Packet sniffer`],
        correct: 0,
        explanation: `Terminal emulators support serial, SSH, and Telnet sessions to device CLIs.`,
      },
    ],
    mini: {
      prompt: `You must prove whether the network or the internet is the bottleneck for slow transfers between two of your own servers.`,
      task: `Which tool isolates this?`,
    },
    recap: `Pick the tool by the question: packets (analyzer), ports (Nmap), hosts (IP scanner), traffic volume (NetFlow), throughput (speed tester or iperf), Wi-Fi (analyzer), CLI (terminal emulator), file transfer (TFTP or SFTP), address tracking (IPAM).`,
    classroom: `"Una ang tanong, saka ang tool: packet, port, daloy, o address?"`,
  });
}(window.NetReady));
