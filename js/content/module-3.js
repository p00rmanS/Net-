/**
 * content/module-3.js — Module 3: Ethernet, Cabling, and Physical Infrastructure
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  NetReady.LESSONS['3-1'] = {
    id: '3-1',
    moduleId: 3,
    slug: 'ethernet-standards-and-mac',
    title: 'Ethernet Standards, Frames, and MAC Addresses',
    estMinutes: 12,
    outcomes: [
      'Explain what an Ethernet standard number (like 1000BASE-T) actually tells you.',
      'Describe the structure and purpose of a MAC address.',
      'Explain how a switch uses MAC addresses to build its forwarding table.',
    ],
    whyItMatters:
      'Every wired LAN you will ever touch — home, office, data center — runs on Ethernet. Reading an Ethernet standard name on sight tells you the speed, the medium, and the distance limit in one glance.',
    simpleEnglish:
      'Ethernet is the dominant standard for wired local area networking, defined by IEEE 802.3. Ethernet standard names follow a pattern: speed, signaling type, and medium (e.g., 1000BASE-T means 1000 Mbps, baseband signaling, over twisted-pair copper). Every Ethernet network interface has a unique 48-bit MAC (Media Access Control) address burned in at the factory, used to identify devices at Layer 2.',
    taglish:
      'Ang Ethernet ang pinaka-karaniwang paraan ng pag-conenct ng mga device sa isang wired LAN — halos lahat ng opisina o bahay gumagamit nito. Yung pangalan ng standard, tulad ng "1000BASE-T," ay parang code na nagsasabi sa\'yo ng bilis (1000 Mbps), uri ng signal (baseband), at klase ng kable (T = twisted-pair copper). Ang MAC address naman parang "serial number" ng network card mo — unique siya, naka-burn na mula sa factory, at ginagamit ng switch para malaman kung saang port dapat ipadala ang frame.',
    analogy: {
      title: 'Pangalan sa ID card, hindi address ng bahay',
      text:
        'Isipin mo ang MAC address parang pangalan mo sa school ID — permanente ito sa\'yo saan ka man pumunta (hindi katulad ng IP address, na parang current address mo na pwedeng magbago). Kapag may kailangan na dumaan sa loob ng parehong building (LAN), ang MAC address ang ginagamit para malaman kung sino talaga ang tatanggap, katulad ng paggamit ng school ID sa loob mismo ng campus.',
    },
    howItWorks: [
      'IEEE 802.3 defines Ethernet standards; naming convention is [speed][signaling][medium], e.g., 10GBASE-SR = 10 Gbps, baseband, short-range fiber.',
      'A MAC address is 48 bits, written as six hex pairs (e.g., 00:1A:2B:3C:4D:5E); the first half identifies the manufacturer (OUI), the second half is unique to the device.',
      'When a switch receives a frame, it reads the source MAC address and records which port it arrived on in its MAC address table.',
      'For an outgoing frame, the switch checks the destination MAC against its table: if known, it forwards out only that port; if unknown, it floods the frame out every port except the one it arrived on.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="MAC address structure showing 6 hex byte pairs, first 3 as OUI vendor code and last 3 as unique device identifier">
        <table class="lesson-table binary-octet">
          <thead><tr><th colspan="3">OUI (Vendor)</th><th colspan="3">Device-Unique</th></tr></thead>
          <tbody><tr><td>00</td><td>1A</td><td>2B</td><td>3C</td><td>4D</td><td>5E</td></tr></tbody>
        </table>
        <p class="diagram-caption">A 48-bit MAC address: 3 bytes identify the manufacturer, 3 bytes are unique to the device.</p>
      </div>`,
    },
    realWorldExample:
      'When you plug a new laptop into an office switch, the switch immediately learns the laptop\'s MAC address on that port — you can see this reflected in the output of a command like `show mac address-table` on a Cisco switch.',
    proTips: [
      'A quick way to decode an Ethernet standard name: the number before BASE is speed in Mbps (or a prefix like 10G for Gbps), and the letters after BASE hint at the medium (T = twisted pair, SR/LR = fiber short/long range).',
      'MAC address tables are not permanent — switches age out entries after a period of inactivity (commonly 5 minutes) to keep the table current.',
    ],
    examAlert:
      'Do not confuse MAC address (Layer 2, physical/burned-in, used within a LAN) with IP address (Layer 3, logical/assignable, used across networks) — this distinction is tested constantly and is the foundation for later routing/switching topics.',
    beginnerMistakes: [
      'Assuming MAC addresses can be used to route traffic across the internet (they cannot — they are only meaningful within a single Layer 2 segment).',
      'Thinking a MAC address can never change — in practice, many operating systems allow MAC address spoofing/randomization, even though the hardware-assigned one is fixed.',
      'Forgetting that a switch floods frames to an unknown destination instead of silently dropping them.',
    ],
    keyTerms: [
      { term: 'IEEE 802.3', def: 'The standards family that defines Ethernet.' },
      { term: 'MAC address', def: 'A 48-bit address burned into a network interface, used for Layer 2 delivery within a local segment.' },
      { term: 'OUI (Organizationally Unique Identifier)', def: 'The first 3 bytes of a MAC address, identifying the manufacturer.' },
      { term: 'MAC address table', def: 'A switch\'s record of which MAC addresses have been seen on which ports, used to make forwarding decisions.' },
      { term: 'Flooding', def: 'Sending a frame out every port except the one it arrived on, done when the destination MAC is not yet known.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What does the "T" in an Ethernet standard like 1000BASE-T typically indicate?',
        options: ['Tunneling protocol', 'Twisted-pair copper medium', 'Token ring topology', 'Transceiver type only'],
        correct: 1,
        explanation: 'In Ethernet naming, "T" indicates twisted-pair copper cabling as the transmission medium.',
      },
      {
        prompt: 'How many bits make up a MAC address?',
        options: ['24', '32', '48', '64'],
        correct: 2,
        explanation: 'A MAC address is 48 bits, typically written as six hexadecimal pairs.',
      },
      {
        prompt: 'What does a switch do when it receives a frame for a destination MAC address it has never seen before?',
        options: [
          'Drops the frame silently.',
          'Floods the frame out every port except the one it arrived on.',
          'Sends the frame back to the source only.',
          'Converts the frame to an IP packet.',
        ],
        correct: 1,
        explanation: 'Unknown-destination frames are flooded to all ports (except the source port) so the correct recipient can receive it.',
      },
    ],
    miniScenario: {
      prompt: 'A coworker asks, "Bakit hindi pwede gamitin ang MAC address para mag-browse sa internet nang direkta?"',
      task: 'Explain in one or two Taglish sentences why MAC addresses only work within a local segment and not across the internet.',
    },
    recap:
      'Ethernet (IEEE 802.3) is the dominant wired LAN standard; its naming pattern encodes speed, signaling, and medium. Every NIC has a unique 48-bit MAC address, which switches use to build a MAC address table and make Layer 2 forwarding decisions.',
    classroomAnswer:
      '"Ethernet standard names tell you speed and medium at a glance, and switches use MAC addresses — permanent, burned-in identifiers — to learn exactly which port leads to which device."',
  };

  NetReady.LESSONS['3-2'] = {
    id: '3-2',
    moduleId: 3,
    slug: 'copper-cabling-and-cat-ratings',
    title: 'Copper Cabling: UTP, STP, and Cat Ratings',
    estMinutes: 11,
    outcomes: [
      'Differentiate UTP from STP and explain when shielding matters.',
      'Match common Cat ratings (5e, 6, 6a, 8) to their maximum speed and distance.',
      'Identify the standard maximum length for a copper Ethernet run.',
    ],
    whyItMatters:
      'Picking the wrong cable category is one of the most common real-world causes of "the network is slow" — a Cat 5e run cannot deliver 10 Gbps no matter how well it is installed.',
    simpleEnglish:
      'Twisted-pair copper cable comes in two main forms: UTP (Unshielded Twisted Pair, the common default) and STP (Shielded Twisted Pair, which adds foil/braid shielding against electromagnetic interference). Cable is rated by category (Cat): higher numbers generally support higher speeds and/or longer distances. The standard maximum length for a single copper Ethernet run is 100 meters.',
    taglish:
      'Ang UTP ang pinaka-karaniwang klase ng kable — walang extra shielding, mas mura, sapat na para sa karamihan ng opisina o bahay. Ang STP naman may extra na proteksyon (foil o braid) laban sa electromagnetic interference — kailangan ito kapag malapit ang kable sa mga makinang gumagawa ng interference, tulad ng malalaking motor o fluorescent lights. Ang "Cat" number (halimbawa Cat 6, Cat 6a) parang "grade" ng kable — mas mataas na number, mas mabilis at mas malayo ang kayang i-carry nang maayos.',
    analogy: {
      title: 'Kalsada na may iba\'t-ibang klase',
      text:
        'Isipin mo ang cable categories parang klase ng kalsada — may national highway (Cat 8, sobrang bilis pero para sa maiksing distansya lang sa data center) hanggang sa ordinaryong barangay road (Cat 5e, sapat na para sa pangkaraniwang gamit). Ang STP parang kalsadang may concrete barrier — dagdag proteksyon laban sa "ingay" ng kapaligiran, pero mas mahal at mas mahirap i-install.',
    },
    howItWorks: [
      'UTP relies on the twisting of wire pairs itself to cancel out interference; no additional shielding layer.',
      'STP adds a metallic shield (foil or braided) around the pairs or the whole cable, requiring proper grounding to be effective.',
      'Cat 5e supports up to 1 Gbps at 100 meters. Cat 6 supports 1 Gbps at 100m, or 10 Gbps at a reduced distance (up to ~55m). Cat 6a supports a full 10 Gbps at 100m. Cat 8 supports up to 25/40 Gbps but only over very short distances (~30m), designed for data center use.',
      'Regardless of category, the standard maximum length for a single copper Ethernet segment (per TIA/EIA-568) is 100 meters, including patch cords.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Category</th><th>Max Speed</th><th>Typical Max Distance</th></tr></thead>
        <tbody>
          <tr><td>Cat 5e</td><td>1 Gbps</td><td>100 m</td></tr>
          <tr><td>Cat 6</td><td>1 Gbps (10 Gbps short-run)</td><td>100 m (55 m at 10 Gbps)</td></tr>
          <tr><td>Cat 6a</td><td>10 Gbps</td><td>100 m</td></tr>
          <tr><td>Cat 8</td><td>25 / 40 Gbps</td><td>~30 m</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A data center connecting two adjacent server racks might use Cat 8 for maximum short-distance throughput, while a general office deploying gigabit connections to desks typically uses Cat 6, which offers a comfortable margin over 1 Gbps requirements.',
    proTips: [
      'When in doubt about future-proofing a new office install, Cat 6a is usually the sweet spot — full 10 Gbps at full 100m distance.',
      'Always check for a "plenum-rated" jacket requirement when running cable through air-handling spaces (ceilings/walls) — this is a fire-code safety detail, not just a performance one.',
    ],
    examAlert:
      'The exam commonly tests the 100-meter maximum copper run length as a hard fact — memorize it exactly, and remember it applies regardless of category.',
    beginnerMistakes: [
      'Assuming a higher Cat rating cable will automatically deliver higher speed even if the switches/NICs on both ends do not support it — the entire path must support the same speed.',
      'Forgetting that STP requires proper grounding to actually work; ungrounded shielding can make interference worse, not better.',
      'Confusing "Cat" (cable category) with "Class" (a related but distinct performance rating used in some regions/standards).',
    ],
    keyTerms: [
      { term: 'UTP', def: 'Unshielded Twisted Pair — the standard copper cable type relying on wire twisting alone to reduce interference.' },
      { term: 'STP', def: 'Shielded Twisted Pair — copper cable with added metallic shielding against electromagnetic interference. (Careful: "STP" also means Spanning Tree Protocol in Module 7 — same acronym, completely different topic, decide from context.)' },
      { term: 'Cat rating', def: 'A category number (e.g., Cat 6, Cat 6a) indicating a copper cable\'s maximum supported speed and distance.' },
      { term: 'EMI (Electromagnetic Interference)', def: 'Unwanted electrical noise from nearby equipment that can degrade signal quality on copper cabling.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the standard maximum length for a single copper Ethernet segment?',
        options: ['50 meters', '100 meters', '150 meters', '250 meters'],
        correct: 1,
        explanation: '100 meters is the standard maximum length for a copper Ethernet run, including patch cords, regardless of category.',
      },
      {
        prompt: 'Which cable type is best suited for an environment with heavy electromagnetic interference, such as near industrial motors?',
        options: ['UTP', 'STP', 'Coaxial only', 'Any cable works identically'],
        correct: 1,
        explanation: 'STP adds shielding specifically designed to reduce the impact of electromagnetic interference.',
      },
      {
        prompt: 'Which cable category can deliver a full 10 Gbps across the entire standard 100-meter distance?',
        options: ['Cat 5e', 'Cat 6', 'Cat 6a', 'None of these can reach 10 Gbps at 100m'],
        correct: 2,
        explanation: 'Cat 6a is rated for a full 10 Gbps at the full 100-meter distance, unlike Cat 6 which needs a shorter run for that speed.',
      },
    ],
    miniScenario: {
      prompt: 'A small office wants gigabit speeds now but wants to future-proof for a possible 10 Gbps upgrade in 3-5 years.',
      task: 'Recommend a cable category for this new installation and justify the choice in one sentence.',
    },
    recap:
      'UTP is standard; STP adds shielding for high-interference environments. Cat ratings (5e, 6, 6a, 8) determine maximum speed and distance, but every copper Ethernet run is capped at 100 meters regardless of category.',
    classroomAnswer:
      '"I\'d check the Cat rating for the speed I actually need, remember the 100-meter cap no matter what, and only reach for STP if there\'s real interference to shield against."',
  };

  NetReady.LESSONS['3-3'] = {
    id: '3-3',
    moduleId: 3,
    slug: 'fiber-optic-cabling',
    title: 'Fiber Optic Cabling: Single-Mode, Multimode, and Connectors',
    estMinutes: 12,
    outcomes: [
      'Differentiate single-mode from multimode fiber by distance and light source.',
      'Identify common fiber connector types by appearance.',
      'Explain why fiber is immune to electromagnetic interference.',
    ],
    whyItMatters:
      'Fiber is the backbone of long-distance and high-speed networking — from campus backbones to undersea internet cables. Knowing which fiber type fits which use case avoids expensive mismatches.',
    simpleEnglish:
      'Fiber optic cable transmits data as pulses of light instead of electrical signals, making it immune to electromagnetic interference and capable of much longer distances than copper. Single-mode fiber uses a narrow core and a laser light source, supporting very long distances (kilometers). Multimode fiber uses a wider core and an LED or VCSEL light source, suited for shorter distances (typically under 550m) at lower cost.',
    taglish:
      'Ang fiber optic, gumagamit ng liwanag (light) sa halip na electrical signal — kaya hindi ito apektado ng electromagnetic interference, at kaya nitong maglakbay nang mas malayo kaysa sa copper. Ang single-mode fiber ay may makitid na core, gumagamit ng laser, at kayang umabot ng kilometro-kilometrong distansya — ginagamit ito sa mga long-haul na koneksyon tulad ng pagitan ng mga siyudad. Ang multimode fiber naman mas malapad ang core, gumagamit ng LED, mas mura, pero mas maikli lang ang layo (karaniwang wala pang 550 metro) — sapat na para sa loob ng isang building o campus.',
    analogy: {
      title: 'Sinag ng ilaw vs. maraming bouncing na sinag',
      text:
        'Isipin mo ang single-mode fiber parang isang laser pointer na diretso ang biyahe ng liwanag papunta sa malayong pader — walang bounce-bounce, kaya malinaw pa rin ang signal kahit malayo. Ang multimode naman parang flashlight na ang liwanag nito ay bumabanggaan (bounces) sa loob ng malapad na tubo bago makarating sa dulo — okay lang sa maikling distansya, pero unti-unting nawawala ang linaw ng signal kapag lumalayo.',
    },
    howItWorks: [
      'Light is transmitted through a glass or plastic core, reflecting internally along the length of the fiber.',
      'Single-mode fiber (core ~9 microns) allows only one path (mode) of light, minimizing signal spreading — supports distances up to tens of kilometers using lasers.',
      'Multimode fiber (core ~50 or 62.5 microns) allows multiple light paths, which spread out over distance (modal dispersion), limiting practical distance to a few hundred meters.',
      'Common connectors: LC (small form factor, most common today), SC (older, square push-pull), ST (older, bayonet-style twist-lock).',
      'A transceiver (like an SFP or SFP+ module) converts electrical signals to light for transmission and back to electrical on receipt.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Type</th><th>Core Size</th><th>Light Source</th><th>Typical Max Distance</th></tr></thead>
        <tbody>
          <tr><td>Single-mode</td><td>~9 microns</td><td>Laser</td><td>Up to 40+ km</td></tr>
          <tr><td>Multimode (OM3/OM4)</td><td>50 microns</td><td>LED / VCSEL</td><td>~300-550 m</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'An ISP running fiber between two cities uses single-mode fiber with laser transceivers; a company connecting two switches within the same data center commonly uses cheaper multimode fiber since the distance is short.',
    proTips: [
      'Yellow cable jacket color conventionally indicates single-mode fiber; orange or aqua conventionally indicates multimode — a fast visual identification trick in the field.',
      'Always match transceiver type to fiber type — a single-mode transceiver on multimode fiber (or vice versa) will not work reliably even if the connector physically fits.',
    ],
    examAlert:
      'Expect direct questions asking you to match "long distance, laser" to single-mode and "shorter distance, LED, cheaper" to multimode — this pairing is tested very literally.',
    beginnerMistakes: [
      'Assuming fiber is always faster than copper regardless of distance — for short runs, both can deliver the same speed; fiber\'s real advantage is distance and interference immunity.',
      'Mixing single-mode and multimode fiber/transceivers on the same link.',
      'Forgetting that fiber connectors must be kept clean — dust or oil on the connector face is a very common real-world cause of fiber link failures.',
    ],
    keyTerms: [
      { term: 'Single-mode fiber', def: 'Fiber with a narrow core carrying one light path, using lasers, suited for long-distance links.' },
      { term: 'Multimode fiber', def: 'Fiber with a wider core carrying multiple light paths, using LEDs/VCSELs, suited for shorter-distance links.' },
      { term: 'Transceiver', def: 'A module (e.g., SFP, SFP+) that converts between electrical and optical signals.' },
      { term: 'LC connector', def: 'A small-form-factor fiber connector, the most common type in modern deployments.' },
      { term: 'Modal dispersion', def: 'The spreading of a light signal over distance caused by multiple light paths in multimode fiber, limiting its usable range.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Which fiber type is best suited for a 20-kilometer link between two office buildings in different cities?',
        options: ['Multimode fiber', 'Single-mode fiber', 'Coaxial cable', 'Cat 6a copper'],
        correct: 1,
        explanation: 'Single-mode fiber, using lasers, supports the long distances required for this kind of inter-city link.',
      },
      {
        prompt: 'Why is fiber optic cable immune to electromagnetic interference?',
        options: [
          'It uses shielded copper wire internally.',
          'It transmits data as light pulses rather than electrical signals.',
          'It is always buried deeper underground than copper.',
          'It uses a higher voltage that overpowers interference.',
        ],
        correct: 1,
        explanation: 'Because fiber carries light, not electrical current, it is naturally unaffected by electromagnetic interference.',
      },
      {
        prompt: 'What is a common real-world cause of fiber link failure that has nothing to do with cable length?',
        options: ['Dust or oil on the connector face', 'Using too high a Cat rating', 'The cable being too thin', 'Excessive twisting of the pairs'],
        correct: 0,
        explanation: 'Dirty or contaminated connector ends are one of the most frequent, easily overlooked causes of fiber link problems.',
      },
    ],
    miniScenario: {
      prompt: 'Two switches sit in racks 15 meters apart within the same data center, and budget is a top concern.',
      task: 'Recommend single-mode or multimode fiber for this link, and explain your reasoning in one sentence.',
    },
    recap:
      'Fiber transmits light instead of electricity, making it immune to EMI. Single-mode fiber (laser, narrow core) suits long distances; multimode fiber (LED, wider core) suits shorter, cheaper links. Common connectors include LC, SC, and ST.',
    classroomAnswer:
      '"For long distance I reach for single-mode and a laser transceiver; for a short, budget-friendly run inside one building, multimode does the job."',
  };

  NetReady.LESSONS['3-4'] = {
    id: '3-4',
    moduleId: 3,
    slug: 'cable-types-and-legacy-media',
    title: 'Cable Wiring Types, Coax, and Legacy Media',
    estMinutes: 10,
    outcomes: [
      'Differentiate straight-through, crossover, rollover, and console cables by use case.',
      'Explain when auto-MDI-X makes crossover cables unnecessary.',
      'Identify coaxial cable\'s modern niche uses.',
    ],
    whyItMatters:
      'Grabbing the wrong cable type is a classic beginner troubleshooting trap — knowing the difference in thirty seconds saves an hour of confused cable-swapping.',
    simpleEnglish:
      'Straight-through cables connect unlike devices (e.g., a PC to a switch) and are the most common cable in use. Crossover cables connect like devices (e.g., switch to switch) by swapping transmit/receive pairs — mostly made unnecessary today by auto-MDI-X, a feature that automatically detects and adjusts. Rollover and console cables are used specifically to connect a computer to a network device\'s console port for direct configuration access, not for carrying network traffic.',
    taglish:
      'Ang straight-through cable ang pinaka-karaniwang gamit — kapag magkaiba ang klase ng device (PC papuntang switch), ito ang gamit mo. Ang crossover cable naman ginagamit dati kapag magkatulad ang klase ng device (switch papuntang switch) — pero ngayon, dahil sa auto-MDI-X feature ng mga modernong device, halos hindi na kailangan mag-alala tungkol dito, kusa na lang inaayos ng device ang sarili niya. Ang rollover/console cable naman iba ang trabaho — hindi ito para sa normal na network traffic, kundi para direktang kumonekta ang laptop mo sa console port ng isang router o switch para i-configure ito mula sa umpisa.',
    analogy: {
      title: 'Adaptors para sa iba\'t-ibang plug',
      text:
        'Isipin mo ang straight-through cable parang normal na extension cord — gumagana lang kapag magkaiba ang klase ng dalawang dulo (parang plug at outlet). Ang crossover parang special adaptor na kailangan mo dati kapag magkatulad ang dalawang dulo (plug-to-plug) — pero ngayon, may mga "smart outlet" na (auto-MDI-X) na kusang umaadjust, kaya hindi mo na kailangan ng special adaptor. Ang console cable naman parang hiwalay na "service door" — hindi ito para sa normal na delivery, kundi para lang sa technician na direktang magse-set up ng makina mula sa loob.',
    },
    howItWorks: [
      'Straight-through: pin 1-to-1, 2-to-2, etc. — connects a device that transmits on one pair to a device that receives on that same pair (e.g., PC to switch).',
      'Crossover: transmit and receive pairs are swapped between the two ends — historically needed to connect two similar devices (e.g., switch to switch, PC to PC) directly.',
      'Auto-MDI-X: a feature built into most modern NICs and switch ports that automatically detects the required pin configuration and adjusts electronically, eliminating the practical need to choose the right cable type.',
      'Rollover cable: pin order is fully reversed end to end, used to connect to a device\'s serial console port for out-of-band management (initial configuration, recovery).',
      'Coaxial cable: a center conductor surrounded by shielding, historically used for Ethernet (now obsolete for that) and still used today for cable internet (DOCSIS) and video/CCTV runs.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Cable Type</th><th>Typical Use</th><th>Still Needed Today?</th></tr></thead>
        <tbody>
          <tr><td>Straight-through</td><td>PC to switch, switch to router</td><td>Yes — the default</td></tr>
          <tr><td>Crossover</td><td>Switch to switch, PC to PC (direct)</td><td>Rarely — auto-MDI-X handles it</td></tr>
          <tr><td>Rollover / Console</td><td>Laptop to a device's console port for CLI config</td><td>Yes — for initial setup/recovery</td></tr>
          <tr><td>Coaxial</td><td>Cable internet (DOCSIS), CCTV</td><td>Yes — in those specific niches</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A network technician setting up a brand-new switch with no existing IP address connects a laptop to its console port with a rollover cable and a terminal program to perform the first configuration before the switch is reachable over the network at all.',
    proTips: [
      'If a link light won\'t come up and you suspect a cable-type mismatch, try the other cable type first before troubleshooting anything more complex — auto-MDI-X makes this rare, but older equipment may lack it.',
      'Console/rollover connections typically use a serial-to-USB adapter today since most modern laptops lack a native serial port.',
    ],
    examAlert:
      'Console/rollover cables are specifically for out-of-band device management, not for carrying network data — a common exam distractor tries to get you to confuse this with a regular network link.',
    beginnerMistakes: [
      'Assuming crossover cables are still commonly required — most modern equipment negotiates this automatically via auto-MDI-X.',
      'Confusing a rollover cable\'s purpose (device configuration access) with a regular network connection.',
      'Forgetting that coaxial is still very much alive in cable internet and CCTV, not fully obsolete.',
    ],
    keyTerms: [
      { term: 'Straight-through cable', def: 'A cable wired pin-for-pin identically at both ends, used to connect unlike devices.' },
      { term: 'Crossover cable', def: 'A cable with transmit/receive pairs swapped at one end, historically used to connect like devices.' },
      { term: 'Auto-MDI-X', def: 'A feature that automatically detects and adjusts pin configuration, removing the need to manually choose straight-through vs. crossover.' },
      { term: 'Rollover / console cable', def: 'A cable with fully reversed pin order, used to connect to a device\'s console port for direct configuration.' },
      { term: 'Coaxial cable', def: 'A cable with a center conductor and surrounding shielding, used today mainly for cable internet and video.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Why is a crossover cable rarely needed with modern network equipment?',
        options: [
          'Crossover cables were never actually necessary.',
          'Auto-MDI-X automatically detects and adjusts the required pin configuration.',
          'Modern switches no longer support Ethernet.',
          'Straight-through cables were discontinued.',
        ],
        correct: 1,
        explanation: 'Auto-MDI-X handles the pin adjustment automatically, making manual cable-type selection mostly unnecessary today.',
      },
      {
        prompt: 'What is a rollover (console) cable primarily used for?',
        options: [
          'Connecting a PC directly to the internet.',
          'Connecting a laptop to a device\'s console port for direct configuration.',
          'Extending the maximum Ethernet distance.',
          'Replacing fiber optic connections.',
        ],
        correct: 1,
        explanation: 'Rollover cables provide out-of-band access to a device\'s console for management, not general network traffic.',
      },
      {
        prompt: 'Which modern technology still commonly relies on coaxial cable?',
        options: ['Fiber-to-the-home internet', 'Cable internet (DOCSIS)', 'Wi-Fi 6', 'Cat 6a Ethernet'],
        correct: 1,
        explanation: 'Cable internet (DOCSIS) still commonly uses coaxial cable, often paired with fiber further upstream.',
      },
    ],
    miniScenario: {
      prompt: 'You need to configure a brand-new, unconfigured switch that has no IP address yet.',
      task: 'Name which cable type you would use to access it initially, and explain why a normal network cable would not work for this specific task.',
    },
    recap:
      'Straight-through cables connect unlike devices and remain the default. Crossover cables (for like devices) are mostly obsolete thanks to auto-MDI-X. Rollover/console cables provide direct device configuration access. Coaxial cable persists today in cable internet and CCTV.',
    classroomAnswer:
      '"For everyday connections I just use straight-through and let auto-MDI-X handle the rest — the only special case is a rollover cable when I need direct console access to configure a device."',
  };

  NetReady.LESSONS['3-5'] = {
    id: '3-5',
    moduleId: 3,
    slug: 'physical-infrastructure',
    title: 'Physical Infrastructure: MDF, IDF, Patch Panels, and Demarc',
    estMinutes: 11,
    outcomes: [
      'Explain the relationship between an MDF and IDFs in a building.',
      'Describe what a patch panel does and why it is used.',
      'Define demarcation point and smart jack.',
    ],
    whyItMatters:
      'Understanding a building\'s physical network layout is essential for real-world troubleshooting, documentation, and any job that requires walking into a server room or telecom closet.',
    simpleEnglish:
      'The MDF (Main Distribution Frame) is the central point where external and internal cabling connects, typically housing the main network equipment. IDFs (Intermediate Distribution Frames) are secondary wiring closets on other floors or areas, connecting back to the MDF. A patch panel is a fixed panel of ports that terminates permanent building cabling, allowing flexible connections via short patch cables instead of directly wiring equipment. The demarcation point ("demarc") is where the ISP\'s responsibility ends and the customer\'s internal wiring begins; a smart jack is an active device sometimes placed at the demarc for monitoring and troubleshooting.',
    taglish:
      'Ang MDF ang "utak" ng buong building — dito nagkakaugnay ang panlabas na koneksyon (mula sa ISP) at ang panloob na network. Ang IDF naman parang "satellite office" sa ibang floor o parte ng building — kumokonekta pabalik sa MDF. Ang patch panel ay parang "switchboard" — dito naka-terminate ang permanenteng kable sa loob ng dingding, tapos gumagamit ka na lang ng maikling patch cable para ikonekta sa aktwal na switch, mas flexible at maayos ang tingnan kaysa direktang pagkabit ng malalaking kable sa equipment. Ang demarcation point ("demarc") ang hangganan — hanggang doon lang ang responsibilidad ng ISP, mula doon pasok na ang panloob na sistema ng company. Ang smart jack ay parang "checkpoint" device na nakalagay sa demarc para sa monitoring at troubleshooting.',
    analogy: {
      title: 'Punong tanggapan at mga sangay',
      text:
        'Isipin mo ang MDF parang punong tanggapan (head office) ng isang kumpanya, at ang mga IDF parang mga sangay (branch offices) sa iba\'t-ibang lugar — lahat ng sangay kumokonekta pabalik sa punong tanggapan. Ang demarcation point naman parang hangganan ng bakod ng bahay mo — hanggang doon lang ang responsibilidad ng kumpanya ng tubig o kuryente; kapag may problema sa loob ng bakod mo, ikaw na ang bahala, hindi na sila.',
    },
    howItWorks: [
      'External ISP cabling enters a building and terminates at the MDF, which typically houses core switches, routers, and the main patch panels.',
      'IDFs on other floors connect back to the MDF via backbone cabling (often fiber for longer runs between floors), extending the network to each area.',
      'Patch panels terminate the permanent, in-wall cabling runs on one side, with labeled ports on the front where short patch cables connect to switches — this separates "structured cabling" from "active equipment," making moves/adds/changes far easier.',
      'The demarcation point marks the legal and practical boundary between ISP-owned infrastructure and customer-owned infrastructure — critical for knowing who to call, and who is responsible, when there is an outage.',
      'A smart jack is an active (powered) device at the demarc that can support remote loopback testing and diagnostics without an ISP technician needing to visit on-site for every issue.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Building network diagram showing the ISP connecting to a demarcation point, then MDF on the main floor, with IDFs on other floors connecting back to the MDF">
        <div class="net-node">ISP</div>
        <div class="net-line">&darr;</div>
        <div class="net-node highlight">Demarcation Point</div>
        <div class="net-line">&darr;</div>
        <div class="net-node">MDF (Main Distribution Frame)</div>
        <div class="net-line">&darr;</div>
        <div class="net-row">
          <div class="net-node">IDF — Floor 2</div>
          <div class="net-node">IDF — Floor 3</div>
          <div class="net-node">IDF — Floor 4</div>
        </div>
      </div>`,
    },
    realWorldExample:
      'When internet service is down, a technician first checks the demarc: if the smart jack shows a healthy signal from the ISP but nothing beyond it, the problem is inside the customer\'s network, not the ISP\'s responsibility.',
    proTips: [
      'Always start physical troubleshooting at the demarc when diagnosing a total outage — it instantly tells you whether to call the ISP or look inward.',
      'Well-labeled patch panels save enormous troubleshooting time; poorly labeled ones are one of the most common real-world documentation failures technicians complain about.',
    ],
    examAlert:
      'Expect scenario questions asking "who is responsible" for a cabling fault based on whether it is before or after the demarcation point — this is a frequent, very literal test of the concept.',
    beginnerMistakes: [
      'Confusing a patch panel (passive, just terminates cabling) with a switch (active, actually forwards traffic).',
      'Assuming every building only has one wiring closet — larger buildings commonly have an MDF plus multiple IDFs.',
      'Not knowing where the demarc is located when a real outage occurs, wasting time before troubleshooting even begins.',
    ],
    keyTerms: [
      { term: 'MDF (Main Distribution Frame)', def: 'The central wiring point of a building where external and internal cabling connects, typically housing core network equipment.' },
      { term: 'IDF (Intermediate Distribution Frame)', def: 'A secondary wiring closet, often per floor, connecting back to the MDF.' },
      { term: 'Patch panel', def: 'A passive panel that terminates permanent building cabling, allowing flexible connections via patch cables.' },
      { term: 'Fiber distribution panel', def: 'A patch panel variant built specifically for fiber optic connections, protecting and organizing fragile fiber terminations the same way a standard patch panel organizes copper.' },
      { term: 'Demarcation point (demarc)', def: 'The point separating ISP responsibility from customer responsibility for cabling and service.' },
      { term: 'Smart jack', def: 'An active device at the demarc supporting remote testing and diagnostics.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the primary purpose of a patch panel?',
        options: [
          'To actively forward network traffic between ports.',
          'To terminate permanent building cabling and allow flexible connections via patch cables.',
          'To boost wireless signal strength.',
          'To assign IP addresses automatically.',
        ],
        correct: 1,
        explanation: 'A patch panel is a passive termination point, not an active forwarding device — that distinction matters on the exam.',
      },
      {
        prompt: 'A customer reports a total internet outage. The smart jack at the demarc shows a healthy signal from the ISP. What does this suggest?',
        options: [
          'The ISP\'s service is down.',
          'The problem is likely inside the customer\'s own network, past the demarc.',
          'The demarc itself is broken.',
          'Nothing can be determined from this information.',
        ],
        correct: 1,
        explanation: 'A healthy signal up to the demarc shifts troubleshooting focus inward, since the ISP\'s responsibility ends there.',
      },
      {
        prompt: 'What is the relationship between an MDF and an IDF?',
        options: [
          'They are unrelated, separate networks.',
          'The IDF is a secondary wiring closet that connects back to the central MDF.',
          'The MDF only exists in single-floor buildings.',
          'An IDF replaces the need for a demarcation point.',
        ],
        correct: 1,
        explanation: 'IDFs extend the network from the central MDF to other floors or areas, connecting back to it via backbone cabling.',
      },
    ],
    miniScenario: {
      prompt: 'A 5-floor office building loses internet only on the 3rd floor, while every other floor works fine.',
      task: 'Name the most likely piece of physical infrastructure to check first, and explain why the demarc is probably not the cause.',
    },
    recap:
      'The MDF is a building\'s central wiring point; IDFs extend connectivity to other floors/areas. Patch panels terminate permanent cabling for flexible connections. The demarcation point separates ISP and customer responsibility, sometimes marked by an active smart jack.',
    classroomAnswer:
      '"I always locate the demarc first during an outage — it tells me immediately whether this is the ISP\'s problem or something inside our own MDF/IDF wiring."',
  };

  NetReady.LESSONS['3-6'] = {
    id: '3-6',
    moduleId: 3,
    slug: 'poe-and-cable-testing',
    title: 'Power over Ethernet and Cable Testing Tools',
    estMinutes: 11,
    outcomes: [
      'Explain what PoE does and name its common standards.',
      'Identify the correct tool for common cabling diagnostic tasks.',
      'Recognize common cable faults from tester results.',
    ],
    whyItMatters:
      'PoE simplifies deploying devices like access points and cameras, and knowing your cable testing tools turns a mystery outage into a five-minute diagnosis.',
    simpleEnglish:
      'Power over Ethernet (PoE) delivers electrical power to devices over the same cable that carries data, eliminating the need for a separate power outlet at the device. Standards include 802.3af (PoE, up to ~15.4W), 802.3at (PoE+, up to ~30W), and 802.3bt (PoE++/UPoE, up to ~60-100W). Common cable testing tools include a cable tester (verifies wiring and continuity), a toner probe (traces a specific cable through a bundle or wall), and a loopback plug (tests a port\'s ability to send and receive).',
    taglish:
      'Ang Power over Ethernet (PoE) ay nagpapadala ng kuryente kasabay ng data gamit ang parehong Ethernet cable — kaya hindi mo na kailangan ng hiwalay na outlet malapit sa device, tulad ng access point o CCTV camera na nasa kisame. May iba\'t-ibang standard depende sa dami ng kailangang kuryente: 802.3af (basic PoE), 802.3at (PoE+, mas malakas), at 802.3bt (PoE++, pinaka-malakas). Para sa cable testing, ang cable tester ang ginagamit para tignan kung tama ang wiring at kung walang putol. Ang toner probe naman ginagamit kapag hindi mo alam kung aling dulo ng maraming kable sa loob ng bundle ang hinahanap mo — parang "metal detector" na sumusunod sa signal. Ang loopback plug naman ginagamit para i-test kung gumagana ang isang port sa pagpapadala at pagtanggap ng signal.',
    analogy: {
      title: 'Extension cord na may built-in internet',
      text:
        'Isipin mo ang PoE parang extension cord na may built-in internet cable din — isang kable lang, dalawang serbisyo (kuryente at data). Ang toner probe naman parang metal detector sa beach — pinapadalhan mo ng "beep" signal ang isang dulo ng kable, tapos hinahanap mo kung saan "sumisigaw" ang parehong kable sa kabilang dulo ng maraming magkakahalong kable.',
    },
    howItWorks: [
      '802.3af (PoE): delivers up to ~15.4W at the source, ~12.95W usable at the device — enough for basic IP phones and access points.',
      '802.3at (PoE+): delivers up to ~30W — supports higher-power devices like pan-tilt-zoom cameras.',
      '802.3bt (PoE++/UPoE): delivers up to ~60-100W depending on type — supports laptops, high-power access points, and other demanding devices.',
      'A cable tester sends signals across each wire pair and reports wiring faults: opens (broken connection), shorts (unintended contact between wires), or miswires (pairs in the wrong position).',
      'A toner probe has two parts: a tone generator connected to one end of a cable, and a probe that detects the tone through the cable\'s insulation — used to physically identify a specific cable among many.',
      'A loopback plug connects a port\'s transmit pins directly to its receive pins, letting diagnostic software confirm the port\'s send/receive circuitry works without needing another device on the other end.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>PoE Standard</th><th>Max Power (source)</th><th>Typical Use</th></tr></thead>
        <tbody>
          <tr><td>802.3af (PoE)</td><td>~15.4 W</td><td>IP phones, basic access points</td></tr>
          <tr><td>802.3at (PoE+)</td><td>~30 W</td><td>PTZ cameras, higher-power APs</td></tr>
          <tr><td>802.3bt (PoE++)</td><td>~60-100 W</td><td>Laptops, high-power APs, thin clients</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'An installer mounting a ceiling-mounted wireless access point uses a single PoE Ethernet cable to provide both its network connection and its power, avoiding a costly and unsightly separate electrical run.',
    proTips: [
      'Always check a device\'s power draw against the PoE standard your switch supports before deployment — underpowering a device is a common, easily preventable real-world mistake.',
      'A toner probe is the fastest way to identify one specific cable among dozens in an unlabeled patch panel — much faster than tracing by hand.',
    ],
    examAlert:
      'The exam expects you to match the right tool to the right diagnostic task — "identify a specific unlabeled cable" almost always points to a toner probe, not a cable tester.',
    beginnerMistakes: [
      'Confusing a cable tester (checks wiring integrity) with a toner probe (physically locates a specific cable) — they solve different problems.',
      'Assuming any PoE switch can power any PoE device regardless of standard — power budgets and standards must be compatible.',
      'Forgetting that a loopback plug tests a port\'s own circuitry, not the cabling or the far-end device.',
    ],
    keyTerms: [
      { term: 'PoE (Power over Ethernet)', def: 'Technology that delivers electrical power over the same cable used for network data.' },
      { term: '802.3af / 802.3at / 802.3bt', def: 'IEEE standards defining increasing power levels for PoE (PoE, PoE+, PoE++).' },
      { term: 'Cable tester', def: 'A tool that verifies wiring, continuity, and pinout correctness of a cable.' },
      { term: 'Toner probe', def: 'A two-part tool used to physically trace and identify a specific cable within a bundle or wall.' },
      { term: 'Loopback plug', def: 'A device that connects a port\'s transmit and receive pins together to test its send/receive functionality.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the primary purpose of Power over Ethernet (PoE)?',
        options: [
          'To increase maximum cable distance.',
          'To deliver electrical power to a device over the same cable used for data.',
          'To convert copper signals to fiber.',
          'To encrypt network traffic.',
        ],
        correct: 1,
        explanation: 'PoE\'s core purpose is delivering power alongside data over a single Ethernet cable.',
      },
      {
        prompt: 'Which tool would you use to physically locate one specific unlabeled cable among dozens in a bundle?',
        options: ['Cable tester', 'Toner probe', 'Loopback plug', 'Punch-down tool'],
        correct: 1,
        explanation: 'A toner probe is specifically designed to trace and identify individual cables.',
      },
      {
        prompt: 'What does a loopback plug primarily test?',
        options: [
          'The wiring integrity of a long cable run.',
          'A port\'s own ability to send and receive signals.',
          'The distance between two buildings.',
          'The PoE power budget of a switch.',
        ],
        correct: 1,
        explanation: 'A loopback plug connects transmit to receive pins directly, isolating a test of the port\'s own circuitry.',
      },
    ],
    miniScenario: {
      prompt: 'You need to deploy a high-power PTZ security camera that requires more power than basic 802.3af can provide.',
      task: 'Name the PoE standard you would need at minimum, and explain why checking this before installation matters.',
    },
    recap:
      'PoE delivers power and data over one cable, with standards (802.3af/at/bt) supporting increasing power levels. Cable testers check wiring integrity, toner probes physically locate specific cables, and loopback plugs test a port\'s own send/receive circuitry.',
    classroomAnswer:
      '"Before I mount any PoE device, I check its power draw against the switch\'s PoE standard — and when I need to find one cable in a messy bundle, the toner probe is the tool for that, not the cable tester."',
  };
  NetReady.LESSONS['3-7'] = {
    id: '3-7',
    moduleId: 3,
    slug: 'transceivers-dac-twinaxial-and-fibre-channel',
    title: 'Transceivers, DAC/Twinaxial Cable, and Fibre Channel',
    estMinutes: 13,
    outcomes: [
      'Differentiate SFP, SFP+, and QSFP transceiver form factors by speed and lane count.',
      'Explain what direct attach copper (DAC) and twinaxial cable are, and when to use them over fiber.',
      'Distinguish a transceiver protocol (Ethernet vs. Fibre Channel) from its physical form factor.',
    ],
    whyItMatters:
      'Buying the wrong optic or cable is one of the most expensive and most common mistakes in a data center — a mismatched transceiver simply will not link, and the exam tests this exact form-factor-versus-protocol distinction.',
    simpleEnglish:
      'A transceiver is the small module that converts electrical signals into light (for fiber) or passes them along (for copper) at a switch or server port. Its form factor is its physical shape and how many lanes it carries: SFP (Small Form-factor Pluggable) is a single-lane module, SFP+ is an enhanced single-lane version commonly used for 10 Gbps, and QSFP (Quad Small Form-factor Pluggable) carries four lanes in one module for higher speeds such as 40 or 100 Gbps. Separately, a transceiver\'s protocol defines what it carries: Ethernet for general LAN and data traffic, or Fibre Channel (FC) for storage area networks, where storage traffic has strict requirements for reliability. Direct attach copper (DAC) is a short-distance copper cable with transceivers permanently attached at both ends, built using twinaxial cable — two inner conductors surrounded by shielding — which is cheap and low-latency for links typically only a few meters long. Twinaxial is a construction, not a speed; coaxial cable, by contrast, has a single center conductor and is a different technology used mainly for cable television and older Ethernet.',
    taglish:
      'Ang transceiver ay maliit na module na nagko-convert ng signal sa ilaw (para sa fiber) o nagpapasa lang ng signal (para sa copper) sa port ng switch o server. Ang form factor ay ang pisikal na hugis at kung ilang lane ang dala nito: ang SFP ay single-lane, ang SFP+ ay pinahusay na single-lane na karaniwang para sa 10 Gbps, at ang QSFP (Quad SFP) ay apat na lane sa iisang module para sa mas mataas na bilis tulad ng 40 o 100 Gbps. Hiwalay dito ang protocol ng transceiver, na nagsasabi kung anong klaseng data ang dala nito: Ethernet para sa karaniwang LAN, o Fibre Channel (FC) para sa storage area networks, kung saan mahigpit ang pangangailangan sa reliability ng storage traffic. Ang DAC (direct attach copper) ay maikling copper cable na may transceiver na permanenteng nakakabit sa magkabilang dulo, gawa sa twinaxial cable — dalawang inner conductor na nakabalot sa shielding — mura at mabilis para sa mga link na ilang metro lang ang haba. Ang twinaxial ay isang construction, hindi bilis; ang coaxial naman ay may iisang center conductor at ibang teknolohiya, karaniwang ginagamit para sa cable TV at lumang Ethernet.',
    analogy: {
      title: 'Adapter ng kuryente: iisang plug na magkakaiba ang laki, at iisang sasakyan na magkakaiba ang kargamento',
      text:
        'Isipin mo ang transceiver parang adapter na nakasaksak sa port — ang hugis at laki nito ay ang form factor, kung paano ito kumakasya sa butas. Ang SFP ay parang isang adapter na may isang daluyan ng kuryente; ang QSFP ay parang multi-outlet na may apat na daluyan nang sabay-sabay, kaya mas maraming dumadaloy na enerhiya (bilis). Pero hiwalay pa rin ang tanong kung ANONG klase ng kuryente ang dumadaan — iyon ang protocol. Ang Ethernet ay parang karaniwang kuryente sa bahay para sa lahat ng gamit; ang Fibre Channel ay parang espesyal na linya na nakalaan lang para sa mga makinang pang-industriya ng storage. Ang DAC cable naman ay parang extension cord na permanenteng may plug sa magkabilang dulo — mura at maayos kapag maikli ang distansya lang, pero hindi ito ginawa para sa mahabang layo tulad ng fiber.',
    },
    howItWorks: [
      'SFP: single-lane transceiver, commonly used for 1 Gbps Ethernet; SFP+: enhanced single-lane form factor, commonly used for 10 Gbps Ethernet.',
      'QSFP: four-lane transceiver form factor used for higher aggregate speeds (for example QSFP+ at 40 Gbps or QSFP28 at 100 Gbps).',
      'Transceiver protocol is separate from form factor: the same physical SFP+ slot can carry Ethernet or Fibre Channel, depending on the module and the device.',
      'Direct attach copper (DAC) uses twinaxial cable with the transceivers pre-attached at both ends; it is inexpensive and low-latency, but only practical over short distances (typically a few meters, commonly up to around 7 m for passive copper).',
      'Twinaxial cable is a construction with two inner conductors and shielding, used inside DAC assemblies; coaxial cable has a single center conductor and is a different design entirely.',
      'For longer runs and for higher density or better distance, fiber optic transceivers paired with fiber cabling are used instead of copper DAC.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Module</th><th>Typical Use</th><th>Lanes / Speed (common)</th></tr></thead>
        <tbody>
          <tr><td>SFP</td><td>Gigabit Ethernet ports</td><td>1 lane, 1 Gbps</td></tr>
          <tr><td>SFP+</td><td>10 Gbps Ethernet / fiber or DAC</td><td>1 lane, 10 Gbps</td></tr>
          <tr><td>QSFP+ / QSFP28</td><td>High-speed uplinks, data center</td><td>4 lanes, 40 / 100 Gbps</td></tr>
          <tr><td>DAC (twinaxial)</td><td>Short top-of-rack links within a rack/row</td><td>Copper, short distance only</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A data center technician connects two switches in the same rack with a short SFP+ DAC cable instead of two fiber transceivers and a fiber patch cord — the copper DAC costs less and adds almost no latency, and the distance is short enough that copper is perfectly suitable.',
    proTips: [
      'Form factor (SFP vs. QSFP) tells you the physical shape and lane count; protocol (Ethernet vs. Fibre Channel) tells you what the traffic is. Keep those two questions separate when reading an exam scenario.',
      'If a question says "short distance, same rack, lowest cost," think DAC. If it says "long distance" or "high density over a long run," think fiber transceivers.',
    ],
    examAlert:
      'Expect a scenario asking which transceiver or cable to buy for a specific speed, distance, or storage-versus-LAN purpose — the exam often hides the key clue in the words "storage" (Fibre Channel) or "short run in the same rack" (DAC).',
    beginnerMistakes: [
      'Assuming a QSFP and an SFP+ are interchangeable because both "fit" a similar-looking slot — the form factor and lane count must match the port.',
      'Confusing twinaxial with coaxial — both are types of shielded cable, but twinaxial has two inner conductors and is used in DAC, while coaxial has one.',
      'Treating DAC as a long-distance solution — passive copper DAC is practical only over short runs, and fiber takes over beyond that.',
    ],
    keyTerms: [
      { term: 'SFP / SFP+', def: 'Small Form-factor Pluggable (1 Gbps typical) and its enhanced SFP+ version (10 Gbps typical) — single-lane transceiver form factors.' },
      { term: 'QSFP', def: 'Quad Small Form-factor Pluggable — a four-lane transceiver form factor for higher-speed links such as 40 or 100 Gbps.' },
      { term: 'Form factor vs. protocol', def: 'Form factor is the physical shape and lane count of a transceiver; protocol is the traffic type it carries, such as Ethernet or Fibre Channel.' },
      { term: 'Fibre Channel (FC)', def: 'A protocol designed for storage area networks, prioritizing reliable, lossless delivery of storage traffic.' },
      { term: 'DAC (direct attach copper)', def: 'A short copper cable with transceivers permanently attached at both ends, used for low-cost, low-latency links over short distances.' },
      { term: 'Twinaxial cable', def: 'Shielded copper cable with two inner conductors, used in DAC assemblies — distinct from coaxial cable, which has a single center conductor.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Which transceiver form factor carries four lanes in a single module, typically used for 40 or 100 Gbps links?',
        options: ['SFP', 'SFP+', 'QSFP', 'RJ45'],
        correct: 2,
        explanation: 'QSFP (Quad Small Form-factor Pluggable) carries four lanes in one module, which is how it reaches higher aggregate speeds.',
      },
      {
        prompt: 'A storage team needs a link carrying block-level storage traffic between a server and a SAN. Which transceiver protocol is designed for this purpose?',
        options: ['Ethernet', 'Fibre Channel', 'Twinaxial', 'Coaxial'],
        correct: 1,
        explanation: 'Fibre Channel is a storage-networking protocol built around reliable, lossless delivery of storage traffic.',
      },
      {
        prompt: 'Two switches sit in the same rack, about 2 meters apart, and the team wants the lowest-cost, lowest-latency link. What is the best choice?',
        options: ['Long-distance single-mode fiber', 'DAC (direct attach copper) with twinaxial construction', 'Coaxial cable with a BNC connector', 'A wireless point-to-point bridge'],
        correct: 1,
        explanation: 'Short-distance DAC with twinaxial cable is inexpensive and low-latency, exactly suited to a two-meter link in the same rack.',
      },
    ],
    miniScenario: {
      prompt: 'A data center is adding a new 100 Gbps uplink between two core switches in different rows, about 30 meters apart, and it also needs a separate dedicated link between a server and a SAN.',
      task: 'Choose the transceiver form factor and cabling for the 100 Gbps uplink, and name the protocol the SAN link must use.',
    },
    recap:
      'Form factor (SFP, SFP+, QSFP) describes the physical shape and lane count; protocol (Ethernet, Fibre Channel) describes what traffic it carries. DAC uses twinaxial copper with pre-attached transceivers for short, low-cost links; twinaxial and coaxial are different constructions.',
    classroomAnswer:
      '"Form factor answers how it plugs in, protocol answers what it carries — and for short runs in the same rack, DAC is usually the smart, cheap answer."',
  };

  NetReady.LESSONS['3-8'] = NetReady.lesson(3, {
    id: '3-8',
    slug: 'cable-termination-connectors-and-tools',
    title: 'Cable Termination, Connectors, and Installer Tools: T568A/B, RJ-45, and More',
    minutes: 14,
    outcomes: [
      `Recall the T568A and T568B pin orders and when each straight-through or crossover cable uses them.`,
      `Match connector types (RJ11, RJ45, F-type, BNC, fiber connectors) to their cable and use.`,
      `Name the right tool for crimping, punching down, tracing, and testing a cable.`,
    ],
    why: `Hands-on cabling questions ask you to pick a connector or a tool from a short description. They are easy points when you know the pairs, and costly when you guess.`,
    simple: `Twisted-pair Ethernet cable has eight wires in four pairs. Two standards define the order the wires are placed into an RJ-45 plug: T568A and T568B. A straight-through cable uses the SAME standard on both ends (usually T568B) and connects different device types, such as a PC to a switch. A crossover cable uses T568A on one end and T568B on the other and links similar devices; modern auto-MDI-X ports make it mostly unnecessary. RJ-11 is the smaller 4/6-pin plug for telephone and DSL lines; RJ-45 is the 8-pin Ethernet plug. F-type connectors thread onto coaxial cable (cable TV, cable modems) and BNC twist-locks onto older coax. Tools: a crimper attaches plugs, a punchdown tool seats wires into patch panels and keystone jacks, a tone generator and probe trace a cable through walls, and a cable tester or wire-map tester shows whether each wire is connected correctly.`,
    taglish: `Ang Ethernet cable ay may walong wire sa apat na pares. May dalawang standard sa pagkakasunod-sunod sa RJ-45: T568A at T568B. Ang straight-through ay pareho ang standard sa magkabilang dulo (karaniwan T568B) — para sa magkaibang device gaya ng PC papuntang switch. Ang crossover ay T568A sa isang dulo at T568B sa kabila — para sa magkatulad na device; ngayon halos hindi na kailangan dahil sa auto-MDI-X. Ang RJ-11 ay mas maliit na plug para sa telepono at DSL; ang RJ-45 ay para sa Ethernet. Ang F-type ay turnilyo para sa coax ng cable TV; ang BNC ay twist-lock sa lumang coax. Mga gamit: crimper (maglagay ng plug), punchdown tool (isiksik ang wire sa patch panel), tone generator at probe (hanapin ang cable sa dingding), at cable tester o wire-map tester (tingnan kung tama ang bawat wire).`,
    analogy: {
      title: 'Kulay-kulay na sulat sa sobre',
      text: `Isipin na bawat wire ay may kulay at may sariling "lane" sa plug. Kung pareho ang pagkakasunod sa dalawang dulo, tuwid ang daan (straight-through). Kung ang transmit lane ng isang dulo ay dapat pumunta sa receive lane ng kabila, may tawiran (crossover). Ang tester ay inspektor na sumusuri kung nasa tamang lane ang bawat wire.`,
    },
    steps: [
      `T568B pin order (pins 1 to 8): white/orange, orange, white/green, blue, white/blue, green, white/brown, brown. T568A swaps the orange and green pairs: white/green, green, white/orange, blue, white/blue, orange, white/brown, brown.`,
      `Straight-through: T568B to T568B (or A to A). Use for PC to switch, switch to router, and most connections. Crossover: T568A to T568B. Historically for switch-to-switch or PC-to-PC; auto-MDI-X now swaps the pairs electronically.`,
      `Rollover (console) cable: reverses all eight pins and connects a laptop's serial port to a device's console port. It is not used for network traffic.`,
      `Gigabit and faster Ethernet use all four pairs; 10/100 Mbps use only pins 1, 2, 3, and 6. A cable with a bad pair may still link at 100 Mbps but fail at 1 Gbps.`,
      `Connectors: RJ-45 (8P8C, Ethernet), RJ-11 (6P2C/6P4C, telephone, DSL), F-type (coax, threaded, cable TV and broadband), BNC (coax, bayonet twist-lock, older networks and video), fiber connectors SC (push-pull square), LC (small form factor), ST (bayonet twist), and MPO/MTP (multi-fiber, high-density).`,
      `Termination points: a patch panel and keystone jack use a punchdown tool and 110-style blocks; the cable to the end device ends in a crimped RJ-45 plug. Keep the twists intact to within about 0.5 inch of the termination to limit crosstalk.`,
      `Cable tools: crimper (attaches RJ-45/RJ-11), cable stripper, punchdown tool (110 or 66 blocks), tone generator and probe (trace a cable), cable tester (continuity), wire-map tester (shows opens, shorts, crossed or split pairs), cable certifier (verifies the cable meets Cat 5e/6/6a performance), loopback adapter (plugs into a port to test the port or NIC), multimeter (voltage and continuity), OTDR and visual fault locator for fiber.`,
    ],
    table: {
      label: 'Table of cable tools and what each one does',
      head: ['Tool', 'Use'],
      rows: [
        ['Crimper', 'Attach RJ-45 or RJ-11 plugs to a cable'],
        ['Punchdown tool', 'Seat wires into patch panels and keystone jacks'],
        ['Tone generator and probe', 'Trace and identify a cable run'],
        ['Cable tester / wire-map tester', 'Check continuity, opens, shorts, split or crossed pairs'],
        ['Cable certifier', 'Prove the link meets a performance category'],
        ['Loopback adapter', 'Test a port or NIC'],
        ['Multimeter', 'Measure voltage and continuity'],
        ['OTDR / visual fault locator', 'Find breaks and loss on fiber'],
      ],
      caption: 'Match the tool to the job; the exam describes the job.',
    },
    example: `A new office reports that three desks link at only 100 Mbps. The installer's wire-map tester reveals a split pair on all three drops: the crimper was used with a mixed color order. Re-terminating with T568B on both ends restores gigabit speed.`,
    tips: [
      `Pick one standard (T568B is most common in the US) and use it everywhere so cables never need guessing.`,
      `A wire-map tester finds wiring faults; only a certifier proves the cable performs to a category.`,
      `Punchdown tools are for permanent links (panels, jacks); crimpers are for patch cables.`,
    ],
    exam: `Know: straight-through = same standard both ends; crossover = A to B; rollover = console. RJ-45 Ethernet versus RJ-11 phone. Tone generator and probe = tracing. Loopback adapter = testing a port. Wire-map tester = pin-to-pin wiring faults.`,
    mistakes: [
      `Mixing wires from both standards on one end (this creates split pairs).`,
      `Using a rollover cable for network traffic.`,
      `Untwisting too much wire at the termination, increasing crosstalk.`,
    ],
    terms: [
      { term: 'T568A / T568B', def: `Standard wire color orders for RJ-45 termination.` },
      { term: 'Straight-through cable', def: `Cable with the same pin order on both ends.` },
      { term: 'Crossover cable', def: `Cable with transmit and receive pairs swapped between ends.` },
      { term: 'Punchdown tool', def: `Tool that seats and trims wires in a punchdown block or jack.` },
      { term: 'Wire-map tester', def: `Tester that verifies each wire is connected to the correct pin.` },
      { term: 'Loopback adapter', def: `Plug that sends a port's transmit signal back to its receive pins for testing.` },
    ],
    checks: [
      {
        prompt: `Which tool is used to trace a cable through a wall to find its other end?`,
        options: [`Crimper`, `Tone generator and probe`, `Punchdown tool`, `Loopback adapter`],
        correct: 1,
        explanation: `A tone generator sends a signal on the cable and a probe finds it at the other end.`,
      },
      {
        prompt: `A cable has T568A on one end and T568B on the other. What is it?`,
        options: [`Rollover`, `Straight-through`, `Crossover`, `Coaxial`],
        correct: 2,
        explanation: `Different standards on each end swap the transmit and receive pairs, making a crossover cable.`,
      },
      {
        prompt: `Which connector is used for telephone lines and DSL?`,
        options: [`RJ-11`, `RJ-45`, `BNC`, `LC`],
        correct: 0,
        explanation: `RJ-11 is the smaller telephone-style connector.`,
      },
    ],
    mini: {
      prompt: `A patch cable you just made links at 100 Mbps but not at 1 Gbps.`,
      task: `Name the tool you would use first and the likely wiring fault.`,
    },
    recap: `T568A and T568B define wire order; same on both ends is straight-through, A to B is crossover. Know RJ-11 versus RJ-45, F-type, BNC, and fiber connectors, and match crimpers, punchdowns, tone generators, testers, certifiers, loopbacks, and multimeters to their jobs.`,
    classroom: `"Kapag magkaiba ang dulo, crossover. Kapag magkapareho, straight. At kapag hindi mo alam ang problema, wire-map tester muna."`,
  });

  NetReady.LESSONS['3-9'] = NetReady.lesson(3, {
    id: '3-9',
    slug: 'racks-airflow-and-cable-management',
    title: 'Racks, Airflow, and Cable Management: Planning a Network Room',
    minutes: 12,
    outcomes: [
      `Explain rack units (U) and how to size a rack.`,
      `Describe hot aisle / cold aisle layout and front-to-back airflow.`,
      `List good cable management and equipment room practices, including labeling and physical security.`,
    ],
    why: `Physical installation questions test practical judgment: where equipment goes, how it stays cool, and how it is kept secure and maintainable.`,
    simple: `Network gear is mounted in racks measured in rack units (U); one U is 1.75 inches of height, and standard racks are 19 inches wide. A typical switch is 1U or 2U; a 42U rack is common. Devices pull in cool air on one side and push out hot air on the other. In a data center, racks face each other so that cold air enters the front of racks in a cold aisle and hot air leaves the back into a hot aisle. Mounting a device backward blows hot air into the cold aisle and can cause overheating. Good cable management keeps cables labeled, bundled with hook-and-loop ties (not tight zip ties on fiber), and routed through vertical and horizontal managers so airflow is not blocked. Equipment rooms should be locked, have controlled access, adequate power, and temperature and humidity control.`,
    taglish: `Ang rack ay sinusukat sa U; 1U = 1.75 pulgada ang taas at 19 pulgada ang lapad ng standard rack. Karaniwang 42U ang rack. Kumukuha ng malamig na hangin ang device sa isang gilid at nagbubuga ng mainit sa kabila. Sa data center, magkaharap ang mga rack para ang malamig ay pumapasok sa harap (cold aisle) at ang mainit ay lumalabas sa likod (hot aisle). Kapag baliktad ang pagkakakabit ng device, mainit na hangin ang ibubuga sa cold aisle at mag-o-overheat. Dapat may label ang cables, gumamit ng hook-and-loop ties, at may cable managers para hindi harangan ang hangin. Naka-lock ang equipment room at may kontrol sa temperatura at humidity.`,
    analogy: {
      title: 'Aircon sa sinehan',
      text: `Sa sinehan, malamig ang hangin na pumapasok sa harap ng upuan at lumalabas sa likod. Kung ihaharap mo ang mga tao nang baliktad, mainit na hangin ang hihinga ng katabi nila. Ganyan ang rack: dapat tama ang direksyon para hindi mag-init ang equipment.`,
    },
    steps: [
      `Rack unit: 1U = 1.75 inches. A 42U rack holds 42 units of equipment height. Leave empty space (blanking panels) so hot air cannot recirculate to the front.`,
      `Rack types: 2-post (telco/relay) racks for light gear like patch panels, 4-post enclosed racks for servers and switches, and wall-mounted cabinets for small closets.`,
      `Airflow: most switches use front-to-back or back-to-front airflow, so check the "port-side intake" or "port-side exhaust" model against your aisle design. Cold aisle supplies cool air at the equipment intake; hot aisle collects exhaust.`,
      `Power: use PDUs (power distribution units) on each rack, protect critical gear with a UPS, plan the load so no circuit is overloaded, and use dual power supplies on separate circuits for redundancy.`,
      `Environmental: keep temperature roughly 64 to 80 F (18 to 27 C) and relative humidity about 40 to 60 percent. Too dry raises static electricity; too humid causes condensation and corrosion. Use sensors for temperature, humidity, and water leaks.`,
      `Cable management: label both ends, use color coding or patch panel ports to organize, keep copper away from power cables to reduce EMI, respect the minimum bend radius (especially fiber), and leave a service loop.`,
      `Security: lockable racks and doors, badge or biometric access, cameras, and an access log. Equipment rooms (telecommunications rooms) should not double as storage.`,
      `Documentation: keep rack elevation diagrams and port maps current so a technician can find a device and its connections quickly.`,
    ],
    table: {
      label: 'Table of rack and room planning factors',
      head: ['Factor', 'Good practice'],
      rows: [
        ['Rack height', '1U = 1.75 in; 42U common; use blanking panels'],
        ['Airflow', 'Cold aisle intake, hot aisle exhaust; match port-side intake or exhaust'],
        ['Power', 'PDU per rack, UPS, dual supplies on separate circuits'],
        ['Climate', '64 to 80 F and 40 to 60 percent humidity'],
        ['Cabling', 'Label ends, hook-and-loop ties, respect bend radius, separate from power'],
        ['Security', 'Locked racks and rooms, access logging, cameras'],
      ],
      caption: 'Cool, clean, labeled, powered, and locked.',
    },
    example: `A closet switch keeps rebooting every afternoon. The technician finds it mounted with its fans exhausting toward the door and pulling in air from the hot back of the cabinet, with the door closed. Rotating airflow orientation, adding blanking panels, and propping a small vent fix the overheating.`,
    tips: [
      `Always check the device's airflow direction before rack-mounting.`,
      `Blanking panels are cheap and stop hot air from circling back to the intake.`,
      `Never bend fiber tighter than the manufacturer's bend radius; it increases loss or breaks the glass.`,
    ],
    exam: `Remember 1U = 1.75 inches, hot aisle/cold aisle, front-to-back airflow, PDUs and UPS for power, humidity and temperature ranges, and that equipment rooms must be physically secured.`,
    mistakes: [
      `Installing a switch with the wrong airflow direction.`,
      `Running power and network cables bundled together.`,
      `Leaving unused rack space open instead of using blanking panels.`,
    ],
    terms: [
      { term: 'Rack unit (U)', def: `Standard rack height unit of 1.75 inches.` },
      { term: 'Hot aisle / cold aisle', def: `Layout separating equipment intake air from exhaust air.` },
      { term: 'PDU', def: `Power distribution unit that supplies power to devices in a rack.` },
      { term: 'Blanking panel', def: `Cover for empty rack space to control airflow.` },
      { term: 'Bend radius', def: `Minimum curve a cable can take without damage or loss.` },
    ],
    checks: [
      {
        prompt: `How tall is one rack unit (1U)?`,
        options: [`1 inch`, `1.75 inches`, `2.5 inches`, `4 inches`],
        correct: 1,
        explanation: `A rack unit equals 1.75 inches of vertical space.`,
      },
      {
        prompt: `Why are blanking panels installed in empty rack spaces?`,
        options: [`To add more ports`, `To prevent hot exhaust air from recirculating to the intake`, `To store spare cables`, `To reduce power use`],
        correct: 1,
        explanation: `Blanking panels keep cold and hot air separated, improving cooling.`,
      },
      {
        prompt: `A device pulls air from the cold aisle and exhausts into the hot aisle. What does this describe?`,
        options: [`Front-to-back airflow in a proper layout`, `A cooling fault`, `A wiring loop`, `PoE budget exhaustion`],
        correct: 0,
        explanation: `Proper layouts have intake on the cold-aisle side and exhaust on the hot-aisle side.`,
      },
    ],
    mini: {
      prompt: `A new switch in an enclosed cabinet is overheating though the room is cool.`,
      task: `Name two checks related to airflow.`,
    },
    recap: `Plan racks in rack units, keep intake and exhaust separated, power equipment through PDUs and UPS, control temperature and humidity, label and route cables properly, and lock the room.`,
    classroom: `"Malamig sa harap, mainit sa likod — at laging may label ang cable."`,
  });

  NetReady.LESSONS['3-10'] = NetReady.lesson(3, {
    id: '3-10',
    slug: 'fiber-multiplexing-and-media-converters',
    title: 'Fiber Multiplexing, BiDi Optics, and Media Converters: WDM, CWDM, and DWDM',
    minutes: 12,
    outcomes: [
      `Explain wavelength-division multiplexing and the difference between CWDM and DWDM.`,
      `Describe bidirectional (BiDi) transceivers and when they save fiber.`,
      `Identify when a media converter is needed and common fiber polarity issues.`,
    ],
    why: `Fiber is expensive to lay but cheap to reuse. Multiplexing and converters are how carriers and campuses squeeze more traffic out of the strands they already have, and the exam tests the acronyms.`,
    simple: `Light of different colors (wavelengths) can share one fiber strand without interfering. Wavelength-division multiplexing (WDM) combines several signals on separate wavelengths. Coarse WDM (CWDM) uses widely spaced wavelengths, supports about 8 to 18 channels, and is cheaper and shorter reach. Dense WDM (DWDM) packs many channels (40, 80, or more) very close together, goes much farther, and is used by carriers for long-haul links. BiDi (bidirectional) transceivers send and receive on two different wavelengths over a single strand instead of using a pair. A media converter connects different media types, such as copper to fiber or multimode to single-mode, and is handy when a device lacks the right port.`,
    taglish: `Puwedeng magsabay ang iba't ibang kulay ng ilaw sa iisang fiber. Ang WDM ay pagsasama ng ilang signal sa magkakaibang wavelength. Ang CWDM ay malalayo ang pagitan ng wavelength, kaunti ang channel (8 hanggang 18), mas mura, mas maikli ang abot. Ang DWDM ay siksikan ang channels (40, 80 o higit pa), mas malayo ang abot, ginagamit ng carriers sa long-haul. Ang BiDi ay nagpapadala at tumatanggap sa magkaibang wavelength sa iisang strand imbes na dalawa. Ang media converter ay nagkokonekta ng magkaibang media, gaya ng copper papuntang fiber, kapag walang tamang port ang device.`,
    analogy: {
      title: 'Isang kalsada, maraming lane na may kulay',
      text: `Isipin ang isang kalsada na may maraming lane na magkakaiba ng kulay ng pintura. Ang CWDM ay ilang malalawak na lane; ang DWDM ay napakaraming makikitid na lane sa iisang kalsada. Ang BiDi ay isang kalsadang may magkaibang lane para sa pagpunta at pagbalik, kaya hindi mo na kailangan ng dalawang kalsada.`,
    },
    steps: [
      `Fiber basics: single-mode (SMF, 9 micron core, lasers, long distance) and multimode (MMF, 50 or 62.5 micron core, shorter distance). Do not mix SMF and MMF without a converter or matching optics.`,
      `WDM combines multiple wavelengths onto one fiber using a multiplexer (mux) at one end and a demultiplexer (demux) at the other.`,
      `CWDM: 20 nm spacing, up to 18 channels (commonly 8), uncooled lasers, lower cost, distances up to roughly 80 km. Used in metro and enterprise links.`,
      `DWDM: 0.8 nm or tighter spacing, 40 to 96 or more channels, requires amplification and precise lasers, distances of hundreds to thousands of kilometers. Used by carriers and large data center interconnects.`,
      `BiDi optics: a pair of different SFPs (for example 1310 nm transmit and 1490 nm receive on one end, reversed on the other). The two ends must be complementary; a matched pair is required.`,
      `Media converter: converts between media types or speeds, such as RJ-45 copper to SFP fiber or multimode to single-mode. It lets you extend a link past the 100 m copper limit or cross an electrically noisy area.`,
      `Polarity: duplex fiber uses one strand for transmit and one for receive. If transmit is connected to transmit, the link will not come up. Swapping the two strands at one end (flipping the connector) fixes it.`,
      `Cleanliness: dirty connectors cause loss and errors. Clean with approved wipes or sticks and inspect with a scope before connecting.`,
    ],
    table: {
      label: 'Table comparing CWDM and DWDM',
      head: ['', 'CWDM', 'DWDM'],
      rows: [
        ['Channel spacing', 'Wide (20 nm)', 'Very tight (under 1 nm)'],
        ['Channels', 'Up to about 18', '40 to 96 or more'],
        ['Reach', 'Up to about 80 km', 'Hundreds of km with amplifiers'],
        ['Cost', 'Lower', 'Higher'],
        ['Typical use', 'Campus, metro', 'Carrier backbone, DCI'],
      ],
      caption: 'Both put many wavelengths on one fiber; DWDM packs them tighter and goes farther.',
    },
    example: `A school has only one spare fiber strand between buildings but needs two separate links. The network team installs a matched pair of BiDi SFPs, one transmitting at 1310 nm and receiving at 1550 nm, the other the opposite. Both links now share the single strand.`,
    tips: [
      `"Many wavelengths on one fiber" = WDM. "Dense, long-haul, carrier" = DWDM. "Coarse, cheaper, shorter" = CWDM.`,
      `BiDi optics must be installed as a matched pair; two identical BiDi SFPs will not link.`,
      `No link light on fiber? Check polarity (flip the pair), cleanliness, and that SMF and MMF types match.`,
    ],
    exam: `Be ready to differentiate CWDM and DWDM, identify BiDi as one strand with two wavelengths, and select a media converter when two media types must connect.`,
    mistakes: [
      `Thinking DWDM is cheaper than CWDM.`,
      `Connecting singlemode optics to multimode fiber.`,
      `Forgetting that a duplex fiber pair has a transmit and a receive strand.`,
    ],
    terms: [
      { term: 'WDM', def: `Wavelength-division multiplexing; several signals on one fiber at different wavelengths.` },
      { term: 'CWDM', def: `Coarse WDM with wide channel spacing and fewer channels.` },
      { term: 'DWDM', def: `Dense WDM with tight spacing, many channels, and long reach.` },
      { term: 'BiDi optic', def: `Transceiver that sends and receives on different wavelengths over a single fiber strand.` },
      { term: 'Media converter', def: `Device that connects different cable types or standards.` },
    ],
    checks: [
      {
        prompt: `Which technology places many wavelengths on a single fiber for long-haul carrier links?`,
        options: [`CWDM`, `DWDM`, `PoE`, `LACP`],
        correct: 1,
        explanation: `DWDM uses tightly spaced wavelengths for many channels over long distances.`,
      },
      {
        prompt: `You have one spare fiber strand and need a full-duplex link. What can you use?`,
        options: [`Matched BiDi SFPs`, `Two identical SX SFPs`, `A rollover cable`, `A loopback plug`],
        correct: 0,
        explanation: `BiDi transceivers send and receive on different wavelengths over one strand.`,
      },
      {
        prompt: `A switch has only an RJ-45 port but must connect to a fiber link. What is a simple solution?`,
        options: [`Media converter`, `Patch panel`, `Punchdown tool`, `Wireless bridge`],
        correct: 0,
        explanation: `A media converter bridges copper and fiber.`,
      },
    ],
    mini: {
      prompt: `A new fiber link shows no light even though both transceivers are the right type.`,
      task: `Name two quick checks.`,
    },
    recap: `WDM shares one fiber among many wavelengths: CWDM is coarse and cheaper, DWDM is dense and long-haul. BiDi optics use one strand, media converters join different media, and polarity and cleanliness solve many fiber link problems.`,
    classroom: `"Iisang fiber, maraming kulay ng ilaw. Coarse kung mura, Dense kung malayo."`,
  });

  NetReady.LESSONS['3-11'] = NetReady.lesson(3, {
    id: '3-11',
    slug: 'structured-cabling-punch-blocks-and-patch-panels',
    title: 'Structured Cabling: Patch Panels, 66 and 110 Blocks, Cross-Connects, and Cable Ratings',
    minutes: 15,
    outcomes: [
      `Describe the parts of a structured cabling system from wall jack to switch.`,
      `Compare 66 blocks, 110 blocks, patch panels, patch bays, and fiber distribution panels.`,
      `Apply the 90 m and 100 m copper limits and the rules for labeling and separation.`,
      `Choose between plenum, riser, and general-purpose cable jackets.`,
    ],
    why: `Cabling is the oldest source of network problems and a named exam topic. A neat structured cabling system is what makes moves, adds, and changes fast and troubleshooting possible.`,
    simple: `Structured cabling is a standard layout. At each desk a keystone jack in a wall plate (the work area outlet) is connected by horizontal cabling, a fixed run of up to 90 meters, to a patch panel in the telecommunications room (IDF). A short patch cord links the patch panel port to a switch port. Patch cords at both ends can add up to 10 meters, so the whole channel stays within 100 meters for twisted pair Ethernet. Between the IDF and the main distribution frame (MDF) runs backbone cabling, usually fiber. Wires terminate on punchdown blocks or panels: older 66 blocks (mainly telephone) and the more compact 110 blocks (data and voice), seated with a punchdown tool. Fiber ends on a fiber distribution panel with adapters and splice trays.`,
    taglish: `Ang structured cabling ay standard na ayos. Sa bawat mesa, may keystone jack sa wall plate (work area outlet) na konektado sa pamamagitan ng horizontal cabling, hanggang 90 metro ang haba, papunta sa patch panel sa telecommunications room (IDF). Isang maikling patch cord ang nag-uugnay sa port ng patch panel at sa port ng switch. Ang patch cords sa magkabilang dulo ay puwedeng umabot ng 10 metro lahat, kaya ang buong channel ay hanggang 100 metro. Sa pagitan ng IDF at MDF ay backbone cabling, karaniwang fiber. Ang mga wire ay tinatapos sa punchdown block: ang lumang 66 block (para sa telepono) at ang mas siksik na 110 block (data at voice). Ang fiber ay sa fiber distribution panel.`,
    analogy: {
      title: 'Tubo ng tubig sa gusali',
      text: `Ang MDF ay main water tank, ang mga IDF ay pumping station sa bawat palapag, at ang horizontal cabling ay mga tubo papunta sa bawat gripo (wall jack). Ang patch panel ay mga balbula (valves) kung saan madali mong ililipat kung aling gripo ang kakabit sa aling linya nang hindi binabaklas ang pader.`,
    },
    steps: [
      `Work area: the wall jack (keystone) and the patch cord from the jack to the PC. Terminate solid-core cable on the jack with a punchdown tool.`,
      `Horizontal cabling: solid-core twisted pair from the work area outlet to the IDF patch panel. Permanent link maximum 90 m; with equipment and work-area patch cords the channel must not exceed 100 m (328 ft). Solid-core is for fixed runs; stranded cable is for flexible patch cords.`,
      `Patch panel: a rack-mounted panel of ports where horizontal cables are punched down on the back and short patch cords connect on the front. A patch bay is the same idea; the term is common in audio, video, and telecom wiring. Cross-connect means linking two sets of wiring through patch cords or jumpers; an interconnect connects equipment directly to the cabling.`,
      `66 block: older punchdown block with rows of split metal clips, used mainly for analog telephone wiring (25-pair). 110 block: a more compact design that supports higher frequencies, used for Cat 5e, Cat 6, and modern voice cross-connects. Both use a punchdown tool with the right blade; the 110 block uses a 110 blade.`,
      `Backbone cabling: connects the IDF to the MDF (and buildings to each other); often multimode or single-mode fiber because of distance, bandwidth, and electrical isolation. Fiber terminates at a fiber distribution panel (also called a fiber patch panel or optical distribution frame) with SC or LC adapters, and long runs are fusion-spliced onto pigtails in splice trays.`,
      `Demarc: the demarcation point where the provider's responsibility ends and the customer's begins; usually in the MDF or entrance facility. The smart jack or network interface device (NID) is the provider's equipment.`,
      `Jacket ratings: CM or general purpose PVC (inside walls on one floor, not in air spaces), CMR riser (vertical shafts between floors), CMP plenum (air-handling spaces; made with fire-retardant, low-smoke materials such as FEP, and more expensive). Plenum cable can be used anywhere a lower rating is required, not the reverse.`,
      `Labeling and documentation: label both ends of every cable and each patch panel port (a common standard is TIA-606), keep a cable map that ties the jack, panel port, and switch port together, and update diagrams after every change.`,
      `Good practice: keep twisted pair away from power cables and fluorescent lighting (EMI), do not exceed bend radius, do not pull cables tight or over-tighten ties (use hook-and-loop), keep pairs twisted to within about 0.5 inch of the termination, and leave a service loop.`,
    ],
    deepDive: [
      {
        title: 'Counting the channel length: does this run pass?',
        text: `A desk is 78 m of horizontal cable from the IDF patch panel. The installer uses a 3 m patch cord from the PC to the jack and a 2 m patch cord from the patch panel to the switch.`,
        code: `Permanent link (horizontal run)   78 m   <= 90 m   OK
Work-area patch cord               3 m
Equipment patch cord               2 m
Channel total                     83 m   <= 100 m  OK

Now a bad design:
Horizontal run                    92 m   > 90 m   FAILS the permanent link limit
(even though 92 + 3 + 2 = 97 m is under 100 m)`,
        note: `Both limits matter: 90 m for the permanent link and 100 m for the full channel. Exceeding them causes attenuation errors and failed certification.`,
      },
      {
        title: 'Which block or panel for which job?',
        code: `Component                 Medium            Typical use                         Tool
------------------------  ----------------  ----------------------------------  ----------------------
Keystone jack (wall)      Copper            Termination at the desk             Punchdown tool
Patch panel / patch bay   Copper            IDF termination, easy changes       Punchdown tool
66 block                  Copper (25-pair)  Legacy telephone cross-connects     66 punchdown blade
110 block                 Copper            Data and voice cross-connects       110 punchdown blade
Fiber distribution panel  Fiber             Terminate and patch backbone fiber  Fusion splicer, cleaner
Patch cord                Copper or fiber   Short flexible jumper               Crimper (copper)`,
      },
      {
        title: 'Cable jackets: where each may be installed',
        code: `Rating   Name             Where it is allowed
-------  ---------------  -------------------------------------------------------------
CM/CMG   General purpose  Within a single floor, in walls (not in air-handling spaces)
CMR      Riser            Vertical runs between floors
CMP      Plenum           Plenum spaces (above drop ceilings used for air return, under raised floors)

Rule of thumb: a higher fire rating may substitute for a lower one, never the reverse.`,
      },
      {
        title: 'Tracing a problem through the system',
        text: `A user's link is down. Work along the path and test each segment.`,
        code: `Desk PC -> patch cord -> wall jack -> horizontal cable -> patch panel -> patch cord -> switch
   1. Swap the PC patch cord with a known good one
   2. Wire-map tester at the wall jack: opens, shorts, split pairs?
   3. Tone generator and probe at the panel: is the right port labeled?
   4. Swap the panel-to-switch patch cord
   5. Try another switch port; check the interface status
   6. Re-punch the jack or panel position if the test shows a bad termination`,
      },
    ],
    table: {
      label: 'Table of structured cabling parts and limits',
      head: ['Part', 'Purpose', 'Limit or rule'],
      rows: [
        ['Work area outlet', 'Jack at the desk', 'Terminated with a punchdown tool'],
        ['Horizontal cabling', 'Jack to IDF patch panel', 'Up to 90 m permanent link'],
        ['Channel', 'Whole path including patch cords', 'Up to 100 m'],
        ['Backbone cabling', 'IDF to MDF between floors or buildings', 'Usually fiber'],
        ['MDF / IDF', 'Main / intermediate distribution frame', 'Racks, panels, switches'],
        ['Plenum (CMP) jacket', 'Air-handling spaces', 'Fire-retardant, low smoke'],
      ],
      caption: 'Wall jack, horizontal run, patch panel, patch cord, switch.',
    },
    example: `A company moves 30 people to a new floor. Because every drop is labeled on both ends and documented in a cable map, the technician repatches users at the IDF in an afternoon without touching a wall. A year later a run found above a ceiling is the wrong jacket type (CM in a plenum space); the inspector requires replacement with CMP cable.`,
    tips: [
      `Test and certify every run after installation and keep the report with the documentation.`,
      `Use solid-core cable for fixed runs and stranded cable for patch cords; a stranded cable on a jack or punchdown block will fail over time.`,
      `Never terminate more than a half inch of untwisted wire, or crosstalk will fail certification.`,
    ],
    exam: `Be ready to recall 90 m and 100 m, solid versus stranded, 66 versus 110 blocks, patch panels and fiber distribution panels, MDF versus IDF, demarc, and plenum versus non-plenum cable.`,
    mistakes: [
      `Using riser or general-purpose cable in an air-handling space.`,
      `Counting only the 100 m channel limit and ignoring the 90 m permanent link limit.`,
      `Leaving cables unlabeled.`,
    ],
    terms: [
      { term: 'Patch panel / patch bay', def: `Panel where cables terminate and short patch cords make connections.` },
      { term: '66 block / 110 block', def: `Punchdown blocks for telephone / data and voice wiring.` },
      { term: 'Horizontal cabling', def: `Permanent copper run from the work area to the telecom room, up to 90 m.` },
      { term: 'Backbone cabling', def: `Cabling between distribution frames, floors, or buildings.` },
      { term: 'Cross-connect', def: `Linking two sets of wiring with patch cords or jumpers at a panel or block.` },
      { term: 'Plenum (CMP)', def: `Cable rated for air-handling spaces.` },
    ],
    checks: [
      {
        prompt: `What is the maximum length of a horizontal (permanent link) copper run in structured cabling?`,
        options: [`50 m`, `90 m`, `100 m`, `150 m`],
        correct: 1,
        explanation: `The permanent link is limited to 90 m, leaving 10 m for patch cords in the 100 m channel.`,
      },
      {
        prompt: `Which cable jacket is required in air-handling spaces above a drop ceiling?`,
        options: [`CM general purpose`, `CMR riser`, `CMP plenum`, `Any stranded cable`],
        correct: 2,
        explanation: `Plenum-rated (CMP) cable is made of fire-retardant, low-smoke material for air-handling spaces.`,
      },
      {
        prompt: `Which termination block is the older design used mostly for analog telephone cross-connects?`,
        options: [`66 block`, `110 block`, `Fiber panel`, `Keystone jack`],
        correct: 0,
        explanation: `66 blocks are the legacy telephone punchdown blocks; 110 blocks support data speeds.`,
      },
    ],
    mini: {
      prompt: `A new run measures 94 m from the IDF patch panel to the wall jack.`,
      task: `Does it meet the standard, and what are your options?`,
    },
    recap: `Structured cabling runs from jack to horizontal cable to patch panel to switch, within 90 m (permanent link) and 100 m (channel). Terminate with punchdown tools on 110 or 66 blocks, use fiber backbones with distribution panels, choose the right jacket rating, and label and document everything.`,
    classroom: `"Maayos na cabling, maayos na troubleshooting: 90 metro, label sa dalawang dulo, at tamang jacket."`,
  });

  NetReady.LESSONS['3-12'] = NetReady.lesson(3, {
    id: '3-12',
    slug: 'fiber-splicing-testing-and-loss-budgets',
    title: 'Fiber Splicing, Testing, and Loss Budgets: Fusion Splicers, Power Meters, OTDRs, and Cleaning',
    minutes: 17,
    outcomes: [
      `Compare fusion splicing and mechanical splicing.`,
      `Use an optical power meter, visual fault locator, and OTDR for the right task.`,
      `Calculate a simple fiber loss budget and decide whether a link will work.`,
      `Clean and inspect connectors correctly and safely.`,
    ],
    why: `Fiber hardware tools are in the troubleshooting objective (fusion splicer, optical power meter, OTDR, light meter, visual fault locator). A power meter and a loss budget turn a vague "the fiber is bad" into a number you can check.`,
    simple: `Light loses strength as it travels through glass and at every connector and splice. That loss, measured in decibels (dB), must stay under the loss budget the transceivers can tolerate. A fusion splicer melts two fibers together with an electric arc for a permanent, very low-loss joint (about 0.1 dB). A mechanical splice aligns the fibers with a sleeve and gel, is quicker and cheaper but has higher loss (about 0.3 dB). To test, an optical light source and an optical power meter (OPM, also called a light meter) at the two ends measure the total loss. A visual fault locator (VFL) shines red light to show breaks and tight bends in short runs, and an OTDR sends pulses and shows a trace of every connector, splice, bend, and break with its distance. Dirty connectors are the most common cause of fiber problems, so inspect and clean before connecting.`,
    taglish: `Humihina ang liwanag habang dumadaan sa salamin at sa bawat connector at splice. Ang pagkawalang ito, sinusukat sa decibel (dB), ay dapat nasa loob ng loss budget na kayang tanggapin ng transceiver. Ang fusion splicer ay tinutunaw ang dalawang fiber gamit ang electric arc para sa permanenteng at napakababang loss (mga 0.1 dB). Ang mechanical splice ay gumagamit ng sleeve at gel; mas mabilis at mura pero mas mataas ang loss (mga 0.3 dB). Para mag-test, ang light source at optical power meter (OPM o light meter) sa magkabilang dulo ang sumusukat ng kabuuang loss. Ang visual fault locator (VFL) ay pulang ilaw para makita ang putol at matalim na liko sa maikling cable, at ang OTDR ay nagpapakita ng bawat connector, splice, liko, at putol kasama ang distansya. Ang maruming connector ang pinakakaraniwang problema.`,
    analogy: {
      title: 'Hose na may mga butas at tagas',
      text: `Isipin ang tubig na dumadaan sa hose na may mga koneksyon. Bawat koneksyon (connector) at tagpi (splice) ay may kaunting tagas. Ang OPM ay sumusukat ng lakas ng tubig sa dulo, ang OTDR ay nagsasabi kung nasaan ang bawat tagas, at ang VFL ay pulang ilaw na nagpapakita ng butas sa maikling hose.`,
    },
    steps: [
      `Fiber types: single-mode (about 9 micron core, lasers, long distance) and multimode (50 or 62.5 micron core, LEDs or VCSELs, short distance). Mixing them causes high loss.`,
      `Fusion splice: strip, clean, cleave (a precise flat cut), align in the splicer, and fuse with an arc. Typical loss 0.05 to 0.1 dB, permanent and strong. Used for pigtails and long runs.`,
      `Mechanical splice: aligns the cleaved fibers in a sleeve with index-matching gel; typical loss about 0.3 dB; no arc needed but less durable and slightly higher loss.`,
      `Typical losses for planning: connector pair 0.3 to 0.75 dB, fusion splice 0.1 dB, single-mode fiber about 0.35 to 0.4 dB per km (at 1310 nm), multimode about 3 dB per km at 850 nm.`,
      `Optical power meter plus light source: measure the transmitted power and the received power across the link. Loss = power in minus power out. This is the pass-or-fail test against the loss budget (insertion loss test).`,
      `Visual fault locator: a red laser (about 650 nm) injected into the fiber; light leaks out visibly at breaks, sharp bends, or bad connectors. Practical for short runs (up to a few km) and patch cords; the jacket may glow near the fault.`,
      `OTDR (optical time-domain reflectometer): injects pulses and measures reflected light over time to plot a trace. Events appear as spikes (reflective events such as connectors) or steps (non-reflective such as splices and bends) with their distance from the OTDR. Use launch and tail cables so the first and last connectors are measured. It locates faults, but the OPM measures true end-to-end loss.`,
      `Cleaning and inspection: inspect end faces with a fiber scope; clean dry with a lint-free wipe or click cleaner, and use a solvent only when needed. Always cap unused connectors. Never look into a fiber or port; infrared light is invisible and can harm the eye.`,
      `Bend radius: avoid bending fiber tighter than the manufacturer's minimum (commonly about 10 times the cable diameter under no tension, 20 times under tension); tight bends cause macrobend loss.`,
    ],
    deepDive: [
      {
        title: 'Loss budget, worked: will this link work?',
        text: `A 2 km single-mode link uses two connector pairs (one at each end through patch panels) and one fusion splice in the middle. The transceivers have a 6 dB budget (transmit power minus receiver sensitivity, with a margin).`,
        code: `Fiber:      2 km x 0.4 dB/km          = 0.80 dB
Connectors: 2 pairs x 0.5 dB            = 1.00 dB
Splice:     1 fusion x 0.1 dB           = 0.10 dB
------------------------------------------------
Expected total loss                      = 1.90 dB

Link budget 6.0 dB - 1.9 dB expected    = 4.1 dB margin   -> PASS

If the power meter later measures 5.5 dB:
  measured 5.5 dB vs expected 1.9 dB -> 3.6 dB of unexplained loss
  -> dirty connector, tight bend, or damaged splice; use the OTDR to find it.`,
        note: `Compare the measured loss with the expected loss, not only with the budget. A link can "pass" while hiding a fault that will worsen.`,
      },
      {
        title: 'What an OTDR trace tells you',
        code: `Distance (m)  Event                Type             Loss (dB)   Reflectance
0             Launch connector     Reflective       0.4         -45 dB
820           Fusion splice        Non-reflective   0.08        n/a
1,410         Bend / stress        Non-reflective   1.3  <---   n/a     (macrobend, investigate)
1,995         Patch panel connector Reflective      0.6         -38 dB
2,000         End of fiber         Reflective       n/a         -14 dB`,
        note: `A step of 1.3 dB at 1,410 m with no connector there points to a tight bend or damaged fiber at that spot: go to that distance and look.`,
      },
      {
        title: 'Which tool for which question?',
        code: `Question                                      Tool
--------------------------------------------  ---------------------------------
How much light arrives at the far end?        Optical power meter (+ light source)
Is there a break or tight bend in this patch  Visual fault locator
cord or short run?
Where exactly is the fault, and how far?      OTDR
Join two fibers permanently with low loss?    Fusion splicer
Is this connector clean and undamaged?        Fiber inspection scope
Remove contamination from a connector?        Lint-free wipe or click cleaner`,
      },
    ],
    table: {
      label: 'Table of fiber splice and connector losses',
      head: ['Item', 'Typical loss', 'Notes'],
      rows: [
        ['Fusion splice', '0.05 to 0.1 dB', 'Permanent, best performance'],
        ['Mechanical splice', 'About 0.3 dB', 'Quick, less durable'],
        ['Connector pair', '0.3 to 0.75 dB', 'Depends on cleanliness and quality'],
        ['Single-mode fiber', 'About 0.35 to 0.4 dB/km', 'At 1310 nm'],
        ['Multimode fiber', 'About 3 dB/km', 'At 850 nm'],
      ],
      caption: 'Add every loss and compare it with the transceiver budget.',
    },
    example: `A 10 Gbps fiber link between two buildings flaps. The link light is on, but the switch shows a received optical power right at the minimum threshold. The OTDR trace shows a 1.8 dB event at a patch panel connector. Inspecting it with a scope shows a dust layer on the end face. Cleaning it brings the loss back to 0.4 dB and the link stays up.`,
    tips: [
      `Inspect before you connect, every time; a single dirty connector can cause days of intermittent faults.`,
      `Use a VFL for quick checks on patch cords, and an OTDR when you need distance to a fault.`,
      `Document the OTDR and power meter results when the link is installed so you can compare them after a fault.`,
    ],
    exam: `Match tools to jobs: fusion splicer joins fiber, OPM or light meter measures optical power and loss, OTDR locates faults with distance, VFL shows breaks visually, and a scope inspects connectors. Know that dirty connectors are the most common cause of fiber problems.`,
    mistakes: [
      `Looking into a live fiber or transmitter port.`,
      `Connecting a connector without inspecting and cleaning it.`,
      `Assuming an OTDR gives the true end-to-end loss without proper launch and tail cables.`,
    ],
    terms: [
      { term: 'Fusion splicer', def: `Tool that permanently joins two fibers by melting them with an electric arc.` },
      { term: 'Optical power meter (light meter)', def: `Instrument that measures optical power, used to find loss.` },
      { term: 'OTDR', def: `Optical time-domain reflectometer that plots reflections and loss along a fiber.` },
      { term: 'Visual fault locator (VFL)', def: `Red-light source for finding breaks and bends in short fibers.` },
      { term: 'Loss budget', def: `Maximum total loss, in dB, a link can have and still work.` },
      { term: 'Insertion loss', def: `Total signal loss added by a link or component.` },
    ],
    checks: [
      {
        prompt: `Which tool joins two fibers permanently with very low loss using an electric arc?`,
        options: [`Fusion splicer`, `Crimper`, `Tone generator`, `Wire-map tester`],
        correct: 0,
        explanation: `A fusion splicer melts the glass of two fibers into a continuous, low-loss joint.`,
      },
      {
        prompt: `A technician needs the distance to a break in a fiber run. Which tool provides it?`,
        options: [`OTDR`, `Optical power meter alone`, `Loopback plug`, `Punchdown tool`],
        correct: 0,
        explanation: `An OTDR plots events along the fiber with their distance.`,
      },
      {
        prompt: `A single-mode link of 3 km has two connector pairs (0.5 dB each) and no splices. Using 0.4 dB/km, what is the expected total loss?`,
        options: [`1.2 dB`, `2.2 dB`, `3.4 dB`, `4.2 dB`],
        correct: 1,
        explanation: `3 km times 0.4 dB is 1.2 dB, plus 2 times 0.5 dB is 1.0 dB, for 2.2 dB total.`,
      },
    ],
    mini: {
      prompt: `A new fiber link has an expected loss of 2 dB but the power meter measures 5 dB.`,
      task: `Name the next tool and two likely causes.`,
    },
    recap: `Fusion splices are the lowest-loss joins, power meters measure total loss against the budget, VFLs and OTDRs locate faults, and clean connectors are essential. Add up fiber, connector, and splice losses and compare with the measured value to decide whether a link is healthy.`,
    classroom: `"Linisin muna bago ikabit, sukatin ang loss, at kapag mas malaki sa inaasahan, hanapin gamit ang OTDR."`,
  });
}(window.NetReady));
