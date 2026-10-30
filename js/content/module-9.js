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
  NetReady.LESSONS['9-8'] = {
    id: '9-8',
    moduleId: 9,
    slug: 'wireless-deployment-models-band-steering-regulatory-channels',
    title: 'Wireless Deployment Models, Band Steering, and Regulatory Channels',
    estMinutes: 13,
    outcomes: [
      'Compare autonomous and lightweight (controller-based) access points and when each fits.',
      'Explain band steering and why it improves performance on dual-band networks.',
      'Explain why 802.11h (DFS and transmit power control) matters on 5 GHz channels, and how channel width affects capacity.',
    ],
    whyItMatters:
      'A small office and a 500-seat campus can both have "Wi-Fi," but they are built on completely different deployment models — and the exam expects you to recognize which architecture a scenario is describing, along with the 5 GHz rules that keep radar and Wi-Fi from fighting each other.',
    simpleEnglish:
      'An autonomous access point is a standalone AP that is configured and managed individually — each AP handles its own authentication, encryption settings, and channel choice. A lightweight access point is a simpler AP that is centrally managed by a wireless LAN controller (WLC), which pushes configuration to all APs, coordinates roaming, and manages radio settings across the whole building; the AP and controller communicate through CAPWAP tunnels. Autonomous APs suit a single small location, while lightweight APs suit larger deployments that need consistent policy. Band steering is a technique where a dual-band AP or controller encourages clients that support 5 GHz to connect there instead of the crowded 2.4 GHz band, typically by delaying or withholding 2.4 GHz responses to those clients. 802.11h adds two features to 5 GHz operation: Dynamic Frequency Selection (DFS), which makes an AP vacate a channel when it detects radar signals that share the band, and Transmit Power Control (TPC), which limits transmit power to reduce interference. Channel width also matters: 20 MHz channels are the most interference-resistant and leave more non-overlapping channels available, while 40, 80, and 160 MHz channels are faster but consume more spectrum and leave fewer independent channels to reuse.',
    taglish:
      'Ang autonomous access point ay standalone — bawat AP ay sarili ang nagma-manage ng authentication, encryption, at channel. Ang lightweight access point naman ay simple lang at pinamamahalaan ng isang wireless LAN controller (WLC) na nagpapadala ng config sa lahat ng AP, nagko-coordinate ng roaming, at nagmamanage ng radio settings sa buong gusali; nag-uusap sila sa pamamagitan ng CAPWAP tunnel. Angkop ang autonomous sa isang maliit na lugar, at ang lightweight naman sa mas malalaking deployment na kailangan ng iisang policy. Ang band steering ay technique kung saan hinihikayat ng dual-band AP o controller ang mga client na sumusuporta sa 5 GHz na doon kumonekta sa halip na sa siksik na 2.4 GHz, kadalasan sa pamamagitan ng pag-antala o pagtanggi ng 2.4 GHz response sa mga iyon. Nagdaragdag ang 802.11h ng dalawang feature sa 5 GHz: ang DFS (Dynamic Frequency Selection), na nagpapalipat ng channel kapag may nakitang radar signal na nagshe-share ng band, at ang TPC (Transmit Power Control), na nililimitahan ang transmit power para mabawasan ang interference. Mahalaga rin ang channel width: ang 20 MHz ang pinaka-matatag laban sa interference at may mas maraming non-overlapping channel, habang ang 40, 80, at 160 MHz ay mas mabilis pero kumokonsumo ng mas maraming spectrum at mas kaunting independent channel.',
    analogy: {
      title: 'Sangay ng bangko: bawat sangay na may sariling manager, o isang punong tanggapan na nagdidikta ng lahat',
      text:
        'Isipin mo ang autonomous access point parang isang maliit na sangay ng bangko na may sariling manager — bawat sangay ay nagdedesisyon nang mag-isa kung paano haharapin ang kliyente. Ang lightweight access point at ang controller naman parang punong tanggapan na nagpapadala ng iisang patakaran sa lahat ng sangay, kaya pare-pareho ang serbisyo kahit saan ka pumunta sa loob ng malaking gusali (roaming). Ang band steering parang receptionist na tahimik na nagtuturo sa mga kliyente sa mas malawak at mas maluwag na counter (5 GHz) sa halip na sa siksik na pila (2.4 GHz). At ang 802.11h ay parang patakaran ng bangko na kailangang lumipat ng opisina kapag may paparating na pagsasaayos sa gusali (radar) — at ang channel width naman ay parang laki ng counter: mas malapad ang counter, mas maraming serbisyo ang kaya, pero mas kaunti ang counter na puwede mong ilagay sa iisang palapag nang hindi nagbabanggaan.',
    },
    howItWorks: [
      'Autonomous AP: each unit is configured individually (SSIDs, encryption, channels, authentication) and works on its own — manageable at small scale, but tedious and inconsistent across many APs.',
      'Lightweight AP: the AP handles real-time radio functions while a wireless LAN controller centrally manages configuration, policy, roaming, and RF optimization; the two communicate through CAPWAP tunnels.',
      'Band steering: a dual-band AP or controller nudges capable clients toward 5 GHz (or 6 GHz) by withholding or delaying 2.4 GHz responses, relieving the more crowded 2.4 GHz band.',
      'Non-overlapping channels: 2.4 GHz has only a few truly non-overlapping channels (1, 6, and 11 in common regional plans), while 5 GHz offers many more — which is why dual-band planning leans on 5 GHz for capacity.',
      '802.11h on 5 GHz: Dynamic Frequency Selection (DFS) moves the AP off a channel when radar is detected on that shared band, and Transmit Power Control (TPC) limits power to reduce interference with other systems.',
      'Channel width tradeoff: 20 MHz is the most robust and leaves the most independent channels, while 40, 80, and 160 MHz increase throughput at the cost of spectrum and reuse capacity.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Deployment / Feature</th><th>What It Does</th><th>Best Fit</th></tr></thead>
        <tbody>
          <tr><td>Autonomous AP</td><td>Each AP configured and managed individually</td><td>Small single-site deployment</td></tr>
          <tr><td>Lightweight AP + WLC</td><td>Central controller manages many APs via CAPWAP</td><td>Large, multi-AP or campus deployments</td></tr>
          <tr><td>Band steering</td><td>Pushes capable clients to 5 GHz</td><td>Dual-band networks with crowded 2.4 GHz</td></tr>
          <tr><td>802.11h (DFS + TPC)</td><td>Avoids radar and limits interference on 5 GHz</td><td>5 GHz deployments near radar-using systems</td></tr>
          <tr><td>20 MHz vs. 80 MHz width</td><td>Robustness vs. raw throughput</td><td>Dense areas (20 MHz) vs. open areas (80 MHz)</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A hospital uses lightweight APs managed by one controller so that a clinician walking between floors keeps the same secure network policy and roams cleanly, while the 5 GHz channels run 802.11h so a nearby weather radar cannot knock out the wireless network mid-shift.',
    proTips: [
      'If a scenario mentions many APs needing identical policy and central management, the answer is lightweight APs with a controller — not autonomous APs configured one by one.',
      'Choosing wider channels for speed in a dense office often backfires; neighboring APs end up competing for the same spectrum. Narrower channels frequently perform better in crowded environments.',
    ],
    examAlert:
      'The exam likes to contrast autonomous and lightweight APs by management style (individual vs. controller-based) and asks which feature protects 5 GHz from radar — the answer is DFS, a component of 802.11h.',
    beginnerMistakes: [
      'Assuming more channel width always means better Wi-Fi — wider channels reduce how many independent channels exist for neighboring APs to use.',
      'Thinking band steering forces a device onto 5 GHz — it encourages capable clients toward 5 GHz, but the client can still choose 2.4 GHz if it must.',
      'Confusing DFS (a 5 GHz radar-avoidance mechanism) with DHCP, or with general frequency hopping used by older Bluetooth-era technologies.',
    ],
    keyTerms: [
      { term: 'Autonomous access point', def: 'A standalone AP configured and managed individually, without a central controller.' },
      { term: 'Lightweight access point', def: 'An AP managed centrally by a wireless LAN controller, which handles configuration and policy for many APs.' },
      { term: 'Wireless LAN controller (WLC)', def: 'A central device that configures, monitors, and coordinates lightweight access points.' },
      { term: 'Band steering', def: 'Encouraging dual-band clients to connect to the less crowded 5 GHz (or 6 GHz) band instead of 2.4 GHz.' },
      { term: 'DFS (Dynamic Frequency Selection)', def: 'An 802.11h feature that moves an AP off a 5 GHz channel when radar is detected on it.' },
      { term: 'TPC (Transmit Power Control)', def: 'An 802.11h feature that limits transmit power to reduce interference with other systems.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A company has 80 access points that must all share the same security policy and be managed from one place. Which deployment model fits best?',
        options: ['Autonomous APs configured individually', 'Lightweight APs managed by a wireless LAN controller', 'Ad hoc peer-to-peer wireless links', 'Repeaters daisy-chained from one AP'],
        correct: 1,
        explanation: 'Lightweight APs with a controller centralize configuration and policy across a large number of APs.',
      },
      {
        prompt: 'Which 802.11h feature makes an access point vacate a 5 GHz channel when radar is detected?',
        options: ['Band steering', 'DFS (Dynamic Frequency Selection)', 'Channel bonding', 'WPA3-SAE'],
        correct: 1,
        explanation: 'DFS monitors for radar on shared 5 GHz channels and forces the AP to switch away when it is detected.',
      },
      {
        prompt: 'In a dense office with many neighboring APs, which channel width usually performs best for overall reliability?',
        options: ['160 MHz, for maximum speed', '80 MHz, for a good balance', '20 MHz, for more independent channels and better interference resistance', 'There is no tradeoff at all'],
        correct: 2,
        explanation: 'Narrower channels leave more non-overlapping channels for neighbors, reducing contention in crowded environments.',
      },
    ],
    miniScenario: {
      prompt: 'A dual-band office has many older 2.4 GHz-only devices plus newer dual-band laptops, and the 2.4 GHz band is congested even though the 5 GHz band is mostly empty.',
      task: 'Name the feature that encourages the capable laptops to move to 5 GHz, and explain why the older devices cannot be forced the same way.',
    },
    recap:
      'Autonomous APs are configured individually; lightweight APs are centrally managed by a WLC over CAPWAP. Band steering pushes capable clients to 5 GHz. 802.11h on 5 GHz adds DFS (radar avoidance) and TPC (power control). Channel width trades throughput for spectrum reuse.',
    classroomAnswer:
      '"Single site with few APs, I configure each one. Many APs with one policy, I manage them from a controller — and on 5 GHz, I always check 802.11h so radar doesn\'t take the network down."',
  };

  NetReady.LESSONS['9-9'] = {
    id: '9-9',
    moduleId: 9,
    slug: 'wireless-signal-quality-rssi-snr',
    title: 'Wireless Signal Quality: RSSI, SNR, Interference, and Wi-Fi Troubleshooting',
    estMinutes: 14,
    outcomes: [
      `Read RSSI values in dBm and say whether a signal is strong or weak.`,
      `Explain signal-to-noise ratio (SNR) and why it matters more than signal alone.`,
      `Tell co-channel, adjacent-channel, and non-Wi-Fi interference apart.`,
      `Choose sensible fixes for common Wi-Fi complaints.`,
    ],
    whyItMatters: `Wi-Fi problems are the most common help-desk tickets, and "full bars" does not mean good Wi-Fi. This lesson gives you the numbers and vocabulary the exam uses for wireless troubleshooting.`,
    simpleEnglish: `RSSI (Received Signal Strength Indicator) shows how strong the signal arrives, measured in dBm. The numbers are negative, and closer to zero is stronger: -50 dBm is excellent, -67 dBm is the usual minimum for voice and video, -70 dBm is okay for basic use, and -80 dBm is weak. But signal alone is not enough; you also need it to stand out above background noise. SNR (signal-to-noise ratio) is signal minus noise floor, in dB. For example, -60 dBm signal with a -95 dBm noise floor gives 35 dB SNR, which is healthy. Interference reduces SNR. Co-channel interference is multiple access points sharing the same channel, so they take turns using the air. Adjacent-channel interference comes from partially overlapping channels and is worse. Non-Wi-Fi sources like microwaves, Bluetooth, and cordless phones add noise on 2.4 GHz.`,
    taglish: `Ang RSSI ay lakas ng signal na natatanggap mo, sa dBm. Negative ang numero, at mas malapit sa zero, mas malakas: -50 napakagaling, -67 minimum para sa video call, -80 mahina na. Pero hindi sapat ang malakas lang — kailangan din na mas mataas ito kaysa sa ingay sa paligid. Ang SNR ay signal minus noise. Halimbawa -60 signal at -95 noise = 35 dB SNR, magandang kondisyon. Ang co-channel interference ay mga AP na nagsasalitan sa iisang channel; ang adjacent-channel ay mas masama dahil nag-o-overlap. Ang microwave oven, Bluetooth, at cordless phone ay nagdadagdag ng ingay sa 2.4 GHz.`,
    analogy: {
      title: 'Kausap sa maingay na handaan',
      text: `Ang RSSI ay lakas ng boses ng kausap mo. Ang noise floor ay ingay ng handaan. Kahit malakas ang boses niya, kung mas malakas ang videoke, hindi mo maiintindihan — yan ang mababang SNR. Ang co-channel interference ay maraming magkakausap sa iisang mesa na kailangang maghintayan ng turn.`,
    },
    howItWorks: [
      `RSSI scale (approximate): -30 dBm excellent (right next to the AP), -50 excellent, -60 good, -67 minimum for VoIP and video, -70 fair, -80 poor, -90 unusable. Each 3 dB drop roughly halves the power.`,
      `Noise floor: the background RF energy, typically about -90 to -95 dBm in a clean environment. SNR = signal (dBm) minus noise floor (dBm). Rough guide: 40+ dB excellent, 25 to 40 dB good, 15 to 25 dB marginal, under 15 dB poor.`,
      `Attenuation: signal weakens with distance and with materials. Metal, concrete, brick, mirrors, and water (including fish tanks and people) absorb or reflect it most; drywall and glass much less. Higher frequencies (5 and 6 GHz) attenuate faster than 2.4 GHz.`,
      `Co-channel interference (CCI): several APs on the same channel share airtime. Correct fix is better channel planning, not just more power.`,
      `Adjacent-channel interference (ACI): overlapping channels corrupt each other. On 2.4 GHz only channels 1, 6, and 11 do not overlap in the US, so use only those.`,
      `Non-Wi-Fi interference: microwaves, Bluetooth, cordless phones, baby monitors, and some wireless cameras on 2.4 GHz. A spectrum analyzer finds them; a Wi-Fi analyzer only sees Wi-Fi networks.`,
      `Other symptoms: hidden node problem (two clients cannot hear each other but both reach the AP, causing collisions), sticky clients that stay on a distant AP instead of roaming, and capacity problems when too many clients share one AP.`,
      `Fixes: move to 5 or 6 GHz, use band steering, set non-overlapping channels, lower AP transmit power on dense layouts, add APs for capacity, adjust placement away from metal and water, and raise minimum data rates so distant, slow clients stop hogging airtime.`,
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Table of RSSI ranges and what they mean">
        <div class="table-scroll"><table class="lesson-table">
          <thead><tr><th>RSSI</th><th>Quality</th><th>Good for</th></tr></thead>
          <tbody>
            <tr><td>-30 to -50 dBm</td><td>Excellent</td><td>Everything</td></tr>
            <tr><td>-50 to -67 dBm</td><td>Good</td><td>VoIP, video, streaming</td></tr>
            <tr><td>-67 to -70 dBm</td><td>Fair</td><td>Web, email</td></tr>
            <tr><td>-70 to -80 dBm</td><td>Weak</td><td>Basic, unreliable</td></tr>
            <tr><td>Below -80 dBm</td><td>Poor</td><td>Drops and retries</td></tr>
          </tbody>
        </table></div>
      </div>`,
    },
    realWorldExample: `A clinic complains of dropped video calls in the waiting room even though laptops show full bars. A survey shows -58 dBm signal but a -78 dBm noise floor, an SNR of only 20 dB. A cordless phone base and a microwave in the staff kitchen are flooding 2.4 GHz. Moving video devices to 5 GHz fixes it.`,
    proTips: [
      `"Full bars but slow" usually points to interference or congestion (low SNR or high channel utilization), not weak signal.`,
      `A Wi-Fi analyzer shows networks and channels; a spectrum analyzer shows ALL RF energy, including non-Wi-Fi interference.`,
      `More AP transmit power is not always better, because clients can hear the AP but the AP cannot hear their weaker replies.`,
    ],
    examAlert: `Expect questions such as "which value indicates the strongest signal?" (the one closest to zero, so -45 beats -75) and "which channels are non-overlapping on 2.4 GHz?" (1, 6, 11). SNR matters more than signal strength alone.`,
    beginnerMistakes: [
      `Thinking -80 dBm is stronger than -50 dBm because 80 is bigger.`,
      `Fixing slow Wi-Fi only by buying a stronger AP rather than checking channels and interference.`,
      `Putting APs on channels 3, 4, or 8 on 2.4 GHz and creating overlap.`,
    ],
    keyTerms: [
      { term: 'RSSI', def: `Measure of received signal strength, expressed in dBm.` },
      { term: 'Noise floor', def: `Background RF energy level that limits usable signal.` },
      { term: 'SNR', def: `Signal-to-noise ratio, signal minus noise floor in dB.` },
      { term: 'Co-channel interference', def: `Multiple APs sharing the same channel.` },
      { term: 'Adjacent-channel interference', def: `Overlapping channels corrupting each other.` },
      { term: 'Attenuation', def: `Loss of signal strength through distance or obstacles.` },
    ],
    knowledgeCheck: [
      {
        prompt: `Which RSSI reading represents the strongest signal?`,
        options: [`-85 dBm`, `-70 dBm`, `-55 dBm`, `-95 dBm`],
        correct: 2,
        explanation: `Values closer to zero are stronger, so -55 dBm is the best of these.`,
      },
      {
        prompt: `A client reports -55 dBm signal and a -90 dBm noise floor. What is the SNR?`,
        options: [`145 dB`, `35 dB`, `-35 dB`, `55 dB`],
        correct: 1,
        explanation: `SNR is signal minus noise floor: -55 minus -90 equals 35 dB.`,
      },
      {
        prompt: `Which 2.4 GHz channel set avoids overlap in the United States?`,
        options: [`1, 2, 3`, `1, 6, 11`, `2, 7, 12`, `3, 8, 13`],
        correct: 1,
        explanation: `Channels 1, 6, and 11 are the three non-overlapping 2.4 GHz channels in the US.`,
      },
    ],
    miniScenario: {
      prompt: `Users in a break room get a good signal indicator but constant video call stutter, mostly around lunch time when the microwave runs.`,
      task: `Name the likely interference type and a quick fix.`,
    },
    recap: `RSSI is signal strength in negative dBm (closer to zero is stronger); SNR compares it to the noise floor and is what really predicts quality. Co-channel, adjacent-channel, and non-Wi-Fi interference degrade SNR; fix with channel planning, 5/6 GHz, placement, and capacity changes.`,
    classroomAnswer: `"Bars measure signal, not quality. Check the SNR and what else is on the channel before blaming the AP."`,
  };

  NetReady.LESSONS['9-10'] = NetReady.lesson(9, {
    id: '9-10',
    slug: 'wifi-performance-technologies',
    title: 'Wi-Fi Performance Technologies: MIMO, MU-MIMO, Beamforming, OFDMA, and Channel Bonding',
    minutes: 13,
    outcomes: [
      `Explain MIMO, MU-MIMO, beamforming, OFDMA, and channel bonding in simple terms.`,
      `Match Wi-Fi generations (Wi-Fi 4, 5, 6, 6E, 7) to 802.11 standards and bands.`,
      `Explain trade-offs such as range versus speed and channel width versus interference.`,
    ],
    why: `Newer Wi-Fi standards add features by name. Exam questions ask what each feature does and which standard introduced it.`,
    simple: `MIMO (multiple input, multiple output) uses several antennas to send multiple data streams at once, increasing speed. MU-MIMO (multi-user MIMO) lets an access point talk to several clients at the same time instead of one at a time. Beamforming focuses the signal toward a client rather than broadcasting equally in all directions, improving range and reliability. OFDMA (Wi-Fi 6) divides a channel into smaller sub-channels so many devices can transmit in one slot, improving efficiency in crowded places. Channel bonding combines adjacent channels (20, 40, 80, 160 MHz) to increase throughput, but wider channels are more likely to collide with others and leave fewer non-overlapping channels.`,
    taglish: `Ang MIMO ay maraming antenna na nagpapadala ng maraming data stream nang sabay, kaya bumibilis. Ang MU-MIMO ay nakikipag-usap ang AP sa maraming client nang sabay-sabay. Ang beamforming ay itinututok ang signal sa client imbes na pantay sa lahat ng direksyon. Ang OFDMA (Wi-Fi 6) ay hinahati ang channel sa maliliit na sub-channel para maraming device ang makapag-transmit sa iisang pagkakataon — maganda sa siksikang lugar. Ang channel bonding ay pinagsasama ang katabing channel (20, 40, 80, 160 MHz) para mas mabilis, pero mas madaling mag-collide at mas kaunti ang non-overlapping channel.`,
    analogy: {
      title: 'Mga lane sa highway at mga delivery van',
      text: `Ang MIMO ay maraming lane para sa maraming sasakyan. Ang MU-MIMO ay maraming sasakyan na sabay na nagde-deliver sa iba't ibang bahay. Ang beamforming ay delivery truck na dumiretso sa bahay mo imbes na paikot-ikot. Ang OFDMA ay isang truck na hinahati ang karga para sa maraming bahay sa isang biyahe. Ang channel bonding ay pagsasama ng ilang lane para maging mas malapad ang kalsada.`,
    },
    steps: [
      `Wi-Fi generations: Wi-Fi 4 = 802.11n (2.4 and 5 GHz, MIMO). Wi-Fi 5 = 802.11ac (5 GHz only, wider channels, MU-MIMO downlink). Wi-Fi 6 = 802.11ax (2.4 and 5 GHz, OFDMA, uplink and downlink MU-MIMO, better efficiency). Wi-Fi 6E = 802.11ax in the 6 GHz band as well. Wi-Fi 7 = 802.11be (adds 320 MHz channels, multi-link operation, 4096-QAM).`,
      `Older standards: 802.11b (2.4 GHz, 11 Mbps), 802.11a (5 GHz, 54 Mbps), 802.11g (2.4 GHz, 54 Mbps). 802.11g is backward compatible with 802.11b, and a legacy b client can slow the whole cell.`,
      `MIMO: described as streams, for example 2x2:2 or 4x4:4 (transmit antennas by receive antennas, with the number of spatial streams). More streams means more throughput if the client supports them.`,
      `MU-MIMO: serves multiple clients simultaneously; helps in dense environments with compatible clients, and is more beneficial for downlink (Wi-Fi 5) and both directions in Wi-Fi 6.`,
      `Beamforming: the AP estimates where the client is and shapes the signal; improves SNR and effective range for that client.`,
      `OFDMA: splits a channel into resource units so an AP can schedule many small transmissions at once, reducing latency for IoT and voice devices.`,
      `Channel width: 20, 40, 80, and 160 MHz. Each doubling roughly doubles peak speed but reduces available non-overlapping channels and increases noise. In dense 2.4 GHz, stay at 20 MHz; use 40 or 80 MHz in clean 5 GHz and 6 GHz.`,
      `Frequency trade-offs: 2.4 GHz has longer range and better wall penetration but only three non-overlapping channels and more interference; 5 GHz has more channels and speed; 6 GHz has the cleanest spectrum but the shortest range and needs compatible devices.`,
      `Other features: DFS (dynamic frequency selection) lets 5 GHz radios share with radar by moving channels; WPA3 is required on 6 GHz; TWT (target wake time) helps battery life.`,
    ],
    table: {
      label: 'Table of Wi-Fi generations',
      head: ['Name', 'Standard', 'Bands', 'Key features'],
      rows: [
        ['Wi-Fi 4', '802.11n', '2.4 / 5 GHz', 'MIMO, 40 MHz channels'],
        ['Wi-Fi 5', '802.11ac', '5 GHz', 'Wider channels, MU-MIMO downlink'],
        ['Wi-Fi 6', '802.11ax', '2.4 / 5 GHz', 'OFDMA, better dense performance'],
        ['Wi-Fi 6E', '802.11ax', '2.4 / 5 / 6 GHz', 'Adds the 6 GHz band'],
        ['Wi-Fi 7', '802.11be', '2.4 / 5 / 6 GHz', '320 MHz channels, multi-link operation'],
      ],
      caption: 'Newer generations add bands, channel width, and efficiency.',
    },
    example: `A stadium suite has 200 devices and the older Wi-Fi 5 access points struggle. Replacing them with Wi-Fi 6 APs using OFDMA and tuned channel widths of 20 MHz improves performance, even though each device's peak speed is no higher.`,
    tips: [
      `Wi-Fi 6E is about the 6 GHz band; Wi-Fi 6 is about OFDMA and efficiency.`,
      `Wider channels are not always better. In busy areas, narrower channels often perform better.`,
      `Features only help if the client device supports them too.`,
    ],
    exam: `Know MIMO (many streams), MU-MIMO (many clients at once), beamforming (focused signal), OFDMA (Wi-Fi 6), and which standard uses which band.`,
    mistakes: [
      `Setting 80 or 160 MHz channels in a dense 2.4 GHz environment.`,
      `Assuming 802.11ac works on 2.4 GHz.`,
      `Thinking MU-MIMO increases a single client's speed.`,
    ],
    terms: [
      { term: 'MIMO', def: `Multiple antennas sending multiple data streams at once.` },
      { term: 'MU-MIMO', def: `Serving multiple clients simultaneously.` },
      { term: 'Beamforming', def: `Focusing a wireless signal toward a client.` },
      { term: 'OFDMA', def: `Dividing a channel into resource units to serve many devices at once.` },
      { term: 'Channel bonding', def: `Combining adjacent channels for more throughput.` },
    ],
    checks: [
      {
        prompt: `Which Wi-Fi feature allows an access point to communicate with several clients at the same time?`,
        options: [`Beamforming`, `MU-MIMO`, `DFS`, `WPS`],
        correct: 1,
        explanation: `MU-MIMO serves multiple clients concurrently.`,
      },
      {
        prompt: `Which standard introduced OFDMA?`,
        options: [`802.11n`, `802.11ac`, `802.11ax`, `802.11g`],
        correct: 2,
        explanation: `OFDMA is a headline feature of Wi-Fi 6 (802.11ax).`,
      },
      {
        prompt: `What is a drawback of using 160 MHz channels in a crowded area?`,
        options: [`Fewer non-overlapping channels and more interference`, `Lower speed always`, `No encryption`, `Shorter SSID`],
        correct: 0,
        explanation: `Wide channels use more spectrum, leaving fewer clean channels and increasing collisions.`,
      },
    ],
    mini: {
      prompt: `A conference hall has hundreds of phones and the AP's 80 MHz channels perform poorly.`,
      task: `Suggest two changes.`,
    },
    recap: `MIMO adds streams, MU-MIMO serves multiple clients, beamforming focuses signal, OFDMA improves efficiency (Wi-Fi 6), and channel bonding raises speed at the cost of interference. Know generation names and bands.`,
    classroom: `"Hindi lahat ng mas malapad ay mas mabilis. Sa siksikan, mas makitid minsan ay mas maayos."`,
  });

  NetReady.LESSONS['9-11'] = NetReady.lesson(9, {
    id: '9-11',
    slug: 'wireless-pan-iot-and-legacy-wireless-security',
    title: 'Short-Range Wireless, IoT Protocols, and Legacy Wireless Security: Bluetooth, NFC, Zigbee, WEP, and WPS',
    minutes: 14,
    outcomes: [
      `Identify short-range wireless technologies: Bluetooth, NFC, RFID, Zigbee, and Z-Wave.`,
      `Recognize legacy wireless security (WEP, TKIP, WPS) and why each is weak.`,
      `Name wireless attacks such as war driving, bluejacking, bluesnarfing, jamming, and KRACK.`,
    ],
    why: `Smart devices have exploded on networks and the exam includes the personal-area and IoT radio technologies, plus the attacks and weak protocols that come with them.`,
    simple: `Bluetooth (2.4 GHz, up to about 10 m for most devices) connects headsets and peripherals in a personal area network (PAN). NFC (near-field communication) works only within a few centimeters and is used for contactless payments and tap-to-pair. RFID uses radio tags for tracking items. Zigbee and Z-Wave are low-power mesh protocols for smart home and IoT devices (Zigbee at 2.4 GHz, Z-Wave in a sub-GHz band). On Wi-Fi, WEP was the first security protocol and is trivially broken; TKIP was a stopgap for WPA that is deprecated; WPA2 with AES-CCMP and WPA3 are the right choices. WPS (the push-button setup) can be brute-forced and should be disabled. Common attacks include war driving (searching for networks while moving), bluejacking (sending unsolicited messages over Bluetooth), bluesnarfing (stealing data over Bluetooth), jamming (flooding a frequency), and KRACK (a WPA2 key-reinstallation flaw patched in software).`,
    taglish: `Ang Bluetooth (2.4 GHz, mga 10 metro) ay para sa headset at peripherals sa PAN. Ang NFC ay ilang sentimetro lang ang abot — contactless payment at tap-to-pair. Ang RFID ay radio tags para sa pagsubaybay ng gamit. Ang Zigbee at Z-Wave ay mababang-konsumo na mesh protocols para sa smart home at IoT. Sa Wi-Fi security, ang WEP ay madaling mabasag; ang TKIP ay pansamantala lang at deprecated na; ang tama ay WPA2 na may AES-CCMP at WPA3. Dapat patayin ang WPS dahil puwedeng i-brute force. Mga atake: war driving (maghanap ng network habang gumagalaw), bluejacking (magpadala ng mensahe sa Bluetooth), bluesnarfing (magnakaw ng data sa Bluetooth), jamming (gambalain ang frequency), at KRACK (kahinaan ng WPA2 na na-patch na).`,
    analogy: {
      title: 'Bulungan, hawakan, at sigawan',
      text: `Ang NFC ay bulong na kailangang magkadikit. Ang Bluetooth ay usapan sa iisang kuwarto. Ang Wi-Fi ay sigawan sa buong bahay, kaya mahalaga ang kandado. Ang WEP ay kandadong plastik; ang WPA3 ay matibay na kandado.`,
    },
    steps: [
      `Bluetooth: 2.4 GHz, classes with ranges up to about 1, 10, and 100 m. Pairing with a PIN or numeric comparison. Bluetooth Low Energy (BLE) is used for sensors and beacons.`,
      `NFC: about 4 cm range, 13.56 MHz, used for contactless payments, badge access, and quick device pairing. RFID: tags read by a reader at distances from centimeters to many meters; passive tags use the reader's energy.`,
      `Zigbee (IEEE 802.15.4, 2.4 GHz) and Z-Wave (sub-GHz, around 900 MHz in the US) form low-power mesh networks for lights, sensors, and locks; devices relay messages for each other. Thread and Matter are newer smart-home standards.`,
      `WEP: RC4 with a weak 24-bit IV; can be cracked in minutes. Never use. TKIP (used by early WPA) is also deprecated. WPA2 uses AES-CCMP; WPA3 uses SAE (a stronger handshake that resists offline guessing) and OWE for open networks.`,
      `WPS: lets devices join with a push button or 8-digit PIN. The PIN design allows brute-force attacks; disable WPS on access points.`,
      `War driving: scanning for wireless networks from a vehicle; war chalking marked open networks. Defense: strong encryption and no open networks.`,
      `Bluejacking: sending unsolicited messages to nearby Bluetooth devices (annoying, low risk). Bluesnarfing: unauthorized data access over Bluetooth (serious). Defense: set devices non-discoverable and keep them patched.`,
      `Jamming (wireless DoS): a transmitter floods the spectrum or sends deauthentication frames so clients cannot stay connected. 802.11w (management frame protection, required in WPA3) helps stop forged deauth frames.`,
      `KRACK: a 2017 flaw in the WPA2 four-way handshake that let attackers force key reinstallation; fixed by software patches on clients and APs.`,
      `IoT security: put IoT and OT devices on their own VLAN or SSID, change default passwords, and update firmware.`,
    ],
    table: {
      label: 'Table of short-range wireless technologies',
      head: ['Technology', 'Range', 'Typical use'],
      rows: [
        ['NFC', 'About 4 cm', 'Payments, badge tap, quick pairing'],
        ['RFID', 'Cm to many meters', 'Inventory and access tags'],
        ['Bluetooth', 'About 1 to 100 m', 'Headsets, peripherals, BLE sensors'],
        ['Zigbee / Z-Wave', 'Tens of meters per hop (mesh)', 'Smart home and IoT'],
        ['Wi-Fi', 'Tens of meters', 'LAN access'],
      ],
      caption: 'Range grows from NFC to Wi-Fi; power use usually grows with it.',
    },
    example: `A hotel's old guest Wi-Fi still shows WEP on one forgotten AP. A visitor with a free tool recovers the key in minutes and joins the staff VLAN. The IT team replaces the AP with WPA3 or WPA2-AES, disables WPS, and moves smart-room devices to their own IoT VLAN.`,
    tips: [
      `WEP and WPS are always wrong answers for "secure".`,
      `NFC "touch" is intentionally short range, which is a security feature.`,
      `Isolate IoT devices; they rarely get patches.`,
    ],
    exam: `Know NFC (centimeters), Bluetooth (PAN), Zigbee/Z-Wave (IoT mesh), WEP and TKIP weak, WPA2-AES and WPA3 strong, WPS risk, and the attack names: war driving, bluejacking, bluesnarfing, jamming, KRACK.`,
    mistakes: [
      `Mixing up bluejacking (messages) and bluesnarfing (data theft).`,
      `Believing that hiding the SSID or MAC filtering is real security.`,
      `Leaving WPS enabled for convenience.`,
    ],
    terms: [
      { term: 'PAN', def: `Personal area network of nearby personal devices.` },
      { term: 'NFC', def: `Near-field communication, a very short range radio technology.` },
      { term: 'Zigbee / Z-Wave', def: `Low-power mesh protocols for smart home and IoT devices.` },
      { term: 'WEP', def: `Obsolete Wi-Fi security protocol that is easily broken.` },
      { term: 'WPS', def: `Wi-Fi Protected Setup, a convenience feature with brute-force weakness.` },
      { term: 'Bluesnarfing', def: `Unauthorized access to data on a Bluetooth device.` },
    ],
    checks: [
      {
        prompt: `Which technology is used for contactless payments with a range of only a few centimeters?`,
        options: [`Zigbee`, `NFC`, `Bluetooth Class 1`, `Wi-Fi 6`],
        correct: 1,
        explanation: `NFC works at about 4 cm, intended for tap interactions.`,
      },
      {
        prompt: `Which wireless security protocol can be cracked in minutes and should never be used?`,
        options: [`WPA3`, `WPA2-AES`, `WEP`, `SAE`],
        correct: 2,
        explanation: `WEP's weak design allows rapid key recovery.`,
      },
      {
        prompt: `An attacker steals contacts from a nearby phone over Bluetooth. What is this called?`,
        options: [`Bluejacking`, `Bluesnarfing`, `War driving`, `Jamming`],
        correct: 1,
        explanation: `Bluesnarfing is unauthorized data access over Bluetooth; bluejacking only sends messages.`,
      },
    ],
    mini: {
      prompt: `A building's smart lights use Zigbee and the manager asks why they should be on a separate VLAN.`,
      task: `Give two reasons.`,
    },
    recap: `Know the short-range technologies by range and use, why WEP, TKIP, and WPS are weak, which attacks target Wi-Fi and Bluetooth, and why IoT should be isolated.`,
    classroom: `"Ang NFC ay dapat magdikit. Ang WEP ay dapat itapon. Ang IoT ay dapat ihiwalay."`,
  });

  NetReady.LESSONS['9-12'] = NetReady.lesson(9, {
    id: '9-12',
    slug: 'wireless-client-and-roaming-problems',
    title: 'Wireless Client Problems: Association, Disassociation, Roaming, Hidden SSIDs, and Coverage Gaps',
    minutes: 13,
    outcomes: [
      `Describe how a client finds, authenticates to, and associates with an access point.`,
      `Explain BSS, ESS (ESSID), IBSS, and hidden SSID terminology.`,
      `Diagnose disassociation, roaming, and coverage problems.`,
    ],
    why: `Wireless issues are a named objective: signal loss, insufficient coverage, client disassociation, and roaming misconfiguration. This lesson connects the vocabulary to the symptoms.`,
    simple: `A Wi-Fi client scans for networks (passively listening to beacons or actively sending probe requests), authenticates, then associates with an access point. A single AP and its clients form a BSS (basic service set) identified by the BSSID (the AP's radio MAC). Several APs sharing one SSID form an ESS (extended service set), and the SSID shared across them is sometimes called the ESSID. An IBSS (ad hoc network) has no AP: devices talk directly. When the client moves, it roams: it disassociates from one AP and associates with another with the same SSID. Problems occur when the client sticks to a distant AP (sticky client), when roaming thresholds are wrong, when there are coverage gaps, or when authentication or DHCP delays interrupt sessions. Hiding the SSID does not provide real security.`,
    taglish: `Ang Wi-Fi client ay naghahanap ng network (nakikinig ng beacon o nagpapadala ng probe request), nag-a-authenticate, at nag-a-associate sa AP. Ang isang AP at mga client niya ay BSS na may BSSID (MAC ng radyo ng AP). Ang ilang AP na iisa ang SSID ay ESS (minsan tinatawag na ESSID). Ang IBSS (ad hoc) ay walang AP; direktang nag-uusap ang mga device. Kapag gumagalaw ang client, nagro-roam siya: nagdi-disassociate sa isang AP at nag-a-associate sa isa pa na may parehong SSID. Mga problema: sticky client, maling roaming threshold, coverage gap, at delay sa authentication o DHCP. Ang paglilihim ng SSID ay hindi tunay na seguridad.`,
    analogy: {
      title: 'Paglipat ng signal ng cellphone sa biyahe',
      text: `Kapag bumibiyahe ka, lumilipat ang cellphone mo sa pinakamalapit na cell tower. Kung kumakapit pa rin ito sa lumang tower kahit malayo na (sticky client), putol-putol ang tawag. Kung may lugar na walang tower (coverage gap), mawawala ang signal.`,
    },
    steps: [
      `Discovery: passive scanning (listening for beacon frames that advertise SSID, rates, and security) or active scanning (probe request and probe response).`,
      `Authentication and association: the client performs 802.11 authentication (open for WPA2/3 at this stage), then association with the AP; with WPA2-PSK it performs the four-way handshake, and with Enterprise it authenticates via 802.1X and RADIUS.`,
      `Terminology: SSID is the network name; BSSID is the MAC of an AP radio; BSS is one AP and its clients; ESS is multiple APs with the same SSID joined by a distribution system; IBSS is ad hoc without an AP.`,
      `Hidden SSID: the AP does not include the name in beacons, but the name is still visible in client probe requests and association frames. It breaks some clients' roaming and offers no real security.`,
      `Roaming: the client decides when to move based on signal thresholds (RSSI). Fast roaming standards (802.11r, 802.11k, 802.11v) reduce the delay by pre-sharing keys and neighbor information. Overlap of about 15 to 20 percent between cells helps smooth handoffs.`,
      `Sticky clients: devices that remain on a weak AP; mitigated by lowering AP power to match client power, disabling the lowest data rates, enabling 802.11k/v, and band steering.`,
      `Disassociation causes: weak signal, interference, AP overload, authentication timeouts, RADIUS problems, roaming across different SSID or VLAN settings, power-save quirks, or an admin or attacker sending deauthentication frames (802.11w protects against forged ones).`,
      `Misconfigured roaming: APs in the same ESS with different SSID, security settings, or VLANs; roaming across layer 3 boundaries without a controller or mobility anchor breaks the client's IP session.`,
      `Coverage gaps and insufficient coverage: found through a site survey and heat map; fixed by moving or adding APs, adjusting power, or adding directional antennas.`,
      `Troubleshooting order: check the signal and SNR at the client, confirm SSID and security settings, check for interference and channel overlap, look at AP and controller logs for the client's MAC, and verify DHCP and VLAN after association.`,
    ],
    table: {
      label: 'Table of wireless service set terms',
      head: ['Term', 'Meaning'],
      rows: [
        ['SSID', 'Network name shown to users'],
        ['BSSID', 'MAC address of an AP radio'],
        ['BSS', 'One AP plus its associated clients'],
        ['ESS / ESSID', 'Multiple APs sharing one SSID for roaming'],
        ['IBSS', 'Ad hoc network with no AP'],
        ['Roaming', 'Client moving between APs of the same ESS'],
      ],
      caption: 'One AP is a BSS; many APs with one name are an ESS.',
    },
    example: `A warehouse worker's scanner keeps dropping calls when walking down aisle 7. The AP logs show the scanner stays attached to a far AP with a poor signal. Lowering that AP's power, raising the minimum data rate, and enabling 802.11k/v lets the scanner hop to the closer AP.`,
    tips: [
      `A client that "connects but drops while walking" is a roaming problem, not a signal-only problem.`,
      `Do not rely on hiding the SSID for security.`,
      `Make sure every AP in an ESS has the same SSID, security, and VLAN mapping.`,
    ],
    exam: `Know the terms BSS, ESS, IBSS, SSID, BSSID; that roaming moves between APs of one ESS; sticky clients; deauthentication; and coverage solved by surveys and AP placement.`,
    mistakes: [
      `Using different security settings for the same SSID across APs.`,
      `Assuming a hidden SSID is secure.`,
      `Raising AP power so much that clients cannot reply to it.`,
    ],
    terms: [
      { term: 'BSSID', def: `The MAC address of an access point radio.` },
      { term: 'ESS', def: `Several access points sharing an SSID to provide roaming.` },
      { term: 'IBSS', def: `Ad hoc wireless network without an access point.` },
      { term: 'Roaming', def: `Client movement between APs while keeping its connection.` },
      { term: 'Sticky client', def: `Client that stays on a distant AP instead of roaming.` },
      { term: 'Deauthentication', def: `Management frame that disconnects a client from an AP.` },
    ],
    checks: [
      {
        prompt: `Which term describes multiple access points sharing the same SSID to allow roaming?`,
        options: [`IBSS`, `ESS`, `PAN`, `VPN`],
        correct: 1,
        explanation: `An extended service set links several BSSs under one network name.`,
      },
      {
        prompt: `A client stays on a distant AP despite a closer one being available. What is this called?`,
        options: [`Sticky client`, `Evil twin`, `Jitter`, `Beamforming`],
        correct: 0,
        explanation: `Sticky clients fail to roam to a better AP.`,
      },
      {
        prompt: `What does the BSSID identify?`,
        options: [`The network name`, `The MAC address of an AP radio`, `The VLAN`, `The password`],
        correct: 1,
        explanation: `The BSSID is the AP radio's MAC address.`,
      },
    ],
    mini: {
      prompt: `Laptops disconnect when users walk between two floors but work fine while stationary.`,
      task: `Name two checks.`,
    },
    recap: `Clients scan, authenticate, and associate with an AP (BSS); multiple APs with one SSID form an ESS. Roaming, sticky clients, coverage gaps, and mismatched AP settings cause most client disassociation problems.`,
    classroom: `"Kapag naglalakad ang user at napuputol, roaming ang hinahanap mo, hindi lang signal."`,
  });

  NetReady.LESSONS['9-13'] = NetReady.lesson(9, {
    id: '9-13',
    slug: 'cellular-generations-sim-and-private-5g',
    title: 'Cellular Networks in Depth: 2G to 5G, LTE, SIM and eSIM, APNs, and Private 5G',
    minutes: 12,
    outcomes: [
      `Place GSM/CDMA, 3G, LTE, and 5G on a generation timeline with their key traits.`,
      `Explain SIM, eSIM, APN, and carrier aggregation in simple terms.`,
      `Describe 5G bands, network slicing, and private cellular networks.`,
    ],
    why: `Cellular is a WAN backup, an IoT link, and increasingly a primary connection. The exam expects you to recognize the technologies and their trade-offs.`,
    simple: `Cellular networks have evolved through generations. 2G (GSM and CDMA) added digital voice and slow data. 3G (UMTS/HSPA, EV-DO) made mobile internet practical. 4G LTE is an all-IP network with much higher speeds. 5G (New Radio) adds higher speeds, lower latency, and support for many devices. A SIM card identifies the subscriber to the carrier; an eSIM is the same identity built into the device and provisioned by software. An APN (access point name) tells the device which carrier gateway to use for data. 5G uses low-band (wide coverage, moderate speed), mid-band (balance), and high-band millimeter wave (very fast, very short range, easily blocked). Network slicing creates virtual networks on one 5G infrastructure with different guarantees. Private 5G or LTE lets an organization run its own cellular network, for example in a factory or port.`,
    taglish: `Nag-evolve ang cellular sa mga henerasyon. Ang 2G (GSM at CDMA) ay digital voice at mabagal na data. Ang 3G (UMTS/HSPA, EV-DO) ay nagpraktikal sa mobile internet. Ang 4G LTE ay all-IP at mas mabilis. Ang 5G (New Radio) ay mas mabilis, mas mababa ang latency, at kayang magdala ng maraming device. Ang SIM card ang nagpapakilala sa subscriber sa carrier; ang eSIM ay nakapaloob na sa device at sa software ini-provision. Ang APN ang nagsasabi sa device kung aling gateway ng carrier ang gagamitin para sa data. Sa 5G, may low-band (malawak ang saklaw), mid-band (balanse), at high-band mmWave (napakabilis pero maiksi at madaling harangan). Ang network slicing ay virtual networks na may magkaibang garantiya sa iisang 5G. Ang private 5G/LTE ay sariling cellular network ng organisasyon, gaya ng pabrika o pantalan.`,
    analogy: {
      title: 'Mga uri ng kalsada sa bansa',
      text: `Ang low-band ay malawak na pambansang highway na umaabot sa probinsya pero hindi pinakamabilis. Ang mmWave ay napakabilis na expressway pero sa loob lang ng isang siyudad at hinaharangan ng gusali. Ang network slicing ay mga lane sa iisang kalsada na nakareserba para sa ambulansya, bus, o trak. Ang private 5G ay sariling kalsada ng pabrika.`,
    },
    steps: [
      `2G: GSM (TDMA based, widely used with SIM cards) and CDMA (spread-spectrum, used by some US carriers). Voice plus slow data (GPRS and EDGE).`,
      `3G: UMTS with HSPA and CDMA2000 EV-DO. Several Mbps. Introduced mobile broadband.`,
      `4G LTE: all-IP, OFDMA downlink, tens to hundreds of Mbps; voice carried as VoLTE. LTE-Advanced adds carrier aggregation, combining multiple frequency blocks for more speed.`,
      `5G NR: three bands. Low-band (below about 1 GHz) for wide coverage; mid-band (about 1 to 6 GHz) balances speed and coverage; high-band mmWave (24 GHz and above) offers multi-gigabit speeds over short distances with poor wall penetration. Latency can drop to a few milliseconds.`,
      `5G use cases: enhanced mobile broadband, ultra-reliable low latency (industrial control, remote surgery), and massive IoT (many sensors). Network slicing assigns each use case its own virtual network.`,
      `SIM and eSIM: the SIM stores the subscriber identity (IMSI) and keys; an eSIM is an embedded SIM with downloadable profiles, so switching carriers needs no physical card.`,
      `APN: the settings (name, authentication) a device uses to reach the carrier data network. A wrong APN causes "connected to the tower but no data".`,
      `Network use: cellular routers provide failover for branch WAN links, connect IoT devices and vehicles, and serve remote sites. Considerations: data caps, latency variability, coverage, signal strength (RSRP/RSRQ), and the carrier NAT (often CGNAT) which hinders inbound connections.`,
      `Private LTE/5G: an organization operates its own radio network (often using shared spectrum such as CBRS in the US) for predictable coverage and low latency in factories, ports, and campuses.`,
      `Security: cellular uses SIM-based authentication and encryption, but traffic still needs an end-to-end VPN or TLS across the carrier network.`,
    ],
    table: {
      label: 'Table of cellular generations',
      head: ['Generation', 'Examples', 'Key trait'],
      rows: [
        ['2G', 'GSM, CDMA, GPRS, EDGE', 'Digital voice, slow data'],
        ['3G', 'UMTS, HSPA, EV-DO', 'Practical mobile internet'],
        ['4G', 'LTE, LTE-Advanced', 'All-IP, high speed, carrier aggregation'],
        ['5G', 'NR (low, mid, mmWave)', 'Higher speed, low latency, slicing, massive IoT'],
      ],
      caption: 'Each generation raised speed, reduced latency, and moved toward all-IP.',
    },
    example: `A retail chain installs 4G/5G routers at each store as a backup WAN. When the cable line fails, the router fails over to cellular within seconds. A tech notices a new router shows signal bars but no data; the SIM profile had a wrong APN. Correcting the APN restores the data connection.`,
    tips: [
      `"Millimeter wave" = fastest 5G but shortest range and worst penetration.`,
      `Connected to the tower but no internet? Check the APN and data plan before the antenna.`,
      `Cellular backup links often sit behind carrier NAT; plan for outbound-initiated VPNs.`,
    ],
    exam: `Know that LTE is 4G and all-IP, 5G has low, mid, and high bands, SIM/eSIM identify the subscriber, APN selects the data gateway, and cellular is a WAN backup and IoT medium.`,
    mistakes: [
      `Thinking mmWave 5G has the widest coverage.`,
      `Forgetting that carrier-grade NAT blocks inbound connections.`,
      `Mixing up GSM and CDMA as 3G; both are 2G-era technologies (with later 3G evolutions).`,
    ],
    terms: [
      { term: 'LTE', def: `Long Term Evolution, a 4G all-IP cellular standard.` },
      { term: 'eSIM', def: `Embedded SIM that holds a downloadable carrier profile.` },
      { term: 'APN', def: `Access point name that selects the carrier data gateway.` },
      { term: 'Carrier aggregation', def: `Combining multiple frequency blocks to increase speed.` },
      { term: 'Network slicing', def: `Creating multiple virtual networks with different guarantees on one 5G network.` },
      { term: 'mmWave', def: `High-frequency 5G band with high speed and short range.` },
    ],
    checks: [
      {
        prompt: `Which 5G band offers the highest speeds but the shortest range?`,
        options: [`Low-band`, `Mid-band`, `High-band mmWave`, `Sub-GHz`],
        correct: 2,
        explanation: `Millimeter wave offers multi-gigabit speeds over short distances.`,
      },
      {
        prompt: `A cellular router shows a strong signal but no data. What should you check?`,
        options: [`The APN and data plan`, `The rack unit height`, `The VLAN trunk`, `The spanning tree root`],
        correct: 0,
        explanation: `A wrong APN or inactive plan prevents data even with good signal.`,
      },
      {
        prompt: `What is an eSIM?`,
        options: [`A SIM identity embedded in the device and provisioned by software`, `A faster antenna`, `A kind of Wi-Fi password`, `A fiber transceiver`],
        correct: 0,
        explanation: `An eSIM holds carrier profiles in the device without a physical card.`,
      },
    ],
    mini: {
      prompt: `A factory wants wireless coverage with guaranteed low latency for robots and does not want to depend on a public carrier.`,
      task: `Suggest the cellular option.`,
    },
    recap: `Cellular evolved from GSM/CDMA through 3G and all-IP LTE to 5G with low, mid, and mmWave bands and slicing. SIM and eSIM identify subscribers, APNs choose the data gateway, and private 5G gives organizations control.`,
    classroom: `"Mas mabilis ang mmWave pero mas maikli; mas malawak ang low-band pero mas mabagal."`,
  });

  NetReady.LESSONS['9-14'] = NetReady.lesson(9, {
    id: '9-14',
    slug: 'wi-fi-6-6e-and-7-ofdma-mu-mimo-and-channel-bonding',
    title: 'Wi-Fi 5, 6, 6E, and 7: OFDMA, MU-MIMO, and Channel Bonding',
    minutes: 15,
    outcomes: [
      `Match 802.11n, ac, ax, and be to their Wi-Fi generation names, bands, and features.`,
      `Explain MIMO, MU-MIMO, OFDMA, and channel bonding.`,
      `Describe the 6 GHz band and why it helps.`,
      `Choose channel widths for dense and sparse deployments.`,
    ],
    why: `Wireless standards are a guaranteed exam topic. You need to know which standard uses which band, what each new generation adds, and why wider channels are not always better.`,
    simple: `Each Wi-Fi generation is faster mainly because it squeezes more data into each signal (better modulation), uses more antennas at once (MIMO), and uses wider channels (channel bonding). Wi-Fi 6 adds OFDMA, which lets one transmission serve many devices at once, improving efficiency in crowded places. Wi-Fi 6E and 7 open up the 6 GHz band with a lot of clean channels.`,
    taglish: `Mas mabilis ang bawat henerasyon dahil mas siksik ang data sa signal (modulation), mas maraming antenna (MIMO), at mas malapad na channel. Ang Wi-Fi 6 ay may OFDMA na naglilingkod ng maraming device sa isang transmisyon, mabisa sa siksikang lugar. Ang Wi-Fi 6E at 7 ay gumagamit ng 6 GHz na maraming malinis na channel.`,
    analogy: {
      title: 'Trak na naghahatid ng mga kahon',
      text: `Ang lumang Wi-Fi ay trak na isang customer lang ang dala kada biyahe kahit maliit ang order. Ang OFDMA ay trak na may maraming kompartimento: sabay-sabay na hinahatid ang maliliit na order ng maraming customer. Ang malapad na channel ay mas malawak na kalsada, pero kapag siksik ang kapitbahay ay nagkakabanggaan din.`,
    },
    steps: [
      `Generations and bands: 802.11b (2.4 GHz, 11 Mbps), 802.11a (5 GHz, 54 Mbps), 802.11g (2.4 GHz, 54 Mbps), 802.11n Wi-Fi 4 (2.4 and 5 GHz, up to 600 Mbps with 4 streams and 40 MHz), 802.11ac Wi-Fi 5 (5 GHz only, up to several Gbps, 80 or 160 MHz), 802.11ax Wi-Fi 6 (2.4 and 5 GHz; Wi-Fi 6E adds 6 GHz), and 802.11be Wi-Fi 7 (2.4, 5, and 6 GHz, up to 320 MHz channels).`,
      `MIMO (multiple input, multiple output) uses several antennas to send multiple spatial streams on the same channel. 802.11n introduced it. SU-MIMO serves one device at a time. MU-MIMO (introduced downstream in 802.11ac Wave 2, and both directions in 802.11ax) serves several devices simultaneously, each on its own stream. A 4x4 radio has four transmit and four receive chains.`,
      `Modulation: more bits per symbol with denser constellations. 802.11ac uses up to 256-QAM, 802.11ax up to 1024-QAM, and 802.11be up to 4096-QAM. Denser modulation needs a strong clean signal, so the highest rates only work close to the AP.`,
      `Channel bonding: combining adjacent 20 MHz channels into 40, 80, 160 (and 320 MHz in Wi-Fi 7) for more throughput. Wider channels leave fewer non-overlapping channels, pick up more noise, and increase interference. In 2.4 GHz only three non-overlapping channels exist (1, 6, 11 in North America), so use 20 MHz there.`,
      `OFDMA (orthogonal frequency-division multiple access, Wi-Fi 6): divides a channel into small resource units (RUs) so that several clients, including low-bandwidth IoT devices, share one transmission. It cuts latency and wasted airtime in dense environments such as stadiums and classrooms. Wi-Fi 5 and earlier use plain OFDM, where one client uses the whole channel at a time.`,
      `Other Wi-Fi 6 features: BSS coloring (a tag that helps APs ignore neighbors on the same channel and reuse the channel), Target Wake Time (TWT, which schedules when devices wake to save battery), and WPA3 being mandatory for certification.`,
      `6 GHz band (Wi-Fi 6E and 7): adds up to 1,200 MHz of spectrum with up to seven 160 MHz channels or three 320 MHz channels (in regions that allow it), with no legacy devices. It requires WPA3 (and OWE for open networks) and has a shorter range than 5 GHz, since higher frequencies attenuate faster and penetrate walls less.`,
      `Wi-Fi 7 (802.11be) adds multi-link operation (MLO, one device uses several bands at once for speed and reliability), 320 MHz channels, 4096-QAM, and puncturing (using a wide channel even when a slice is occupied by interference).`,
      `Design choices: 2.4 GHz has the longest range and the most interference (microwaves, Bluetooth, neighbors); 5 GHz offers more channels and speed with moderate range; 6 GHz is clean and fast but short range. Use band steering to push capable clients to 5 or 6 GHz, and keep channel widths narrower (20 or 40 MHz) in dense deployments.`,
    ],
    deepDive: [
      {
        title: 'Why OFDMA helps a crowded classroom',
        text: `Thirty students each send a few small packets (chat messages, quiz answers). In Wi-Fi 5, each packet needs its own transmission slot with a full preamble and a contention delay, so airtime is mostly overhead. In Wi-Fi 6, the AP assigns small resource units to many clients and receives their uplink data in one scheduled transmission. Total throughput is not larger, but the efficiency and latency are much better.`,
        code: `Wi-Fi 5 (OFDM):    | C1 | C2 | C3 | C4 | ...   one client per transmission
Wi-Fi 6 (OFDMA):   | C1 | C2 | C3 | C4 |        four clients share one transmission
                   (each box is a resource unit in the same channel)`,
        note: `OFDMA improves efficiency for many small transfers. It does not make a single large download faster than the channel allows.`,
      },
      {
        title: 'Channel plan for a 5 GHz office',
        text: `The 5 GHz band has 25 non-overlapping 20 MHz channels, but some (DFS channels, 52 to 144) must yield to radar and may be unavailable at times. With 80 MHz width, only about six non-overlapping channels exist, which is barely enough to avoid co-channel interference in a large building. Dropping to 40 MHz gives more reuse and often better real-world performance.`,
        code: `Width    Non-overlapping channels (5 GHz, North America, approx.)
20 MHz   25
40 MHz   12
80 MHz    6
160 MHz   2`,
      },
    ],
    table: {
      label: 'Wi-Fi generations compared',
      head: ['Standard', 'Name', 'Bands', 'Key features'],
      rows: [
        ['802.11n', 'Wi-Fi 4', '2.4 and 5 GHz', 'MIMO, 40 MHz channels'],
        ['802.11ac', 'Wi-Fi 5', '5 GHz', 'MU-MIMO downstream, 80 and 160 MHz, 256-QAM'],
        ['802.11ax', 'Wi-Fi 6 / 6E', '2.4, 5 GHz (6E adds 6 GHz)', 'OFDMA, uplink MU-MIMO, 1024-QAM, BSS coloring, TWT'],
        ['802.11be', 'Wi-Fi 7', '2.4, 5, and 6 GHz', 'MLO, 320 MHz, 4096-QAM'],
      ],
      caption: 'Each generation adds efficiency, width, or spectrum.',
    },
    example: `A university lecture hall upgrades from Wi-Fi 5 to Wi-Fi 6 access points and 20 MHz channels on 5 GHz. Because OFDMA serves many students at the same time, chat apps and quizzes no longer stall. The IT team also moves laptops to the new 6 GHz band using a separate SSID with WPA3.`,
    tips: [
      `ac is 5 GHz only. ax adds back 2.4 GHz and (6E) 6 GHz. n is the first MIMO standard.`,
      `More channel width does not always mean better performance. In dense areas use narrower channels.`,
      `6 GHz needs WPA3, has very little interference, and a shorter range.`,
    ],
    exam: `Match standards to Wi-Fi names, bands, and features: n (MIMO), ac (5 GHz, MU-MIMO), ax (OFDMA, 6E adds 6 GHz), be (MLO). Know channel bonding widths and the 3 non-overlapping 2.4 GHz channels.`,
    mistakes: [
      `Using 40 MHz or wider channels on 2.4 GHz, leaving no non-overlapping channels.`,
      `Expecting 6 GHz to reach as far as 2.4 GHz.`,
      `Assuming all clients benefit from OFDMA or 6 GHz when the client hardware is older.`,
    ],
    terms: [
      { term: 'MIMO', def: `Using multiple antennas to send multiple spatial streams on one channel.` },
      { term: 'MU-MIMO', def: `MIMO that serves multiple client devices at the same time.` },
      { term: 'OFDMA', def: `Wi-Fi 6 technique that splits a channel into resource units shared by many clients.` },
      { term: 'Channel bonding', def: `Combining adjacent channels into a wider one for more throughput.` },
      { term: 'BSS coloring', def: `Tag in Wi-Fi 6 frames that helps reduce co-channel interference.` },
      { term: 'MLO', def: `Multi-link operation: a Wi-Fi 7 device uses several bands at once.` },
    ],
    commands: [
      { os: 'Windows', cmd: 'netsh wlan show interfaces', desc: `Shows the connected radio type (802.11ax), channel, band, and signal strength.` },
      { os: 'Linux', cmd: 'iw dev wlan0 link', desc: `Shows the AP, frequency, signal, and bitrate of the current Wi-Fi connection.` },
    ],
    checks: [
      {
        prompt: `Which Wi-Fi 6 feature lets an access point serve multiple clients in one transmission by dividing the channel into resource units?`,
        options: [`MU-MIMO only`, `OFDMA`, `Channel bonding`, `Band steering`],
        correct: 1,
        explanation: `OFDMA splits the channel into resource units shared by several clients in the same transmission.`,
      },
      {
        prompt: `Which standard operates only in the 5 GHz band?`,
        options: [`802.11n`, `802.11g`, `802.11ac`, `802.11b`],
        correct: 2,
        explanation: `802.11ac (Wi-Fi 5) is 5 GHz only. 802.11n supports both bands.`,
      },
      {
        prompt: `Why is using 160 MHz channels in a dense office usually a poor choice?`,
        options: [`They only work on 2.4 GHz`, `Few non-overlapping channels remain, so interference rises`, `They disable encryption`, `They need Ethernet cabling`],
        correct: 1,
        explanation: `Wide channels consume more spectrum, leaving fewer separate channels and increasing co-channel interference.`,
      },
    ],
    mini: {
      prompt: `A stadium has thousands of phones sending small updates, and Wi-Fi 5 APs show high airtime use but low throughput.`,
      task: `Which Wi-Fi 6 features help and what channel width would you choose?`,
    },
    recap: `Wi-Fi 4 (n) brought MIMO, Wi-Fi 5 (ac) is 5 GHz with MU-MIMO and wide channels, Wi-Fi 6 (ax) adds OFDMA and efficiency (6E adds 6 GHz), and Wi-Fi 7 (be) adds MLO and 320 MHz. Wider channels raise speed but reduce channel reuse.`,
    classroom: `"n: MIMO. ac: 5 GHz lang. ax: OFDMA. 6E: 6 GHz. Mas malapad ang channel, mas kaunti ang pagpipilian."`,
  });

  NetReady.LESSONS['9-15'] = NetReady.lesson(9, {
    id: '9-15',
    slug: 'rf-fundamentals-antennas-signal-strength-and-site-surveys',
    title: 'RF Fundamentals: Antennas, Signal Strength, and Site Surveys',
    minutes: 16,
    outcomes: [
      `Explain RSSI, noise floor, SNR, and dBm values.`,
      `Compare omnidirectional, directional, and other antenna types.`,
      `Explain attenuation, interference, reflection, and the Fresnel zone.`,
      `Plan and perform a wireless site survey.`,
    ],
    why: `Wi-Fi problems are usually radio problems: weak signal, noise, interference, or poor AP placement. The exam tests the vocabulary and expects you to know how a site survey and a heat map help design coverage.`,
    simple: `A wireless signal gets weaker with distance and when it passes through walls, so the AP must be close enough for the client to hear it, and the signal must be much louder than the background noise. Antennas focus the signal in certain directions. A site survey measures the real signal in the real building so APs can be placed in the right spots on the right channels.`,
    taglish: `Humihina ang signal ng wireless habang lumalayo at kapag dumadaan sa pader, kaya dapat sapat ang lapit ng AP, at mas malakas ang signal kaysa sa ingay sa paligid. Ang antenna ang nagtutuon ng signal sa direksyon. Ang site survey ay sinusukat ang totoong signal sa totoong gusali para mailagay ang AP sa tamang lugar.`,
    analogy: {
      title: 'Pag-uusap sa maingay na party',
      text: `Mas madaling marinig ang kausap kapag malapit siya (distansya), walang makapal na pader sa pagitan (attenuation), at hindi masyadong maingay ang paligid (noise). Ang antenna ay parang megaphone na nakatutok sa isang direksyon.`,
    },
    steps: [
      `Signal strength: RSSI (received signal strength indicator) is a relative measure of received power, usually shown in dBm. dBm is decibels relative to 1 milliwatt, so values are negative: -30 dBm is excellent (very close), -67 dBm is the usual minimum for voice and video, -70 dBm is good for data, and -80 dBm or weaker is unreliable. Every 3 dB change is a doubling or halving of power; every 10 dB is ten times.`,
      `Noise floor is the background RF energy, typically about -90 to -95 dBm. SNR (signal-to-noise ratio) equals the signal minus the noise floor (in dB). A signal of -65 dBm with noise of -95 dBm gives 30 dB SNR. Around 25 dB or more is good; below 15 dB is poor. Higher SNR allows higher data rates.`,
      `Transmit power, gain, and EIRP: AP transmit power is measured in dBm or mW. Antenna gain in dBi adds to the effective radiated power. EIRP (effective isotropic radiated power) equals transmitter power minus cable loss plus antenna gain. Regulators limit EIRP. Raising AP power does not fix a weak client, because the client's own transmitter is weaker (an asymmetric link).`,
      `Antenna types: omnidirectional (dipole or rubber duck) radiates in a 360 degree donut around the antenna, with the best coverage on the horizontal plane; directional (Yagi, patch or panel, parabolic dish) focuses energy in a narrow beam for longer range and point-to-point links; sector antennas cover wedges at towers. Higher gain narrows the beam. Antenna polarization (vertical or horizontal) should match at both ends.`,
      `Loss and impairments: attenuation (signal weakens with distance, called free-space path loss, and through materials such as concrete, metal, glass, and water), reflection (bounces off metal, causing multipath), refraction, diffraction, and absorption. Multipath can cause the same signal to arrive multiple times, which MIMO uses constructively. Fresnel zone: an ellipse-shaped area around the line of sight between two antennas that should stay at least about 60 percent clear of obstacles for a point-to-point link.`,
      `Interference: co-channel interference (neighbors on the same channel, which share airtime) is normal; adjacent channel interference (overlapping channels) is worse and avoidable; non-Wi-Fi interference comes from microwave ovens, cordless phones, Bluetooth, baby monitors, and motors. Use a spectrum analyzer to see non-Wi-Fi interference. Also watch for the hidden node problem and the near/far problem.`,
      `Site survey types: predictive (software model from a floor plan and materials, done before installation), passive (laptop listens and records signal, noise, and channels of existing APs), active (laptop joins the SSID and measures throughput, roaming, and retries), and post-installation validation. Tools: Ekahau, NetSpot, and other analyzers.`,
      `Heat map: color overlay on the floor plan showing signal strength, SNR, or channel overlap. Use it to find dead zones and coverage overlap. Typical AP cell overlap target is 15 to 20 percent for roaming, with at least -67 dBm for voice at the edge. AP count is driven by capacity (number of users and applications) more than just coverage.`,
      `Placement and mounting: mount APs on ceilings at 8 to 12 feet, avoid placing them next to metal and thick walls, and provide power by PoE. Roaming needs overlapping cells on non-overlapping channels, plus fast roaming standards (802.11r, 802.11k, 802.11v). Document AP names, locations, channels, and power settings.`,
    ],
    deepDive: [
      {
        title: 'Calculating SNR and judging the link',
        text: `A laptop reports a signal of -62 dBm and the noise floor measures -94 dBm. SNR = -62 - (-94) = 32 dB, which is excellent. In another room the signal is -78 dBm with noise at -88 dBm (a neighbor's microwave raised the noise). SNR = -78 - (-88) = 10 dB, which is poor, even though -78 dBm alone looks usable. The cure for the second room is not more AP power, but removing the interference or moving to another band.`,
        code: `Room A:  signal -62 dBm, noise -94 dBm  ->  SNR = 32 dB   (excellent)
Room B:  signal -78 dBm, noise -88 dBm  ->  SNR = 10 dB   (poor)

Rule of thumb: +3 dB = 2x power, +10 dB = 10x power`,
        note: `Signal strength alone can mislead. Always check noise and retries as well as RSSI.`,
      },
      {
        title: 'EIRP example',
        text: `An AP transmits at 20 dBm, loses 2 dB in the cable, and has a 6 dBi antenna. EIRP = 20 - 2 + 6 = 24 dBm (about 250 mW). If the regulatory limit is 30 dBm, this is allowed. Swapping to a 12 dBi directional antenna gives 30 dBm, right at the limit, and creates a narrower beam that is good for a long hallway but poor for a room.`,
        code: `EIRP (dBm) = transmit power (dBm) - cable loss (dB) + antenna gain (dBi)
         = 20 - 2 + 6 = 24 dBm`,
      },
    ],
    table: {
      label: 'RF terms and typical values',
      head: ['Term', 'Meaning', 'Typical value'],
      rows: [
        ['RSSI / signal', 'Received power in dBm', '-67 dBm minimum for voice'],
        ['Noise floor', 'Background RF energy', '-90 to -95 dBm'],
        ['SNR', 'Signal minus noise (dB)', '25 dB or more is good'],
        ['dBi', 'Antenna gain compared with isotropic', 'Dipole 2 to 5 dBi'],
        ['EIRP', 'Radiated power incl. gain, minus loss', 'Limited by regulator'],
        ['Cell overlap', 'Coverage overlap between APs for roaming', '15 to 20 percent'],
      ],
      caption: 'Good Wi-Fi is strong signal, low noise, and the right antenna in the right place.',
    },
    example: `A hospital needs reliable voice over Wi-Fi. A predictive survey sets AP positions, then an active survey after installation finds a weak corridor near the lead-lined X-ray room. Adding one AP with a directional antenna in the hall raises the signal to -65 dBm with 30 dB SNR, and the heat map confirms the fix.`,
    tips: [
      `Less negative is stronger: -55 dBm beats -75 dBm.`,
      `SNR beats raw signal. A strong signal in loud noise is still slow.`,
      `A spectrum analyzer finds non-Wi-Fi interference; a Wi-Fi analyzer shows APs and channels.`,
    ],
    exam: `Know RSSI, noise floor, SNR, dBm and dBi, omni versus directional antennas, causes of attenuation and interference, and the types of site surveys with heat maps.`,
    mistakes: [
      `Turning every AP to maximum power, causing interference and one-way links.`,
      `Putting APs in closets or above metal ceilings.`,
      `Surveying an empty building and forgetting that people absorb signals.`,
    ],
    terms: [
      { term: 'RSSI', def: `Measure of received signal strength, often shown in dBm.` },
      { term: 'Noise floor', def: `Level of background RF noise on a channel.` },
      { term: 'SNR', def: `Signal minus noise floor in dB; higher means a cleaner link.` },
      { term: 'EIRP', def: `Effective radiated power including antenna gain and cable loss.` },
      { term: 'Omnidirectional antenna', def: `Antenna that radiates in all horizontal directions.` },
      { term: 'Fresnel zone', def: `Elliptical area around the line of sight that should be kept mostly clear.` },
      { term: 'Heat map', def: `Floor plan overlay showing signal strength or other measurements.` },
    ],
    commands: [
      { os: 'Windows', cmd: 'netsh wlan show networks mode=bssid', desc: `Lists nearby APs with signal percentage, channel, and radio type.` },
      { os: 'Linux', cmd: 'iw dev wlan0 scan | grep -E "SSID|signal|freq"', desc: `Scans for APs and shows SSID, signal strength in dBm, and frequency.` },
    ],
    checks: [
      {
        prompt: `A client sees a signal of -70 dBm and a noise floor of -95 dBm. What is the SNR?`,
        options: [`165 dB`, `25 dB`, `-25 dB`, `70 dB`],
        correct: 1,
        explanation: `SNR = signal minus noise = -70 - (-95) = 25 dB.`,
      },
      {
        prompt: `Which antenna type is best for a long point-to-point link between two buildings?`,
        options: [`Omnidirectional`, `Directional (Yagi or parabolic)`, `Rubber duck dipole`, `Ceiling bubble`],
        correct: 1,
        explanation: `Directional antennas focus energy into a narrow beam for longer range.`,
      },
      {
        prompt: `Which survey method uses floor plans and building materials in software before any equipment is installed?`,
        options: [`Passive survey`, `Active survey`, `Predictive survey`, `Post-installation audit`],
        correct: 2,
        explanation: `A predictive survey models coverage from plans and materials to estimate AP positions in advance.`,
      },
    ],
    mini: {
      prompt: `Wi-Fi in a kitchen shows -60 dBm signal but constant slowness whenever the microwave oven runs.`,
      task: `What is the cause, what tool confirms it, and what are two fixes?`,
    },
    recap: `Measure signal in dBm, noise floor, and SNR (signal minus noise). Choose omni or directional antennas, account for attenuation, reflection, and interference, and use predictive, passive, and active site surveys with heat maps to place APs with 15 to 20 percent cell overlap.`,
    classroom: `"Mas mababa ang negatibong numero, mas malakas. SNR = signal minus noise. Survey bago mag-install."`,
  });

  NetReady.LESSONS['9-16'] = NetReady.lesson(9, {
    id: '9-16',
    slug: 'iot-and-short-range-wireless-bluetooth-zigbee-z-wave-nfc-and-rfid',
    title: 'IoT and Short-Range Wireless: Bluetooth, Zigbee, Z-Wave, NFC, and RFID',
    minutes: 14,
    outcomes: [
      `Compare Bluetooth, Zigbee, Z-Wave, NFC, and RFID by range and use.`,
      `Explain mesh versus star topologies for IoT.`,
      `Identify security risks of IoT devices.`,
      `Describe how to secure and segment IoT on a network.`,
    ],
    why: `Smart devices are everywhere, and the exam expects you to recognize the short-range technologies and their typical uses, and to know how to keep insecure devices from endangering the network.`,
    simple: `Not every wireless device uses Wi-Fi. Small battery devices use low-power, short-range radios: Bluetooth connects headphones and keyboards, Zigbee and Z-Wave link smart-home sensors in a mesh, NFC works only a few centimeters away for payments and badges, and RFID tags are read by scanners from a distance. Many IoT devices have weak security, so they should be isolated on their own network.`,
    taglish: `Hindi lahat ng wireless ay Wi-Fi. Ang maliliit na gadget na de-baterya ay gumagamit ng mababang-lakas na radyo: Bluetooth para sa headphones, Zigbee at Z-Wave para sa smart-home sensors, NFC para sa ilang sentimetro lang (bayad at badge), at RFID na binabasa ng scanner. Madalas mahina ang seguridad ng IoT kaya ihiwalay sila sa sariling network.`,
    analogy: {
      title: 'Iba-ibang paraan ng pagtawag',
      text: `Ang Wi-Fi ay malakas na megaphone sa bahay. Ang Bluetooth ay bulungan sa kabilang upuan. Ang Zigbee ay hilera ng magkakapitbahay na nagpapasa ng mensahe. Ang NFC ay pagdikit ng tenga sa tenga. Ang RFID ay barcode na kusang sumasagot kapag tinawag.`,
    },
    steps: [
      `Bluetooth: 2.4 GHz, personal area network (PAN). Classic range is about 10 meters (Class 2) up to 100 meters (Class 1); Bluetooth Low Energy (BLE) saves power for sensors and beacons. Devices pair with a PIN or confirmation. Attacks: bluejacking (unsolicited messages), bluesnarfing (stealing data), and bluebugging (taking control). Defenses: turn off discoverable mode, use current versions, and unpair unknown devices.`,
      `Zigbee (IEEE 802.15.4): low power, low data rate, 2.4 GHz (also 868 and 915 MHz), mesh network. Used for smart lighting, sensors, and locks. Coordinator, router, and end-device roles. Range is 10 to 100 meters per hop; mesh hops extend it.`,
      `Z-Wave: proprietary low-power mesh protocol for home automation, using sub-GHz frequencies (908 MHz in North America, 868 MHz in Europe), which gives better wall penetration and less interference than 2.4 GHz. A single hub (controller) and up to 232 devices per network, with a maximum of four hops.`,
      `NFC (near field communication): 13.56 MHz, range about 4 cm or less, two-way communication. Used for contactless payments, badges, and quick pairing. The short range is itself a security feature, but relay and skimming attacks exist.`,
      `RFID (radio frequency identification): a reader powers or queries a tag. Passive tags have no battery and are read at centimeters to a few meters; active tags have a battery and reach farther (up to hundreds of meters). Frequencies: low (125 kHz), high (13.56 MHz), and ultra-high (860 to 960 MHz). Used for inventory, access cards, and toll tags. Risks: cloning and eavesdropping.`,
      `Other wireless: infrared (line of sight only, remote controls), satellite and cellular for wide area, and 802.11ah (Wi-Fi HaLow) for long-range low-power IoT in sub-GHz bands. IoT cellular options include NB-IoT and LTE-M.`,
      `IoT security issues: default or hard-coded passwords, no patching or end of support, unencrypted protocols, unneeded open ports, and little logging. Compromised cameras and smart devices have formed botnets such as Mirai, used for DDoS attacks.`,
      `Securing IoT: change default credentials, update firmware, disable unused services (UPnP, Telnet), place IoT devices on a separate VLAN or SSID with firewall rules that allow only needed destinations and block lateral movement, use a guest or IoT network at home, monitor traffic, and keep an inventory.`,
      `Related environments: ICS (industrial control systems) and SCADA use protocols such as Modbus and DNP3, and building systems use BACnet. They often cannot be patched, so they should be segmented from the corporate network, sometimes air-gapped, with a firewall or data diode between them.`,
    ],
    deepDive: [
      {
        title: 'A mesh network healing itself',
        text: `In a Zigbee smart-home network, a sensor in the garden is too far to reach the hub. It sends its message to a nearby lamp (a router device), which forwards it to the kitchen outlet, which forwards it to the hub. If the lamp loses power, the sensor discovers another neighbor and finds a new path. A star network (such as one hub and Bluetooth devices) has no such route: the loss of the hub or distance to it breaks the link.`,
        code: `Mesh:  Sensor -> Lamp -> Outlet -> Hub
              \\-> Thermostat -> Hub     (alternate path)
Star:  Sensor ---------------------> Hub    (one hop, no alternate)`,
        note: `Mesh equals multiple paths and self-healing. Star equals one central point and a single point of failure.`,
      },
      {
        title: 'Segmenting IoT with a VLAN and ACL',
        text: `The company puts security cameras in VLAN 70. The firewall allows the cameras to talk only to the recorder at 10.9.9.20 on TCP 443 and blocks everything else, including access to user VLANs. Even if a camera is compromised, the attacker cannot reach laptops or servers.`,
        code: `ip access-list extended IOT-IN
  permit tcp 10.70.0.0 0.0.0.255 host 10.9.9.20 eq 443
  permit udp 10.70.0.0 0.0.0.255 any eq 123      (NTP)
  deny   ip any any log`,
      },
    ],
    table: {
      label: 'Short-range wireless technologies compared',
      head: ['Technology', 'Frequency and range', 'Typical use'],
      rows: [
        ['Bluetooth / BLE', '2.4 GHz, about 10 to 100 m', 'Headsets, keyboards, beacons'],
        ['Zigbee', '2.4 GHz and sub-GHz, mesh', 'Smart lights, sensors'],
        ['Z-Wave', 'Sub-GHz (908/868 MHz), mesh', 'Home automation, locks'],
        ['NFC', '13.56 MHz, about 4 cm', 'Payments, badges, pairing'],
        ['RFID passive', '125 kHz to UHF, cm to meters', 'Inventory, access cards'],
        ['RFID active', 'Battery tag, long range', 'Vehicle and asset tracking'],
      ],
      caption: 'Range, power, and topology decide which one fits.',
    },
    example: `A warehouse tracks pallets with passive UHF RFID tags read at the dock doors. The office badge system uses NFC cards. Smart thermostats and sensors form a Zigbee mesh, and all IoT devices sit on their own VLAN where the firewall blocks them from reaching the finance servers.`,
    tips: [
      `NFC means a few centimeters. Z-Wave means sub-GHz and mesh. Zigbee means 802.15.4.`,
      `Default passwords on IoT devices are the first thing to change.`,
      `Isolate IoT and ICS from the business network with VLANs or firewalls.`,
    ],
    exam: `Match technologies to range and use, identify mesh versus star, know bluejacking and bluesnarfing, and know that IoT devices should be segmented and have default credentials changed.`,
    mistakes: [
      `Putting smart devices on the same VLAN as workstations and servers.`,
      `Leaving Bluetooth discoverable all the time.`,
      `Assuming short range (NFC, RFID) makes a system immune to attack.`,
    ],
    terms: [
      { term: 'Bluetooth', def: `Short-range 2.4 GHz wireless standard for personal area networks.` },
      { term: 'Zigbee', def: `Low-power mesh protocol based on IEEE 802.15.4.` },
      { term: 'Z-Wave', def: `Sub-GHz mesh protocol for smart-home devices.` },
      { term: 'NFC', def: `Near field communication with a range of a few centimeters.` },
      { term: 'RFID', def: `Technology that identifies tags using radio signals from a reader.` },
      { term: 'Bluesnarfing', def: `Unauthorized theft of data from a Bluetooth device.` },
      { term: 'Mirai', def: `Botnet that infected IoT devices with default passwords to launch DDoS attacks.` },
    ],
    commands: [
      { os: 'Linux', cmd: 'bluetoothctl devices', desc: `Lists paired Bluetooth devices so unknown ones can be removed.` },
      { os: 'Linux', cmd: 'nmap -sV 10.70.0.0/24', desc: `Finds IoT devices and the services they expose (only on a network you are authorized to scan).` },
    ],
    checks: [
      {
        prompt: `Which technology works at a range of only a few centimeters and is commonly used for contactless payments?`,
        options: [`Zigbee`, `NFC`, `Bluetooth Class 1`, `Wi-Fi 6`],
        correct: 1,
        explanation: `NFC operates at 13.56 MHz with a range of about 4 cm.`,
      },
      {
        prompt: `Which protocol uses IEEE 802.15.4 to form a low-power mesh for smart lighting?`,
        options: [`Zigbee`, `NFC`, `Bluetooth Classic`, `802.11ac`],
        correct: 0,
        explanation: `Zigbee builds on 802.15.4 and forms self-healing mesh networks.`,
      },
      {
        prompt: `What is the best way to limit the damage if an internet-connected camera is compromised?`,
        options: [`Put it on the same VLAN as servers for fast access`, `Place it on an isolated IoT VLAN with restrictive firewall rules`, `Disable the camera password`, `Enable UPnP`],
        correct: 1,
        explanation: `Segmentation with restrictive rules stops a compromised device from reaching other systems.`,
      },
    ],
    mini: {
      prompt: `An office has smart bulbs, badge readers, and a thermostat all on the main employee VLAN.`,
      task: `Describe a safer design and the first three settings you would change on the devices.`,
    },
    recap: `Bluetooth is PAN, Zigbee and Z-Wave are low-power meshes, NFC works at about 4 cm, and RFID tags are read by readers. IoT devices are often insecure, so change defaults, patch, disable unneeded services, and segment them from the business network.`,
    classroom: `"NFC: dikit lang. Zigbee at Z-Wave: mesh. Palitan ang default password at ihiwalay ang IoT sa sariling VLAN."`,
  });

}(window.NetReady));
