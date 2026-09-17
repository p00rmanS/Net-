# Master Prompt: Build the Ultimate CompTIA Network+ Learning Course

## How to Use This Prompt

Copy everything under **START OF MASTER PROMPT** and paste it into Claude Code, Codex, Cursor, Replit Agent, Bolt, Lovable, or another AI coding assistant. The AI must build a complete, working learning website—not merely describe one.

---

# START OF MASTER PROMPT

## Role

Act as a senior network engineer, CompTIA Network+ instructor, instructional designer, curriculum writer, UX/UI designer, and expert front-end developer.

Build a complete, polished, Udemy-style self-paced learning website named:

> **NetReady+ — CompTIA Network+ Mastery Course**

The course must teach a true beginner from zero networking knowledge through exam readiness and practical help-desk/network-technician competence.

## Learner Profile

Design this course for James, an Information Technology student preparing for CompTIA Network+ and a future SOC analyst role. He learns best through:

- Simple English followed by natural Taglish explanations
- Everyday analogies from restaurants, airports, roads, houses, schools, offices, and Philippine businesses
- Short lessons that build gradually from fundamentals
- Visual explanations and step-by-step demonstrations
- Real-life troubleshooting scenarios
- Important keywords, commands, port numbers, acronyms, and exam traps
- Frequent practice questions with clear explanations
- Encouraging feedback without making the content childish

Assume the learner has basic computer knowledge but may not yet understand networking terminology.

## Primary Goal

Create a real, usable course platform that:

1. Covers the current CompTIA Network+ **N10-009** objectives.
2. Builds practical networking skills, not memorization alone.
3. Explains difficult topics using Simple English and Taglish.
4. Tracks lessons, scores, weak areas, streaks, bookmarks, and course progress locally.
5. Includes enough lessons, labs, quizzes, and mock exams to support weeks of study.
6. Works offline after the initial load and requires no paid tools or APIs.

Before finalizing the curriculum, verify the current official CompTIA Network+ exam code, domain names, weightings, and objectives from CompTIA. Store exam metadata in one editable JavaScript data object so a future exam version can be updated easily. Do not copy paid course material or reproduce proprietary exam questions.

## Technology Requirements

Use:

- Semantic HTML5
- Modern CSS3
- Vanilla JavaScript (ES6+)
- Local JSON or JavaScript objects for course data
- `localStorage` for progress and preferences
- Optional Chart.js only if loaded locally or with a graceful no-network fallback
- A service worker and web app manifest for offline/PWA support

Do not require:

- React, Vue, Angular, or another framework
- A backend or database
- User accounts
- Paid APIs
- Build tools for the base version

The project must run by opening `index.html` or through a simple local static server.

## Required Project Files

Create a clean structure similar to:

```text
netready-plus/
├── index.html
├── css/
│   ├── styles.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── course-data.js
│   ├── quiz-engine.js
│   ├── progress.js
│   ├── labs.js
│   └── flashcards.js
├── assets/
│   ├── icons/
│   └── diagrams/
├── manifest.json
├── service-worker.js
└── README.md
```

If a simpler file structure improves reliability, explain the decision in the README.

## Course Scope and Curriculum

Organize the course around the official N10-009 domains while adding prerequisite and career-focused sections. At minimum, cover these weighted domains:

| Domain | Target Weight |
| --- | ---: |
| Networking Concepts | 23% |
| Network Implementation | 20% |
| Network Operations | 19% |
| Network Security | 14% |
| Network Troubleshooting | 24% |

Verify these values against the latest official objectives before implementation.

Build at least **12 modules, 100 lessons, 25 guided labs, 500 original practice questions, and 3 full mock exams**. If generating all content in one response would reduce quality, implement the complete platform first and then populate content module by module without leaving fake buttons or broken features.

### Module 0 — Welcome, Exam Roadmap, and Study Setup

- What Network+ is and the jobs it supports
- How the N10-009 exam is organized
- Multiple-choice versus performance-based questions
- How to study with the website
- Initial diagnostic assessment
- Suggested 8-week, 12-week, and 16-week plans

### Module 1 — Networking From Absolute Zero

