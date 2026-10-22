/**
 * content/module-15.js — Module 15: Case Files — Network Stories From the Field
 *
 * Story-driven lessons. Each lesson follows one realistic incident from the
 * first complaint to the documented fix, so the technical ideas from earlier
 * modules are met the way they show up on a real help desk and in exam
 * scenarios: as a messy situation with clues, not as a vocabulary list.
 *
 * Every lesson still carries the full lesson template; the `story()` helper
 * below only removes boilerplate (it builds the clue table visual and the
 * standard fields) so the narrative stays easy to read and edit.
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  function story(s) {
    return {
      id: s.id,
      moduleId: 15,
      slug: s.slug,
      title: s.title,
      estMinutes: s.minutes || 12,
      outcomes: s.outcomes,
      whyItMatters: s.why,
      simpleEnglish: s.simple,
      taglish: s.taglish,
      analogy: s.analogy,
      howItWorks: s.scenes,
      visual: {
        type: 'diagram',
        html:
          '<div class="lesson-diagram" role="img" aria-label="Clues from the story and what each one meant">' +
          '<div class="table-scroll"><table class="lesson-table"><thead><tr><th>Clue in the story</th><th>What it told us</th></tr></thead><tbody>' +
          s.clues.map((r) => '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>').join('') +
          '</tbody></table></div><p class="diagram-caption">Good technicians read clues before they touch anything.</p></div>',
      },
      realWorldExample: s.after,
      proTips: s.tips,
      examAlert: s.exam,
      beginnerMistakes: s.mistakes,
      keyTerms: s.terms,
      commands: s.commands,
      knowledgeCheck: s.checks,
      miniScenario: s.mini,
      recap: s.recap,
      classroomAnswer: s.classroom,
    };
  }

  // ---------------------------------------------------------------------
  NetReady.LESSONS['15-1'] = story({
    id: '15-1',
    slug: 'story-sari-sari-store-offline',
    title: 'Story: The Sari-Sari Store That Went Offline',
    minutes: 12,
    outcomes: [
      `Follow a bottom-up path from cable to gateway to DNS when "the internet is down".`,
      `Recognize an APIPA address, a wrong DNS server, and a dead gateway from the symptoms.`,
      `Use ipconfig, ping, and nslookup in a sensible order.`,
    ],
    why: `The most common ticket in the world is "the internet is down". This story shows how one calm technician turns that vague sentence into a specific cause in five minutes, using the same order of checks the exam expects.`,
    simple: `Aling Nena runs a sari-sari store with a small GCash and load-selling setup. One morning her tablet says "No internet". Kuya Jun, her nephew who studies IT, does not reboot everything. He checks the layers in order: is the cable or Wi-Fi connected, did the device get an IP address, can it reach the gateway, can it reach the internet by IP, and can it resolve names. Each answer removes a whole group of causes. In this case the tablet had a valid IP and could ping the internet by address, but names failed, which points straight at DNS.`,
    taglish: `Si Aling Nena may sari-sari store na may GCash at load. Isang umaga, "No internet" ang sabi ng tablet. Hindi nag-reboot ng lahat si Kuya Jun. Nag-check siya nang pa-akyat: may koneksyon ba? may IP ba? naaabot ba ang gateway? naaabot ba ang internet gamit ang IP? gumagana ba ang pangalan (DNS)? Bawat sagot ay nagtatanggal ng grupo ng posibleng dahilan. Dito, may IP at naka-ping sa 8.8.8.8, pero ayaw mag-load ng websites sa pangalan — DNS ang problema.`,
    analogy: {
      title: 'Pagpunta sa tindahan ng kapitbahay',
      text: `Kung hindi ka makarating sa tindahan, tinatanong mo: nakalabas ba ako ng bahay (link)? alam ko ba ang daan (IP at gateway)? at kung alam ko ang daan pero hindi ko matandaan ang pangalan ng tindahan, kailangan ng directory (DNS). Hindi masisira ang daan dahil lang nakalimutan mo ang pangalan.`,
    },
    scenes: [
      `Scene 1, the complaint: "Walang internet!" Aling Nena says the GCash app and the browser both fail. Jun's first move is to ask what changed: nothing, except the power flickered at 6 a.m. That clue suggests the router or ISP modem restarted.`,
      `Scene 2, Layer 1: the Wi-Fi icon on the tablet is connected, and the router's WAN light is steady. Jun rules out a dead cable or a switched-off router in ten seconds.`,
      `Scene 3, Layer 2/3 on the device: ipconfig shows 192.168.1.23 with a gateway of 192.168.1.1. It is NOT a 169.254.x.x APIPA address, so DHCP worked.`,
      `Scene 4, the gateway: ping 192.168.1.1 replies. The local network is healthy.`,
      `Scene 5, beyond the gateway: ping 8.8.8.8 replies. The ISP link and NAT work, so routing to the internet is fine.`,
      `Scene 6, the names: ping google.com says "could not find host". Names fail while addresses work, the signature of a DNS problem. nslookup shows the tablet is using 192.168.1.1 as DNS, but the router lost its upstream DNS settings after the power flicker.`,
      `Scene 7, the fix: Jun sets the router (or the tablet) to use a public resolver such as 1.1.1.1 and 8.8.8.8, tests again, and the app loads. He writes the cause on a sticky note taped to the router: "Power flicker reset DNS."`,
    ],
    clues: [
      [`Wi-Fi connected, WAN light on`, `Physical and link layers are fine`],
      [`IP is 192.168.1.23, not 169.254.x.x`, `DHCP worked`],
      [`Ping to gateway succeeds`, `Local network healthy`],
      [`Ping to 8.8.8.8 succeeds`, `ISP, routing, and NAT are fine`],
      [`Ping to google.com fails`, `Name resolution (DNS) is the broken piece`],
    ],
    after: `A week later the same router resets again. This time Aling Nena checks the sticky note, changes the DNS entry herself, and is back online in two minutes without a call. Documentation turned a repeat outage into a self-service fix.`,
    tips: [
      `Ping a name AND an IP. If the IP works and the name does not, stop looking at cables and look at DNS.`,
      `169.254.x.x means the device could not get an address from DHCP; this is a different branch of the checklist.`,
      `Ask "what changed?" first. Power events, firmware updates, and new equipment explain most sudden outages.`,
    ],
    exam: `The exam loves "ping IP works, ping name fails" = DNS. Also remember the logical order: verify the problem, check the local config, ping the gateway, ping a remote IP, then test names.`,
    mistakes: [
      `Rebooting everything first and destroying the evidence.`,
      `Testing only with a website name, which mixes DNS problems with connectivity problems.`,
      `Forgetting to document the cause for the next outage.`,
    ],
    terms: [
      { term: 'APIPA', def: `Automatic address 169.254.x.x a host gives itself when DHCP fails.` },
      { term: 'Default gateway', def: `Router address a host uses to reach other networks.` },
      { term: 'DNS resolver', def: `Server that translates names such as google.com into IP addresses.` },
      { term: 'Bottom-up troubleshooting', def: `Checking from the physical layer upward.` },
    ],
    commands: [
      { os: 'Windows', cmd: 'ipconfig /all', desc: `Shows IP address, gateway, and DNS servers in use.` },
      { os: 'Windows', cmd: 'ping 8.8.8.8', desc: `Tests reachability beyond the gateway without involving DNS.` },
      { os: 'Windows', cmd: 'nslookup google.com', desc: `Tests whether name resolution works and which server answers.` },
    ],
    checks: [
      {
        prompt: `A PC can ping 8.8.8.8 but cannot ping google.com. What is the most likely problem?`,
        options: [`Bad cable`, `DNS resolution`, `DHCP exhaustion`, `Wrong subnet mask`],
        correct: 1,
        explanation: `Reaching an IP but not a name isolates the failure to name resolution.`,
      },
      {
        prompt: `A device shows 169.254.33.8 after a power outage. What does this suggest?`,
        options: [`DNS is down`, `DHCP did not assign an address`, `The gateway is working`, `NAT failed`],
        correct: 1,
        explanation: `APIPA addresses appear when a host cannot reach a DHCP server.`,
      },
      {
        prompt: `Which step best shows the local network is healthy before looking at the ISP?`,
        options: [`Ping the default gateway`, `Reinstall the browser`, `Change the SSID`, `Flush the ARP cache on the router`],
        correct: 0,
        explanation: `A reply from the gateway confirms local connectivity and basic addressing.`,
      },
    ],
    mini: {
      prompt: `A customer's laptop has a valid IP and gateway, ping to 8.8.8.8 fails, but ping to the gateway works.`,
      task: `Which part of the path is now suspect, and what would you check next?`,
    },
    recap: `Work in order: link, IP address, gateway, remote IP, then DNS. Each result shrinks the list of suspects. "IP works, name fails" points to DNS, and a one-line note after the fix helps the next outage.`,
    classroom: `"Hindi 'down ang internet' ang problema — kailangan mong hanapin kung aling hakbang ng daan ang pumutol."`,
  });

  // ---------------------------------------------------------------------
  NetReady.LESSONS['15-2'] = story({
    id: '15-2',
    slug: 'story-call-center-robotic-voices',
    title: 'Story: The Call Center Where Voices Turned Robotic',
    minutes: 13,
    outcomes: [
      `Connect jitter, packet loss, and latency to bad voice quality.`,
      `Explain why QoS and a voice VLAN protect real-time traffic.`,
      `Recognize a duplex mismatch from interface error counters.`,
    ],
    why: `Voice and video are the first things users notice when a network struggles. This story ties together QoS, VLANs, and Layer 1 and 2 errors through one noisy Monday.`,
    simple: `A call center in Ortigas hears customers complain that agents sound "robotic" and calls drop, but only in the afternoon. Ate Mara, the network lead, does not blame the phones. She measures jitter and packet loss, notices that the problem appears when the sales team uploads large reports, and finds that voice and bulk data share the same queue. She then finds one agent port with climbing late collisions, a duplex mismatch from a hard-coded setting. Two fixes solve two separate causes: QoS to prioritize voice, and matching duplex on the bad port.`,
    taglish: `Sa isang call center sa Ortigas, nagrereklamo ang mga customer na "robot" ang boses ng agents at napuputol ang tawag, lalo na sa hapon. Hindi agad sinisi ni Ate Mara ang mga telepono. Sinukat niya ang jitter at packet loss. Napansin niyang tuwing nag-a-upload ng malalaking report ang sales, sumasama ang voice traffic sa trapik ng data. Nakita rin niyang may isang port na tumataas ang late collisions — duplex mismatch. Dalawang magkaibang dahilan, dalawang magkaibang ayos: QoS para unahin ang boses, at ayusin ang duplex.`,
    analogy: {
      title: 'Ambulansya sa EDSA',
      text: `Kung walang priority lane, kasabay ng mga trak ang ambulansya at nahuhuli siya. Ang QoS ay ang ambulance lane para sa voice. Ang duplex mismatch naman ay butas-butas na kalsada sa isang bahagi: kahit may priority lane, matatalbog pa rin ang sasakyan doon.`,
    },
    scenes: [
      `Scene 1, the symptom: calls sound choppy from about 2 p.m. Agents say the words "come in pieces". That is the classic feel of jitter and packet loss, not of low bandwidth.`,
      `Scene 2, measuring: Mara checks the phone system's call quality report. Latency is acceptable (about 40 ms), but jitter spikes above 60 ms and loss reaches 3 percent during the afternoon. Voice generally wants under 150 ms one-way delay, under 30 ms jitter, and under 1 percent loss.`,
      `Scene 3, correlation: the spikes line up with a daily 2 p.m. report upload from the sales floor. Bulk data fills the WAN queue and voice packets wait behind it, which is called queuing delay and tail drops.`,
      `Scene 4, the QoS fix: she classifies voice (marked DSCP EF) into a strict-priority queue, gives sales uploads a lower class, and shapes the bulk traffic so it cannot monopolize the link. Phones and switches already trust the DSCP markings from the voice VLAN.`,
      `Scene 5, the leftover problem: one agent, Paolo, still has bad calls every hour. Mara runs show interfaces on his access port and sees late collisions and CRC errors growing. His port was hard-coded to 100/full but his phone's PC port negotiates automatically, so it fell to half duplex.`,
      `Scene 6, the second fix: she sets both ends to auto-negotiate. Errors stop, and Paolo's calls clear up.`,
      `Scene 7, the follow-up: she puts all phones on a dedicated voice VLAN, documents the QoS policy, and sets an alert on jitter above 30 ms so the next problem pages her before agents complain.`,
    ],
    clues: [
      [`Voice "in pieces", afternoons only`, `Jitter and loss from congestion, not low bandwidth`],
      [`Spikes match the 2 p.m. report upload`, `Bulk traffic competing with voice in one queue`],
      [`Only one agent still has issues`, `A separate, local cause: a port`],
      [`Late collisions and CRC on his port`, `Duplex mismatch between hard-coded and auto ends`],
    ],
    after: `After the fixes, afternoon call-quality scores rise from 3.1 to 4.3 (MOS scale of 5). The sales team never noticed that their uploads were slowed slightly, because shaping only trimmed the bursts.`,
    tips: [
      `"Choppy or robotic" voice means jitter or loss. "Slow downloads" means throughput. Different words, different problems.`,
      `A trusted DSCP marking only helps if every hop honors it. QoS must be consistent end to end.`,
      `Never fix one symptom and assume the story is over. Check whether a second independent cause remains.`,
    ],
    exam: `Know the voice targets (low latency, low jitter, minimal loss), that QoS prioritizes rather than adds bandwidth, that voice VLANs separate and mark voice traffic, and that late collisions point to duplex mismatch.`,
    mistakes: [
      `Buying more bandwidth when the real issue is priority.`,
      `Hard-coding speed and duplex on only one side.`,
      `Putting voice and bulk data in the same queue without classification.`,
    ],
    terms: [
      { term: 'Jitter', def: `Variation in packet arrival time; harmful to voice and video.` },
      { term: 'DSCP', def: `Layer 3 field used to mark traffic priority for QoS.` },
      { term: 'Voice VLAN', def: `Dedicated VLAN that separates and prioritizes IP phone traffic.` },
      { term: 'Shaping', def: `Buffering excess traffic to smooth bursts and protect other classes.` },
      { term: 'MOS', def: `Mean Opinion Score, a 1 to 5 rating of call quality.` },
    ],
    commands: [
      { os: 'Cisco IOS', cmd: 'show interfaces gi0/12', desc: `Shows CRC errors, late collisions, speed, and duplex for the port.` },
      { os: 'Cisco IOS', cmd: 'show policy-map interface', desc: `Displays QoS queue statistics and drops.` },
    ],
    checks: [
      {
        prompt: `Voice calls sound choppy only when large file transfers run. What is the best fix?`,
        options: [`Disable the phones`, `Implement QoS to prioritize voice`, `Add more VLANs for data`, `Replace the cables with Cat 8`],
        correct: 1,
        explanation: `QoS prioritizes real-time voice so bulk transfers cannot delay it.`,
      },
      {
        prompt: `A switch port shows growing late collisions and CRC errors. What is the likely cause?`,
        options: [`Duplex mismatch`, `Expired certificate`, `DNS failure`, `Wrong gateway`],
        correct: 0,
        explanation: `A hard-coded full duplex end paired with an auto-negotiating end often falls to half duplex and produces these errors.`,
      },
      {
        prompt: `Which metric describes the variation in arrival time of packets?`,
        options: [`Latency`, `Bandwidth`, `Jitter`, `MTU`],
        correct: 2,
        explanation: `Jitter is variation in delay and is especially damaging to voice.`,
      },
    ],
    mini: {
      prompt: `Video meetings freeze during backups at night shifts, but web browsing is fine.`,
      task: `Name the likely cause and one control that helps.`,
    },
    recap: `Choppy voice comes from jitter and loss. Classify and prioritize voice with QoS, shape bulk traffic, and use a voice VLAN. Always verify there is not a second, local cause such as a duplex mismatch.`,
    classroom: `"Hindi laging kulang sa bandwidth — minsan kulang lang sa priority."`,
  });

  // ---------------------------------------------------------------------
  NetReady.LESSONS['15-3'] = story({
    id: '15-3',
    slug: 'story-hotel-wifi-nobody-could-use',
    title: 'Story: The Hotel Wi-Fi Nobody Could Use',
    minutes: 13,
    outcomes: [
      `Separate RF problems from addressing and authentication problems.`,
      `Recognize DHCP pool exhaustion and the effect of long lease times.`,
      `Apply channel planning and lease tuning to a busy venue.`,
    ],
    why: `Busy public Wi-Fi fails in several different ways at once. This story teaches you to ask "is it the air, the address, or the login?" before changing anything.`,
    simple: `A beach resort in Cebu says guests can see the Wi-Fi but cannot get online during weekends. The IT contractor, Sir Ramon, finds three separate problems that all look the same to guests: crowded 2.4 GHz channels, a DHCP pool that runs out of addresses because leases last seven days, and a captive portal that times out when many people connect at once. He fixes them in the order that gives the biggest relief first.`,
    taglish: `Sa isang beach resort sa Cebu, nakikita ng mga guest ang Wi-Fi pero hindi makapag-internet tuwing weekend. Si Sir Ramon, ang contractor, ay nakakita ng tatlong magkakahiwalay na problema na pare-pareho ang itsura sa guest: siksikan ang 2.4 GHz channels, naubusan ng IP address ang DHCP dahil pitong araw ang lease, at nagti-timeout ang captive portal kapag sabay-sabay ang konekta. Inayos niya ang tatlo ayon sa pinakamalaking epekto.`,
    analogy: {
      title: 'Fiesta sa plaza',
      text: `Isipin ang plaza tuwing fiesta. Kung iisang mikropono ang gamit ng lahat (iisang channel), hindi magkakarinigan. Kung ang numero ng upuan (IP address) ay nauubos at hindi binabalik ng mga umalis na, wala nang mauupuan ang bagong dating. At kung iisa lang ang guard sa gate (portal), haba ng pila kahit may upuan pa.`,
    },
    scenes: [
      `Scene 1, the report: Friday night, 280 guests, "WiFi connected but no internet". On Monday it works. Load matters, so Ramon suspects capacity.`,
      `Scene 2, the air: a Wi-Fi analyzer shows 9 access points all on 2.4 GHz channel 6 with strong overlap. Co-channel interference means they spend their time waiting for each other. He moves APs to channels 1, 6, and 11, lowers transmit power, and enables 5 GHz with band steering so modern phones leave 2.4 GHz.`,
      `Scene 3, the address: a guest laptop shows a 169.254.x.x address. The DHCP server's pool of 254 addresses shows 100 percent used, and most leases belong to phones that checked out days ago because the lease time is 7 days.`,
      `Scene 4, the fix: he widens the guest VLAN from a /24 to a /22 (1,022 usable addresses) and shortens the guest lease to 1 hour, so abandoned leases return to the pool quickly.`,
      `Scene 5, the login: guests who do get an address are stuck on the captive portal page. The portal server's CPU hits 100 percent when many phones probe it simultaneously. Ramon moves the portal to a stronger VM and extends the session timeout so devices do not re-authenticate every hour.`,
      `Scene 6, verifying: he tests from a phone, a laptop, and a tablet, at the pool and at the lobby, on 2.4 and 5 GHz. All associate, receive an address in the new range, and pass the portal.`,
      `Scene 7, documenting: the changes (channel plan, power levels, VLAN size, lease time, portal specs) are written into the network diagram so a future technician does not "fix" them back.`,
    ],
    clues: [
      [`SSID visible, no internet only on weekends`, `A capacity or load problem, not a broken cable`],
      [`9 APs all on channel 6`, `Co-channel interference and poor channel planning`],
      [`169.254.x.x on a guest laptop`, `DHCP failed because the pool was exhausted`],
      [`7-day leases from departed guests`, `Addresses stuck in use; shorten leases`],
      [`Stuck on portal page, CPU at 100 percent`, `Captive portal overloaded`],
    ],
    after: `The following weekend, 310 guests connect without a single complaint. The only recurring ticket is a guest asking for the password, which now prints on the check-in card.`,
    tips: [
      `For guest or event networks use short leases (minutes to an hour) and a large enough subnet for peak occupancy plus growth.`,
      `Ask three questions in order: can the device hear the AP (RF), did it get an address (DHCP), can it authenticate or pass the portal (AAA).`,
      `Fixing RF alone would not have solved the DHCP exhaustion. Always check every layer of the path.`,
    ],
    exam: `A scenario with many clients, "connected but no internet", and 169.254 addresses points to DHCP scope exhaustion. Remember the cures: larger scope or subnet, shorter lease time, and removing unused reservations.`,
    mistakes: [
      `Raising AP power in a crowded venue, which increases interference.`,
      `Leaving a 7-day lease on a guest network with high turnover.`,
      `Ignoring the captive portal as a possible bottleneck.`,
    ],
    terms: [
      { term: 'DHCP scope exhaustion', def: `All addresses in the pool are leased, so new clients get none.` },
      { term: 'Lease time', def: `How long a client may keep an assigned address before renewing.` },
      { term: 'Captive portal', def: `Web page guests must pass before gaining network access.` },
      { term: 'Band steering', def: `Encouraging dual-band clients to use 5 GHz rather than 2.4 GHz.` },
    ],
    checks: [
      {
        prompt: `A busy guest network has many clients with 169.254.x.x addresses. What should you check first?`,
        options: [`The DHCP scope utilization`, `The monitor resolution`, `The antenna color`, `The UPS battery`],
        correct: 0,
        explanation: `APIPA addresses at scale suggest DHCP cannot hand out addresses, often because the pool is exhausted.`,
      },
      {
        prompt: `Which change best helps a high-turnover guest network avoid running out of IP addresses?`,
        options: [`Increase lease time to 30 days`, `Shorten the lease time`, `Disable DHCP`, `Use static IPs for every guest`],
        correct: 1,
        explanation: `Short leases return addresses from departed devices to the pool quickly.`,
      },
      {
        prompt: `Nine APs on the same 2.4 GHz channel are suffering from which problem?`,
        options: [`Co-channel interference`, `Duplex mismatch`, `ARP poisoning`, `DNS poisoning`],
        correct: 0,
        explanation: `Multiple APs on one channel share airtime and reduce performance.`,
      },
    ],
    mini: {
      prompt: `A conference center's Wi-Fi works fine in the morning but fails after lunch when attendance doubles.`,
      task: `List two capacity-related things you would check.`,
    },
    recap: `Ask whether the problem is the air, the address, or the login. Plan channels, size the subnet and lease time for peak users, and make sure the captive portal can scale. Document final settings.`,
    classroom: `"Tatlong magkakaibang problema, iisang reklamo. Isa-isahin mo ang air, address, at login."`,
  });

  // ---------------------------------------------------------------------
  NetReady.LESSONS['15-4'] = story({
    id: '15-4',
    slug: 'story-intern-plugged-in-a-router',
    title: 'Story: The Intern Who Plugged In a Router',
    minutes: 13,
    outcomes: [
      `Recognize the signs of a rogue DHCP server and a switching loop.`,
      `Explain which switch features would have prevented each problem.`,
      `Describe a calm containment-then-fix approach.`,
    ],
    why: `Nothing teaches Layer 2 security like a real accident. This story shows how one well-meaning plug-in can cause a rogue DHCP server and a broadcast storm in the same afternoon.`,
    simple: `A new intern, Bea, cannot get Wi-Fi at her desk, so she plugs a spare home router into a wall jack and connects her laptop to it. Within minutes the whole floor loses the internet. Two things happened. The home router started answering DHCP requests with its own 192.168.0.x addresses and itself as gateway (a rogue DHCP server). Then, because she also connected two of its LAN ports to two wall jacks, a switching loop formed and a broadcast storm saturated the switches. The network engineer, Kuya Dan, contains the incident first, then proves the cause, then hardens the switches.`,
    taglish: `Si Bea, bagong intern, walang Wi-Fi sa mesa kaya nagsaksak ng lumang home router sa wall jack. Ilang minuto lang, nawalan ng internet ang buong floor. Dalawang bagay ang nangyari: (1) nagbigay ang router ng sarili niyang DHCP, 192.168.0.x, at siya ang gateway — rogue DHCP server; (2) dahil dalawang LAN port niya ang nasaksak sa dalawang jack, nagka-loop at nagkaroon ng broadcast storm. Si Kuya Dan muna ang nag-contain, saka nag-diagnose, saka nag-harden.`,
    analogy: {
      title: 'Pekeng information booth sa mall',
      text: `May nagbukas ng pekeng information booth sa gitna ng mall at itinuturo ang mga tao sa maling direksyon (rogue DHCP). Tapos may dalawang pinto na nagkonekta sa isa't isa kaya paikot-ikot ang mga tao at napupuno ang pasilyo (loop at broadcast storm).`,
    },
    scenes: [
      `Scene 1, the alarm: 40 users report "no internet" at once. The monitoring dashboard shows switch CPU at 95 percent and the uplink at 100 percent utilization with mostly broadcast traffic.`,
      `Scene 2, containment: Dan does not start rebooting. He identifies the access switch with the highest broadcast counters using show interfaces, finds the busiest edge port, and shuts it down. The storm ends within seconds.`,
      `Scene 3, the clue about addresses: a user's ipconfig shows 192.168.0.14 with gateway 192.168.0.1, while the company uses 10.20.0.0/24. That is not our DHCP server. A rogue DHCP server handed out the address.`,
      `Scene 4, tracing: he looks up the rogue router's MAC address in the switch MAC table to find the port, and walks to Bea's desk. She apologizes; she thought a router "makes Wi-Fi stronger".`,
      `Scene 5, why a loop formed: the router's LAN ports are a tiny switch. With two ports patched to two wall jacks, frames could circle between the two. STP would normally block one path, but the cheap router did not run a compatible STP and the edge ports had no protection.`,
      `Scene 6, the hardening: Dan enables DHCP snooping (only the uplink and the DHCP server link are trusted), BPDU Guard on all PortFast access ports, storm control for broadcast and multicast, and port security with a MAC limit. He also enables Dynamic ARP Inspection that uses the snooping table.`,
      `Scene 7, the human fix: he posts a short policy ("no personal network devices") and gives Bea a proper request path for Wi-Fi coverage. The incident report lists timeline, root cause, and the new controls.`,
    ],
    clues: [
      [`Broadcast traffic at 100 percent on the uplink`, `Switching loop and broadcast storm`],
      [`Client gateway is 192.168.0.1`, `Rogue DHCP server answered the request`],
      [`Unknown MAC found on one wall port`, `Source device: a consumer router`],
      [`Edge ports accept BPDUs and DHCP offers`, `Missing BPDU Guard and DHCP snooping`],
    ],
    after: `Three months later a contractor plugs a small unmanaged switch into two ports by mistake. BPDU Guard puts both ports into err-disabled within a second, and only the contractor's own desk is affected. The report is one paragraph long.`,
    tips: [
      `Contain first (shut the offending port), investigate second. Evidence stays available in logs and tables.`,
      `A gateway or DNS server address that is not yours on a client is the fastest way to confirm a rogue DHCP server.`,
      `Broadcast storm symptoms: very high switch CPU, link lights flashing constantly, and everyone slow at once.`,
    ],
    exam: `Match controls to threats: rogue DHCP = DHCP snooping, loops from unauthorized switches = BPDU Guard and STP, floods = storm control, MAC flooding = port security, forged ARP = DAI.`,
    mistakes: [
      `Rebooting every switch instead of finding the source port.`,
      `Trusting all switch ports for DHCP.`,
      `Blaming the user without fixing the missing safeguards.`,
    ],
    terms: [
      { term: 'Rogue DHCP server', def: `Unauthorized device that hands out IP settings.` },
      { term: 'Broadcast storm', def: `Broadcast traffic circulating endlessly in a loop and consuming bandwidth.` },
      { term: 'Err-disabled', def: `Port state when a switch shuts a port because a protection feature triggered.` },
      { term: 'Containment', def: `Limiting the spread or damage of an incident before fixing the root cause.` },
    ],
    commands: [
      { os: 'Cisco IOS', cmd: 'show mac address-table address aaaa.bbbb.cccc', desc: `Finds the port where a given MAC address was learned.` },
      { os: 'Cisco IOS', cmd: 'show errdisable recovery', desc: `Shows err-disable reasons and recovery settings.` },
    ],
    checks: [
      {
        prompt: `A client receives 192.168.0.14 with gateway 192.168.0.1, but the company uses 10.20.0.0/24. What is most likely happening?`,
        options: [`DNS poisoning`, `A rogue DHCP server`, `A failed UPS`, `A bad patch panel`],
        correct: 1,
        explanation: `An address and gateway outside the corporate scheme indicate an unauthorized DHCP server.`,
      },
      {
        prompt: `Which feature shuts down an edge port when it receives a spanning tree BPDU?`,
        options: [`Root Guard`, `BPDU Guard`, `Storm control`, `MACsec`],
        correct: 1,
        explanation: `BPDU Guard puts a PortFast port into err-disabled if a BPDU arrives.`,
      },
      {
        prompt: `What should you do first when a broadcast storm is crippling the network?`,
        options: [`Contain it by isolating or shutting the offending port`, `Reinstall the OS on every PC`, `Change the Wi-Fi password`, `Rewrite the documentation`],
        correct: 0,
        explanation: `Containing the incident stops the harm; deeper investigation comes next.`,
      },
    ],
    mini: {
      prompt: `After the incident, management asks which two switch features would have stopped each problem separately.`,
      task: `Name one feature for the rogue DHCP and one for the loop.`,
    },
    recap: `A single plug-in produced a rogue DHCP server and a loop. Contain first, then identify the source with MAC tables and client settings, and prevent repeats with DHCP snooping, BPDU Guard, storm control, port security, and DAI.`,
    classroom: `"Maliit na router, malaking gulo. Dapat ang switch mo ang unang depensa, hindi ang tiwala."`,
  });

  // ---------------------------------------------------------------------
  NetReady.LESSONS['15-5'] = story({
    id: '15-5',
    slug: 'story-typhoon-night-failover',
    title: 'Story: Typhoon Night — When the Data Center Lost Power',
    minutes: 14,
    outcomes: [
      `Trace a failover from UPS to generator to a disaster-recovery site.`,
      `Apply RPO and RTO to a real timeline.`,
      `Explain hot, warm, and cold sites in context.`,
    ],
    why: `Business continuity questions feel abstract until you watch them play out. This story walks through one night when a typhoon cuts the power and every layer of resilience gets used or tested.`,
    simple: `Typhoon season hits Manila. The company's main data center loses grid power at 9:42 p.m. The UPS carries the load for a few minutes, the diesel generator starts, and everything seems fine until the fuel supply and flooded roads threaten the plan. At 2 a.m. the team decides to fail over to the hot site in Clark. The company had set an RPO of 5 minutes and an RTO of 1 hour; the story shows how those two numbers shaped what was built and how the result was measured.`,
    taglish: `Panahon ng bagyo sa Maynila. 9:42 p.m., nawalan ng kuryente ang pangunahing data center. Ang UPS ang unang sumalo ng ilang minuto, tapos umandar ang generator. Pero ang baha at kakulangan ng diesel ay nagbabanta, kaya 2 a.m. nagdesisyon ang team na mag-failover sa hot site sa Clark. Ang RPO nila ay 5 minuto at ang RTO ay 1 oras. Makikita mo sa kuwento kung paano hinubog ng dalawang numerong iyon ang disenyo.`,
    analogy: {
      title: 'Brownout sa bahay',
      text: `Ang UPS ay parang emergency lamp na kumikislap agad. Ang generator ay lamparang may gasolina na kailangan pang sindihan. Ang hot site ay lumipat ka na sa bahay ng kamag-anak na nakahanda na ang kama at pagkain. Ang cold site ay bakanteng bahay na kailangan mo pang dalhan ng gamit.`,
    },
    scenes: [
      `Scene 1, 9:42 p.m., grid power fails. The UPS units switch to battery with no interruption (they sit between the power source and the equipment). Runtime at the current load: about 12 minutes. Monitoring sends an alert via SNMP trap.`,
      `Scene 2, 9:43 p.m., the automatic transfer switch starts the diesel generator. Within 30 seconds it takes over and the UPS recharges. This power chain (utility, UPS, generator) is the standard facilities design.`,
      `Scene 3, 11 p.m., trouble: flooding blocks the fuel truck. The generator has 6 hours of fuel left. Cooling is also on generator power; room temperature climbs slowly while HVAC cycles.`,
      `Scene 4, 1:30 a.m., the decision: the incident commander declares a disaster and invokes the DR plan. The RTO is 1 hour (maximum acceptable downtime), so the clock matters. The decision criteria were pre-agreed in the plan, so there is no debate.`,
      `Scene 5, replication: the database replicates asynchronously to the Clark hot site every few minutes. The last successful replication point was 9:40 p.m., so at most about 2 minutes of data are lost, which is inside the 5-minute RPO.`,
      `Scene 6, failover: DNS records and the global load balancer shift traffic to Clark. Because the hot site already has current data, equipment, and connectivity, applications are serving customers again at 2:10 a.m. Total downtime about 40 minutes: within RTO.`,
      `Scene 7, the retrospective: they find a warm-site vendor system that needed an hour of manual steps. They also note the generator's fuel contract. Mean Time To Repair for the main site later totals three days; the lessons go into the plan, which is tested twice a year.`,
    ],
    clues: [
      [`Power fails, load continues for minutes`, `UPS: short-term battery bridge`],
      [`Engine starts and carries the load`, `Generator: long-term backup power`],
      [`Data loss limited to about 2 minutes`, `RPO (acceptable data loss) was met`],
      [`Service back in 40 minutes`, `RTO (acceptable downtime) was met`],
      [`Site ready with current data and equipment`, `Hot site`],
    ],
    after: `The company keeps the same targets but adds a second fuel supplier and a flood-proof route plan. The next typhoon passes with only a short page to the on-call engineer.`,
    tips: [
      `RPO looks backward (how much data you can lose). RTO looks forward (how long you can be down).`,
      `UPS buys minutes, generators buy hours. Neither replaces a DR site for a prolonged outage.`,
      `A DR plan is only real if it has been tested. Untested plans fail at the worst moment.`,
    ],
    exam: `Know hot (ready now), warm (partially ready, hours), cold (space and power only, days), plus RPO, RTO, MTTR, MTBF. Also remember the power chain: utility, UPS, generator.`,
    mistakes: [
      `Mixing up RPO and RTO.`,
      `Assuming a generator starts instantly without a UPS bridge.`,
      `Never testing failover, so the first real test is a real disaster.`,
    ],
    terms: [
      { term: 'RPO', def: `Recovery Point Objective: maximum acceptable amount of data loss measured in time.` },
      { term: 'RTO', def: `Recovery Time Objective: maximum acceptable downtime.` },
      { term: 'Hot site', def: `Fully equipped alternate site ready to take over almost immediately.` },
      { term: 'Warm site', def: `Partially equipped site that needs some setup or data restoration.` },
      { term: 'Cold site', def: `Basic space and power; equipment must be brought in.` },
    ],
    checks: [
      {
        prompt: `A company can tolerate losing at most 15 minutes of data. Which metric is this?`,
        options: [`RTO`, `RPO`, `MTBF`, `MTTR`],
        correct: 1,
        explanation: `RPO measures acceptable data loss in time.`,
      },
      {
        prompt: `Which site has current data, equipment, and connectivity so it can take over almost immediately?`,
        options: [`Cold site`, `Warm site`, `Hot site`, `Branch office`],
        correct: 2,
        explanation: `A hot site is ready to run production with minimal delay.`,
      },
      {
        prompt: `What is the main job of a UPS during a utility outage?`,
        options: [`Provide days of power`, `Bridge the gap until the generator takes over or equipment shuts down safely`, `Filter DNS requests`, `Cool the servers`],
        correct: 1,
        explanation: `UPS batteries supply short-term power; generators carry the longer load.`,
      },
    ],
    mini: {
      prompt: `A business's RTO is 4 hours but the failover plan takes 7 hours to execute.`,
      task: `Say what is wrong and name one way to reduce the gap.`,
    },
    recap: `Power fails, UPS bridges, generator sustains, and a DR site takes over when the outage is long. RPO limits data loss and RTO limits downtime. Hot sites recover fastest. Testing the plan is what makes it real.`,
    classroom: `"Ang UPS ay pasakalye, ang generator ay susunod, at ang hot site ay ang planong B na handa na."`,
  });

  // ---------------------------------------------------------------------
  NetReady.LESSONS['15-6'] = story({
    id: '15-6',
    slug: 'story-the-email-that-looked-real',
    title: 'Story: The Email That Looked Real',
    minutes: 13,
    outcomes: [
      `Walk through a phishing-to-compromise chain and where each defense applies.`,
      `Identify indicators of social engineering and credential theft.`,
      `Describe a basic incident response sequence.`,
    ],
    why: `Most breaches start with a person, not a firewall. This story follows one convincing email from inbox to incident report so the security topics connect to a human timeline.`,
    simple: `Liza in accounting receives an email that looks like it came from the company's bank, asking her to "verify the payment portal". The link leads to a fake page, which captures her password. An attacker logs in, creates a mail forwarding rule, and tries lateral movement. The SOC analyst, Joel, notices an unusual login from another country, confirms with the user, and follows the incident response steps: identify, contain, eradicate, recover, and learn. Layered defenses (MFA, email filtering, least privilege, logging) each decide how bad the story gets.`,
    taglish: `Si Liza sa accounting ay nakatanggap ng email na parang galing sa bangko: "i-verify ang payment portal". Pumunta siya sa pekeng page at nakuha ang password niya. Nag-login ang attacker, gumawa ng mail forwarding rule, at sinubukang kumalat sa ibang system. Napansin ni Joel, ang SOC analyst, ang kakaibang login galing sa ibang bansa, tinawagan si Liza, at sinunod ang incident response: tukuyin, i-contain, tanggalin, ibalik, at matuto. Ang layered defenses ang magpapasya kung gaano kalala ang kuwento.`,
    analogy: {
      title: 'Pekeng delivery rider',
      text: `May rider na naka-uniform ng courier at humihingi ng susi ng bahay "para sa package". Mukhang totoo, kaya ibinigay mo. Hindi nasira ang pinto — ibinigay mo mismo ang susi. Ganyan ang phishing: walang hacking sa firewall, kundi panloloko sa tao.`,
    },
    scenes: [
      `Scene 1, the bait: an email with a bank logo, urgent language, and a link whose text says the real domain but whose actual target is a look-alike domain (a typosquat). This is phishing; a targeted version aimed at one person is spear phishing.`,
      `Scene 2, the hook: Liza clicks and enters her username and password on a fake login page. The attacker now has working credentials. Without MFA that is enough.`,
      `Scene 3, the foothold: the attacker logs in from overseas, creates an inbox rule forwarding invoices to an external address, and browses shared drives. This is persistence and discovery.`,
      `Scene 4, detection: the SIEM correlates an impossible-travel login (Manila at 9 a.m., then a foreign IP at 9:20 a.m.) with a new forwarding rule. Joel gets a high-severity alert.`,
      `Scene 5, contain: Joel disables the account sessions, forces a password reset, revokes tokens, and blocks the phishing domain at the DNS filter and proxy. He isolates Liza's laptop in case of malware.`,
      `Scene 6, eradicate and recover: he removes the forwarding rule, scans for other inbox rules, checks whether other staff received the same email, and restores normal access with MFA enrolled.`,
      `Scene 7, learn: the report includes a timeline, the indicators of compromise, and improvements: mandatory MFA, email link rewriting, a "report phish" button, and a short training session with a friendly tone, not blame.`,
    ],
    clues: [
      [`Urgent message, look-alike domain`, `Phishing and social engineering`],
      [`Login from another country 20 minutes after a local one`, `Impossible travel, likely stolen credentials`],
      [`New external forwarding rule`, `Attacker persistence and data theft`],
      [`MFA missing on the account`, `A password alone was enough to get in`],
    ],
    after: `Because only one account was affected and MFA was added right after, the loss was limited to a handful of invoices. A month later, the new "report phish" button catches the next campaign within minutes.`,
    tips: [
      `The defenses stack: email filtering, user awareness, MFA, least privilege, logging, and fast response. No single control is enough.`,
      `Do not blame the user. Fast reporting is worth more than perfect behavior.`,
      `Check for persistence (rules, new accounts, tokens) after resetting a password; the password reset alone is not the fix.`,
    ],
    exam: `Know the incident response phases (preparation, identification, containment, eradication, recovery, lessons learned), the types of social engineering (phishing, spear phishing, vishing, smishing, whaling), and that MFA blunts stolen-password attacks.`,
    mistakes: [
      `Resetting the password but leaving the attacker's mail rule in place.`,
      `Skipping lessons learned.`,
      `Training users once a year and expecting results.`,
    ],
    terms: [
      { term: 'Phishing', def: `Deceptive messages that trick users into revealing credentials or running malware.` },
      { term: 'Spear phishing', def: `Phishing aimed at a specific person or group.` },
      { term: 'MFA', def: `Multi-factor authentication, requiring more than a password.` },
      { term: 'Indicator of compromise (IoC)', def: `Evidence such as a domain, IP, or file hash tied to an attack.` },
      { term: 'Impossible travel', def: `Logins from distant places in a time too short for real travel.` },
    ],
    checks: [
      {
        prompt: `Which control most reduces the damage when a user's password is phished?`,
        options: [`Multi-factor authentication`, `Longer cable runs`, `A faster switch`, `More VLANs`],
        correct: 0,
        explanation: `MFA means a stolen password alone is not enough to sign in.`,
      },
      {
        prompt: `After confirming a compromised account, what is the correct early action?`,
        options: [`Contain by disabling sessions and forcing credential reset`, `Delete all logs`, `Wait for the attacker to leave`, `Publish the incident on social media`],
        correct: 0,
        explanation: `Containment limits damage; logs must be preserved as evidence.`,
      },
      {
        prompt: `A targeted phishing email aimed at one executive is called what?`,
        options: [`Vishing`, `Whaling or spear phishing`, `Tailgating`, `Smurfing`],
        correct: 1,
        explanation: `Spear phishing targets specific individuals; whaling targets senior executives.`,
      },
    ],
    mini: {
      prompt: `You reset a compromised user's password, but the attacker still receives copies of invoices.`,
      task: `What did you miss?`,
    },
    recap: `Phishing steals credentials, MFA limits what stolen passwords can do, logging and correlation detect the abuse, and incident response contains, removes, and learns. Check for persistence before declaring victory.`,
    classroom: `"Hindi pinasok ang firewall — pinapasok siya ng tao. Kaya layers ang sagot, hindi iisang pader."`,
  });

  // ---------------------------------------------------------------------
  NetReady.LESSONS['15-7'] = story({
    id: '15-7',
    slug: 'story-branch-that-couldnt-reach-hq',
    title: 'Story: The Branch That Could Not Reach Headquarters',
    minutes: 14,
    outcomes: [
      `Diagnose a site-to-site VPN problem with addressing, routing, and MTU clues.`,
      `Recognize overlapping subnets as a cause of "tunnel up, nothing works".`,
      `Apply a methodical, documented fix for a multi-cause problem.`,
    ],
    why: `Real outages often hide two or three causes behind one complaint. This story is a full, multi-domain ticket, like a performance-based exam question, told as a narrative.`,
    simple: `A new branch in Davao opens and its VPN to headquarters shows "up", but nobody can reach the HQ file server. Network engineer Tess works through it step by step. First the tunnel itself is fine. Then she finds that the branch LAN uses 192.168.1.0/24, the same as a lab network at HQ, so routing is ambiguous. After renumbering the branch, small packets work but large transfers freeze, which is an MTU problem caused by VPN overhead. Two causes, solved in sequence, documented in the end.`,
    taglish: `Bagong branch sa Davao. "Up" ang VPN papuntang headquarters, pero walang makaabot sa file server. Si Tess, ang engineer, ay nag-troubleshoot nang sunud-sunod. Maayos ang tunnel. Pero 192.168.1.0/24 ang branch LAN — pareho ng isang lab network sa HQ, kaya malabo ang routing. Pagkatapos i-renumber, gumana ang maliliit na packet pero nagfi-freeze ang malalaking transfer — MTU problem dahil sa overhead ng VPN. Dalawang sanhi, inayos nang isa-isa, at idinokumento.`,
    analogy: {
      title: 'Dalawang kalye na magkapareho ang pangalan',
      text: `Kung may "Rizal Street" sa Davao at "Rizal Street" din sa Maynila at pareho ang numero ng bahay, hindi alam ng kartero kung saan ihahatid. Ganyan ang overlapping subnet. Ang MTU naman ay ang laki ng kahon na kasya sa tulay — kapag mas malaki, hindi makakatawid.`,
    },
    scenes: [
      `Scene 1, the ticket: "VPN is up but we cannot open \\\\hq-files". The branch has 12 PCs, a firewall, and an IPsec tunnel. Tess confirms the tunnel's phase 1 and phase 2 security associations are established, so authentication and IKE are not the issue.`,
      `Scene 2, ping tests: from a branch PC she can ping the branch gateway but not HQ's file server at 192.168.1.50. She notices that 192.168.1.50 looks suspiciously like the branch's own LAN range.`,
      `Scene 3, the addressing clue: ipconfig on the branch PC shows 192.168.1.23/24. HQ's server is at 192.168.1.50/24, which the PC considers LOCAL, so it ARPs for it instead of sending traffic to the gateway. Overlapping subnets: the packet never enters the tunnel.`,
      `Scene 4, the fix: she renumbers the branch to 10.50.0.0/24 (matching the company IP plan, which should have been used all along), updates DHCP scope, gateway, and the VPN's local traffic selector, and adds the matching route at HQ.`,
      `Scene 5, new symptom: ping works and the share lists, but copying a 200 MB file freezes at 1 percent. Small packets pass; large ones do not. That pattern is the classic MTU symptom.`,
      `Scene 6, diagnosing MTU: ping -f -l 1472 fails, 1400 succeeds. IPsec ESP adds overhead, so the path MTU is lower than 1500. A firewall rule also blocks ICMP fragmentation-needed messages, so Path MTU Discovery cannot work.`,
      `Scene 7, the second fix: she allows the needed ICMP types and sets TCP MSS clamping to 1360 on the tunnel interface so hosts never send segments that are too large. The file copy flies.`,
      `Scene 8, the wrap-up: she documents both causes, updates the IP plan and the network diagram, adds the branch to monitoring, and writes a standard branch onboarding checklist: unique subnet, DHCP scope, route, ACLs, MTU/MSS, test files.`,
    ],
    clues: [
      [`VPN shows up, SAs established`, `Authentication and key exchange are working`],
      [`HQ server IP looks like the branch LAN range`, `Overlapping subnets`],
      [`Small pings pass, big transfers freeze`, `MTU problem across the tunnel`],
      [`ICMP fragmentation-needed blocked`, `Path MTU Discovery broken`],
    ],
    after: `The Davao branch is onboarded with the checklist. When Cebu opens two months later, the same checklist catches a similar overlap before the first user even logs in.`,
    tips: [
      `"Tunnel up" proves only that the tunnel exists. It does not prove routing, addressing, firewall rules, or MTU are correct.`,
      `Plan IP space across ALL sites before building any of them. Overlap is expensive to fix later.`,
      `After fixing one cause, test again with realistic conditions (large file, real application). A second cause can be hiding.`,
    ],
    exam: `Performance-based questions often layer problems: addressing first, then routing, then ACL or firewall, then MTU. Learn the order, and remember that "small works, large fails" points to MTU.`,
    mistakes: [
      `Assuming an up tunnel means the VPN problem is solved.`,
      `Using the common home range 192.168.1.0/24 at branches.`,
      `Blocking all ICMP and breaking Path MTU Discovery.`,
    ],
    terms: [
      { term: 'Overlapping subnets', def: `The same address range used in two connected networks, making routing ambiguous.` },
      { term: 'Traffic selector', def: `VPN setting that defines which local and remote networks use the tunnel.` },
      { term: 'MSS clamping', def: `Lowering the TCP MSS on a device so segments fit the path MTU.` },
      { term: 'Onboarding checklist', def: `Standard list of steps that makes a new site consistent and testable.` },
    ],
    commands: [
      { os: 'Windows', cmd: 'ping -f -l 1400 10.0.0.50', desc: `Tests a specific packet size with Don't Fragment set to find the usable MTU.` },
      { os: 'Windows', cmd: 'route print', desc: `Shows the host routing table, helpful for spotting a destination treated as local.` },
      { os: 'Cisco IOS', cmd: 'show crypto ipsec sa', desc: `Shows IPsec security associations and packet counters for the tunnel.` },
    ],
    checks: [
      {
        prompt: `A VPN tunnel is up, but a branch PC cannot reach an HQ server whose address is in the same subnet as the PC's own LAN. What is the problem?`,
        options: [`Expired SSL certificate`, `Overlapping subnets`, `Wrong DNS suffix`, `Low RSSI`],
        correct: 1,
        explanation: `The PC treats the HQ address as local, so traffic never goes to the gateway and into the tunnel.`,
      },
      {
        prompt: `After the VPN is fixed, small pings work but large file copies freeze. What do you suspect?`,
        options: [`Duplex mismatch`, `MTU/MSS problem`, `Rogue DHCP`, `Dead battery on a UPS`],
        correct: 1,
        explanation: `VPN overhead lowers the effective MTU and blocked ICMP can prevent PMTUD from adapting.`,
      },
      {
        prompt: `Which technique makes hosts send smaller TCP segments across a tunnel?`,
        options: [`MSS clamping`, `VLAN trunking`, `Port mirroring`, `Link aggregation`],
        correct: 0,
        explanation: `MSS clamping rewrites the MSS in the TCP handshake so segments fit the tunnel MTU.`,
      },
    ],
    mini: {
      prompt: `Your company is about to open five branches. Management wants a way to avoid the Davao problem.`,
      task: `Name two things you would put in the onboarding checklist.`,
    },
    recap: `A tunnel that is up is only the beginning. Check addressing (overlap), routing, firewall rules, and then MTU. Fix one cause at a time, retest realistically, and turn the lessons into a checklist for the next site.`,
    classroom: `"Hindi sapat na 'up' ang tunnel. Tanungin mo pa rin: tama ba ang address, ruta, firewall, at laki ng packet?"`,
  });
}(window.NetReady));
