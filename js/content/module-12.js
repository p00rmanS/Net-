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
      'Ang asymmetric encryption ay gumagamit ng magkapares na key na magkaugnay sa matematika: ang public key (ibinabahagi nang bukas) at ang private key (itinatago). Ang data na na-encrypt gamit ang public key ay puwede lang buksan (i-decrypt) gamit ang kaparehong private key — kaya nitong ligtas na makipag-usap nang hindi kinakailangang ibahagi ang lihim na susi mismo sa network. Ang PKI (Public Key Infrastructure) ay ang sistema ng mga certificate, Certificate Authorities (CA), at patakaran na namamahala at nagbe-verify sa mga key pair na ito — pinapatunayan nito na ang isang public key ay talagang pag-aari ng taong nag-aangkin nito. Ang encryption in transit ay pinoprotektahan ang data habang gumagalaw ito sa network (tulad ng HTTPS). Ang encryption at rest naman pinoprotektahan ang data habang naka-imbak (tulad ng naka-encrypt na hard drive o database).',
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
      'NAC is enforced through concrete mechanisms: port security (limiting or locking down which MAC addresses may connect to a specific switch port), 802.1X (certificate/credential-based authentication before a port is allowed to pass regular traffic), and MAC filtering (an allow-list or deny-list of specific MAC addresses permitted on a network or port).',
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
      { term: 'MAC filtering', def: 'A NAC enforcement mechanism that allows or denies network access based on a device\'s MAC address.' },
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

  NetReady.LESSONS['12-9'] = {
    id: '12-9',
    moduleId: 12,
    slug: 'secure-protocols-and-ipsec',
    title: 'Secure Protocol Replacements and IPsec: AH, ESP, and IKE',
    estMinutes: 15,
    outcomes: [
      `Match insecure legacy protocols to their secure replacements and ports.`,
      `Explain what IPsec provides and how AH and ESP differ.`,
      `Distinguish IPsec transport mode from tunnel mode.`,
      `Describe the role of IKE and security associations.`,
    ],
    whyItMatters: `Telnet, FTP, HTTP, and SNMPv1 send data, and often passwords, in clear text. Network+ repeatedly asks you to pick the secure alternative, and VPN questions assume you know what IPsec is actually doing.`,
    simpleEnglish: `Many old protocols were designed when networks were trusted, so they send everything unencrypted. Each has a secure replacement: Telnet becomes SSH, FTP becomes SFTP or FTPS, HTTP becomes HTTPS, SNMPv1 and v2c become SNMPv3, LDAP becomes LDAPS. SSL is obsolete; TLS is the modern protocol underneath HTTPS and most secure services. IPsec is a suite that secures traffic at Layer 3. ESP (Encapsulating Security Payload) encrypts and authenticates; AH (Authentication Header) authenticates and protects integrity but does NOT encrypt. IKE (Internet Key Exchange) negotiates the keys and settings, called security associations. In tunnel mode IPsec wraps the whole original packet in a new one (typical for site-to-site VPNs); in transport mode only the payload is protected between two hosts.`,
    taglish: `Ang mga lumang protocol ay parang postcard — kahit sino sa daan puwedeng bumasa. Ang secure na kapalit nila ay parang sealed na envelope: Telnet → SSH, FTP → SFTP/FTPS, HTTP → HTTPS, SNMPv1/v2c → SNMPv3, LDAP → LDAPS. Ang IPsec ay set ng patakaran para i-secure ang IP packets mismo. Ang ESP ay may encryption; ang AH ay pang-verify lang (hindi naka-encrypt). Ang IKE ang nagnenegosasyon ng susi at settings. Sa tunnel mode, ibinabalot ang buong orihinal na packet sa bagong packet (site-to-site VPN). Sa transport mode, ang payload lang ang pinoprotektahan (host-to-host).`,
    analogy: {
      title: 'Postcard laban sa armored van',
      text: `Ang Telnet ay postcard: nababasa ng bawat kamay na dumaraan. Ang SSH ay selyadong sulat. Ang IPsec tunnel mode naman ay armored van na naglalaman ng buong sulat, pati ang sobre at address, at may bagong address sa labas ng van. Ang IKE ay ang pag-uusap ng dalawang guwardiya sa simula para pagkasunduan ang susi ng kandado.`,
    },
    howItWorks: [
      `Telnet (TCP 23) is replaced by SSH (TCP 22), which also supplies secure file copy (SCP) and SFTP.`,
      `FTP (TCP 21 control, 20 data) is replaced by SFTP (runs over SSH on TCP 22) or FTPS (FTP over TLS, commonly TCP 990 implicit or 21 explicit). TFTP (UDP 69) has no authentication or encryption at all.`,
      `HTTP (80) becomes HTTPS (443). Mail: SMTP 25 becomes SMTP with TLS (587 or 465); POP3 110 becomes 995; IMAP 143 becomes 993. LDAP 389 becomes LDAPS 636. Syslog UDP 514 can be wrapped in TLS (commonly 6514).`,
      `SNMPv1 and v2c use plain community strings. SNMPv3 adds authentication and encryption (authPriv).`,
      `SSL versus TLS: SSL (all versions) and early TLS (1.0, 1.1) are deprecated. Use TLS 1.2 or 1.3.`,
      `IPsec provides confidentiality (encryption), integrity, origin authentication, and anti-replay protection at the network layer.`,
      `AH is IP protocol 51: authentication and integrity, no encryption, and it breaks across NAT because it protects the IP header. ESP is IP protocol 50: encryption plus integrity and authentication, and it works with NAT when wrapped in UDP 4500 (NAT traversal).`,
      `IKE uses UDP 500 (and UDP 4500 for NAT-T). Phase 1 builds a secure management channel and authenticates peers (pre-shared key or certificates); phase 2 negotiates the IPsec security associations (SAs) that actually protect the data.`,
      `Modes: transport mode protects only the payload and keeps the original IP header (host-to-host); tunnel mode encrypts the entire original packet and adds a new outer IP header (gateway-to-gateway or remote access VPN).`,
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Table mapping insecure protocols to secure replacements and ports">
        <div class="table-scroll"><table class="lesson-table">
          <thead><tr><th>Insecure</th><th>Port</th><th>Secure replacement</th><th>Port</th></tr></thead>
          <tbody>
            <tr><td>Telnet</td><td>TCP 23</td><td>SSH</td><td>TCP 22</td></tr>
            <tr><td>FTP</td><td>TCP 21</td><td>SFTP / FTPS</td><td>TCP 22 / 990</td></tr>
            <tr><td>HTTP</td><td>TCP 80</td><td>HTTPS</td><td>TCP 443</td></tr>
            <tr><td>LDAP</td><td>TCP 389</td><td>LDAPS</td><td>TCP 636</td></tr>
            <tr><td>POP3 / IMAP</td><td>110 / 143</td><td>POP3S / IMAPS</td><td>995 / 993</td></tr>
            <tr><td>SNMPv1/v2c</td><td>UDP 161</td><td>SNMPv3</td><td>UDP 161</td></tr>
          </tbody>
        </table></div>
      </div>`,
    },
    realWorldExample: `A security scan flags that a switch still accepts Telnet. The technician disables Telnet, enables SSH with key-based logins, restricts the management VTY lines to the management VLAN, and later notices that the monitoring tool uses SNMPv2c. They move it to SNMPv3 with authPriv so even the monitoring traffic is encrypted.`,
    proTips: [
      `If a question says "encrypts the payload and authenticates", it is ESP. If it says "authentication only, no confidentiality", it is AH.`,
      `Site-to-site VPN between two firewalls almost always means IPsec in tunnel mode, using IKE with UDP 500.`,
      `A packet capture showing readable passwords on port 21, 23, 80, or 110 is evidence of an insecure protocol still in use.`,
    ],
    examAlert: `Know the secure/insecure pairs and port numbers cold. Also memorize: ESP = protocol 50 (encrypts), AH = protocol 51 (no encryption), IKE = UDP 500, tunnel mode = new outer header.`,
    beginnerMistakes: [
      `Assuming SFTP and FTPS are the same thing. SFTP runs over SSH; FTPS is FTP wrapped in TLS.`,
      `Thinking AH encrypts traffic.`,
      `Calling any HTTPS site secure without noticing it relies on TLS, not SSL.`,
    ],
    keyTerms: [
      { term: 'SSH', def: `Secure shell, an encrypted replacement for Telnet on TCP 22.` },
      { term: 'TLS', def: `Transport Layer Security, the modern successor to SSL.` },
      { term: 'ESP', def: `IPsec protocol that provides encryption, integrity, and authentication.` },
      { term: 'AH', def: `IPsec protocol that provides integrity and authentication without encryption.` },
      { term: 'IKE', def: `Protocol that negotiates IPsec keys and security associations.` },
      { term: 'Security association (SA)', def: `Agreed set of keys and algorithms protecting one direction of traffic.` },
    ],
    knowledgeCheck: [
      {
        prompt: `Which protocol is the secure replacement for Telnet?`,
        options: [`SFTP`, `SSH`, `HTTPS`, `SNMPv3`],
        correct: 1,
        explanation: `SSH on TCP 22 encrypts remote terminal sessions, replacing clear-text Telnet on TCP 23.`,
      },
      {
        prompt: `Which IPsec protocol provides encryption of the payload?`,
        options: [`AH`, `IKE`, `ESP`, `GRE`],
        correct: 2,
        explanation: `ESP encrypts and authenticates; AH only authenticates and protects integrity.`,
      },
      {
        prompt: `Two firewalls build a site-to-site VPN. Which IPsec mode is typically used?`,
        options: [`Transport mode`, `Tunnel mode`, `Aggressive mode only`, `Passive mode`],
        correct: 1,
        explanation: `Tunnel mode encapsulates the original packet with a new outer header, which suits gateway-to-gateway VPNs.`,
      },
    ],
    miniScenario: {
      prompt: `A capture of traffic to a file server shows a username and password in readable text on TCP 21.`,
      task: `Name the protocol and two secure replacements you could recommend.`,
    },
    recap: `Replace Telnet with SSH, FTP with SFTP or FTPS, HTTP with HTTPS, SNMPv1/v2c with SNMPv3, and use TLS rather than SSL. IPsec secures Layer 3: ESP encrypts, AH only authenticates, IKE negotiates keys, and tunnel mode builds site-to-site VPNs.`,
    classroomAnswer: `"If it travels in clear text, swap it for its secure twin. For IPsec: ESP encrypts, AH just signs, IKE sets it up."`,
  };

  NetReady.LESSONS['12-10'] = {
    id: '12-10',
    moduleId: 12,
    slug: 'ids-ips-and-siem',
    title: 'IDS, IPS, and SIEM: Detecting and Responding to Threats',
    estMinutes: 13,
    outcomes: [
      `Explain the difference between an IDS and an IPS, including placement.`,
      `Compare signature-based and anomaly-based detection.`,
      `Define false positive and false negative.`,
      `Explain what a SIEM does and why log correlation matters.`,
    ],
    whyItMatters: `Firewalls block known-bad rules, but attackers who use allowed ports still get through. IDS, IPS, and SIEM are how security teams notice and respond. These are core tools for a SOC analyst and show up often on the exam.`,
    simpleEnglish: `An Intrusion Detection System (IDS) watches a copy of traffic and raises alerts but does not stop anything. An Intrusion Prevention System (IPS) sits inline, in the path of traffic, and can drop malicious packets automatically. Detection works by signatures (known patterns, accurate for known attacks, blind to new ones) or by anomalies (deviation from a baseline, can catch new attacks but creates more false alarms). A false positive is an alert on harmless traffic; a false negative is a real attack that went unnoticed. A SIEM (Security Information and Event Management) collects logs from firewalls, servers, switches, and IDS/IPS, normalizes them, correlates events, and alerts analysts.`,
    taglish: `Ang IDS ay CCTV: nakakakita at nag-aalarma, pero hindi humaharang. Ang IPS ay guard na nasa pintuan at puwedeng pumigil mismo. Ang signature-based ay parang listahan ng mukha ng kilalang magnanakaw; ang anomaly-based ay nagtataka kapag may kakaibang kilos kahit hindi pa kilala. False positive: nag-alarm pero wala namang masama. False negative: may nakalusot pero walang nag-alarm — ito ang mas delikado. Ang SIEM ay central na control room: kinokolekta niya ang logs ng lahat ng device, pinag-uugnay ang mga pangyayari, at binibigyan ng alerto ang analyst.`,
    analogy: {
      title: 'CCTV, guwardiya, at control room',
      text: `IDS = CCTV na nagre-record at nag-aalarma. IPS = guwardiyang nasa gate na puwedeng magpaalis agad. SIEM = control room kung saan pinagsasama ang footage ng lahat ng camera, logbook ng guwardiya, at ulat ng sensors, para makita ang pattern na hindi makikita ng isang camera lang.`,
    },
    howItWorks: [
      `IDS placement: out-of-band, fed by a network tap or SPAN/mirror port. It cannot block traffic, so a failure of the IDS does not interrupt the network.`,
      `IPS placement: inline between segments. It can drop packets, reset connections, or block a source. If the IPS fails it must be configured to fail-open (traffic keeps flowing, unprotected) or fail-closed (traffic stops), a business decision.`,
      `Network-based (NIDS/NIPS) watches network traffic; host-based (HIDS/HIPS) runs on an endpoint and watches files, processes, and logs.`,
      `Signature-based detection compares traffic to a database of known attack patterns. It needs regular updates and misses zero-day attacks.`,
      `Anomaly (behavior) based detection learns a baseline of normal activity and alerts on deviations. It can catch unknown attacks but produces more false positives. Heuristic methods score suspicious behavior.`,
      `False positive: harmless activity flagged. False negative: malicious activity missed. Tuning reduces false positives, but over-tuning can create false negatives.`,
      `Next-generation firewalls (NGFW) commonly bundle IPS, application awareness, and TLS inspection with traditional firewalling.`,
      `SIEM: collects logs (often via syslog), normalizes formats, correlates events across sources (for example failed logins on a server followed by a successful login and a new admin account), raises alerts, retains logs for compliance, and provides dashboards. SOAR tools can automate the response playbooks.`,
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Table comparing IDS and IPS">
        <div class="table-scroll"><table class="lesson-table">
          <thead><tr><th></th><th>IDS</th><th>IPS</th></tr></thead>
          <tbody>
            <tr><td>Placement</td><td>Out-of-band (tap/SPAN)</td><td>Inline</td></tr>
            <tr><td>Action</td><td>Alert only</td><td>Alert and block</td></tr>
            <tr><td>Impact if it fails</td><td>No traffic impact</td><td>Can stop traffic (fail-closed)</td></tr>
            <tr><td>Latency added</td><td>None</td><td>Some</td></tr>
          </tbody>
        </table></div>
      </div>`,
    },
    realWorldExample: `A SIEM correlates three separate events: 40 failed SSH logins from one external IP, a successful login from that same IP, and a new local account created on the server minutes later. No single log looked alarming, but the correlated sequence triggers a high-severity alert and the analyst isolates the host.`,
    proTips: [
      `Remember "IDS Detects, IPS Prevents". Inline means it can block, out-of-band means it can only watch.`,
      `A flood of false positives leads to alert fatigue, where real alerts get ignored. Tune rules regularly.`,
      `Accurate time (NTP) across devices is essential, or SIEM correlation of events will not line up.`,
    ],
    examAlert: `Typical question: "Which device sits inline and can block attacks?" = IPS. "Alerts but cannot block" = IDS. "Aggregates and correlates logs" = SIEM. Know false positive versus false negative.`,
    beginnerMistakes: [
      `Putting an IDS inline and expecting it to block traffic.`,
      `Believing signature-based detection will catch brand new (zero-day) attacks.`,
      `Treating a SIEM as just a log storage box rather than a correlation and alerting tool.`,
    ],
    keyTerms: [
      { term: 'IDS', def: `Intrusion Detection System that monitors and alerts.` },
      { term: 'IPS', def: `Intrusion Prevention System that sits inline and can block.` },
      { term: 'Signature-based', def: `Detection by matching known attack patterns.` },
      { term: 'Anomaly-based', def: `Detection by spotting deviation from a learned baseline.` },
      { term: 'False positive / negative', def: `Harmless activity flagged / real attack missed.` },
      { term: 'SIEM', def: `Platform that collects, correlates, and alerts on security logs.` },
    ],
    knowledgeCheck: [
      {
        prompt: `Which device is placed inline and can automatically drop malicious packets?`,
        options: [`IDS`, `IPS`, `SIEM`, `Network tap`],
        correct: 1,
        explanation: `An IPS sits in the traffic path and can block, while an IDS only alerts.`,
      },
      {
        prompt: `A detection engine alerts on a legitimate software update as an attack. What is this?`,
        options: [`True positive`, `False negative`, `False positive`, `True negative`],
        correct: 2,
        explanation: `Harmless activity incorrectly flagged as malicious is a false positive.`,
      },
      {
        prompt: `What is the primary purpose of a SIEM?`,
        options: [
          `Encrypting traffic between sites`,
          `Collecting and correlating logs from many sources to generate alerts`,
          `Assigning IP addresses`,
          `Filtering web content by category`,
        ],
        correct: 1,
        explanation: `A SIEM centralizes logs and correlates events so analysts can detect patterns across systems.`,
      },
    ],
    miniScenario: {
      prompt: `Your company wants a device that watches a copy of core switch traffic and alerts the SOC, without any risk of causing an outage if it breaks.`,
      task: `Which device and which connection method fit best?`,
    },
    recap: `IDS detects and alerts out-of-band; IPS prevents inline. Signature detection catches known attacks, anomaly detection catches deviations but creates more false positives. A SIEM centralizes and correlates logs so analysts can see the bigger picture.`,
    classroomAnswer: `"IDS watches, IPS blocks, SIEM connects the dots."`,
  };

  NetReady.LESSONS['12-11'] = NetReady.lesson(12, {
    id: '12-11',
    slug: 'security-appliances-ngfw-waf-proxy',
    title: 'Security Appliances: NGFW, UTM, WAF, Reverse Proxy, VPN Concentrator, and Content Filtering',
    minutes: 13,
    outcomes: [
      `Describe what a next-generation firewall, UTM, and WAF each add beyond a basic firewall.`,
      `Explain forward proxy, reverse proxy, and content or URL filtering.`,
      `Identify the role of a VPN concentrator and the security zones: trusted, untrusted, and screened subnet.`,
    ],
    why: `Security design questions give a requirement ("inspect web traffic for SQL injection") and ask for the device. This lesson gives you a quick map from requirement to appliance.`,
    simple: `A traditional firewall filters by IP address, port, and protocol. A next-generation firewall (NGFW) adds application awareness, intrusion prevention, user identity, and TLS inspection. A unified threat management (UTM) device bundles many functions (firewall, antivirus, IPS, VPN, content filter) into one box, popular in small offices. A web application firewall (WAF) specifically inspects HTTP and HTTPS traffic to protect web apps from attacks such as SQL injection and cross-site scripting. A forward proxy acts on behalf of clients, filtering and caching outbound web requests; a reverse proxy sits in front of servers, hiding them and distributing or protecting inbound requests. A VPN concentrator terminates many remote-access VPN tunnels. URL and content filtering block categories of sites. Zones separate trust levels: trusted (internal), untrusted (internet), and a screened subnet (DMZ) for public-facing servers.`,
    taglish: `Ang lumang firewall ay nagfi-filter ayon sa IP, port, at protocol. Ang NGFW ay may dagdag: application awareness, IPS, user identity, at TLS inspection. Ang UTM ay iisang kahon na may firewall, antivirus, IPS, VPN, at content filter — paborito sa maliliit na opisina. Ang WAF ay espesyal sa HTTP/HTTPS para protektahan ang web apps laban sa SQL injection at XSS. Ang forward proxy ay kumakatawan sa mga client (palabas); ang reverse proxy ay nasa harap ng mga server (papasok). Ang VPN concentrator ay tumatanggap ng maraming remote VPN. Ang URL at content filtering ay humaharang ng kategorya ng website. May zones: trusted, untrusted, at screened subnet (DMZ).`,
    analogy: {
      title: 'Seguridad sa mall',
      text: `Ang basic firewall ay guard na tumitingin lang ng ID card. Ang NGFW ay guard na tumitingin din ng laman ng bag at nakakakilala ng tao. Ang WAF ay guard sa mismong tindahan ng electronics. Ang reverse proxy ay front desk na tumatanggap ng bisita para sa mga opisina sa likod.`,
    },
    steps: [
      `Stateless packet filter: checks each packet alone against rules. Stateful firewall: tracks connections and allows replies automatically. Both operate mostly at Layers 3 and 4.`,
      `NGFW: adds Layer 7 awareness (identifies applications regardless of port), integrated IPS, user identity (rules by user or group), threat intelligence feeds, and TLS decryption and inspection.`,
      `UTM: all-in-one security (firewall, antivirus and anti-malware, IPS, VPN, spam and content filtering, sometimes web proxy). Easy to manage but a single point of failure and performance limit.`,
      `WAF: sits in front of web applications and inspects HTTP requests for patterns such as SQL injection, XSS, and bots. It protects the application layer that a network firewall cannot interpret.`,
      `Forward proxy: clients send web requests to the proxy, which filters, logs, caches, and forwards them. Enables URL filtering and data loss controls. Transparent proxies intercept without client configuration.`,
      `Reverse proxy: sits in front of servers, receiving client requests and forwarding them inward. Provides TLS termination, load balancing, caching, and hides the real servers.`,
      `Content and URL filtering: block websites by category, reputation, or keyword; used for acceptable use enforcement and malware prevention.`,
      `VPN concentrator: dedicated device (or NGFW feature) that terminates large numbers of remote-access VPN tunnels and handles encryption and authentication.`,
      `Zones: untrusted (internet), trusted (internal LAN), and a screened subnet (DMZ) for web, mail, and DNS servers. Rules usually allow internet to DMZ on specific ports, internal to DMZ for management, and block DMZ to internal except strictly required flows.`,
      `Placement: perimeter firewalls at the edge; internal segmentation firewalls between zones; host-based firewalls on endpoints; WAF in front of web apps.`,
    ],
    table: {
      label: 'Table mapping requirement to security appliance',
      head: ['Requirement', 'Device or feature'],
      rows: [
        ['Filter by IP, port, protocol', 'Traditional (stateful) firewall'],
        ['Identify applications, integrated IPS, TLS inspection', 'NGFW'],
        ['All-in-one security for a small office', 'UTM'],
        ['Stop SQL injection and XSS', 'WAF'],
        ['Hide and protect internal web servers', 'Reverse proxy'],
        ['Filter and log employee web browsing', 'Forward proxy with URL filtering'],
        ['Terminate many remote VPN users', 'VPN concentrator'],
        ['Isolate public-facing servers', 'Screened subnet (DMZ)'],
      ],
      caption: 'Requirement first, device second.',
    },
    example: `An online store is hit with SQL injection attempts that pass cleanly through the network firewall because they arrive over allowed HTTPS. Adding a WAF in front of the web servers blocks the malicious requests while normal shoppers are unaffected.`,
    tips: [
      `"Layer 7 awareness" or "identify applications" = NGFW. "Web app attacks" = WAF.`,
      `Forward proxy protects and controls CLIENTS; reverse proxy protects SERVERS.`,
      `A screened subnet is the modern name for the DMZ.`,
    ],
    exam: `Know NGFW versus UTM versus WAF, forward versus reverse proxy, VPN concentrator purpose, and the three zones including the screened subnet.`,
    mistakes: [
      `Using a network firewall alone to stop web application attacks.`,
      `Confusing forward and reverse proxies.`,
      `Placing public servers on the trusted internal network.`,
    ],
    terms: [
      { term: 'NGFW', def: `Firewall with application awareness, IPS, identity, and TLS inspection.` },
      { term: 'UTM', def: `Unified threat management; many security functions in one appliance.` },
      { term: 'WAF', def: `Web application firewall that inspects HTTP and HTTPS requests.` },
      { term: 'Reverse proxy', def: `Proxy in front of servers that receives and forwards inbound requests.` },
      { term: 'Screened subnet', def: `Network zone for public-facing servers, also called a DMZ.` },
      { term: 'VPN concentrator', def: `Device that terminates many VPN tunnels.` },
    ],
    checks: [
      {
        prompt: `Which device protects a web application from SQL injection and cross-site scripting?`,
        options: [`WAF`, `Basic stateless router`, `Hub`, `Media converter`],
        correct: 0,
        explanation: `A WAF inspects HTTP requests for application-layer attacks.`,
      },
      {
        prompt: `Which proxy sits in front of servers, hides them, and can terminate TLS?`,
        options: [`Forward proxy`, `Reverse proxy`, `Transparent client proxy`, `SOCKS bridge`],
        correct: 1,
        explanation: `Reverse proxies face the internet on behalf of internal servers.`,
      },
      {
        prompt: `Where should public-facing web servers be placed?`,
        options: [`In the trusted internal LAN`, `In a screened subnet (DMZ)`, `On the guest Wi-Fi`, `In the management VLAN`],
        correct: 1,
        explanation: `A screened subnet limits exposure of the internal network if public servers are compromised.`,
      },
    ],
    mini: {
      prompt: `A small clinic wants a single, easy-to-manage box with firewall, antivirus, VPN, and web filtering.`,
      task: `Name the device category and one drawback.`,
    },
    recap: `Stateful firewalls filter by connection; NGFWs add applications, IPS, identity, and TLS inspection; UTMs bundle features; WAFs protect web apps; proxies sit in front of clients or servers; zones and screened subnets structure trust.`,
    classroom: `"Firewall sa network, WAF sa web app, proxy sa gitna — at nasa DMZ ang public servers."`,
  });

  NetReady.LESSONS['12-12'] = NetReady.lesson(12, {
    id: '12-12',
    slug: 'certificates-and-key-management',
    title: 'Certificates and Key Management: Chain of Trust, Self-Signed Certificates, Expiry, and Data at Rest',
    minutes: 13,
    outcomes: [
      `Explain what a digital certificate proves and how the chain of trust works.`,
      `Identify why a browser reports an untrusted or expired certificate, including self-signed ones.`,
      `Describe key management basics and encryption of data at rest versus in transit.`,
    ],
    why: `"Your connection is not private" is a common help-desk ticket, and certificate problems appear in troubleshooting questions. Knowing the chain of trust explains almost every case.`,
    simple: `A digital certificate binds a public key to an identity such as a website name. It is signed by a certificate authority (CA). Your device trusts a set of root CAs; a server presents its certificate and any intermediate certificates, forming a chain of trust back to a trusted root. A certificate is untrusted if it is self-signed (signed by itself rather than a trusted CA), if the issuing CA is not in the trust store, if the name does not match, or if it has expired or been revoked. Keys must be generated, stored, rotated, and protected; a lost or stolen private key breaks the security. Data in transit is protected by TLS or IPsec; data at rest (on disks and backups) is protected by disk or database encryption.`,
    taglish: `Ang digital certificate ay nag-uugnay ng public key sa pagkakakilanlan, gaya ng pangalan ng website, at pinirmahan ng certificate authority (CA). Pinagkakatiwalaan ng device mo ang ilang root CA. Ang server ay nagpapakita ng certificate at intermediate certificates para mabuo ang chain of trust hanggang sa root. Untrusted ang certificate kapag self-signed, hindi kilala ang CA, hindi tugma ang pangalan, expired, o na-revoke. Ang mga key ay kailangang i-generate, itago, palitan, at protektahan; kapag nanakaw ang private key, sira ang seguridad. Ang data in transit ay protektado ng TLS o IPsec; ang data at rest ay ng disk o database encryption.`,
    analogy: {
      title: 'ID mula sa gobyerno',
      text: `Ang certificate ay parang ID. Pinapaniwalaan mo ito dahil inilabas ng ahensya na pinagkakatiwalaan mo (CA). Kung ikaw mismo ang gumawa ng ID mo (self-signed), walang maniniwala. Kung expired o iba ang pangalan, hindi rin tatanggapin.`,
    },
    steps: [
      `Public key infrastructure (PKI): CAs issue certificates; a registration authority verifies requests; certificates are stored and revoked through lists (CRL) or online checks (OCSP).`,
      `Chain of trust: end-entity (server) certificate, signed by an intermediate CA, signed by a root CA that is pre-installed in the device or browser trust store. A server must send its intermediate certificates or clients may report an incomplete chain.`,
      `Certificate fields: subject (the name), subject alternative names (SANs), issuer, public key, validity period (not before, not after), and signature.`,
      `Self-signed certificate: signed with its own private key. Fine for labs or internal devices if you manually trust it, but browsers warn on them. A private internal CA can issue certificates trusted across the company when its root is deployed to devices.`,
      `Common certificate errors: expired (check the date and the device clock, because a wrong time can make a valid certificate look expired), name mismatch (the URL is not in the certificate), untrusted issuer, revoked, or an incomplete chain.`,
      `Key management: generate keys with strong algorithms, protect private keys (hardware security modules, restricted access), rotate on a schedule, revoke if compromised, and back up securely. Never email private keys.`,
      `Data in transit: TLS (HTTPS), SSH, IPsec, and WPA3 protect data moving across a network.`,
      `Data at rest: full-disk encryption (BitLocker, LUKS), database or file encryption, and encrypted backups protect stored data if a device is lost or stolen. Encrypt both.`,
      `Symmetric versus asymmetric: asymmetric (public and private keys) establishes trust and exchanges keys; symmetric (one shared key such as AES) encrypts bulk data quickly.`,
    ],
    table: {
      label: 'Table of certificate warnings and causes',
      head: ['Browser warning', 'Likely cause'],
      rows: [
        ['Certificate expired', 'Validity date passed, or the device clock is wrong'],
        ['Name does not match', 'URL not listed in subject or SAN'],
        ['Untrusted issuer', 'Self-signed or unknown CA'],
        ['Incomplete chain', 'Server missing the intermediate certificate'],
        ['Revoked', 'CA withdrew the certificate (key compromise)'],
      ],
      caption: 'Read the warning; it tells you which check failed.',
    },
    example: `Users of an internal wiki see a security warning every morning. The wiki uses a self-signed certificate that was never deployed to their devices. The admin issues a certificate from the company's internal CA, installs the internal root on managed laptops, and the warnings stop.`,
    tips: [
      `Wrong date or time on a device can cause "certificate expired" errors even when the certificate is fine.`,
      `A "name mismatch" means the certificate does not list the hostname you typed; check SANs.`,
      `Store private keys securely and rotate them; certificates are public, private keys are not.`,
    ],
    exam: `Know: CA signs certificates, chain of trust ends at a trusted root, self-signed means untrusted by default, expired and mismatch errors, symmetric versus asymmetric, and encrypting data in transit AND at rest.`,
    mistakes: [
      `Clicking through certificate warnings on a public site.`,
      `Forgetting to renew certificates before expiry.`,
      `Encrypting data in transit but leaving backups unencrypted.`,
    ],
    terms: [
      { term: 'Certificate authority (CA)', def: `Trusted entity that issues and signs digital certificates.` },
      { term: 'Chain of trust', def: `Linked certificates from a server up to a trusted root CA.` },
      { term: 'Self-signed certificate', def: `Certificate signed by its own key rather than a trusted CA.` },
      { term: 'CRL / OCSP', def: `Methods for checking whether a certificate has been revoked.` },
      { term: 'Data at rest', def: `Stored data, such as on disks, databases, and backups.` },
      { term: 'Key rotation', def: `Replacing cryptographic keys on a schedule.` },
    ],
    checks: [
      {
        prompt: `A browser warns that a site's certificate is untrusted because it was signed by itself. What is this called?`,
        options: [`Wildcard certificate`, `Self-signed certificate`, `Revoked certificate`, `Root of trust`],
        correct: 1,
        explanation: `A self-signed certificate is not issued by a trusted CA, so clients do not trust it by default.`,
      },
      {
        prompt: `Valid certificates suddenly show as expired on one PC only. What should you check first?`,
        options: [`The PC's date and time`, `The switch port`, `The DHCP scope`, `The VLAN`],
        correct: 0,
        explanation: `A wrong system clock can make valid certificates appear expired or not yet valid.`,
      },
      {
        prompt: `Which protects a stolen laptop's stored files?`,
        options: [`TLS`, `Full-disk encryption`, `Port security`, `QoS`],
        correct: 1,
        explanation: `Disk encryption protects data at rest; TLS protects data in transit.`,
      },
    ],
    mini: {
      prompt: `A new web server shows a warning only on Android phones, but works on laptops.`,
      task: `Suggest one chain-of-trust cause.`,
    },
    recap: `Certificates tie keys to identities through a chain of trust ending at a trusted root. Self-signed, expired, mismatched, and revoked certificates cause warnings. Manage keys carefully and encrypt data in transit and at rest.`,
    classroom: `"Hindi pinaniniwalaan ang ID na ikaw mismo ang gumawa — kailangan ng CA."`,
  });

  NetReady.LESSONS['12-13'] = NetReady.lesson(12, {
    id: '12-13',
    slug: 'ics-scada-and-ot-network-security',
    title: 'Industrial Control Systems: SCADA, PLCs, IIoT, and OT Network Security',
    minutes: 13,
    outcomes: [
      `Define ICS, SCADA, PLC, HMI, RTU, and IIoT.`,
      `Explain why OT networks prioritize availability and safety over confidentiality.`,
      `Describe segmentation models and controls that protect OT from IT and the internet.`,
    ],
    why: `Factories, utilities, and buildings run on operational technology. The exam includes ICS and SCADA in the security concepts and segmentation objectives, with questions about how to isolate them.`,
    simple: `Operational technology (OT) controls physical processes: factory lines, water treatment, power grids, and building systems. An industrial control system (ICS) is the collection of equipment that does this. SCADA (supervisory control and data acquisition) gathers data from remote sites and lets operators supervise them. A PLC (programmable logic controller) is a rugged computer that runs control logic for machinery. An HMI (human-machine interface) is the screen operators use. An RTU (remote terminal unit) collects data at remote locations. IIoT (industrial IoT) adds networked sensors and devices to industrial processes. In OT, uptime and safety matter most: a security patch that reboots a controller may be unacceptable. Many industrial protocols (Modbus, DNP3) were designed without authentication. The usual protection is strict segmentation from IT and the internet, monitoring, and controlled remote access.`,
    taglish: `Ang OT ay kumokontrol sa pisikal na proseso: linya ng pabrika, water treatment, power grid, at building systems. Ang ICS ang kabuuang kagamitan para dito. Ang SCADA ay nangangalap ng data mula sa malalayong site at nagpapahintulot sa operator na mag-supervise. Ang PLC ay matibay na computer na nagpapatakbo ng control logic ng makina. Ang HMI ay screen ng operator. Ang RTU ay nangongolekta ng data sa remote site. Ang IIoT ay mga networked na sensor sa industriya. Sa OT, mas mahalaga ang uptime at kaligtasan: ang patch na nagre-reboot ng controller ay maaaring hindi pwede. Maraming industrial protocol (Modbus, DNP3) ang walang authentication, kaya kailangan ang mahigpit na segmentation, monitoring, at kontroladong remote access.`,
    analogy: {
      title: 'Pagpapatakbo ng planta ng tubig',
      text: `Isipin ang waterworks ng bayan. Ang PLC ang operator ng bomba na sumusunod sa programa. Ang HMI ay control panel na tinitingnan ng tao. Kung hihinto ang bomba para sa "update", mawawalan ng tubig ang bayan, kaya hindi puwedeng basta-basta mag-reboot gaya ng office computer.`,
    },
    steps: [
      `Components: sensors and actuators (the physical layer), PLCs and RTUs (controllers), HMIs (operator displays), SCADA servers (supervision and data collection), and a historian (long-term process data). Together they form an ICS.`,
      `IT versus OT priorities: IT emphasizes the CIA triad with confidentiality first. OT emphasizes availability, integrity, and safety first. Equipment may run for 20 to 30 years on legacy operating systems that cannot be patched easily.`,
      `Industrial protocols: Modbus (TCP 502) and DNP3 (TCP/UDP 20000) are common and often unauthenticated and unencrypted; BACnet (UDP 47808) is used in building automation; OPC UA is a newer protocol with built-in security.`,
      `Purdue model: a reference architecture that layers the environment. Level 0 is the physical process, 1 the controllers, 2 the local supervisory systems (HMIs), 3 site operations, and 4 and 5 enterprise IT and the internet. Traffic should flow only between adjacent levels through controlled points, and the zone between IT and OT is often called an industrial DMZ.`,
      `Air gap: no connection at all between OT and other networks. True air gaps are rare today; USB drives and laptops can still bridge them. A data diode (unidirectional gateway) allows data to flow out only.`,
      `Segmentation: separate OT from IT with firewalls and VLANs, restrict communication to required protocols and ports, and use separate zones for different production cells.`,
      `Secure remote access: use a jump host in the DMZ with MFA, session logging, and time-limited vendor access instead of open remote desktop to controllers.`,
      `Monitoring: passive OT network monitoring (via taps or SPAN) learns normal industrial traffic and alerts on unusual commands, without disturbing sensitive devices. Avoid aggressive scanning on fragile equipment.`,
      `Other controls: asset inventory, change control, physical security of cabinets, application allow-listing, backups of PLC logic, and incident response plans that include safety.`,
      `IIoT and smart buildings: place cameras, sensors, and HVAC controllers on separate VLANs or networks with minimal access, change default credentials, and plan for firmware updates.`,
    ],
    table: {
      label: 'Table of ICS and OT terms',
      head: ['Term', 'Meaning'],
      rows: [
        ['PLC', 'Rugged controller that runs machine control logic'],
        ['HMI', 'Operator display and control interface'],
        ['RTU', 'Remote data collector and controller'],
        ['SCADA', 'Supervision and data acquisition across sites'],
        ['Historian', 'Database of process data over time'],
        ['IIoT', 'Networked sensors and devices in industry'],
        ['Data diode', 'One-way gateway that allows data out only'],
      ],
      caption: 'Availability and safety first; isolate and monitor.',
    },
    example: `A water utility's treatment plant used to allow a vendor to connect to a PLC over an open remote desktop. After an audit, the utility puts the plant in its own zone, gives the vendor a jump host with MFA and session recording in an industrial DMZ, blocks all other inbound traffic, and installs passive monitoring that alerts on unexpected Modbus write commands.`,
    tips: [
      `OT question hints: "uptime", "safety", "legacy PLCs" mean segmentation and compensating controls, not rapid patching.`,
      `A flat network joining office PCs and PLCs is the classic mistake.`,
      `Passive monitoring is safer than active scanning on fragile industrial gear.`,
    ],
    exam: `Know ICS, SCADA, PLC, HMI, RTU, and IIoT; that OT prioritizes availability and safety; and that segmentation, jump hosts, and monitoring protect OT networks. Be able to place IoT and OT devices on separate VLANs.`,
    mistakes: [
      `Treating OT like office IT and patching or scanning aggressively.`,
      `Allowing direct internet or vendor access to controllers.`,
      `Assuming an old air gap is still intact.`,
    ],
    terms: [
      { term: 'ICS', def: `Industrial control system that automates and supervises physical processes.` },
      { term: 'SCADA', def: `System for supervisory control and data acquisition across distributed sites.` },
      { term: 'PLC', def: `Programmable logic controller running control logic for equipment.` },
      { term: 'HMI', def: `Human-machine interface used by operators.` },
      { term: 'OT', def: `Operational technology controlling physical devices and processes.` },
      { term: 'Industrial DMZ', def: `Buffer zone between enterprise IT and the OT network.` },
    ],
    checks: [
      {
        prompt: `Which priority typically ranks highest in an OT environment such as a power plant?`,
        options: [`Availability and safety`, `Marketing reach`, `Cloud migration`, `Wi-Fi speed`],
        correct: 0,
        explanation: `OT prioritizes keeping processes running safely over confidentiality.`,
      },
      {
        prompt: `What is the best way to protect PLCs from threats on the corporate network?`,
        options: [`Segment them into their own zone behind a firewall`, `Put them on guest Wi-Fi`, `Give every user remote desktop access`, `Disable logging`],
        correct: 0,
        explanation: `Segmentation limits exposure and controls traffic into the OT zone.`,
      },
      {
        prompt: `What does an HMI do?`,
        options: [`Provides the operator interface to a control system`, `Routes BGP`, `Assigns IP addresses`, `Encrypts email`],
        correct: 0,
        explanation: `A human-machine interface displays process data and lets operators control it.`,
      },
    ],
    mini: {
      prompt: `A vendor needs occasional remote access to a factory PLC.`,
      task: `Describe a safer access design than open remote desktop.`,
    },
    recap: `ICS and SCADA run physical processes, using PLCs, HMIs, and RTUs. OT puts availability and safety first, so protect it with segmentation, industrial DMZs, jump hosts, passive monitoring, and careful patching.`,
    classroom: `"Hindi pwedeng i-reboot ang planta para sa update. Kaya ihiwalay at bantayan, huwag basta galawin."`,
  });

  NetReady.LESSONS['12-14'] = NetReady.lesson(12, {
    id: '12-14',
    slug: 'authorization-models-rbac-least-privilege-geofencing',
    title: 'Authorization and Access Models: Least Privilege, RBAC, Geofencing, Time-Based Access, and Kerberos',
    minutes: 17,
    outcomes: [
      `Separate authentication, authorization, and accounting and name the factors of authentication.`,
      `Compare RBAC with DAC, MAC, and attribute-based access control.`,
      `Apply least privilege, geofencing, and time-based restrictions.`,
      `Explain Kerberos tickets and the joiner-mover-leaver account lifecycle.`,
    ],
    why: `Identity and access management is a major security objective. The exam lists least privilege, role-based access control, geofencing, and time-based authentication, along with MFA, SSO, RADIUS, LDAP, SAML, and TACACS+.`,
    simple: `Authentication proves who you are; authorization decides what you may do; accounting records what you did (AAA). Least privilege means giving each person or system only the access it needs, no more. Role-based access control (RBAC) assigns permissions to roles such as "helpdesk" or "network admin", and people receive roles, which is far easier to manage than per-person permissions. Other models are discretionary (the owner decides), mandatory (labels and a central policy decide), and attribute-based (rules based on attributes such as department, device health, and location). Geofencing allows or blocks access based on location, and time-based restrictions allow access only during defined hours or for a limited period. Kerberos is a ticket-based authentication system for networks.`,
    taglish: `Ang authentication ay nagpapatunay kung sino ka; ang authorization ay nagpapasya kung ano ang puwede mong gawin; ang accounting ay nagtatala ng ginawa mo (AAA). Ang least privilege ay pagbibigay lang ng access na kailangan, hindi higit. Ang role-based access control (RBAC) ay nagtatalaga ng permissions sa roles gaya ng "helpdesk" o "network admin", at ang tao ay binibigyan ng role — mas madaling pamahalaan kaysa permissions bawat tao. May iba pang modelo: discretionary (may-ari ang nagpapasya), mandatory (labels at sentral na patakaran), at attribute-based (batay sa department, kalusugan ng device, lokasyon). Ang geofencing ay nagpapahintulot o humaharang ayon sa lokasyon; ang time-based ay oras o tagal lang ng access. Ang Kerberos ay ticket-based na authentication.`,
    analogy: {
      title: 'Gusali na may mga key card',
      text: `Ang authentication ay pagpapakita ng ID sa guwardiya. Ang authorization ay kung aling palapag ang bubuksan ng key card mo (role). Ang least privilege ay key card na bubukas lang sa palapag mo. Ang geofencing ay card na gumagana lang sa loob ng gusali, at ang time-based ay card na gumagana lang 8 a.m. hanggang 6 p.m. Ang accounting ay logbook ng bawat pasok mo.`,
    },
    steps: [
      `AAA: authentication (who are you), authorization (what may you do), accounting (what did you do, for auditing and billing). RADIUS combines authentication and authorization and is common for network access (UDP 1812/1813); TACACS+ (TCP 49) separates the three functions, encrypts the whole payload, and supports per-command authorization on network devices.`,
    `Authentication factors: something you know (password, PIN), something you have (token, smart card, phone), something you are (fingerprint, face), plus somewhere you are (location) and something you do (behavior). Multifactor authentication (MFA) combines two or more different factor types; two passwords is not MFA.`,
      `Least privilege: grant the minimum rights needed for the job, for the shortest time needed. Related: separation of duties (no single person can complete a sensitive process alone) and need to know.`,
      `Role-based access control (RBAC): permissions attach to roles; users are assigned roles. Benefits: consistency, easy onboarding and offboarding, easy audit ("who has the network-admin role?"). Role explosion is the risk when there are too many roles.`,
      `Other models: discretionary (DAC): the resource owner sets permissions, flexible but harder to control. Mandatory (MAC): a central authority assigns security labels (such as Secret) and the system enforces them, used in high-security environments. Attribute-based (ABAC): decisions use attributes and policy, such as user department, device compliance, time, and location.`,
      `Geofencing: restricts access based on geographic location (for example allow administrative logins only from the corporate network or specific countries, or block logins from unexpected regions). It is often combined with conditional access and impossible-travel detection.`,
      `Time-based authentication and access: restrict login to business hours, grant temporary or just-in-time privileged access that expires, use one-time passwords (TOTP codes that change every 30 seconds), and expire vendor accounts automatically.`,
      `Single sign-on (SSO): sign in once to access many applications, using federation protocols such as SAML (XML assertions between an identity provider and a service provider) and OAuth/OpenID Connect. Benefits: fewer passwords, central control; risk: the identity provider becomes a high-value target, so protect it with MFA.`,
      `Directory services: LDAP (TCP 389, LDAPS 636) queries a directory such as Active Directory. Kerberos (UDP/TCP 88) uses a key distribution center (KDC): you authenticate once and receive a ticket-granting ticket (TGT), then request service tickets for each resource without sending your password again. Kerberos needs clocks synchronized within about five minutes.`,
      `Account lifecycle: joiner (create the account with the right role), mover (change roles and remove old access), leaver (disable immediately and revoke tokens and keys). Regular access reviews catch privilege creep.`,
    ],
    deepDive: [
      {
        title: 'RBAC in practice: a small role matrix',
        code: `Role              View configs  Change configs  Reset passwords  Delete users  Export logs
----------------  ------------  --------------  ---------------  ------------  -----------
Helpdesk          Yes           No              Yes              No            No
Network operator  Yes           Limited (VLAN)  No               No            Yes
Network admin     Yes           Yes             No               No            Yes
Security admin    Yes           No              Yes              Yes           Yes
Auditor           Yes           No              No               No            Read-only

New hire in the NOC -> assigned "Network operator". When she moves to engineering the role is
swapped, not extended; when she leaves, one account disable removes everything.`,
        note: `Notice separation of duties: the person who changes configs cannot also delete audit logs or users.`,
      },
      {
        title: 'Kerberos in four messages',
        code: `1. Client -> KDC (Authentication Service): "I am alice" (proves identity using her key)
   KDC -> Client: Ticket-Granting Ticket (TGT), valid for hours
2. Client -> KDC (Ticket-Granting Service): "I want to use fileserver", presents the TGT
   KDC -> Client: Service ticket for fileserver
3. Client -> fileserver: presents the service ticket
4. Fileserver verifies the ticket; access is granted. Alice's password never crosses the network.

Failure clue: clock skew of more than about 5 minutes -> "ticket not yet valid" / login failures`,
        note: `Kerberos uses tickets and time stamps, which is why time synchronization (NTP) matters for authentication.`,
      },
      {
        title: 'Conditional access rule combining the ideas',
        code: `Rule: Administrative access to network devices
  WHO       members of role "Network admin"
  WHAT      SSH to management interfaces
  WHERE     only from the management VLAN or the corporate VPN; geofence: block outside country X
  WHEN      Mon-Fri 06:00-20:00; outside hours requires approved emergency access (time-limited, 2 hours)
  HOW       MFA required; device must be compliant (patched, encrypted)
  AUDIT     every session logged; commands logged via TACACS+ accounting`,
        note: `Strong access control combines identity, role, location, time, device state, and logging.`,
      },
      {
        title: 'Choosing between RADIUS and TACACS+',
        code: `                          RADIUS                         TACACS+
Transport / ports         UDP 1812 (auth), 1813 (acct)   TCP 49
Encryption                Password only                  Entire payload
AAA separation            Auth and authz combined        Separate authentication, authorization, accounting
Typical use               Network access (Wi-Fi, VPN, 802.1X)  Device administration (command authorization)
Per-command authorization Limited                        Yes`,
      },
    ],
    table: {
      label: 'Table comparing access control models',
      head: ['Model', 'Who decides', 'Typical use'],
      rows: [
        ['DAC (discretionary)', 'Resource owner', 'File shares, general business use'],
        ['MAC (mandatory)', 'Central authority with labels', 'High-security and government systems'],
        ['RBAC (role-based)', 'Roles assigned by administrators', 'Most enterprises and network devices'],
        ['ABAC (attribute-based)', 'Policy using user, device, and context attributes', 'Zero trust and conditional access'],
      ],
      caption: 'RBAC is the one the exam names most often.',
    },
    example: `A helpdesk technician who needs to reset user passwords is given the "Helpdesk" role instead of full domain admin rights. When a contractor needs temporary switch access, the team grants a time-limited role that expires after two hours and logs every command through TACACS+. Later, a login from an unexpected country is blocked by a geofencing rule and triggers an alert.`,
    tips: [
      `Grant roles, not individual permissions, and review role membership regularly.`,
      `MFA means different factor types; a password plus a security question is not true MFA.`,
      `Disable leavers' accounts immediately; stale accounts are a common breach path.`,
    ],
    exam: `Know AAA, the factors of authentication, least privilege, RBAC versus DAC and MAC, geofencing, time-based access, SSO with SAML, RADIUS versus TACACS+, LDAP and LDAPS ports, and that Kerberos uses tickets and requires time synchronization.`,
    mistakes: [
      `Giving everyone administrator rights "to avoid tickets".`,
      `Skipping access reviews so permissions pile up as people change jobs.`,
      `Confusing authentication (identity) with authorization (permissions).`,
    ],
    terms: [
      { term: 'Least privilege', def: `Giving users and systems only the access needed for their tasks.` },
      { term: 'RBAC', def: `Role-based access control: permissions assigned to roles, roles assigned to users.` },
      { term: 'Geofencing', def: `Allowing or denying access based on geographic location.` },
      { term: 'SSO / SAML', def: `Single sign-on across applications using SAML assertions from an identity provider.` },
      { term: 'TACACS+', def: `Device administration AAA protocol (TCP 49) with per-command authorization.` },
      { term: 'Kerberos', def: `Ticket-based authentication using a KDC; sensitive to clock skew.` },
    ],
    checks: [
      {
        prompt: `Permissions are assigned to groups such as "Helpdesk" and "Network admin", and users receive the group that matches their job. What is this model?`,
        options: [`Role-based access control (RBAC)`, `Mandatory access control`, `Discretionary access control`, `Geofencing`],
        correct: 0,
        explanation: `RBAC attaches permissions to roles and assigns roles to users.`,
      },
      {
        prompt: `A policy blocks administrative logins from outside the company's country. What is this an example of?`,
        options: [`Geofencing`, `Least privilege`, `Port security`, `Split tunneling`],
        correct: 0,
        explanation: `Geofencing allows or denies access based on location.`,
      },
      {
        prompt: `Which protocol separates authentication, authorization, and accounting and supports per-command authorization on network devices?`,
        options: [`TACACS+`, `RADIUS`, `SNMP`, `LLDP`],
        correct: 0,
        explanation: `TACACS+ (TCP 49) separates the AAA functions and can authorize individual commands.`,
      },
    ],
    mini: {
      prompt: `A vendor technician needs access to a router for one maintenance window next Tuesday.`,
      task: `Describe an access design using least privilege and time-based access.`,
    },
    recap: `Authentication proves identity, authorization grants permissions, and accounting records activity. Use least privilege and RBAC, add geofencing and time-based limits, use SSO with MFA, choose RADIUS or TACACS+ appropriately, rely on Kerberos tickets with synchronized time, and manage the joiner-mover-leaver lifecycle.`,
    classroom: `"Kaunti lang ang access na kailangan, para sa tamang tao, sa tamang lugar, sa tamang oras — at laging may log."`,
  });

  NetReady.LESSONS['12-15'] = NetReady.lesson(12, {
    id: '12-15',
    slug: 'network-attacks-in-depth-how-they-work-and-how-to-stop-them',
    title: 'Network Attacks in Depth: How They Work and How to Stop Them',
    minutes: 18,
    outcomes: [
      `Explain DoS, DDoS, SYN flood, and amplification attacks.`,
      `Describe Layer 2 attacks: ARP poisoning, MAC flooding, VLAN hopping, and rogue DHCP.`,
      `Describe DNS, on-path, and wireless attacks.`,
      `Match each attack to its best mitigation.`,
    ],
    why: `Security questions on the exam usually give you a symptom and ask for the attack, or give an attack and ask for the control. If you understand how each attack works, the mitigation becomes obvious.`,
    simple: `Most network attacks abuse trust. ARP, DHCP, and DNS all believe whatever they are told, so an attacker lies to them. Flood attacks overwhelm a resource until it fails. Wireless attacks trick a client into joining a fake network. Each defense is a control that checks or limits the thing being abused.`,
    taglish: `Karamihan ng atake ay nagsasamantala sa tiwala. Naniniwala ang ARP, DHCP, at DNS sa anumang sinabi sa kanila, kaya nagsisinungaling ang attacker. Ang flood ay nagpapabagsak sa resource. Ang bawat depensa ay kontrol na nagsusuri o naglilimita sa inaabuso.`,
    analogy: {
      title: 'Pekeng karatula at siksikan sa pinto',
      text: `Ang ARP poisoning ay pagpapalit ng karatula ng kalye para mapunta sa iyo ang mga sasakyan. Ang DDoS ay libu-libong tao na sabay-sabay na pumasok sa maliit na tindahan para wala nang makapasok. Ang evil twin ay pekeng tindahan na kamukha ng totoo.`,
    },
    steps: [
      `DoS and DDoS: a denial-of-service attack exhausts bandwidth, connection tables, or CPU. DDoS comes from many compromised machines (a botnet). Mitigation: rate limiting, upstream scrubbing or a CDN/DDoS protection service, anycast, SYN cookies, and firewall/IPS rules.`,
      `SYN flood: the attacker sends many TCP SYN packets, often with spoofed source addresses, and never completes the handshake. The server keeps half-open connections until its table is full. Mitigation: SYN cookies, shorter timeouts, larger backlog, and rate limiting.`,
      `Reflection and amplification: the attacker spoofs the victim's source IP and sends small requests to open servers (DNS, NTP, memcached, SSDP) that send large replies to the victim. Mitigation: disable open resolvers and unneeded services, rate-limit responses, and apply BCP 38 ingress filtering to block spoofed sources.`,
      `ARP poisoning (spoofing): the attacker sends false ARP replies so that the gateway's IP maps to the attacker's MAC, creating an on-path (man-in-the-middle) position. Mitigation: Dynamic ARP Inspection (DAI) using the DHCP snooping table, static ARP for critical hosts, port security.`,
      `MAC flooding: the attacker sends thousands of frames with fake source MACs to fill the switch's CAM table so it floods traffic out of all ports like a hub. Mitigation: port security with a maximum MAC count and violation action.`,
      `VLAN hopping: switch spoofing negotiates a trunk using DTP, giving access to all VLANs. Double tagging puts two 802.1Q tags on a frame, where the first (native VLAN) tag is stripped by the first switch and the inner tag delivers it to another VLAN (one-way). Mitigation: disable DTP and set access ports to static access mode, do not use VLAN 1 as the native VLAN, put a unique unused VLAN as native, shut down unused ports.`,
      `Rogue DHCP and DHCP starvation: a fake DHCP server hands out the attacker's gateway or DNS. Starvation exhausts the legitimate pool. Mitigation: DHCP snooping (trusted ports only for real servers) and port security.`,
      `DNS attacks: cache poisoning inserts false records into a resolver, and pharming redirects users to a fake site by changing DNS or the hosts file. Mitigation: DNSSEC, patched resolvers with randomized source ports, and DNS filtering. DNS tunneling hides data in DNS queries; detect it with unusual query volume or length.`,
      `Wireless attacks: an evil twin is a rogue AP copying a legitimate SSID; deauthentication frames force clients off; war driving looks for networks; Bluejacking sends unsolicited Bluetooth messages and bluesnarfing steals data from Bluetooth devices. Mitigation: WPA3, 802.1X with certificate validation, Protected Management Frames (802.11w), wireless IPS, and disabling Bluetooth discoverability.`,
      `Social engineering and password attacks: phishing, spear phishing, whaling, vishing (voice), smishing (SMS), tailgating, shoulder surfing, and dumpster diving; brute force, dictionary, password spraying, and credential stuffing. Mitigation: training, MFA, lockout and rate limits, badge readers, mantraps, and shredding.`,
    ],
    deepDive: [
      {
        title: 'Double tagging, step by step',
        text: `The attacker sits on an access port in VLAN 1, which is also the trunk's native VLAN. They send a frame with two 802.1Q tags: outer VLAN 1, inner VLAN 20. Switch A sees that the outer tag matches the native VLAN and strips it, because native frames are sent untagged on the trunk. Switch B receives the frame with only the VLAN 20 tag and delivers it to VLAN 20. The attack only works one way (no replies return) and needs the native VLAN to match the attacker's VLAN.`,
        code: `Attacker (VLAN 1) -> [VLAN1][VLAN20][data]
Switch A strips tag 1 (native)  -> [VLAN20][data] over trunk
Switch B forwards into VLAN 20 -> victim

Fix:
interface Gi0/24
  switchport trunk native vlan 999     (unused VLAN)
interface range Gi0/1 - 20
  switchport mode access
  switchport nonegotiate`,
        note: `Two settings stop both VLAN hopping variants: no DTP negotiation, and a native VLAN that no user port belongs to.`,
      },
      {
        title: 'Defending Layer 2 with DHCP snooping and DAI',
        text: `DHCP snooping builds a table of IP to MAC to port bindings from legitimate DHCP replies, and drops replies from untrusted ports. Dynamic ARP Inspection then checks every ARP packet against that table and drops lies. Together they stop rogue DHCP servers and ARP poisoning.`,
        code: `ip dhcp snooping
ip dhcp snooping vlan 10
interface Gi0/24                  (uplink to the real DHCP server)
  ip dhcp snooping trust
ip arp inspection vlan 10
show ip dhcp snooping binding`,
      },
    ],
    table: {
      label: 'Attacks matched to their best mitigation',
      head: ['Attack', 'How it works', 'Best mitigation'],
      rows: [
        ['SYN flood', 'Half-open TCP connections fill the table', 'SYN cookies, rate limiting'],
        ['DNS or NTP amplification', 'Spoofed small request, large reply to victim', 'Close open resolvers, BCP 38'],
        ['ARP poisoning', 'Fake ARP replies redirect traffic', 'Dynamic ARP Inspection'],
        ['MAC flooding', 'Fills the CAM table', 'Port security'],
        ['VLAN hopping', 'DTP spoofing or double tagging', 'Disable DTP, change native VLAN'],
        ['Rogue DHCP', 'Fake server gives bad gateway or DNS', 'DHCP snooping'],
        ['DNS poisoning', 'False records in a cache', 'DNSSEC'],
        ['Evil twin', 'Fake AP with the same SSID', 'WPA3, 802.1X, wireless IPS'],
      ],
      caption: 'Learn the pair: attack on the left, control on the right.',
    },
    example: `Users at a coffee shop connect to a free Wi-Fi network named like the shop's, and their banking sessions fail certificate checks. The "network" is an evil twin run from a laptop. The shop's real fix is WPA3 or a captive portal with verified certificates, plus user awareness to heed certificate warnings.`,
    tips: [
      `Symptom "random MACs, switch behaves like a hub" equals MAC flooding. Symptom "gateway MAC changed" equals ARP poisoning.`,
      `Double tagging works one way only and needs the native VLAN to match the attacker's.`,
      `Rate limiting does not stop a large DDoS by itself. Upstream scrubbing does.`,
    ],
    exam: `Match symptoms to attacks and attacks to controls: DAI for ARP poisoning, DHCP snooping for rogue DHCP, port security for MAC flooding, native VLAN and DTP changes for VLAN hopping, SYN cookies for SYN floods, DNSSEC for DNS poisoning.`,
    mistakes: [
      `Leaving unused ports enabled in the default VLAN.`,
      `Using VLAN 1 as the native VLAN on trunks.`,
      `Marking user ports as trusted for DHCP snooping.`,
    ],
    terms: [
      { term: 'SYN flood', def: `DoS attack that leaves many half-open TCP connections.` },
      { term: 'Amplification attack', def: `Reflection attack where a small spoofed request creates a large reply to the victim.` },
      { term: 'ARP poisoning', def: `Sending false ARP replies to redirect traffic through the attacker.` },
      { term: 'VLAN hopping', def: `Reaching a VLAN you should not access, by switch spoofing or double tagging.` },
      { term: 'Evil twin', def: `Rogue access point impersonating a legitimate wireless network.` },
      { term: 'DAI', def: `Dynamic ARP Inspection, a switch feature that validates ARP packets.` },
      { term: 'DHCP snooping', def: `Switch feature that blocks DHCP replies from untrusted ports.` },
    ],
    checks: [
      {
        prompt: `A switch suddenly floods all traffic out of every port, and its MAC table is full of unknown addresses. Which attack is happening and what limits it?`,
        options: [`ARP poisoning, DAI`, `MAC flooding, port security`, `Rogue DHCP, DNSSEC`, `Evil twin, WPA3`],
        correct: 1,
        explanation: `Filling the CAM table with fake MACs is MAC flooding. Port security limits the number of MACs per port.`,
      },
      {
        prompt: `Clients on one VLAN receive a default gateway that belongs to an unknown device. Which control prevents this?`,
        options: [`DHCP snooping`, `Jumbo frames`, `Link aggregation`, `A longer lease`],
        correct: 0,
        explanation: `DHCP snooping drops DHCP offers from ports that are not trusted.`,
      },
      {
        prompt: `An attacker sends frames with two 802.1Q tags to reach another VLAN. Which configuration change best prevents this?`,
        options: [`Use VLAN 1 as the native VLAN`, `Set the native VLAN to an unused VLAN and disable DTP`, `Enable PoE`, `Raise the MTU`],
        correct: 1,
        explanation: `A dedicated unused native VLAN and no trunk negotiation stop double tagging and switch spoofing.`,
      },
    ],
    mini: {
      prompt: `Users report certificate warnings at the same time the default gateway MAC in their ARP tables changes.`,
      task: `Name the attack and two switch features that stop it.`,
    },
    recap: `Flood attacks use SYN cookies, rate limiting, and upstream scrubbing. Layer 2 attacks are stopped by port security, DHCP snooping, DAI, DTP shutdown, and an unused native VLAN. DNS uses DNSSEC, wireless uses WPA3/802.1X, and people are defended with MFA and training.`,
    classroom: `"ARP poisoning: DAI. Rogue DHCP: snooping. MAC flood: port security. VLAN hopping: patayin ang DTP at palitan ang native VLAN."`,
  });

  NetReady.LESSONS['12-16'] = NetReady.lesson(12, {
    id: '12-16',
    slug: 'vulnerability-management-penetration-testing-and-risk',
    title: 'Vulnerability Management, Penetration Testing, and Risk Response',
    minutes: 15,
    outcomes: [
      `Describe the vulnerability management cycle.`,
      `Read CVE and CVSS and explain zero-day.`,
      `Compare a vulnerability scan with a penetration test.`,
      `Choose a risk response: mitigate, transfer, accept, or avoid.`,
    ],
    why: `Security is about finding weaknesses before attackers do. The exam covers vulnerability scanning, patching, penetration testing, risk, and insider threats, and often asks which activity fits a given situation.`,
    simple: `A vulnerability scan is an automated check that lists known weaknesses. A penetration test is a person (with permission) actually trying to break in and prove the impact. Both feed a repeating process: find assets, scan, rank by risk, fix or patch, verify, repeat. For risks you cannot remove, you decide whether to reduce, insure, accept, or avoid them.`,
    taglish: `Ang vulnerability scan ay awtomatikong pagsusuri ng kilalang butas. Ang penetration test ay tao na may pahintulot na sumubok pumasok at magpatunay ng epekto. Paulit-ulit na proseso: hanapin ang assets, i-scan, i-rank, ayusin, i-verify. Sa panganib na hindi maalis, pipili: bawasan, ilipat, tanggapin, o iwasan.`,
    analogy: {
      title: 'Inspeksyon ng bahay at pekeng magnanakaw',
      text: `Ang scan ay inspektor na may listahan ng karaniwang sira. Ang pen test ay inupahang magnanakaw (may kontrata) na talagang susubukang pumasok at sasabihin kung saan siya nakapasok. Ang insurance ay paglilipat ng panganib.`,
    },
    steps: [
      `Vulnerability management cycle: discover assets, scan, prioritize, remediate (patch, reconfigure, or mitigate), verify with a rescan, and report. Without an accurate asset inventory, you cannot know what to scan.`,
      `Scanning types: credentialed scans log in and find missing patches and weak settings with fewer false positives; non-credentialed scans see only what an outsider sees. Internal scans find insider-risk weaknesses; external scans test the perimeter. Tools include Nessus, OpenVAS, and Qualys. Port scanners such as nmap discover open ports and services.`,
      `CVE (Common Vulnerabilities and Exposures) is the public ID for a known flaw (for example CVE-2021-44228). CVSS (Common Vulnerability Scoring System) rates severity from 0 to 10: 0.1 to 3.9 low, 4.0 to 6.9 medium, 7.0 to 8.9 high, 9.0 to 10.0 critical. Severity must be combined with exposure and asset value to set priority.`,
      `Zero-day: a vulnerability unknown to the vendor, with no patch available. Mitigations are defense in depth, segmentation, IPS virtual patching, least privilege, and monitoring. False positives are reports of problems that do not exist; false negatives are real problems the scan missed.`,
      `Patch management: test patches in a lab or pilot group, schedule through change management with a rollback plan, deploy, and verify. Firmware and end-of-life devices count too: unsupported equipment cannot be patched and should be replaced or isolated.`,
      `Penetration testing: authorized simulated attack with a written scope and rules of engagement. Phases: planning, reconnaissance, scanning, exploitation, post-exploitation, and reporting. Types: black box (no knowledge), white box (full knowledge), and gray box (partial). Pen tests prove exploitability; scans only list possibilities.`,
      `Teams: red team attacks, blue team defends, and a purple team shares knowledge between them. A bug bounty pays outside researchers for responsible disclosure.`,
      `Insider threats: employees or contractors who misuse access, accidentally or deliberately. Controls: least privilege, separation of duties, job rotation, mandatory vacations, logging and UEBA, and DLP (data loss prevention) tools that block sensitive data leaving by email, USB, or cloud upload. A honeypot (decoy system) detects attackers and insiders poking around.`,
      `Risk response: risk is likelihood times impact. Mitigate (apply controls), transfer (insurance or outsourcing), accept (documented, within tolerance), or avoid (stop the risky activity). Residual risk is what remains after controls.`,
    ],
    deepDive: [
      {
        title: 'Prioritizing three findings',
        text: `A scan returns three findings. A CVSS 9.8 flaw on a lab server with no internet access, a CVSS 7.5 flaw on the public web server, and a CVSS 5.3 flaw on the domain controller. The 9.8 is critical in score but isolated. The public server is exposed to the internet, so it is probably patched first. The domain controller is valuable and gets a planned patch soon. Context decides priority.`,
        code: `Finding         CVSS  Exposure   Asset value   Priority
Lab server       9.8  none       low           3
Public web       7.5  internet   high          1
Domain ctrl      5.3  internal   very high     2`,
        note: `The exam likes this idea: do not rank only by score.`,
      },
      {
        title: 'Rules of engagement checklist',
        text: `Before any pen test starts, get written authorization. Without it, the same actions are illegal. The agreement defines what is in scope and what is not.`,
        code: `Scope:            10.20.0.0/16, app.example.com (production excluded after 18:00)
Out of scope:     payroll database, third-party hosted services
Allowed methods:  scanning, exploitation, no denial of service, no social engineering
Contacts:         24x7 emergency contact on both sides
Dates:            2026-11-02 to 2026-11-13
Deliverable:      report with findings, evidence, and fixes`,
      },
    ],
    table: {
      label: 'Vulnerability scan versus penetration test',
      head: ['Aspect', 'Vulnerability scan', 'Penetration test'],
      rows: [
        ['Goal', 'List known weaknesses', 'Exploit weaknesses to prove impact'],
        ['Method', 'Automated tool', 'Human skills plus tools'],
        ['Frequency', 'Regular (weekly or monthly)', 'Periodic (yearly or after big changes)'],
        ['Risk to systems', 'Low', 'Higher, needs rules of engagement'],
        ['Output', 'Long list with scores', 'Narrative with proven attack paths'],
      ],
      caption: 'Scans find, pen tests prove.',
    },
    example: `A hospital runs weekly credentialed scans and patches critical findings within 14 days through change control. Once a year, an outside firm performs a gray-box pen test under written rules of engagement. The report shows a weak VPN password policy that no scan flagged, and the hospital adds MFA.`,
    tips: [
      `Scan equals automated and broad. Pen test equals manual, authorized, and proves exploitation.`,
      `Written authorization always comes first.`,
      `Accepting a risk is a documented decision, not ignoring it.`,
    ],
    exam: `Know CVE versus CVSS, zero-day, credentialed versus non-credentialed scans, false positive and false negative, the pen test types (black, white, gray box), red and blue teams, and the four risk responses.`,
    mistakes: [
      `Running a pen test or aggressive scan without written approval.`,
      `Patching production without testing or a rollback plan.`,
      `Ranking only by CVSS score without considering exposure.`,
    ],
    terms: [
      { term: 'CVE', def: `Public identifier for a specific known vulnerability.` },
      { term: 'CVSS', def: `Scoring system from 0 to 10 for vulnerability severity.` },
      { term: 'Zero-day', def: `Vulnerability with no available vendor patch, often already exploited.` },
      { term: 'Penetration test', def: `Authorized simulated attack that exploits weaknesses to show impact.` },
      { term: 'Rules of engagement', def: `Written scope and limits for a security test.` },
      { term: 'DLP', def: `Data loss prevention: tools that stop sensitive data from leaving.` },
      { term: 'Residual risk', def: `Risk remaining after controls are applied.` },
    ],
    commands: [
      { os: 'Linux', cmd: 'nmap -sV 10.20.0.0/24', desc: `Scans a subnet and tries to detect service versions (only on networks you are authorized to test).` },
      { os: 'Linux', cmd: 'nmap -p 1-1024 -sS host', desc: `Runs a SYN scan of the well-known ports on one host.` },
    ],
    checks: [
      {
        prompt: `A vulnerability has no vendor patch and is already being exploited. What is it called?`,
        options: [`A false positive`, `A zero-day`, `Residual risk`, `A honeypot`],
        correct: 1,
        explanation: `A zero-day is unknown to the vendor or unpatched, so defenders rely on layered controls until a fix exists.`,
      },
      {
        prompt: `A company buys cyber insurance to cover ransomware losses. Which risk response is this?`,
        options: [`Avoidance`, `Acceptance`, `Transfer`, `Mitigation`],
        correct: 2,
        explanation: `Insurance transfers the financial impact of the risk to another party.`,
      },
      {
        prompt: `Which activity proves a weakness can actually be exploited and requires written rules of engagement?`,
        options: [`A credentialed vulnerability scan`, `A penetration test`, `A baseline review`, `A syslog review`],
        correct: 1,
        explanation: `A pen test goes beyond listing weaknesses by exploiting them under an authorized scope.`,
      },
    ],
    mini: {
      prompt: `A scan reports a critical flaw on an old switch that the vendor no longer supports and no patch exists.`,
      task: `Which risk responses are available and which would you choose?`,
    },
    recap: `Manage vulnerabilities in a cycle of discover, scan, prioritize, remediate, verify. CVSS scores severity but context sets priority. Scans list, pen tests prove, and both need authorization. Respond to risk by mitigating, transferring, accepting, or avoiding, and control insiders with least privilege and DLP.`,
    classroom: `"Scan ay naghahanap, pen test ay nagpapatunay. Laging may nakasulat na pahintulot. Mitigate, transfer, accept, avoid."`,
  });

  NetReady.LESSONS['12-17'] = NetReady.lesson(12, {
    id: '12-17',
    slug: 'remote-access-vpn-types-jump-hosts-and-out-of-band-management',
    title: 'Remote Access: VPN Types, Jump Hosts, and Out-of-Band Management',
    minutes: 15,
    outcomes: [
      `Compare client-to-site and site-to-site VPNs.`,
      `Explain full tunnel, split tunnel, and clientless VPN.`,
      `Describe SSH, RDP, VNC, and why Telnet is avoided.`,
      `Explain jump boxes and out-of-band management.`,
    ],
    why: `Administrators and employees work remotely, and an exposed management path is one of the most attacked parts of a network. The exam asks you to pick the right remote access method and the secure way to manage devices.`,
    simple: `A VPN creates an encrypted tunnel across an untrusted network. Client-to-site connects one user to the office; site-to-site connects two offices. You can send all traffic through the tunnel (full) or only office traffic (split). For admins, use SSH instead of Telnet, reach servers through a hardened jump box, and keep a separate out-of-band path that still works when the main network is down.`,
    taglish: `Ang VPN ay naka-encrypt na tunnel sa hindi ligtas na network. Ang client-to-site ay isang user papunta sa opisina; ang site-to-site ay dalawang opisina. Full tunnel ang lahat ng traffic, split tunnel ang opisina lang. Para sa admin: SSH, hindi Telnet; dumaan sa jump box; at may out-of-band na daan kapag patay ang main network.`,
    analogy: {
      title: 'Lagusan, guwardiya sa gate, at pintuan sa likod',
      text: `Ang VPN ay saradong lagusan sa pagitan ng dalawang gusali. Ang jump box ay guwardiya sa gate: lahat ng admin ay dumadaan doon at naka-log. Ang out-of-band ay pintuan sa likod na gumagana kahit nakasara ang harapan.`,
    },
    steps: [
      `Client-to-site (remote access) VPN: one user's laptop connects to a VPN gateway at the office. Site-to-site VPN: two networks are joined permanently by gateways, usually with IPsec, and users are unaware of it. Always-on VPN connects automatically before login.`,
      `Full tunnel sends all traffic through the VPN so the company can inspect it, but it uses more bandwidth. Split tunnel sends only corporate traffic through the VPN and the rest directly to the internet. It saves bandwidth but bypasses corporate security controls.`,
      `IPsec VPN uses ESP (protocol 50) and IKE (UDP 500, plus UDP 4500 for NAT traversal), works at Layer 3, and usually requires a client. SSL/TLS VPN uses TCP 443 and can be clientless (reached by a browser portal, giving access to specific web apps) or full-tunnel with a client. DTLS, WireGuard, and OpenVPN are other options.`,
      `Remote administration protocols: SSH (TCP 22) is encrypted and replaces Telnet (TCP 23, cleartext) and rlogin. RDP (TCP 3389) gives a Windows graphical session. VNC (TCP 5900) is a cross-platform remote screen. Secure them with MFA and network level authentication, and never expose RDP directly to the internet.`,
      `SSH good practice: key-based authentication, disable password login and root login, use non-default ports only as a minor measure, restrict source addresses, and use SCP or SFTP (also on port 22) for file transfer.`,
      `Jump box (jump host, bastion host): a hardened, monitored server placed between the user and the protected network. Admins connect to the jump box first and then to internal devices. This gives one place to apply MFA, restrict access, and record sessions.`,
      `Out-of-band (OOB) management: a separate path to manage devices that does not depend on the production network, such as a console server with serial ports on a dedicated management network or a cellular modem. Console cable: RJ-45 to serial, typically 9600 baud, 8 data bits, no parity, 1 stop bit (8N1). In-band management uses the same network that it manages, such as SSH over the LAN.`,
      `Other methods: VDI and virtual desktop (the desktop runs in the data center), API access with tokens, and zero trust network access (ZTNA), which grants per-application access after verifying identity and device health instead of putting the user on the whole network.`,
      `Authentication: use MFA for all remote access, RADIUS or TACACS+ for centralized authentication of network device logins, and logging of every administrative session.`,
    ],
    deepDive: [
      {
        title: 'Comparing split and full tunnel',
        text: `A remote worker opens a video call and the file server at the same time. With full tunnel, both flows go to the office and back out, using the office internet link twice. With split tunnel, only the file server traffic uses the VPN, and the video call goes direct. Split tunnel has better performance, but a malware infection on the laptop could use the open internet path to reach the corporate network through the VPN.`,
        code: `Full tunnel:   0.0.0.0/0          -> VPN
Split tunnel:  10.0.0.0/8, 172.16.0.0/12 -> VPN
               everything else          -> local internet`,
        note: `Security policy often forces full tunnel for high-risk roles and allows split tunnel for approved cloud apps.`,
      },
      {
        title: 'Reaching a switch through a jump box',
        text: `The switches accept SSH only from the jump box address. Admins authenticate to the jump box with MFA, then hop to the switch. Every session is recorded centrally. If a laptop is stolen, the attacker cannot reach the switches directly.`,
        code: `ssh -J admin@jump.example.com admin@sw-core-01
(connects first to the jump box, then forwards to the switch)

Switch ACL:
access-list 10 permit host 10.0.99.5     (jump box)
line vty 0 4
  access-class 10 in
  transport input ssh`,
      },
    ],
    table: {
      label: 'Remote access methods compared',
      head: ['Method', 'Port or protocol', 'Notes'],
      rows: [
        ['SSH', 'TCP 22', 'Encrypted CLI, SFTP, and SCP; replaces Telnet'],
        ['Telnet', 'TCP 23', 'Cleartext, do not use'],
        ['RDP', 'TCP 3389', 'Windows desktop; never expose directly'],
        ['VNC', 'TCP 5900', 'Cross-platform screen sharing'],
        ['SSL/TLS VPN', 'TCP 443', 'Browser (clientless) or client'],
        ['IPsec VPN', 'UDP 500 / 4500, ESP 50', 'Site-to-site and client'],
        ['Console / OOB', 'Serial 9600 8N1', 'Works when the network is down'],
      ],
      caption: 'Use encrypted, authenticated, logged paths, with a second path for emergencies.',
    },
    example: `A retail chain manages 300 store routers through a jump box with MFA and session recording. Each router also has a cellular out-of-band console. When a bad config knocked a store offline, the engineer used the cellular console to roll back without driving to the store.`,
    tips: [
      `Clientless VPN equals a browser portal over TLS 443.`,
      `Out-of-band is the answer when the question says "the network is down and I still need to manage the device".`,
      `Split tunnel is a performance choice that weakens security inspection.`,
    ],
    exam: `Know client-to-site versus site-to-site, split versus full tunnel, clientless SSL VPN, SSH (22) versus Telnet (23), RDP 3389, VNC 5900, jump box purpose, and out-of-band management.`,
    mistakes: [
      `Exposing RDP or Telnet directly to the internet.`,
      `Using only passwords for VPN and admin accounts.`,
      `Managing devices only in-band, so a misconfiguration locks everyone out.`,
    ],
    terms: [
      { term: 'Client-to-site VPN', def: `VPN that connects one remote user to the corporate network.` },
      { term: 'Site-to-site VPN', def: `VPN that permanently connects two networks.` },
      { term: 'Split tunnel', def: `Only selected traffic uses the VPN; the rest goes directly to the internet.` },
      { term: 'Clientless VPN', def: `Browser-based SSL/TLS VPN that needs no installed client.` },
      { term: 'Jump box', def: `Hardened host used as the single entry point for administration.` },
      { term: 'Out-of-band management', def: `Management path separate from production traffic.` },
      { term: 'ZTNA', def: `Zero trust network access: per-application access after verifying user and device.` },
    ],
    commands: [
      { os: 'Linux', cmd: 'ssh -i ~/.ssh/id_ed25519 admin@10.0.0.1', desc: `Connects using key-based SSH authentication.` },
      { os: 'Linux', cmd: 'ssh -J jump@jumpbox admin@10.0.0.1', desc: `Connects to an internal host through a jump box.` },
      { os: 'Windows', cmd: 'mstsc /v:server01', desc: `Opens a Remote Desktop session to a server.` },
      { os: 'Linux', cmd: 'screen /dev/ttyUSB0 9600', desc: `Opens a console session over a USB serial cable at 9600 baud.` },
    ],
    checks: [
      {
        prompt: `A technician needs to manage a core switch even when its production uplinks are down. What should be used?`,
        options: [`In-band SSH`, `Out-of-band management through a console server`, `Split tunnel VPN`, `RDP`],
        correct: 1,
        explanation: `Out-of-band management uses a separate path, such as a serial console, that does not rely on the production network.`,
      },
      {
        prompt: `Which remote access method is encrypted and replaces Telnet?`,
        options: [`SSH`, `VNC`, `TFTP`, `SNMPv1`],
        correct: 0,
        explanation: `SSH on TCP 22 provides encrypted terminal access, while Telnet sends everything in cleartext.`,
      },
      {
        prompt: `Which VPN design sends only traffic for the corporate subnets through the tunnel?`,
        options: [`Full tunnel`, `Split tunnel`, `Site-to-site`, `GRE`],
        correct: 1,
        explanation: `Split tunneling sends selected destinations through the VPN and the rest directly out the local connection.`,
      },
    ],
    mini: {
      prompt: `An RDP server is open to the internet and shows thousands of failed logins.`,
      task: `Describe how to secure it using a VPN, a jump box, and MFA.`,
    },
    recap: `Use client-to-site or site-to-site VPNs, choose full or split tunnel by policy, and prefer SSH over Telnet. Administer through a jump box with MFA and logging, and keep out-of-band access for outages. Never expose RDP or Telnet directly.`,
    classroom: `"SSH hindi Telnet. Dumaan sa jump box. May out-of-band para kapag patay ang network, may pasukan ka pa rin."`,
  });

  NetReady.LESSONS['12-18'] = NetReady.lesson(12, {
    id: '12-18',
    slug: 'identity-federation-sso-saml-oauth-ldap-and-802-1x-eap',
    title: 'Identity Federation: SSO, SAML, OAuth, LDAP, and 802.1X EAP Methods',
    minutes: 16,
    outcomes: [
      `Explain directory services and LDAP.`,
      `Compare SSO, federation, SAML, OAuth, and OpenID Connect.`,
      `Describe the 802.1X roles and the common EAP methods.`,
      `Match each identity technology to its purpose.`,
    ],
    why: `Modern networks authenticate users against central directories and cloud identity providers, and wired and wireless access is controlled by 802.1X. The exam expects you to know the acronyms and what each one does.`,
    simple: `Instead of every system keeping its own passwords, a central directory (such as Active Directory) stores identities. Single sign-on lets you log in once and use many apps. Federation extends that trust to other organizations and cloud services using standards such as SAML. 802.1X applies the same central login to a network port or Wi-Fi: the switch or AP passes your credentials to a RADIUS server before letting you on.`,
    taglish: `Sa halip na bawat sistema ay may sariling password, may sentral na directory (tulad ng Active Directory). Ang SSO ay isang login para sa maraming app. Ang federation ay nagpapalawak ng tiwala sa ibang organisasyon at cloud gamit ang SAML. Ang 802.1X ay ganoon din para sa network port o Wi-Fi: ipinapasa ng switch o AP ang credentials sa RADIUS bago payagan.`,
    analogy: {
      title: 'Pasaporte at visa',
      text: `Ang directory ay tanggapan ng pagkakakilanlan ng iyong bansa. Ang SSO ay isang pasaporte na tinatanggap sa buong gusali. Ang federation ay visa agreement: pinagkakatiwalaan ng ibang bansa ang pasaporte mo. Ang 802.1X ay guwardiya sa pinto na tumatawag sa tanggapan bago ka papasukin.`,
    },
    steps: [
      `Directory services store users, groups, computers, and policies in a hierarchy. Microsoft Active Directory (AD) is the common one, and the open standard protocol to query a directory is LDAP (Lightweight Directory Access Protocol): TCP/UDP 389 and LDAPS (LDAP over TLS) on TCP 636. Entries are identified by a distinguished name such as CN=Maria,OU=Sales,DC=corp,DC=example,DC=com. Always use LDAPS or StartTLS so credentials are not sent in cleartext.`,
      `Kerberos is the ticket-based authentication protocol used by AD (UDP/TCP 88). RADIUS (UDP 1812 and 1813) and TACACS+ (TCP 49) are AAA protocols for network access and device administration, as covered earlier.`,
      `SSO (single sign-on): authenticate once to an identity provider (IdP) and access many applications without further prompts. Benefits: fewer passwords, better user experience, and central control and revocation. Risk: one compromised account opens many doors, so combine SSO with MFA.`,
      `Federation: trust between separate organizations or domains so that an identity from one can be used at another. The identity provider (IdP) authenticates the user, and the service provider (SP, the application) trusts the IdP's assertion. Examples: signing in to a SaaS app with your corporate account.`,
      `SAML (Security Assertion Markup Language): XML-based standard for exchanging authentication and authorization assertions between an IdP and an SP, mostly for web SSO in enterprises. The user is redirected to the IdP, authenticates, and the IdP returns a signed assertion to the SP. SAML is about authentication (who you are) and attributes.`,
      `OAuth 2.0: an authorization framework that lets an app access resources on your behalf using tokens without receiving your password (for example allowing a calendar app to read your contacts). OpenID Connect (OIDC) adds an identity layer on top of OAuth 2.0 for authentication, using JSON web tokens (JWT). Remember: OAuth is authorization, OIDC and SAML are authentication.`,
      `802.1X port-based network access control has three roles: the supplicant (client device software), the authenticator (the switch or AP that blocks traffic until authentication succeeds), and the authentication server (RADIUS). Until authenticated, only EAPOL (EAP over LAN) frames are allowed. After success, the switch can place the port in a VLAN chosen by RADIUS (dynamic VLAN assignment).`,
      `EAP (Extensible Authentication Protocol) methods: EAP-TLS uses client and server certificates (strongest, needs a PKI); PEAP wraps an inner login (such as MSCHAPv2 username and password) inside a TLS tunnel built with a server certificate; EAP-TTLS is similar to PEAP; EAP-FAST is Cisco's tunneled method using protected access credentials (PAC); LEAP is Cisco's old method and is insecure. Use EAP-TLS where possible; validate the server certificate on clients to prevent evil twin attacks.`,
      `Related controls: MAC authentication bypass (MAB) for devices that cannot run a supplicant (printers), network access control (NAC) posture checks for patch level and antivirus, guest portals, and provisioning protocols for devices (certificates by SCEP or an MDM). Conditional access can require MFA based on risk, location, and device compliance.`,
    ],
    deepDive: [
      {
        title: 'A SAML login, step by step',
        text: `A user opens the HR application (the SP). The SP sees no session and redirects the browser to the corporate IdP with an authentication request. The IdP authenticates the user (with MFA), then returns a signed SAML assertion through the browser to the SP. The SP checks the signature and the audience, then creates a session. The application never sees the user's password.`,
        code: `1. Browser -> SP (hr.example.com)         "I want the app"
2. SP -> Browser: redirect to IdP        (AuthnRequest)
3. Browser -> IdP (login.corp.example)   user logs in + MFA
4. IdP -> Browser: signed SAML assertion
5. Browser -> SP: assertion              SP validates signature and grants access`,
        note: `The trust is set up beforehand by exchanging metadata and certificates between the IdP and the SP.`,
      },
      {
        title: '802.1X on a switch port',
        text: `The port is set to require 802.1X. A laptop with a supplicant sends EAPOL start, the switch relays the EAP exchange to RADIUS over UDP 1812, and RADIUS validates the certificate or credentials and replies Access-Accept with VLAN 10. A printer without a supplicant fails 802.1X and falls back to MAB.`,
        code: `aaa new-model
radius server RAD1
  address ipv4 10.9.9.10 auth-port 1812 acct-port 1813
  key SharedSecret
dot1x system-auth-control
interface Gi1/0/12
  switchport mode access
  authentication port-control auto
  dot1x pae authenticator
  mab`,
      },
    ],
    table: {
      label: 'Identity technologies compared',
      head: ['Technology', 'Purpose', 'Remember'],
      rows: [
        ['LDAP / LDAPS', 'Query a directory', 'TCP 389; secure 636'],
        ['Kerberos', 'Ticket-based authentication in AD', 'Port 88, needs time sync'],
        ['SAML', 'Web SSO between IdP and SP', 'XML assertions'],
        ['OAuth 2.0', 'Delegated authorization with tokens', 'Authorization, not authentication'],
        ['OpenID Connect', 'Authentication layer on OAuth', 'JSON web tokens'],
        ['802.1X', 'Port-based network access control', 'Supplicant, authenticator, RADIUS'],
        ['EAP-TLS', 'Mutual certificate authentication', 'Strongest EAP method'],
        ['PEAP', 'Password inside a TLS tunnel', 'Server certificate only'],
      ],
      caption: 'Directory stores identity; protocols prove and carry it.',
    },
    example: `A company signs employees in to dozens of cloud apps using SAML SSO with MFA. Laptops join the corporate Wi-Fi with EAP-TLS certificates, and RADIUS places them in the staff VLAN. Printers use MAC authentication bypass into a locked-down printer VLAN.`,
    tips: [
      `OAuth equals authorization; SAML and OIDC equal authentication.`,
      `Supplicant (client), authenticator (switch or AP), authentication server (RADIUS).`,
      `EAP-TLS needs certificates on both sides; PEAP needs a certificate only on the server.`,
    ],
    exam: `Know LDAP ports, Kerberos, SSO and federation, SAML versus OAuth, the 802.1X roles, and the differences between EAP-TLS, PEAP, and EAP-FAST.`,
    mistakes: [
      `Using plain LDAP on port 389 across the network for sign-ins.`,
      `Configuring PEAP clients not to validate the server certificate, enabling evil twin attacks.`,
      `Calling OAuth an authentication protocol.`,
    ],
    terms: [
      { term: 'LDAP', def: `Protocol for querying and modifying directory services.` },
      { term: 'SSO', def: `Single sign-on: authenticate once to access multiple applications.` },
      { term: 'Federation', def: `Trust relationship that lets identities from one domain be used in another.` },
      { term: 'SAML', def: `XML standard for exchanging authentication assertions between an IdP and an SP.` },
      { term: 'OAuth', def: `Framework for delegated authorization using access tokens.` },
      { term: 'Supplicant', def: `Client software that authenticates to the network in 802.1X.` },
      { term: 'EAP-TLS', def: `EAP method using certificates on both client and server.` },
    ],
    commands: [
      { os: 'Cisco IOS', cmd: 'show authentication sessions', desc: `Lists ports, the authenticated user or MAC, and the method (dot1x or mab).` },
      { os: 'Cisco IOS', cmd: 'show dot1x all', desc: `Displays 802.1X configuration and status for the switch.` },
      { os: 'Windows', cmd: 'klist', desc: `Shows the Kerberos tickets held by the current user.` },
    ],
    checks: [
      {
        prompt: `In 802.1X, which component is the switch or access point that blocks traffic until authentication succeeds?`,
        options: [`Supplicant`, `Authenticator`, `Authentication server`, `Certificate authority`],
        correct: 1,
        explanation: `The authenticator controls the port and relays EAP messages to the RADIUS authentication server.`,
      },
      {
        prompt: `Which technology lets a third-party app access your photos without receiving your password by using an access token?`,
        options: [`LDAP`, `OAuth`, `RADIUS`, `Kerberos`],
        correct: 1,
        explanation: `OAuth is a delegated authorization framework that issues tokens instead of sharing passwords.`,
      },
      {
        prompt: `Which EAP method requires certificates on both the client and the server?`,
        options: [`PEAP`, `EAP-TLS`, `LEAP`, `EAP-MD5`],
        correct: 1,
        explanation: `EAP-TLS provides mutual authentication with client and server certificates.`,
      },
    ],
    mini: {
      prompt: `Wi-Fi laptops using PEAP connect to a rogue AP with the same SSID and give away their credentials.`,
      task: `Explain what setting was missing and what stronger method you would move to.`,
    },
    recap: `Directories hold identities and LDAP queries them (use LDAPS). SSO and federation share one login across apps and organizations using SAML or OIDC, while OAuth delegates authorization. 802.1X uses a supplicant, authenticator, and RADIUS server, and EAP-TLS is the strongest EAP method.`,
    classroom: `"OAuth: pahintulot. SAML at OIDC: pagkakakilanlan. 802.1X: supplicant, authenticator, RADIUS. EAP-TLS ang pinakamatibay."`,
  });

  NetReady.LESSONS['12-19'] = NetReady.lesson(12, {
    id: '12-19',
    slug: 'incident-response-digital-forensics-and-security-monitoring',
    title: 'Incident Response, Digital Forensics, and Security Monitoring',
    minutes: 15,
    outcomes: [
      `List the phases of incident response.`,
      `Explain evidence handling: order of volatility and chain of custody.`,
      `Describe SIEM, IDS/IPS, and log sources.`,
      `Apply containment actions such as isolation and DNS sinkholes.`,
    ],
    why: `When something goes wrong, what you do in the first minutes matters. The exam tests the order of the response steps, how to preserve evidence, and the role of monitoring tools. It is also the practical side of the security domain.`,
    simple: `Incident response is a planned process: prepare, detect, contain, remove the cause, recover, and learn. Forensics is collecting evidence so it can be trusted later, which means collecting the most fragile data first and recording who handled it. Monitoring tools such as a SIEM collect logs from everywhere and alert you when patterns look wrong.`,
    taglish: `Ang incident response ay may plano: maghanda, tuklasin, i-contain, alisin ang sanhi, mag-recover, at matuto. Ang forensics ay pagkolekta ng ebidensya na mapagkakatiwalaan, kaya unahin ang pinakamabilis mawala at itala kung sino ang humawak. Ang SIEM ay nangongolekta ng logs mula sa lahat at nagbibigay-alerto kapag kahina-hinala.`,
    analogy: {
      title: 'Sunog sa gusali',
      text: `May plano ng paglikas (preparation). Tumutunog ang alarma (detection). Isinasara ang pinto para hindi kumalat ang apoy (containment). Pinapatay ang apoy at inaalis ang sanhi (eradication). Binabalik ang operasyon (recovery). Sinusuri kung ano ang natutunan (lessons learned). Ang imbestigador ay hindi gagalaw ng ebidensya nang walang tala.`,
    },
    steps: [
      `Incident response lifecycle (NIST): preparation (policy, plan, team, tools, training), detection and analysis (identify and confirm the incident, determine scope and severity), containment, eradication, and recovery (together), and post-incident activity (lessons learned, report, improvements). A common six-step version: preparation, identification, containment, eradication, recovery, lessons learned.`,
      `Preparation includes an incident response plan with roles and contact lists, a communication plan, a defined severity scale, playbooks for common events (malware, DDoS, phishing, data loss), logging and time synchronization (NTP) set up before it is needed, and regular tabletop exercises.`,
      `Containment: stop the spread while keeping evidence. Short-term options: disconnect or isolate the device (VLAN quarantine, disabling the switch port or Wi-Fi), block IPs and domains at the firewall, disable accounts, and use a DNS sinkhole that returns a harmless address for malicious domains. Long-term containment may include rebuilding systems in a clean segment. Do not power off a compromised machine before collecting volatile data unless required.`,
      `Eradication removes the cause: delete malware, close the vulnerability, patch, reset credentials, and remove persistence. Recovery restores systems from known-good backups, validates them, monitors closely for reinfection, and returns to production in stages.`,
      `Order of volatility (collect the most volatile first): CPU registers and cache, then RAM and running processes and network connections, then temporary files and swap, then disk, then remote logs and monitoring data, then archival media and backups. Take a forensic image with a write blocker and hash it (SHA-256) so you can prove it did not change; work on copies.`,
      `Chain of custody: a documented record of who collected, handled, transferred, and stored each piece of evidence, with date, time, and purpose. A break in the chain can make evidence inadmissible. Label and seal evidence, store it securely, and keep logs of every access. Legal hold means preserving relevant data when litigation is expected.`,
      `Monitoring sources: firewall, IDS/IPS, router and switch logs, authentication logs (RADIUS, AD), DNS and DHCP logs, NetFlow and packet captures, endpoint (EDR) alerts, and cloud audit logs. Correct timestamps matter, so synchronize every device with NTP and use one time zone (usually UTC).`,
      `SIEM (security information and event management): collects and normalizes logs from many sources, correlates events (for example 50 failed logins then a success from a new country), raises alerts, and keeps searchable history for compliance. SOAR adds automated response playbooks. IDS detects and alerts; IPS sits inline and blocks. Honeypots and honeytokens detect attackers touching decoy resources. Threat intelligence feeds supply known bad IPs and domains.`,
      `Reporting and lessons learned: hold a review within days, document timeline, root cause, impact, and what worked or did not, update the plan, controls, and training, and notify the required parties (management, legal, regulators, customers) according to policy and law. Metrics include time to detect and time to contain.`,
    ],
    deepDive: [
      {
        title: 'A ransomware outbreak on a file server',
        text: `At 09:12 the SIEM alerts on thousands of file renames from one workstation and the file server. Detection and analysis confirm ransomware and show it is spreading by SMB. The responders isolate the infected workstation by disabling its switch port, block SMB between user VLANs, and snapshot the memory of the server for analysis before changing anything. They find the entry point (a phishing attachment), remove the malware, reset credentials, restore the files from last night's offline backup, and monitor for 30 days. The post-incident review adds email attachment filtering and removes admin rights.`,
        code: `09:12  Detect     SIEM rule: mass file rename
09:20  Contain    Disable Gi1/0/14; ACL deny SMB between VLANs
09:35  Preserve   RAM capture + disk image, hash SHA-256, log in chain of custody
11:00  Eradicate  Remove malware, patch, reset passwords
13:30  Recover    Restore from offline backup, verify, monitor
Day 5  Lessons    Update filters, remove local admin, tabletop in 90 days`,
        note: `Notice the order: contain before cleanup, and preserve evidence before wiping anything.`,
      },
      {
        title: 'Why time synchronization decides an investigation',
        text: `If the firewall clock is 7 minutes behind the server clock, an investigator cannot tell whether the connection came before or after the login. Correlation in the SIEM fails and the evidence is weaker in court. All devices should use NTP from trusted sources and the same time zone.`,
        code: `Firewall log: 14:03:10 allow 203.0.113.9 -> 10.1.1.5:3389   (clock 7 min slow)
Server log:   14:10:25 Logon success user=admin src=203.0.113.9
Real order is a 15-second gap, not a 7 minute one.
Fix:  ntp server 10.0.0.1  (all devices, UTC)`,
      },
    ],
    table: {
      label: 'Incident response phases and key actions',
      head: ['Phase', 'Goal', 'Example actions'],
      rows: [
        ['Preparation', 'Be ready before it happens', 'Plan, team, tools, NTP, training'],
        ['Detection and analysis', 'Confirm and scope', 'SIEM alerts, log review, triage'],
        ['Containment', 'Stop the spread', 'Isolate host, block IP, sinkhole DNS'],
        ['Eradication', 'Remove the cause', 'Delete malware, patch, reset passwords'],
        ['Recovery', 'Restore normal operations', 'Restore backups, validate, monitor'],
        ['Lessons learned', 'Improve', 'Review, update plan, training'],
      ],
      caption: 'Prepare, detect, contain, eradicate, recover, learn.',
    },
    example: `A SIEM correlates a DNS query for a known malware domain with a workstation's outbound traffic. The analyst isolates the workstation by VLAN quarantine, captures memory, records each step in a chain-of-custody form, and gives the image to the forensics team, who confirm a banking trojan. The domain is added to the DNS sinkhole.`,
    tips: [
      `Contain first, then eradicate. Never wipe a machine before you have preserved the evidence you need.`,
      `Most volatile first: memory before disk.`,
      `Chain of custody means documentation of every person and time.`,
    ],
    exam: `Know the response phases in order, order of volatility, chain of custody and legal hold, what a SIEM does, the difference between IDS and IPS, and containment techniques.`,
    mistakes: [
      `Rebooting or reimaging an infected host before capturing memory and logs.`,
      `Skipping the post-incident review.`,
      `Leaving device clocks unsynchronized, which breaks log correlation.`,
    ],
    terms: [
      { term: 'Containment', def: `Actions that stop an incident from spreading.` },
      { term: 'Order of volatility', def: `Sequence for collecting evidence from most to least short-lived.` },
      { term: 'Chain of custody', def: `Documented history of who handled evidence and when.` },
      { term: 'SIEM', def: `System that collects, correlates, and alerts on logs from many sources.` },
      { term: 'DNS sinkhole', def: `DNS that returns a harmless address for malicious domains to block or detect malware.` },
      { term: 'Legal hold', def: `Requirement to preserve data that may be relevant to litigation.` },
    ],
    commands: [
      { os: 'Linux', cmd: 'sha256sum evidence.img', desc: `Computes a hash to prove an evidence image has not changed.` },
      { os: 'Linux', cmd: 'dd if=/dev/sdb of=evidence.img bs=4M conv=noerror,sync', desc: `Creates a bit-for-bit image of a disk (use a write blocker for real evidence).` },
      { os: 'Cisco IOS', cmd: 'interface Gi1/0/14 / shutdown', desc: `Isolates an infected host by disabling its switch port.` },
    ],
    checks: [
      {
        prompt: `During an incident, a server is confirmed infected and is spreading malware. What should the responder do first?`,
        options: [`Contain it by isolating the server from the network`, `Reimage it immediately`, `Ignore it until the next maintenance window`, `Delete all log files`],
        correct: 0,
        explanation: `Containment stops the spread while preserving evidence, before eradication and recovery.`,
      },
      {
        prompt: `Which evidence should be collected first according to the order of volatility?`,
        options: [`Backup tapes`, `Hard disk image`, `RAM contents and running processes`, `Printed reports`],
        correct: 2,
        explanation: `Memory is the most volatile and is lost when the system powers off, so it is captured first.`,
      },
      {
        prompt: `What does a chain of custody document?`,
        options: [`Who collected, handled, and stored evidence and when`, `The network topology`, `The SLA with the ISP`, `The password policy`],
        correct: 0,
        explanation: `It records every transfer and access so the evidence can be trusted and admitted.`,
      },
    ],
    mini: {
      prompt: `An analyst finds a compromised workstation and wants to wipe it right away to be safe.`,
      task: `Explain why that is a mistake and list the correct order of actions.`,
    },
    recap: `Respond in phases: prepare, detect, contain, eradicate, recover, and learn. Preserve evidence by order of volatility with hashing and chain of custody, synchronize clocks, and use SIEM, IDS/IPS, logs, and sinkholes to detect and contain.`,
    classroom: `"I-contain bago linisin. Memory muna bago disk. Isulat sa chain of custody kung sino ang humawak."`,
  });

}(window.NetReady));