- What a network is
- LAN, WAN, WLAN, PAN, MAN, SAN, and VPN
- Clients, servers, peers, hosts, nodes, and endpoints
- Internet, intranet, and extranet
- Bandwidth, throughput, latency, jitter, packet loss, and availability
- Unicast, multicast, broadcast, and anycast
- Frames, packets, segments, datagrams, and encapsulation

### Module 2 — OSI and TCP/IP Models

- All seven OSI layers
- TCP/IP model mapping
- Protocol data units
- Encapsulation and de-encapsulation
- Devices and protocols at each layer
- Layer-by-layer troubleshooting
- “What happens when I open a website?”

Use a memorable Taglish analogy such as sending food from a restaurant kitchen to a guest, where every layer has a specific responsibility.

### Module 3 — Ethernet, Cabling, and Physical Infrastructure

- Ethernet standards and frame basics
- MAC addresses and switching
- Copper: UTP, STP, Cat 5e, Cat 6, Cat 6a, and Cat 8
- Fiber: single-mode, multimode, connectors, transceivers, and wavelengths
- Coaxial and legacy media
- Straight-through, crossover, rollover, and console cables
- MDF, IDF, patch panels, racks, demarcation points, and smart jacks
- PoE standards and power budgets
- Cable testing tools and common faults

### Module 4 — IPv4 Addressing and Subnetting

- Binary and decimal fundamentals
- IPv4 structure
- Public, private, loopback, link-local, multicast, and broadcast addresses
- CIDR notation and subnet masks
- Network ID, broadcast ID, usable host range, and host capacity
- Classful history versus classless networking
- VLSM and route summarization
- Fast subnetting techniques
- At least 100 generated subnetting exercises with step-by-step solutions

Build an interactive subnet calculator and subnetting practice generator. The learner must still be taught how to calculate manually.

### Module 5 — IPv6 Addressing

- IPv6 format and abbreviation
- Global unicast, link-local, unique local, multicast, anycast, and loopback
- SLAAC, DHCPv6, neighbor discovery, and router advertisements
- Dual stack, tunneling, and translation
- IPv4 versus IPv6 troubleshooting

### Module 6 — Ports, Protocols, and Network Services

- TCP versus UDP
- Three-way handshake and session teardown
- DNS, DHCP, HTTP/HTTPS, SSH, Telnet, FTP/SFTP/TFTP, SMTP, POP3, IMAP, SNMP, NTP, LDAP/LDAPS, SMB, RDP, SIP, RTP, syslog, database ports, and other exam-relevant services
- DHCP DORA process
- DNS record types and lookup process
- NAT, PAT, NTP, IPAM, proxy, load balancer, and content delivery concepts
- Interactive port-number drills and protocol-matching games

### Module 7 — Switching, VLANs, and Layer 2

- Switch forwarding and MAC address tables
- Collision and broadcast domains
- VLAN purpose and design
- Access versus trunk ports
- IEEE 802.1Q tagging
- Native VLAN and voice VLAN
- Inter-VLAN routing
- STP/RSTP, root bridge, port roles, and loop prevention
- Link aggregation and LACP
- Port security, DHCP snooping, dynamic ARP inspection, and common Layer 2 attacks

Include realistic Cisco-style command examples but identify vendor-neutral concepts first.

### Module 8 — Routing and Wide Area Networking

- Routers, routing tables, metrics, and administrative distance
- Static, default, and dynamic routes
- Distance-vector, link-state, and hybrid concepts
- OSPF, BGP, and other exam-relevant protocols
- First-hop redundancy
- NAT/PAT
- WAN connections: leased lines, MPLS, Metro Ethernet, broadband, cellular, satellite, and SD-WAN
- VPN types and tunneling

### Module 9 — Wireless Networking

- IEEE 802.11 generations and capabilities
- 2.4 GHz, 5 GHz, and 6 GHz
- Channels, channel width, overlap, attenuation, interference, and signal strength
- Access points, controllers, antennas, SSIDs, BSSIDs, roaming, mesh, and guest networks
- WPA2, WPA3, enterprise authentication, and common wireless attacks
- Site surveys, heat maps, AP placement, and troubleshooting

Include a restaurant Wi-Fi case study involving capacity, coverage, captive portal access, bandwidth limits, and high guest occupancy.

### Module 10 — Cloud, Virtualization, and Modern Architecture

