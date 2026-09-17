/**
 * content/module-14.js — Module 14: Performance-Based Labs and Final Review
 *
 * This module is intentionally synthesis-oriented rather than introducing
 * new technical facts: it exercises multi-domain reasoning (matching the
 * spec's "configure addressing, diagnose incorrect settings, order
 * troubleshooting actions, match tools" objectives) and closes out the
 * course with a structured review and exam-day plan. The hands-on
 * "configure a small office network" and per-topic troubleshooting
 * objectives are covered by the Guided Labs (Study Tools menu) and the
 * three Mock Exams, which this module points learners toward directly.
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  NetReady.LESSONS['14-1'] = {
    id: '14-1',
    moduleId: 14,
    slug: 'worked-performance-based-scenarios',
    title: 'Putting It All Together: Three Worked Performance-Based Scenarios',
    estMinutes: 16,
    outcomes: [
      'Apply the seven-step troubleshooting methodology to realistic, multi-domain scenarios.',
      'Practice ordering diagnostic actions from most to least likely, not randomly.',
      'Recognize how symptoms from different modules (cabling, VLANs, routing, DNS, security) combine in real tickets.',
    ],
    whyItMatters:
      'Real help-desk tickets never announce which module they belong to — a single "I can\'t reach the file server" complaint might be a cable, a VLAN, a gateway, or a DNS problem, and untangling that mix is the actual job this whole course has been building toward.',
    simpleEnglish:
      'This lesson walks through three realistic, multi-part troubleshooting scenarios step by step, exactly the way a real technician (or a performance-based exam question) would present them — vague at first, resolved through a logical sequence of checks rather than a lucky guess. Each scenario deliberately combines symptoms from more than one earlier module, because that is how real problems actually show up.',
    taglish:
      'Sa lesson na ito, dadaanan natin ang tatlong makatotohanang senaryo ng troubleshooting, hakbang-hakbang, eksaktong kung paano ito haharapin ng isang tunay na technician (o ng isang performance-based na tanong sa exam) — malabo muna sa umpisa, pero nalutas sa pamamagitan ng lohikal na pagkakasunod-sunod ng mga pagsusuri, hindi basta-basta na lang pagtaya. Sinasadya na pinagsama sa bawat senaryo ang mga sintomas mula sa higit sa isang modyul, dahil ganito talaga lumalabas ang mga tunay na problema.',
    analogy: {
      title: 'Detective na sumusunod sa ebidensya, hindi sa hula',
      text:
        'Isipin mo ang bawat senaryo dito parang kaso ng isang detective. Hindi agad alam ng detective kung sino ang gumawa — sinusunod niya ang ebidensya, isa-isa, hanggang sa mapaliit ang listahan ng posibleng suspek. Kung magmamadali siyang mag-akusa nang walang sapat na ebidensya, baka maling tao ang husgahan niya. Ganito rin dapat ang troubleshooting — sundin ang ebidensya (ang mga sintomas at test results), hindi ang unang hinala lang.',
    },
    howItWorks: [
      'Scenario A — "The New Hire Can\'t Print or Browse": A new employee\'s laptop connects to Wi-Fi but cannot print to the office printer or browse the internet. Step 1 (Identify): the laptop shows an IP of 169.254.12.4. Step 2 (Theorize): this is an APIPA address, so DHCP likely failed. Step 3 (Test): check whether other devices on the same VLAN got valid addresses — they did, which rules out a dead DHCP server and points toward a scope/pool exhaustion or a VLAN mismatch on the new hire\'s port specifically. Step 4 (Plan): check the switch port\'s VLAN assignment. Step 5 (Implement): the port was mistakenly left on a VLAN with no DHCP relay configured — reassign it to the correct staff VLAN. Step 6 (Verify): the laptop receives a proper address and both printing and browsing work. Step 7 (Document): record the port misconfiguration and the fix for future reference.',
      'Scenario B — "The Branch Office Lost Contact After a Change": After a weekend maintenance window, headquarters can no longer reach the branch office\'s file server, though the branch\'s local network still works internally. Identify: the change log shows a static route was edited over the weekend. Theorize: the edited route likely has an incorrect next-hop address. Test: check the HQ routing table — the entry for the branch subnet points to the wrong interface. Plan: correct the next-hop to the actual branch router address. Implement: update the static route. Verify: ping and file access succeed from HQ to the branch. Document: note the exact route correction and link it to the weekend change ticket, reinforcing why change management documentation matters.',
      'Scenario C — "Guest Wi-Fi Is Fine, Staff Wi-Fi Intermittently Drops": Staff wireless devices randomly disconnect near the lobby, while the guest network in the same area stays stable. Identify: staff Wi-Fi uses WPA2-Enterprise (802.1X); guest uses open access with a captive portal. Theorize: since only the authenticated network is affected, suspect a RADIUS server issue rather than an RF/interference problem (which would likely affect both networks similarly). Test: check RADIUS server logs during a drop event — they show authentication timeouts, not failures, coinciding with high CPU load on the RADIUS server. Plan: address the RADIUS server\'s resource constraints or reduce unnecessary authentication re-checks. Implement and verify: staff connections stabilize once the RADIUS server issue is resolved. Document: record that this was NOT an RF problem, to prevent a future technician from wasting time doing a site survey for the wrong root cause.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Three scenario cards summarizing the domains each worked example combines">
        <table class="lesson-table">
          <thead><tr><th>Scenario</th><th>Domains Combined</th><th>Root Cause</th></tr></thead>
          <tbody>
            <tr><td>A — New hire can't print/browse</td><td>DHCP + VLAN</td><td>Port on wrong VLAN, no DHCP relay</td></tr>
            <tr><td>B — Branch office unreachable</td><td>Change management + Routing</td><td>Incorrect static route next-hop</td></tr>
            <tr><td>C — Staff Wi-Fi drops, guest fine</td><td>Wireless + AAA/RADIUS</td><td>RADIUS server resource exhaustion</td></tr>
          </tbody>
        </table>
      </div>`,
    },
    realWorldExample:
      'Scenario C is a genuinely common real-world trap: an intermittent wireless problem instinctively feels like an RF/interference issue, but the fact that the UNAUTHENTICATED guest network stays perfectly stable is the single clue that redirects the investigation toward authentication infrastructure instead of radio signal quality — exactly the kind of detail a rushed technician might miss.',
    proTips: [
      'When two networks share the same physical space but only one is affected, that difference (usually the authentication method, encryption, or VLAN) is almost always the most important clue in the whole scenario.',
      'Always write the final documentation as if a future technician with zero context will read it during a 3 a.m. outage — vague notes like "fixed it" waste the value of the entire troubleshooting process.',
    ],
    examAlert:
      'Performance-based questions often deliberately include a "red herring" symptom (like an unrelated recent change) — practice distinguishing correlation (something happened around the same time) from causation (something actually caused the problem) as shown in Scenario B.',
    beginnerMistakes: [
      'Jumping to the most familiar or most recently-studied cause instead of following the actual evidence in front of you.',
      'Ignoring a "working" comparison point (like the guest network in Scenario C) that actually narrows the investigation dramatically.',
      'Fixing the immediate symptom without documenting the root cause, leaving the same trap for the next technician.',
    ],
    keyTerms: [
      { term: 'Root cause', def: 'The underlying, actual source of a problem, as opposed to its surface-level symptom.' },
      { term: 'Red herring', def: 'A misleading clue that appears related to a problem but is not actually its cause.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'In Scenario A, what single piece of evidence pointed toward a VLAN/DHCP-relay problem specifically, rather than a dead DHCP server?',
        options: [
          'The laptop\'s antivirus software.',
          'Other devices on the same VLAN successfully received valid DHCP addresses.',
          'The printer was also offline.',
          'The laptop was brand new.',
        ],
        correct: 1,
        explanation: 'If the DHCP server were entirely dead, no device on any VLAN needing it would get an address — since others succeeded, the problem was isolated to this specific device/port.',
      },
      {
        prompt: 'In Scenario C, why did the fact that guest Wi-Fi remained stable while staff Wi-Fi dropped point away from an RF/interference cause?',
        options: [
          'Guest and staff Wi-Fi always use completely different frequencies.',
          'RF interference in a shared physical space would typically affect both networks similarly, so the difference pointed toward something specific to the authenticated network instead (RADIUS).',
          'Guest networks are never affected by any wireless problems.',
          'It did not actually rule out RF interference.',
        ],
        correct: 1,
        explanation: 'Since both networks share the same physical radio environment, a problem affecting only one strongly suggests the cause lies in what differs between them — here, RADIUS authentication.',
      },
      {
        prompt: 'Why does Scenario B\'s documentation step matter beyond just fixing the immediate problem?',
        options: [
          'Documentation is only a formality with no real value.',
          'It links the fix to the change that caused it, reinforcing why change tracking prevents repeat incidents.',
          'It replaces the need for the verification step.',
          'It is only required when more than 100 users are affected.',
        ],
        correct: 1,
        explanation: 'Connecting the fix back to the originating change closes the loop and helps prevent the same class of mistake in future changes.',
      },
    ],
    miniScenario: {
      prompt: 'A user reports "the internet is slow" right after IT enabled jumbo frames on the core switches over the weekend, but only for users on the storage VLAN.',
      task: 'Applying the reasoning style from this lesson, name the first thing you would check, and explain why the timing clue (right after the change) is suggestive but not yet proof.',
    },
    recap:
      'Real troubleshooting scenarios combine symptoms across multiple modules. The methodology from Module 13 still applies directly — identify, theorize, test, plan, implement, verify, document — and comparing a "working" reference point against the "broken" one is often the fastest way to isolate the true root cause.',
    classroomAnswer:
      '"Every one of these scenarios looked confusing until I found the ONE detail that didn\'t fit my first guess — that\'s always where the real answer is hiding."',
  };

  NetReady.LESSONS['14-2'] = {
    id: '14-2',
    moduleId: 14,
    slug: 'domain-by-domain-final-review',
    title: 'Final Review: Domain-by-Domain Checklist',
    estMinutes: 14,
    outcomes: [
      'Recall the highest-yield fact from each of the five N10-009 domains on demand.',
      'Use domain weighting to prioritize final review time.',
      'Identify your own weakest domain using the dashboard\'s readiness data.',
    ],
    whyItMatters:
      'In the final stretch before an exam, unfocused re-reading is far less effective than a targeted checklist — this lesson is that checklist, organized exactly the way the exam itself is weighted.',
    simpleEnglish:
      'This is a structured recap, not new material: one dense checklist per domain, ordered by exam weight, so your final review time goes where it earns the most points. Use it alongside the dashboard\'s "Weakest Domains" widget to decide exactly where to spend your remaining study hours.',
    taglish:
      'Ito ay isang structured na recap, hindi bagong materyal — isang siksik na checklist bawat domain, inayos ayon sa bigat nito sa exam, para doon mapunta ang huling oras mong pag-aaral kung saan pinaka-malaki ang idudulot na puntos. Gamitin ito kasabay ng "Weakest Domains" widget sa dashboard para malaman mo mismo kung saan ka dapat mag-focus sa natitirang oras.',
    analogy: {
      title: 'Final na pagsusuri bago lumabas sa exam room',
      text:
        'Isipin mo ito parang huling beses mong pagtingin sa checklist bago ka lumabas ng bahay — hindi mo na binabasa ulit ang buong libro, pinipili mo na lang ang mga pinaka-importanteng bagay na baka makalimutan mo: susi, wallet, telepono. Ganito rin ang huling review na ito — hindi na ito para matuto ng bago, kundi para masiguro mong hindi mo nakalimutan ang mga pinaka-mahalagang bagay bago ka pumasok sa exam room.',
    },
    howItWorks: [
      'Networking Concepts (23%) — OSI/TCP-IP layer-to-device-to-protocol mapping; IPv4/IPv6 address types and ranges (private, APIPA, loopback, link-local); traffic types (unicast/multicast/broadcast/anycast); topologies (star, mesh, spine-leaf, three-tier, collapsed core); cloud service/deployment models (IaaS/PaaS/SaaS, public/private/hybrid).',
      'Network Implementation (20%) — VLANs (access vs. trunk, 802.1Q, native VLAN), STP/RSTP loop prevention, routing (static vs. dynamic, AD vs. metric, OSPF/EIGRP/BGP scope), FHRP, WAN types, VPN types, wireless bands/security (WPA2 vs. WPA3, personal vs. enterprise).',
      'Network Operations (19%) — physical vs. logical diagrams, IPAM, EOL vs. EOS, change/configuration management, SNMP/flow data/packet capture/port mirroring, RPO/RTO/MTTR/MTBF, cold/warm/hot sites, NTP vs. PTP.',
      'Network Security (14%) — CIA triad, vulnerability/threat/exploit/risk, AAA (RADIUS vs. TACACS+), PKI public/private key roles, DMZ/ACL/NAC, DoS vs. DDoS, social engineering types, IoT/OT segmentation, PCI DSS vs. GDPR.',
      'Network Troubleshooting (24%) — the seven-step methodology in order, physical-layer symptom patterns (bad termination, rising CRC errors), VLAN/routing/DHCP symptom patterns (169.254.x.x, gateway-only-local, VLAN isolation), congestion vs. latency vs. packet loss vs. interference, and which command-line tool answers which question.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Domain weight checklist ordered highest to lowest">
        <div class="weight-bar"><span class="weight-label">Troubleshooting</span><span class="weight-track"><span class="weight-fill" style="width:24%;background:var(--accent-red)"></span></span><span class="weight-value">24%</span></div>
        <div class="weight-bar"><span class="weight-label">Networking Concepts</span><span class="weight-track"><span class="weight-fill" style="width:23%;background:var(--accent-cyan)"></span></span><span class="weight-value">23%</span></div>
        <div class="weight-bar"><span class="weight-label">Implementation</span><span class="weight-track"><span class="weight-fill" style="width:20%;background:var(--accent-blue)"></span></span><span class="weight-value">20%</span></div>
        <div class="weight-bar"><span class="weight-label">Operations</span><span class="weight-track"><span class="weight-fill" style="width:19%;background:var(--accent-green)"></span></span><span class="weight-value">19%</span></div>
        <div class="weight-bar"><span class="weight-label">Security</span><span class="weight-track"><span class="weight-fill" style="width:14%;background:var(--accent-amber)"></span></span><span class="weight-value">14%</span></div>
      </div>`,
    },
    realWorldExample:
      'A student with limited final review time who spends it evenly across all five domains is leaving points on the table — spending proportionally more time on Troubleshooting and Concepts (47% of the exam combined) reflects exactly how the real test is weighted.',
    proTips: [
      'Read through this checklist once without looking anything up — every item you hesitate on is a precise, targeted flag for what to re-read next, far more efficient than re-reading entire modules.',
      'Check the Dashboard\'s "Weakest Domains" card right before this review — it is built from your own actual quiz data, not a guess, and should directly influence where you spend the next hour.',
    ],
    examAlert:
      'This checklist deliberately mirrors the density of real exam recall — if a line item feels unfamiliar, that is a genuine signal to revisit that lesson before exam day, not something to skip past.',
    beginnerMistakes: [
      'Treating final review time as "more of the same" studying instead of a targeted, checklist-driven pass.',
      'Ignoring the dashboard\'s weakest-domain data in favor of just re-studying whatever feels most comfortable and familiar.',
      'Skipping the lowest-weighted domain (Security, 14%) entirely — it is still roughly one in every seven questions.',
    ],
    keyTerms: [
      { term: 'Final review', def: 'A targeted, checklist-driven study pass focused on recall gaps rather than first-time learning.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Why does this lesson organize its checklist by domain weight rather than alphabetically or by module number?',
        options: [
          'It has no particular reason — the order is arbitrary.',
          'So limited final review time is spent proportionally where it earns the most exam points.',
          'Because alphabetical order is not possible for domain names.',
          'Because module number and domain weight are always identical.',
        ],
        correct: 1,
        explanation: 'Weighting the review by domain weight directly mirrors how points are actually distributed on the real exam.',
      },
      {
        prompt: 'What should you do with a checklist item you hesitate on while reviewing?',
        options: [
          'Ignore it and move on, since hesitation does not matter.',
          'Flag it as a specific, targeted signal to revisit that lesson before exam day.',
          'Assume it will not be tested.',
          'Restart the entire course from Module 0.',
        ],
        correct: 1,
        explanation: 'Hesitation on a specific recall item is precisely the efficient signal a final review checklist is designed to surface.',
      },
      {
        prompt: 'Which two domains together make up nearly half of the entire N10-009 exam?',
        options: [
          'Security and Operations',
          'Troubleshooting and Networking Concepts',
          'Implementation and Security',
          'Operations and Implementation',
        ],
        correct: 1,
        explanation: 'Troubleshooting (24%) and Networking Concepts (23%) together account for 47% of the exam.',
      },
    ],
    miniScenario: {
      prompt: 'You have exactly two hours left before your exam and have not yet checked your dashboard\'s Weakest Domains card.',
      task: 'Describe the specific sequence of actions you would take in those two hours, referencing this lesson\'s checklist and the dashboard data.',
    },
    recap:
      'This lesson is a weighted, domain-by-domain recall checklist covering the highest-yield facts from every module, ordered by real exam weight. Use it alongside your own dashboard data to target final review time where it matters most.',
    classroomAnswer:
      '"With limited time left, I don\'t re-read everything evenly — I hit this checklist domain by domain, heaviest first, and let my own weakest-domain data decide exactly where to slow down."',
  };

  NetReady.LESSONS['14-3'] = {
    id: '14-3',
    moduleId: 14,
    slug: 'exam-day-logistics-and-pacing',
    title: 'Exam Day: What to Expect and How to Pace Yourself',
    estMinutes: 10,
    outcomes: [
      'Explain a reasonable time-budgeting strategy across multiple-choice and performance-based questions.',
      'Identify practical exam-day logistics to prepare in advance.',
      'Apply a calm, methodical mindset consistent with the troubleshooting methodology learned throughout the course.',
    ],
    whyItMatters:
      'Knowing the material is necessary but not sufficient — poor time management or unnecessary exam-day stress can cost a well-prepared candidate points they otherwise would have earned easily.',
    simpleEnglish:
      'On exam day, performance-based questions (PBQs) typically appear early in the exam and can consume significantly more time than a multiple-choice question — a common strategy is to flag a PBQ that is taking too long, move on to secure the multiple-choice points first, and return to it if time remains. Bring required identification, arrive early, and confirm your exam center or online-proctoring requirements in advance. During the exam, apply the same methodical mindset from Module 13: read carefully, eliminate clearly wrong answers first, and trust your preparation rather than second-guessing every answer repeatedly.',
    taglish:
      'Sa mismong araw ng exam, ang mga performance-based questions (PBQ) ay karaniwang lumalabas sa simula pa lang, at puwedeng ubusin ang mas maraming oras kaysa sa isang multiple-choice question — isang karaniwang istratehiya ay i-flag muna ang PBQ na matagal na, lumipat muna sa mga multiple-choice para masiguro ang mga puntos doon, tapos bumalik na lang sa PBQ kung may natitirang oras. Magdala ng kinakailangang ID, dumating nang maaga, at kumpirmahin ang requirements ng testing center o online proctoring nang maaga. Habang nasa exam, gamitin ang parehong maingat na pag-iisip mula sa Module 13 — basahin nang mabuti, tanggalin muna ang mga malinaw na maling sagot, at magtiwala sa paghahanda mo sa halip na paulit-ulit na pagdudahan ang bawat sagot.',
    analogy: {
      title: 'Pag-order sa buffet, hindi paggastos ng buong oras sa isang pinggan',
      text:
        'Isipin mo ang exam parang isang limitadong-oras na buffet — kung gugugulin mo ang kalahati ng oras mo sa isang mabigat, matagal na ulam (isang mahirap na PBQ), baka wala nang oras para sa mas maraming madaling ulam na puwede sanang mabilis mong makuha (ang mga multiple-choice questions). Mas mainam na kunin muna ang mga madaling puntos, tapos bumalik na lang sa mahirap na ulam kung may natitira pang oras.',
    },
    howItWorks: [
      'PBQs often appear at the start of the exam and can be time-consuming; flagging one for review and moving forward first is a widely recommended pacing strategy to avoid losing time on easier questions later.',
      'A rough time budget: divide your total exam time by the number of questions to get an average pace, but expect to spend less time on straightforward multiple-choice items and more on PBQs — the average is a guide, not a strict per-question rule.',
      'Prepare logistics in advance: confirm your exam appointment, required identification, and (for online proctoring) your testing environment requirements, well before exam day to avoid last-minute stress.',
      'During the exam, read each question fully before answering, eliminate obviously incorrect options first, and be alert for exam traps (precise wording, distractor terms that sound similar to the correct answer) covered throughout this course\'s "Exam Alert" callouts.',
      'Avoid excessive second-guessing: research on test-taking consistently shows that a first, well-reasoned answer is changed correctly about as often as it is changed incorrectly — trust your preparation rather than repeatedly flip-flopping.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Suggested exam pacing strategy shown as a simple flow">
        <ol class="journey-list">
          <li>See a PBQ that is taking too long &rarr; flag it, move on</li>
          <li>Work through multiple-choice questions at a steady pace</li>
          <li>Secure the "easy" points first across the whole exam</li>
          <li>Return to flagged/PBQ items with remaining time</li>
          <li>Do a final pass only on flagged/uncertain items</li>
        </ol>
      </div>`,
    },
    realWorldExample:
      'A candidate who spends 20 minutes stuck on a single difficult PBQ early in the exam may run out of time before reaching easier multiple-choice questions worth equal or greater points later on — flagging and returning later protects against exactly this outcome.',
    proTips: [
      'Practice this pacing strategy during your mock exams in this platform, not for the first time on the real exam day — the timer and flag-for-review feature exist specifically so you can rehearse this.',
      'Sleep and a normal routine before the exam consistently outperform last-minute cramming — your brain needs to consolidate what you have already learned, not absorb something new the night before.',
    ],
    examAlert:
      'This lesson describes general, widely-recommended pacing strategy, not official CompTIA policy — always confirm current exam format, question counts, and timing directly from CompTIA before your exam date, since these details can change between exam versions.',
    beginnerMistakes: [
      'Spending too long on an early, difficult PBQ and running out of time for easier questions later.',
      'Arriving at a testing center without confirming required identification or appointment details in advance.',
      'Repeatedly second-guessing and changing well-reasoned answers without new information to justify the change.',
    ],
    keyTerms: [
      { term: 'Flag for review', def: 'Marking a question to skip temporarily and return to later without losing your place in the exam.' },
      { term: 'Time budgeting', def: 'Allocating exam time strategically across questions rather than spending it evenly or on a first-come basis.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is a widely recommended strategy for handling a time-consuming PBQ early in the exam?',
        options: [
          'Spend unlimited time on it before moving to any other question.',
          'Flag it for review, move on to secure other points first, and return to it if time remains.',
          'Skip the entire exam and reschedule.',
          'Guess randomly and immediately move to the next section.',
        ],
        correct: 1,
        explanation: 'Flagging and returning later protects your ability to secure easier points elsewhere in the exam.',
      },
      {
        prompt: 'What does research on test-taking generally show about changing a first answer without new information?',
        options: [
          'It almost always improves the outcome.',
          'It is roughly as likely to make the answer wrong as to make it right, making excessive second-guessing counterproductive.',
          'It has no measurable effect at all.',
          'It should always be avoided under every possible circumstance.',
        ],
        correct: 1,
        explanation: 'Without new information, changing a well-reasoned answer carries real risk of making it wrong just as often as right.',
      },
      {
        prompt: 'Why does this lesson recommend confirming exam logistics (ID, appointment, proctoring requirements) well in advance?',
        options: [
          'It has no real impact on exam day.',
          'To avoid last-minute stress or complications that could affect focus and performance on exam day itself.',
          'Because CompTIA requires it only for online exams.',
          'Because logistics never change between exam attempts.',
        ],
        correct: 1,
        explanation: 'Handling logistics in advance removes avoidable, unnecessary stress from exam day itself.',
      },
    ],
    miniScenario: {
      prompt: 'During a mock exam on this platform, you notice you are spending far too long on the first performance-based-style question and are already 15 minutes into a 90-minute timer.',
      task: 'Describe what you would do next, applying the pacing strategy from this lesson.',
    },
    recap:
      'Flag time-consuming PBQs and return to them after securing easier points. Budget time as a guide, not a rigid rule. Prepare logistics in advance. Trust well-reasoned first answers rather than excessive second-guessing, and apply the same calm, methodical mindset practiced throughout this course.',
    classroomAnswer:
      '"I treat the exam like any other troubleshooting session — work the plan, don\'t panic on one hard question, and trust the preparation that got me here."',
  };
}(window.NetReady));
