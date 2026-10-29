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
      'Rack-mounted equipment is described by its airflow direction — port-side exhaust (hot air blows out the port/cabled side) or port-side intake (cool air is drawn in from the port/cabled side) — and mixing the two in the same aisle defeats a hot-aisle/cold-aisle layout. A PDU (Power Distribution Unit) distributes power to everything mounted in a rack, so its power load and supported voltage must be planned before adding new equipment.',
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
      { term: 'Port-side exhaust/intake', def: 'A description of which side of rack-mounted equipment blows out hot air (exhaust) versus draws in cool air (intake), critical for hot-aisle/cold-aisle planning.' },
      { term: 'PDU (Power Distribution Unit)', def: 'A device that distributes electrical power to equipment mounted in a rack, with its own power load and voltage limits to plan around.' },
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
  NetReady.LESSONS['11-8'] = {
    id: '11-8',
    moduleId: 11,
    slug: 'secure-remote-management-jump-hosts-and-vpn-tunnels',
    title: 'Secure Remote Management: Jump Hosts, In-Band vs. Out-of-Band, and VPN Tunnel Types',
    estMinutes: 14,
    outcomes: [
      'Explain what a jump host does and why it centralizes administrative access.',
      'Differentiate in-band management from out-of-band management and explain when out-of-band is essential.',
      'Compare site-to-site and client-to-site VPNs, clientless VPNs, and split versus full tunnel configurations.',
    ],
    whyItMatters:
      'Remote administration is how most network changes actually happen — and how a well-meaning admin can accidentally lock themselves out, or leave a management interface exposed to the internet. The exam tests the exact vocabulary for these access and VPN choices.',
    simpleEnglish:
      'A jump host (also called a jump box) is a hardened system that administrators must connect to first; from there, they reach internal devices, so access is funneled through one controlled, logged point instead of being spread across many machines. In-band management means managing a device over the same network that carries user traffic, such as SSH to a switch on its normal IP address. Out-of-band management uses a separate, dedicated path, such as a console port or a dedicated management network, so administrators can still reach a device when the production network is down. Connection methods include SSH (encrypted command line), a graphical user interface, an API, and the physical console. For VPNs: a site-to-site VPN permanently links two networks, usually gateway to gateway, such as a headquarters and a branch. A client-to-site VPN lets an individual remote user connect into the corporate network. A clientless VPN gives access through a web browser without installing dedicated client software, usually limited to specific web-based applications. In a split tunnel, only traffic destined for the corporate network travels through the VPN while internet traffic goes directly out; in a full tunnel, all of the user\'s traffic goes through the VPN, giving the organization more control and inspection at the cost of extra latency and bandwidth.',
    taglish:
      'Ang jump host (o jump box) ay isang hardened na system na kailangang unahin ng administrator bago makarating sa mga internal na device; mula roon, doon lang dumadaan ang access kaya isang kontroladong, naka-log na punto lang ang kailangang bantayan. Ang in-band management ay pamamahala ng device sa parehong network na dinadaanan ng user traffic, tulad ng SSH sa switch gamit ang normal nitong IP. Ang out-of-band management naman ay gumagamit ng hiwalay at dedicated na daanan, tulad ng console port o dedicated management network, kaya nakakapasok ka pa rin kahit down ang production network. Kabilang sa connection methods ang SSH (encrypted na command line), GUI, API, at ang pisikal na console. Para sa VPN: ang site-to-site VPN ay permanenteng nagkokonekta ng dalawang network, karaniwang gateway-to-gateway, halimbawa ang headquarters at branch. Ang client-to-site VPN ay nagpapapasok ng isang indibidwal na remote user sa corporate network. Ang clientless VPN ay nagbibigay ng access sa pamamagitan ng web browser nang hindi nag-i-install ng client software, kadalasan para lang sa mga specific na web-based na application. Sa split tunnel, tanging traffic papunta sa corporate network ang dumadaan sa VPN habang diretsong lumalabas ang internet traffic; sa full tunnel naman, lahat ng traffic ng user ay dumadaan sa VPN, mas kontrolado at mas na-iinspect ng organisasyon pero may dagdag na latency at bandwidth na nagagamit.',
    analogy: {
      title: 'Pintuan ng bahay: guwardiya sa labas, may hiwalay na daanan kapag sira ang pangunahing pinto',
      text:
        'Isipin mo ang jump host parang guwardiya sa gate ng isang subdibisyon — bago ka makapasok sa loob ng mga bahay, dadaan ka muna sa iisang checkpoint na mahigpit na binabantayan at tinatala ang bawat pumapasok. Ang in-band management ay parang pagpasok sa bahay gamit ang pangunahing pinto na ginagamit din ng lahat ng nakatira — gumagana ito, pero kapag na-block ang pinto dahil sa trapiko, hindi ka na makapasok. Ang out-of-band ay parang may hiwalay na service entrance na gamit lang ng technician — kaya kahit na-jam ang pangunahing pinto, makakapasok pa rin ang tao para ayusin ang problema. Ang VPN naman ay parang lagusan papunta sa bahay ng kamag-anak: ang site-to-site ay permanenteng tunnel na nag-uugnay ng dalawang bahay; ang client-to-site ay pansariling susi ng isang bisita; ang clientless ay parang pagtawag gamit ang intercom sa browser; at ang split vs. full tunnel ay kung ang lahat ng galaw mo ay dadaan sa lagusang iyon, o ang papunta lang sa bahay ng kamag-anak ang dadaan doon habang ang ibang lakad mo ay diretsong lumalabas.',
    },
    howItWorks: [
      'Jump host: administrators first authenticate to a hardened intermediary system in a secure or management zone, then connect from there to internal devices, centralizing logging and limiting the number of systems exposed to admin traffic.',
      'In-band management: the management session uses the same network path as production traffic — convenient, but unavailable if that path fails.',
      'Out-of-band management: a dedicated management network, console server, or cellular backup provides a separate path so devices remain reachable during production outages.',
      'Connection methods: SSH (encrypted CLI), GUI (web or graphical interface), API (programmatic access), and console (direct physical or serial connection, often used for initial setup or recovery).',
      'Site-to-site VPN: a persistent gateway-to-gateway tunnel connecting two networks, commonly between a headquarters and a branch.',
      'Client-to-site VPN: an individual device or user connects into the corporate network, typically with VPN client software.',
      'Clientless VPN: access is delivered through a web browser, usually to a limited set of web-based applications, with no dedicated client installed on the endpoint.',
      'Split tunnel sends only corporate-destined traffic through the VPN; full tunnel routes all client traffic through the VPN, enabling inspection and policy at the cost of extra latency.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Option</th><th>What It Means</th></tr></thead>
        <tbody>
          <tr><td>Jump host / jump box</td><td>One hardened, logged admin entry point into a secure zone</td></tr>
          <tr><td>In-band management</td><td>Management shares the production network path</td></tr>
          <tr><td>Out-of-band management</td><td>Separate path (console, dedicated management network) for when production is down</td></tr>
          <tr><td>Site-to-site VPN</td><td>Permanent tunnel between two networks</td></tr>
          <tr><td>Client-to-site VPN</td><td>Individual user or device connects into the corporate network</td></tr>
          <tr><td>Clientless VPN</td><td>Browser-based access, no dedicated client installed</td></tr>
          <tr><td>Split tunnel</td><td>Only corporate traffic goes through the VPN</td></tr>
          <tr><td>Full tunnel</td><td>All user traffic goes through the VPN</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A network engineer loses SSH access to a branch router after a bad routing change cuts the in-band path — the out-of-band console server connected to the router\'s console port still provides a working management session, so the engineer rolls back the change without dispatching someone on site.',
    proTips: [
      'If a question describes needing to reach a device even when its production network is down, the answer is out-of-band management — in-band is by definition unavailable in that failure.',
      'For a remote employee who needs only the internal web-based HR system, a clientless VPN is a lighter-weight fit than a full client-to-site VPN; for general corporate network access, a client-to-site VPN is the standard answer.',
    ],
    examAlert:
      'Expect a scenario asking which VPN type fits a specific need — site-to-site for two offices, client-to-site for remote staff, clientless for browser-only access — and whether split or full tunnel meets a stated security or bandwidth requirement.',
    beginnerMistakes: [
      'Thinking a jump host is just any server — it is a deliberately hardened, tightly controlled intermediary, not a general-purpose machine.',
      'Choosing in-band management for a device you need to reach during an outage — in-band depends on the same network that just failed.',
      'Assuming split tunnel is always the wrong choice — it is a tradeoff: better bandwidth and performance, but less centralized inspection than a full tunnel.',
    ],
    keyTerms: [
      { term: 'Jump host (jump box)', def: 'A hardened intermediary system that administrators access first to reach internal devices, centralizing logging and control.' },
      { term: 'In-band management', def: 'Managing a device over the same network path that carries production traffic.' },
      { term: 'Out-of-band management', def: 'Managing a device over a separate, dedicated path such as a console or management network, available even during production outages.' },
      { term: 'Clientless VPN', def: 'Browser-based VPN access that requires no dedicated client software on the endpoint.' },
      { term: 'Split tunnel', def: 'A VPN configuration where only corporate-bound traffic is tunneled, while other traffic exits directly.' },
      { term: 'Full tunnel', def: 'A VPN configuration where all of a client\'s traffic is routed through the VPN.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A technician needs to reach a core switch even when the production network is completely down. Which management approach should be in place?',
        options: ['In-band management over the production VLAN', 'Out-of-band management using a console server or dedicated management network', 'A clientless VPN', 'Split tunnel'],
        correct: 1,
        explanation: 'Out-of-band management uses a separate path that does not depend on the production network that just failed.',
      },
      {
        prompt: 'Two branch offices need a permanent, always-on link between their networks. Which VPN type fits?',
        options: ['Client-to-site VPN', 'Clientless VPN', 'Site-to-site VPN', 'Split tunnel'],
        correct: 2,
        explanation: 'A site-to-site VPN connects two networks gateway-to-gateway in a persistent tunnel.',
      },
      {
        prompt: 'A security team wants every remote employee\'s internet traffic inspected by corporate policy. Which tunnel configuration should they use?',
        options: ['Split tunnel', 'Full tunnel', 'In-band tunnel', 'Clientless tunnel only'],
        correct: 1,
        explanation: 'A full tunnel routes all client traffic through the VPN, letting corporate inspection and policy apply to everything.',
      },
    ],
    miniScenario: {
      prompt: 'An administrator needs to reach a branch router to fix a routing mistake that has cut off the normal management path, and the branch is not reachable by the usual SSH session.',
      task: 'Name the management method that would still provide access, and describe briefly how it differs from the failed path.',
    },
    recap:
      'A jump host centralizes admin access through one hardened, logged system. In-band management shares the production path; out-of-band uses a separate path that survives outages. Site-to-site VPNs connect networks; client-to-site VPNs connect individuals; clientless VPNs use the browser; split tunnels send only corporate traffic through the VPN, while full tunnels send everything.',
    classroomAnswer:
      '"I never let the management path depend on the same network I might break — jump host for controlled access, out-of-band for when production goes down, and I pick split or full tunnel based on how much inspection the business actually requires."',
  };

  NetReady.LESSONS['11-9'] = {
    id: '11-9',
    moduleId: 11,
    slug: 'snmp-versions-community-strings-mibs-and-traps',
    title: 'SNMP Deep Dive: Versions, Community Strings, MIBs, and Traps',
    estMinutes: 13,
    outcomes: [
      'Explain the roles of an SNMP manager, an SNMP agent, and a MIB.',
      'Differentiate SNMP traps from polling requests, and identify the ports each uses.',
      'Compare SNMPv2c community strings with SNMPv3 authentication and encryption, and explain why v3 is preferred.',
    ],
    whyItMatters:
      'SNMP is the classic way monitoring systems watch network devices — and one of the most commonly misconfigured services in real networks, because weak community strings and v2c defaults are a frequent route into devices. The exam expects precise vocabulary for each piece.',
    simpleEnglish:
      'SNMP (Simple Network Management Protocol) lets a central monitoring system, the manager, collect status and statistics from devices, which run an agent. The data each device exposes is organized in a MIB (Management Information Base), a structured catalog of objects that can be queried, such as interface counters or CPU load. The manager can poll an agent with GET requests (typically sent to UDP port 161), and an agent can proactively send a trap (an unsolicited alert, typically sent to UDP port 162 on the manager) when something important happens, such as a link going down. SNMPv1 and v2c identify access using community strings, which act as shared passwords; in v2c they are transmitted in plaintext, so anyone who can capture traffic can read them. SNMPv3 replaces community strings with user-based security: it adds authentication, so the manager and agent verify each other, and encryption, so data is not readable in transit. SNMPv3 is strongly preferred in any environment where security matters, and default or weak community strings like "public" are a classic misconfiguration to avoid.',
    taglish:
      'Ang SNMP (Simple Network Management Protocol) ay nagpapahintulot sa isang central monitoring system, ang manager, na kumolekta ng status at statistics mula sa mga device, na tumatakbo ng agent. Ang data na ibinubunyag ng bawat device ay nakaayos sa MIB (Management Information Base), isang structured na katalogo ng mga object na puwedeng i-query, tulad ng interface counter o CPU load. Puwedeng magtanong ang manager sa agent gamit ang GET request (karaniwang nasa UDP port 161), at puwede rin namang magpadala ang agent ng trap — isang unsolicited na alerto, karaniwang nasa UDP port 162 sa manager — kapag may mahalagang nangyari, tulad ng link na nag-down. Ang SNMPv1 at v2c ay gumagamit ng community string bilang pag-access, na parang shared password; sa v2c, plaintext ito kaya sinumang makakakuha ng traffic ay makakabasa nito. Ang SNMPv3 naman ay pinalitan ito ng user-based security: may authentication para magkumpirma ang manager at agent sa isa\'t isa, at may encryption para hindi mabasa ang data habang dumadaan. Mas mainam ang SNMPv3 sa anumang environment na mahalaga ang seguridad, at ang default o mahinang community string tulad ng "public" ay klasikong maling configuration na dapat iwasan.',
    analogy: {
      title: 'Kalihim ng barangay na nagtatanong, at ang sekretarya na nagbibigay ng ulat',
      text:
        'Isipin mo ang SNMP parang isang barangay captain (ang manager) na gustong malaman ang kalagayan ng bawat purok (ang device). Ang bawat purok ay may kanya-kanyang tagapagsalita (ang agent) na may hawak na listahan ng mga bagay na puwedeng sagutin — ang MIB, parang talaan ng mga istatistika ng purok. Puwedeng tanungin ng captain ang bawat tagapagsalita, "Ilan ang tao ngayon?" (GET polling). Pero puwede ring tumawag ang isang tagapagsalita nang kusa kapag may nangyaring malaki, tulad ng sunog — iyon ang trap. Ang community string ay parang password ng sumasagot: sa v2c, binibigkas ito nang malakas sa buong plaza, kaya kahit sino ay makakarinig; sa v3, may tunay na pagkakakilanlan at lihim na linya, kaya ang captain at ang purok ay talagang nagkakakilala bago magpalitan ng impormasyon.',
    },
    howItWorks: [
      'SNMP manager: the central system (for example, a monitoring platform) that sends queries and receives alerts.',
      'SNMP agent: software on the monitored device that responds to queries and generates traps.',
      'MIB (Management Information Base): the structured collection of objects an agent exposes, each uniquely identified by a numeric address (OID) so the manager knows exactly what to request.',
      'Polling: the manager sends GET requests to the agent, typically over UDP 161, to retrieve values such as interface counters or CPU utilization.',
      'Traps: the agent sends unsolicited alerts to the manager, typically over UDP 162, when a notable event occurs — such as a link going down or a threshold being crossed.',
      'SNMPv2c: uses community strings for access; they are sent in plaintext, so they offer no real confidentiality and are a common weakness if left at defaults.',
      'SNMPv3: adds user-based authentication and encryption, letting the manager and agent verify each other and protect data in transit — the recommended version for secure environments.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Element / Version</th><th>What It Means</th></tr></thead>
        <tbody>
          <tr><td>Manager</td><td>Central system that polls devices and receives traps</td></tr>
          <tr><td>Agent</td><td>Software on the device that answers queries and sends traps</td></tr>
          <tr><td>MIB</td><td>Structured catalog of queryable objects on a device</td></tr>
          <tr><td>GET / polling (UDP 161)</td><td>Manager asks the agent for a value</td></tr>
          <tr><td>Trap (UDP 162)</td><td>Agent sends an unsolicited alert to the manager</td></tr>
          <tr><td>SNMPv2c</td><td>Community strings in plaintext; no real encryption</td></tr>
          <tr><td>SNMPv3</td><td>User-based authentication plus encryption; preferred</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A monitoring server polls every switch every five minutes for interface counters, but a switch also sends a trap immediately when its uplink goes down, so the operations team gets alerted in seconds rather than waiting for the next poll.',
    proTips: [
      'Remember the ports: polling uses 161 (the manager asks, the agent answers), and traps use 162 (the agent calls the manager). Mixing those up is a classic exam trap.',
      'Never leave an SNMP community string at a default like "public" or "private" — and prefer SNMPv3 with authentication and encryption whenever the device supports it.',
    ],
    examAlert:
      'Expect a question contrasting SNMPv2c with SNMPv3 — the key answer is that v3 adds authentication and encryption, while v2c relies on plaintext community strings — or asking which port a trap uses.',
    beginnerMistakes: [
      'Assuming SNMPv2c community strings are encrypted — they are not; they are plaintext.',
      'Swapping the trap and polling ports, or assuming traps are solicited responses — traps are unsolicited alerts sent from the agent.',
      'Confusing the MIB with the manager — the MIB is the catalog of objects the agent exposes, not the monitoring software itself.',
    ],
    keyTerms: [
      { term: 'SNMP manager', def: 'The central monitoring system that queries devices and receives their alerts.' },
      { term: 'SNMP agent', def: 'Software on a monitored device that answers SNMP queries and generates traps.' },
      { term: 'MIB (Management Information Base)', def: 'The structured catalog of objects an SNMP agent exposes for querying.' },
      { term: 'SNMP trap', def: 'An unsolicited alert sent from an agent to a manager (typically UDP 162) when a notable event occurs.' },
      { term: 'Community string', def: 'A shared access string used by SNMPv1 and v2c; transmitted in plaintext in v2c.' },
      { term: 'SNMPv3', def: 'The SNMP version that adds user-based authentication and encryption, recommended for secure environments.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Which SNMP version uses plaintext community strings and offers no real encryption?',
        options: ['SNMPv3', 'SNMPv2c', 'SNMP over TLS', 'NTP'],
        correct: 1,
        explanation: 'SNMPv2c relies on community strings sent in plaintext; SNMPv3 is the version that adds authentication and encryption.',
      },
      {
        prompt: 'A switch sends an unsolicited alert to the monitoring server the moment a link goes down. What is this message called?',
        options: ['A GET request', 'An SNMP trap', 'A MIB walk', 'A DHCP offer'],
        correct: 1,
        explanation: 'An unsolicited alert from an agent to a manager is an SNMP trap, typically sent over UDP 162.',
      },
      {
        prompt: 'Which element is the structured catalog of objects that an SNMP agent exposes for querying?',
        options: ['The manager', 'The MIB', 'The community string', 'The trap receiver port'],
        correct: 1,
        explanation: 'The MIB is the structured catalog of objects a device exposes, each identified by a unique OID.',
      },
    ],
    miniScenario: {
      prompt: 'A security audit finds that every switch in a network still uses the SNMP community string "public" with SNMPv2c, and that traffic from the monitoring server is captured on a shared segment.',
      task: 'Name the two security weaknesses this configuration creates, and state the version and feature that resolves them.',
    },
    recap:
      'The manager polls agents with GET requests (UDP 161), and agents send unsolicited traps to the manager (UDP 162). Data is organized in a MIB. SNMPv2c uses plaintext community strings; SNMPv3 adds authentication and encryption and is the recommended version.',
    classroomAnswer:
      '"I know exactly what each SNMP piece does, I know the trap and poll ports cold, and I never trust a default community string — v3 with authentication and encryption, every time."',
  };

  NetReady.LESSONS['11-10'] = NetReady.lesson(11, {
    id: '11-10',
    slug: 'monitoring-in-depth-logs-interfaces-sensors-apis',
    title: 'Monitoring in Depth: Syslog Severity Levels, Interface Statistics, Environmental Sensors, and API Integration',
    minutes: 18,
    outcomes: [
      `Read syslog messages and rank the eight severity levels.`,
      `Interpret interface statistics and calculate utilization from counters.`,
      `Name the environmental sensors a network operations team monitors.`,
      `Explain baselines, anomaly alerting, availability percentages, and API-based integration.`,
    ],
    why: `The monitoring objective lists device logs (traffic, audit, syslog with severity levels), interface statistics, environmental sensors, baselines, anomaly alerts, and API integration. These are the signals operations teams use to find problems before users do.`,
    simple: `Network devices produce three kinds of information. Logs record events: traffic logs show what passed or was blocked, audit logs record who logged in and what they changed, and syslog messages report system events, each tagged with a severity level from 0 (Emergency) to 7 (Debug). Metrics are numbers collected over time, such as interface state, speed and duplex, bytes and packets in and out, and error counters like CRC errors, giants, and runts. Sensors report the physical environment: temperature, humidity, electrical power, and water leaks. A baseline records what normal looks like, so anomaly alerts can fire when values deviate. Monitoring tools collect this by SNMP polling, SNMP traps, syslog, flow records, and increasingly through APIs.`,
    taglish: `Tatlong uri ng impormasyon ang nagmumula sa network devices. Ang logs ay talaan ng mga pangyayari: traffic logs (ano ang pumasa o hinarang), audit logs (sino ang nag-login at ano ang binago), at syslog (mga pangyayari sa sistema) na may severity level mula 0 (Emergency) hanggang 7 (Debug). Ang metrics ay mga numerong kinokolekta sa paglipas ng panahon: link state, speed at duplex, bytes at packets, at error counters gaya ng CRC, giants, at runts. Ang sensors ay nag-uulat ng kapaligiran: temperatura, humidity, kuryente, at tagas ng tubig. Ang baseline ay talaan ng normal, kaya may anomaly alert kapag lumihis. Nangongolekta ang monitoring tools gamit ang SNMP polling, SNMP traps, syslog, flow records, at API.`,
    analogy: {
      title: 'Dashboard ng kotse',
      text: `Ang dashboard ay may ilaw para sa seryosong problema (Emergency, Alert), numero para sa bilis at temperatura (metrics), at talaan ng mga biyahe at serbisyo (logs). Kapag alam mo ang normal na temperatura ng makina (baseline), makikita mo agad kapag mainit na.`,
    },
    steps: [
      `Syslog: devices send log messages to a collector, normally over UDP 514 (TCP or TLS on 6514 for reliability and security). Each message has a facility (source type), a severity, a timestamp, the hostname, and text. Accurate time (NTP) is essential for correlating logs.`,
      `Severity levels: 0 Emergency (system unusable), 1 Alert (act immediately), 2 Critical, 3 Error, 4 Warning, 5 Notice, 6 Informational, 7 Debug. Lower numbers are more severe. Setting a logging level of 4 sends messages of severity 4 and more severe (0 to 4).`,
      `Log types: traffic logs (firewall permits and denies, flows), audit logs (authentication, configuration changes, privileged actions: who, what, when), system or event logs (interface up/down, reloads, hardware faults), and security logs (alerts from IDS/IPS).`,
      `Interface statistics: link state (up/down), speed and duplex, bytes and packets sent and received (used to compute utilization), errors (CRC, runts, giants, input errors), discards or drops, and protocol packet and byte counts. A good monitor polls these regularly and graphs the rate of change.`,
      `Utilization: utilization percent = (bits transferred in the interval divided by seconds) divided by interface speed. Compare 95th-percentile usage with capacity to plan upgrades.`,
      `Environmental sensors: temperature, humidity, electrical (voltage, UPS battery and load), water or flood detection, smoke, and door or cabinet access. They are polled by SNMP or reported by traps, and raise alerts before equipment fails.`,
      `Baselines and anomaly alerting: record normal traffic, CPU, memory, and error levels over a typical period. Static thresholds (CPU above 90 percent) catch known limits; anomaly detection flags deviations from the baseline (traffic at 3 a.m. ten times the normal).`,
      `Availability: the percentage of time a service is up. 99.9 percent allows about 8.76 hours of downtime a year; 99.99 percent about 52.6 minutes; 99.999 percent about 5.26 minutes. Uptime and downtime are tracked against the service-level agreement (SLA).`,
      `API integration: modern devices and cloud services expose REST (HTTP with JSON) or gRPC and streaming telemetry. Monitoring systems pull metrics through the API, platforms push events with webhooks, and automation tools use the same APIs to read state and make changes, replacing screen scraping of CLI output.`,
    ],
    deepDive: [
      {
        title: 'Reading a syslog message',
        code: `Oct 28 14:03:11 core-sw1 %LINK-3-UPDOWN: Interface GigabitEthernet0/12, changed state to down
Oct 28 14:03:12 core-sw1 %LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/12, changed state to down
Oct 28 14:05:40 core-sw1 %SYS-5-CONFIG_I: Configured from console by admin on vty0 (10.9.9.20)
Oct 28 14:06:02 core-sw1 %PM-4-ERR_DISABLE: bpduguard error detected on Gi0/7, putting Gi0/7 in err-disable state

Format: %FACILITY-SEVERITY-MNEMONIC: message
  %LINK-3-UPDOWN     -> severity 3 (Error)
  %SYS-5-CONFIG_I    -> severity 5 (Notice): an audit-style record of who changed the configuration
  %PM-4-ERR_DISABLE  -> severity 4 (Warning)`,
        note: `The number between the dashes is the severity. A config-change message with a user and source address is a basic audit trail.`,
      },
      {
        title: 'Severity level memory aid and filtering',
        code: `0 Emergency     system is unusable
1 Alert         action must be taken immediately
2 Critical      critical condition
3 Error         error condition
4 Warning       warning condition
5 Notice        normal but significant
6 Informational informational messages
7 Debug         debug-level messages

"logging trap 4"  -> sends severities 0, 1, 2, 3, and 4 only
Mnemonic: Every Awesome Cisco Engineer Will Need Ice cream Daily`,
        note: `A lower number means a more serious event, and a level setting includes that level and everything more severe.`,
      },
      {
        title: 'Utilization calculated from interface counters',
        text: `A 1 Gbps interface counter shows 450,000,000 bytes received in a 60 second polling interval.`,
        code: `bits       = 450,000,000 bytes x 8       = 3,600,000,000 bits
rate       = 3,600,000,000 bits / 60 s   = 60,000,000 bps = 60 Mbps
utilization = 60 Mbps / 1,000 Mbps       = 6 percent

Availability (downtime allowed per year, 365 days):
  99.9%   -> 8.76 hours
  99.99%  -> 52.6 minutes
  99.999% -> 5.26 minutes`,
        note: `Counters only increase; monitoring tools subtract two readings and divide by the time between them.`,
      },
      {
        title: 'What each sensor protects against',
        code: `Sensor                    Detects                         Typical alert action
------------------------  ------------------------------  ------------------------------------
Temperature               HVAC failure, blocked airflow   Warning at 80 F, critical higher
Humidity                  Too dry (static) or too wet     Alert outside 40 to 60 percent
Electrical / UPS          Power loss, low battery, load   Page on battery, graceful shutdown
Water / flood             Leaks under the floor           Immediate critical alert
Smoke / door contact      Fire risk, unauthorized access  Alert security team`,
      },
      {
        title: 'API integration: pulling interface data with REST (illustrative)',
        code: `$ curl -s -H "Authorization: Bearer <token>" https://netctl.example.com/api/v1/devices/core-sw1/interfaces/Gi0-12
{
  "name": "GigabitEthernet0/12",
  "admin_state": "up",
  "oper_state": "down",
  "speed_mbps": 1000,
  "duplex": "full",
  "in_errors": 0,
  "crc_errors": 482
}`,
        note: `Structured JSON lets scripts and dashboards use the same data. Tokens must be kept secret and rotated.`,
      },
    ],
    table: {
      label: 'Table of syslog severity levels',
      head: ['Level', 'Name', 'Meaning'],
      rows: [
        ['0', 'Emergency', 'System unusable'],
        ['1', 'Alert', 'Immediate action required'],
        ['2', 'Critical', 'Critical condition'],
        ['3', 'Error', 'Error condition'],
        ['4', 'Warning', 'Warning condition'],
        ['5', 'Notice', 'Normal but significant'],
        ['6', 'Informational', 'Informational message'],
        ['7', 'Debug', 'Detailed debugging'],
      ],
      caption: 'Lower is more severe; a setting includes that level and below it numerically.',
    },
    example: `A network operations team notices an interface on a core switch with a slowly rising CRC error counter. The syslog shows no link flaps, so no alert fired, but the monitoring graph of error rate against the baseline shows a clear anomaly. A technician replaces the cable the next morning, avoiding an outage that would have occurred when the connector failed completely.`,
    tips: [
      `Alert on rates of change (errors per minute), not only totals, because counters never reset on their own.`,
      `Keep audit logs for the period your policy or regulations require and protect them from tampering.`,
      `Set a sensible logging level; Debug in production can overload a device.`,
    ],
    exam: `Know the eight severity levels and that 0 is the most severe, the difference between traffic, audit, and syslog logs, the key interface statistics, the environmental sensors, how baselines support anomaly alerting, and that APIs allow tools to integrate. Be able to compute utilization from counters.`,
    mistakes: [
      `Assuming severity 7 is the most serious.`,
      `Forgetting that interface counters are cumulative.`,
      `Monitoring only devices and ignoring temperature, power, and water sensors.`,
    ],
    terms: [
      { term: 'Syslog severity', def: `Level from 0 (Emergency) to 7 (Debug) describing how serious a log message is.` },
      { term: 'Audit log', def: `Record of who did what and when, such as logins and configuration changes.` },
      { term: 'Baseline', def: `Measurement of normal behavior used to detect anomalies.` },
      { term: 'Anomaly alerting', def: `Notification triggered when a metric deviates from its baseline.` },
      { term: 'Environmental sensor', def: `Device that measures temperature, humidity, power, or water in a facility.` },
      { term: 'API integration', def: `Connecting systems by programmatic interfaces, usually REST with JSON.` },
    ],
    checks: [
      {
        prompt: `Which syslog severity level indicates that the system is unusable?`,
        options: [`0 Emergency`, `3 Error`, `5 Notice`, `7 Debug`],
        correct: 0,
        explanation: `Level 0, Emergency, is the most severe and means the system is unusable.`,
      },
      {
        prompt: `A 100 Mbps link transfers 75,000,000 bits during a 10 second interval. What is the utilization?`,
        options: [`7.5 percent`, `75 percent`, `0.75 percent`, `750 percent`],
        correct: 0,
        explanation: `75,000,000 bits divided by 10 seconds is 7.5 Mbps, which is 7.5 percent of 100 Mbps.`,
      },
      {
        prompt: `Which log type records who logged in and what configuration changes they made?`,
        options: [`Audit log`, `Traffic log`, `Flow record`, `ARP table`],
        correct: 0,
        explanation: `Audit logs track authentication and administrative actions.`,
      },
    ],
    mini: {
      prompt: `A wiring closet's temperature has risen 12 degrees over a week though no alert fired because the fixed threshold is 90 F.`,
      task: `Which monitoring idea would have caught this earlier?`,
    },
    recap: `Collect logs (traffic, audit, syslog with severity 0 to 7), interface statistics (state, speed, duplex, utilization, errors), environmental sensor data, and compare them to baselines to raise anomaly alerts. APIs let tools exchange this data automatically, and availability percentages show whether SLAs are met.`,
    classroom: `"Ang log ay kuwento, ang metric ay numero, ang baseline ay kung ano ang normal. Kapag lumihis, doon ang problema."`,
  });

  NetReady.LESSONS['11-11'] = NetReady.lesson(11, {
    id: '11-11',
    slug: 'disaster-recovery-testing-and-high-availability',
    title: 'Disaster Recovery Testing, High Availability, Backups, and Availability Math',
    minutes: 17,
    outcomes: [
      `Compare active-active and active-passive designs and failover versus failback.`,
      `Describe tabletop exercises, walkthroughs, simulations, and full failover tests.`,
      `Explain validation tests for backups and the 3-2-1 backup rule.`,
      `Calculate availability from MTBF and MTTR.`,
    ],
    why: `A disaster recovery plan that has never been tested is only a hope. The operations objective includes DR concepts and high availability, including tabletop exercises and validation tests.`,
    simple: `High availability (HA) keeps a service running through failures by having redundant components. In an active-active design, two or more systems all serve users at the same time and share load, so if one fails the others absorb its work. In an active-passive design, one system serves while another waits on standby and takes over when the first fails. Moving to the standby is failover; returning to the original once it is repaired is failback. Disaster recovery (DR) is the plan for restoring service after a major event. To trust it, you test it. A tabletop exercise is a discussion-based walk through a scenario with no systems touched. A validation test proves a specific item works, such as restoring a backup to a test server and checking the data. A full failover test actually moves production to the DR site. Backups should follow the 3-2-1 rule: three copies, on two different media, with one offsite.`,
    taglish: `Ang high availability (HA) ay pagpapatuloy ng serbisyo kahit may sira sa pamamagitan ng redundant na bahagi. Sa active-active, sabay-sabay na nagsisilbi ang dalawa o higit pang sistema at naghahati sa karga; kapag may nasira, sinasalo ng iba. Sa active-passive, isa ang nagsisilbi at ang isa ay naghihintay (standby) para pumalit. Ang paglipat sa standby ay failover; ang pagbalik sa orihinal pagkatapos maayos ay failback. Ang disaster recovery (DR) ay plano ng pagbabalik ng serbisyo pagkatapos ng malaking pangyayari. Para magtiwala dito, kailangang i-test: ang tabletop ay talakayan lang; ang validation test ay pagpapatunay ng isang bahagi gaya ng restore ng backup; ang full failover test ay aktuwal na paglipat ng production sa DR site. Sa backup, sundin ang 3-2-1: tatlong kopya, dalawang uri ng media, isa ay nasa ibang lugar.`,
    analogy: {
      title: 'Fire drill sa opisina',
      text: `Ang tabletop ay pag-uusap kung ano ang gagawin kapag may sunog. Ang validation test ay pagsusuri kung gumagana ang fire extinguisher. Ang full failover ay tunay na fire drill na lahat ay lalabas ng gusali. Ang plano na hindi pa nasusubukan ay baka hindi pala gumagana sa tunay na sunog.`,
    },
    steps: [
      `Redundancy patterns: N+1 (one spare for N components), 2N (a full duplicate), and geographic redundancy (multiple sites). Redundancy applies to power, cooling, links, devices, and sites.`,
      `Active-active: all nodes serve traffic (load balanced), no idle capacity, but each must handle the full load alone if the other fails (plan capacity accordingly). Needs good state synchronization.`,
      `Active-passive: a standby takes over on failure (as in FHRP, clustered firewalls, or a warm DR site). Simpler, but the standby is idle and failover takes some seconds or minutes. After repair, failback returns service to the primary, usually in a planned window.`,
      `DR site types revisited: hot (current data, ready within minutes), warm (equipment ready, data restored in hours), cold (space and power only, days). The choice follows the RTO and RPO and the cost.`,
      `Backups: full (everything), incremental (changes since the last backup of any kind), differential (changes since the last full). Restore time is shortest with full, then differential, then incremental (which needs the full plus every increment). Follow 3-2-1: three copies, two media types, one offsite (and increasingly one offline or immutable copy against ransomware).`,
      `Types of DR exercises: tabletop (discussion), walkthrough or checklist review, simulation (a realistic scenario with some actions performed), parallel test (run the DR site alongside production), and full interruption or failover test (production moves). Start with discussions and progress to technical tests.`,
      `Validation tests: restore a sample of backups regularly and verify the data and application work; test failover of a redundant link or device; test that alerts and contact lists work; confirm the documented runbook steps are correct.`,
      `After every test or real event hold a lessons-learned review, update the plan, and track fixes. DR documentation must include contact lists, the order of recovery, credentials stored securely, vendor contacts, and diagrams, and be available offline.`,
      `Availability math: availability = MTBF divided by (MTBF plus MTTR). Redundancy raises availability: two independent components each 99 percent available in parallel give 1 minus (0.01 times 0.01) = 99.99 percent.`,
    ],
    deepDive: [
      {
        title: 'Availability calculations, worked',
        code: `Single device:  MTBF = 1,000 hours   MTTR = 10 hours
  Availability = 1000 / (1000 + 10) = 0.9901 = 99.01 percent
  Downtime/year ~ (1 - 0.9901) x 8760 h = 86.7 hours

Two such devices in parallel (active-active or active-passive, failover perfect):
  Unavailability each = 0.0099
  Both down at once   = 0.0099 x 0.0099 = 0.000098
  Availability        = 1 - 0.000098 = 99.99 percent  (about 52 minutes/year)

Reducing MTTR is as valuable as raising MTBF:
  MTBF 1000 h, MTTR 1 h -> 1000/1001 = 99.9 percent`,
        note: `Redundancy only helps if failover works. Testing failover is how you know the 99.99 percent is real.`,
      },
      {
        title: 'Choosing a backup scheme: restore effort',
        code: `Sunday full, then daily backups. Restore needed on Thursday morning.

Scheme         Backups required to restore               Backup size/time   Restore effort
-------------  ----------------------------------------  -----------------  --------------
Daily full     Thursday's full only                      Largest            Simplest
Differential   Sunday full + Wednesday differential      Grows during week  2 sets
Incremental    Sunday full + Mon + Tue + Wed increments  Smallest           Up to 4 sets`,
        note: `Choose by backup window, storage, and how quickly you must restore (RTO).`,
      },
      {
        title: 'A sample DR test plan, escalating in realism',
        code: `Quarter 1  Tabletop      Walk through "main data center loses power" with IT, security, business owners
Quarter 2  Validation    Restore the file server and database backups into an isolated test network; check data
Quarter 3  Failover test Fail the internet circuits and the core firewall pair over; time it against RTO
Quarter 4  Full DR test  Move one non-critical application to the DR site for a day; fail back; review

After each: record RTO/RPO achieved, problems found, owners and dates for fixes.`,
      },
      {
        title: 'Failover and failback checklist',
        code: `Failover:  detect failure -> declare (per criteria) -> promote standby -> redirect traffic (DNS, VIP, routing)
           -> verify applications and data -> notify users
Failback:  repair primary -> resync data -> schedule a window -> switch back -> verify -> restore redundancy
Both:      document timings, decisions, and surprises for the lessons-learned review`,
      },
    ],
    table: {
      label: 'Table comparing active-active and active-passive',
      head: ['', 'Active-active', 'Active-passive'],
      rows: [
        ['Normal operation', 'All nodes serve traffic', 'One node serves; standby waits'],
        ['Capacity use', 'High (shared load)', 'Standby idle'],
        ['Failover', 'Remaining nodes absorb load', 'Standby promoted'],
        ['Complexity', 'Higher (state sync, load balancing)', 'Lower'],
        ['Example', 'Load-balanced web farm', 'Firewall HA pair, FHRP gateway'],
      ],
      caption: 'Both give redundancy; test the failover either way.',
    },
    example: `A company's DR plan says it can recover its billing system in 4 hours. During a tabletop exercise the team realizes nobody has the offsite backup encryption key and the only copy of the runbook is on the failed file server. They add an offline key safe, print the runbook, and next quarter's validation test restores the system in 3 hours 20 minutes, proving the RTO.`,
    tips: [
      `A backup that has never been restored is not yet a backup.`,
      `Test during safe windows, but test: failover tests reveal missing steps that no document review will.`,
      `Keep one backup copy offline or immutable so ransomware cannot encrypt it too.`,
    ],
    exam: `Know active-active versus active-passive, failover and failback, the hot, warm, and cold DR sites, the purpose of tabletop exercises and validation tests, the 3-2-1 backup rule, and the formulas for RPO, RTO, MTTR, MTBF, and availability.`,
    mistakes: [
      `Never testing the DR plan.`,
      `Counting on a redundant pair without testing that failover works.`,
      `Keeping all backup copies in the same building and on the same network.`,
    ],
    terms: [
      { term: 'Active-active', def: `Redundant nodes that all serve traffic and share load.` },
      { term: 'Active-passive', def: `One node serves while a standby waits to take over.` },
      { term: 'Failover / failback', def: `Switching to the standby / returning to the primary after repair.` },
      { term: 'Tabletop exercise', def: `Discussion-based walkthrough of a disaster scenario.` },
      { term: 'Validation test', def: `Test that proves a specific recovery capability, such as a backup restore.` },
      { term: '3-2-1 rule', def: `Three copies of data on two media types with one copy offsite.` },
    ],
    checks: [
      {
        prompt: `Two firewalls are deployed so that one handles all traffic and the other takes over only if the first fails. What is this design?`,
        options: [`Active-passive`, `Active-active`, `Load balancing`, `Link aggregation`],
        correct: 0,
        explanation: `A standby unit that takes over on failure is an active-passive design.`,
      },
      {
        prompt: `Which exercise is discussion-based and does not touch any production systems?`,
        options: [`Tabletop exercise`, `Full failover test`, `Parallel test`, `Backup restore`],
        correct: 0,
        explanation: `A tabletop exercise walks through a scenario in conversation only.`,
      },
      {
        prompt: `A device has an MTBF of 2,000 hours and an MTTR of 20 hours. What is its availability (to the nearest whole percent)?`,
        options: [`99 percent`, `90 percent`, `98 percent`, `100 percent`],
        correct: 0,
        explanation: `2000 divided by 2020 is about 0.99, or 99 percent.`,
      },
    ],
    mini: {
      prompt: `A company keeps three copies of its data on the same storage array in one data center.`,
      task: `Which parts of the 3-2-1 rule does this violate?`,
    },
    recap: `High availability uses active-active or active-passive redundancy with failover and failback. DR plans must be tested through tabletop exercises, validation tests, and failover tests, and backups must follow 3-2-1 and be restored to prove they work. Availability math relates MTBF and MTTR.`,
    classroom: `"Hindi pa plano ang plano hangga't hindi nasusubukan. Subukan, itala, ayusin."`,
  });

  NetReady.LESSONS['11-12'] = NetReady.lesson(11, {
    id: '11-12',
    slug: 'configuration-management-and-asset-lifecycle',
    title: 'Configuration Management and Asset Lifecycle: Golden Configs, Backups, EOL/EOS, Licensing, and Decommissioning',
    minutes: 15,
    outcomes: [
      `Distinguish production, backup, and baseline (golden) configurations.`,
      `List what an asset inventory should record, including licensing and warranty.`,
      `Explain end-of-life, end-of-support, and the steps to decommission a device.`,
      `Describe how patches and firmware are tested and rolled out.`,
    ],
    why: `Documentation, life-cycle, change, and configuration management are in the operations objective. Knowing what to track and when to retire a device is what keeps a network secure and supportable.`,
    simple: `Configuration management keeps every device's settings known, consistent, and recoverable. The production configuration is what is running now. A backup configuration is a saved copy you can restore. A baseline or golden configuration is the approved standard template for a device type. Comparing production to the baseline reveals drift. An asset inventory records each device's hardware model and serial number, software and firmware versions, licenses, warranty and support contracts, location, owner, and purchase and end-of-life dates. Every device has a life cycle: procurement, deployment, operation and maintenance, then end-of-sale, end-of-life (EOL), and end-of-support (EOS), when the vendor stops fixing security bugs. Retiring a device properly is decommissioning.`,
    taglish: `Ang configuration management ay nagpapanatiling kilala, pare-pareho, at nababawi ang settings ng bawat device. Ang production configuration ay ang tumatakbo ngayon. Ang backup configuration ay naka-save na kopya na puwedeng ibalik. Ang baseline o golden configuration ay aprubadong template para sa uri ng device. Ang paghahambing ng production sa baseline ay nagpapakita ng drift. Ang asset inventory ay nagtatala ng modelo at serial number, bersyon ng software at firmware, license, warranty at support contract, lokasyon, may-ari, at petsa ng pagbili at EOL. May life cycle ang bawat device: pagbili, deployment, operasyon, tapos end-of-sale, end-of-life (EOL), at end-of-support (EOS) kung kailan hihinto ang vendor sa pag-ayos ng security bugs. Ang tamang pagreretiro ay decommissioning.`,
    analogy: {
      title: 'Talaan ng sasakyan ng kumpanya',
      text: `Ang inventory ay talaan ng lahat ng sasakyan: plate number, taon, insurance, kailan mag-eexpire ang warranty, at kailan ito ibebenta. Ang golden config ay manual ng tamang settings ng bawat model. Ang decommissioning ay hindi basta pag-iwan ng lumang sasakyan sa garahe — tatanggalin ang GPS at susi, ilalagay sa tamang rekord, at ibebenta o itatapon nang maayos.`,
    },
    steps: [
      `Configuration types: running (active in memory) versus startup (saved to flash and loaded at boot); production (live), backup (stored copies), and baseline or golden (the approved reference). Save the running configuration to startup after approved changes or it is lost at reboot.`,
      `Backups: automate configuration backups after every change and on a schedule, store them securely (they contain secrets), keep versions, and test a restore. A configuration backup plus the device model and firmware version lets you replace failed hardware quickly.`,
      `Baseline compliance: periodically compare production with the golden configuration to detect drift and unauthorized changes; automation tools and source control make this routine.`,
      `Change management links to configuration management: each change has a request, approval, risk assessment, maintenance window, implementation plan, test plan, and rollback plan, and ends with updated documentation.`,
      `Asset inventory fields: asset tag, serial number, model, location (site, rack, U position), IP and MAC address, owner, role, hardware revision, OS and firmware version, license type and expiry, warranty and support contract dates, purchase date, and vendor lifecycle dates.`,
      `Lifecycle stages: plan and procure, deploy, operate and maintain, then retire. End-of-sale: vendor stops selling. End-of-life (EOL): the product is withdrawn. End-of-support (EOS): no more patches, security fixes, or technical support. Devices past EOS are a security and compliance risk and should be replaced before that date.`,
      `Patch and firmware management: read release notes, test in a lab or on a pilot group, schedule through change management, back up the configuration first, upgrade in stages (one of a redundant pair at a time), verify, and keep a rollback image.`,
      `Decommissioning steps: schedule through change management; back up the final configuration if needed; remove the device from monitoring, IPAM, DNS, and the firewall rules; deprovision licenses and accounts; wipe configurations, keys, and data (secure erase); remove from the rack, labeling, and diagrams; update the inventory; recycle or dispose of the hardware according to policy and regulations.`,
      `Licensing and warranty: track license counts and renewal dates so features do not lapse unexpectedly, and warranty and support contracts (such as next-business-day replacement) so a failed device can be replaced within the SLA.`,
    ],
    deepDive: [
      {
        title: 'Spotting configuration drift against a golden config',
        code: `golden-access-switch.cfg (approved)        switch-17 running config (production)
-----------------------------------------  -----------------------------------------
service password-encryption                service password-encryption
no ip http server                          ip http server                  <-- DRIFT
snmp-server community <redacted> RO        snmp-server community public RW <-- DRIFT (weak, read-write)
logging host 10.9.9.50                     (missing)                       <-- DRIFT
line vty 0 4                               line vty 0 4
 transport input ssh                        transport input ssh telnet     <-- DRIFT (telnet enabled)

Result: 4 deviations; open a change ticket and re-apply the baseline during the maintenance window.`,
        note: `Drift often comes from emergency manual fixes that were never recorded. Automated comparison finds them quickly.`,
      },
      {
        title: 'An inventory record (example)',
        code: `Asset tag        : NET-000417
Device           : Access switch, 48-port PoE
Model / serial   : ACME-X48P / SN 8F2210334
Location         : HQ, IDF-2, rack 3, U12
Management IP    : 10.20.2.12
Firmware         : 17.9.4
Owner / role     : Network team / floor 2 access
License          : Advanced features, expires 2027-03-31
Warranty/support : Next-business-day, ends 2028-01-15
Vendor EOS date  : 2030-06-30   -> plan replacement in FY2029`,
      },
      {
        title: 'Lifecycle dates and what to do at each',
        code: `Milestone            Meaning                                  Action
-------------------  ---------------------------------------  ---------------------------------
End-of-sale          Vendor stops selling the model           Choose the replacement model
End-of-life (EOL)    Product withdrawn, limited support       Budget and schedule replacement
End-of-support (EOS) No patches or help from the vendor       Must be replaced; risk and audit finding
Warranty end         Free hardware replacement ends           Renew support or accept risk`,
      },
      {
        title: 'Decommissioning checklist',
        code: `[ ] Change approved, window scheduled, users informed
[ ] Final configuration backed up (if needed), then device taken offline
[ ] Removed from monitoring, IPAM, DNS, DHCP reservations, firewall and ACL rules
[ ] Licenses released; accounts, SNMP credentials, and keys revoked
[ ] Configuration and stored data securely wiped (factory reset plus verification)
[ ] Cables removed and labeled; rack and diagrams updated
[ ] Inventory status set to retired; hardware recycled or destroyed per policy; certificate of disposal kept`,
        note: `Forgotten devices with old credentials and stale firewall rules are a common audit finding.`,
      },
    ],
    table: {
      label: 'Table of configuration types and lifecycle terms',
      head: ['Term', 'Meaning'],
      rows: [
        ['Production configuration', 'The configuration currently in service'],
        ['Backup configuration', 'Saved copy for restoration'],
        ['Baseline / golden configuration', 'Approved standard to compare against'],
        ['EOL', 'Vendor has withdrawn the product'],
        ['EOS', 'Vendor no longer provides patches or support'],
        ['Decommissioning', 'Formal, secure retirement of a device'],
      ],
      caption: 'Know what is running, what it should be, and when it must be replaced.',
    },
    example: `An audit finds three branch routers past their vendor's end-of-support date with a known unpatched vulnerability. The inventory shows exactly which devices, their locations, and warranty dates. The team schedules replacements through change management, restores each site's configuration onto the new router from the stored backup, and decommissions the old ones by wiping them, removing them from monitoring and the firewall rules, and recording the disposal.`,
    tips: [
      `Update the inventory and diagrams as part of every change, not afterwards.`,
      `Treat configuration backups as sensitive; they contain keys and community strings.`,
      `Plan replacement before end-of-support, not after the vulnerability notice.`,
    ],
    exam: `Know production versus backup versus baseline or golden configurations, what an asset inventory tracks (hardware, software, licensing, warranty), EOL versus EOS, patch and firmware management through change control, and the steps of decommissioning.`,
    mistakes: [
      `Keeping devices in service past end-of-support.`,
      `Forgetting to save the running configuration to startup.`,
      `Decommissioning a device without removing its firewall rules, DNS entries, and credentials.`,
    ],
    terms: [
      { term: 'Golden configuration', def: `Approved standard configuration used as the baseline for a device type.` },
      { term: 'Configuration drift', def: `Gradual divergence of a device from its approved baseline.` },
      { term: 'EOL / EOS', def: `End-of-life and end-of-support dates published by the vendor.` },
      { term: 'Asset inventory', def: `Record of devices, software, licenses, and support details.` },
      { term: 'Decommissioning', def: `Securely retiring and removing a device from service and records.` },
    ],
    checks: [
      {
        prompt: `A vendor announces that it will no longer issue security patches for a router model after next year. What date is this?`,
        options: [`End-of-support (EOS)`, `Purchase date`, `Warranty start`, `Baseline date`],
        correct: 0,
        explanation: `End-of-support means no more patches or support, making the device a growing risk.`,
      },
      {
        prompt: `Which type of configuration is the approved standard used to detect drift?`,
        options: [`Baseline (golden) configuration`, `Startup configuration only`, `Guest configuration`, `Debug configuration`],
        correct: 0,
        explanation: `The golden configuration is the reference that production devices are compared against.`,
      },
      {
        prompt: `Which step belongs in decommissioning a switch?`,
        options: [`Securely wipe it and remove it from monitoring, IPAM, and firewall rules`, `Leave its IP address in DNS`, `Keep SNMP credentials active`, `Unplug it without telling anyone`],
        correct: 0,
        explanation: `Decommissioning removes the device from all systems and securely erases its data.`,
      },
    ],
    mini: {
      prompt: `You are about to upgrade the firmware on a pair of core switches.`,
      task: `List four steps in order before and during the upgrade.`,
    },
    recap: `Manage production, backup, and golden configurations, compare them to find drift, keep an inventory with licensing and warranty data, replace devices before EOL and EOS, roll out patches through change control with backups and rollback, and decommission devices securely.`,
    classroom: `"Alamin kung ano ang tumatakbo, kung ano ang dapat tumakbo, at kung kailan ito dapat palitan."`,
  });
}(window.NetReady));
