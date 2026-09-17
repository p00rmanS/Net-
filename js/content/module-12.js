/**
 * content/module-12.js — Module 12: Network Security
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  NetReady.LESSONS['12-1'] = {
    id: '12-1',
    moduleId: 12,
    slug: 'cia-triad-and-security-terminology',
    title: 'The CIA Triad and Core Security Terminology',
    estMinutes: 12,
    outcomes: [
      'Define confidentiality, integrity, and availability with a real example each.',
      'Differentiate risk, vulnerability, threat, and exploit.',
      'Explain the principle of least privilege.',
    ],
    whyItMatters:
      'Every single security control you will ever study — encryption, firewalls, backups, access control — exists to protect one of exactly three properties. Once you see that, security stops feeling like an endless list and starts feeling like one organizing idea with many implementations.',
    simpleEnglish:
      'The CIA triad is the foundation of information security: Confidentiality means only authorized people can see data; Integrity means data has not been improperly altered; Availability means authorized people can access data/systems when they need to. A vulnerability is a weakness in a system. A threat is anything that could exploit a vulnerability to cause harm. An exploit is the actual method or code used to take advantage of a vulnerability. Risk is the likelihood and impact of a threat successfully exploiting a vulnerability. Least privilege means giving users and systems only the minimum access they need to do their job, nothing more.',
    taglish:
      'Ang CIA triad ang pundasyon ng information security: ang Confidentiality ay ibig sabihin, mga authorized na tao lang ang makakakita ng data. Ang Integrity naman ay ibig sabihin, hindi dapat baguhin ang data nang walang pahintulot. Ang Availability naman ay ibig sabihin, kaya ng mga authorized na tao ma-access ang data o sistema kapag kailangan nila ito. Ang vulnerability ay isang kahinaan sa sistema. Ang threat naman ay kahit anong bagay na puwedeng gumamit ng vulnerability para makasama. Ang exploit ang aktwal na pamamaraan o code na ginagamit para samantalahin ang vulnerability. Ang risk ay ang posibilidad at epekto kung matagumpay na na-exploit ang isang vulnerability ng isang threat. Ang least privilege naman ay ibig sabihin, bibigyan mo lang ang user o sistema ng pinaka-minimum na access na kailangan nila para gawin ang trabaho nila, wala nang iba pa.',
    analogy: {
      title: 'Bahay na may lock, hindi nabago, at bukas kapag kailangan',
      text:
        'Isipin mo ang confidentiality parang naka-lock na drawer — mga taong may susi lang ang makakabukas. Ang integrity parang selyadong sobre — kung nabuksan na ito bago pa dumating sa\'yo, malalaman mo dahil sira na ang selyo. Ang availability naman parang ilaw sa bahay mo — dapat gumagana ito kapag kailangan mo, hindi pwedeng biglang mawalan ng kuryente kapag pinaka-kailangan mo. Ang vulnerability ay parang sirang lock sa pinto — kahinaan na naghihintay lang masamantala. Ang threat ay ang magnanakaw na naghahanap ng sirang lock. Ang exploit ay ang aktwal na paraan na ginamit niya para pumasok. Ang least privilege naman parang bigyan mo lang ng susi sa specific na kwarto ang bawat katulong, hindi yung master key sa buong bahay.',
    },
    howItWorks: [
      'Confidentiality is protected through encryption, access controls, and authentication — preventing unauthorized viewing.',
      'Integrity is protected through hashing, digital signatures, and change detection — proving data has not been tampered with.',
      'Availability is protected through redundancy, backups, and DDoS mitigation — ensuring systems stay accessible.',
      'A vulnerability exists whether or not anyone ever exploits it (e.g., unpatched software); a threat is the potential for harm (e.g., an attacker who wants to exploit that vulnerability); an exploit is the actual tool/technique that takes advantage of it.',
      'Risk combines likelihood and impact: a severe vulnerability with a working exploit, exposed to the internet, represents high risk; the same vulnerability on an isolated, air-gapped system represents much lower risk.',
      'Least privilege reduces the "blast radius" of any single compromised account or system — an attacker who compromises a low-privilege account can do far less damage than if they compromised an administrator account.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="The CIA triad shown as a triangle with Confidentiality, Integrity, and Availability at each corner">
        <div class="net-row">
          <div class="net-node highlight">Confidentiality<br><small>Only authorized viewing</small></div>
          <div class="net-node highlight">Integrity<br><small>Data not improperly altered</small></div>
          <div class="net-node highlight">Availability<br><small>Accessible when needed</small></div>
        </div>
      </div>`,
    },
    realWorldExample:
      'A ransomware attack is fundamentally an availability attack (systems become inaccessible) that often also threatens confidentiality (stolen data threatened with release) — recognizing which CIA property is under attack helps prioritize the response.',
    proTips: [
      'When analyzing any security incident, explicitly ask "which of the three CIA properties was violated?" — it clarifies both the impact and the appropriate response.',
      'Least privilege is one of the highest-value, lowest-cost security practices available — it costs nothing but discipline, yet dramatically limits damage from any single compromise.',
    ],
    examAlert:
      'Expect the exam to describe an incident and ask which CIA property was violated, or to test the precise definitions of risk/vulnerability/threat/exploit as a matching set — both are extremely high-yield.',
    beginnerMistakes: [
      'Using "risk," "vulnerability," "threat," and "exploit" interchangeably — each has a precise, distinct meaning tested on the exam.',
      'Forgetting availability is a real security property — many beginners only think of confidentiality when they hear "security."',
      'Confusing least privilege (minimum necessary access) with "no access at all" — the goal is sufficient access to do the job, not zero access.',
    ],
    keyTerms: [
      { term: 'Confidentiality', def: 'Ensuring only authorized individuals can access data.' },
      { term: 'Integrity', def: 'Ensuring data has not been improperly altered.' },
      { term: 'Availability', def: 'Ensuring authorized users can access data/systems when needed.' },
      { term: 'Vulnerability', def: 'A weakness in a system that could potentially be exploited.' },
      { term: 'Threat', def: 'Anything with the potential to exploit a vulnerability and cause harm.' },
      { term: 'Exploit', def: 'The specific method or code used to take advantage of a vulnerability.' },
      { term: 'Least privilege', def: 'Granting users and systems only the minimum access necessary to perform their function.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A company\'s website is knocked offline by a flood of malicious traffic. Which CIA property is primarily being violated?',
        options: ['Confidentiality', 'Integrity', 'Availability', 'None of these'],
        correct: 2,
        explanation: 'Taking a system offline directly attacks availability — authorized users can no longer access it.',
      },
      {
        prompt: 'What is the difference between a vulnerability and an exploit?',
        options: [
          'They mean the same thing.',
          'A vulnerability is a weakness in a system; an exploit is the actual method used to take advantage of it.',
          'An exploit is a type of firewall.',
          'A vulnerability only applies to hardware, never software.',
        ],
        correct: 1,
        explanation: 'The vulnerability is the underlying weakness; the exploit is the concrete tool/technique that abuses it.',
      },
      {
        prompt: 'What does the principle of least privilege recommend?',
        options: [
          'Giving every user administrator access for convenience.',
          'Giving users and systems only the minimum access necessary to do their job.',
          'Denying all access to every user by default, permanently.',
          'Only applying access controls to external users, never internal employees.',
        ],
        correct: 1,
        explanation: 'Least privilege limits access to exactly what is needed, reducing the potential damage from any compromised account.',
      },
    ],
    miniScenario: {
      prompt: 'An attacker alters financial records in a database without anyone noticing for weeks, though the data remains fully accessible to authorized users the whole time.',
      task: 'Identify which CIA property was violated, and explain why the other two were not directly affected in this scenario.',
    },
    recap:
      'The CIA triad (Confidentiality, Integrity, Availability) is the foundation every security control protects. Vulnerability, threat, exploit, and risk each have precise, distinct meanings. Least privilege limits access to only what is necessary, reducing potential damage.',
    classroomAnswer:
      '"Every security question I ask eventually reduces to: which of confidentiality, integrity, or availability are we protecting here — and least privilege is just discipline applied to that goal every single day."',
  };

  NetReady.LESSONS['12-2'] = {
    id: '12-2',
    moduleId: 12,
    slug: 'aaa-authentication-radius-tacacs-saml',
    title: 'AAA and Authentication: RADIUS, TACACS+, LDAP, SSO, and SAML',
    estMinutes: 13,
    outcomes: [
      'Explain the three components of AAA.',
      'Differentiate RADIUS from TACACS+.',
      'Explain what SSO and SAML accomplish for the end user.',
    ],
    whyItMatters:
      'Almost every login you perform at work touches this system — understanding AAA is understanding how organizations actually control who can do what, everywhere, all the time.',
    simpleEnglish:
      'AAA stands for Authentication (proving who you are), Authorization (determining what you are allowed to do), and Accounting (logging what you actually did). RADIUS and TACACS+ are both AAA protocols used to centralize these functions on a server rather than configuring every device individually; RADIUS is an open standard commonly used for network access (like Wi-Fi and VPN), while TACACS+ is Cisco-originated and commonly used for device administration (like logging into routers/switches), offering more granular command-level authorization. LDAP (Lightweight Directory Access Protocol) is a protocol for querying and maintaining directory services (like a company\'s user database). SSO (Single Sign-On) lets a user log in once and access multiple systems without re-authenticating. SAML (Security Assertion Markup Language) is a common standard that enables SSO by securely passing authentication assertions between an identity provider and service providers.',
    taglish:
      'Ang AAA ay tatlong bagay: Authentication (pagpapatunay kung sino ka), Authorization (pagtukoy kung ano ang pwede mong gawin), at Accounting (pagtatala kung ano ang aktwal mong ginawa). Ang RADIUS at TACACS+ ay parehong AAA protocol na ginagamit para isentro ang mga function na ito sa isang server, sa halip na i-configure isa-isa ang bawat device. Ang RADIUS ay open standard, karaniwang ginagamit para sa network access (tulad ng Wi-Fi at VPN). Ang TACACS+ naman Cisco-originated, karaniwang ginagamit para sa device administration (tulad ng pag-login sa router o switch), may mas detalyadong command-level na authorization. Ang LDAP (Lightweight Directory Access Protocol) ay protocol para sa pag-query at pagpapanatili ng directory services (tulad ng database ng users ng isang kumpanya). Ang SSO (Single Sign-On) ay nagpapahintulot sa isang user na mag-login nang isang beses lang para ma-access ang maraming sistema nang hindi na kailangang mag-login ulit paulit-ulit. Ang SAML (Security Assertion Markup Language) ay isang karaniwang standard na nagpapagana ng SSO sa pamamagitan ng secure na pagpapasa ng authentication assertions sa pagitan ng identity provider at mga service provider.',
    analogy: {
      title: 'ID sa gate, listahan ng pinapasukan, at logbook',
      text:
        'Isipin mo ang authentication parang pagpapakita ng ID mo sa guard sa gate — pinapatunayan mo kung sino ka. Ang authorization naman parang tinitingnan ng guard sa listahan kung aling mga silid ka pwedeng pasukin base sa iyong ID. Ang accounting naman parang logbook na nagtatala kung anong oras ka pumasok, saan ka pumunta, at anong oras ka umalis. Ang SSO naman parang isang beses lang kang magpapakita ng ID sa unang gate ng isang malaking complex, tapos automatic ka nang makakapasok sa lahat ng gusali sa loob nang hindi na kailangang magpakita ulit ng ID sa bawat pintuan.',
    },
    howItWorks: [
      'Authentication verifies identity (username/password, certificate, biometric, or MFA); authorization determines permitted actions after identity is confirmed; accounting logs the actions taken for audit and billing purposes.',
      'RADIUS combines authentication and authorization into a single response and encrypts only the password in transit; commonly used for network access control (802.1X wireless/wired authentication, VPN).',
      'TACACS+ separates authentication, authorization, and accounting into distinct processes and encrypts the entire packet body, offering finer-grained control — commonly used to control exactly which commands an administrator can run on network devices.',
      'LDAP provides a standardized way to query and update a hierarchical directory of users, groups, and resources — many authentication systems check against an LDAP directory (like Microsoft Active Directory) to verify credentials.',
      'SSO reduces password fatigue and improves security (fewer passwords to phish or reuse) by letting one authentication event grant access to multiple connected applications.',
      'SAML enables SSO by having an identity provider (IdP) authenticate the user once, then issue a signed assertion that service providers (SPs) trust, without the user re-entering credentials at each one.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Protocol</th><th>Primary Use</th><th>Key Trait</th></tr></thead>
        <tbody>
          <tr><td>RADIUS</td><td>Network access (Wi-Fi, VPN)</td><td>Open standard, encrypts password only</td></tr>
          <tr><td>TACACS+</td><td>Device administration (CLI access)</td><td>Cisco-originated, encrypts full packet, command-level control</td></tr>
          <tr><td>LDAP</td><td>Directory service queries</td><td>Looks up users/groups/resources</td></tr>
          <tr><td>SAML</td><td>Enables SSO between IdP and service providers</td><td>Passes signed authentication assertions</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A network administrator logging into a core switch is authenticated and authorized via TACACS+, which restricts them to only the specific commands their role permits, while every action they take is logged for later audit — meanwhile, employees connecting to the office Wi-Fi authenticate via RADIUS tied to their same corporate directory.',
    proTips: [
      'A fast memory hook: RADIUS = network access (Wi-Fi/VPN); TACACS+ = device/command administration. Both are AAA protocols, just applied to different scopes.',
      'SSO\'s biggest security win is reducing password reuse and phishing surface area — fewer total passwords means fewer opportunities for compromise.',
    ],
    examAlert:
      'The exam commonly tests RADIUS vs. TACACS+ directly by use case (network access vs. device administration) — memorize this pairing precisely.',
    beginnerMistakes: [
      'Confusing authentication (who you are) with authorization (what you can do) — they are sequential but distinct steps.',
      'Assuming RADIUS and TACACS+ are interchangeable — they serve different primary use cases even though both are AAA protocols.',
      'Forgetting that SSO, while convenient, also means a single compromised credential can grant broader access — strong authentication (like MFA) becomes even more important with SSO in place.',
    ],
    keyTerms: [
      { term: 'AAA', def: 'Authentication, Authorization, and Accounting — the three pillars of access control.' },
      { term: 'RADIUS', def: 'An open-standard AAA protocol commonly used for network access authentication.' },
      { term: 'TACACS+', def: 'A Cisco-originated AAA protocol commonly used for device administration with command-level control.' },
      { term: 'SSO', def: 'Single Sign-On — allows one authentication event to grant access to multiple systems.' },
      { term: 'SAML', def: 'Security Assertion Markup Language — a standard enabling SSO via signed authentication assertions.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What are the three components of AAA?',
        options: [
          'Access, Authority, Audit',
          'Authentication, Authorization, Accounting',
          'Availability, Authenticity, Auditing',
          'Authentication, Availability, Access',
        ],
        correct: 1,
        explanation: 'AAA stands for Authentication, Authorization, and Accounting.',
      },
      {
        prompt: 'Which AAA protocol is more commonly used specifically for device administration with granular command-level control?',
        options: ['RADIUS', 'TACACS+', 'LDAP', 'SAML'],
        correct: 1,
        explanation: 'TACACS+ separates AAA functions and offers finer command-level authorization, common for device administration.',
      },
      {
        prompt: 'What does SSO primarily provide to end users?',
        options: [
          'The ability to log in once and access multiple connected systems without re-authenticating.',
          'A requirement to use a different password for every application.',
          'Automatic encryption of all network traffic.',
          'Elimination of the need for any authentication at all.',
        ],
        correct: 0,
        explanation: 'SSO reduces repeated logins by letting one authentication event grant access across multiple systems.',
      },
    ],
    miniScenario: {
      prompt: 'A company wants network administrators\' access to routers and switches tightly restricted so each admin can only run specific approved commands, with every command logged.',
      task: 'Recommend RADIUS or TACACS+ for this requirement, and explain why.',
    },
    recap:
      'AAA covers authentication, authorization, and accounting. RADIUS centralizes network access AAA (Wi-Fi, VPN); TACACS+ centralizes device administration AAA with command-level control. LDAP queries directory services. SSO (often via SAML) lets one login grant access to multiple systems.',
    classroomAnswer:
      '"AAA is who you are, what you can do, and what you did — RADIUS handles that for getting ONTO the network, TACACS+ handles it for controlling what you do ONCE you\'re managing the devices themselves."',
  };

  NetReady.LESSONS['12-3'] = {
    id: '12-3',
    moduleId: 12,
    slug: 'pki-and-encryption',
    title: 'PKI and Encryption: Protecting Data in Transit and at Rest',
    estMinutes: 13,
    outcomes: [
      'Explain the roles of a public key and private key in asymmetric encryption.',
      'Explain what a PKI and a Certificate Authority provide.',
      'Differentiate encryption in transit from encryption at rest.',
    ],
    whyItMatters:
      'PKI is the invisible trust system behind every padlock icon you have ever seen in a browser — understanding it demystifies HTTPS, VPNs, and secure email all at once.',
    simpleEnglish:
      'Asymmetric encryption uses a mathematically linked key pair: a public key (shared openly) and a private key (kept secret). Data encrypted with the public key can only be decrypted with the matching private key, enabling secure communication without ever sharing a secret key over the network. PKI (Public Key Infrastructure) is the system of certificates, Certificate Authorities (CAs), and policies that manages and verifies these key pairs, proving that a given public key genuinely belongs to the claimed owner. Encryption in transit protects data while it moves across a network (like HTTPS); encryption at rest protects data while it is stored (like an encrypted hard drive or database).',
    taglish:
      'Ang asymmetric encryption ay gumagamit ng magkapares na key na magkaugnay sa matematika: ang public key (ibinabahagi nang bukas) at ang private key (itinatago). Ang data na na-encrypt gamit ang public key ay puwede lang buksan (i-decrypt) gamit ang kaparehong private key — kaya kaya nitong ligtas na makipag-usap nang hindi kinakailangang ibahagi ang lihim na susi mismo sa network. Ang PKI (Public Key Infrastructure) ay ang sistema ng mga certificate, Certificate Authorities (CA), at patakaran na namamahala at nagbe-verify sa mga key pair na ito — pinapatunayan nito na ang isang public key ay talagang pag-aari ng taong nag-aangkin nito. Ang encryption in transit ay pinoprotektahan ang data habang gumagalaw ito sa network (tulad ng HTTPS). Ang encryption at rest naman pinoprotektahan ang data habang naka-imbak (tulad ng naka-encrypt na hard drive o database).',
    analogy: {
      title: 'Padlock na bukas sa lahat, susi na tago lang sa iyo',
      text:
        'Isipin mo ang public key parang isang padlock na puwede mong ipamigay sa kahit sino — puwede nilang isara ang isang kahon gamit ito, pero WALANG makakabukas nito maliban sa may hawak ng tanging susi (private key) na eksklusibo sayo lang. Ang PKI naman parang notaryo publiko na nagpapatunay na ang isang padlock ay talagang pag-aari mismo ng taong nag-aangkin nito — hindi lang basta sinumang gumawa ng padlock na may nakasulat na pangalan mo. Ang encryption in transit ay parang naka-lock na sasakyang naghahatid ng parcel; ang encryption at rest naman parang naka-lock na bodega kung saan naka-imbak ang parcel habang hindi pa hinahatid.',
    },
    howItWorks: [
      'In asymmetric encryption, anyone can encrypt data using a recipient\'s public key, but only the recipient\'s private key can decrypt it — solving the problem of secure communication without pre-sharing a secret.',
      'Digital signatures work in reverse: signing with a private key lets anyone verify authenticity using the corresponding public key, proving the message genuinely came from the claimed sender.',
      'A Certificate Authority (CA) is a trusted third party that issues digital certificates, vouching that a specific public key genuinely belongs to a specific verified entity (like a website\'s domain).',
      'A browser trusts a website\'s HTTPS certificate because it is signed by a CA the browser already trusts, forming a "chain of trust" back to a small set of well-known root CAs.',
      'Encryption in transit (like TLS/HTTPS, IPsec VPNs) protects data as it crosses networks; encryption at rest (like full-disk encryption, database encryption) protects stored data even if the physical storage is stolen or accessed without authorization.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Asymmetric encryption diagram showing a sender encrypting with the recipient's public key and only the recipient's private key being able to decrypt it">
        <div class="net-row">
          <div class="net-node">Sender<br><small>Encrypts with recipient's PUBLIC key</small></div>
          <div class="net-line">&rarr;&rarr;&rarr;</div>
          <div class="net-node highlight">Recipient<br><small>Decrypts with own PRIVATE key</small></div>
        </div>
      </div>`,
    },
    realWorldExample:
      'When you see the padlock icon in your browser visiting a banking website, a CA has verified that website\'s certificate, your browser used the site\'s public key to establish an encrypted session, and all your session data travels encrypted in transit — even though you never manually exchanged any secret key with the bank.',
    proTips: [
      'Remember the core asymmetric rule: encrypt with public, decrypt with private (for confidentiality); sign with private, verify with public (for authenticity).',
      'Both encryption in transit AND at rest are typically needed for genuinely comprehensive data protection — one without the other leaves a real gap.',
    ],
    examAlert:
      'The exam commonly tests the public/private key roles directly, and expects you to recognize PKI\'s core purpose: verifying that a public key genuinely belongs to its claimed owner via a trusted CA.',
    beginnerMistakes: [
      'Mixing up which key encrypts and which decrypts in asymmetric encryption — public encrypts (for confidentiality), private decrypts.',
      'Assuming encryption in transit alone is sufficient — data sitting unencrypted in storage remains vulnerable to theft or unauthorized access.',
      'Forgetting that a CA\'s core job is verifying IDENTITY (that a key belongs to who it claims), not just providing encryption math.',
    ],
    keyTerms: [
      { term: 'Asymmetric encryption', def: 'Encryption using a mathematically linked public/private key pair.' },
      { term: 'Public key', def: 'A key shared openly, used to encrypt data or verify a digital signature.' },
      { term: 'Private key', def: 'A secret key kept by its owner, used to decrypt data or create a digital signature.' },
      { term: 'PKI', def: 'Public Key Infrastructure — the system of certificates, CAs, and policies managing key pairs and trust.' },
      { term: 'Certificate Authority (CA)', def: 'A trusted entity that issues digital certificates verifying public key ownership.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'In asymmetric encryption, which key is used to encrypt data intended to remain confidential for a specific recipient?',
        options: ['The recipient\'s private key', 'The recipient\'s public key', 'The sender\'s private key', 'A shared symmetric key'],
        correct: 1,
        explanation: 'Data encrypted with the recipient\'s public key can only be decrypted with their matching private key.',
      },
      {
        prompt: 'What is the primary purpose of a Certificate Authority (CA)?',
        options: [
          'To generate random passwords for users.',
          'To verify and vouch that a specific public key genuinely belongs to a specific verified entity.',
          'To store private keys on behalf of every user.',
          'To provide free internet access.',
        ],
        correct: 1,
        explanation: 'A CA\'s core job is establishing trust by verifying identity behind a public key/certificate.',
      },
      {
        prompt: 'What is the difference between encryption in transit and encryption at rest?',
        options: [
          'They are the same thing.',
          'Encryption in transit protects data moving across a network; encryption at rest protects stored data.',
          'Encryption at rest only applies to cloud storage.',
          'Encryption in transit is always weaker than encryption at rest.',
        ],
        correct: 1,
        explanation: 'These protect data at different stages: while moving (transit) versus while stored (rest).',
      },
    ],
    miniScenario: {
      prompt: 'A company encrypts all traffic between its offices with a VPN, but stores customer data on an unencrypted database server.',
      task: 'Identify the gap in this security approach, referencing encryption in transit versus at rest.',
    },
    recap:
      'Asymmetric encryption uses public/private key pairs — encrypt with public, decrypt with private. PKI and Certificate Authorities verify that public keys genuinely belong to their claimed owners. Comprehensive protection requires both encryption in transit (network) and at rest (storage).',
    classroomAnswer:
      '"The padlock in my browser only means something because a CA vouched for it — and I always check whether data is protected both while it travels AND while it sits in storage, since either gap alone is a real problem."',
  };

  NetReady.LESSONS['12-4'] = {
    id: '12-4',
    moduleId: 12,
    slug: 'firewalls-acls-nac-segmentation',
    title: 'Firewalls, ACLs, NAC, and Network Segmentation',
    estMinutes: 13,
    outcomes: [
      'Explain how an ACL controls traffic.',
      'Explain what a screened subnet (DMZ) accomplishes.',
      'Explain what NAC verifies before granting network access.',
    ],
    whyItMatters:
      'These are the everyday, hands-on security controls a network technician actually configures — the practical toolkit behind every "how do we keep the bad traffic out" conversation.',
    simpleEnglish:
      'A firewall filters traffic based on rules (source, destination, port, protocol, and increasingly, application awareness). An ACL (Access Control List) is a specific, ordered list of rules that permit or deny traffic, used on routers, switches, and firewalls alike. A screened subnet (also called a DMZ, demilitarized zone) is a separate network segment for public-facing servers (like a web server), isolated from the internal trusted network so that even if the public server is compromised, the attacker does not automatically reach internal systems. Trusted and untrusted zones describe the relative trust level assigned to a network segment for firewall policy purposes. NAC (Network Access Control) verifies a device meets security requirements (like updated antivirus, patched OS) before granting it network access at all.',
    taglish:
      'Ang firewall ay sumasala ng traffic base sa mga alituntunin (source, destination, port, protocol, at kadalasan, kaalaman pa sa application). Ang ACL (Access Control List) ay isang specific at maayos na listahan ng mga alituntunin na nagpapayag o nagbabawal ng traffic, ginagamit sa mga router, switch, at firewall. Ang screened subnet (tinatawag ding DMZ, demilitarized zone) ay isang hiwalay na network segment para sa mga public-facing na server (tulad ng web server), hiwalay ito sa panloob na trusted network — kaya kahit ma-compromise ang public server, hindi agad-agad maaabot ng attacker ang panloob na sistema. Ang trusted at untrusted zones naman ay naglalarawan ng antas ng tiwala na itinalaga sa isang network segment para sa firewall policy. Ang NAC (Network Access Control) naman ay sinusuri kung natutugunan ng isang device ang mga security requirement (tulad ng updated antivirus, na-patch na OS) BAGO pa man ito bigyan ng network access.',
    analogy: {
      title: 'Guest lobby, hindi ang buong opisina',
      text:
        'Isipin mo ang screened subnet (DMZ) parang lobby ng isang opisina — puwedeng pumasok ang sinumang bisita sa lobby, pero hindi na sila puwedeng basta-basta pumunta sa loob mismo ng mga kwarto ng empleyado (internal network) nang walang dagdag na security check. Kahit magkagulo sa lobby, hindi agad naaapektuhan ang loob ng opisina. Ang NAC naman parang isang health checkpoint sa pasukan — sinusuri muna kung "malusog" (updated at secure) ang bawat device bago pa man ito papasukin sa gusali.',
    },
    howItWorks: [
      'Firewalls can be stateless (evaluating each packet independently) or stateful (tracking connection state, automatically allowing return traffic for permitted sessions).',
      'ACLs are processed top-down, in order, with an implicit "deny all" at the end if no earlier rule matches — meaning rule ORDER matters enormously.',
      'A screened subnet places public-facing servers between two firewalls (or one firewall with multiple interfaces): one facing the internet, one facing the internal network, so traffic must pass through controlled filtering at each boundary.',
      'Trusted zones typically have looser restrictions (internal network); untrusted zones (internet, DMZ) have stricter inbound filtering — firewall policy is built around these zone relationships.',
      'NAC checks device posture (OS patch level, antivirus status, compliance with security policy) before granting network access, and can quarantine non-compliant devices to a restricted remediation network instead of full access.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Network showing the internet, a screened subnet (DMZ) with a public web server between two firewalls, and the internal trusted network behind the second firewall">
        <div class="net-node">Internet (untrusted)</div>
        <div class="net-line">&darr; Firewall 1</div>
        <div class="net-node highlight">Screened Subnet / DMZ<br><small>Public web server</small></div>
        <div class="net-line">&darr; Firewall 2</div>
        <div class="net-node">Internal Network (trusted)</div>
      </div>`,
    },
    realWorldExample:
      'A company\'s public website server sits in a DMZ, reachable from the internet, but its internal employee file servers sit behind a second firewall entirely — if the website is ever compromised, the attacker still faces another full firewall boundary before reaching sensitive internal data.',
    proTips: [
      'When configuring ACLs, always place more specific rules before more general ones — since processing stops at the first match, rule order can completely change the outcome.',
      'NAC is especially valuable for BYOD (Bring Your Own Device) environments, where you cannot fully control every device\'s security posture in advance.',
    ],
    examAlert:
      'The exam commonly describes a public-facing server needing internet access while keeping internal systems protected — recognize this as the textbook screened subnet (DMZ) use case.',
    beginnerMistakes: [
      'Forgetting ACLs process top-down with an implicit deny at the end — a misplaced rule can silently block or allow the wrong traffic.',
      'Confusing a screened subnet (an isolated segment for public-facing servers) with simply "having a firewall" — the DMZ is a specific architectural pattern, not just any firewall deployment.',
      'Assuming NAC only checks credentials — it specifically checks device security POSTURE (patches, antivirus), not just who is logging in.',
    ],
    keyTerms: [
      { term: 'ACL', def: 'Access Control List — an ordered list of rules permitting or denying traffic.' },
      { term: 'Screened subnet (DMZ)', def: 'An isolated network segment for public-facing servers, separated from the internal trusted network.' },
      { term: 'NAC', def: 'Network Access Control — verifies a device meets security requirements before granting network access.' },
      { term: 'Trusted/untrusted zone', def: 'A classification of network segments by relative trust level, used to build firewall policy.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Why do ACL rules need to be carefully ordered?',
        options: [
          'Rule order has no effect on outcome.',
          'ACLs are processed top-down, and processing stops at the first matching rule, so order determines the actual result.',
          'ACLs are always processed in random order.',
          'Only the last rule in an ACL is ever actually applied.',
        ],
        correct: 1,
        explanation: 'Since the first matching rule wins, a misordered ACL can produce unintended allow/deny results.',
      },
      {
        prompt: 'What is the main purpose of a screened subnet (DMZ)?',
        options: [
          'To speed up internet connections.',
          'To isolate public-facing servers from the internal trusted network, limiting exposure if the public server is compromised.',
          'To eliminate the need for any firewalls.',
          'To provide wireless coverage to guests.',
        ],
        correct: 1,
        explanation: 'A DMZ contains the blast radius of a compromised public-facing server, protecting the internal network.',
      },
      {
        prompt: 'What does NAC check before granting a device network access?',
        options: [
          'Only the device\'s physical location.',
          'The device\'s security posture, such as OS patch level and antivirus status.',
          'The device\'s manufacturer only.',
          'Nothing — NAC grants access unconditionally.',
        ],
        correct: 1,
        explanation: 'NAC verifies compliance with security requirements before allowing full network access.',
      },
    ],
    miniScenario: {
      prompt: 'A company needs its public website reachable from the internet, but wants to guarantee that a compromise of the website server cannot directly expose its internal employee database.',
      task: 'Recommend an architecture that addresses this, naming the specific concept involved.',
    },
    recap:
      'Firewalls filter traffic by rule; ACLs are ordered permit/deny rule lists processed top-down. Screened subnets (DMZs) isolate public-facing servers from internal trusted networks. NAC verifies device security posture before granting network access.',
    classroomAnswer:
      '"Public-facing and needs internet access, but should never be a direct bridge to internal systems — that\'s exactly what a screened subnet is for, and ACL order is what actually determines whether my rules do what I think they do."',
  };

  NetReady.LESSONS['12-5'] = {
    id: '12-5',
    moduleId: 12,
    slug: 'dos-ddos-dns-poisoning-on-path-social-engineering',
    title: 'Common Attacks: DoS/DDoS, DNS Poisoning, On-Path, and Social Engineering',
    estMinutes: 13,
    outcomes: [
      'Differentiate DoS from DDoS.',
      'Explain how DNS poisoning misdirects victims.',
      'Identify common social engineering techniques.',
    ],
    whyItMatters:
      'These attacks do not require exotic tools — they exploit trust, timing, and human nature, which is exactly why they remain some of the most common real-world security incidents today.',
    simpleEnglish:
      'A DoS (Denial of Service) attack overwhelms a system from a single source, making it unavailable to legitimate users; a DDoS (Distributed Denial of Service) does the same thing but from many sources simultaneously (often a botnet of compromised devices), making it far harder to block. DNS poisoning (or spoofing) corrupts DNS resolution so victims are redirected to a malicious site instead of the legitimate one, even though they typed the correct domain name. An on-path attack (formerly called man-in-the-middle) intercepts communication between two parties, potentially reading or altering it, without either party realizing. Social engineering manipulates people rather than systems, including phishing (deceptive messages seeking credentials/info), dumpster diving (searching discarded materials for sensitive information), shoulder surfing (visually observing someone entering credentials), and tailgating (following an authorized person through a secured door without their own credentials).',
    taglish:
      'Ang DoS (Denial of Service) attack ay nagbabaha ng traffic mula sa iisang source, para hindi na ma-access ng lehitimong user ang isang sistema. Ang DDoS (Distributed Denial of Service) naman parehong ginagawa pero mula sa MARAMING source nang sabay-sabay (kadalasan mula sa botnet ng mga na-compromise na device), kaya mas mahirap harangin. Ang DNS poisoning (o spoofing) ay sumisira sa DNS resolution kaya na-redirect ang biktima papunta sa isang malicious na site sa halip na tunay, kahit tama ang na-type nilang domain name. Ang on-path attack (dating tinatawag na man-in-the-middle) ay hinaharang ang komunikasyon sa pagitan ng dalawang partido, posibleng nababasa o nababago ito, nang hindi napapansin ng kahit sino sa dalawang tunay na partido. Ang social engineering naman ay manipulasyon sa TAO sa halip na sa sistema — kasama dito ang phishing (mapanlinlang na mensahe na humihiling ng credentials o impormasyon), dumpster diving (paghahanap sa itinapong materyales para sa sensitibong impormasyon), shoulder surfing (pagmamasid sa taong naglalagay ng credentials), at tailgating (pagsunod sa isang authorized na tao papasok sa secure na pinto nang walang sariling credentials).',
    analogy: {
      title: 'Iisang tao vs. sambayanan na sabay-sabay pumipila',
      text:
        'Isipin mo ang DoS parang isang taong paulit-ulit na tumatawag sa isang restaurant hotline hanggang mapuno ang lahat ng linya, para walang totoong customer ang makatawag. Ang DDoS naman parang libu-libong tao (na hindi man boluntaryo, na-hijack lang sila) ang sabay-sabay na tumatawag mula sa iba\'t-ibang lugar — mas mahirap harangin dahil hindi mo malaman kung sino ang totoong customer at sino ang parte ng atake. Ang DNS poisoning ay parang may nagpalit ng address sa GPS mo papunta sa maling tindahan na kamukha ng tunay. Ang social engineering naman ay hindi na pag-hack ng makina — pagloko na sa TAO mismo, tulad ng pagpapanggap na security guard para makasama ka sa likod ng authorized na tao papasok sa gusali (tailgating).',
    },
    howItWorks: [
      'DoS attacks originate from a single source and are relatively easier to identify and block (e.g., blocking one IP address); DDoS attacks use many distributed sources, making IP-based blocking impractical and often requiring specialized mitigation services.',
      'DNS poisoning corrupts a DNS resolver\'s cache with false records, so it returns an attacker-controlled IP address for a legitimate domain name, redirecting all victims relying on that resolver until the poisoned entry is corrected.',
      'On-path attacks position the attacker between two communicating parties (e.g., via ARP spoofing on a local network, or a malicious Wi-Fi access point), allowing interception or alteration of traffic that both parties believe is going directly to each other.',
      'Phishing uses deceptive emails/messages to trick victims into revealing credentials or installing malware, often the initial entry point for larger attacks.',
      'Dumpster diving, shoulder surfing, and tailgating are all physical/human-focused techniques that bypass technical security controls entirely by exploiting carelessness or courtesy.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Attack</th><th>Targets</th><th>Key Defense</th></tr></thead>
        <tbody>
          <tr><td>DoS / DDoS</td><td>Availability</td><td>Traffic filtering, DDoS mitigation services, redundancy</td></tr>
          <tr><td>DNS poisoning</td><td>Integrity of DNS resolution</td><td>DNSSEC, secure resolver configuration</td></tr>
          <tr><td>On-path attack</td><td>Confidentiality/integrity of communication</td><td>Encryption (TLS), mutual authentication</td></tr>
          <tr><td>Phishing</td><td>Human trust</td><td>User awareness training, email filtering, MFA</td></tr>
          <tr><td>Tailgating</td><td>Physical access control</td><td>Badge enforcement, mantraps, security culture</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'An attacker sends a convincing phishing email that steals an employee\'s credentials (social engineering), then uses those credentials combined with an on-path position on the office Wi-Fi to intercept additional sensitive traffic — showing how these attack categories often combine in a real incident rather than occurring in isolation.',
    proTips: [
      'DDoS mitigation typically requires capacity and specialized filtering beyond what a single organization can handle alone — many companies use third-party DDoS protection services for exactly this reason.',
      'The best defense against social engineering is ongoing user awareness training — technical controls alone cannot fully close a human-trust gap.',
    ],
    examAlert:
      'Expect the exam to describe an attack scenario in plain language (e.g., "traffic flooding from thousands of different IP addresses") and ask you to name the specific attack — practice recognizing these from behavior, not just definitions.',
    beginnerMistakes: [
      'Confusing DoS (single source) with DDoS (many distributed sources) — the distinction affects both detection and mitigation strategy.',
      'Assuming social engineering attacks are unsophisticated or easy to spot — the best ones are highly convincing and specifically exploit normal human courtesy and trust.',
      'Forgetting DNS poisoning can redirect a victim even when they type the correct, legitimate domain name themselves.',
    ],
    keyTerms: [
      { term: 'DoS', def: 'Denial of Service — an attack from a single source overwhelming a system to deny legitimate access.' },
      { term: 'DDoS', def: 'Distributed Denial of Service — a DoS attack launched from many distributed sources simultaneously.' },
      { term: 'DNS poisoning', def: 'Corrupting DNS resolution to redirect victims to a malicious site.' },
      { term: 'On-path attack', def: 'Intercepting communication between two parties without their knowledge.' },
      { term: 'Tailgating', def: 'Following an authorized person through a secured door without using one\'s own credentials.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the key difference between DoS and DDoS?',
        options: [
          'They are identical attacks with different names.',
          'DoS originates from a single source; DDoS originates from many distributed sources simultaneously.',
          'DDoS only targets DNS servers.',
          'DoS is always more damaging than DDoS.',
        ],
        correct: 1,
        explanation: 'The distributed nature of DDoS, using many sources, is what makes it harder to block than a single-source DoS attack.',
      },
      {
        prompt: 'What does DNS poisoning accomplish?',
        options: [
          'It physically damages a DNS server.',
          'It corrupts DNS resolution so victims are redirected to a malicious site even when typing the correct domain.',
          'It encrypts DNS traffic for added security.',
          'It only affects internal company networks, never public DNS.',
        ],
        correct: 1,
        explanation: 'Poisoned DNS records redirect legitimate domain lookups to attacker-controlled destinations.',
      },
      {
        prompt: 'An attacker follows an employee through a secured badge-access door without swiping their own badge. What is this called?',
        options: ['Phishing', 'Shoulder surfing', 'Tailgating', 'DNS poisoning'],
        correct: 2,
        explanation: 'Tailgating is specifically following an authorized person through physical access controls without one\'s own credentials.',
      },
    ],
    miniScenario: {
      prompt: 'A company\'s website suddenly becomes unreachable due to a massive flood of traffic arriving from thousands of different IP addresses around the world simultaneously.',
      task: 'Name the specific attack type, and explain why blocking a single IP address would not solve the problem.',
    },
    recap:
      'DoS overwhelms from one source; DDoS does so from many distributed sources. DNS poisoning redirects victims via corrupted DNS records. On-path attacks intercept communication between two parties. Social engineering (phishing, dumpster diving, shoulder surfing, tailgating) manipulates people rather than systems.',
    classroomAnswer:
      '"Not every attack targets a machine — DDoS overwhelms availability, DNS poisoning corrupts trust in a name, and social engineering just walks past the firewall entirely by targeting a person instead."',
  };

  NetReady.LESSONS['12-6'] = {
    id: '12-6',
    moduleId: 12,
    slug: 'physical-security-deception-hardening',
    title: 'Physical Security, Deception Technology, and Device Hardening',
    estMinutes: 11,
    outcomes: [
      'Identify common physical security controls.',
      'Explain the purpose of a honeypot/honeynet.',
      'List common device hardening practices.',
    ],
    whyItMatters:
      'The most sophisticated firewall in the world means nothing if someone can walk into the server room unchallenged — physical security and basic hardening are the unglamorous fundamentals that make everything else meaningful.',
    simpleEnglish:
      'Physical security controls protect the actual hardware and facilities: cameras (deterrence and evidence), locks (restricting physical entry), badge access systems, and mantraps (a small controlled space allowing only one person through at a time). A honeypot is a deliberately vulnerable-looking decoy system designed to attract attackers, letting defenders study their techniques without risking real systems; a honeynet is a whole network of such decoys. Device hardening reduces a system\'s attack surface by disabling unnecessary services, changing default credentials, applying patches promptly, and enforcing secure configuration baselines.',
    taglish:
      'Ang physical security controls ay pinoprotektahan ang aktwal na hardware at pasilidad: mga camera (pang-deter at ebidensya), mga lock (naglilimita sa pisikal na pagpasok), badge access system, at mantrap (maliit na kontroladong espasyo na isang tao lang ang makakapasok nang paisa-isa). Ang honeypot ay isang sadyang mukhang mahinang decoy system na dinisenyo para akitin ang mga attacker, para mapag-aralan ng defenders ang kanilang mga taktika nang hindi nilalagay sa panganib ang totoong sistema. Ang honeynet naman ay isang buong network ng ganitong mga decoy. Ang device hardening naman ay binabawasan ang "attack surface" ng isang sistema sa pamamagitan ng pag-disable ng mga hindi kailangang serbisyo, pagpapalit ng default na credentials, mabilis na pag-apply ng patches, at pagpapatupad ng secure na configuration baseline.',
    analogy: {
      title: 'Umpan na perang laruan sa loob ng bahay',
      text:
        'Isipin mo ang honeypot parang naglalagay ka ng "umpan" — isang lalagyan na mukhang may laman ng pera pero laruan lang, nakalantad sa harap ng bahay mo — para kapag may nagnakaw, mahuhuli mo sila habang tinitignan mo mula sa CCTV, nang hindi nasasaktan ang totoo mong ari-arian. Ang device hardening naman ay parang pag-aalis ng mga hindi kailangang bintana at pinto sa bahay mo, pagpapalit ng lumang susi (default password) papuntang bago, at pagsisiguro na maayos ang lahat ng kandado (patches) bago pa man dumating ang problema.',
    },
    howItWorks: [
      'Cameras deter attackers and provide evidence after an incident; locks and badge systems restrict who can physically enter a space; mantraps prevent tailgating by physically allowing only one authenticated person through at a time.',
      'A honeypot is deliberately isolated from real production systems, monitored closely, and designed to look attractive to attackers, revealing their tools and techniques in a controlled, low-risk environment.',
      'A honeynet extends this concept to an entire simulated network, providing richer intelligence on attacker behavior across multiple simulated systems and services.',
      'Device hardening practices include: disabling unused ports/services, changing all default usernames/passwords, applying security patches on a regular schedule, enforcing strong authentication, and following a documented secure configuration baseline (see Module 11).',
      'Hardening directly reduces the attack surface — the total number of ways an attacker could potentially gain access — making successful attacks meaningfully less likely even before considering more advanced defenses.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Control</th><th>Category</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td>Cameras, locks, mantraps</td><td>Physical security</td><td>Restrict and monitor physical access</td></tr>
          <tr><td>Honeypot / honeynet</td><td>Deception technology</td><td>Attract and study attackers safely</td></tr>
          <tr><td>Disabling unused services, patching</td><td>Device hardening</td><td>Reduce attack surface</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A security team deploys a honeypot server that looks like an unpatched, valuable database, deliberately placed where attackers scanning the network would find it — any interaction with it is automatically suspicious, since no legitimate user has any reason to touch it, providing early warning of an intrusion in progress.',
    proTips: [
      'A honeypot\'s value comes specifically from the fact that NO legitimate traffic should ever touch it — any interaction is a near-certain signal of malicious activity.',
      'Changing default credentials is one of the single highest-value, lowest-effort hardening steps — an enormous share of real breaches start with unchanged default passwords.',
    ],
    examAlert:
      'The exam may ask you to identify a honeypot/honeynet from a description of a decoy system, or ask you to name specific hardening practices — both are straightforward, high-yield recall items.',
    beginnerMistakes: [
      'Placing a honeypot where it could provide a real pathway into production systems if compromised — it must remain properly isolated.',
      'Treating physical security as someone else\'s job ("that\'s facilities, not IT") — physical access to hardware defeats nearly every logical security control.',
      'Underestimating how much risk unchanged default credentials represent — this remains one of the most common real-world initial access vectors.',
    ],
    keyTerms: [
      { term: 'Mantrap', def: 'A small, controlled physical space allowing only one authenticated person through at a time.' },
      { term: 'Honeypot', def: 'A deliberately vulnerable-looking decoy system designed to attract and study attackers.' },
      { term: 'Honeynet', def: 'A network of honeypots providing broader attacker intelligence.' },
      { term: 'Device hardening', def: 'Reducing a system\'s attack surface through disabling unnecessary services, patching, and secure configuration.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the primary purpose of a honeypot?',
        options: [
          'To provide a faster connection for legitimate users.',
          'To attract and study attackers in a controlled, low-risk environment, away from real production systems.',
          'To replace the need for any firewall.',
          'To store backup copies of production data.',
        ],
        correct: 1,
        explanation: 'A honeypot deliberately lures attackers so defenders can study their techniques safely.',
      },
      {
        prompt: 'What physical security control specifically prevents tailgating by only allowing one person through at a time?',
        options: ['A camera', 'A mantrap', 'A honeypot', 'An ACL'],
        correct: 1,
        explanation: 'A mantrap is a physical access control specifically designed to prevent more than one person entering per authentication.',
      },
      {
        prompt: 'Which of these is a core device hardening practice?',
        options: [
          'Leaving all default usernames and passwords unchanged for convenience.',
          'Disabling unnecessary services and changing default credentials.',
          'Enabling every available service by default, just in case.',
          'Skipping security patches to avoid downtime.',
        ],
        correct: 1,
        explanation: 'Disabling unnecessary services and changing defaults directly reduces the attack surface.',
      },
    ],
    miniScenario: {
      prompt: 'A security team notices unusual login attempts against a server that no legitimate employee has ever had a reason to access.',
      task: 'Explain how this server might be functioning as a honeypot, and why any activity against it is significant.',
    },
    recap:
      'Physical security controls (cameras, locks, mantraps) protect hardware and facilities. Honeypots and honeynets are deception technologies that safely attract and study attackers. Device hardening reduces attack surface through disabling unnecessary services, changing defaults, and patching.',
    classroomAnswer:
      '"No amount of firewall rules matters if someone can just walk into the server room — and a honeypot works precisely because nobody legitimate should ever be touching it in the first place."',
  };

  NetReady.LESSONS['12-7'] = {
    id: '12-7',
    moduleId: 12,
    slug: 'compliance-segmentation-iot-ot-byod',
    title: 'Compliance, Segmentation, and IoT/OT/BYOD Security',
    estMinutes: 12,
    outcomes: [
      'Explain the purpose of compliance frameworks like PCI DSS and GDPR.',
      'Explain why IoT and OT/SCADA/ICS devices require special segmentation.',
      'Explain the security considerations of a BYOD policy.',
    ],
    whyItMatters:
      'Modern networks include everything from smart light bulbs to factory control systems to employees\' personal phones — this lesson covers the segmentation and compliance thinking that keeps that wildly diverse mix from becoming a security nightmare.',
    simpleEnglish:
      'Compliance frameworks establish required security practices, often tied to legal or contractual obligations. PCI DSS (Payment Card Industry Data Security Standard) sets requirements for any organization handling credit card data. GDPR (General Data Protection Regulation) is a European Union law governing how personal data must be protected and handled, including data locality/residency requirements about where data may be stored. IoT (Internet of Things) devices and OT (Operational Technology) systems like SCADA (Supervisory Control and Data Acquisition) and ICS (Industrial Control Systems) often have weak built-in security and long service lifespans, so they are typically isolated onto their own dedicated network segments rather than mixed with general corporate traffic. BYOD (Bring Your Own Device) policies allow employees to use personal devices for work, requiring specific security controls (like NAC, MDM, or dedicated guest-like segmentation) since the organization does not fully control those devices.',
    taglish:
      'Ang compliance frameworks ay nagtatakda ng kinakailangang security practices, madalas na nakatali sa legal o kontraktwal na obligasyon. Ang PCI DSS (Payment Card Industry Data Security Standard) ay nagtatakda ng requirements para sa kahit anong organisasyong humahawak ng credit card data. Ang GDPR (General Data Protection Regulation) ay batas ng European Union na namamahala kung paano dapat protektahan at hawakan ang personal data, kasama na ang data locality/residency requirements tungkol sa kung saan puwedeng i-imbak ang data. Ang IoT (Internet of Things) devices at OT (Operational Technology) systems tulad ng SCADA at ICS ay madalas mahina ang built-in na security at matagal gamitin, kaya karaniwang inihihiwalay sila sa sarili nilang dedikadong network segment sa halip na paghaluin sa pangkaraniwang corporate traffic. Ang BYOD (Bring Your Own Device) policy naman ay nagpapahintulot sa mga empleyado na gamitin ang sarili nilang personal na device para sa trabaho — kailangan ng specific na security controls (tulad ng NAC, MDM, o dedikadong guest-like na segmentation) dahil hindi ganap na kontrolado ng organisasyon ang mga device na iyon.',
    analogy: {
      title: 'Panuntunan ng bangko at hiwalay na kusina para sa panauhing tagaluto',
      text:
        'Isipin mo ang PCI DSS parang mahigpit na panuntunan ng isang bangko tungkol sa pag-iingat ng pera ng customer — kailangan sundin ito ng lahat ng humahawak ng credit card. Ang GDPR naman parang batas tungkol sa paggalang sa privacy ng bawat tao sa European Union, kahit saan pa sila. Ang paghihiwalay ng IoT/OT devices sa sariling network segment ay parang paglalagay ng hiwalay na kusina para sa isang panauhing tagaluto na hindi mo pa lubos na kilala — puwede silang magluto (gumana), pero hindi sila puwedeng basta pumasok sa buong bahay mo. Ang BYOD naman parang pagpapahintulot sa mga bisita na gamitin ang sarili nilang gamit sa loob ng bahay mo — kailangan mo pa ring magtakda ng mga panuntunan dahil hindi mo naman talaga alam kung ano-ano ang laman ng mga gamit na iyon.',
    },
    howItWorks: [
      'PCI DSS requires specific technical controls (network segmentation, encryption, access control, regular testing) for any environment that stores, processes, or transmits cardholder data.',
      'GDPR imposes obligations around consent, data minimization, breach notification, and data locality — where data physically resides can determine which legal jurisdiction\'s rules apply.',
      'IoT devices often ship with weak default credentials, infrequent (or no) security updates, and long deployment lifespans, making them attractive, persistent targets if left on a general network.',
      'OT/SCADA/ICS systems control physical processes (manufacturing, utilities, building systems) where a security failure can have real-world physical safety consequences, not just data loss — these are typically isolated with especially strict segmentation and change control.',
      'BYOD security relies on techniques like NAC (verifying device posture before granting access), MDM (Mobile Device Management, enforcing policy on the device itself), and network segmentation (keeping BYOD traffic separate from sensitive internal resources).',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Concept</th><th>Key Concern</th><th>Typical Control</th></tr></thead>
        <tbody>
          <tr><td>PCI DSS</td><td>Protecting cardholder data</td><td>Segmentation, encryption, access control</td></tr>
          <tr><td>GDPR</td><td>Personal data protection (EU)</td><td>Data locality, consent, breach notification</td></tr>
          <tr><td>IoT</td><td>Weak default security, long lifespan</td><td>Dedicated isolated network segment</td></tr>
          <tr><td>OT / SCADA / ICS</td><td>Physical safety consequences of compromise</td><td>Strict isolation, tight change control</td></tr>
          <tr><td>BYOD</td><td>Uncontrolled personal devices</td><td>NAC, MDM, dedicated segmentation</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A hospital keeps its internet-connected medical IoT devices (infusion pumps, monitors) on a completely separate, tightly restricted VLAN from its general staff Wi-Fi and administrative systems, precisely because those devices cannot be patched as frequently as regular computers and a compromise could have direct physical safety consequences for patients.',
    proTips: [
      'When a scenario mentions handling credit card payments, think PCI DSS; when it mentions EU citizens\' personal data, think GDPR — recognize the trigger condition for each framework.',
      'The instinct for IoT, OT, and BYOD is the same underlying principle every time: when you cannot fully trust or control a device, isolate it onto its own segment rather than trusting it on the general network.',
    ],
    examAlert:
      'Expect the exam to describe a scenario (handling payments, EU customer data, factory control systems, employee personal phones) and ask which framework or segmentation approach applies — practice matching scenario to concept.',
    beginnerMistakes: [
      'Assuming compliance frameworks are optional "best practices" — many, like PCI DSS and GDPR, carry real legal or contractual consequences for non-compliance.',
      'Placing IoT or OT devices on the same network segment as general corporate traffic "for convenience" — this is a well-documented, high-risk mistake.',
      'Assuming BYOD is purely a convenience issue rather than a genuine security consideration requiring its own controls.',
    ],
    keyTerms: [
      { term: 'PCI DSS', def: 'Payment Card Industry Data Security Standard — requirements for organizations handling credit card data.' },
      { term: 'GDPR', def: 'General Data Protection Regulation — an EU law governing personal data protection and handling.' },
      { term: 'OT / SCADA / ICS', def: 'Operational Technology and industrial control systems managing physical processes, requiring strict isolation.' },
      { term: 'BYOD', def: 'Bring Your Own Device — a policy allowing personal devices for work, requiring specific security controls.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'A company processes customer credit card payments. Which compliance framework applies most directly?',
        options: ['GDPR', 'PCI DSS', 'NAC', 'SCADA'],
        correct: 1,
        explanation: 'PCI DSS specifically governs organizations that store, process, or transmit cardholder data.',
      },
      {
        prompt: 'Why are IoT devices typically isolated onto their own dedicated network segment?',
        options: [
          'They require more bandwidth than other devices.',
          'They often have weak default security and long service lifespans, making them attractive persistent targets if mixed with general traffic.',
          'They cannot connect to Wi-Fi at all.',
          'They are always more expensive than other network equipment.',
        ],
        correct: 1,
        explanation: 'Weak built-in security and long lifespans make IoT devices risky to leave on the general network.',
      },
      {
        prompt: 'What is a key security consideration specific to OT/SCADA/ICS systems compared to typical IT systems?',
        options: [
          'They never need any security controls at all.',
          'A security failure can have real-world physical safety consequences, not just data loss.',
          'They are always more frequently patched than regular IT systems.',
          'They only exist in office environments.',
        ],
        correct: 1,
        explanation: 'OT/SCADA/ICS control physical processes, so compromise can cause real-world physical harm, raising the stakes significantly.',
      },
    ],
    miniScenario: {
      prompt: 'A manufacturing company wants to connect its factory floor control systems to the corporate network for monitoring purposes, while minimizing the risk of a cyberattack causing a physical safety incident.',
      task: 'Recommend a network design approach for this situation, referencing segmentation specifically.',
    },
    recap:
      'PCI DSS governs cardholder data protection; GDPR governs EU personal data handling and locality. IoT and OT/SCADA/ICS devices are isolated onto dedicated segments due to weak security and, for OT, real physical safety stakes. BYOD requires NAC, MDM, and segmentation since devices are not fully controlled by the organization.',
    classroomAnswer:
      '"Compliance frameworks tell me the rules I must follow for specific data types, and for IoT, OT, and BYOD, the answer is always the same instinct: if I can\'t fully trust or control it, it gets its own isolated segment."',
  };

  NetReady.LESSONS['12-8'] = {
    id: '12-8',
    moduleId: 12,
    slug: 'vulnerabilities-risk-management-defense-in-depth',
    title: 'Vulnerabilities, Risk Management, and Defense in Depth',
    estMinutes: 12,
    outcomes: [
      'Differentiate a vulnerability, a threat, and a risk in precise terms.',
      'Differentiate a vulnerability assessment from a penetration test.',
      'Explain the four risk management strategies and the core idea of defense in depth.',
    ],
    whyItMatters:
      'These are the vocabulary words a SOC analyst uses every single day when triaging a finding — mixing up "vulnerability" and "risk" in a report is the kind of imprecision that undermines credibility fast.',
    simpleEnglish:
      'A vulnerability is a weakness that could be exploited (an unpatched server, a misconfigured firewall rule, a weak password policy). A threat is anything that could exploit a vulnerability (an attacker, malware, even a natural disaster). Risk is the actual likelihood and impact of a threat successfully exploiting a vulnerability — risk only exists where a real threat meets a real vulnerability. A CVE (Common Vulnerabilities and Exposures) is a standardized public identifier assigned to a known vulnerability, so different tools and researchers can all refer to the exact same issue. A zero-day vulnerability is one that is actively being exploited (or is exploitable) before the vendor has released a fix. A vulnerability assessment scans and identifies weaknesses without actively exploiting them, producing a list of what could go wrong. A penetration test goes further, actively and safely attempting to exploit those weaknesses (with explicit authorization) to prove what an attacker could actually achieve. Risk management then has four possible strategies for any identified risk: avoid it (stop doing the risky activity entirely), mitigate it (reduce the likelihood or impact with controls), transfer it (shift the financial impact, such as cyber insurance or outsourcing), or accept it (formally acknowledge and tolerate it when the cost of addressing it outweighs the risk itself). Defense in depth is the overall philosophy of using multiple, layered security controls so that no single point of failure compromises the entire system.',
    taglish:
      'Ang vulnerability ay isang kahinaan na puwedeng samantalahin (unpatched server, mali ang configuration ng firewall rule, mahinang password policy). Ang threat naman ay kahit anong puwedeng samantalahin ang vulnerability (attacker, malware, kahit natural disaster). Ang risk ay ang aktwal na tsansa at epekto kung matagumpay na na-exploit ng isang threat ang isang vulnerability — may risk lang kung may TUNAY na threat na nakatagpo ng TUNAY na vulnerability. Ang CVE (Common Vulnerabilities and Exposures) ay standardized na pampublikong identifier na itinalaga sa isang kilalang vulnerability, para pareho ang pagtukoy ng lahat ng tool at researcher sa parehong isyu. Ang zero-day vulnerability ay isa na aktibong ginagamit (o pwedeng gamitin) BAGO pa makalabas ang fix mula sa vendor. Ang vulnerability assessment ay sini-scan at tinutukoy ang mga kahinaan HINDI ito talagang samasantalahin, gumagawa lang ng listahan ng posibleng problema. Ang penetration test naman mas malayo pa — aktibo at ligtas na susubukang samantalahin ang mga kahinaan (may explicit na pahintulot) para patunayan kung ano talaga ang kaya ng isang attacker. Ang risk management ay may apat na posibleng strategy para sa kahit anong natukoy na risk: iwasan (avoid — itigil ang mapanganib na aktibidad), bawasan (mitigate — gamitin ang mga control para bawasan ang tsansa o epekto), ilipat (transfer — ilipat ang financial impact, tulad ng cyber insurance o outsourcing), o tanggapin (accept — pormal na kinikilala at pinahihintulutan ito kapag ang gastos sa pag-aayos mas malaki pa sa risk mismo). Ang defense in depth ay ang kabuuang pilosopiya ng paggamit ng maraming, sunod-sunod na layer ng security controls, para walang isang single point of failure na puwedeng maka-compromise sa buong sistema.',
    analogy: {
      title: 'Sirang lock, magnanakaw sa kapitbahayan, at maraming layer ng bantay',
      text:
        'Isipin mo ang vulnerability parang sirang lock sa bintana ng bahay mo — kahinaan lang, hindi pa problema kung walang magnanakaw sa lugar. Ang threat ay ang aktwal na magnanakaw na naglilibot sa kapitbahayan. Ang risk ay ang tsansang manakaw ka TALAGA — na may kaugnayan sa pagsasama ng sirang lock AT pagkaroon ng magnanakaw sa paligid; kung wala namang magnanakaw, hindi masyadong importante ang sirang lock, at kung matibay ang lock mo, hindi masyadong makakapasok kahit may magnanakaw. Ang vulnerability assessment ay parang kinuha mo ang isang building inspector na maglalista lang ng lahat ng mahinang parte ng bahay mo — hindi niya susubukang pumasok. Ang penetration test naman parang kinuha mo talaga ang isang "ethical" na tao na susubukan AKTWAL na pumasok gamit ang parehong pamamaraan ng totoong magnanakaw, para patunayan kung talagang kaya niyang gawin ito. Ang defense in depth ay parang bahay na may gate, guard, CCTV, alarm system, AT naka-lock na pinto sa bawat kwarto sa loob — kung matalo ang isang layer, marami pa ring ibang hadlang bago makarating ang manloloob sa pinaka-importanteng bagay.',
    },
    howItWorks: [
      'A vulnerability, threat, and risk are three distinct concepts that must combine (threat + vulnerability = risk) — addressing only one side (e.g., patching without also considering who might attack) gives an incomplete picture.',
      'CVE identifiers (like CVE-2024-XXXXX) let security teams, vendors, and tools reference the exact same known vulnerability consistently across advisories, scanners, and patches.',
      'A zero-day is dangerous specifically because no patch exists yet — defenses must rely on other layers (detection, segmentation, least privilege) until a fix is released.',
      'A vulnerability assessment is typically automated (scanning tools), broad, and non-destructive — it tells you WHAT might be wrong.',
      'A penetration test is manual/semi-manual, narrower in scope, authorized in writing beforehand, and actively exploits findings — it tells you what an attacker could ACTUALLY do with those weaknesses.',
      'Risk management strategies are chosen based on cost versus benefit: avoid (eliminate the risky activity), mitigate (add controls like patching, firewalls, training), transfer (insurance, third-party contracts), or accept (document and monitor, when the cost of further action exceeds the risk).',
      'Defense in depth layers different control types (physical, technical, administrative) so a failure in one layer — a missed patch, a phished password — does not automatically lead to full compromise, because other layers (segmentation, MFA, monitoring) still stand in the way.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Term</th><th>Definition in One Line</th></tr></thead>
        <tbody>
          <tr><td>Vulnerability</td><td>A weakness that could be exploited</td></tr>
          <tr><td>Threat</td><td>Anything that could exploit a vulnerability</td></tr>
          <tr><td>Risk</td><td>Likelihood + impact of a threat exploiting a vulnerability</td></tr>
          <tr><td>Vulnerability assessment</td><td>Identifies weaknesses, does not exploit them</td></tr>
          <tr><td>Penetration test</td><td>Authorized, active attempt to exploit weaknesses</td></tr>
          <tr><td>Avoid / Mitigate / Transfer / Accept</td><td>The four risk management strategies</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A vulnerability scan finds an unpatched web server (the vulnerability). Threat intelligence shows active scanning by attackers targeting exactly that flaw (the threat). Because the server hosts a public-facing payment page, the risk is assessed as high, so the team decides to mitigate it by patching immediately rather than accepting the risk — and a follow-up penetration test confirms the patch actually closed the exploitable path, not just the version number in a banner.',
    proTips: [
      'When writing a finding, force yourself to name the vulnerability, the realistic threat, and the resulting risk separately — it is the fastest way to sound (and think) precisely rather than vaguely.',
      'A vulnerability assessment answers "what could be wrong"; a penetration test answers "what could actually happen" — never treat a scan report alone as proof something is or is not exploitable.',
    ],
    examAlert:
      'A frequent exam trap uses "vulnerability" and "risk" interchangeably in the wrong option — remember risk requires BOTH a vulnerability and a credible threat; a vulnerability with no plausible threat is a much lower risk.',
    beginnerMistakes: [
      'Using "vulnerability," "threat," and "risk" as if they were synonyms instead of three distinct, combinable concepts.',
      'Assuming a vulnerability assessment and a penetration test are the same activity with different names — they differ specifically in whether exploitation is actually attempted.',
      'Treating "accept the risk" as laziness rather than a legitimate, formally-documented risk management strategy when the cost of mitigation genuinely outweighs the risk.',
    ],
    keyTerms: [
      { term: 'Vulnerability', def: 'A weakness in a system that could potentially be exploited.' },
      { term: 'Threat', def: 'Anything with the potential to exploit a vulnerability and cause harm.' },
      { term: 'Risk', def: 'The likelihood and impact of a threat successfully exploiting a vulnerability.' },
      { term: 'CVE', def: 'Common Vulnerabilities and Exposures — a standardized public identifier for a known vulnerability.' },
      { term: 'Zero-day', def: 'A vulnerability being exploited or exploitable before a vendor patch exists.' },
      { term: 'Vulnerability assessment', def: 'A scan-based process that identifies weaknesses without actively exploiting them.' },
      { term: 'Penetration test', def: 'An authorized, active attempt to exploit identified weaknesses to prove real-world impact.' },
      { term: 'Defense in depth', def: 'A layered security strategy using multiple control types so no single failure compromises the whole system.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What combination of factors actually creates risk?',
        options: [
          'A vulnerability alone, regardless of any threat.',
          'A threat alone, regardless of any vulnerability.',
          'A credible threat combined with an exploitable vulnerability.',
          'Risk exists automatically on every network at all times, regardless of conditions.',
        ],
        correct: 2,
        explanation: 'Risk specifically requires both a real threat and a real vulnerability meeting each other — neither alone is sufficient.',
      },
      {
        prompt: 'What is the key difference between a vulnerability assessment and a penetration test?',
        options: [
          'They are identical activities with different marketing names.',
          'A vulnerability assessment identifies weaknesses without exploiting them; a penetration test actively and safely attempts to exploit them with authorization.',
          'A penetration test never requires authorization.',
          'A vulnerability assessment is always more expensive than a penetration test.',
        ],
        correct: 1,
        explanation: 'The defining difference is whether exploitation is actually attempted — assessment identifies, penetration testing proves.',
      },
      {
        prompt: 'A company decides the cost of fully mitigating a low-impact risk is far higher than the risk itself, so it formally documents and monitors the risk instead. Which risk management strategy is this?',
        options: ['Avoid', 'Mitigate', 'Transfer', 'Accept'],
        correct: 3,
        explanation: 'Formally acknowledging and tolerating a risk when mitigation cost exceeds the risk itself is the "accept" strategy.',
      },
    ],
    miniScenario: {
      prompt: 'A vulnerability scanner flags an outdated software version on an internal-only server with no known active exploit and extremely limited network exposure.',
      task: 'Explain, using the vulnerability/threat/risk distinction, why this specific finding might be assessed as low risk despite being a real vulnerability.',
    },
    recap:
      'Vulnerability is a weakness; threat is what could exploit it; risk is the resulting likelihood and impact when they meet. A vulnerability assessment identifies weaknesses; a penetration test proves exploitability with authorization. Risk management strategies are avoid, mitigate, transfer, and accept. Defense in depth layers multiple controls so no single failure compromises everything.',
    classroomAnswer:
      '"I never say \'risk\' when I mean \'vulnerability\' — a weakness only becomes a real risk once there\'s an actual threat that could exploit it, and defense in depth is my insurance for the day one layer eventually fails."',
  };
}(window.NetReady));
