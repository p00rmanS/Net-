/**
 * content/module-11.js — Module 11: Network Operations and Documentation
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  NetReady.LESSONS['11-1'] = {
    id: '11-1',
    moduleId: 11,
    slug: 'network-documentation',
    title: 'Network Documentation: Diagrams, Inventory, and IPAM',
    estMinutes: 12,
    outcomes: [
      'Differentiate a physical diagram from a logical diagram.',
      'Explain what IPAM tracks and why it matters at scale.',
      'Identify what belongs in an asset inventory and an SLA.',
    ],
    whyItMatters:
      'Undocumented networks are terrifying to inherit and painful to troubleshoot at 2 a.m. — good documentation is what turns a network from "tribal knowledge in one person\'s head" into something a whole team can safely maintain.',
    simpleEnglish:
      'A physical diagram shows the actual hardware, cabling, and physical layout (which port connects to which cable, which rack a device sits in). A logical diagram shows how data flows conceptually (IP addressing, VLANs, routing) regardless of physical location. A rack diagram documents exactly what equipment sits in each rack unit. A cable map records which physical cable connects which two points. Asset inventory tracks every device, its model, serial number, location, and owner. IPAM (IP Address Management) tracks which IP addresses are assigned, available, or reserved across the organization. An SLA (Service Level Agreement) documents the guaranteed performance/availability a provider commits to.',
    taglish:
      'Ang physical diagram ay nagpapakita ng aktwal na hardware, kableng gamit, at pisikal na layout — kung aling port kumokonekta sa aling kable, at kung aling rack nakalagay ang bawat device. Ang logical diagram naman ay nagpapakita kung paano dumadaloy ang data sa konsepto — IP addressing, VLANs, routing — hindi na mahalaga kung saan physically nakalagay. Ang rack diagram ay nagta-tala kung anong equipment ang nasa bawat rack unit. Ang cable map naman naitatala kung aling pisikal na kable ang kumokonekta sa aling dalawang punto. Ang asset inventory ay sinusubaybayan ang bawat device, modelo nito, serial number, lokasyon, at may-ari. Ang IPAM (IP Address Management) ay sinusubaybayan kung aling mga IP address ang nakatalaga na, available pa, o reserved sa buong organisasyon. Ang SLA (Service Level Agreement) naman ay dokumento ng garantisadong performance o availability na ipinapangako ng isang provider.',
    analogy: {
      title: 'Blueprint ng bahay vs. flowchart ng buhay sa loob',
      text:
        'Isipin mo ang physical diagram parang blueprint ng bahay — eksaktong sukat, saan nakalagay ang bawat kwarto at kable ng kuryente. Ang logical diagram naman parang flowchart kung paano gumagalaw ang mga tao at gawain sa loob ng bahay — hindi mahalaga kung saan eksaktong parte ng bahay, kundi ang daloy ng proseso. Ang IPAM ay parang listahan ng barangay kung aling house number ang okupado na, alin ang bakante, at alin ang nakareserba para sa hinaharap.',
    },
    howItWorks: [
      'Physical diagrams document real-world hardware layout: cabling paths, rack positions, port-to-port connections — essential for hands-on troubleshooting and cable tracing.',
      'Logical diagrams document IP addressing schemes, VLAN assignments, and routing paths — essential for understanding traffic flow and planning changes.',
      'Rack diagrams and cable maps are specialized physical documentation, critical in data centers where hundreds of devices and cables must be tracked precisely.',
      'Asset inventory maintains a complete record of every piece of hardware/software: model, serial number, purchase date, location, assigned owner, and warranty status.',
      'IPAM centrally tracks IP address allocation across an organization, preventing conflicts and making capacity planning possible as the network grows.',
      'An SLA documents measurable commitments (uptime percentage, response time, resolution time) between a provider and customer, forming the basis for accountability when something goes wrong.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Document</th><th>Answers the Question</th></tr></thead>
        <tbody>
          <tr><td>Physical diagram</td><td>"Which cable connects to which port?"</td></tr>
          <tr><td>Logical diagram</td><td>"How does traffic flow between networks?"</td></tr>
          <tr><td>Rack diagram</td><td>"What equipment sits in this specific rack?"</td></tr>
          <tr><td>Asset inventory</td><td>"What do we own, and who owns it?"</td></tr>
          <tr><td>IPAM</td><td>"Which IP addresses are used, free, or reserved?"</td></tr>
          <tr><td>SLA</td><td>"What performance did the provider promise?"</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'When a new network engineer joins a company with thorough documentation, they can trace a cable, understand the VLAN scheme, and check IP availability within their first day — without documentation, the same tasks might take weeks of guesswork and risky trial-and-error changes.',
    proTips: [
      'Keep physical and logical diagrams separate but cross-referenced — trying to cram both types of information onto one diagram usually makes it unreadable.',
      'IPAM becomes exponentially more valuable (and more necessary) as a network grows past what one person can just remember.',
    ],
    examAlert:
      'The exam commonly asks you to match a documentation type to the question it answers — practice recognizing "physical" vs. "logical" from a description of what the diagram shows.',
    beginnerMistakes: [
      'Confusing physical diagrams (cabling/hardware) with logical diagrams (IP addressing/traffic flow) — they serve different troubleshooting purposes.',
      'Letting documentation go stale after network changes — undocumented changes are often worse than no documentation at all, since they create false confidence.',
      'Treating an SLA as just a formality rather than the actual accountability mechanism it represents.',
    ],
    keyTerms: [
      { term: 'Physical diagram', def: 'Documentation showing actual hardware, cabling, and physical layout.' },
      { term: 'Logical diagram', def: 'Documentation showing IP addressing, VLANs, and traffic flow, independent of physical location.' },
      { term: 'IPAM', def: 'IP Address Management — tracks assigned, available, and reserved IP addresses across an organization.' },
      { term: 'SLA', def: 'Service Level Agreement — documents guaranteed performance/availability commitments from a provider.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Which type of diagram would you consult to trace which physical cable connects two specific devices?',
        options: ['Logical diagram', 'Physical diagram', 'An SLA', 'IPAM records'],
        correct: 1,
        explanation: 'Physical diagrams document actual cabling and hardware connections.',
      },
      {
        prompt: 'What does IPAM primarily track?',
        options: [
          'Which employees have building access.',
          'Which IP addresses are assigned, available, or reserved across the organization.',
          'The physical temperature of the server room.',
          'Which vendor supplied each cable.',
        ],
        correct: 1,
        explanation: 'IPAM centrally manages IP address allocation to prevent conflicts and support capacity planning.',
      },
      {
        prompt: 'What does an SLA document?',
        options: [
          'The physical cabling layout of a building.',
          'Guaranteed performance and availability commitments between a provider and customer.',
          'A list of all IP addresses in use.',
          'The logical VLAN structure of a network.',
        ],
        correct: 1,
        explanation: 'An SLA formally documents measurable service commitments, forming the basis for provider accountability.',
      },
    ],
    miniScenario: {
      prompt: 'A new engineer needs to understand how VLANs are structured across the company without caring which physical switch each device is plugged into.',
      task: 'Name which type of diagram they should consult, and explain why the other type would not help with this specific question.',
    },
    recap:
      'Physical diagrams document real hardware/cabling; logical diagrams document IP/VLAN/traffic flow. Asset inventory tracks ownership and details of equipment. IPAM tracks IP address allocation at scale. SLAs document measurable provider commitments.',
    classroomAnswer:
      '"Physical answers \'where is the cable,\' logical answers \'how does traffic flow\' — and once a network gets big enough, IPAM and asset inventory stop being nice-to-haves and become essential."',
  };

  NetReady.LESSONS['11-2'] = {
    id: '11-2',
    moduleId: 11,
    slug: 'lifecycle-change-configuration-management',
    title: 'Life-Cycle, Change, and Configuration Management',
    estMinutes: 12,
    outcomes: [
      'Differentiate End-of-Life (EOL) from End-of-Support (EOS).',
      'Explain why a formal change management process matters, even for "small" changes.',
      'Explain the purpose of a baseline configuration and configuration backups.',
    ],
    whyItMatters:
      'Most serious network outages are self-inflicted, caused by an unplanned or undocumented change — the processes in this lesson are the boring-sounding discipline that prevents exciting 3 a.m. outages.',
    simpleEnglish:
      'End-of-Life (EOL) means a manufacturer has stopped selling and developing a product; End-of-Support (EOS) means the manufacturer will no longer provide updates, patches, or support for it — devices past EOS are a growing security risk. Change management is a formal process for proposing, reviewing, approving, and documenting network changes before they happen, reducing the risk of unplanned outages. Configuration management maintains production configurations, backups of those configurations, and a known-good baseline configuration to compare against or restore from when something goes wrong.',
    taglish:
      'Ang End-of-Life (EOL) ay ibig sabihin, tumigil na ang manufacturer sa pagbebenta at pag-develop ng isang produkto. Ang End-of-Support (EOS) naman ay ibig sabihin, hindi na magbibigay ang manufacturer ng updates, patches, o support dito — malaking security risk na ang mga device na lagpas na sa EOS. Ang change management ay isang pormal na proseso ng pagmumungkahi, pagsusuri, pag-apruba, at pagdodokumento ng mga pagbabago sa network BAGO pa ito ipatupad — binabawasan nito ang panganib ng hindi inaasahang outage. Ang configuration management naman ay nagpapanatili ng production configurations, mga backup ng mga ito, at isang kilalang-mabuti na baseline configuration na ikukumpara o babalikan kapag may nagkamali.',
    analogy: {
      title: 'Retiradong makina at pinaplanong renovation',
      text:
        'Isipin mo ang EOL parang isang produkto na hindi na binebenta sa tindahan — luma na siya, pero minsan gumagana pa rin. Ang EOS naman parang wala nang technician na kayang mag-ayos nito kahit magbayad ka pa — mas delikado ito dahil kahit may sirain, walang tutulong. Ang change management ay parang kailangan mong kumuha ng permit at magpatingin sa architect bago ka gumawa ng renovation sa bahay — kahit maliit lang ang balak mong baguhin, kailangan pa ring dumaan sa proseso para hindi biglaang gumuho ang buong istruktura. Ang configuration backup naman parang litrato ng bahay mo bago ka nag-renovate — kung may masira, may babalikan ka pang dating hitsura.',
    },
    howItWorks: [
      'EOL marks the point a product is no longer manufactured or sold; EOS marks the (usually later) point support and security patches stop entirely — EOS is the more security-critical milestone.',
      'A formal change request typically documents what will change, why, the rollback plan if it fails, who approved it, and a scheduled maintenance window to minimize business impact.',
      'Change management review boards evaluate risk and potential conflicts (e.g., two teams accidentally scheduling conflicting changes on the same night) before approval.',
      'Production configuration is what is currently running on a device; a baseline configuration is a documented, known-good reference point representing intended, standard settings.',
      'Configuration backups are taken regularly (and always before a planned change) so a device can be quickly restored to a known state if a change causes problems, minimizing downtime during recovery.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Concept</th><th>Key Idea</th></tr></thead>
        <tbody>
          <tr><td>EOL</td><td>No longer manufactured/sold</td></tr>
          <tr><td>EOS</td><td>No more patches or support — a real security risk</td></tr>
          <tr><td>Change management</td><td>Formal approval + rollback plan before changes happen</td></tr>
          <tr><td>Baseline configuration</td><td>The documented, known-good "should look like this" reference</td></tr>
          <tr><td>Configuration backup</td><td>A restorable snapshot taken before/after changes</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A network outage caused by an engineer making an undocumented "quick fix" at 6 p.m. on a Friday is exactly the scenario change management processes are designed to prevent — a formal maintenance window, peer review, and rollback plan would have caught the risk beforehand.',
    proTips: [
      'Always take a configuration backup immediately before making any change, even a "safe" one — this single habit turns most mistakes into a two-minute rollback instead of a multi-hour incident.',
      'Track EOS dates for critical infrastructure proactively — waiting until something breaks post-EOS to plan a replacement is a common, expensive real-world mistake.',
    ],
    examAlert:
      'The exam may describe an unapproved, undocumented change causing an outage and ask what process failure occurred — recognize this as a change management failure specifically.',
    beginnerMistakes: [
      'Confusing EOL (no longer sold) with EOS (no longer supported/patched) — EOS is the more urgent security concern.',
      'Treating change management as unnecessary bureaucracy for "small" changes — small, unreviewed changes cause a disproportionate share of real outages.',
      'Forgetting to take a configuration backup before making changes, leaving no easy path back if something goes wrong.',
    ],
    keyTerms: [
      { term: 'EOL (End-of-Life)', def: 'The point at which a manufacturer stops selling and developing a product.' },
      { term: 'EOS (End-of-Support)', def: 'The point at which a manufacturer stops providing updates, patches, and support for a product.' },
      { term: 'Change management', def: 'A formal process for proposing, reviewing, approving, and documenting changes before implementation.' },
      { term: 'Baseline configuration', def: 'A documented, known-good reference configuration used for comparison and restoration.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the key difference between EOL and EOS?',
        options: [
          'They mean exactly the same thing.',
          'EOL means the product is no longer sold; EOS means the manufacturer no longer provides patches or support.',
          'EOS always happens before EOL.',
          'EOL only applies to software, never hardware.',
        ],
        correct: 1,
        explanation: 'EOL is about sales/manufacturing; EOS is about ongoing patches and support, usually the more urgent security milestone.',
      },
      {
        prompt: 'Why is a formal change management process important, even for small changes?',
        options: [
          'It is mostly unnecessary bureaucracy.',
          'A disproportionate share of real outages are caused by small, unreviewed, undocumented changes.',
          'It only matters for changes affecting more than 1000 users.',
          'It replaces the need for any configuration backups.',
        ],
        correct: 1,
        explanation: 'Even small changes benefit from review and a rollback plan, since many real incidents trace back to exactly this kind of change.',
      },
      {
        prompt: 'What is the purpose of a baseline configuration?',
        options: [
          'It is a random default setting with no real use.',
          'It serves as a documented, known-good reference point to compare against or restore from.',
          'It only applies to brand-new devices.',
          'It replaces the need for a change management process.',
        ],
        correct: 1,
        explanation: 'A baseline is the standard, documented reference used to detect drift or restore a known-good state.',
      },
    ],
    miniScenario: {
      prompt: 'An engineer makes an unapproved configuration change on a Friday evening to "quickly fix" a minor issue, and the network goes down an hour later with no one else aware of what changed.',
      task: 'Identify which process failure occurred, and describe one thing that could have prevented or minimized the outage.',
    },
    recap:
      'EOL means no longer sold; EOS means no longer supported/patched, the more urgent security concern. Change management formally reviews and approves changes before implementation. Configuration management maintains baselines and backups so devices can be restored to a known-good state.',
    classroomAnswer:
      '"Every change I make, I ask: is this approved, is there a rollback plan, and did I back up the current config first — skipping any of those three is how small fixes turn into big outages."',
  };

  NetReady.LESSONS['11-3'] = {
    id: '11-3',
    moduleId: 11,
    slug: 'network-monitoring-and-logging',
    title: 'Network Monitoring: SNMP, Flow Data, and Log Aggregation',
    estMinutes: 13,
    outcomes: [
      'Explain what SNMP is used for and its basic components.',
      'Differentiate flow data from full packet capture.',
      'Explain the purpose of port mirroring and log aggregation.',
    ],
    whyItMatters:
      'You cannot fix — or even notice — a problem you cannot see. Monitoring is what turns a network from a black box into something you can actually observe and understand in real time.',
    simpleEnglish:
      'SNMP (Simple Network Management Protocol) lets network devices report status and statistics to a central monitoring system, using components like managed devices, agents, and a network management station (NMS). Flow data (like NetFlow or sFlow) records summary information about traffic (source, destination, volume) without capturing full packet contents, useful for spotting trends efficiently. Full packet capture records complete packet contents for deep analysis, but requires far more storage and processing. Port mirroring (SPAN) copies traffic from one switch port to another so a monitoring tool can observe it without being directly in the traffic path. Log aggregation collects logs from many devices into one central system (like a SIEM) for easier searching, correlation, and alerting.',
    taglish:
      'Ang SNMP (Simple Network Management Protocol) ay nagpapahintulot sa mga network device na mag-report ng status at estadistika papunta sa isang sentral na monitoring system, gamit ang mga bahagi tulad ng managed devices, agents, at network management station (NMS). Ang flow data (tulad ng NetFlow o sFlow) ay nagtatala ng buod na impormasyon ng traffic (source, destination, dami) nang hindi kinukuha ang buong laman ng packet — mabilis at efficient para sa pagtukoy ng trend. Ang full packet capture naman kinukuha ang KOMPLETONG laman ng packet para sa malalim na analysis, pero mas malaki ang storage at processing na kailangan. Ang port mirroring (SPAN) ay kumokopya ng traffic mula sa isang switch port papunta sa iba, para makita ito ng monitoring tool nang hindi direktang nasa daanan ng traffic. Ang log aggregation naman ay nagtitipon ng logs mula sa maraming device papunta sa isang sentral na sistema (tulad ng SIEM) para mas madaling maghanap, mag-correlate, at mag-alerto.',
    analogy: {
      title: 'CCTV summary report vs. buong recording',
      text:
        'Isipin mo ang flow data parang isang buod na ulat mula sa CCTV — "may 50 taong pumasok sa pintuan mula 9am hanggang 10am" — mabilis basahin, hindi masyadong malaki ang file, pero limitado ang detalye. Ang full packet capture naman parang buong video recording ng CCTV — makikita mo LAHAT ng detalye, pero sobrang laki ng espasyong kinukuha. Ang port mirroring ay parang paglalagay ng dagdag na camera na nanonood lang, hindi kasali sa aktwal na daanan ng mga tao. Ang log aggregation naman parang isang sentral na control room na tumatanggap ng report mula sa lahat ng guard sa bawat pasukan ng building, sa halip na kailangan mong puntahan ang bawat isa nang hiwalay.',
    },
    howItWorks: [
      'SNMP uses managed devices (network equipment being monitored), agents (software on those devices reporting data), and a Network Management Station (NMS) that collects and displays that data, often triggering alerts on defined thresholds.',
      'Flow data protocols summarize traffic metadata (who talked to whom, how much, when) efficiently, ideal for capacity planning and spotting unusual traffic patterns without heavy storage costs.',
      'Full packet capture records everything, byte-for-byte, needed for deep forensic investigation or protocol-level troubleshooting, but is resource-intensive and typically used selectively, not continuously, for that reason.',
      'Port mirroring (also called SPAN on some platforms) duplicates traffic from a source port to a destination port where a monitoring tool (like an IDS or packet analyzer) is connected, without disrupting the original traffic flow.',
      'Log aggregation (often into a SIEM — Security Information and Event Management system) centralizes logs from firewalls, servers, switches, and more, enabling correlation across multiple sources that would be impossible to spot by checking each device\'s local logs individually.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Tool</th><th>Captures</th><th>Best For</th></tr></thead>
        <tbody>
          <tr><td>SNMP</td><td>Device status/statistics</td><td>General health monitoring, alerting</td></tr>
          <tr><td>Flow data (NetFlow/sFlow)</td><td>Traffic metadata summaries</td><td>Trend analysis, capacity planning</td></tr>
          <tr><td>Full packet capture</td><td>Complete packet contents</td><td>Deep forensic/protocol analysis</td></tr>
          <tr><td>Port mirroring</td><td>A copy of live traffic</td><td>Feeding traffic to an IDS/analyzer</td></tr>
          <tr><td>Log aggregation / SIEM</td><td>Logs from many devices, centralized</td><td>Correlation, searching, alerting</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A SOC analyst investigating a suspected breach might start with SIEM log correlation to spot the anomaly across multiple systems, then use port-mirrored full packet capture on the specific suspicious host to see exactly what data was transmitted.',
    proTips: [
      'Use flow data for everyday trend monitoring (cheap, always-on) and reserve full packet capture for targeted, temporary deep-dive investigations (expensive, short-term).',
      'A SIEM\'s real value is correlation — spotting a pattern across multiple devices\' logs that would be invisible looking at any single device\'s log alone.',
    ],
    examAlert:
      'Expect the exam to describe a monitoring need (e.g., "capture full packet contents for a security investigation" vs. "efficiently monitor overall traffic trends") and ask which tool fits — practice matching need to tool.',
    beginnerMistakes: [
      'Assuming full packet capture should always be running everywhere — its cost and storage requirements make this impractical at scale.',
      'Confusing flow data (traffic metadata/summaries) with full packet capture (complete packet contents) — they serve very different purposes.',
      'Forgetting port mirroring is specifically how you get traffic TO a monitoring tool that is not naturally in the traffic\'s path.',
    ],
    keyTerms: [
      { term: 'SNMP', def: 'Simple Network Management Protocol — lets devices report status/statistics to a central management station.' },
      { term: 'Flow data', def: 'Summarized traffic metadata (like NetFlow/sFlow), without full packet contents.' },
      { term: 'Port mirroring (SPAN)', def: 'Copying traffic from one switch port to another for monitoring purposes.' },
      { term: 'SIEM', def: 'Security Information and Event Management — centralizes and correlates logs from many sources.' },
    ],
    commands: [
      { os: 'Windows/Linux', cmd: 'tcpdump / Wireshark', desc: 'Common tools for capturing and analyzing full packet contents.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the key difference between flow data and full packet capture?',
        options: [
          'They are identical in what they record.',
          'Flow data summarizes traffic metadata efficiently; full packet capture records complete packet contents at much higher resource cost.',
          'Flow data only works on wireless networks.',
          'Full packet capture is always cheaper to store than flow data.',
        ],
        correct: 1,
        explanation: 'Flow data is lightweight summary information; full packet capture is complete and resource-intensive.',
      },
      {
        prompt: 'What is the purpose of port mirroring?',
        options: [
          'To physically duplicate a switch.',
          'To copy traffic from one switch port to another so a monitoring tool can observe it without being in the direct traffic path.',
          'To encrypt traffic between two switches.',
          'To assign IP addresses to monitoring tools automatically.',
        ],
        correct: 1,
        explanation: 'Port mirroring routes a copy of traffic to a monitoring destination without disrupting the original flow.',
      },
      {
        prompt: 'What is the main value of log aggregation into a SIEM?',
        options: [
          'It eliminates the need for any individual device logging.',
          'It enables correlation across multiple log sources that would be invisible checking each device individually.',
          'It only stores logs for one day at a time.',
          'It replaces the need for SNMP monitoring.',
        ],
        correct: 1,
        explanation: 'Centralizing and correlating logs across sources reveals patterns invisible from any single device\'s logs alone.',
      },
    ],
    miniScenario: {
      prompt: 'A SOC analyst suspects a specific host on the network is exfiltrating data, and needs to see the exact content of its outbound traffic without disrupting the network.',
      task: 'Describe how port mirroring and full packet capture would be used together to investigate this.',
    },
    recap:
      'SNMP reports device status to a central NMS. Flow data efficiently summarizes traffic trends; full packet capture records everything for deep analysis. Port mirroring feeds live traffic to monitoring tools. Log aggregation (often via SIEM) centralizes and correlates logs across many devices.',
    classroomAnswer:
      '"For everyday visibility I lean on SNMP and flow data — when I need to see exactly what happened, that\'s when port mirroring and full packet capture come in, and a SIEM ties it all together across every device at once."',
  };

  NetReady.LESSONS['11-4'] = {
    id: '11-4',
    moduleId: 11,
    slug: 'disaster-recovery-rpo-rto-mtbf-mttr',
    title: 'Disaster Recovery: RPO, RTO, MTTR, MTBF, and Site Types',
    estMinutes: 13,
    outcomes: [
      'Differentiate RPO from RTO.',
      'Differentiate MTTR from MTBF.',
      'Differentiate cold, warm, and hot disaster recovery sites.',
    ],
    whyItMatters:
      'When disaster actually strikes, these are not abstract acronyms — they are the exact numbers that determine how much data a company loses and how long the business is actually down.',
    simpleEnglish:
      'RPO (Recovery Point Objective) is the maximum acceptable amount of data loss, measured in time — "how much data can we afford to lose?" RTO (Recovery Time Objective) is the maximum acceptable downtime — "how quickly must we be back up?" MTTR (Mean Time To Repair/Recover) is the average time it actually takes to fix a failure once it happens. MTBF (Mean Time Between Failures) is the average time a system runs before it fails, a reliability measure. A cold site is a backup location with basic infrastructure but no ready systems (slowest to activate, cheapest); a warm site has some systems ready but not fully current; a hot site is a fully mirrored, ready-to-go duplicate environment (fastest to activate, most expensive).',
    taglish:
      'Ang RPO (Recovery Point Objective) ay ang pinaka-malaking dami ng data loss na katanggap-tanggap, sinusukat sa oras — "hanggang kailan ang datos na kayang isakripisyo?" Ang RTO (Recovery Time Objective) naman ay ang pinaka-malaking downtime na katanggap-tanggap — "gaano kabilis dapat bumalik online?" Ang MTTR (Mean Time To Repair) ay ang average na oras na aktwal na inaabot para maayos ang isang sira. Ang MTBF (Mean Time Between Failures) naman ay ang average na oras na tumatakbo ang isang sistema bago ito masira — sukatan ito ng reliability. Ang cold site ay isang backup na lokasyon na may basic na imprastraktura lang pero walang handang sistema (pinaka-mabagal i-activate, pinaka-mura). Ang warm site naman may ilang handang sistema pero hindi fully updated. Ang hot site ay kumpletong mirrored na duplicate environment na handa na agad (pinaka-mabilis i-activate, pinaka-mahal).',
    analogy: {
      title: 'Backup na kopya ng sulat at klase ng backup na bahay',
      text:
        'Isipin mo ang RPO parang tinatanong, "Kailan ang huling beses na na-save mo ang document mo?" — kung 1 oras ang RPO mo, ibig sabihin katanggap-tanggap lang na mawala ang huling 1 oras ng trabaho. Ang RTO naman parang tinatanong, "Gaano katagal bago mo ulit magagawang gumana normal?" Ang cold, warm, at hot site naman parang tatlong klase ng backup na bahay: ang cold site parang blangkong lote na kailangan mo pang tayuan mula umpisa; ang warm site parang bahay na may bubong at ilang muwebles na pero hindi pa fully move-in ready; ang hot site naman parang eksaktong kaparehong bahay na fully furnished at handa ka na lang tumira agad, kahit anong oras.',
    },
    howItWorks: [
      'RPO drives backup frequency: an RPO of 1 hour means backups must happen at least every hour, or a failure could lose up to an hour of data.',
      'RTO drives recovery infrastructure investment: a very short RTO (minutes) generally requires a hot site or similar high-cost, ready-to-go solution; a longer RTO (days) can tolerate a cheaper cold site.',
      'MTBF is a predictive reliability metric (how long until it breaks, on average); MTTR is a reactive recovery metric (how long to fix it once it does break) — together they inform overall system availability.',
      'A cold site requires significant time (days to weeks) to become operational, since equipment must be installed and data restored from backups.',
      'A warm site has some hardware already in place and may have periodically-updated data, cutting activation time to hours.',
      'A hot site continuously mirrors production data and systems, allowing near-instant failover, at significantly higher ongoing cost.',
      'Active-active configurations run production workloads simultaneously in two locations for maximum resilience; active-passive keeps a standby site ready but idle until needed.',
      'Disaster recovery plans must be tested regularly — an untested plan is not a reliable plan, since real failures often reveal gaps that look fine on paper.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Site Type</th><th>Readiness</th><th>Cost</th><th>Activation Time</th></tr></thead>
        <tbody>
          <tr><td>Cold site</td><td>Basic infrastructure only</td><td>Lowest</td><td>Days to weeks</td></tr>
          <tr><td>Warm site</td><td>Some systems ready, data not fully current</td><td>Medium</td><td>Hours</td></tr>
          <tr><td>Hot site</td><td>Fully mirrored, ready to go</td><td>Highest</td><td>Minutes</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A bank with an RPO of near-zero and an RTO of minutes invests in a hot site with continuous data replication, since even a few minutes of lost transaction data or downtime is unacceptable — a small local business might accept a cold site with daily backups and a 48-hour RTO instead, at a fraction of the cost.',
    proTips: [
      'RPO and RTO are business decisions, not just technical ones — they should come from what the business can actually tolerate, then the technical solution is built to meet them.',
      'Untested disaster recovery plans fail more often than tested ones for surprisingly mundane reasons (missing credentials, outdated contact lists) — regular testing is not optional.',
    ],
    examAlert:
      'The exam frequently tests RPO vs. RTO and MTTR vs. MTBF as direct definition-matching pairs — make sure you can state both pairs correctly without hesitation.',
    beginnerMistakes: [
      'Confusing RPO (acceptable data loss) with RTO (acceptable downtime) — they measure different things, even though both are expressed in time.',
      'Confusing MTBF (time between failures, reliability) with MTTR (time to repair, recovery speed).',
      'Assuming a hot site is always the "correct" choice — it is the most expensive option and only justified when RTO/RPO requirements truly demand it.',
    ],
    keyTerms: [
      { term: 'RPO', def: 'Recovery Point Objective — the maximum acceptable amount of data loss, measured in time.' },
      { term: 'RTO', def: 'Recovery Time Objective — the maximum acceptable downtime after a failure.' },
      { term: 'MTTR', def: 'Mean Time To Repair — the average time it takes to fix a failure.' },
      { term: 'MTBF', def: 'Mean Time Between Failures — the average time a system runs before failing.' },
      { term: 'Hot site', def: 'A fully mirrored, ready-to-activate disaster recovery site.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What does RPO measure?',
        options: [
          'The maximum acceptable downtime after a failure.',
          'The maximum acceptable amount of data loss, measured in time.',
          'The average time between system failures.',
          'The cost of a disaster recovery site.',
        ],
        correct: 1,
        explanation: 'RPO answers "how much data can we afford to lose," driving backup frequency requirements.',
      },
      {
        prompt: 'A bank requires near-instant failover with virtually no downtime. Which disaster recovery site type fits this requirement?',
        options: ['Cold site', 'Warm site', 'Hot site', 'No site is needed'],
        correct: 2,
        explanation: 'A hot site provides fully mirrored, ready-to-go infrastructure for near-instant failover, matching a very short RTO.',
      },
      {
        prompt: 'What is the difference between MTTR and MTBF?',
        options: [
          'They mean the same thing.',
          'MTTR is the average time to repair a failure; MTBF is the average time a system runs before failing.',
          'MTBF only applies to software, never hardware.',
          'MTTR measures data loss, not repair time.',
        ],
        correct: 1,
        explanation: 'MTTR is a reactive recovery-speed metric; MTBF is a predictive reliability metric.',
      },
    ],
    miniScenario: {
      prompt: 'A small local retail business can tolerate up to 48 hours of downtime and losing up to one day of sales data in a true disaster, and has a limited budget.',
      task: 'Recommend a disaster recovery site type for this business, and state its approximate RPO and RTO based on the scenario.',
    },
    recap:
      'RPO measures acceptable data loss; RTO measures acceptable downtime. MTBF measures reliability (time between failures); MTTR measures recovery speed (time to repair). Cold, warm, and hot sites offer increasing readiness at increasing cost, chosen based on RPO/RTO requirements.',
    classroomAnswer:
      '"RPO is about how much data I can afford to lose, RTO is about how fast I need to be back — and the disaster recovery site I choose should be the cheapest one that still meets both numbers."',
  };

  NetReady.LESSONS['11-5'] = {
    id: '11-5',
    moduleId: 11,
    slug: 'time-sync-and-remote-access-management',
    title: 'Time Synchronization (NTP/PTP) and Remote Access Methods',
    estMinutes: 11,
    outcomes: [
      'Explain why accurate time synchronization matters on a network.',
      'Differentiate NTP from PTP by precision requirements.',
      'Identify common remote access and management methods.',
    ],
    whyItMatters:
      'Nobody thinks about network time until logs from three different devices do not line up during an incident investigation — accurate, synchronized time is invisible infrastructure that matters enormously when things go wrong.',
    simpleEnglish:
      'NTP (Network Time Protocol) synchronizes clocks across devices with millisecond-level accuracy, sufficient for almost all general networking and logging purposes. PTP (Precision Time Protocol) provides much higher (sub-microsecond) accuracy, needed for specialized use cases like financial trading systems or industrial automation. NTS (Network Time Security) adds authentication and integrity protection to NTP, preventing attackers from maliciously altering time synchronization. Remote access and management methods include SSH (secure command-line access), GUI (graphical web/app-based management), API (programmatic automation access), and console (direct physical/serial connection for initial setup or recovery).',
    taglish:
      'Ang NTP (Network Time Protocol) ay nagsi-synchronize ng oras sa mga device na may accuracy na milliseconds — sapat na ito para sa halos lahat ng pangkalahatang networking at logging na pangangailangan. Ang PTP (Precision Time Protocol) naman ay nagbibigay ng mas mataas (sub-microsecond) na accuracy, kailangan para sa mga espesyal na gamit tulad ng financial trading system o industrial automation. Ang NTS (Network Time Security) ay nagdaragdag ng authentication at integrity protection sa NTP, para hindi ito ma-maniobra ng attacker. Ang remote access at management methods naman ay kinabibilangan ng SSH (secure na command-line access), GUI (graphical na web o app-based na management), API (programmatic na automation access), at console (direktang pisikal o serial na koneksyon para sa unang setup o recovery).',
    analogy: {
      title: 'Regular na relo vs. atomic clock',
      text:
        'Isipin mo ang NTP parang isang magandang relo sa pader — tumpak na tumpak na para sa pang-araw-araw na gamit, kahit medyo may ilang milliseconds na pagkakaiba. Ang PTP naman parang isang atomic clock na ginagamit ng mga siyentipiko — kailangan ang sobrang tumpak na precision, dahil kahit ilang microseconds na pagkakaiba ay may malaking epekto sa kanilang trabaho (tulad ng financial trading kung saan pati microseconds ay may halaga). Ang NTS naman parang naglagay ka ng lock sa relo para walang makapagbago ng oras nang walang pahintulot.',
    },
    howItWorks: [
      'NTP synchronizes device clocks against a hierarchy of time servers (stratum levels), typically achieving millisecond accuracy across a typical network.',
      'Accurate time matters enormously for correlating logs across multiple devices during incident investigation, for certificate validity checking, and for scheduled tasks/automation.',
      'PTP achieves sub-microsecond accuracy using hardware timestamping, required in specialized environments where NTP\'s precision is simply insufficient.',
      'NTS adds cryptographic authentication to time synchronization, protecting against attacks that attempt to manipulate a device\'s clock (which could otherwise undermine certificate validation or log correlation).',
      'SSH provides encrypted command-line remote management; GUI interfaces provide user-friendly visual management (often over HTTPS); APIs enable programmatic, automatable interaction with a device or system; console access provides direct, out-of-band access for initial configuration or recovery when the network itself is not yet functional.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Protocol/Method</th><th>Purpose</th><th>Key Detail</th></tr></thead>
        <tbody>
          <tr><td>NTP</td><td>General time sync</td><td>Millisecond accuracy</td></tr>
          <tr><td>PTP</td><td>Precision time sync</td><td>Sub-microsecond accuracy</td></tr>
          <tr><td>NTS</td><td>Secure time sync</td><td>Authenticates NTP against tampering</td></tr>
          <tr><td>SSH</td><td>Secure CLI remote access</td><td>Encrypted command-line management</td></tr>
          <tr><td>API</td><td>Programmatic access</td><td>Enables automation/scripting</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'During a security investigation, a SOC analyst correlating firewall, server, and switch logs relies entirely on those devices sharing accurate, synchronized time via NTP — without it, reconstructing the true sequence of events across devices becomes guesswork.',
    proTips: [
      'When investigating any multi-device incident, always confirm all devices\' clocks are actually synchronized before trusting timestamp-based correlation.',
      'APIs are increasingly how modern network automation and orchestration tools interact with devices — recognize this as a distinct, important management method, not just a developer curiosity.',
    ],
    examAlert:
      'The exam may ask you to choose between NTP and PTP based on a described precision requirement — "financial trading" or "industrial automation" precision needs signal PTP, not standard NTP.',
    beginnerMistakes: [
      'Assuming NTP\'s accuracy is insufficient for general use — millisecond accuracy is more than adequate for the vast majority of real-world networking needs; PTP is reserved for specialized precision requirements.',
      'Forgetting console access remains essential for initial device setup or recovery when the network itself is not yet reachable.',
      'Overlooking NTS as a real security control — unsynchronized or maliciously altered time can undermine certificate validation and log integrity.',
    ],
    keyTerms: [
      { term: 'NTP', def: 'Network Time Protocol — synchronizes device clocks with millisecond-level accuracy.' },
      { term: 'PTP', def: 'Precision Time Protocol — synchronizes clocks with sub-microsecond accuracy for specialized use cases.' },
      { term: 'NTS', def: 'Network Time Security — adds authentication and integrity protection to NTP.' },
      { term: 'Console access', def: 'Direct physical or serial connection to a device, used for initial setup or recovery.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Why does accurate time synchronization matter for a SOC analyst investigating an incident?',
        options: [
          'It has no real investigative value.',
          'It allows logs from multiple devices to be correlated accurately into a true sequence of events.',
          'It only matters for billing purposes.',
          'It replaces the need for any logging at all.',
        ],
        correct: 1,
        explanation: 'Accurate, synchronized time is essential for correctly reconstructing the order of events across multiple devices\' logs.',
      },
      {
        prompt: 'A financial trading system requires sub-microsecond timing precision. Which protocol fits this need?',
        options: ['NTP', 'PTP', 'DNS', 'DHCP'],
        correct: 1,
        explanation: 'PTP provides the much higher precision required by specialized use cases like financial trading.',
      },
      {
        prompt: 'What does console access provide that other remote management methods do not?',
        options: [
          'Faster performance than SSH.',
          'Direct, out-of-band access for initial setup or recovery, even when the network itself is not functional.',
          'Automatic encryption of all network traffic.',
          'Programmatic scripting capability.',
        ],
        correct: 1,
        explanation: 'Console access works even when normal network connectivity is unavailable, making it essential for initial setup and recovery scenarios.',
      },
    ],
    miniScenario: {
      prompt: 'A SOC team investigating a multi-device incident finds that timestamps in the firewall logs and server logs do not line up correctly for the same events.',
      task: 'Explain what underlying problem this points to, and which protocol would normally prevent it.',
    },
    recap:
      'NTP provides millisecond-accurate time sync for general use; PTP provides sub-microsecond precision for specialized needs; NTS secures NTP against tampering. Remote access/management methods include SSH (secure CLI), GUI, API (automation), and console (out-of-band initial/recovery access).',
    classroomAnswer:
      '"Time sync is invisible until it\'s wrong — and when I\'m correlating logs across devices during an investigation, NTP being accurate (and secured with NTS) is what makes that correlation trustworthy at all."',
  };

  NetReady.LESSONS['11-6'] = {
    id: '11-6',
    moduleId: 11,
    slug: 'organizational-documents-and-policies',
    title: 'Organizational Documents: MOU, MSA, NDA, AUP, SOP, and Incident Response Plans',
    estMinutes: 12,
    outcomes: [
      'Differentiate an MOU/MOA, an MSA, and an NDA by what each one actually governs.',
      'Explain what an AUP and an SOP each define within an organization.',
      'Describe the purpose of an incident response plan and how it relates to a business continuity plan.',
    ],
    whyItMatters:
      'The exam loves testing these acronyms because real IT work constantly runs into them — you cannot start a vendor project, share sensitive data, or respond to a breach without someone pointing at one of these documents first.',
    simpleEnglish:
      'An MOU (Memorandum of Understanding, sometimes called an MOA — Memorandum of Agreement) documents mutual intent between two parties to work together; it is less formal and generally not as legally binding as a full contract. An MSA (Master Service Agreement) is a contract that locks in the general terms and conditions that will govern all future work between two parties, so each new project only needs a short, specific statement of work instead of renegotiating everything from scratch. An NDA (Non-Disclosure Agreement) is a legal contract requiring the parties to keep specific shared information confidential. An AUP (Acceptable Use Policy) defines what employees and users are and are not allowed to do with an organization\'s network, devices, and internet access. An SOP (Standard Operating Procedure) is a documented, step-by-step set of instructions for performing a routine task the same, correct way every time. An incident response plan is a predefined, documented process for detecting, containing, eradicating, and recovering from a security incident, followed by a "lessons learned" review — closely related to, but distinct from, a business continuity plan (BCP), which focuses on keeping the overall business running during any major disruption, not just a security incident.',
    taglish:
      'Ang MOU (Memorandum of Understanding, tinatawag din minsan MOA — Memorandum of Agreement) ay dokumento ng mutual intent ng dalawang partido na magtulungan — hindi ito ganap na kasing-formal o kasing-binding ng isang buong kontrata. Ang MSA (Master Service Agreement) naman ay isang kontrata na nagtatakda na ng general na terms and conditions na gagamitin sa LAHAT ng future na trabaho ng dalawang partido — kaya kada bagong project, maikli lang na statement of work na kailangan, hindi na kailangang pag-usapan ulit lahat mula umpisa. Ang NDA (Non-Disclosure Agreement) ay legal na kontrata na nagtatakda na dapat panatilihing confidential ang specific na impormasyon na shared sa pagitan ng dalawang partido. Ang AUP (Acceptable Use Policy) ay nagtatakda kung ano ang pinapayagan at hindi pinapayagang gawin ng mga empleyado sa network, device, at internet access ng organisasyon. Ang SOP (Standard Operating Procedure) naman ay isang dokumentadong step-by-step na instructions para sa isang routine na trabaho, para pareho at tama ang gawa kada oras. Ang incident response plan ay isang paunang naka-plano at dokumentadong proseso para tuklasin, pigilan (contain), tanggalin (eradicate), at bumangon (recover) mula sa isang security incident, sinusundan ng "lessons learned" na review — kaugnay pero HINDI pareho sa isang business continuity plan (BCP), na tumutok sa pagpapatakbo ng BUONG NEGOSYO sa kahit anong malaking disruption, hindi lang security incident.',
    analogy: {
      title: 'Kasunduan bago magtayo ng negosyo',
      text:
        'Isipin mo ang MOU parang handshake agreement sa isang kaibigan na magtutulungan kayo sa isang bagay — sincere, pero hindi kasing-bigat ng notarized na kontrata. Ang MSA naman parang "standing agreement" mo sa isang regular na supplier — pumirma kayo isang beses ng general na terms, tapos kada susunod na order, maikling purchase order na lang kailangan, hindi na buong kontrata ulit. Ang NDA ay parang pangako na hindi mo ikakwento sa iba ang lihim na resipe ng isang restaurant kung saan ka nagtrabaho. Ang AUP ay parang patakaran ng bahay tungkol sa gamit ng Wi-Fi — ano ang pinapayagan, ano ang bawal. Ang SOP ay parang recipe card na sinusunod ng bawat cook para pareho ang lasa ng ulam kada araw. Ang incident response plan ay parang fire drill plan — may specific na hakbang kapag may sunog (detect, contain, eradicate, recover), habang ang business continuity plan ay ang mas malaking plano kung paano magpapatuloy ang buong negosyo kahit may sunog, bagyo, o kahit anong malaking gulo.',
    },
    howItWorks: [
      'An MOU/MOA typically appears early in a relationship, expressing shared goals and intentions before (or instead of) a fully binding contract — common between departments, agencies, or partner organizations.',
      'An MSA is negotiated once and covers pricing structure, liability, confidentiality, and dispute resolution for an ongoing vendor relationship; each subsequent project is then governed by a short statement of work (SOW) that references the MSA.',
      'An NDA can be one-way (only one party shares confidential information) or mutual (both parties share confidential information), and it typically survives even after the underlying business relationship ends.',
      'An AUP is usually signed by every employee/user and covers things like personal device use, prohibited websites/software, monitoring disclosure, and consequences for violations.',
      'An SOP standardizes a specific repeatable task (like "how to onboard a new switch" or "how to escalate a P1 ticket") so the outcome does not depend on which technician happens to be on shift.',
      'An incident response plan generally follows a lifecycle: preparation, identification, containment, eradication, recovery, and lessons learned — and it should name specific roles/responsibilities in advance so nobody is improvising who does what during a real incident.',
      'A business continuity plan sits one level above disaster recovery: DR focuses on restoring IT systems and data (see the RPO/RTO/site-type lesson), while BCP addresses the wider question of how the business keeps functioning (alternate work locations, manual workarounds, communication plans) while that recovery is underway.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Document</th><th>What It Governs</th></tr></thead>
        <tbody>
          <tr><td>MOU / MOA</td><td>Mutual intent to collaborate; informal, often not legally binding</td></tr>
          <tr><td>MSA</td><td>Standing general terms for all future work with a vendor/partner</td></tr>
          <tr><td>NDA</td><td>Confidentiality obligations for shared sensitive information</td></tr>
          <tr><td>AUP</td><td>What users may/may not do with the organization's IT resources</td></tr>
          <tr><td>SOP</td><td>Step-by-step instructions for a specific routine task</td></tr>
          <tr><td>Incident response plan</td><td>Predefined steps for handling a security incident</td></tr>
          <tr><td>Business continuity plan (BCP)</td><td>Keeping the overall business running during any major disruption</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A company signs an MSA with a managed security provider covering rate cards and liability terms once, then issues a short SOW each time they need a new project. Before the provider\'s analysts can see production logs, both companies sign an NDA. Every employee, including the provider\'s staff, must acknowledge the client\'s AUP before getting network access. When a real breach happens, the provider\'s SOC follows a documented incident response plan step by step, while the client\'s leadership separately activates their BCP to keep serving customers manually while systems are restored.',
    proTips: [
      'If a question is about ongoing vendor relationship terms without a new negotiation each time, think MSA. If it is about a single confidentiality obligation, think NDA. Do not mix the two up just because both are contracts.',
      'A well-run SOC treats the incident response plan as a living document — practiced through tabletop exercises — not a binder that only gets opened during an actual emergency, which is usually too late to read it for the first time.',
    ],
    examAlert:
      'The exam often distinguishes an incident response plan (specifically for security incidents) from a business continuity plan (the broader "keep the business running" plan) and a disaster recovery plan (specifically for restoring IT systems) — expect a scenario question that requires picking the most specific correct term, not just "a plan."',
    beginnerMistakes: [
      'Treating an MOU as equivalent to a legally binding contract — it usually expresses intent, not enforceable obligations, unless it explicitly states otherwise.',
      'Assuming an AUP is only about "don\'t visit bad websites" — it also covers personal device use, monitoring disclosure, and consequences, which the exam may test directly.',
      'Confusing incident response (security-specific, technical) with business continuity (organization-wide, broader than just IT) — they are related but answer different questions.',
    ],
    keyTerms: [
      { term: 'MOU / MOA', def: 'Memorandum of Understanding/Agreement — documents mutual intent to collaborate; typically less formal and less legally binding than a full contract.' },
      { term: 'MSA', def: 'Master Service Agreement — a contract establishing standing general terms for all future work between two parties.' },
      { term: 'NDA', def: 'Non-Disclosure Agreement — a legal contract requiring parties to keep specific shared information confidential.' },
      { term: 'AUP', def: 'Acceptable Use Policy — defines what users may and may not do with an organization\'s IT resources.' },
      { term: 'SOP', def: 'Standard Operating Procedure — documented, step-by-step instructions for performing a routine task consistently.' },
      { term: 'Incident response plan', def: 'A predefined, documented process for detecting, containing, eradicating, and recovering from a security incident.' },
      { term: 'Business continuity plan (BCP)', def: 'A plan for keeping the overall business operating during any major disruption, broader in scope than IT-focused disaster recovery.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the main purpose of a Master Service Agreement (MSA)?',
        options: [
          'To document a one-time confidentiality obligation.',
          'To establish standing general terms that govern all future work between two parties, so individual projects only need a short statement of work.',
          'To define what employees may do with company internet access.',
          'To specify step-by-step instructions for a routine task.',
        ],
        correct: 1,
        explanation: 'An MSA locks in the general terms once, so future projects only need a brief, specific statement of work referencing it.',
      },
      {
        prompt: 'Which document specifically defines what an employee is and is not allowed to do with the organization\'s network and devices?',
        options: ['NDA', 'MOU', 'AUP', 'MSA'],
        correct: 2,
        explanation: 'An Acceptable Use Policy (AUP) governs permitted and prohibited use of an organization\'s IT resources.',
      },
      {
        prompt: 'How does an incident response plan differ from a business continuity plan (BCP)?',
        options: [
          'They are exactly the same document under two different names.',
          'An incident response plan focuses specifically on handling a security incident; a BCP addresses keeping the overall business running during any major disruption.',
          'A BCP only applies to natural disasters, never security incidents.',
          'An incident response plan replaces the need for a disaster recovery plan.',
        ],
        correct: 1,
        explanation: 'Incident response is security-incident-specific and technical; BCP is the broader, organization-wide continuity plan.',
      },
    ],
    miniScenario: {
      prompt: 'Your company is about to let an external auditor review sensitive network configuration files for a one-time compliance check, with no ongoing recurring work planned.',
      task: 'Name which document should be signed first to protect that sensitive information, and explain why an MSA would not be the right fit here.',
    },
    recap:
      'MOU/MOA expresses intent to collaborate; MSA locks in standing terms for ongoing work; NDA protects confidential information; AUP governs acceptable use of IT resources; SOP standardizes a routine task; an incident response plan handles security incidents specifically; a BCP keeps the whole business running through any major disruption.',
    classroomAnswer:
      '"Each of these documents answers a different question — intent to work together, standing contract terms, confidentiality, acceptable use, routine steps, or how we survive a crisis — and the exam wants me to match the scenario to the specific document, not just say \'there\'s a policy for that.\'"',
  };

  NetReady.LESSONS['11-7'] = {
    id: '11-7',
    moduleId: 11,
    slug: 'facilities-and-environmental-controls',
    title: 'Facilities and Environmental Controls: HVAC, UPS, Generators, and Fire Suppression',
    estMinutes: 10,
    outcomes: [
      'Explain why HVAC (temperature/humidity control) matters for network equipment.',
      'Differentiate a UPS from a generator by what each one actually protects against.',
      'Identify why standard water-based fire suppression is unsuitable for a server room or data center.',
    ],
    whyItMatters:
      'A perfectly configured network still goes down if the room it lives in overheats, loses power, or floods during a fire response — physical facility controls are the unglamorous foundation everything else depends on.',
    simpleEnglish:
      'HVAC (Heating, Ventilation, and Air Conditioning) keeps a server room or data center within a safe temperature and humidity range, since network equipment generates significant heat and can fail or shut down if it overheats. A UPS (Uninterruptible Power Supply) is a battery-backed device that provides immediate, short-term power the instant utility power fails, giving equipment time to shut down gracefully or bridge a brief outage. A generator provides sustained, longer-term backup power for extended outages, typically starting automatically within seconds of a power failure and running on fuel (diesel, natural gas) for as long as needed. Fire suppression systems in a data center use gas-based (clean agent) or specialized systems instead of plain water sprinklers, because water damages electronics and can create additional electrical hazards.',
    taglish:
      'Ang HVAC (Heating, Ventilation, and Air Conditioning) ay nagpapanatili ng ligtas na temperatura at humidity sa isang server room o data center, dahil ang network equipment ay gumagawa ng malaking init at puwedeng masira o mag-shutdown kapag nag-overheat. Ang UPS (Uninterruptible Power Supply) ay isang battery-backed na device na agad na nagbibigay ng short-term na kuryente sa sandaling mawala ang normal na kuryente — nagbibigay ito ng oras para gracefully mag-shutdown ang equipment o para lang mabuksan ang boot sa maikling brownout. Ang generator naman ay nagbibigay ng mas matagal na backup power para sa extended na outage — karaniwang awtomatikong nag-start sa loob ng segundo pagkatapos mawala ang kuryente, at tumatakbo gamit ang fuel (diesel, natural gas) hanggat kailangan. Ang fire suppression system sa isang data center ay gumagamit ng gas-based (clean agent) o espesyal na sistema sa halip na ordinaryong sprinkler na tubig, dahil sinisira ng tubig ang electronics at pwede pang lumikha ng dagdag na electrical hazard.',
    analogy: {
      title: 'Aircon, power bank, at backup generator ng bahay',
      text:
        'Isipin mo ang HVAC parang aircon sa isang kwarto na puno ng maiinit na kagamitan — kung sira ang aircon, unti-unting nag-iinit ang buong kwarto hanggang sa mag-overheat ang mga gamit. Ang UPS ay parang power bank na agad na gumaganang saglit lang pagkawala ng kuryente — sapat para i-save mo ang trabaho mo o para maghanda sa susunod na hakbang, pero mauubos din agad kung matagal ang brownout. Ang generator naman parang backup generator ng bahay na aktwal na tumatakbo gamit ang gasolina — mas matagal ito kayang paandarin, pero hindi ito agad-agarang gumagana, kaya kailangan ng UPS para sa maikling gap habang nag-start ang generator. Ang fire suppression na hindi gumagamit ng tubig ay parang paggamit ng dry chemical na pamatay-apoy sa kusina sa halip na basta magbuhos ng tubig sa apoy na malapit sa de-koryenteng kagamitan — puwede kang malagay sa mas malaking panganib kung tubig lang ang gagamitin mo.',
    },
    howItWorks: [
      'HVAC systems in a data center are sized for the total heat output ("thermal load") of all equipment, not just human comfort, and often use hot-aisle/cold-aisle rack arrangements to manage airflow efficiently.',
      'A UPS sits between the utility power feed and the equipment, using batteries to provide instant, gap-free power during the transition moment when utility power fails — typically designed to last minutes, not hours.',
      'A generator takes longer to start (seconds, sometimes with an automatic transfer switch) but can sustain power for hours or days as long as fuel is supplied, making the UPS-then-generator combination the standard layered approach to power redundancy.',
      'Clean-agent fire suppression systems (like FM-200 or inert gas systems) extinguish fire by removing oxygen or interrupting the chemical reaction, without leaving residue or conductive liquid that would destroy electronics — unlike a traditional water sprinkler system.',
      'Environmental monitoring sensors (temperature, humidity, water leak detection) are often tied into alerting systems so staff are notified before a facility problem becomes an outage.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Control</th><th>Protects Against</th><th>Duration</th></tr></thead>
        <tbody>
          <tr><td>HVAC</td><td>Overheating / humidity damage</td><td>Continuous</td></tr>
          <tr><td>UPS</td><td>Instant power loss / brief outages</td><td>Minutes</td></tr>
          <tr><td>Generator</td><td>Extended power outages</td><td>Hours to days (fuel-dependent)</td></tr>
          <tr><td>Clean-agent fire suppression</td><td>Fire, without destroying electronics</td><td>N/A (event-triggered)</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'During a regional power outage, a data center\'s UPS instantly bridges the gap the moment utility power drops, while the on-site generator automatically starts and takes over within about 10-30 seconds — by the time the UPS batteries would have run low, the generator is already carrying the full load, and HVAC keeps running the entire time to prevent the now-generator-powered equipment from overheating.',
    proTips: [
      'Remember the layering: UPS handles the immediate gap, the generator handles the long haul — a data center without a generator is still vulnerable to any outage longer than its battery runtime.',
      'When a question mentions protecting a server room from fire damage without destroying the equipment itself, that is describing clean-agent suppression, not a standard sprinkler system.',
    ],
    examAlert:
      'A classic exam distractor suggests a standard water sprinkler system is acceptable for a data center — it is not the preferred choice, precisely because water damages electronics and creates electrical hazards; clean-agent or specialized suppression is expected.',
    beginnerMistakes: [
      'Assuming a UPS alone is sufficient for a lengthy outage — a UPS is a short-term bridge, not a long-term power solution.',
      'Forgetting that a generator needs time to start, which is exactly why a UPS still matters even when a generator is present.',
      'Overlooking HVAC as a "networking" topic at all — treating it as purely a facilities concern, when equipment failure from overheating is a very real network outage cause.',
    ],
    keyTerms: [
      { term: 'HVAC', def: 'Heating, Ventilation, and Air Conditioning — maintains safe temperature and humidity for network equipment.' },
      { term: 'UPS', def: 'Uninterruptible Power Supply — battery-backed device providing immediate, short-term power during a utility power failure.' },
      { term: 'Generator', def: 'A fuel-powered backup power source providing sustained power during extended outages.' },
      { term: 'Clean-agent fire suppression', def: 'A gas-based fire suppression system that extinguishes fire without damaging electronic equipment, unlike water sprinklers.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the primary role of a UPS during a power failure?',
        options: [
          'To provide power for days until utility service is restored.',
          'To provide immediate, short-term power the instant utility power fails, bridging the gap until a generator starts or equipment shuts down gracefully.',
          'To cool network equipment during high temperatures.',
          'To extinguish fires without damaging electronics.',
        ],
        correct: 1,
        explanation: 'A UPS is designed for an immediate, short-duration bridge — not sustained long-term power, which is the generator\'s job.',
      },
      {
        prompt: 'Why is a standard water-based sprinkler system generally unsuitable for a data center?',
        options: [
          'Water suppresses fire too slowly to be useful.',
          'Water damages electronic equipment and can create additional electrical hazards.',
          'Sprinklers are more expensive than clean-agent systems in every case.',
          'Data centers are legally prohibited from having any fire suppression.',
        ],
        correct: 1,
        explanation: 'Water conducts electricity and destroys electronics, making clean-agent systems the preferred choice for data centers.',
      },
      {
        prompt: 'Why does a data center typically use both a UPS AND a generator, rather than just one or the other?',
        options: [
          'A UPS provides an instant, gap-free bridge while the slower-starting generator spins up to provide sustained power for a longer outage.',
          'They perform the exact same function and are used purely for redundancy of an identical role.',
          'A generator is always faster to respond than a UPS.',
          'A UPS can run indefinitely, making a generator unnecessary.',
        ],
        correct: 0,
        explanation: 'The two are complementary: UPS covers the immediate transition instant, and the generator covers extended duration once it starts.',
      },
    ],
    miniScenario: {
      prompt: 'A small business server room has a UPS but no generator. During a storm, utility power is out for six hours.',
      task: 'Explain what will most likely happen to the servers, and what facility upgrade would have prevented it.',
    },
    recap:
      'HVAC keeps equipment within a safe temperature/humidity range. A UPS provides an instant, short-term power bridge; a generator provides sustained power for extended outages, typically working together in a layered approach. Clean-agent fire suppression protects against fire without the water damage and electrical hazards a standard sprinkler system would cause.',
    classroomAnswer:
      '"The network only stays up if the room around it does too — UPS for the instant gap, generator for the long haul, HVAC so nothing overheats, and clean-agent suppression so a fire response doesn\'t finish the job a fire started."',
  };
}(window.NetReady));
