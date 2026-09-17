/**
 * content/module-0.js — Module 0: Welcome, Exam Roadmap, and Study Setup
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  NetReady.LESSONS['0-1'] = {
    id: '0-1',
    moduleId: 0,
    slug: 'what-is-network-plus',
    title: 'What Network+ Is and the Jobs It Supports',
    estMinutes: 8,
    outcomes: [
      'Explain what the CompTIA Network+ certification actually certifies.',
      'List at least four job roles that use Network+ as a stepping stone.',
      'Connect Network+ knowledge to a future SOC analyst career path.',
    ],
    whyItMatters:
      'You are not studying trivia — you are studying the vocabulary and mental model that every help-desk technician, network administrator, and SOC analyst uses every single day at work.',
    simpleEnglish:
      'CompTIA Network+ is a vendor-neutral certification that proves you understand how networks are designed, configured, managed, and troubleshot. "Vendor-neutral" means it is not about one brand like Cisco or Ubiquiti — it is about the concepts that apply everywhere.',
    taglish:
      'Ang Network+ ay parang "starter pack" mo bago ka pumasok sa IT o cybersecurity. Hindi ito puro Cisco o puro isang brand lang — general knowledge siya na kailangan mo kahit saan kang company mapunta. Kapag alam mo ang Network+, mas madali mo maiintindihan yung mga susunod na certs tulad ng Security+, CCNA, o kahit SOC analyst tools.',
    analogy: {
      title: 'Driver\'s license, hindi brand-specific',
      text:
        'Isipin mo ang Network+ parang driver\'s license. Kapag may lisensya ka, pwede kang magmaneho ng Toyota, Honda, o kahit anong sasakyan — dahil ang natutunan mo ay ang "paano magmaneho," hindi ang "paano magmaneho ng isang specific brand lang." Ganun din ang Network+: natututo ka ng networking sa general, kaya kahit anong company o brand ng router/switch ang gamitin mo sa trabaho, may foundation ka na.',
    },
    howItWorks: [
      'CompTIA designs the exam objectives around real job-task analysis — they survey working IT professionals to see what skills entry-level network techs actually need.',
      'The exam mixes multiple-choice questions with performance-based questions (PBQs) that simulate real configuration tasks.',
      'Passing proves baseline competency; it does not replace hands-on experience, but it opens the door to interviews.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram career-ladder" role="img" aria-label="Career ladder from Network+ to help desk, network technician, network administrator, and SOC analyst">
        <div class="ladder-step"><span class="ladder-badge">Start</span>Network+ Certification</div>
        <div class="ladder-arrow">&darr;</div>
        <div class="ladder-row">
          <div class="ladder-card">Help Desk / Desktop Support</div>
          <div class="ladder-card">Network Technician</div>
          <div class="ladder-card">NOC Analyst</div>
        </div>
        <div class="ladder-arrow">&darr;</div>
        <div class="ladder-row">
          <div class="ladder-card highlight">SOC Analyst (Tier 1)</div>
          <div class="ladder-card">Network Administrator</div>
          <div class="ladder-card">Systems Administrator</div>
        </div>
      </div>`,
    },
    realWorldExample:
      'A Tier 1 SOC analyst spends much of the day reading network traffic logs, firewall alerts, and packet captures. Without knowing what a normal DNS request or a normal three-way TCP handshake looks like, it is impossible to spot what is abnormal — which is the entire job.',
    proTips: [
      'Treat every acronym as a term you must be able to define out loud, not just recognize on a multiple-choice test.',
      'Keep a personal "exam trap" notebook — the moment you get tricked by a question once, write down why, so it never tricks you twice.',
    ],
    examAlert:
      'Network+ questions love to test whether you can tell the difference between similar-sounding terms (e.g., "throughput" vs "bandwidth", or "switch" vs "router"). Precision in definitions is rewarded.',
    beginnerMistakes: [
      'Memorizing acronym expansions without understanding what the thing actually does.',
      'Skipping performance-based question practice because "multiple choice is easier" — PBQs often carry more weight per question.',
      'Studying only the night before instead of spacing study sessions (spaced repetition beats cramming).',
    ],
    keyTerms: [
      { term: 'CompTIA', def: 'The organization that creates and administers vendor-neutral IT certifications, including Network+, A+, and Security+.' },
      { term: 'Vendor-neutral', def: 'Not tied to one company\'s products — the concepts apply across Cisco, Juniper, Ubiquiti, Aruba, etc.' },
      { term: 'PBQ (Performance-Based Question)', def: 'An exam item that requires you to perform a simulated task (e.g., drag cables to correct ports, configure a subnet) instead of picking from a list.' },
      { term: 'SOC (Security Operations Center)', def: 'A team that monitors an organization\'s networks and systems for security threats around the clock.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What does "vendor-neutral" mean in the context of Network+?',
        options: [
          'The exam only covers Cisco equipment.',
          'The concepts apply across different brands of networking equipment.',
          'The certification has no official vendor.',
          'The exam changes vendor focus every year.',
        ],
        correct: 1,
        explanation:
          'Vendor-neutral means the knowledge transfers across brands — you learn how switching and routing work in general, not one company\'s command syntax.',
      },
      {
        prompt: 'Which of these is a performance-based question (PBQ) most likely to ask you to do?',
        options: [
          'Choose the definition of "bandwidth" from four options.',
          'Drag network devices into the correct place on a diagram and configure settings.',
          'Type your name for exam registration.',
          'Answer a true/false question about company policy.',
        ],
        correct: 1,
        explanation:
          'PBQs simulate hands-on tasks — placing devices, configuring addresses, matching cables — rather than simple recall.',
      },
      {
        prompt: 'Why is Network+ relevant to a future SOC analyst?',
        options: [
          'SOC analysts never touch networking concepts.',
          'Understanding normal network behavior is required to detect abnormal (malicious) behavior.',
          'Network+ is only useful for cable installers.',
          'SOC analysts only need programming skills.',
        ],
        correct: 1,
        explanation:
          'You cannot recognize an anomaly (like unusual DNS traffic or a port scan) if you do not first understand what normal network behavior looks like.',
      },
    ],
    miniScenario: {
      prompt:
        'A friend tells you, "Bakit ka pa mag-aaral ng Network+ eh gusto mo naman cybersecurity?"',
      task:
        'Write a two-sentence Taglish explanation of why networking fundamentals matter for a cybersecurity career, as if you were answering your friend directly.',
    },
    recap:
      'Network+ is a vendor-neutral certification proving foundational networking competency. It supports careers from help desk to SOC analyst, and its performance-based questions test real skills, not just memorization.',
    classroomAnswer:
      '"Network+ certifies that I understand how networks work regardless of brand — it\'s the foundation every IT and security role builds on, including the SOC analyst path I\'m aiming for."',
  };

  NetReady.LESSONS['0-2'] = {
    id: '0-2',
    moduleId: 0,
    slug: 'how-the-exam-is-organized',
    title: 'How the N10-009 Exam Is Organized',
    estMinutes: 9,
    outcomes: [
      'Name the five N10-009 domains and their approximate weight.',
      'Explain the difference between multiple-choice and performance-based questions.',
      'Identify which domain is weighted the heaviest and why that matters for study time.',
    ],
    whyItMatters:
      'Knowing how points are distributed tells you where to invest your study hours. Spending equal time on every topic is inefficient when the exam is not equally weighted.',
    simpleEnglish:
      'The N10-009 exam is organized into five domains, each covering a percentage of the total exam. Troubleshooting (24%) and Networking Concepts (23%) carry the most weight, followed by Implementation (20%), Operations (19%), and Security (14%).',
    taglish:
      'Isipin mo ang exam parang pie — hindi pantay-pantay ang hiwa. May mga topics na mas malaki ang "slice" nila kaysa sa iba. Kaya kung limited lang ang oras mo, mas smart na unahin mo yung Troubleshooting at Networking Concepts dahil doon halos kalahati (47%) ng buong exam manggagaling.',
    analogy: {
      title: 'Pagkain sa buffet — piliin ang malaking plato muna',
      text:
        'Sa buffet, kung limitado ang tiyan mo (oras mo), mas marunong kang pumili ng pagkaing mabibigat at masustansya bago yung mga side dish. Ganun din sa pag-aaral — unahin mo yung mga domain na may malaking weight (Troubleshooting, Concepts) bago mag-deep dive sa mas maliit na weight tulad ng Security domain (14%) — hindi ibig sabihin hindi mo na pag-aaralan yun, priority lang ang usapan.',
    },
    howItWorks: [
      'CompTIA publishes an official "Exam Objectives" PDF that lists every topic inside each domain.',
      'The exam has a maximum of 90 questions and a 90-minute time limit (verify current numbers on comptia.org before exam day, as these can change between versions).',
      'A scaled score (not raw percentage) determines pass/fail; CompTIA does not publish the exact conversion formula.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram domain-weights" role="img" aria-label="Bar chart of N10-009 domain weights">
        <div class="weight-bar"><span class="weight-label">Troubleshooting</span><span class="weight-track"><span class="weight-fill" style="width:24%;background:var(--accent-red)"></span></span><span class="weight-value">24%</span></div>
        <div class="weight-bar"><span class="weight-label">Networking Concepts</span><span class="weight-track"><span class="weight-fill" style="width:23%;background:var(--accent-cyan)"></span></span><span class="weight-value">23%</span></div>
        <div class="weight-bar"><span class="weight-label">Implementation</span><span class="weight-track"><span class="weight-fill" style="width:20%;background:var(--accent-blue)"></span></span><span class="weight-value">20%</span></div>
        <div class="weight-bar"><span class="weight-label">Operations</span><span class="weight-track"><span class="weight-fill" style="width:19%;background:var(--accent-green)"></span></span><span class="weight-value">19%</span></div>
        <div class="weight-bar"><span class="weight-label">Security</span><span class="weight-track"><span class="weight-fill" style="width:14%;background:var(--accent-amber)"></span></span><span class="weight-value">14%</span></div>
      </div>`,
    },
    realWorldExample:
      'This dashboard\'s "Weakest Domains" widget uses these exact weights to prioritize what it recommends you study next — a low score in a 24%-weighted domain matters more than a low score in a 14%-weighted one.',
    proTips: [
      'Re-download the official objectives PDF a week before your exam date in case of a silent revision.',
      'When two domains seem to overlap (e.g., a security misconfiguration causing a network outage), the exam usually cares about which action you would take, which signals the intended domain.',
    ],
    examAlert:
      'Do not assume every version of Network+ has the same domain weights as N10-009. If your exam voucher shows a different code (e.g., N10-008), the weights differ — always match your study material to your voucher\'s exact code.',
    beginnerMistakes: [
      'Studying from outdated N10-008 material without checking for objective changes.',
      'Assuming "Security" is unimportant because it has the lowest weight — 14% is still roughly 1 out of every 7 questions.',
      'Ignoring performance-based questions during practice because they feel harder to simulate.',
    ],
    keyTerms: [
      { term: 'Domain', def: 'A major topic category on the exam blueprint (e.g., Networking Concepts).' },
      { term: 'Exam objective', def: 'A specific, testable skill or knowledge point listed under a domain in CompTIA\'s official objectives document.' },
      { term: 'Scaled score', def: 'A converted score (not a raw percentage) CompTIA uses to determine pass/fail, designed to be comparable across slightly different exam forms.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Which N10-009 domain carries the single highest weight?',
        options: ['Network Security', 'Network Troubleshooting', 'Network Operations', 'Network Implementation'],
        correct: 1,
        explanation: 'Network Troubleshooting is weighted at 24%, the highest of the five domains.',
      },
      {
        prompt: 'Why should you check the official CompTIA objectives before a long study plan?',
        options: [
          'Because objectives never change and this is just a formality.',
          'Because exam versions and objective weights can be revised, and your study plan should match your exact voucher code.',
          'Because CompTIA requires you to print the PDF for the testing center.',
          'Because the objectives PDF replaces the need for any other study material.',
        ],
        correct: 1,
        explanation: 'Exam objectives get revised periodically; always confirm your materials match your specific exam code.',
      },
      {
        prompt: 'A scaled score is best described as:',
        options: [
          'The exact percentage of questions you answered correctly.',
          'A converted score used for pass/fail decisions, not a raw percentage.',
          'A bonus score given for finishing early.',
          'The number of PBQs you completed.',
        ],
        correct: 1,
        explanation: 'CompTIA converts raw performance into a scaled score; the exact formula is not published.',
      },
    ],
    miniScenario: {
      prompt: 'You have 10 hours left before your exam and have not touched Network Security topics yet.',
      task: 'Given the domain weights, decide how you would split those 10 hours across review vs. new Security content, and justify it in one sentence.',
    },
    recap:
      'N10-009 has five weighted domains: Troubleshooting (24%), Concepts (23%), Implementation (20%), Operations (19%), Security (14%). Study time should roughly track these weights, and you should always verify against the current official objectives.',
    classroomAnswer:
      '"The exam has five domains, and Troubleshooting and Networking Concepts together make up almost half the exam — so that\'s where I focus my time first."',
  };

  NetReady.LESSONS['0-3'] = {
    id: '0-3',
    moduleId: 0,
    slug: 'how-to-study-with-this-website',
    title: 'How to Study With This Website',
    estMinutes: 7,
    outcomes: [
      'Navigate the dashboard, lesson player, and study tools confidently.',
      'Explain the difference between Study Mode and Exam Mode in the quiz engine.',
      'Set up a personal study rhythm using streaks and bookmarks.',
    ],
    whyItMatters:
      'A great course is useless if you do not know how to use it efficiently. Five minutes learning the interface now saves hours of confusion later.',
    simpleEnglish:
      'This platform tracks your progress locally in your browser. You can bookmark lessons, take notes, review flashcards, and practice quizzes in two modes: Study Mode (see feedback immediately) and Exam Mode (feedback only at the end, like the real test).',
    taglish:
      'Lahat ng progress mo — completed lessons, quiz scores, streak — naka-save sa browser mo mismo (localStorage), walang account kailangan, walang internet kailangan pagkatapos ng unang load. Kaya kung parehong browser at device lang ang gamit mo, sigurado ka na hindi mawawala ang progress mo pag nag-refresh ka.',
    analogy: {
      title: 'Notebook na naiiwan sa bahay mo',
      text:
        'Isipin mo ang localStorage parang physical notebook na naka-ipon lahat ng notes mo — pero naka-lock lang siya sa isang bahay (browser). Kung babago ka ng browser o device, parang bumili ka ng bagong notebook — wala doon yung dati mong sulat, kaya may Export/Import feature na parang photocopy machine para madala mo ang laman ng notebook papunta sa ibang device.',
    },
    howItWorks: [
      'The Dashboard shows your overall completion %, streak, weakest domains, and a "Continue Learning" shortcut.',
      'The Lesson Player walks you through the 18-part lesson template, with Previous/Next controls and a progress sidebar.',
      'Study Tools (flashcards, port trainer, subnet calculator, glossary) live under their own nav items for quick, focused practice.',
      'The Assessment Engine lets you filter practice by module, domain, or difficulty, and switch between Study Mode and Exam Mode.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram site-map" role="img" aria-label="Site map of NetReady Plus sections">
        <div class="sitemap-node root">NetReady+</div>
        <div class="sitemap-row">
          <div class="sitemap-node">Dashboard</div>
          <div class="sitemap-node">Curriculum</div>
          <div class="sitemap-node">Study Tools</div>
          <div class="sitemap-node">Practice &amp; Exams</div>
        </div>
      </div>`,
    },
    realWorldExample:
      'If you study on your laptop during the day and want to continue on a family desktop at night, use "Export Progress" on the laptop and "Import Progress" on the desktop from the Settings menu.',
    proTips: [
      'Turn on "side-by-side" explanation mode in the lesson player if you want English and Taglish next to each other instead of stacked.',
      'Use the Daily 10-Question Drill as a warm-up before every study session — it keeps older material fresh (spaced repetition).',
    ],
    examAlert:
      'Exam Mode in this platform intentionally hides answer feedback until you submit the whole set — this mirrors the real Network+ exam experience and trains your time management.',
    beginnerMistakes: [
      'Only ever using Study Mode and never practicing under Exam Mode conditions (timer + delayed feedback).',
      'Forgetting to export progress before clearing browser data or switching browsers.',
      'Ignoring the "Weakest Domains" widget instead of using it to plan the next study session.',
    ],
    keyTerms: [
      { term: 'localStorage', def: 'A browser feature that stores data on your device so it persists after closing and reopening the browser, without needing a server.' },
      { term: 'Study Mode', def: 'A quiz mode that shows correct/incorrect feedback immediately after each question.' },
      { term: 'Exam Mode', def: 'A quiz mode that hides feedback until the full set is submitted, simulating real exam conditions.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Where does this platform store your quiz scores and completed lessons?',
        options: [
          'On a remote company server.',
          'In your browser\'s localStorage, on your own device.',
          'It does not save progress at all.',
          'In a cloud account you must register for.',
        ],
        correct: 1,
        explanation: 'The platform is fully local — no accounts, no server — everything lives in your browser\'s localStorage.',
      },
      {
        prompt: 'What is the main difference between Study Mode and Exam Mode?',
        options: [
          'Study Mode has no questions.',
          'Exam Mode delays feedback until the whole set is submitted; Study Mode gives feedback immediately.',
          'Exam Mode is only for mock exams, never for module quizzes.',
          'There is no difference.',
        ],
        correct: 1,
        explanation: 'Exam Mode simulates real test conditions by withholding feedback until submission.',
      },
      {
        prompt: 'How can you move your progress from one browser to another?',
        options: [
          'It is impossible.',
          'Use the Export Progress / Import Progress feature in Settings.',
          'Progress automatically syncs over the internet.',
          'You must retake every quiz from scratch.',
        ],
        correct: 1,
        explanation: 'Export creates a JSON file of your progress; Import loads it back in on another browser or device.',
      },
    ],
    miniScenario: {
      prompt: 'You just finished a study session on a shared family computer.',
      task: 'List the one setting you should check (hint: think about privacy and progress safety) before closing the browser.',
    },
    recap:
      'This platform stores everything locally via localStorage. Use Study Mode to learn, Exam Mode to simulate the real test, and Export/Import to move progress between devices.',
    classroomAnswer:
      '"Everything I do here is saved right in my browser — no login needed — and I can export it as a backup file whenever I want."',
  };

  NetReady.LESSONS['0-4'] = {
    id: '0-4',
    moduleId: 0,
    slug: 'diagnostic-and-study-plans',
    title: 'Initial Diagnostic and Choosing Your Study Plan',
    estMinutes: 10,
    outcomes: [
      'Take the initial diagnostic quiz to establish a starting baseline.',
      'Choose between an 8-week, 12-week, or 16-week study plan based on your available time.',
      'Understand how the readiness meter will track your progress toward exam day.',
    ],
    whyItMatters:
      'Studying without a plan is like driving without a destination typed into the map. A plan tells you exactly how many lessons per week keep you on pace.',
    simpleEnglish:
      'Before you dive into Module 1, take the short diagnostic quiz below to see your current baseline across all five domains. Then pick a study plan that matches your available weekly hours.',
    taglish:
      'Yung diagnostic quiz, hindi ito para hiyain ka — layunin lang nito malaman kung saan ka currently nakatayo. Kung marami kang alam sa Concepts pero konti sa Security, sasabihin sayo ng dashboard yun agad, para alam mo kung saan mag-focus. Tapos, piliin mo yung plano na kaya mong sundin — mas maganda yung consistent 8 weeks kesa sa ambisyosong 4 weeks na hindi mo naman kayang sundin.',
    analogy: {
      title: 'Pagsukat bago mag-training plan sa gym',
      text:
        'Bago ka gumawa ng workout plan, sinusukat muna ng coach kung ano kaya mong buhatin ngayon — hindi basta-basta agad sa pinakamabigat na weights. Ganun din dito: sinusukat muna ng diagnostic quiz kung saan ka currently nasa bawat domain, para hindi ka basta mag-aaksaya ng oras sa topics na pala marunong ka na pala.',
    },
    howItWorks: [
      'The diagnostic quiz pulls a small mixed set of questions across all five domains (from the currently available question bank).',
      'Your results populate the "Weakest Domains" card on your Dashboard immediately.',
      'Pick a plan length; the platform recommends roughly how many lessons/quizzes per week to hit that timeline as more modules are added.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Plan</th><th>Weekly Commitment</th><th>Best For</th></tr></thead>
        <tbody>
          <tr><td>8-week sprint</td><td>~8-10 hrs/week</td><td>Full-time students with an upcoming exam date</td></tr>
          <tr><td>12-week steady</td><td>~5-6 hrs/week</td><td>Balancing school or work alongside study</td></tr>
          <tr><td>16-week relaxed</td><td>~3-4 hrs/week</td><td>Building deep understanding without rushing</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A working student who can only study on weeknights and Saturday mornings will burn out on an 8-week sprint — the 12 or 16-week plan produces better retention and less stress.',
    proTips: [
      'Re-take a short diagnostic-style mixed quiz every 2-3 weeks to watch your readiness trend, not just your last score.',
      'Pick the slower plan if you are unsure — you can always accelerate, but a missed aggressive deadline hurts motivation.',
    ],
    examAlert:
      'The readiness meter is a study aid, not a guarantee — it never promises a passing score on the real exam. Treat a high readiness score as "well-prepared to attempt," not "certified to pass."',
    beginnerMistakes: [
      'Skipping the diagnostic and jumping straight to the hardest topics out of impatience.',
      'Choosing an unrealistic timeline and then feeling discouraged when life gets in the way.',
      'Treating one quiz score as a permanent judgment instead of a snapshot to improve on.',
    ],
    keyTerms: [
      { term: 'Diagnostic assessment', def: 'A short quiz taken before structured study to establish a starting baseline across topics.' },
      { term: 'Readiness meter', def: 'A calculated estimate (from recent quiz accuracy, domain performance, mock-exam consistency, lab completion, and recency of study) of how prepared you appear for the exam.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the main purpose of the initial diagnostic quiz?',
        options: [
          'To determine if you are allowed to use the platform.',
          'To establish a starting baseline across the five domains so you know where to focus.',
          'To replace the need for any further studying.',
          'To lock you out of modules you score poorly on.',
        ],
        correct: 1,
        explanation: 'It is purely diagnostic — a snapshot to guide your study priorities, not a gatekeeping test.',
      },
      {
        prompt: 'Which study plan best fits a student who can only study 3-4 hours per week?',
        options: ['8-week sprint', '12-week steady', '16-week relaxed', 'No plan is needed'],
        correct: 2,
        explanation: 'The 16-week relaxed plan matches roughly 3-4 hours of weekly commitment.',
      },
      {
        prompt: 'The readiness meter should be understood as:',
        options: [
          'A guarantee that you will pass the real exam.',
          'A study aid estimating preparedness, not a pass guarantee.',
          'An official CompTIA score.',
          'A random number with no basis.',
        ],
        correct: 1,
        explanation: 'It is a transparent, locally-calculated estimate meant to guide study, never a promise of a passing score.',
      },
    ],
    miniScenario: {
      prompt: 'Your diagnostic quiz shows strong Concepts and Implementation scores, but weak Security and Troubleshooting.',
      task: 'Write which two modules you would schedule first once they become available, and why, based on both your weak areas and their exam weight.',
    },
    recap:
      'Take the diagnostic quiz to get a baseline, then choose an 8, 12, or 16-week plan that realistically fits your schedule. The readiness meter tracks your trend over time — treat it as guidance, not a guarantee.',
    classroomAnswer:
      '"I took the diagnostic, picked the 12-week plan since I\'m balancing school, and I\'m prioritizing my weakest domains first."',
  };
}(window.NetReady));