- IaaS, PaaS, SaaS, public/private/hybrid/community cloud
- Virtual switches, virtual NICs, and network functions
- SDN, control plane, data plane, management plane, and APIs
- NFV, VXLAN, zero-trust concepts, SASE/SSE basics, and edge computing where relevant
- Cloud networking: VPC/VNet, subnets, route tables, security groups, gateways, VPNs, and load balancers
- High availability, scalability, elasticity, and multitenancy

### Module 11 — Network Operations and Documentation

- Physical and logical diagrams
- Rack diagrams, cable maps, asset inventory, IPAM, and wireless surveys
- Baselines, performance monitoring, logs, alerts, SNMP, flow data, packet captures, and port mirroring
- Configuration management, backups, version control, and golden configurations
- Change management, maintenance windows, rollback plans, and documentation
- SLA, MOU, MSA, NDA, AUP, BYOD, and incident-response policies
- Disaster recovery, business continuity, RPO, RTO, MTTR, and MTBF

### Module 12 — Network Security

- CIA triad, AAA, least privilege, defense in depth, and zero trust
- Authentication: RADIUS, TACACS+, LDAP, SSO, MFA, certificates, and PKI
- Firewalls, ACLs, IDS/IPS, NAC, segmentation, DMZs, honeypots, and secure management
- Common attacks: DoS/DDoS, VLAN hopping, MAC flooding, ARP spoofing, DNS poisoning, rogue DHCP, evil twin, deauthentication, on-path attacks, social engineering, and credential attacks
- Device hardening, secure protocols, patches, key management, and physical controls
- Detection and response connections for an aspiring SOC analyst

### Module 13 — Troubleshooting Methodology and Tools

- CompTIA troubleshooting methodology in the correct order
- Identify, theorize, test, plan, implement, verify, document
- Bottom-up, top-down, and divide-and-conquer approaches
- Cable tester, toner probe, loopback plug, Wi-Fi analyzer, protocol analyzer, tap, and multimeter
- `ipconfig`, `ifconfig`, `ip`, `ping`, `tracert`/`traceroute`, `pathping`, `arp`, `netstat`, `ss`, `nslookup`, `dig`, `route`, `netsh`, `tcpdump`, `nmap`, and `curl`
- DNS, DHCP, routing, switching, wireless, performance, and physical-layer failures
- Reading command output and selecting the next best action

### Module 14 — Performance-Based Labs and Final Review

- Configure addressing and subnetting
- Diagnose incorrect gateway, DNS, VLAN, trunk, route, ACL, DHCP, and Wi-Fi settings
- Interpret network diagrams and command output
- Order troubleshooting actions
- Match ports, protocols, devices, cables, and tools
- Configure a small office network from requirements
- Final readiness checklist and weak-area remediation

## Standard Lesson Template

Every lesson must use this structure:

1. **Lesson title and estimated time**
2. **What you will learn** — 2–4 clear outcomes
3. **Why this matters in real life**
4. **Simple English explanation**
5. **Taglish explanation** — natural conversational Taglish, not a word-for-word translation
6. **Easy analogy** — restaurant, delivery, road, hotel, school, airport, bahay, barangay, or small business
7. **How it works step by step**
8. **Visual diagram or interactive demo**
9. **Real-world example**
10. **Network engineer pro tips**
11. **Exam alert** — important Network+ clues, distractors, and common traps
12. **Common beginner mistakes**
13. **Key terms and acronyms**
14. **Commands or configuration examples**, when relevant
15. **Quick knowledge check** — at least 3 questions
16. **Mini scenario or hands-on task**
17. **One-minute recap**
18. **What I would say if called in class** — a short classroom-ready answer

### Explanation Style Example

**Simple English:** A router connects different IP networks and chooses a path for packets.

**Taglish:** Ang router parang traffic officer sa intersection. Kapag ang packet ay pupunta sa ibang network, tinitingnan ng router ang destination IP at routing table para malaman kung saan ito ipapadala.

**Real life:** Your home router connects your private home network to your internet provider’s network.

**Exam alert:** A switch normally forwards frames using MAC addresses, while a router forwards packets using IP addresses.

## Practice Question Requirements

Create original questions inspired by the exam objectives, never brain dumps or copied exam items.

Include:

