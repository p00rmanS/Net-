/**
 * content/module-9.js — Module 9: Wireless Networking
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  NetReady.LESSONS['9-1'] = {
    id: '9-1',
    moduleId: 9,
    slug: '80211-standards-frequency-channels',
    title: '802.11 Standards, Frequency Bands, and Channels',
    estMinutes: 13,
    outcomes: [
      'Identify common 802.11 Wi-Fi standards and their general capabilities.',
      'Explain the tradeoffs between the 2.4 GHz, 5 GHz, and 6 GHz bands.',
      'Explain what channel overlap is and why it causes interference.',
    ],
    whyItMatters:
      'Every Wi-Fi troubleshooting conversation eventually comes down to frequency band and channel choices — understanding this lets you explain "why is Wi-Fi slow here" with real technical confidence.',
    simpleEnglish:
      'IEEE 802.11 defines Wi-Fi standards, each generation (like 802.11n, 802.11ac, 802.11ax/Wi-Fi 6, and 802.11be/Wi-Fi 7) adding faster speeds and better efficiency. Wi-Fi operates on different frequency bands: 2.4 GHz has longer range and better wall penetration but is more crowded and prone to interference; 5 GHz offers more channels and less interference but shorter range; 6 GHz (used by Wi-Fi 6E and 7) offers the most clean spectrum but the shortest range. Channels are specific slices of a frequency band; overlapping channels used by nearby networks cause interference and reduced performance.',
    taglish:
      'Ang IEEE 802.11 ang nagtatakda ng mga Wi-Fi standard — bawat henerasyon (802.11n, 802.11ac, 802.11ax na kilala ring Wi-Fi 6, at 802.11be na Wi-Fi 7) ay may mas mabilis at mas efficient na kakayahan. Ang Wi-Fi ay gumagamit ng iba\'t-ibang frequency band: ang 2.4 GHz ay mas malayo ang abot at mas madaling tumagos sa dingding, pero mas siksik at madaling ma-interfere. Ang 5 GHz ay mas maraming channel at mas kaunting interference, pero mas maikli ang abot. Ang 6 GHz (Wi-Fi 6E at 7) ay pinaka-malinis na spectrum, pero pinaka-maikli rin ang abot. Ang channel ay isang specific na hiwa ng frequency band — kapag nagkakapatong-patong (overlap) ang mga channel na ginagamit ng mga kalapit na network, nagkakaroon ng interference at bumababa ang performance.',
    analogy: {
      title: 'Radyo istasyon at dami ng nakikinig',
      text:
        'Isipin mo ang bawat frequency band parang ibang klase ng radyo frequency — ang 2.4 GHz parang AM radio: malayo ang abot, kayang tumagos sa mga hadlang, pero maraming ibang istasyon (device) gumagamit din nito kaya siksik at magulo. Ang 5 GHz at 6 GHz naman parang FM o mas mataas na frequency — mas malinaw ang tunog (mas kaunting interference) pero mas maikli ang abot ng signal. Ang channel overlap naman parang dalawang istasyon ng radyo na sabay-sabay nagbo-broadcast sa halos parehong frequency — magkakahalo ang boses nila, magulo ang naririnig.',
    },
    howItWorks: [
      'Newer 802.11 standards (ac, ax/Wi-Fi 6, be/Wi-Fi 7) add wider channels, more spatial streams (MIMO), and smarter scheduling (like OFDMA) to increase real-world throughput.',
      '2.4 GHz has only 3 non-overlapping channels in most regions (1, 6, 11), making crowding a common real problem in dense environments like apartment buildings.',
      '5 GHz offers far more non-overlapping channels and generally less legacy device congestion, at the cost of shorter range and less wall penetration.',
      '6 GHz (new spectrum, Wi-Fi 6E/7 only) offers the cleanest, most interference-free environment currently available, but has the shortest range of the three bands.',
      'Overlapping channels between nearby access points cause co-channel interference, effectively forcing devices to take turns and reducing overall throughput for everyone nearby.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Band</th><th>Range</th><th>Interference</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>2.4 GHz</td><td>Longest</td><td>High (crowded, only 3 clean channels)</td><td>Best wall penetration</td></tr>
          <tr><td>5 GHz</td><td>Medium</td><td>Lower</td><td>Many more available channels</td></tr>
          <tr><td>6 GHz</td><td>Shortest</td><td>Lowest (newest, cleanest spectrum)</td><td>Requires Wi-Fi 6E/7 devices</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'In a crowded apartment building where dozens of neighbors\' routers all default to 2.4 GHz channel 6, everyone experiences slower Wi-Fi due to constant co-channel interference — switching to 5 GHz often resolves it immediately.',
    proTips: [
      'When troubleshooting slow Wi-Fi in a dense environment, checking for channel overlap on 2.4 GHz is one of the fastest, highest-value first steps.',
      'Modern access points can often auto-select the least congested channel — but manually verifying this during a site visit is still a valuable habit.',
    ],
    examAlert:
      'Memorize the three non-overlapping 2.4 GHz channels (1, 6, 11) and the general range/interference tradeoff between 2.4 GHz, 5 GHz, and 6 GHz — this is tested very literally.',
    beginnerMistakes: [
      'Assuming a higher frequency band is always "better" — it is a real range-vs-congestion tradeoff, not a strict upgrade.',
      'Forgetting that 6 GHz requires both an access point AND a client device that support it (Wi-Fi 6E or 7) — older devices simply cannot use that band at all.',
      'Ignoring channel overlap as a cause of poor performance and jumping straight to blaming the internet connection instead.',
    ],
    keyTerms: [
      { term: '802.11', def: 'The IEEE standards family defining Wi-Fi.' },
      { term: 'Channel', def: 'A specific slice of a frequency band used for wireless transmission.' },
      { term: 'Co-channel interference', def: 'Performance degradation caused by multiple networks using the same or overlapping channels nearby.' },
      { term: 'MIMO', def: 'Multiple Input, Multiple Output — using multiple antennas to increase throughput and reliability.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Which frequency band typically offers the longest range and best wall penetration, at the cost of more interference?',
        options: ['2.4 GHz', '5 GHz', '6 GHz', 'They are all identical in range'],
        correct: 0,
        explanation: '2.4 GHz travels farther and penetrates walls better, but is more crowded and interference-prone.',
      },
      {
        prompt: 'What are the three commonly used non-overlapping channels on the 2.4 GHz band?',
        options: ['1, 2, 3', '1, 6, 11', '2, 7, 12', '6, 11, 14'],
        correct: 1,
        explanation: 'Channels 1, 6, and 11 are the standard non-overlapping choices on 2.4 GHz in most regions.',
      },
      {
        prompt: 'What causes co-channel interference?',
        options: [
          'Two devices using completely different frequency bands.',
          'Multiple nearby networks using the same or overlapping channels.',
          'A device being physically too close to the access point.',
          'Using an outdated 802.11 standard exclusively.',
        ],
        correct: 1,
        explanation: 'Overlapping channel usage among nearby networks forces devices to contend for the same airspace, degrading performance.',
      },
    ],
    miniScenario: {
      prompt: 'A user in a crowded apartment complex complains their 2.4 GHz Wi-Fi is very slow, despite a fast internet plan.',
      task: 'Suggest two things you would check or try first, based on what you learned about bands and channels.',
    },
    recap:
      '802.11 standards keep improving Wi-Fi speed and efficiency. 2.4 GHz offers range but more interference; 5 GHz and 6 GHz offer more clean channels but shorter range. Channel overlap between nearby networks is a common, fixable cause of poor performance.',
    classroomAnswer:
      '"Wi-Fi problems are often just a band-and-channel problem in disguise — longer range but crowded (2.4 GHz), or cleaner but shorter range (5/6 GHz), and overlapping channels nearby make it worse either way."',
  };

  NetReady.LESSONS['9-2'] = {
    id: '9-2',
    moduleId: 9,
    slug: 'access-points-ssid-bssid-roaming',
    title: 'Access Points, SSIDs, BSSIDs, Antennas, and Roaming',
    estMinutes: 12,
    outcomes: [
      'Differentiate an SSID from a BSSID.',
      'Explain how a wireless controller manages multiple access points.',
      'Explain how roaming lets a device move between access points seamlessly.',
    ],
    whyItMatters:
      'Anyone deploying more than a single home router needs to understand how multiple access points work together as one coherent wireless network — this is the everyday reality of office and campus Wi-Fi.',
    simpleEnglish:
      'An SSID (Service Set Identifier) is the human-readable network name you see when choosing a Wi-Fi network. A BSSID is the actual MAC address of a specific access point\'s radio, uniquely identifying that one radio even though multiple APs might broadcast the same SSID. A wireless LAN controller (WLC) centrally manages many access points, pushing consistent configuration and coordinating channels/power across a building or campus. Roaming lets a client device move between access points broadcasting the same SSID without dropping its connection, ideally handing off seamlessly.',
    taglish:
      'Ang SSID ang pangalan ng Wi-Fi network na nakikita mo sa listahan kapag pipili ka ng kokonektahan — parang "pangalan ng tindahan." Ang BSSID naman ang aktwal na MAC address ng radio ng isang specific na access point — kahit maraming AP ang gumagamit ng parehong SSID (pangalan), magkaiba ang BSSID ng bawat isa, parang magkaparehong sangay ng isang tindahan pero magkaiba ang eksaktong address ng bawat sangay. Ang wireless LAN controller (WLC) ay sentral na namamahala ng maraming access point, nagbibigay ng pare-parehong settings at kina-coordinate ang channels/power sa buong building o campus. Ang roaming naman ay ang kakayahan ng device mong lumipat sa ibang access point na parehong SSID nang hindi naaantala ang koneksyon — parang tuluy-tuloy na pag-usap kahit lumipat ka ng silid.',
    analogy: {
      title: 'Pangalan ng tindahan vs. eksaktong sangay',
      text:
        'Isipin mo ang SSID parang pangalan ng isang malaking fast-food chain — "Jollibee" halimbawa. Ang BSSID naman parang eksaktong address ng isang specific na sangay ng Jollibee — magkaiba ang address ng bawat sangay kahit magkapareho ang pangalan. Ang roaming ay parang pagpasok mo sa isang sangay, tapos habang lumalakad ka papuntang ibang parte ng mall, kusa kang "lumipat" sa mas malapit na sangay nang hindi mo namamalayan — tuloy-tuloy pa rin ang karanasan mo bilang customer.',
    },
    howItWorks: [
      'Multiple access points across a building are typically configured with the same SSID and security settings but different BSSIDs, so devices experience one seamless network.',
      'A wireless LAN controller centrally manages configuration, firmware, channel assignment, and transmit power across all its access points, avoiding the need to configure each one manually.',
      'Roaming is triggered when a client device decides signal from a different access point is now stronger or better, and re-associates with minimal or no interruption.',
      'Fast roaming standards (like 802.11r) reduce the re-authentication delay during handoff, which matters a great deal for latency-sensitive traffic like VoIP calls.',
      'A guest network is typically a separate SSID mapped to its own VLAN, isolating visitor traffic from the internal corporate network.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="A wireless LAN controller managing three access points that all broadcast the same SSID but have unique BSSIDs">
        <div class="net-node highlight">Wireless LAN Controller</div>
        <div class="net-line">&darr;</div>
        <div class="net-row">
          <div class="net-node">AP 1<br><small>SSID: OfficeWiFi<br>BSSID: unique MAC</small></div>
          <div class="net-node">AP 2<br><small>SSID: OfficeWiFi<br>BSSID: unique MAC</small></div>
          <div class="net-node">AP 3<br><small>SSID: OfficeWiFi<br>BSSID: unique MAC</small></div>
        </div>
      </div>`,
    },
    realWorldExample:
      'Walking through a large office building while on a Wi-Fi call, your phone silently roams between a dozen different access points, all sharing the same SSID, without you ever noticing a single handoff.',
    proTips: [
      'When troubleshooting "Wi-Fi drops in one specific area," think about roaming and AP coverage overlap, not just the single nearest access point.',
      'A guest network\'s isolation from the internal network is a security control, not just a convenience — always verify it is actually implemented via a separate VLAN, not just a separate name.',
    ],
    examAlert:
      'The exam commonly tests the SSID vs. BSSID distinction directly — SSID is the shared name, BSSID is the unique per-radio MAC address.',
    beginnerMistakes: [
      'Confusing SSID (the shared network name) with BSSID (the unique MAC address of one specific access point\'s radio).',
      'Assuming a "guest network" is automatically secure just because it has a different name, without verifying actual VLAN isolation.',
      'Forgetting that a wireless LAN controller\'s main value is centralized management, not just extra range.',
    ],
    keyTerms: [
      { term: 'SSID', def: 'Service Set Identifier — the human-readable name of a Wi-Fi network.' },
      { term: 'BSSID', def: 'The MAC address uniquely identifying one specific access point\'s radio.' },
      { term: 'Wireless LAN controller (WLC)', def: 'A device that centrally manages configuration and coordination across many access points.' },
      { term: 'Roaming', def: 'The process of a client device moving between access points on the same network without losing connectivity.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the key difference between an SSID and a BSSID?',
        options: [
          'They are the same thing with different names.',
          'The SSID is the shared network name; the BSSID is the unique MAC address of one specific access point\'s radio.',
          'The BSSID is visible to users; the SSID is hidden.',
          'The SSID only applies to guest networks.',
        ],
        correct: 1,
        explanation: 'Multiple APs can share one SSID (name) while each has its own unique BSSID (MAC address).',
      },
      {
        prompt: 'What is the primary benefit of a wireless LAN controller managing multiple access points?',
        options: [
          'It eliminates the need for any access points at all.',
          'It centrally manages configuration, channels, and power across all access points instead of configuring each individually.',
          'It only works with a single access point.',
          'It replaces the need for SSIDs entirely.',
        ],
        correct: 1,
        explanation: 'Centralized management is the core value of a wireless LAN controller across many access points.',
      },
      {
        prompt: 'What does roaming allow a wireless client to do?',
        options: [
          'Connect to two different SSIDs simultaneously.',
          'Move between access points on the same network without losing connectivity.',
          'Bypass wireless encryption entirely.',
          'Automatically join any open network nearby.',
        ],
        correct: 1,
        explanation: 'Roaming lets a device hand off between access points seamlessly as it moves through a coverage area.',
      },
    ],
    miniScenario: {
      prompt: 'A user walking from one end of an office to the other experiences a brief Wi-Fi call interruption exactly at the midpoint between two access points.',
      task: 'Explain what is likely happening (in terms of roaming) and one setting that could improve the experience.',
    },
    recap:
      'SSID is the shared, visible network name; BSSID is the unique MAC address of each access point radio. Wireless LAN controllers centrally manage many access points. Roaming lets devices move between access points on the same network seamlessly.',
    classroomAnswer:
      '"Same SSID, different BSSID per access point — that\'s what makes a whole building feel like one seamless Wi-Fi network instead of dozens of separate ones."',
  };

  NetReady.LESSONS['9-3'] = {
    id: '9-3',
    moduleId: 9,
    slug: 'wireless-encryption-and-authentication',
    title: 'Wireless Encryption and Authentication: WPA2, WPA3, and Enterprise Auth',
    estMinutes: 13,
    outcomes: [
      'Explain the difference between WPA2 and WPA3.',
      'Differentiate personal (PSK) mode from enterprise (802.1X) authentication.',
      'Explain why WPA3 is considered more resistant to offline password-cracking attacks.',
    ],
    whyItMatters:
      'Wireless security misconfiguration is one of the most common real-world entry points for attackers — knowing exactly what protection each Wi-Fi security standard actually provides is genuinely protective knowledge.',
    simpleEnglish:
      'WPA2 (Wi-Fi Protected Access 2) has been the long-standing standard for wireless encryption, using AES encryption. WPA3 is the newer standard, adding stronger encryption and, critically, protection against offline password-guessing attacks through a more secure handshake (SAE, replacing WPA2\'s vulnerable 4-way handshake). Both come in two authentication modes: personal (PSK, a single shared password for everyone) and enterprise (802.1X, requiring individual username/password or certificate-based login, typically validated by a RADIUS server).',
    taglish:
      'Ang WPA2 (Wi-Fi Protected Access 2) ay matagal nang standard sa wireless encryption, gumagamit ng AES encryption. Ang WPA3 naman ang mas bagong standard, may mas malakas na encryption at, ang pinaka-importante, may proteksyon laban sa "offline password-guessing" na atake sa pamamagitan ng mas secure na handshake (SAE), kapalit ng dating vulnerable na 4-way handshake ng WPA2. Pareho silang may dalawang mode ng authentication: personal (PSK, iisang shared password para sa lahat) at enterprise (802.1X, kailangan ng sariling username/password o certificate bawat isa, karaniwang bini-validate ng RADIUS server).',
    analogy: {
      title: 'Iisang susi sa buong bahay vs. sariling ID kada tao',
      text:
        'Isipin mo ang personal mode (PSK) parang iisang susi na ibinibigay mo sa LAHAT ng bisita ng bahay mo — kapag nalaman ng isang tao ang susi, puwede na siyang pumasok, at kung gusto mong bawiin ang access ng isang tao, kailangan mong palitan ang susi para sa LAHAT. Ang enterprise mode (802.1X) naman parang bawat bisita may sariling ID card at PIN — kung gusto mong bawiin ang access ng isang tao, i-cancel mo lang ang ID niya, hindi na kailangang palitan ang buong sistema. Ang WPA3 naman parang pinabuting lock system na mas mahirap ma-forcefully buksan kahit subukan ng magnanakaw nang paulit-ulit sa labas ng bahay (offline attack).',
    },
    howItWorks: [
      'WPA2 uses AES encryption with a 4-way handshake to establish a session key; this handshake has known vulnerabilities that allow attackers to capture it and attempt offline password guessing.',
      'WPA3 replaces the vulnerable handshake with SAE (Simultaneous Authentication of Equals), which resists offline dictionary/brute-force attacks even against a captured handshake.',
      'Personal mode (WPA2-PSK / WPA3-PSK, sometimes called "WPA3-SAE") uses one shared passphrase for all users — simple to deploy, common in homes and small businesses.',
      'Enterprise mode (WPA2/WPA3-Enterprise, using 802.1X) requires individual authentication, typically validated against a RADIUS server, allowing centralized user management and easy per-user revocation.',
      'WPA3 also mandates stronger baseline encryption and adds protections like forward secrecy, meaning even a compromised password later cannot decrypt previously captured traffic.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th></th><th>Personal (PSK)</th><th>Enterprise (802.1X)</th></tr></thead>
        <tbody>
          <tr><td>Authentication</td><td>One shared passphrase for everyone</td><td>Individual username/password or certificate</td></tr>
          <tr><td>Validated by</td><td>The access point itself</td><td>A RADIUS server</td></tr>
          <tr><td>Revoking one user</td><td>Requires changing the password for everyone</td><td>Simply disable that one account</td></tr>
          <tr><td>Best for</td><td>Home, small business</td><td>Organizations needing per-user control</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A university deploys WPA2/WPA3-Enterprise so each student logs in with their own university credentials — when a student graduates, IT simply disables that one account instead of having to change the Wi-Fi password for the entire campus.',
    proTips: [
      'When a scenario mentions "each user needs their own login for Wi-Fi tied to their identity," think enterprise/802.1X immediately, not personal/PSK.',
      'WPA3\'s resistance to offline attacks is its single most important practical improvement — even if an attacker captures the handshake, brute-forcing it is dramatically harder than with WPA2.',
    ],
    examAlert:
      'Expect the exam to test the personal-vs-enterprise distinction directly, and to test WPA3\'s specific improvement (SAE, offline-attack resistance) over WPA2 — memorize both pairings.',
    beginnerMistakes: [
      'Assuming WPA2 is now insecure for all purposes — it remains reasonably secure for many uses, but WPA3 is the recommended modern standard where supported.',
      'Confusing "personal" and "enterprise" with the STRENGTH of encryption rather than the AUTHENTICATION model — both can use strong encryption; the difference is how users log in.',
      'Forgetting that enterprise mode requires a RADIUS server as supporting infrastructure, unlike the simpler personal mode.',
    ],
    keyTerms: [
      { term: 'WPA2', def: 'Wi-Fi Protected Access 2 — a long-standing wireless security standard using AES encryption.' },
      { term: 'WPA3', def: 'The newer wireless security standard adding SAE and stronger resistance to offline password attacks.' },
      { term: 'PSK (Personal mode)', def: 'A Wi-Fi authentication mode using one shared passphrase for all users.' },
      { term: '802.1X (Enterprise mode)', def: 'A Wi-Fi authentication mode requiring individual credentials, validated by a RADIUS server.' },
      { term: 'SAE', def: 'Simultaneous Authentication of Equals — WPA3\'s more secure handshake, resistant to offline attacks.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is WPA3\'s key security improvement over WPA2?',
        options: [
          'It removes the need for any password.',
          'It replaces the vulnerable 4-way handshake with SAE, resisting offline password-guessing attacks.',
          'It only works on 6 GHz networks.',
          'It eliminates the need for encryption entirely.',
        ],
        correct: 1,
        explanation: 'SAE is WPA3\'s core improvement, specifically closing the offline attack vulnerability present in WPA2\'s handshake.',
      },
      {
        prompt: 'What is the main advantage of enterprise (802.1X) mode over personal (PSK) mode?',
        options: [
          'It uses weaker encryption for compatibility.',
          'It allows individual authentication and easy per-user revocation, typically via a RADIUS server.',
          'It requires no infrastructure at all.',
          'It only works on wired networks.',
        ],
        correct: 1,
        explanation: 'Enterprise mode enables per-user accounts, so revoking one person\'s access does not require changing everyone\'s password.',
      },
      {
        prompt: 'In WPA2/WPA3-Enterprise, what typically validates each user\'s individual credentials?',
        options: ['A single shared passphrase', 'A RADIUS server', 'The client device itself, with no server involved', 'DNS'],
        correct: 1,
        explanation: 'Enterprise mode relies on a RADIUS server (or similar AAA service) to validate individual user credentials.',
      },
    ],
    miniScenario: {
      prompt: 'A company wants each employee to log into Wi-Fi with their own company username and password, and wants to instantly cut off Wi-Fi access for anyone who leaves the company.',
      task: 'Recommend personal or enterprise mode for this requirement, and explain why.',
    },
    recap:
      'WPA2 uses AES with a handshake vulnerable to offline attacks; WPA3 fixes this with SAE. Personal mode (PSK) uses one shared password for everyone; enterprise mode (802.1X) requires individual credentials validated by a RADIUS server, enabling per-user control.',
    classroomAnswer:
      '"WPA3 over WPA2 is really about closing the offline-attack door — and personal versus enterprise is really about whether I need per-user control or just a simple shared password."',
  };

  NetReady.LESSONS['9-4'] = {
    id: '9-4',
    moduleId: 9,
    slug: 'common-wireless-attacks',
    title: 'Common Wireless Attacks and Defenses',
    estMinutes: 12,
    outcomes: [
      'Identify evil twin, rogue AP, and deauthentication attacks.',
      'Explain why open/rogue access points are dangerous even without cracking any encryption.',
      'Identify defenses against common wireless attacks.',
    ],
    whyItMatters:
      'Wireless attacks do not require physical access to your building — an attacker can sit in a parking lot and target your network, making these defenses genuinely front-line security work.',
    simpleEnglish:
      'A rogue access point is any unauthorized AP connected to the network, whether placed maliciously or just by an unaware employee, creating an unmonitored entry point. An evil twin is a malicious access point specifically impersonating a legitimate network\'s SSID to trick users into connecting, allowing the attacker to intercept their traffic. A deauthentication (deauth) attack forcibly disconnects clients from a legitimate access point, often used to force them toward an evil twin or to capture a fresh handshake for offline cracking. Defenses include wireless intrusion prevention systems (WIPS) to detect rogue devices, 802.1X authentication, and educating users to verify network identity.',
    taglish:
      'Ang rogue access point ay kahit anong unauthorized na AP na nakakonekta sa network, sinadya man ito ng attacker o hindi lang alam ng isang empleyado — nagiging hindi monitored na entry point ito. Ang evil twin naman ay isang maliciously na access point na nagpapanggap gamit ang SSID ng lehitimong network, para linlangin ang mga user na kumonekta rito — sa ganoon, makikita ng attacker ang kanilang traffic. Ang deauthentication (deauth) attack ay pilit na pinuputol ang koneksyon ng mga client sa lehitimong access point — madalas ginagamit para pilitin silang kumonekta sa evil twin, o para makakuha ng bagong handshake na puwedeng i-crack offline. Ang mga depensa dito ay kinabibilangan ng wireless intrusion prevention system (WIPS) na nakakakita ng mga rogue device, 802.1X authentication, at pagturo sa mga user na tiyakin ang tunay na identity ng network bago kumonekta.',
    analogy: {
      title: 'Peke at tunay na tindahan na magkaparehong signage',
      text:
        'Isipin mo ang evil twin parang may nagtayo ng peke na tindahan na eksaktong kaparehong signage ng tunay na paborito mong tindahan, tapos inilagay nila ito sa tapat mismo ng tunay na tindahan. Kung hindi ka mag-iingat, baka doon ka pumasok sa maling tindahan — at doon mo naibigay lahat ng detalye mo. Ang deauth attack naman parang may taong sadyang nagsasara ng pinto ng tunay na tindahan sa harap mo, pinipilit kang pumasok na lang sa katabing peke.',
    },
    howItWorks: [
      'Rogue access points bypass an organization\'s normal security controls entirely, since they are often plugged directly into the internal wired network by whoever set them up.',
      'Evil twin attacks broadcast the same SSID as a legitimate network, often with a stronger signal, hoping victim devices auto-connect or a user manually picks the fake option.',
      'Deauthentication attacks exploit the fact that 802.11 management frames are historically unauthenticated, allowing an attacker to send forged disconnect frames to victims.',
      'Wireless Intrusion Prevention Systems (WIPS) continuously scan for unauthorized SSIDs/BSSIDs and unusual RF behavior, alerting or automatically containing detected rogue devices.',
      '802.1X enterprise authentication and mutual certificate validation make it much harder for an evil twin to successfully impersonate a legitimate network, since the client verifies the network\'s identity too, not just the reverse.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Attack</th><th>What It Does</th><th>Key Defense</th></tr></thead>
        <tbody>
          <tr><td>Rogue AP</td><td>Unauthorized AP creates an unmonitored entry point</td><td>WIPS detection, port security, physical audits</td></tr>
          <tr><td>Evil twin</td><td>Impersonates a legitimate SSID to intercept traffic</td><td>802.1X/certificate-based mutual authentication, user awareness</td></tr>
          <tr><td>Deauthentication</td><td>Forcibly disconnects clients from the real AP</td><td>802.11w (management frame protection), WIPS</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'An attacker in a coffee shop\'s parking lot sets up an evil twin named exactly like the shop\'s real "CafeGuestWiFi," then deauthenticates real customers off the legitimate network so their devices auto-reconnect to the attacker\'s fake one instead.',
    proTips: [
      'Regular physical walk-throughs looking for unexpected hardware plugged into wall jacks remain a surprisingly effective, low-tech defense against rogue APs.',
      'Enabling 802.11w (Management Frame Protection) specifically hardens a network against deauthentication-style attacks.',
    ],
    examAlert:
      'Expect the exam to describe attack behavior (a fake network with the same name, forced disconnects) and ask you to name the specific attack — practice recognizing these from description, not just definition.',
    beginnerMistakes: [
      'Assuming an evil twin requires cracking any encryption — it works purely through impersonation and deception, not by breaking a security protocol.',
      'Confusing a rogue AP (any unauthorized AP, possibly accidental) with an evil twin (a deliberately impersonating malicious AP) — related but distinct concepts.',
      'Forgetting that deauth attacks exploit a structural weakness in older 802.11 management frames, not a password weakness.',
    ],
    keyTerms: [
      { term: 'Rogue access point', def: 'Any unauthorized access point connected to a network, whether malicious or accidental.' },
      { term: 'Evil twin', def: 'A malicious access point impersonating a legitimate network\'s SSID to intercept victim traffic.' },
      { term: 'Deauthentication attack', def: 'An attack that forcibly disconnects wireless clients from a legitimate access point.' },
      { term: 'WIPS', def: 'Wireless Intrusion Prevention System — detects and can respond to unauthorized wireless activity.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What makes an evil twin attack effective?',
        options: [
          'It cracks WPA3 encryption directly.',
          'It impersonates a legitimate network\'s SSID, tricking users into connecting to the attacker instead.',
          'It physically damages the real access point.',
          'It only works against wired networks.',
        ],
        correct: 1,
        explanation: 'Evil twin attacks rely on deception, not cracking encryption — victims simply connect to the wrong (attacker-controlled) network.',
      },
      {
        prompt: 'What does a deauthentication attack exploit?',
        options: [
          'A weak Wi-Fi password.',
          'The historical lack of authentication on 802.11 management frames, allowing forged disconnect messages.',
          'A flaw in DNS resolution.',
          'A vulnerability only present in wired Ethernet.',
        ],
        correct: 1,
        explanation: 'Deauth attacks exploit unauthenticated management frames to forcibly disconnect legitimate clients.',
      },
      {
        prompt: 'What is a rogue access point?',
        options: [
          'Any access point using WPA3 encryption.',
          'Any unauthorized access point connected to the network, whether malicious or simply unapproved.',
          'An access point located outdoors.',
          'A backup access point used for failover.',
        ],
        correct: 1,
        explanation: 'Rogue APs are simply unauthorized, whether placed with malicious intent or just without approval.',
      },
    ],
    miniScenario: {
      prompt: 'Employees report that their Wi-Fi keeps disconnecting, and afterward their devices sometimes show a second network with the exact same name as the office Wi-Fi.',
      task: 'Identify the two attack techniques likely being combined here, and explain how they work together.',
    },
    recap:
      'Rogue APs are any unauthorized access point; evil twins deliberately impersonate a legitimate SSID to intercept traffic; deauthentication attacks forcibly disconnect clients, often to push them toward an evil twin. WIPS, 802.1X, and 802.11w are key defenses.',
    classroomAnswer:
      '"A fake network with the same name, and everyone getting kicked off the real one at the same time — that\'s an evil twin and a deauth attack working together, and the fix is mutual authentication plus a WIPS watching for it."',
  };

  NetReady.LESSONS['9-5'] = {
    id: '9-5',
    moduleId: 9,
    slug: 'site-surveys-heat-maps-restaurant-case-study',
    title: 'Site Surveys, Heat Maps, and AP Placement: A Restaurant Wi-Fi Case Study',
    estMinutes: 13,
    outcomes: [
      'Explain the purpose of a wireless site survey and heat map.',
      'Identify factors that affect access point placement decisions.',
      'Apply these concepts to a realistic capacity-and-coverage planning scenario.',
    ],
    whyItMatters:
      'Good Wi-Fi is invisible; bad Wi-Fi is the first thing every customer or employee complains about — proper planning up front prevents nearly all of the most common wireless complaints.',
    simpleEnglish:
      'A wireless site survey physically measures signal strength, interference, and coverage throughout a space before or after deploying access points. The results are often visualized as a heat map, showing signal strength as color gradients across a floor plan. AP placement decisions balance coverage (reaching every area), capacity (supporting enough simultaneous devices), and interference (avoiding physical obstructions and channel conflicts). A busy restaurant needs to plan for both guest Wi-Fi capacity and coverage, often using a captive portal (a login/terms page guests must accept) and bandwidth limits to keep the network usable for everyone.',
    taglish:
      'Ang wireless site survey ay pisikal na pagsukat ng lakas ng signal, interference, at coverage sa buong lugar bago o pagkatapos mag-deploy ng mga access point. Ang resulta ay madalas ipinapakita bilang heat map — parang mapa na may kulay depende sa lakas ng signal sa bawat parte ng floor plan. Ang desisyon sa paglagay ng AP ay balanse sa pagitan ng coverage (maabot ang buong lugar), capacity (kayang suportahan ang maraming device nang sabay-sabay), at interference (iwasan ang mga pisikal na hadlang at channel conflicts). Ang isang busy na restaurant ay kailangang magplano para sa parehong guest Wi-Fi capacity at coverage — madalas gumagamit ng captive portal (isang login o terms page na kailangang tanggapin ng bisita) at mga bandwidth limit para manatiling magamit ang network ng lahat.',
    analogy: {
      title: 'Pagmamapa ng signal parang pagmamapa ng ulan',
      text:
        'Isipin mo ang heat map parang weather map na nagpapakita ng ulan — malakas na kulay (halimbawa pula) kung saan malakas ang signal, unti-unting kumukupas papuntang asul o walang kulay kung saan mahina o wala nang signal. Sa pagplano ng restaurant Wi-Fi, hindi lang basta "abot ba ang signal" ang tanong — kasama rin dito kung "kaya ba nitong suportahan ang 50 customer na sabay-sabay na naka-connect tuwing lunch rush," kaya kailangan isipin pareho ang coverage AT capacity.',
    },
    howItWorks: [
      'A pre-deployment (predictive) survey uses software modeling to estimate AP placement before installation; a post-deployment (validation) survey physically walks the space with real equipment to confirm actual performance.',
      'Heat maps reveal coverage gaps (dead zones), areas of excessive overlap (wasted capacity/interference), and unexpectedly weak zones caused by walls, metal, or other obstructions.',
      'Capacity planning considers how many devices will realistically connect per AP in the busiest realistic scenario, not just raw coverage area.',
      'A restaurant\'s guest Wi-Fi case study must balance: enough APs for full dining area coverage, enough capacity for peak occupancy (e.g., a full house during lunch rush), a captive portal for guest terms/branding, and bandwidth limits so guest streaming does not degrade point-of-sale or staff systems.',
      'Physical obstructions (kitchen equipment, walk-in freezers, thick walls) commonly create unexpected dead zones that only a real site survey reveals, not just a floor plan estimate.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Restaurant floor plan heat map showing strong signal near access points fading to weak signal near the kitchen and storage areas">
        <p class="diagram-caption">Dining area: strong coverage near APs &rarr; fading near kitchen/storage (metal equipment, thick walls)</p>
        <ul class="step-list">
          <li>Guest network: separate SSID/VLAN, captive portal, bandwidth-limited</li>
          <li>POS/staff network: separate SSID/VLAN, prioritized bandwidth</li>
          <li>AP placement: positioned for peak lunch/dinner occupancy, not just empty-room coverage</li>
        </ul>
      </div>`,
    },
    realWorldExample:
      'A restaurant that only tested Wi-Fi coverage in an empty dining room at 2pm might discover during a packed Friday dinner rush that so many connected phones overwhelm a single access point\'s capacity — even though "coverage" was never the actual problem.',
    proTips: [
      'Always plan and test Wi-Fi capacity under realistic peak-occupancy conditions, not just empty-room coverage — capacity problems and coverage problems have completely different symptoms and fixes.',
      'A captive portal serves both a business purpose (branding, marketing opt-in) and a security purpose (requiring acceptance of an acceptable use policy) at the same time.',
    ],
    examAlert:
      'Expect scenario questions where the "obvious" fix (add more coverage) is wrong because the real problem is capacity, or vice versa — read the scenario carefully to distinguish the two.',
    beginnerMistakes: [
      'Testing Wi-Fi only when the space is empty, missing capacity problems that only appear under real peak load.',
      'Assuming a heat map showing strong signal automatically means the network can handle enough simultaneous devices — coverage and capacity are different problems.',
      'Forgetting that a captive portal, while a login/marketing tool, also serves a genuine security and legal purpose.',
    ],
    keyTerms: [
      { term: 'Site survey', def: 'A physical assessment of wireless signal strength, interference, and coverage across a space.' },
      { term: 'Heat map', def: 'A visual representation of wireless signal strength across a floor plan, using color gradients.' },
      { term: 'Captive portal', def: 'A login or terms-acceptance web page a guest must interact with before gaining network access.' },
      { term: 'Capacity planning', def: 'Designing a wireless network to support the expected number of simultaneous connected devices, not just physical coverage.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the main purpose of a wireless heat map?',
        options: [
          'To show the physical temperature of access points.',
          'To visually represent signal strength across a floor plan, revealing coverage gaps and overlap.',
          'To display which users are currently connected.',
          'To measure internet service provider billing usage.',
        ],
        correct: 1,
        explanation: 'Heat maps visualize signal strength geographically, helping identify dead zones and excessive overlap.',
      },
      {
        prompt: 'A restaurant\'s Wi-Fi works fine when empty but becomes unusable during a packed dinner rush. What kind of problem is this most likely?',
        options: [
          'A coverage problem requiring more access points spread further apart.',
          'A capacity problem, since too many simultaneous devices are competing for the same access point resources.',
          'An encryption problem.',
          'A DNS problem.',
        ],
        correct: 1,
        explanation: 'Working fine when empty but failing under load is the classic signature of a capacity issue, not a coverage issue.',
      },
      {
        prompt: 'What dual purpose does a captive portal typically serve?',
        options: [
          'It only serves a marketing/branding purpose with no security value.',
          'It provides both a marketing/branding opportunity and a security/legal acceptable-use step before granting access.',
          'It exclusively blocks all guest traffic permanently.',
          'It replaces the need for any Wi-Fi encryption.',
        ],
        correct: 1,
        explanation: 'Captive portals commonly combine business (branding, guest info collection) and security (AUP acceptance) purposes.',
      },
    ],
    miniScenario: {
      prompt: 'A restaurant owner says, "We tested the Wi-Fi last week when we were closed and it worked perfectly everywhere — but tonight, packed with customers, everyone is complaining."',
      task: 'Explain why the earlier test missed this problem, and what kind of testing would have caught it.',
    },
    recap:
      'Site surveys and heat maps reveal real-world coverage and interference. AP placement must balance coverage, capacity, and interference. A restaurant Wi-Fi deployment needs realistic peak-occupancy capacity planning alongside coverage, plus tools like captive portals and bandwidth limits for guest network management.',
    classroomAnswer:
      '"Empty-room testing only proves coverage — the real test is whether the network survives a packed Friday night, and that\'s a capacity question, not a coverage question."',
  };

  NetReady.LESSONS['9-6'] = {
    id: '9-6',
    moduleId: 9,
    slug: 'cellular-and-satellite-media',
    title: 'Cellular and Satellite: Wireless WAN Media',
    estMinutes: 10,
    outcomes: [
      'Explain how cellular data generations differ in general capability.',
      'Explain the tradeoffs of satellite internet, including latency.',
      'Identify realistic use cases for cellular and satellite connectivity.',
    ],
    whyItMatters:
      'Not every location can run a cable — cellular and satellite are the connectivity options that make remote work sites, mobile units, and rural locations possible at all.',
    simpleEnglish:
      'Cellular networks (4G LTE, 5G) provide wireless WAN connectivity using mobile carrier infrastructure, with 5G offering significantly higher speeds and lower latency than 4G, especially in dense urban deployments. Satellite internet connects to orbiting satellites instead of ground infrastructure, making it valuable for remote or rural locations with no other options, but traditionally suffering from higher latency due to the long physical distance signals must travel — though newer low-earth-orbit (LEO) satellite services have significantly reduced this latency compared to older geostationary systems.',
    taglish:
      'Ang cellular network (4G LTE, 5G) ay nagbibigay ng wireless WAN connectivity gamit ang imprastraktura ng mobile carrier — mas mabilis at mas mababa ang latency ng 5G kumpara sa 4G, lalo na sa siksik na lungsod. Ang satellite internet naman ay direktang kumokonekta sa mga satellite na umaandar sa kalawakan sa halip na ground infrastructure — mahalaga ito para sa malalayong lugar na walang ibang option, pero tradisyunal na mas mataas ang latency nito dahil sa napakalayong distansyang dinadaanan ng signal. Ang mga bagong low-earth-orbit (LEO) satellite service naman ay malaki ang naitulong sa pagbawas ng latency na ito kumpara sa mas lumang geostationary system.',
    analogy: {
      title: 'Malapit na relay tower vs. sobrang layong satellite sa kalawakan',
      text:
        'Isipin mo ang cellular parang pakikipag-usap sa isang taong nasa kabilang kalye lang — mabilis ang tugon. Ang tradisyunal na satellite (geostationary) naman parang pakikipag-usap sa isang taong nasa buwan — kahit gaano pa kabilis ang signal, matagal pa rin dahil sa layo ng biyahe. Ang mga bagong LEO satellite naman parang pakikipag-usap sa isang taong mas malapit lang sa itaas ng bahay mo kesa sa buwan — mas mabilis kumpara sa lumang paraan, kahit hindi pa rin kasing bilis ng cellular o wired na koneksyon.',
    },
    howItWorks: [
      '4G LTE provides widespread mobile broadband coverage suitable for most remote-site and backup connectivity needs.',
      '5G offers substantially higher throughput and lower latency, particularly valuable for dense urban areas and emerging use cases like fixed wireless access to homes/businesses.',
      'Traditional geostationary satellites orbit at extremely high altitude, causing significant round-trip latency (often 500+ ms), which noticeably impacts real-time applications like video calls or gaming.',
      'Newer LEO satellite constellations orbit much closer to Earth, dramatically cutting latency (often to tens of milliseconds) while still providing coverage to areas with no terrestrial infrastructure.',
      'Both cellular and satellite are commonly used as primary connectivity for remote/mobile sites, or as backup/failover links for sites that otherwise rely on wired WAN connections.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Technology</th><th>Typical Latency</th><th>Best Use Case</th></tr></thead>
        <tbody>
          <tr><td>4G LTE</td><td>Low-medium</td><td>General mobile/remote connectivity, backup link</td></tr>
          <tr><td>5G</td><td>Low</td><td>High-speed mobile/fixed wireless, dense urban areas</td></tr>
          <tr><td>Geostationary satellite</td><td>Very high (500+ ms)</td><td>Extremely remote areas, non-real-time traffic</td></tr>
          <tr><td>LEO satellite</td><td>Low-medium</td><td>Remote areas needing near-broadband experience</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A construction company sets up temporary site offices with 5G cellular routers for fast deployment without waiting for a wired internet installation, while a remote research station in Antarctica relies on LEO satellite service since no cellular towers exist anywhere nearby.',
    proTips: [
      'When a scenario emphasizes "extremely remote, no infrastructure at all," think satellite; when it emphasizes "temporary or mobile site with decent existing cell coverage," think cellular.',
      'Remember that latency, not just raw speed, is what makes traditional geostationary satellite a poor fit for real-time applications like video calls.',
    ],
    examAlert:
      'The exam may test why satellite internet has historically had high latency (physical distance to orbit) and how LEO constellations change that tradeoff — know the "why," not just the label.',
    beginnerMistakes: [
      'Assuming all satellite internet has the same high latency — modern LEO services have substantially closed this gap compared to older geostationary systems.',
      'Assuming cellular is only a "backup" option — 5G fixed wireless is increasingly used as a legitimate primary connection in some markets.',
      'Forgetting that both technologies are commonly used as automatic failover links for sites with a primary wired WAN connection.',
    ],
    keyTerms: [
      { term: '5G', def: 'The current generation of cellular technology, offering higher speed and lower latency than 4G LTE.' },
      { term: 'Geostationary satellite', def: 'A satellite orbiting at very high altitude, causing significant latency due to signal travel distance.' },
      { term: 'LEO (Low Earth Orbit) satellite', def: 'A satellite orbiting much closer to Earth, offering significantly lower latency than geostationary systems.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Why has traditional (geostationary) satellite internet historically suffered from high latency?',
        options: [
          'Satellite signals are inherently slower than radio waves.',
          'The very high orbital altitude means the signal must travel a much longer physical distance round-trip.',
          'Satellite internet does not use encryption.',
          'Satellite dishes are always misaligned by default.',
        ],
        correct: 1,
        explanation: 'The physical distance to a geostationary orbit is the direct cause of its higher round-trip latency.',
      },
      {
        prompt: 'What is a key advantage of LEO satellite constellations over traditional geostationary satellite service?',
        options: [
          'They eliminate the need for any ground equipment.',
          'They orbit much closer to Earth, significantly reducing latency.',
          'They only work in extremely dense urban areas.',
          'They are always the cheapest option available.',
        ],
        correct: 1,
        explanation: 'LEO satellites\' lower orbital altitude directly reduces round-trip signal travel time.',
      },
      {
        prompt: 'A construction site needs temporary internet access quickly, in an area with existing cell tower coverage. What is a practical choice?',
        options: ['Geostationary satellite', 'A cellular (4G/5G) router', 'A new leased line installation', 'MPLS'],
        correct: 1,
        explanation: 'Cellular connectivity offers fast, flexible deployment where cell coverage already exists, without new fixed infrastructure.',
      },
    ],
    miniScenario: {
      prompt: 'A remote scientific research station has no cellular coverage and no wired infrastructure of any kind nearby, but needs reasonably responsive internet access for daily communication.',
      task: 'Recommend a connectivity option and explain why a modern choice would outperform an older approach here.',
    },
    recap:
      'Cellular (4G/5G) provides flexible wireless WAN connectivity using mobile carrier infrastructure. Satellite serves areas with no terrestrial options at all; traditional geostationary satellite suffers high latency due to orbital distance, while modern LEO constellations dramatically reduce that latency.',
    classroomAnswer:
      '"If there\'s decent cell coverage, cellular is usually the fast, practical answer — satellite is for when there\'s truly nothing else, and these days LEO makes that option far less painful than it used to be."',
  };

  NetReady.LESSONS['9-7'] = {
    id: '9-7',
    moduleId: 9,
    slug: 'antenna-types-and-installation',
    title: 'Antenna Types and Wireless Installation Considerations',
    estMinutes: 11,
    outcomes: [
      'Differentiate an omnidirectional antenna from a directional antenna by coverage pattern and use case.',
      'Identify when a site would use a Yagi, patch, or parabolic dish antenna.',
      'Explain why antenna polarization and placement affect real-world wireless performance.',
    ],
    whyItMatters:
      'Picking the wrong antenna shape for the job is a classic real-world (and exam) mistake — a perfectly good access point still performs badly if its antenna pattern does not match the space it needs to cover.',
    simpleEnglish:
      'An omnidirectional antenna radiates signal roughly equally in every horizontal direction, like a light bulb — ideal for covering an open area such as one floor or one room from a central point. A directional antenna instead focuses signal energy into a narrower beam aimed one way, trading width of coverage for extended strength and range in that specific direction. Common directional types include the Yagi antenna (moderate gain, often used for point-to-point links over a moderate distance), the patch/panel antenna (wall-mounted, covering a specific area like one side of a warehouse aisle), and the parabolic dish antenna (very high gain, an extremely narrow beam, used for long-distance point-to-point bridge links such as connecting two separate buildings). Polarization describes the physical orientation of the radio waves an antenna sends and receives; the transmitting and receiving antenna generally need matching polarization (both vertical or both horizontal) for the strongest possible signal — a mismatch can significantly weaken it. Mounting height, obstructions (metal, concrete, thick walls, water pipes), and spacing between access points all affect real-world coverage regardless of which antenna type is used.',
    taglish:
      'Ang omnidirectional antenna ay nagpapakalat ng signal nang pantay-pantay sa lahat ng direksyon nang horizontal, parang bulb sa gitna ng kwarto — perfect para sa open area tulad ng isang floor o kwarto mula sa gitnang punto. Ang directional antenna naman ay tumutok ng signal papunta sa isang makitid na direksyon — ipinagpalit niya ang lawak ng saklaw para sa mas malakas at mas malayong abot sa direksyong iyon. Ang common na directional types ay ang Yagi antenna (katamtamang gain, karaniwang gamit para sa point-to-point link sa katamtamang distansya), ang patch/panel antenna (naka-mount sa dingding, sinasakop ang specific na area tulad ng isang gilid ng warehouse aisle), at ang parabolic dish antenna (sobrang taas ang gain, sobrang makitid ang beam, gamit para sa malayuang point-to-point bridge link tulad ng pagkonekta ng dalawang hiwalay na gusali). Ang polarization ay naglalarawan ng pisikal na oryentasyon ng radio wave na ipinapadala at tinatanggap ng isang antenna — kailangan magkatugma ang polarization ng transmitting at receiving antenna (parehong vertical o parehong horizontal) para sa pinakamalakas na signal — kapag hindi nagtutugma, malaki ang pagbaba ng signal strength. Ang taas ng pag-mount, mga hadlang (metal, semento, makapal na dingding, tubo ng tubig), at agwat sa pagitan ng mga access point ay lahat nag-aapekto sa aktwal na coverage kahit anong klaseng antenna ang gamit.',
    analogy: {
      title: 'Bulaklak ng ilaw kumpara sa flashlight',
      text:
        'Isipin mo ang omnidirectional antenna parang bulaklak ng ilaw sa gitna ng kwarto — umiilaw sa lahat ng direksyon nang pantay, pero hindi masyadong malayo ang abot sa kahit anong direksyon. Ang directional antenna naman parang flashlight — tumutok ang liwanag sa isang direksyon lang, kaya mas malayo ang inaabot papunta roon, pero madilim na sa mga gilid. Ang Yagi antenna parang katamtamang lakas ng flashlight na gamit sa medium range. Ang parabolic dish antenna naman parang searchlight ng barko — sobrang lakas at sobrang makitid, gamit kung talagang malayo ang kabilang dulo (parang pagkonekta ng dalawang gusali sa kabilang tabi ng kalsada). Ang polarization ay parang dalawang taong naglalaro ng jumping rope — kung magkaiba ang direksyon ng paghawak nila sa lubid, hindi magkakasabay ang galaw; kailangan magkatugma ang "hawak" ng dalawang antenna para sumabay ang signal.',
    },
    howItWorks: [
      'Omnidirectional antennas are the default choice for general indoor coverage from a central ceiling or wall mount, covering all directions but with limited range in any single one.',
      'Directional antennas concentrate the same total radio energy into a narrower beam, which is why they achieve greater range or strength in that one direction at the cost of coverage elsewhere.',
      'A Yagi antenna is a moderate-gain directional antenna commonly used for point-to-point wireless bridge links or focused coverage down a hallway.',
      'A patch/panel antenna mounts flat against a wall and covers a defined sector, useful for directing coverage into one specific area like one aisle of a warehouse instead of wasting signal into an empty wall behind it.',
      'A parabolic dish antenna achieves the highest gain and narrowest beam of the common types, making it the standard choice for long-distance, line-of-sight point-to-point links, such as bridging two buildings across a parking lot or a highway.',
      'Antenna polarization (vertical or horizontal) must be matched between communicating antennas for optimal signal; a 90-degree mismatch can cause a severe, sometimes near-total, signal loss.',
      'Physical placement decisions — mounting height, avoiding metal/concrete obstructions, and proper spacing between access points to avoid both dead zones and excessive overlap — matter as much as antenna type selection itself.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Antenna Type</th><th>Coverage Pattern</th><th>Typical Use Case</th></tr></thead>
        <tbody>
          <tr><td>Omnidirectional</td><td>360° horizontal, all directions</td><td>General indoor coverage from a central point</td></tr>
          <tr><td>Yagi</td><td>Narrow, moderate gain</td><td>Point-to-point link, focused hallway coverage</td></tr>
          <tr><td>Patch / panel</td><td>Sector-focused, wall-mounted</td><td>Covering one defined area, like a warehouse aisle</td></tr>
          <tr><td>Parabolic dish</td><td>Very narrow, very high gain</td><td>Long-distance point-to-point bridge between buildings</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A warehouse mounts patch antennas along one wall to focus coverage down each storage aisle instead of wasting signal into the open ceiling space, while two nearby office buildings are connected by a wireless bridge using a matched pair of parabolic dish antennas aimed directly at each other across the parking lot — a far cheaper solution than trenching fiber between them.',
    proTips: [
      'A fast way to decide: if you need to cover an open area from the middle of it, go omnidirectional; if you need to reach far in one specific direction, go directional.',
      'Always verify polarization matches on both ends of a point-to-point directional link during installation — a subtle mismatch is a common, hard-to-spot cause of a surprisingly weak link that "should" work fine on paper.',
    ],
    examAlert:
      'A frequent exam trap implies a directional antenna simply provides "more coverage" — the correct framing is that it reshapes coverage into a narrower, longer beam, trading width for distance, not increasing total coverage area.',
    beginnerMistakes: [
      'Assuming a directional antenna is simply "better" or "stronger" in every sense, rather than understanding it trades coverage width for range in one direction.',
      'Forgetting antenna polarization entirely when troubleshooting a weak point-to-point link that otherwise looks correctly aligned.',
      'Placing access points without considering obstructions or spacing, then blaming the antenna type for what is actually a placement problem.',
    ],
    keyTerms: [
      { term: 'Omnidirectional antenna', def: 'An antenna that radiates signal roughly equally in all horizontal directions.' },
      { term: 'Directional antenna', def: 'An antenna that focuses signal into a narrower beam in one direction, extending range there at the cost of coverage elsewhere.' },
      { term: 'Yagi antenna', def: 'A moderate-gain directional antenna commonly used for point-to-point links or focused coverage.' },
      { term: 'Parabolic antenna', def: 'A very-high-gain, narrow-beam directional antenna used for long-distance point-to-point bridge links.' },
      { term: 'Polarization', def: 'The physical orientation of an antenna\'s radio waves; matching polarization between antennas is needed for optimal signal.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'When should an omnidirectional antenna be preferred over a directional antenna?',
        options: [
          'When bridging two buildings across a long distance.',
          'When covering an open area, like a single room or floor, from a central point.',
          'When maximum possible range in one narrow direction is the goal.',
          'Omnidirectional antennas are always the better choice in every scenario.',
        ],
        correct: 1,
        explanation: 'Omnidirectional antennas suit general, even coverage of an open area from a central mounting point.',
      },
      {
        prompt: 'Which antenna type is the standard choice for a long-distance, line-of-sight point-to-point link between two buildings?',
        options: ['Omnidirectional', 'Patch/panel', 'Parabolic dish', 'None of these support point-to-point links'],
        correct: 2,
        explanation: 'A parabolic dish provides the highest gain and narrowest beam, ideal for long-distance point-to-point bridges.',
      },
      {
        prompt: 'A point-to-point wireless bridge link performs far worse than expected despite correct alignment and distance. What is a likely overlooked cause?',
        options: [
          'The link is using too much bandwidth.',
          'A mismatch in antenna polarization between the two ends.',
          'The SSID is misconfigured.',
          'The devices are using the wrong VLAN.',
        ],
        correct: 1,
        explanation: 'Mismatched polarization between the transmitting and receiving antennas can severely weaken an otherwise well-aligned link.',
      },
    ],
    miniScenario: {
      prompt: 'A retail warehouse wants strong Wi-Fi coverage focused down each of its long, narrow storage aisles, without wasting signal strength into the empty ceiling space above.',
      task: 'Recommend an antenna type for this installation, and explain why an omnidirectional antenna would be a worse fit here.',
    },
    recap:
      'Omnidirectional antennas cover an open area evenly from a central point; directional antennas (Yagi, patch/panel, parabolic dish) trade coverage width for extended range or focus in one direction. Polarization must match between communicating antennas for optimal signal, and physical placement matters as much as antenna choice itself.',
    classroomAnswer:
      '"Pick the antenna shape that matches the space — wide and even for an open room, narrow and focused for a hallway or a long-distance link — and always double-check polarization before blaming the hardware for a weak point-to-point connection."',
  };
}(window.NetReady));