- Single-answer multiple choice
- Multiple-response questions
- Matching
- Ordering
- Command-output interpretation
- Diagram-based questions
- Troubleshooting scenarios
- Performance-based simulations
- Timed mixed quizzes

Every answer explanation must include:

- Why the correct answer is correct
- Why every other option is wrong
- The keyword or clue that should guide the learner
- A simple Taglish explanation
- A pro tip or memory trick when useful
- The related domain, objective, lesson, and difficulty level

Randomize options without changing the correct answer. Avoid ambiguous wording. Do not reveal answers until the learner submits unless Study Mode is enabled.

## Guided Lab Requirements

Every lab must include:

- Scenario
- Business requirement
- Network diagram
- Tools or simulated interface
- Starting state
- Step-by-step objectives
- Optional hints in three levels
- Validation rules
- Expected result
- Troubleshooting section
- Reflection questions
- Taglish debrief
- Reset and retry controls

When a real terminal is unavailable, create safe browser-based simulations that imitate realistic command output. Clearly label simulated output.

## Required Interactive Features

Implement all major controls—no decorative buttons.

### Dashboard

- Overall completion percentage
- Module progress cards
- Current streak and total study time
- Recent lesson and “Continue Learning” button
- Quiz average and mock-exam scores
- Weakest domains
- Recommended lesson for today
- Readiness meter based on recent, weighted performance

### Lesson Player

- Collapsible curriculum sidebar
- Previous and next lesson controls
- Mark complete and undo completion
- Bookmark lesson
- Personal notes saved locally
- Reading progress indicator
- Font-size controls
- English, Taglish, and side-by-side explanation modes
- Light and dark themes
- Estimated lesson time
- Search inside the course

### Study Tools

- Flashcards with flip, shuffle, known/learning states, and spaced-review scheduling
- Port and protocol trainer
- Acronym trainer
- OSI layer matching game
- Subnetting calculator and practice generator
- Command reference with Windows/Linux filters
- Glossary with search and alphabetical navigation
- Exam objectives checklist
- Daily 10-question drill
- Bookmarks and personal notes

### Assessment Engine

- Practice by module, domain, objective, type, and difficulty
- Study Mode and Exam Mode
- Flag for review
- Question navigator
- Timer
- Immediate or deferred feedback
- Score breakdown per domain
- Review missed questions
- Retry only incorrect questions
- Question history to reduce repetition
- Exportable or printable score report

### Mock Exams

- Three full original mock exams
- Configurable question count and timer
- Mix of objective and simulated performance-based tasks
- Realistic domain weighting
- Pass/readiness guidance without claiming an official score conversion
- Detailed post-exam review and remediation links

## Progress and Learning Logic

Use `localStorage` to save:

- Completed lessons and labs
- Quiz attempts and scores
- Mock-exam results
- Time spent studying
- Streak and last-study date
- Bookmarks
- Notes
- Flashcard status and review dates
- Theme, language mode, font size, and accessibility preferences
- Weak objectives and remediation history

Include export/import of progress as a JSON file and a clearly confirmed “Reset All Progress” action.

Readiness should be calculated transparently from:

- Recent quiz accuracy
- Performance across official weighted domains
- Mock-exam consistency
- Lab completion
- Recency of study

Show the formula in an information modal. Never promise that the learner will pass.

## Design Direction

Create a premium, modern course interface inspired by the clarity of Udemy, Coursera, Cisco Networking Academy, and modern SaaS dashboards without copying their branding.

Use:

- Navy or near-black foundation
- Electric blue and cyan accents
- Green for mastery and readiness
- Amber for review-needed areas
- Red only for errors or urgent weak areas
- Clean typography and generous spacing
- Network-line, packet, node, router, and shield motifs
- Crisp CSS diagrams instead of heavy stock images
- Smooth but restrained animations

The interface must be responsive at 320 px, tablet, laptop, and large desktop widths. It must remain usable with keyboard navigation and browser zoom at 200%.

## Accessibility

Meet WCAG 2.2 AA where practical:

- Semantic landmarks and heading order
- Visible keyboard focus
- Full keyboard navigation
- Skip link
- Accessible form labels
- ARIA only when semantic HTML is insufficient
- Sufficient contrast
- Reduced-motion support
- Text alternatives for diagrams
- No color-only status indicators
- Accessible quiz feedback and modals

## Content Quality Rules

- Define every term before relying on it.
- Move from concrete examples to technical detail.
- Keep paragraphs short and scannable.
- Use tables only when they improve comparison.
- Show acronyms with their full form on first use.
- Distinguish exam knowledge from vendor-specific implementation.
- Show Windows and Linux commands where appropriate.
- Explain not just what works, but why.
- Connect networking concepts to cybersecurity and SOC work when relevant.
- Include memory aids, but never replace understanding with mnemonics.
- Avoid filler, fake testimonials, fake instructor biographies, and unsupported pass-rate claims.
- Never include real credentials, attack instructions against public systems, brain dumps, or copyrighted paid-course content.

## Quality Assurance

Before declaring the project finished:

1. Validate all internal navigation and buttons.
2. Confirm lessons, quizzes, labs, filters, notes, bookmarks, progress, export/import, and reset work.
3. Test mobile, tablet, and desktop layouts.
4. Test keyboard-only navigation.
5. Check dark/light theme contrast.
6. Check that progress persists after refresh.
7. Confirm quiz scoring and option randomization.
8. Confirm no answer is accidentally exposed before submission.
9. Verify service-worker paths and offline behavior.
10. Remove console errors, placeholder text, and dead controls.
11. Confirm curriculum mapping to the verified official objectives.
12. Proofread technical facts, Taglish, command syntax, port numbers, and explanations.

## README Requirements

Write a beginner-friendly README containing:

- Project purpose
- Major features
- File structure
- How to run locally
- How to use a simple local server
- How to edit or add modules, lessons, questions, and labs
- How progress storage works
- How to update to a future Network+ exam version
- Browser support
- Accessibility notes
- Known limitations
- Testing checklist

## Required Build Process

Work in these phases and complete each phase before moving on:

### Phase 1 — Plan

- Confirm the current official exam version and objectives.
- Produce the information architecture and data model.
- Map every official objective to one or more lessons, labs, and questions.

### Phase 2 — Functional Foundation

- Create the responsive shell, routing/navigation, course data model, lesson player, progress engine, and theme/accessibility system.

### Phase 3 — Learning Tools

- Build quizzes, flashcards, drills, glossary, subnetting practice, command reference, notes, bookmarks, and dashboard analytics.

### Phase 4 — Curriculum

- Populate complete modules in logical order.
- Maintain objective coverage metadata on every lesson and assessment item.

### Phase 5 — Labs and Mock Exams

- Add guided simulations, scenario labs, and three original mock exams.

### Phase 6 — Verification

- Test every feature and fix defects.
- Provide a final objective-coverage report, feature checklist, and run instructions.

## Definition of Done

The project is finished only when:

- It is a working website, not a mockup or plan.
- A beginner can start at Module 0 and study sequentially.
- The official objectives are mapped and covered.
- Taglish explanations and analogies appear throughout the actual lessons.
- Quizzes provide educational feedback for all answer choices.
- Progress survives page refreshes.
- Labs and study tools genuinely work.
- The course is responsive and accessible.
- There are no placeholder lessons, fake controls, or unresolved TODOs in the learner-facing experience.

Start by showing the implementation plan and proposed file tree. Then create the files and continue building. Do not stop after providing sample code. If the environment limits response size, deliver the project in coherent phases, keep a completion checklist, and continue from the last verified phase.

# END OF MASTER PROMPT

---

## Optional Follow-Up Prompt for the Coding AI

Use this after the first build if the tool created only a partial prototype:

> Audit the entire NetReady+ project against every requirement in `NETWORK_PLUS_COURSE_PROMPT.md`. Create a checklist of missing, incomplete, decorative, or broken requirements. Then implement and test them in priority order. Do not replace working features unnecessarily. Do not declare completion while learner-facing placeholders, dead buttons, missing objective mappings, thin lesson content, incomplete answer explanations, or console errors remain.

## Suggested First Content-Expansion Prompt

> Fully populate Modules 0–3 next. Every lesson must follow the required 18-part lesson template and include natural Taglish, a memorable analogy, practical examples, exam alerts, beginner mistakes, a knowledge check, and a mini scenario. Add enough original assessment items to prevent immediate repetition. Update the objective coverage map and test all new lesson navigation and quiz behavior before finishing.
