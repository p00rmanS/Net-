/**
 * content/module-10.js — Module 10: Cloud, Virtualization, and Modern Architecture
 */
(function (NetReady) {
  'use strict';
  NetReady.LESSONS = NetReady.LESSONS || {};

  NetReady.LESSONS['10-1'] = {
    id: '10-1',
    moduleId: 10,
    slug: 'cloud-service-and-deployment-models',
    title: 'Cloud Service and Deployment Models: IaaS, PaaS, SaaS, and More',
    estMinutes: 13,
    outcomes: [
      'Differentiate IaaS, PaaS, and SaaS by what the provider manages versus what the customer manages.',
      'Differentiate public, private, hybrid, and community cloud deployment models.',
      'Identify a real-world example of each service model.',
    ],
    whyItMatters:
      'Cloud computing vocabulary shows up in nearly every modern IT job description — knowing exactly where the "line" is between what you manage and what the provider manages is genuinely practical knowledge.',
    simpleEnglish:
      'Cloud service models describe how much of the technology stack the provider manages for you. IaaS (Infrastructure as a Service) gives you virtual servers, storage, and networking — you manage the operating system and everything above it. PaaS (Platform as a Service) also manages the operating system and runtime, so you just deploy your application code. SaaS (Software as a Service) delivers a complete, ready-to-use application — you just use it. Deployment models describe who owns and shares the infrastructure: public cloud (shared, provider-owned, like AWS or Azure), private cloud (dedicated to one organization), hybrid cloud (a mix of both), and community cloud (shared among a specific group of organizations with common needs).',
    taglish:
      'Ang cloud service models ay naglalarawan kung gaano karaming bahagi ng teknolohiya ang pinamamahalaan ng provider para sa\'yo. Ang IaaS (Infrastructure as a Service) ay nagbibigay ng virtual server, storage, at networking — ikaw na ang bahalang mag-manage ng operating system pataas. Ang PaaS (Platform as a Service) naman pinamamahalaan na rin ang operating system at runtime — ikaw na lang mag-deploy ng application code mo. Ang SaaS (Software as a Service) naman ay kumpletong application na handa nang gamitin — basta ikaw na lang gagamit. Ang deployment models naman naglalarawan kung sino ang may-ari at nagsha-share ng imprastraktura: public cloud (shared, pag-aari ng provider, tulad ng AWS o Azure), private cloud (eksklusibo sa isang organisasyon), hybrid cloud (kombinasyon ng dalawa), at community cloud (shared sa grupo ng mga organisasyon na may parehong pangangailangan).',
    analogy: {
      title: 'Pag-upa ng bahay, kondo, o hotel room',
      text:
        'Isipin mo ang IaaS parang pag-upa ng blangkong lote — ikaw mismo ang magtatayo, mag-aayos, at mag-aalaga ng lahat sa loob. Ang PaaS parang pag-upa ng bahay na may kompletong linya ng tubig at kuryente na — ikaw na lang maglagay ng sarili mong muwebles (application). Ang SaaS naman parang pag-check-in sa isang hotel room — kompleto na ang lahat, tuwalya, sabon, kama — basta gamitin mo na lang. Ang public cloud ay parang pag-book ng hotel room na shared ang gusali sa ibang bisita; ang private cloud parang pagkakaroon ng sarili mong bahay; ang hybrid parang may sariling bahay ka pero minsan nag-che-check-in ka rin sa hotel; at ang community cloud parang isang condo na shared ng ilang magkakaibigang pamilya na may parehong pangangailangan.',
    },
    howItWorks: [
      'IaaS: the provider manages physical hardware, virtualization, storage, and networking; the customer manages the OS, middleware, runtime, and applications. Example: AWS EC2, Azure Virtual Machines.',
      'PaaS: the provider additionally manages the OS and runtime environment; the customer focuses only on deploying and managing their application code and data. Example: AWS Elastic Beanstalk, Azure App Service.',
      'SaaS: the provider manages everything, including the application itself; the customer just uses it through a browser or client. Example: Gmail, Microsoft 365, Salesforce.',
      'Public cloud: infrastructure owned and operated by a third-party provider, shared among many customers (multi-tenant), offering elasticity and low upfront cost.',
      'Private cloud: infrastructure dedicated entirely to one organization, either on-premises or hosted, offering more control at higher cost.',
      'Hybrid cloud: a deliberate combination of public and private cloud, allowing workloads to move between them based on need (e.g., sensitive data stays private, burst capacity uses public).',
      'Community cloud: shared infrastructure specifically among organizations with common requirements (e.g., several government agencies sharing compliance-focused infrastructure).',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Model</th><th>Customer Manages</th><th>Provider Manages</th></tr></thead>
        <tbody>
          <tr><td>IaaS</td><td>OS, runtime, apps, data</td><td>Hardware, virtualization, storage, network</td></tr>
          <tr><td>PaaS</td><td>Apps, data</td><td>Hardware through OS and runtime</td></tr>
          <tr><td>SaaS</td><td>Just your data/usage</td><td>Everything, including the application</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A startup building a custom web application might choose PaaS to avoid managing servers entirely, while a large enterprise migrating an existing legacy application might choose IaaS for maximum control during the transition — and everyone in the company still uses SaaS tools like email and messaging daily without thinking about it.',
    proTips: [
      'A fast way to remember the stack: IaaS = "just the building," PaaS = "furnished apartment," SaaS = "hotel room, everything done for you."',
      'When a scenario mentions "we don\'t want to manage any servers or operating systems, just deploy our code," that is PaaS, not IaaS.',
    ],
    examAlert:
      'Expect the exam to describe a responsibility split (e.g., "the customer only manages the application and data") and ask you to name the service model — practice identifying the model from the described responsibility boundary.',
    beginnerMistakes: [
      'Confusing IaaS and PaaS by forgetting exactly where the management boundary sits (OS is the key differentiator).',
      'Assuming "cloud" always means public cloud — private and hybrid cloud are equally valid, common deployment models.',
      'Forgetting community cloud exists as a distinct model from public and private.',
    ],
    keyTerms: [
      { term: 'IaaS', def: 'Infrastructure as a Service — provides virtualized computing infrastructure; the customer manages the OS upward.' },
      { term: 'PaaS', def: 'Platform as a Service — provides a managed OS/runtime platform; the customer manages just applications and data.' },
      { term: 'SaaS', def: 'Software as a Service — delivers a complete, ready-to-use application to the customer.' },
      { term: 'Hybrid cloud', def: 'A deployment model combining public and private cloud, allowing workloads to move between them.' },
      { term: 'Multi-tenant', def: 'An architecture where multiple customers share the same underlying infrastructure, isolated from each other logically.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'In which cloud service model does the customer manage the operating system, while the provider manages the underlying hardware and virtualization?',
        options: ['SaaS', 'PaaS', 'IaaS', 'None of these'],
        correct: 2,
        explanation: 'IaaS hands the customer a virtual machine; the customer is responsible for the OS and everything above it.',
      },
      {
        prompt: 'A company wants to deploy its application code without managing any operating system or server patching. Which service model fits best?',
        options: ['IaaS', 'PaaS', 'On-premises hosting', 'Community cloud'],
        correct: 1,
        explanation: 'PaaS manages the OS and runtime, letting the customer focus purely on application code.',
      },
      {
        prompt: 'What defines a hybrid cloud deployment?',
        options: [
          'Using only one public cloud provider.',
          'A deliberate combination of public and private cloud, allowing workloads to move between them based on need.',
          'A cloud shared only among government agencies.',
          'A cloud with no internet connectivity at all.',
        ],
        correct: 1,
        explanation: 'Hybrid cloud specifically combines public and private cloud resources by design.',
      },
    ],
    miniScenario: {
      prompt: 'A company wants sensitive customer financial data to remain on infrastructure they fully control, while using public cloud resources for less sensitive, high-traffic marketing website workloads.',
      task: 'Name the deployment model that fits this description, and explain why.',
    },
    recap:
      'IaaS, PaaS, and SaaS describe increasing levels of provider-managed responsibility. Public, private, hybrid, and community cloud describe who owns and shares the underlying infrastructure. Knowing the responsibility boundary in each model is the key exam and real-world skill.',
    classroomAnswer:
      '"The service models are really just a sliding scale of \'how much do I have to manage myself\' — and the deployment models are about who owns and shares the infrastructure underneath."',
  };

  NetReady.LESSONS['10-2'] = {
    id: '10-2',
    moduleId: 10,
    slug: 'virtualization-fundamentals-nfv',
    title: 'Virtualization Fundamentals: Virtual Switches, vNICs, and NFV',
    estMinutes: 12,
    outcomes: [
      'Explain what a hypervisor does and differentiate Type 1 from Type 2.',
      'Explain the role of a virtual switch and virtual NIC in a virtualized environment.',
      'Explain what NFV accomplishes compared to traditional hardware appliances.',
    ],
    whyItMatters:
      'Virtually every modern data center and cloud platform runs on virtualization — understanding it is the foundation for understanding cloud networking itself.',
    simpleEnglish:
      'A hypervisor is software that creates and manages virtual machines (VMs) on physical hardware. A Type 1 (bare-metal) hypervisor runs directly on hardware, common in data centers and cloud platforms; a Type 2 (hosted) hypervisor runs on top of a regular operating system, common for desktop testing/development use. A virtual switch (vSwitch) is a software-based switch inside a virtualization host, connecting virtual machines to each other and to the physical network, just like a physical switch connects physical devices. A virtual NIC (vNIC) is a software-emulated network interface assigned to each VM. NFV (Network Functions Virtualization) replaces traditional hardware network appliances (like physical firewalls or routers) with software running on standard servers, adding flexibility and reducing dedicated hardware costs.',
    taglish:
      'Ang hypervisor ay software na gumagawa at namamahala ng mga virtual machine (VM) sa loob ng pisikal na hardware. Ang Type 1 (bare-metal) hypervisor ay direktang tumatakbo sa hardware, karaniwan sa mga data center at cloud platform. Ang Type 2 (hosted) hypervisor naman tumatakbo sa ibabaw ng ordinaryong operating system, karaniwan para sa testing o development sa personal na computer. Ang virtual switch (vSwitch) ay software-based na switch sa loob ng virtualization host, kumokonekta sa mga VM sa isa\'t isa at sa pisikal na network — parang ordinaryong switch pero software na lang. Ang virtual NIC (vNIC) ay isang software-emulated na network interface na itinalaga sa bawat VM. Ang NFV (Network Functions Virtualization) naman ay pinapalitan ang tradisyunal na hardware network appliance (tulad ng pisikal na firewall o router) ng software na tumatakbo sa ordinaryong server — nagdaragdag ito ng flexibility at binabawasan ang gastos sa dedicated hardware.',
    analogy: {
      title: 'Maraming apartment sa loob ng isang gusali',
      text:
        'Isipin mo ang isang physical server parang isang malaking gusali, at ang hypervisor ang property manager na naghahati ng gusali sa maraming independiyenteng apartment unit (virtual machines) — bawat unit may sariling kusina at banyo (sariling OS at resources) kahit iisa lang ang aktwal na gusali. Ang virtual switch ay parang internal na sistema ng koreo sa loob ng gusali na naghahatid ng sulat sa pagitan ng mga unit, at papalabas sa tunay na kalye (physical network). Ang NFV naman parang pagpapalit ng malaking, mamahaling security booth (physical firewall) ng isang guard na pwede mong i-assign kahit saan (software na tumatakbo sa kahit anong server).',
    },
    howItWorks: [
      'Type 1 hypervisors (e.g., VMware ESXi, Microsoft Hyper-V in server mode) run directly on bare-metal hardware for maximum performance and are the standard in production data centers.',
      'Type 2 hypervisors (e.g., VMware Workstation, VirtualBox) run as an application on top of a host OS, convenient for individual testing/development but less efficient for production.',
      'A virtual switch operates similarly to a physical Layer 2 switch, supporting VLANs and forwarding frames between VMs and the physical uplink to the real network.',
      'Each VM is assigned one or more vNICs, which appear to the guest operating system just like a physical network card, connected internally to the host\'s virtual switch.',
      'NFV takes functions traditionally requiring dedicated hardware (firewalls, load balancers, routers) and implements them as software (Virtual Network Functions, VNFs) running on standard virtualized servers, enabling faster deployment, easier scaling, and lower hardware costs.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="A physical server running a hypervisor with three virtual machines connected via vNICs to a virtual switch, which connects to the physical network">
        <div class="net-row">
          <div class="net-node">VM 1<br><small>vNIC</small></div>
          <div class="net-node">VM 2<br><small>vNIC</small></div>
          <div class="net-node">VM 3<br><small>vNIC</small></div>
        </div>
        <div class="net-line">&darr;</div>
        <div class="net-node highlight">Virtual Switch (inside the Hypervisor)</div>
        <div class="net-line">&darr;</div>
        <div class="net-node">Physical NIC &rarr; Physical Network</div>
      </div>`,
    },
    realWorldExample:
      'A cloud provider runs thousands of customer virtual machines on a single physical server farm using Type 1 hypervisors, with virtual switches handling all the internal VM-to-VM traffic invisibly, while NFV-based virtual firewalls protect each customer\'s isolated segment without needing a dedicated physical firewall per customer.',
    proTips: [
      'When you see "runs directly on hardware, no host OS needed," think Type 1; when you see "runs as a program on your existing desktop OS," think Type 2.',
      'NFV\'s biggest practical benefit is elasticity — spinning up or down a virtual firewall instance is far faster and cheaper than provisioning new physical hardware.',
    ],
    examAlert:
      'The exam commonly tests Type 1 vs. Type 2 hypervisor identification and NFV\'s core value proposition (software instead of dedicated hardware appliances) — both are high-yield, literal recall items.',
    beginnerMistakes: [
      'Assuming Type 2 hypervisors are used in production data centers — they are primarily a desktop/testing tool, not a production standard.',
      'Confusing a virtual switch with a physical switch\'s capabilities — while similar, a vSwitch operates purely in software within one virtualization host.',
      'Assuming NFV and virtualization of servers are the exact same thing — NFV specifically refers to virtualizing NETWORK functions (firewalls, routers, load balancers), a specific application of the broader virtualization concept.',
    ],
    keyTerms: [
      { term: 'Hypervisor', def: 'Software that creates and manages virtual machines on physical hardware.' },
      { term: 'Type 1 hypervisor', def: 'A bare-metal hypervisor running directly on hardware, standard in production environments.' },
      { term: 'Type 2 hypervisor', def: 'A hosted hypervisor running on top of a regular operating system, common for desktop use.' },
      { term: 'Virtual switch (vSwitch)', def: 'A software-based switch connecting virtual machines to each other and to the physical network.' },
      { term: 'NFV', def: 'Network Functions Virtualization — implements network functions (firewalls, routers) as software instead of dedicated hardware.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the key difference between a Type 1 and Type 2 hypervisor?',
        options: [
          'Type 1 runs directly on hardware; Type 2 runs on top of a host operating system.',
          'Type 1 is only for desktop use; Type 2 is only for data centers.',
          'They are functionally identical.',
          'Type 2 hypervisors do not support virtual machines.',
        ],
        correct: 0,
        explanation: 'Type 1 (bare-metal) runs directly on hardware; Type 2 (hosted) runs as software on top of an existing OS.',
      },
      {
        prompt: 'What does a virtual switch do?',
        options: [
          'It physically connects two data centers together.',
          'It connects virtual machines to each other and to the physical network, functioning like a software-based Layer 2 switch.',
          'It replaces the need for any physical networking hardware everywhere.',
          'It only operates at Layer 3.',
        ],
        correct: 1,
        explanation: 'A vSwitch performs Layer 2 switching functions in software within a virtualization host.',
      },
      {
        prompt: 'What does NFV primarily accomplish?',
        options: [
          'It virtualizes entire operating systems only.',
          'It implements network functions like firewalls and routers as software instead of dedicated physical hardware.',
          'It eliminates the need for any network functions at all.',
          'It only applies to wireless networks.',
        ],
        correct: 1,
        explanation: 'NFV specifically virtualizes network functions, enabling them to run as flexible software rather than fixed hardware appliances.',
      },
    ],
    miniScenario: {
      prompt: 'A company wants to quickly deploy and scale firewall protection across many new cloud workloads without purchasing additional physical hardware for each one.',
      task: 'Explain how NFV addresses this requirement.',
    },
    recap:
      'Hypervisors (Type 1 bare-metal or Type 2 hosted) create and manage virtual machines. Virtual switches and vNICs connect VMs to each other and the physical network in software. NFV virtualizes network functions like firewalls and routers, replacing dedicated hardware with flexible software.',
    classroomAnswer:
      '"Once you see a virtual switch as just a software version of a real switch, and NFV as just software versions of real appliances, the whole virtualization stack stops feeling abstract."',
  };

  NetReady.LESSONS['10-3'] = {
    id: '10-3',
    moduleId: 10,
    slug: 'sdn-control-data-management-planes',
    title: 'Software-Defined Networking: Control, Data, and Management Planes',
    estMinutes: 12,
    outcomes: [
      'Differentiate the control plane, data plane, and management plane.',
      'Explain what SDN changes about traditional network architecture.',
      'Explain how APIs enable programmatic network control in SDN.',
    ],
    whyItMatters:
      'SDN is the architectural idea behind nearly every modern cloud network and increasingly behind enterprise networks too — understanding the three planes makes every SDN discussion make sense.',
    simpleEnglish:
      'Every network device conceptually performs three separate functions: the data plane actually forwards traffic (the "muscle"); the control plane makes decisions about how traffic should be forwarded, like running routing protocols (the "brain"); and the management plane handles configuration and monitoring by administrators (the "steering wheel"). Traditional networking bundles all three into each individual device. SDN (Software-Defined Networking) separates the control plane from the data plane, centralizing control logic in software (an SDN controller) that can programmatically manage many devices at once through APIs, instead of configuring each device individually.',
    taglish:
      'Bawat network device, konseptwal, gumagawa ng tatlong hiwalay na trabaho: ang data plane ang aktwal na nagpapadala ng traffic (parang "muscle" o kalamnan). Ang control plane naman ang gumagawa ng desisyon kung paano dapat ipadala ang traffic, tulad ng pagpapatakbo ng routing protocols (parang "utak"). Ang management plane naman ang humahawak ng configuration at monitoring ng mga administrator (parang "manibela"). Sa tradisyunal na networking, magkakasama ang tatlong ito sa loob ng bawat indibidwal na device. Ang SDN (Software-Defined Networking) naman ay pinaghihiwalay ang control plane mula sa data plane, isinasentro ang lohika ng desisyon sa isang software (SDN controller) na kayang mamahala ng maraming device nang sabay-sabay gamit ang mga API, sa halip na i-configure ang bawat device nang isa-isa.',
    analogy: {
      title: 'Utak, kalamnan, at manibela — pinaghiwalay',
      text:
        'Isipin mo ang bawat tradisyunal na router parang isang tao na may sariling utak, kalamnan, at manibela — nagdedesisyon sila mismo at gumagalaw base sa sarili nilang pag-iisip. Ang SDN naman parang nagtayo ka ng isang sentral na "utak" (SDN controller) na nagbibigay ng utos sa maraming "katawan" (mga switch/router na walang sariling desisyon, nagpapadala na lang ng traffic base sa inutos). Sa halip na turuan mo isa-isa ang bawat katawan kung paano kumilos, sinasabihan mo na lang ang iisang utak, at ipinapasa nito ang desisyon sa lahat.',
    },
    howItWorks: [
      'The data plane forwards actual packets/frames based on decisions already made — this is the fast, hardware-accelerated forwarding function.',
      'The control plane determines forwarding logic (routing tables, path selection) — traditionally, each device runs its own routing protocol instance to build this locally.',
      'The management plane provides the interface administrators use to configure and monitor a device (CLI, GUI, SNMP).',
      'SDN centralizes the control plane into a dedicated SDN controller, which programs the data plane on many (possibly all) network devices through a standardized API (like OpenFlow), rather than each device deciding independently.',
      'This separation enables programmatic, automated, and centrally-orchestrated network management — critical for the scale and agility cloud environments require.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="SDN architecture showing a centralized controller managing the control plane, with APIs to multiple devices that only handle the data plane">
        <div class="net-node highlight">SDN Controller<br><small>(Centralized Control Plane)</small></div>
        <div class="net-line">API-driven programming &darr;</div>
        <div class="net-row">
          <div class="net-node">Switch 1<br><small>Data plane only</small></div>
          <div class="net-node">Switch 2<br><small>Data plane only</small></div>
          <div class="net-node">Switch 3<br><small>Data plane only</small></div>
        </div>
      </div>`,
    },
    realWorldExample:
      'A large cloud provider uses SDN to programmatically create isolated virtual networks for thousands of customers on demand, something that would be practically impossible to configure manually, device by device, using traditional networking approaches.',
    proTips: [
      'A fast memory hook: data plane = "doing," control plane = "deciding," management plane = "configuring/watching."',
      'When a scenario emphasizes "centralized, programmatic, API-driven network control," that is describing SDN\'s core value proposition.',
    ],
    examAlert:
      'Expect the exam to test the three-plane vocabulary directly (data/control/management) and SDN\'s defining trait: separating and centralizing the control plane away from individual devices.',
    beginnerMistakes: [
      'Confusing the control plane (decision-making) with the data plane (actually forwarding traffic) — they are distinct functions even within one traditional device.',
      'Assuming SDN eliminates the data plane — it only centralizes and separates the control plane; data still gets forwarded by the devices themselves.',
      'Forgetting that traditional (non-SDN) devices still have all three planes, just bundled together locally rather than centralized.',
    ],
    keyTerms: [
      { term: 'Data plane', def: 'The network function responsible for actually forwarding traffic.' },
      { term: 'Control plane', def: 'The network function responsible for making forwarding decisions (e.g., routing protocol logic).' },
      { term: 'Management plane', def: 'The network function used by administrators to configure and monitor a device.' },
      { term: 'SDN', def: 'Software-Defined Networking — separates and centralizes the control plane in software, managed via APIs.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'Which plane is responsible for actually forwarding packets through a network device?',
        options: ['Management plane', 'Control plane', 'Data plane', 'Application plane'],
        correct: 2,
        explanation: 'The data plane performs the actual, high-speed forwarding of traffic.',
      },
      {
        prompt: 'What is the defining architectural change SDN makes compared to traditional networking?',
        options: [
          'It eliminates the data plane entirely.',
          'It separates and centralizes the control plane into a dedicated controller, managed via APIs.',
          'It removes the need for any network devices.',
          'It only applies to wireless networks.',
        ],
        correct: 1,
        explanation: 'SDN\'s core idea is centralizing control-plane decision-making away from individual devices, into software.',
      },
      {
        prompt: 'Which plane would an administrator interact with to configure a device via a CLI or GUI?',
        options: ['Data plane', 'Control plane', 'Management plane', 'Physical plane'],
        correct: 2,
        explanation: 'The management plane is specifically the interface for administrative configuration and monitoring.',
      },
    ],
    miniScenario: {
      prompt: 'A cloud provider needs to create hundreds of new isolated customer network environments automatically, every single day, without manually configuring each switch.',
      task: 'Explain how SDN\'s architecture makes this practical, referencing the control plane specifically.',
    },
    recap:
      'Every network device conceptually has a data plane (forwarding), control plane (decision-making), and management plane (configuration/monitoring). SDN centralizes the control plane into a software controller, managing many devices programmatically through APIs.',
    classroomAnswer:
      '"Data plane does, control plane decides, management plane configures — and SDN\'s whole trick is pulling that \'deciding\' part out of every device and centralizing it in software."',
  };

  NetReady.LESSONS['10-4'] = {
    id: '10-4',
    moduleId: 10,
    slug: 'cloud-networking-building-blocks',
    title: 'Cloud Networking Building Blocks: VPC, Subnets, Security Groups, and Gateways',
    estMinutes: 13,
    outcomes: [
      'Explain what a VPC is and how it relates to traditional network concepts.',
      'Explain the purpose of a security group in cloud networking.',
      'Identify the role of a cloud gateway in connecting a VPC to other networks.',
    ],
    whyItMatters:
      'These are the exact terms you will see the moment you open any major cloud provider\'s console — recognizing them as familiar networking concepts wearing new names removes a lot of the intimidation factor.',
    simpleEnglish:
      'A VPC (Virtual Private Cloud, sometimes called a VNet in Azure) is an isolated, logically-defined network within a public cloud provider, letting you build your own private network space using familiar concepts like subnets and route tables. Subnets divide a VPC into smaller segments, often mapped to availability zones for redundancy. A route table controls how traffic flows between subnets and out to other networks. A security group acts like a virtual, stateful firewall applied to individual cloud resources (like a virtual machine), controlling allowed inbound and outbound traffic. A cloud gateway (internet gateway, NAT gateway, VPN gateway) connects the VPC to the outside world in different ways depending on the need.',
    taglish:
      'Ang VPC (Virtual Private Cloud, tinatawag na VNet sa Azure) ay isang hiwalay, logically-defined na network sa loob ng isang public cloud provider — parang binubuo mo ang sarili mong pribadong espasyo ng network gamit ang mga pamilyar na konsepto tulad ng subnets at route tables. Ang subnets naman naghahati sa VPC sa mas maliliit na segment, madalas na naka-map sa iba\'t-ibang availability zone para sa redundancy. Ang route table ay kumokontrol kung paano dumadaloy ang traffic sa pagitan ng mga subnet at palabas sa ibang network. Ang security group naman parang virtual, stateful na firewall na inilalagay sa indibidwal na cloud resource (tulad ng isang virtual machine), kumokontrol kung anong papasok at palabas na traffic ang pinapayagan. Ang cloud gateway (internet gateway, NAT gateway, VPN gateway) ang kumokonekta ng VPC papunta sa labas na mundo, depende sa klase ng kailangan.',
    analogy: {
      title: 'Sarili mong subdivision sa loob ng malaking lungsod',
      text:
        'Isipin mo ang VPC parang sarili mong subdivision na itinayo mo sa loob ng napakalaking lungsod (ang cloud provider). Kahit ikaw lang ang may-ari at namamahala ng subdivision mo, gumagamit ka pa rin ng imprastraktura ng lungsod (ang physical data center ng provider). Ang subnets ay parang mga phase o bloke sa loob ng iyong subdivision. Ang security group ay parang guard na nakatalaga sa bawat bahay (resource) mismo, hindi lang sa gate ng buong subdivision — sinusuri niya ang bawat taong papasok o lalabas ng SPECIFIC na bahay na iyon. Ang gateway naman parang iba\'t-ibang klase ng exit sa subdivision — isa para sa pampublikong kalsada (internet gateway), isa para sa mga papasok lang na walang pampublikong address (NAT gateway), at isa para sa mga tao na kailalangan ng secure na private na daan (VPN gateway).',
    },
    howItWorks: [
      'A VPC defines its own private IP address space (using CIDR notation, just like traditional networking) within the cloud provider\'s infrastructure.',
      'Subnets subdivide the VPC\'s address space, commonly one subnet per availability zone to spread resources across physically separate infrastructure for resilience.',
      'A route table determines where traffic from each subnet is sent — to other subnets, to a gateway for internet access, or across a VPN to on-premises infrastructure.',
      'A security group applies stateful rules directly to a resource (allowing return traffic automatically for permitted connections), commonly used alongside broader network ACLs that apply at the subnet level.',
      'An internet gateway allows resources with public IP addresses to reach the internet; a NAT gateway allows resources with only private addresses to initiate outbound internet connections without being directly reachable from outside; a VPN gateway connects the VPC securely back to an on-premises network.',
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="A VPC containing two subnets, each with security groups on individual resources, connected to the internet via a gateway">
        <div class="net-node highlight">VPC (10.0.0.0/16)</div>
        <div class="net-row">
          <div class="net-node">Subnet A (10.0.1.0/24)<br><small>Resource + Security Group</small></div>
          <div class="net-node">Subnet B (10.0.2.0/24)<br><small>Resource + Security Group</small></div>
        </div>
        <div class="net-line">&darr;</div>
        <div class="net-node">Internet Gateway / NAT Gateway / VPN Gateway</div>
      </div>`,
    },
    realWorldExample:
      'A company hosting a web application in the cloud might place its web servers in a public subnet (reachable from the internet via an internet gateway) and its database in a private subnet (reachable only from the web servers, using a NAT gateway for any necessary outbound updates), with security groups tightly restricting exactly which ports each tier can use.',
    proTips: [
      'Recognizing that a VPC is "just" a private IP address space with subnets and route tables, using familiar CIDR notation, removes most of the intimidation of cloud networking terminology.',
      'Remember security groups are stateful and apply to individual resources, while network ACLs (a related but separate concept) are typically stateless and apply at the subnet level.',
    ],
    examAlert:
      'The exam expects you to recognize that cloud networking concepts (VPC, subnets, gateways, security groups) map directly onto traditional networking concepts you already know — do not treat this as entirely new material.',
    beginnerMistakes: [
      'Assuming cloud networking is a completely different discipline from traditional networking rather than the same fundamentals applied in a virtualized, provider-managed context.',
      'Confusing an internet gateway (for publicly addressable resources) with a NAT gateway (for private resources needing outbound-only access).',
      'Forgetting that security groups operate at the individual resource level, not just at the broader network boundary.',
    ],
    keyTerms: [
      { term: 'VPC', def: 'Virtual Private Cloud — an isolated, logically-defined private network within a public cloud provider.' },
      { term: 'Security group', def: 'A stateful, resource-level virtual firewall controlling inbound/outbound traffic in cloud networking.' },
      { term: 'Internet gateway', def: 'A cloud component allowing resources with public IPs to reach the internet.' },
      { term: 'NAT gateway', def: 'A cloud component allowing private resources to initiate outbound internet connections without being directly reachable from outside.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is a VPC?',
        options: [
          'A physical router located in a customer\'s office.',
          'An isolated, logically-defined private network within a public cloud provider.',
          'A type of wireless encryption standard.',
          'A dedicated leased line between two offices.',
        ],
        correct: 1,
        explanation: 'A VPC lets a customer define their own private network space using cloud provider infrastructure.',
      },
      {
        prompt: 'What is the key characteristic of a security group in cloud networking?',
        options: [
          'It is a stateless rule applied only at the subnet level.',
          'It is a stateful, resource-level virtual firewall controlling inbound and outbound traffic.',
          'It only controls DNS resolution.',
          'It replaces the need for any subnetting.',
        ],
        correct: 1,
        explanation: 'Security groups are stateful and applied directly to individual cloud resources.',
      },
      {
        prompt: 'What is the purpose of a NAT gateway in a VPC?',
        options: [
          'To allow resources with only private IP addresses to initiate outbound internet connections without being directly reachable from outside.',
          'To encrypt all traffic within the VPC.',
          'To assign public IP addresses to every resource automatically.',
          'To replace the need for any route table.',
        ],
        correct: 0,
        explanation: 'A NAT gateway enables outbound-only internet access for private resources, similar to traditional NAT/PAT concepts.',
      },
    ],
    miniScenario: {
      prompt: 'A company\'s cloud-hosted database should never be directly reachable from the internet, but occasionally needs to download software updates from the internet itself.',
      task: 'Recommend which type of gateway fits this requirement, and explain why an internet gateway alone would not be appropriate.',
    },
    recap:
      'A VPC is a private, isolated network space within a cloud provider, using subnets and route tables just like traditional networking. Security groups provide stateful, resource-level firewalling. Internet, NAT, and VPN gateways each connect the VPC to the outside world in different ways depending on the need.',
    classroomAnswer:
      '"A VPC is just a private network with a cloud provider\'s infrastructure underneath it — subnets, route tables, and security groups are the same ideas I already know, wearing cloud-specific names."',
  };

  NetReady.LESSONS['10-5'] = {
    id: '10-5',
    moduleId: 10,
    slug: 'high-availability-scalability-elasticity-multitenancy',
    title: 'High Availability, Scalability, Elasticity, and Multitenancy',
    estMinutes: 11,
    outcomes: [
      'Differentiate scalability from elasticity.',
      'Explain what high availability means in a cloud context.',
      'Explain the security implications of multitenancy.',
    ],
    whyItMatters:
      'These four words appear in nearly every cloud marketing pitch and every cloud architecture exam question — knowing their precise technical meaning (not just the marketing feeling) is what separates real understanding from buzzword recognition.',
    simpleEnglish:
      'High availability (HA) means a system is designed to remain operational with minimal downtime, often through redundancy across multiple availability zones or regions. Scalability is the ability to increase capacity to handle more load, typically by adding resources (which can be planned and somewhat manual). Elasticity is the ability to automatically and dynamically scale resources up or down in response to real-time demand, then scale back down when demand drops, so you only pay for what you actually use. Multitenancy means multiple customers share the same underlying physical infrastructure while remaining logically isolated from each other.',
    taglish:
      'Ang high availability (HA) ay ibig sabihin, dinisenyo ang sistema para manatiling gumagana nang may kaunting downtime lang, kadalasan sa pamamagitan ng redundancy sa maraming availability zone o region. Ang scalability naman ay ang kakayahang dagdagan ang kapasidad para masuportahan ang mas maraming load, karaniwang sa pamamagitan ng pagdaragdag ng resources (na maaaring naka-plano at medyo manual). Ang elasticity naman ay ang kakayahang AWTOMATIKO at dynamic na dagdagan o bawasan ang resources depende sa real-time na pangangailangan, tapos bawasan ulit kapag bumaba ang demand — kaya babayaran mo lang ang aktwal na ginamit mo. Ang multitenancy naman ay ibig sabihin, maraming customer ang nagsha-share ng parehong pisikal na imprastraktura habang magkakahiwalay pa rin sila sa isa\'t isa nang logical.',
    analogy: {
      title: 'Pagpapalawak ng tindahan kumpara sa nagbabagong bilang ng cashier',
      text:
        'Isipin mo ang scalability parang pagdesisyon ng may-ari ng tindahan na magdagdag ng permanenteng bagong sangay dahil dumarami ang customer — planado at medyo matagal ang proseso. Ang elasticity naman parang pagdagdag ng pansamantalang cashier tuwing Black Friday, tapos pinapaalis sila pagkatapos ng sale — awtomatiko at dynamic, umaayon sa totoong pangangailangan sa oras na iyon mismo. Ang multitenancy naman parang isang malaking condo building kung saan maraming pamilya (customer) ang naninirahan sa parehong gusali, pero may sarili-sariling naka-lock na pinto ang bawat unit — magkakasama sa imprastraktura, pero hiwalay pa rin ang buhay ng bawat isa.',
    },
    howItWorks: [
      'High availability is achieved through redundancy: multiple availability zones (physically separate data centers within a region) or multiple regions, combined with automatic failover.',
      'Scalability can be vertical (adding more resources to an existing server, like more CPU/RAM) or horizontal (adding more servers/instances) — often requires planning and sometimes manual intervention.',
      'Elasticity typically relies on auto-scaling groups that monitor real-time metrics (like CPU usage or request count) and automatically add or remove instances to match demand.',
      'Multitenancy relies on strong logical isolation (through virtualization, security groups, and access controls) to ensure one customer\'s data or workload can never be accessed by another sharing the same physical hardware.',
      'A cloud provider\'s shared responsibility model typically means the provider secures the underlying multitenant infrastructure, while the customer remains responsible for correctly configuring their own logical isolation and access controls.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Concept</th><th>Key Idea</th></tr></thead>
        <tbody>
          <tr><td>High availability</td><td>Minimal downtime through redundancy across zones/regions</td></tr>
          <tr><td>Scalability</td><td>Ability to add capacity, often planned/manual</td></tr>
          <tr><td>Elasticity</td><td>Automatic, real-time scaling up AND down with demand</td></tr>
          <tr><td>Multitenancy</td><td>Multiple customers sharing infrastructure, logically isolated</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'An online retailer\'s website automatically adds dozens of extra server instances during a holiday sales spike (elasticity), while its overall architecture is deliberately spread across multiple data center regions so that even a regional outage does not take the whole site down (high availability) — all while running on shared cloud infrastructure alongside thousands of other unrelated companies (multitenancy).',
    proTips: [
      'A quick way to separate scalability from elasticity: scalability is "can it grow," elasticity is "does it grow AND shrink automatically, in real time."',
      'When a scenario emphasizes "pay only for what you use, scaling automatically with real-time demand," that is elasticity specifically, not just general scalability.',
    ],
    examAlert:
      'Expect a direct comparison question between scalability and elasticity — the key distinguishing detail is automatic, real-time, bidirectional (up AND down) adjustment for elasticity.',
    beginnerMistakes: [
      'Using "scalability" and "elasticity" as interchangeable synonyms — elasticity specifically implies automatic, real-time, bidirectional scaling.',
      'Assuming high availability means "never goes down" — it means minimizing downtime through redundancy, not an absolute guarantee.',
      'Forgetting multitenancy\'s security implication: strong logical isolation is essential precisely because the underlying hardware is shared.',
    ],
    keyTerms: [
      { term: 'High availability (HA)', def: 'Designing a system to remain operational with minimal downtime, typically through redundancy.' },
      { term: 'Scalability', def: 'The ability to increase capacity to handle more load, often through planned resource additions.' },
      { term: 'Elasticity', def: 'The ability to automatically scale resources up or down in real time based on demand.' },
      { term: 'Multitenancy', def: 'Multiple customers sharing the same underlying infrastructure while remaining logically isolated.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the key difference between scalability and elasticity?',
        options: [
          'They are exactly the same concept.',
          'Elasticity specifically implies automatic, real-time scaling both up and down with demand; scalability is the more general ability to add capacity.',
          'Scalability only applies to storage, while elasticity only applies to compute.',
          'Elasticity is always more expensive than scalability.',
        ],
        correct: 1,
        explanation: 'Elasticity is automatic and bidirectional in real time; scalability is the broader, sometimes manual, ability to grow capacity.',
      },
      {
        prompt: 'What does multitenancy require to be implemented safely?',
        options: [
          'No security controls, since customers never interact with shared hardware.',
          'Strong logical isolation between customers sharing the same physical infrastructure.',
          'Each customer must have entirely separate physical hardware, defeating the purpose.',
          'Multitenancy is inherently insecure and should never be used.',
        ],
        correct: 1,
        explanation: 'Multitenancy depends on strong logical isolation to keep different customers\' data and workloads separate despite shared hardware.',
      },
      {
        prompt: 'How is high availability typically achieved in cloud architecture?',
        options: [
          'By using only a single server with no backup.',
          'Through redundancy across multiple availability zones or regions, with automatic failover.',
          'By disabling all scaling features.',
          'By avoiding the use of virtualization entirely.',
        ],
        correct: 1,
        explanation: 'Redundancy across physically separate infrastructure, combined with failover, is the standard HA approach.',
      },
    ],
    miniScenario: {
      prompt: 'An online store wants its website to automatically handle sudden traffic spikes during flash sales, then scale back down afterward so they are not paying for unused capacity.',
      task: 'Name the concept that specifically describes this requirement, and explain why "scalability" alone is not the precise term.',
    },
    recap:
      'High availability minimizes downtime through redundancy. Scalability is the general ability to add capacity. Elasticity is automatic, real-time, bidirectional scaling with demand. Multitenancy shares infrastructure among customers while requiring strong logical isolation.',
    classroomAnswer:
      '"Scalability says I CAN grow. Elasticity says I grow and shrink automatically, in real time, without anyone touching a dashboard — that\'s the precise distinction the exam wants."',
  };

  NetReady.LESSONS['10-6'] = {
    id: '10-6',
    moduleId: 10,
    slug: 'zero-trust-sase-sse-edge-vxlan',
    title: 'Zero Trust, SASE/SSE, VXLAN, and Edge Computing',
    estMinutes: 13,
    outcomes: [
      'Explain the "never trust, always verify" principle behind zero trust and contrast it with traditional perimeter security.',
      'Differentiate SASE from SSE and name the components each one bundles together.',
      'Explain what VXLAN solves compared to traditional VLANs, and why edge computing reduces latency.',
    ],
    whyItMatters:
      'These are the newest architectural buzzwords in networking, and the exam expects you to recognize them by their defining trait, not just their marketing name — vendors rebrand these constantly, but the underlying idea never changes.',
    simpleEnglish:
      'Zero trust is a security model built on "never trust, always verify" — no device or user is automatically trusted just because it is already inside the corporate network; every single access request is verified, and access is granted using least privilege (only what is needed, nothing more). SASE (Secure Access Service Edge) is a cloud-delivered architecture that bundles SD-WAN networking together with a stack of security services — secure web gateway (SWG), cloud access security broker (CASB), firewall-as-a-service (FWaaS), and zero trust network access (ZTNA) — into one unified service delivered from the cloud edge, closer to users. SSE (Security Service Edge) is the security-only half of SASE: SWG, CASB, FWaaS, and ZTNA, without the SD-WAN networking component. VXLAN (Virtual Extensible LAN) is a network overlay technology that wraps Layer 2 Ethernet frames inside Layer 3 UDP packets, letting logical Layer 2 segments stretch across routed networks (even between data centers) and scale far beyond the traditional 4,094-VLAN limit. Edge computing processes data physically close to where it is generated (near IoT devices, retail stores, or cell towers) instead of always sending it to a centralized data center or cloud region, cutting the latency that a long round-trip would otherwise add.',
    taglish:
      'Ang zero trust ay isang security model na "huwag agad magtiwala, laging i-verify" — hindi basta pinagkakatiwalaan ang isang device o user kahit na nasa loob na siya ng corporate network; ang BAWAT access request ay iniimbitahan/kina-check, at ang access na binibigay ay "least privilege" lang — yung kailangan lang, wala nang extra. Ang SASE (Secure Access Service Edge) ay isang cloud-delivered architecture na pinagsasama ang SD-WAN networking at isang buong stack ng security services — secure web gateway (SWG), cloud access security broker (CASB), firewall-as-a-service (FWaaS), at zero trust network access (ZTNA) — sa isang unified na serbisyo na dumadaan sa cloud, malapit sa users. Ang SSE (Security Service Edge) naman ay ang "security-only" na kalahati ng SASE: SWG, CASB, FWaaS, at ZTNA lang, WALANG SD-WAN networking component. Ang VXLAN (Virtual Extensible LAN) ay isang network overlay technology na binabalot ang Layer 2 Ethernet frame sa loob ng Layer 3 UDP packet, kaya nitong i-extend ang logical Layer 2 segment kahit lumagpas sa mga router (kahit pa sa ibang data center), at kayang suportahan ang milyon-milyong segment sa halip na 4,094 na limit lang ng ordinaryong VLAN. Ang edge computing naman ay pinoproseso ang data malapit sa pinagmulan nito (malapit sa IoT device, tindahan, o cell tower) sa halip na palaging ipinapadala pabalik sa sentral na data center o cloud region — binabawasan nito ang latency na idudagdag ng malayong round-trip.',
    analogy: {
      title: 'Bantay sa bawat tindahan, hindi lang sa gate ng mall',
      text:
        'Dati, ang security ng isang malaking mall parang: kina-check ang ID mo isang beses lang sa main entrance (perimeter security), tapos libre ka na gumala sa buong mall. Ang zero trust ay parang binago ang panuntunan — kada tindahan sa LOOB ng mall, may sariling guard na kina-check ka ULIT bago ka papasukin, kahit pumasok ka na sa mall mismo. Hindi mahalaga na "nasa loob ka na" — ang tanong palagi, "sino ka at ano lang dapat mong ma-access dito?" Ang SASE naman parang pagpapalit ng magkakaiba-ibang guard agency sa bawat tindahan (kanya-kanyang panuntunan) ng ISANG unified na security company na nag-aalaga ng lahat ng branch, kahit saang mall, gamit ang parehong cloud-based na sistema — kasama pa nila ang pagre-regulate ng traffic flow papasok/palabas (ang "SD-WAN" na parte). Kung tatanggalin mo ang traffic-flow na parte at security-only na maiiwan, ito na ang SSE. Ang VXLAN naman parang paggawa ng "invisible tunnel" sa pagitan ng dalawang sangay ng parehong tindahan sa ibang lungsod, para parang isa lang silang silid kahit malayo — kaya kung ilan mang sangay pa ang idagdag, hindi maiiksi ang espasyo. At ang edge computing ay parang paglagay ng maliit na customer service desk sa harap mismo ng bawat sangay (malapit sa customer), sa halip na palaging tatawag pa ang bawat tanong pabalik sa head office bago sagutin — mas mabilis kaagad ang sagot dahil malapit lang.',
    },
    howItWorks: [
      'Zero trust operates on three core principles: verify explicitly (authenticate and authorize every request using all available signals), use least-privilege access (grant only what is needed, nothing more), and assume breach (design as if an attacker is already inside, using micro-segmentation to limit lateral movement).',
      'SASE converges SD-WAN (intelligent, cloud-aware WAN connectivity) with a security stack (SWG, CASB, FWaaS, ZTNA) and delivers all of it from distributed cloud points of presence close to users, rather than routing traffic back to a central data center for inspection.',
      'SSE is SASE minus the SD-WAN/networking piece — just the security services (SWG, CASB, FWaaS, ZTNA), useful for organizations that already have their own WAN strategy but want cloud-delivered security.',
      'VXLAN encapsulates an original Ethernet frame inside a UDP packet with a VXLAN header containing a 24-bit VNI (VXLAN Network Identifier), allowing up to about 16 million logical segments (versus roughly 4,094 for traditional 802.1Q VLANs) and letting that Layer 2 segment be tunneled across a routed Layer 3 network between physically separate racks or data centers.',
      'Edge computing places compute and storage resources physically near the data source (a retail location, a cell tower, a factory floor) so time-sensitive processing happens locally, with only summarized or less time-sensitive data sent onward to the centralized cloud.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Concept</th><th>Defining Trait</th></tr></thead>
        <tbody>
          <tr><td>Zero trust</td><td>Never trust by network location; verify every request, every time</td></tr>
          <tr><td>SASE</td><td>SD-WAN + security stack (SWG, CASB, FWaaS, ZTNA), delivered from the cloud edge</td></tr>
          <tr><td>SSE</td><td>SASE's security stack only — no SD-WAN/networking component</td></tr>
          <tr><td>VXLAN</td><td>Encapsulates L2 frames in L3 UDP; scales past the 4,094-VLAN limit, spans routed networks</td></tr>
          <tr><td>Edge computing</td><td>Process data physically close to its source to cut round-trip latency</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A retail chain with hundreds of branches adopts SASE so every store\'s traffic is inspected by the same cloud-delivered security stack no matter which branch it comes from, applies zero trust so an employee\'s laptop must re-authenticate for each sensitive application instead of being trusted just for being on the store Wi-Fi, and uses edge computing at each store to process point-of-sale transactions locally in milliseconds instead of waiting on a round trip to a distant central data center — while the data center itself uses VXLAN to let all those stores\' virtual segments coexist at massive scale without running out of VLAN IDs.',
    proTips: [
      'A fast way to separate SASE from SSE: if the question mentions SD-WAN or WAN connectivity as part of the bundle, it is SASE; if it only mentions the security services, it is SSE.',
      'When you see "16 million possible segments" or "spans across data centers," think VXLAN, not traditional VLAN — the 4,094 ceiling is the classic VLAN giveaway in the reverse case.',
    ],
    examAlert:
      'A common exam distractor describes zero trust as "just a stronger firewall at the network edge" — the defining trait is actually the opposite of perimeter-based thinking: nothing is trusted by location, inside or outside, and every request is verified individually.',
    beginnerMistakes: [
      'Assuming zero trust means "trust nobody, ever, for anything" instead of "verify every request explicitly, regardless of location."',
      'Treating SASE and SSE as unrelated buzzwords instead of recognizing SSE as literally the security-only subset of SASE.',
      'Confusing VXLAN with a replacement for IP addressing — it is an overlay/tunneling technology for extending Layer 2 segments, not a routing protocol.',
    ],
    keyTerms: [
      { term: 'Zero trust', def: 'A security model that never automatically trusts a user or device based on network location, verifying every access request explicitly.' },
      { term: 'Least privilege', def: 'Granting only the access rights strictly necessary to perform a task, nothing more.' },
      { term: 'SASE', def: 'Secure Access Service Edge — a cloud-delivered architecture bundling SD-WAN with a security services stack (SWG, CASB, FWaaS, ZTNA).' },
      { term: 'SSE', def: 'Security Service Edge — the security-only subset of SASE, without the SD-WAN/networking component.' },
      { term: 'VXLAN', def: 'Virtual Extensible LAN — encapsulates Layer 2 Ethernet frames inside Layer 3 UDP packets, enabling millions of logical segments across routed networks.' },
      { term: 'Edge computing', def: 'Processing data physically close to where it is generated instead of always routing it to a centralized data center or cloud region.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What is the core principle behind a zero trust security model?',
        options: [
          'Devices inside the corporate network are automatically trusted.',
          'Every access request is verified explicitly, regardless of network location, using least-privilege access.',
          'Only remote users need to be authenticated.',
          'Firewalls become unnecessary once zero trust is adopted.',
        ],
        correct: 1,
        explanation: 'Zero trust removes the assumption that "inside the network" means "trusted" — every request is verified on its own merits.',
      },
      {
        prompt: 'What distinguishes SSE from SASE?',
        options: [
          'SSE includes SD-WAN; SASE does not.',
          'SSE is the security-services-only subset of SASE, without the SD-WAN/networking component.',
          'They are completely unrelated technologies.',
          'SSE only applies to on-premises firewalls.',
        ],
        correct: 1,
        explanation: 'SASE = SD-WAN + security stack; SSE is that same security stack delivered without the SD-WAN/networking piece.',
      },
      {
        prompt: 'What problem does VXLAN primarily solve compared to traditional 802.1Q VLANs?',
        options: [
          'It eliminates the need for IP addressing entirely.',
          'It removes the 4,094-segment limit and allows Layer 2 segments to span across routed (Layer 3) networks.',
          'It only works within a single physical switch.',
          'It replaces the need for a hypervisor.',
        ],
        correct: 1,
        explanation: 'VXLAN encapsulates L2 frames in L3 UDP, scaling to millions of segments and tunneling across routed boundaries — something a plain VLAN tag cannot do.',
      },
    ],
    miniScenario: {
      prompt: 'A company\'s factory floor sensors need a decision made within milliseconds of detecting a problem, but the company\'s central cloud analytics platform is several hundred milliseconds away over the WAN.',
      task: 'Name the architectural concept that best addresses this latency requirement, and explain why sending every sensor reading to the central cloud first would not meet the need.',
    },
    recap:
      'Zero trust verifies every request explicitly instead of trusting by location. SASE bundles SD-WAN with a cloud-delivered security stack (SWG, CASB, FWaaS, ZTNA); SSE is that same stack minus the SD-WAN piece. VXLAN overlays Layer 2 segments on top of Layer 3 networks to scale past the VLAN limit and span data centers. Edge computing processes data near its source to cut latency.',
    classroomAnswer:
      '"Zero trust says stop trusting by location and verify every request. SASE and SSE just package that idea — plus networking for SASE — as a cloud-delivered service. VXLAN and edge computing solve two very different problems: one scales segmentation, the other cuts latency by moving compute closer to the data."',
  };

  NetReady.LESSONS['10-7'] = {
    id: '10-7',
    moduleId: 10,
    slug: 'automation-orchestration-infrastructure-as-code',
    title: 'Automation, Orchestration, and Infrastructure as Code',
    estMinutes: 12,
    outcomes: [
      'Explain what Infrastructure as Code (IaC) means and how it differs from manual, by-hand configuration.',
      'Differentiate automation (one task) from orchestration (many coordinated tasks).',
      'Explain what zero-touch provisioning (ZTP) accomplishes for large-scale deployments.',
    ],
    whyItMatters:
      'Modern networks at any real scale are no longer configured device-by-device by hand — recognizing these terms by their defining trait is what separates "I\'ve heard of automation" from actually understanding what changed in how networks get built.',
    simpleEnglish:
      'Infrastructure as Code (IaC) means defining network and server configuration in machine-readable files (scripts or templates) instead of manually typing commands into each device one at a time — so configuration becomes versioned, repeatable, reviewable, and testable, the same way application code is. Automation means a single task or script runs without a human manually performing it (for example, automatically backing up a switch\'s configuration every night). Orchestration means coordinating many separate automated tasks together, in the correct order, across multiple systems, to complete a larger workflow (for example, automatically bringing up a brand-new branch office: configure the switch, then the router, then the firewall, then register everything in monitoring — all in sequence, without a human triggering each step). Zero-touch provisioning (ZTP) lets a brand-new device automatically download its correct configuration and firmware the moment it is powered on and connected, with no manual setup step required from a technician on site.',
    taglish:
      'Ang Infrastructure as Code (IaC) ay ibig sabihin, itinatakda ang configuration ng network at server gamit ang machine-readable na files (scripts o templates) sa halip na mano-manong pag-type ng command sa bawat device isa-isa — kaya ang configuration ay naging versioned, repeatable, reviewable, at testable, kagaya ng application code. Ang automation ay ibig sabihin, isang tanging task o script ang tumatakbo nang walang taong personal na gagawa nito (halimbawa, awtomatikong backup ng configuration ng switch bawat gabi). Ang orchestration naman ay ang pag-coordinate ng MARAMING hiwalay na automated task nang sabay-sabay, sa tamang pagkakasunod-sunod, sa maraming sistema, para makumpleto ang isang mas malaking workflow (halimbawa, awtomatikong pagbubukas ng bagong sangay: i-configure ang switch, sunod ang router, sunod ang firewall, tapos i-register sa monitoring — lahat sunod-sunod, walang taong nagtutok sa bawat hakbang). Ang zero-touch provisioning (ZTP) naman ay nagpapahintulot sa isang bagong device na awtomatikong kumuha ng tamang configuration at firmware nito sa sandaling ito ma-power on at ma-connect, walang kailangang manual setup mula sa isang technician sa site.',
    analogy: {
      title: 'Recipe card, buong linya ng kusina, at bagong empleyadong may sariling starter kit',
      text:
        'Isipin mo ang IaC parang sinulat na recipe card kung paano dapat lutuin ang isang ulam, sa halip na basta nagluto ka nang walang sinusundan na eksaktong panuntunan — kaya kung sino man ang magluto, pareho lagi ang resulta, at kung may mali, madali mong babaguhin ang recipe card mismo (parang code review). Ang automation ay parang isang kusinero na gumagawa ng ISANG partikular na hakbang nang mag-isa, walang inuutusan (halimbawa, automatic na nagbabalot ng inihaw kada oras). Ang orchestration ay parang buong linya ng maramihang kusinero na sunod-sunod gumagawa ng buong menu para sa isang malaking catering event — bawat isa may kanya-kanyang trabaho, pero magkasunod-sunod at coordinated. Ang zero-touch provisioning ay parang bagong empleyado na sa pagdating niya sa unang araw ng trabaho, awtomatiko na niyang nakukuha ang uniform, apron, at instructions niya sa kanyang locker, walang kailangang mag-abala pa ang manager para orientahin siya nang personal.',
    },
    howItWorks: [
      'IaC definitions (declarative templates or scripts) are stored in a version control system, so every configuration change is tracked, can be reviewed before deployment, and can be rolled back just like a software code change.',
      'Automation tools (scripts, Ansible-style playbooks, Python scripts) execute a specific, defined task consistently without a human typing each individual command by hand.',
      'Orchestration platforms sequence and coordinate many individual automated tasks across multiple devices or systems, ensuring each step happens in the correct order and only after the prior step succeeds.',
      'Zero-touch provisioning relies on a device reaching out on first boot (commonly via DHCP options or a vendor\'s cloud provisioning service) to automatically retrieve its intended configuration and firmware, with no console cable or manual CLI session required.',
      'Together, these reduce human error, dramatically speed up deployment at scale, and make every configuration change auditable and consistently repeatable — critical once an environment grows beyond what any single technician can configure by hand in a reasonable time.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Concept</th><th>Defining Trait</th></tr></thead>
        <tbody>
          <tr><td>Infrastructure as Code</td><td>Configuration defined in versioned, reviewable files instead of manual commands</td></tr>
          <tr><td>Automation</td><td>One task runs without a human manually performing it</td></tr>
          <tr><td>Orchestration</td><td>Many automated tasks coordinated together, in order, across systems</td></tr>
          <tr><td>Zero-touch provisioning</td><td>A new device configures itself automatically on first boot</td></tr>
        </tbody>
      </table>`,
    },
    realWorldExample:
      'A company opening 50 new retail branches ships pre-boxed switches that, once plugged in at each store, use zero-touch provisioning to automatically pull their full configuration from the cloud. An orchestration platform then brings up the switch, router, and firewall at each site in the correct sequence and registers the new site in monitoring — all without a technician manually typing a single command, and with every configuration change tracked in version control as IaC.',
    proTips: [
      'A clean way to remember the distinction: automation = one task running itself; orchestration = many automated tasks working together, in the right order.',
      'IaC\'s biggest real-world value is not raw speed — it is making a configuration change reviewable and revertible, exactly the way a software code change is reviewed before it ships.',
    ],
    examAlert:
      'A common exam distractor describes orchestration as "just a faster way to automate one task" — the defining trait tested is coordinating MULTIPLE automated tasks/systems together in sequence, not raw speed of a single task.',
    beginnerMistakes: [
      'Confusing automation (a single task running itself) with orchestration (many coordinated automated tasks working together).',
      'Assuming Infrastructure as Code only applies to cloud resources — it applies equally to on-premises network device configuration.',
      'Assuming zero-touch provisioning means "no configuration exists" rather than "configuration is applied automatically, without a manual technician step."',
    ],
    keyTerms: [
      { term: 'Infrastructure as Code (IaC)', def: 'Defining configuration in machine-readable, version-controlled files instead of manual, by-hand commands.' },
      { term: 'Automation', def: 'A single task or script running without a human manually performing it.' },
      { term: 'Orchestration', def: 'Coordinating many automated tasks together, in the correct order, across multiple systems, to complete a larger workflow.' },
      { term: 'Zero-touch provisioning (ZTP)', def: 'A process letting a new device automatically retrieve its configuration and firmware on first boot, with no manual setup step.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'What does Infrastructure as Code (IaC) primarily change about network configuration?',
        options: [
          'It eliminates the need for any configuration at all.',
          'It defines configuration in versioned, reviewable files instead of manual, device-by-device commands.',
          'It only applies to wireless networks.',
          'It replaces the need for a network entirely.',
        ],
        correct: 1,
        explanation: 'IaC treats configuration like code: versioned, reviewable, and repeatable, instead of ad hoc manual changes.',
      },
      {
        prompt: 'What is the key difference between automation and orchestration?',
        options: [
          'They are the same concept with different names.',
          'Automation runs a single task without human intervention; orchestration coordinates many automated tasks together, in order, across systems.',
          'Orchestration only applies to a single device at a time.',
          'Automation always requires more human effort than orchestration.',
        ],
        correct: 1,
        explanation: 'Orchestration builds on automation by coordinating multiple automated tasks into one larger, ordered workflow.',
      },
      {
        prompt: 'What does zero-touch provisioning (ZTP) accomplish?',
        options: [
          'It requires a technician to manually configure every setting on-site.',
          'It lets a new device automatically retrieve its configuration and firmware on first boot, without manual setup.',
          'It only works for wireless access points.',
          'It replaces the need for any configuration file ever again.',
        ],
        correct: 1,
        explanation: 'ZTP automates the initial setup step itself, so a device configures itself the moment it is powered on and connected.',
      },
    ],
    miniScenario: {
      prompt: 'A company needs to deploy an identical baseline configuration to 200 branch routers without manually typing commands on each one, and wants every past configuration change to be reviewable, the way a software code change would be.',
      task: 'Name the two concepts from this lesson that together address this requirement, and explain what each one specifically contributes.',
    },
    recap:
      'Infrastructure as Code defines configuration in versioned, reviewable files instead of manual commands. Automation runs a single task without human intervention; orchestration coordinates many automated tasks together, in order, across systems. Zero-touch provisioning lets a new device configure itself automatically on first boot.',
    classroomAnswer:
      '"IaC makes configuration reviewable like code, automation removes the human from one task, orchestration lines up many of those tasks in the right order, and zero-touch provisioning means the new device does its own first-day setup without anyone plugging in a console cable."',
  };
  NetReady.LESSONS['10-8'] = {
    id: '10-8',
    moduleId: 10,
    slug: 'data-center-topologies-and-traffic-flows',
    title: 'Data Center Topologies and Traffic Flows: Spine-Leaf, Three-Tier, and North-South vs. East-West',
    estMinutes: 14,
    outcomes: [
      'Compare three-tier hierarchical, collapsed core, and spine-leaf topologies.',
      'Explain why spine-leaf predictably supports east-west traffic in modern data centers.',
      'Differentiate north-south traffic from east-west traffic and identify which one dominates in virtualized environments.',
    ],
    whyItMatters:
      'The topology decides how fast two servers can talk to each other, how easily you can add capacity, and what happens when a link fails — and the exam expects you to match a network design to the traffic pattern it must carry.',
    simpleEnglish:
      'A three-tier hierarchical design uses three layers: the access layer connects end devices, the distribution layer aggregates access switches and applies policy (including inter-VLAN routing), and the core layer provides a high-speed backbone between distribution blocks. A collapsed core combines the core and distribution functions into a single layer of switches, which is simpler and cheaper for smaller networks. Spine-leaf is a flat, two-layer design common in data centers: every leaf switch (where servers and storage connect) links to every spine switch, and there are no links between leaves or between spines, so any two servers are always the same predictable number of hops apart. Capacity grows by adding spines (more bandwidth between leaves) or leaves (more server ports). Traffic flow direction matters too. North-south traffic moves between the data center and the outside world, such as a user request arriving from the internet and the response going back out. East-west traffic moves between servers and virtual machines inside the data center, such as an application server querying a database server. Virtualization, containers, and distributed applications have made east-west traffic the dominant pattern in most modern data centers, which is why spine-leaf, with its predictable server-to-server paths, has become the common choice.',
    taglish:
      'Ang three-tier hierarchical design ay may tatlong layer: ang access layer na kumokonekta sa mga end device, ang distribution layer na nag-aaggregate ng access switch at nag-aapply ng policy (kasama ang inter-VLAN routing), at ang core layer na nagbibigay ng mabilis na backbone sa pagitan ng mga distribution block. Ang collapsed core naman ay pinagsasama ang core at distribution sa iisang layer ng switch, mas simple at mas mura para sa maliliit na network. Ang spine-leaf ay flat na two-layer design na karaniwan sa data center: bawat leaf switch (kung saan kumokonekta ang mga server at storage) ay konektado sa bawat spine switch, at walang direktang link sa pagitan ng mga leaf o ng mga spine, kaya palaging pare-pareho ang bilang ng hop sa pagitan ng dalawang server. Lumalaki ang capacity sa pamamagitan ng pagdaragdag ng spine (mas maraming bandwidth sa pagitan ng leaf) o leaf (mas maraming server port). Mahalaga rin ang direksyon ng traffic: ang north-south ay traffic papasok at palabas ng data center, tulad ng request mula sa internet at sagot pabalik; ang east-west naman ay traffic sa pagitan ng mga server at virtual machine sa loob mismo ng data center, tulad ng application server na nagtatanong sa database server. Dahil sa virtualization at containers, ang east-west na ang nangingibabaw sa karamihan ng modernong data center, kaya popular ang spine-leaf dahil predictable ang server-to-server na daan.',
    analogy: {
      title: 'Mall na may gitnang palengke: bawat tindahan konektado sa lahat ng bodega',
      text:
        'Isipin mo ang three-tier design parang isang malaking mall na may tatlong antas ng pamamahala: ang mga tindahan sa unahan (access), ang mga supervisor ng bawat sektor na nagkokontrol kung paano dumadaloy ang paninda (distribution), at ang central warehouse na nagbibigay ng bilis sa buong mall (core). Ang collapsed core ay parang maliit na palengke kung saan ang iisang tao na ang namamahala sa bodega at sa mga supervisor — mas mabilis at mas mura, pero mas malaking panganib kung siya ang mawala. Ang spine-leaf naman parang isang palengke kung saan bawat stall (leaf) ay may direktang daan papunta sa bawat central bodega (spine), kaya kahit saang stall ka galing o pupunta, palaging parehong bilang ng hakbang ang dadaanan mo — walang ibang stall na hahadlang. Ang north-south ay parang mga mamimiling galing sa labas ng mall na pumapasok at lumalabas; ang east-west ay parang paninda na inililipat ng mga tindera mismo sa pagitan ng stall nila — at sa mga modernong palengke, ito na ang pinakamaraming galaw.',
    },
    howItWorks: [
      'Three-tier hierarchical: access (end devices), distribution (aggregation, policy, inter-VLAN routing), and core (high-speed backbone) — a classic campus and enterprise design that scales by adding distribution blocks.',
      'Collapsed core: core and distribution combined into a single layer, which reduces cost and cabling for smaller sites at the expense of a larger failure domain.',
      'Spine-leaf: every leaf connects to every spine, with no leaf-to-leaf or spine-to-spine links, so any two endpoints are a consistent number of hops apart and performance is predictable.',
      'Scaling spine-leaf: add spine switches to increase bandwidth between leaves, or add leaf switches to increase the number of server or storage ports.',
      'North-south traffic: flows between the data center and external clients or the internet, typically passing through edge firewalls, load balancers, and routers.',
      'East-west traffic: flows between servers, VMs, and containers inside the data center, which in virtualized and microservice environments often carries the majority of total traffic.',
      'Mesh, star/hub-and-spoke, point-to-point, and hybrid designs are also valid topologies; the exam expects you to choose among them based on redundancy, cost, and the traffic pattern a scenario describes.',
    ],
    visual: {
      type: 'diagram',
      html: `<table class="lesson-table">
        <thead><tr><th>Design</th><th>Layers / Structure</th><th>Best Fit</th></tr></thead>
        <tbody>
          <tr><td>Three-tier hierarchical</td><td>Access, distribution, core</td><td>Large campus / enterprise LANs</td></tr>
          <tr><td>Collapsed core</td><td>Core and distribution combined</td><td>Small to medium sites</td></tr>
          <tr><td>Spine-leaf</td><td>Every leaf to every spine; no leaf-leaf links</td><td>Modern data centers, east-west heavy</td></tr>
        </tbody>
      </table>
      <p class="diagram-caption">North-south = data center &harr; outside world. East-west = server &harr; server inside the data center.</p>`,
    },
    realWorldExample:
      'A cloud provider builds its data center on spine-leaf so that a web application server on one rack reaches its database server on another rack through exactly the same predictable number of hops every time, and adding a new rack of servers only means adding leaf switches.',
    proTips: [
      'In a scenario asking which design handles lots of server-to-server traffic predictably, spine-leaf is almost always the correct answer — the "every leaf to every spine" rule is what makes that predictability possible.',
      'To tell north-south from east-west, ask whether the traffic is crossing the data center boundary (north-south) or staying inside it between internal systems (east-west).',
    ],
    examAlert:
      'Expect a question asking which topology minimizes and standardizes hop count between servers, or which traffic pattern dominates modern virtualized data centers — spine-leaf and east-west are the expected answers.',
    beginnerMistakes: [
      'Assuming spine-leaf includes links between leaf switches — it does not; traffic between leaves always transits a spine.',
      'Describing east-west traffic as "internet traffic" — east-west never leaves the data center; it moves between internal servers and VMs.',
      'Confusing collapsed core with a single switch — a collapsed core still has access switches; it only merges the core and distribution layers.',
    ],
    keyTerms: [
      { term: 'Three-tier hierarchical design', def: 'A network design with access, distribution, and core layers, common in large campus and enterprise LANs.' },
      { term: 'Collapsed core', def: 'A design where the core and distribution functions are combined into one layer, suited to smaller networks.' },
      { term: 'Spine-leaf', def: 'A flat, two-layer data center topology where every leaf switch connects to every spine switch.' },
      { term: 'North-south traffic', def: 'Traffic moving between a data center and external clients or the internet.' },
      { term: 'East-west traffic', def: 'Traffic moving between servers, VMs, or containers inside the same data center.' },
    ],
    knowledgeCheck: [
      {
        prompt: 'In a spine-leaf topology, which connections are present?',
        options: ['Every leaf connects to every other leaf', 'Every leaf connects to every spine, with no leaf-to-leaf links', 'Every spine connects to every other spine only', 'Each leaf connects only to one spine'],
        correct: 1,
        explanation: 'The defining rule of spine-leaf is that every leaf links to every spine, and no direct leaf-to-leaf or spine-to-spine links exist.',
      },
      {
        prompt: 'A web request arrives from a customer on the internet and is served by an application server inside the data center. Which traffic direction is the customer request?',
        options: ['East-west', 'North-south', 'Broadcast', 'Multicast'],
        correct: 1,
        explanation: 'Traffic entering and leaving the data center from external clients is north-south.',
      },
      {
        prompt: 'A small branch office wants a simple, lower-cost LAN design and accepts a larger failure domain. Which design fits best?',
        options: ['Spine-leaf', 'Collapsed core', 'Full mesh', 'Three-tier with four distribution blocks'],
        correct: 1,
        explanation: 'A collapsed core merges core and distribution into one layer, which is simpler and cheaper for small sites.',
      },
    ],
    miniScenario: {
      prompt: 'A data center is hosting hundreds of virtual machines that constantly exchange data with each other, and the team wants predictable latency between any two servers.',
      task: 'Name the topology that best fits, and state whether the dominant traffic pattern is north-south or east-west.',
    },
    recap:
      'Three-tier separates access, distribution, and core; collapsed core merges the top two layers for smaller sites; spine-leaf connects every leaf to every spine for predictable server-to-server paths. North-south traffic crosses the data center boundary; east-west traffic stays inside it and dominates in virtualized environments.',
    classroomAnswer:
      '"For a modern data center, I design spine-leaf for predictable east-west paths, and I always separate the north-south edge traffic from the internal server-to-server traffic when I plan capacity."',
  };

  NetReady.LESSONS['10-9'] = {
    id: '10-9',
    moduleId: 10,
    slug: 'connecting-to-the-cloud',
    title: 'Connecting to the Cloud: VPN, Private Links, and Hybrid Architectures',
    estMinutes: 13,
    outcomes: [
      `Compare internet-based VPN connections with dedicated private connections to a cloud provider.`,
      `Identify cloud gateway types and what each does.`,
      `Define hybrid cloud and multi-cloud.`,
      `Recognize common cloud connectivity problems such as overlapping address space.`,
    ],
    whyItMatters: `Almost every company now runs part of its network in a public cloud. The Network+ exam expects you to choose the right way to connect an office or data center to the cloud and to understand how cloud networks talk to each other.`,
    simpleEnglish: `There are three common ways to reach cloud resources. First, over the public internet, which is cheap and easy but has variable performance. Second, a site-to-site VPN, an encrypted IPsec tunnel over the internet to the provider's VPN gateway. Third, a dedicated private connection (products such as AWS Direct Connect or Azure ExpressRoute) that is a circuit through a carrier straight into the provider, with predictable latency and bandwidth. Private links are not encrypted by default, so security-minded organizations add a VPN or link encryption on top. Inside the cloud, gateways connect networks: an internet gateway for public access, a NAT gateway for outbound-only access from private subnets, a VPN gateway for tunnels, and a transit gateway to hub many networks together. A hybrid cloud mixes on-premises and cloud; multi-cloud uses more than one provider.`,
    taglish: `May tatlong paraan para makarating sa cloud: (1) diretso sa internet — mura pero hindi predictable ang bilis; (2) site-to-site VPN — naka-encrypt na tunnel sa ibabaw ng internet; (3) dedicated private link — parang sariling kalsada papunta sa cloud provider, mas stable ang latency at bandwidth pero mas mahal at hindi encrypted bilang default. Sa loob ng cloud, ang internet gateway ay pinto papunta sa internet, ang NAT gateway ay pinto palabas lang para sa private subnet, ang VPN gateway ang dulo ng tunnel, at ang transit gateway ang sentrong hub ng maraming network. Ang hybrid ay kombinasyon ng sariling data center at cloud; ang multi-cloud ay higit sa isang provider.`,
    analogy: {
      title: 'Kalsada, tunnel, at private expressway',
      text: `Ang public internet ay pambansang kalsada: libre pero minsan trapik. Ang VPN ay armored na sasakyan na dumadaan sa parehong kalsada. Ang dedicated private link ay sariling expressway na diretso sa gusali ng provider — walang trapik, pero may toll at kailangan mong ikandado ang sasakyan mo kung gusto mo ng dagdag na seguridad.`,
    },
    howItWorks: [
      `Internet access: simplest and cheapest; subject to congestion and no performance guarantee. Services are reached by public IP, so security relies on TLS and access controls.`,
      `Site-to-site VPN: IPsec tunnel from your edge router or firewall to the cloud VPN gateway. Quick to set up, encrypted, but performance depends on the internet path.`,
      `Dedicated private connection: a layer 2/3 circuit through a colocation facility or carrier directly to the cloud provider. Benefits: consistent latency, higher throughput, and lower data egress costs. It is NOT encrypted by default.`,
      `Client VPN or remote access VPN: individual users connect to the cloud network, often using SSL/TLS or IPsec clients.`,
      `Internet gateway: lets resources with public IPs reach and be reached from the internet. NAT gateway: lets private-subnet instances initiate outbound connections only. VPN gateway: terminates VPN tunnels. Transit gateway: a hub that connects many VPCs and on-premises links.`,
      `VPC peering: a direct private link between two virtual networks. Address ranges must NOT overlap, and peering is generally not transitive.`,
      `Private endpoints / private links: let you reach a cloud service (such as storage) using a private IP address inside your network instead of its public address.`,
      `Hybrid cloud: on-premises plus public cloud working together. Multi-cloud: using two or more public cloud providers. Both increase the importance of consistent IP planning, identity, and monitoring.`,
    ],
    visual: {
      type: 'diagram',
      html: `<div class="lesson-diagram" role="img" aria-label="Table comparing cloud connection methods">
        <div class="table-scroll"><table class="lesson-table">
          <thead><tr><th>Method</th><th>Path</th><th>Encrypted by default</th><th>Performance</th></tr></thead>
          <tbody>
            <tr><td>Internet</td><td>Public internet</td><td>Only via TLS</td><td>Variable</td></tr>
            <tr><td>Site-to-site VPN</td><td>IPsec over internet</td><td>Yes</td><td>Variable</td></tr>
            <tr><td>Dedicated private link</td><td>Carrier circuit</td><td>No</td><td>Predictable, high</td></tr>
            <tr><td>Client VPN</td><td>User to cloud over internet</td><td>Yes</td><td>Variable</td></tr>
          </tbody>
        </table></div>
      </div>`,
    },
    realWorldExample: `A company moves its database to the cloud but keeps the application servers on-premises. Queries across the internet VPN feel slow because latency varies throughout the day. They order a dedicated private connection for steady latency and keep the VPN as an encrypted backup path, a common hybrid design.`,
    proTips: [
      `"Consistent latency, not encrypted by default" is the signature of a dedicated private connection.`,
      `Plan non-overlapping IP ranges before connecting any two networks. Overlap is a classic reason peering and VPN routes fail.`,
      `A private subnet needs a NAT gateway (not an internet gateway) when its servers must download updates but must not accept inbound connections from the internet.`,
    ],
    examAlert: `Be ready to choose between VPN and a dedicated private connection based on requirements: lowest cost and quick = VPN, predictable performance = private link, outbound only for private subnets = NAT gateway, many VPCs to one hub = transit gateway.`,
    beginnerMistakes: [
      `Assuming a private circuit is automatically encrypted.`,
      `Using overlapping CIDR blocks in on-premises and cloud networks.`,
      `Mixing up an internet gateway (two-way public access) with a NAT gateway (outbound only).`,
    ],
    keyTerms: [
      { term: 'Site-to-site VPN', def: `Encrypted tunnel between your network and the cloud over the internet.` },
      { term: 'Dedicated private connection', def: `Provider circuit directly into a cloud network with predictable performance.` },
      { term: 'Transit gateway', def: `Hub that interconnects many virtual networks and on-premises links.` },
      { term: 'NAT gateway', def: `Allows private resources outbound internet access without inbound exposure.` },
      { term: 'Hybrid cloud', def: `Combination of on-premises infrastructure and public cloud.` },
      { term: 'Multi-cloud', def: `Use of multiple public cloud providers.` },
    ],
    knowledgeCheck: [
      {
        prompt: `A company needs predictable latency and high bandwidth to a cloud provider. Which option fits best?`,
        options: [`Client VPN`, `Dedicated private connection`, `Public internet only`, `Wi-Fi hotspot`],
        correct: 1,
        explanation: `Dedicated private links bypass the public internet for consistent performance.`,
      },
      {
        prompt: `Servers in a private subnet must download patches but must not be reachable from the internet. What should be used?`,
        options: [`Internet gateway with public IPs`, `NAT gateway`, `Transit gateway`, `Open security group`],
        correct: 1,
        explanation: `A NAT gateway permits outbound-initiated connections only.`,
      },
      {
        prompt: `Two networks with the same 10.0.0.0/16 range need to be connected. What is the problem?`,
        options: [
          `The VPN will use too much bandwidth.`,
          `Overlapping address space makes routing ambiguous.`,
          `TLS will not work.`,
          `Multicast will be blocked.`,
        ],
        correct: 1,
        explanation: `Overlapping CIDR blocks cannot be routed unambiguously between networks.`,
      },
    ],
    miniScenario: {
      prompt: `A branch office needs a cheap, encrypted connection to its cloud network by next week.`,
      task: `Which connection method would you choose, and why not a dedicated private link?`,
    },
    recap: `Reach the cloud over the internet, an IPsec site-to-site VPN, or a dedicated private link. Private links give predictable performance but are not encrypted by default. Gateways (internet, NAT, VPN, transit) control paths inside the cloud, and hybrid or multi-cloud designs need non-overlapping IP planning.`,
    classroomAnswer: `"VPN is quick and encrypted but rides the internet; a private link is steady but costs more and needs its own encryption."`,
  };

  NetReady.LESSONS['10-10'] = NetReady.lesson(10, {
    id: '10-10',
    slug: 'cloud-network-security-controls',
    title: 'Cloud Network Security Controls: Security Groups, NACLs, NSGs, DaaS, and Data Center Interconnect',
    minutes: 13,
    outcomes: [
      `Differentiate security groups, network ACLs, and network security groups.`,
      `Explain stateful versus stateless filtering in cloud networks.`,
      `Define DaaS and data center interconnect (DCI) and their network implications.`,
    ],
    why: `Cloud questions often ask where to place a rule: on the instance, on the subnet, or on a gateway. Knowing the layers of filtering makes the answer obvious.`,
    simple: `In a cloud virtual network (VPC or VNet), security is applied in layers. A security group is a virtual firewall attached to an instance or network interface; it is stateful (return traffic is allowed automatically) and uses only allow rules. A network ACL (NACL) applies at the subnet boundary; it is stateless (return traffic must be explicitly allowed) and can have allow and deny rules evaluated in order. Azure calls its equivalent a network security group (NSG), and some platforms call subnet-level rules security lists. Desktop as a Service (DaaS) delivers virtual desktops from the cloud to users on any device, which shifts network load to the user's internet connection. Data center interconnect (DCI) links data centers together, often with VXLAN or dedicated high-bandwidth links, to support replication and workload mobility.`,
    taglish: `Sa cloud, layered ang seguridad. Ang security group ay virtual firewall sa instance o network interface; stateful (awtomatikong pinapayagan ang sagot) at allow rules lang. Ang network ACL (NACL) ay sa subnet boundary; stateless (kailangang tahasang payagan ang pabalik na traffic) at may allow at deny na sinusunod ayon sa pagkakasunod. Ang tawag ng Azure ay NSG; sa ibang platform, security lists. Ang DaaS ay virtual desktop mula sa cloud para sa kahit anong device. Ang DCI ay pag-uugnay ng mga data center, madalas gamit ang VXLAN o dedicated na high-bandwidth link, para sa replication at paglipat ng workload.`,
    analogy: {
      title: 'Guwardiya sa gate ng subdivision at sa pinto ng bahay',
      text: `Ang NACL ay guwardiya sa gate ng subdivision: sinusuri ang bawat pasok at labas, walang alaala sa nakaraan (stateless). Ang security group ay lock sa pinto ng bahay mismo: kapag pinayagan mong lumabas ang isang tao, alam niyang puwedeng bumalik (stateful).`,
    },
    steps: [
      `Security group: attached to an instance or NIC; stateful; allow rules only (everything not allowed is denied); rules can reference other security groups; evaluated as a whole.`,
      `Network ACL: attached to a subnet; stateless, so you must allow both the request and the reply (including ephemeral ports 1024 to 65535); has numbered allow and deny rules processed from lowest number to highest; the first match wins.`,
      `NSG (Azure): similar to a security group but can be attached to a subnet or a NIC and has allow and deny rules with priorities.`,
      `Layering: traffic is checked at the subnet (NACL) and then at the instance (security group). Use NACLs for broad subnet-level blocks (for example deny a malicious IP range) and security groups for application-specific rules.`,
      `Other cloud controls: route tables decide where traffic goes; internet gateways and NAT gateways control internet access; private endpoints keep traffic off the internet; flow logs record accepted and rejected traffic for troubleshooting and auditing.`,
      `DaaS: virtual desktops hosted in the cloud and delivered by a remote display protocol. Needs good bandwidth and low latency to users; supports BYOD and remote work; data stays in the cloud rather than on the endpoint.`,
      `Data center interconnect: connects two or more data centers using dark fiber, DWDM, MPLS, or VXLAN/EVPN overlays so Layer 2 or Layer 3 networks can extend between sites for disaster recovery and workload migration.`,
      `Shared responsibility: the provider secures the underlying infrastructure; the customer secures configuration, rules, identities, and data.`,
    ],
    table: {
      label: 'Table comparing security groups and network ACLs',
      head: ['', 'Security group', 'Network ACL'],
      rows: [
        ['Applies to', 'Instance or NIC', 'Subnet'],
        ['State', 'Stateful', 'Stateless'],
        ['Rule types', 'Allow only', 'Allow and deny'],
        ['Evaluation', 'All rules together', 'In numbered order, first match'],
        ['Return traffic', 'Automatic', 'Must be allowed explicitly'],
      ],
      caption: 'Security groups guard the instance; NACLs guard the subnet.',
    },
    example: `A web server in a cloud subnet is reachable by HTTPS but not by users in one country that generates attacks. The team adds a deny rule for that country's IP ranges in the subnet NACL, and leaves the security group allowing TCP 443 from anywhere else.`,
    tips: [
      `Stateless NACLs need rules in BOTH directions; forgetting ephemeral ports is a classic cause of broken return traffic.`,
      `Need to explicitly deny something? A security group cannot; use a NACL or firewall.`,
      `Use flow logs first when troubleshooting "why is this traffic blocked in the cloud".`,
    ],
    exam: `Remember stateful security group at the instance, stateless NACL at the subnet, NSG as the Azure equivalent. Know that DaaS provides cloud-hosted desktops and DCI links data centers.`,
    mistakes: [
      `Expecting a security group to deny traffic explicitly.`,
      `Forgetting return traffic rules on a stateless NACL.`,
      `Assuming the cloud provider is responsible for customer rules.`,
    ],
    terms: [
      { term: 'Security group', def: `Stateful, allow-only virtual firewall attached to an instance or NIC.` },
      { term: 'Network ACL', def: `Stateless, ordered allow and deny rules applied at a subnet.` },
      { term: 'NSG', def: `Azure network security group, a rule set attached to a subnet or NIC.` },
      { term: 'DaaS', def: `Desktop as a Service, virtual desktops delivered from the cloud.` },
      { term: 'DCI', def: `Data center interconnect linking data centers.` },
      { term: 'Flow logs', def: `Records of accepted and rejected network flows in a cloud network.` },
    ],
    checks: [
      {
        prompt: `Which cloud control is stateless and applied at the subnet boundary?`,
        options: [`Security group`, `Network ACL`, `Route table`, `NAT gateway`],
        correct: 1,
        explanation: `NACLs are stateless and attached to subnets.`,
      },
      {
        prompt: `You need to block one specific IP address range from reaching a subnet. Which control supports an explicit deny?`,
        options: [`Security group`, `Network ACL`, `Elastic IP`, `Tag policy`],
        correct: 1,
        explanation: `Security groups are allow-only; NACLs support deny rules.`,
      },
      {
        prompt: `What does DaaS provide?`,
        options: [`Cloud-hosted virtual desktops`, `Dynamic DNS`, `Dual-stack addressing`, `Dense wavelength multiplexing`],
        correct: 0,
        explanation: `Desktop as a Service delivers virtual desktops from the cloud.`,
      },
    ],
    mini: {
      prompt: `An app works in one cloud subnet but replies are dropped after you add a custom NACL.`,
      task: `What is the likely missing rule?`,
    },
    recap: `Layer cloud security: NACLs at the subnet (stateless, allow and deny) and security groups at the instance (stateful, allow-only). NSG is Azure's term. DaaS hosts desktops in the cloud and DCI links data centers.`,
    classroom: `"Security group sa pinto, NACL sa gate. Stateful ang una, stateless ang pangalawa."`,
  });

  NetReady.LESSONS['10-11'] = NetReady.lesson(10, {
    id: '10-11',
    slug: 'iac-playbooks-drift-and-compliance',
    title: 'Infrastructure as Code in Practice: Playbooks, Templates, Configuration Drift, and Dynamic Inventories',
    minutes: 13,
    outcomes: [
      `Explain playbooks, templates, and reusable tasks in network automation.`,
      `Define configuration drift and how automation detects and corrects it.`,
      `Describe dynamic inventories, compliance checking, and automated upgrades.`,
    ],
    why: `The modern-environments objective names these terms specifically. Knowing the vocabulary lets you answer "which concept prevents manual changes from breaking consistency?" instantly.`,
    simple: `With Infrastructure as Code (IaC), network configuration is stored as text files in version control and applied by tools. A template is a reusable configuration with placeholders (for example a VLAN number) filled with variables. A playbook is an ordered set of automation tasks, such as "create VLAN, configure trunk, verify". Reusable tasks (roles or modules) can be shared across playbooks. Configuration drift happens when a device's real configuration slowly differs from its intended configuration because of manual changes. Automation compares actual to desired state, reports compliance, and can push the correct configuration back. A dynamic inventory builds the list of devices automatically from a source of truth such as a cloud API, rather than a hand-edited file. Automated upgrades roll out firmware in stages with tests before and after.`,
    taglish: `Sa IaC, ang configuration ng network ay nasa text files sa version control at ina-apply ng mga tool. Ang template ay reusable na configuration na may placeholders (halimbawa, VLAN number) na pinupunan ng variables. Ang playbook ay sunud-sunod na automation tasks, gaya ng "gumawa ng VLAN, i-configure ang trunk, i-verify". Ang reusable tasks (roles o modules) ay puwedeng gamitin sa maraming playbook. Ang configuration drift ay kapag unti-unting nagkakaiba ang aktuwal na config at ang dapat na config dahil sa manual na pagbabago. Ikinukumpara ng automation ang aktuwal sa dapat, nagre-report ng compliance, at puwedeng ibalik ang tamang config. Ang dynamic inventory ay awtomatikong gumagawa ng listahan ng device mula sa source of truth, gaya ng cloud API. Ang automated upgrades ay paunti-unting rollout ng firmware na may test bago at pagkatapos.`,
    analogy: {
      title: 'Resipi at kusinero',
      text: `Ang template ay resipi na may blangko para sa dami (variables). Ang playbook ay buong menu na may hakbang. Ang drift ay kapag may kusinerong nagdagdag ng sariling asin at hindi na pareho ang lasa sa bawat sangay. Ang compliance check ay manager na tumitikim at nagsasabing ibalik sa resipi.`,
    },
    steps: [
      `Source of truth: a single trusted record of how the network should be (device inventory, IP plan, VLANs), usually in version control or an IPAM/CMDB. Everything else is generated from it.`,
      `Templates: files (often Jinja2 or YAML-based) with variables. One interface template can configure hundreds of ports with different VLANs and descriptions.`,
      `Playbooks: ordered tasks written in a declarative format (for example Ansible YAML). Idempotent tasks can be run repeatedly and leave the device in the same final state without causing extra changes.`,
      `Reusable tasks: roles, modules, and functions shared across playbooks, reducing duplication and errors.`,
      `Configuration drift: caused by emergency manual fixes and untracked changes. Consequences: inconsistent security settings, hard-to-reproduce faults, and failed audits.`,
      `Compliance and drift detection: the tool periodically pulls device configs and compares them to the desired state or a security baseline (for example "SSH only, no Telnet; NTP configured"). Non-compliant devices are reported or remediated automatically.`,
      `Dynamic inventory: the list of managed devices is pulled from a system such as a cloud provider API, controller, or CMDB at run time, so newly created devices are included automatically.`,
      `Upgrades: automation can back up configs, stage firmware, upgrade in rolling waves (one site or one half of a redundant pair at a time), run post-checks, and roll back on failure.`,
      `Version control and change management: store automation in Git, require peer review, tie runs to approved change tickets, and keep an audit trail.`,
      `Benefits: speed, consistency, fewer human errors, repeatability, easier disaster recovery. Risks: a faulty template can break many devices at once, so test in a lab and use staged rollouts.`,
    ],
    table: {
      label: 'Table of IaC terms',
      head: ['Term', 'Meaning'],
      rows: [
        ['Template', 'Reusable configuration with variables'],
        ['Playbook', 'Ordered set of automation tasks'],
        ['Reusable task / role', 'Shared building block used in many playbooks'],
        ['Configuration drift', 'Actual config slowly differs from the intended config'],
        ['Compliance check', 'Comparing configs to a baseline or desired state'],
        ['Dynamic inventory', 'Device list generated automatically from a live source'],
        ['Idempotent', 'Running again produces no extra change'],
      ],
      caption: 'Desired state in code; automation keeps reality matching it.',
    },
    example: `An audit finds that 12 of 400 branch switches still allow Telnet because engineers enabled it during old outages. A compliance playbook scans every switch nightly, flags the drift, and reapplies the baseline template with SSH only. The next audit passes with zero findings.`,
    tips: [
      `"Manual changes caused inconsistency" = configuration drift.`,
      `"Same result no matter how many times it runs" = idempotent.`,
      `Test automation in a lab and roll out in stages; a bad template scales mistakes quickly.`,
    ],
    exam: `Know the vocabulary: IaC, templates, playbooks, reusable tasks, configuration drift, compliance checking, dynamic inventory, and automated upgrades, and that automation saves time and reduces errors.`,
    mistakes: [
      `Making emergency manual changes and never updating the source of truth.`,
      `Pushing an untested template to all devices at once.`,
      `Treating a static hand-edited device list as an inventory source of truth.`,
    ],
    terms: [
      { term: 'Playbook', def: `Ordered set of automation tasks applied to devices.` },
      { term: 'Template', def: `Reusable configuration with variables.` },
      { term: 'Configuration drift', def: `Divergence between actual and intended configuration.` },
      { term: 'Dynamic inventory', def: `Automatically generated list of managed devices.` },
      { term: 'Idempotent', def: `Producing the same final state no matter how many times it is run.` },
    ],
    checks: [
      {
        prompt: `Over time, hand-made changes make switch configurations differ from the approved baseline. What is this called?`,
        options: [`Configuration drift`, `Jitter`, `Convergence`, `Multitenancy`],
        correct: 0,
        explanation: `Drift is the gradual divergence of real configuration from the intended state.`,
      },
      {
        prompt: `Which automation concept builds the list of devices from a live source such as a cloud API?`,
        options: [`Dynamic inventory`, `Static route`, `Port mirror`, `Beacon`],
        correct: 0,
        explanation: `Dynamic inventories discover devices at run time instead of using a fixed file.`,
      },
      {
        prompt: `A task that can be run repeatedly without causing extra changes is called what?`,
        options: [`Idempotent`, `Asymmetric`, `Stateless`, `Redundant`],
        correct: 0,
        explanation: `Idempotent operations converge to the same state when repeated.`,
      },
    ],
    mini: {
      prompt: `A team wants a nightly check that every router matches the company's security baseline.`,
      task: `Which two IaC ideas apply?`,
    },
    recap: `IaC keeps the desired network state in code: templates fill in variables, playbooks run ordered tasks, compliance checks detect drift, dynamic inventories keep device lists current, and staged automated upgrades reduce risk.`,
    classroom: `"Kapag nasa code ang tamang config, madali mong mahuhuli kung sino ang lumihis."`,
  });

  NetReady.LESSONS['10-12'] = NetReady.lesson(10, {
    id: '10-12',
    slug: 'storage-networking-nas-san-iscsi-fc',
    title: 'Storage Networking: NAS, SAN, iSCSI, Fibre Channel, FCoE, and File Protocols',
    minutes: 13,
    outcomes: [
      `Differentiate file-level storage (NAS) from block-level storage (SAN).`,
      `Describe iSCSI, Fibre Channel, and FCoE and what network each uses.`,
      `Recognize file-sharing protocols (SMB, NFS) and their ports.`,
    ],
    why: `Servers and virtual machines depend on storage networks. The exam tests whether you can tell NAS from SAN and match the transport to the description.`,
    simple: `Network-attached storage (NAS) shares files over the regular network using file protocols such as SMB (Windows) and NFS (Unix and Linux); users see folders and files. A storage area network (SAN) provides raw block storage to servers over a dedicated, high-speed network, so the server treats the storage like a local disk. SANs commonly run on Fibre Channel (FC), a specialized lossless network with its own switches, HBAs (host bus adapters), and WWN addresses. iSCSI carries SCSI block commands over ordinary IP and Ethernet (TCP port 3260), which is cheaper and uses familiar equipment. FCoE (Fibre Channel over Ethernet) carries Fibre Channel frames over lossless Ethernet to converge LAN and SAN cabling.`,
    taglish: `Ang NAS ay nagbabahagi ng files sa karaniwang network gamit ang SMB (Windows) at NFS (Unix/Linux); folders at files ang nakikita ng user. Ang SAN ay nagbibigay ng block storage sa mga server sa hiwalay at mabilis na network, kaya parang lokal na disk ang tingin ng server. Karaniwang Fibre Channel (FC) ang SAN: espesyal na lossless na network na may sariling switch, HBA, at WWN. Ang iSCSI ay SCSI commands sa pamamagitan ng IP at Ethernet (TCP 3260) — mas mura at pamilyar na gamit. Ang FCoE ay Fibre Channel frames sa lossless Ethernet para pagsamahin ang LAN at SAN cabling.`,
    analogy: {
      title: 'Aklatan at bodega ng mga bakanteng estante',
      text: `Ang NAS ay aklatan: humihingi ka ng "aklat na ito" (file) at ibibigay sa iyo. Ang SAN ay bodega ng mga bakanteng estante na ibinibigay sa iyo nang buo (block): ikaw na ang bahalang mag-organisa kung ano ang ilalagay. Ang Fibre Channel ay sariling daanan papunta sa bodega; ang iSCSI ay dumadaan sa karaniwang kalsada ng lungsod.`,
    },
    steps: [
      `NAS: a file server appliance on the LAN. Access is file-level (the NAS manages the file system). Protocols: SMB/CIFS (TCP 445), NFS (TCP/UDP 2049), and sometimes FTP or HTTPS. Easy to set up; good for shared documents and backups.`,
      `SAN: block-level storage presented to servers as raw disks (LUNs, logical unit numbers). The server formats and manages the file system. Needed for databases and virtualization clusters that need performance and shared disks.`,
      `Fibre Channel: dedicated fabric with FC switches and HBAs; speeds such as 16, 32, and 64 Gbps; devices identified by WWNs (World Wide Names); zoning controls which hosts see which storage. Lossless and low latency, but specialized and costly.`,
      `iSCSI: SCSI over TCP/IP, port 3260. Initiators (servers) connect to targets (storage). Use a dedicated VLAN or network, jumbo frames, and multipathing for performance and redundancy. CHAP authentication is common.`,
      `FCoE: encapsulates FC frames in Ethernet frames, requiring a lossless Ethernet (Data Center Bridging with priority flow control). It is not routable like IP. Used to reduce cabling by sharing 10 GbE adapters (CNAs) for LAN and SAN traffic.`,
      `Other terms: DAS (direct-attached storage) is plugged directly into one server; object storage (such as cloud buckets) is accessed over HTTP APIs; unified storage can present both file and block.`,
      `Network design points: separate storage traffic, use redundant paths (multipathing), enough bandwidth, low latency, and consider MTU consistency end to end if using jumbo frames.`,
      `Troubleshooting: slow storage can come from congestion, duplex or MTU mismatch, a failed path, or incorrect zoning/LUN masking.`,
    ],
    table: {
      label: 'Table comparing NAS and SAN',
      head: ['', 'NAS', 'SAN'],
      rows: [
        ['Access level', 'File-level', 'Block-level'],
        ['Protocols', 'SMB, NFS', 'Fibre Channel, iSCSI, FCoE'],
        ['Network', 'Regular LAN', 'Dedicated storage network (or dedicated VLAN)'],
        ['Server sees', 'Shared folders', 'A local-looking disk (LUN)'],
        ['Typical use', 'File shares, backups', 'Databases, virtualization clusters'],
      ],
      caption: 'Files for NAS, blocks for SAN.',
    },
    example: `A virtualization cluster needs shared storage so VMs can move between hosts. The team chooses an iSCSI SAN on a dedicated VLAN with jumbo frames and two paths per host. A separate NAS holds department file shares over SMB.`,
    tips: [
      `"Shared folders over the LAN" = NAS. "Raw disk presented to a server" = SAN.`,
      `iSCSI uses TCP 3260; SMB uses TCP 445; NFS uses 2049.`,
      `If a storage link is slow, check MTU, duplex, and path redundancy first.`,
    ],
    exam: `Match: NAS = file-level over IP, SAN = block-level, Fibre Channel = dedicated lossless storage network, iSCSI = SCSI over IP, FCoE = FC over Ethernet, and the file protocols SMB and NFS.`,
    mistakes: [
      `Saying a NAS provides block storage.`,
      `Running iSCSI on the same congested VLAN as user traffic.`,
      `Assuming FCoE can be routed across a WAN like IP.`,
    ],
    terms: [
      { term: 'NAS', def: `Network-attached storage that serves files over the LAN.` },
      { term: 'SAN', def: `Storage area network providing block-level storage.` },
      { term: 'iSCSI', def: `Block storage protocol carried over IP (TCP 3260).` },
      { term: 'Fibre Channel', def: `Dedicated high-speed storage networking technology.` },
      { term: 'FCoE', def: `Fibre Channel frames carried over lossless Ethernet.` },
      { term: 'LUN', def: `Logical unit number identifying a block storage volume.` },
    ],
    checks: [
      {
        prompt: `Which storage type presents raw block storage to servers so they see it like a local disk?`,
        options: [`NAS`, `SAN`, `CDN`, `NAT gateway`],
        correct: 1,
        explanation: `A SAN provides block-level storage; a NAS provides file-level shares.`,
      },
      {
        prompt: `Which protocol carries SCSI commands over standard IP networks?`,
        options: [`iSCSI`, `SMB`, `SNMP`, `NTP`],
        correct: 0,
        explanation: `iSCSI encapsulates SCSI commands in TCP/IP, typically on port 3260.`,
      },
      {
        prompt: `Which two protocols are most associated with NAS file sharing?`,
        options: [`SMB and NFS`, `BGP and OSPF`, `SIP and RTP`, `LACP and STP`],
        correct: 0,
        explanation: `SMB (Windows) and NFS (Unix/Linux) are common NAS file-sharing protocols.`,
      },
    ],
    mini: {
      prompt: `A team wants to reduce cabling by running LAN and storage traffic on the same 10 GbE adapters while keeping Fibre Channel semantics.`,
      task: `Which technology is this, and what must the Ethernet fabric provide?`,
    },
    recap: `NAS shares files over the LAN with SMB or NFS; SANs deliver block storage using Fibre Channel, iSCSI, or FCoE. Keep storage traffic separate, redundant, and consistent in MTU.`,
    classroom: `"Files ang NAS, blocks ang SAN. Pareho silang storage, magkaiba lang ang antas."`,
  });

  NetReady.LESSONS['10-13'] = NetReady.lesson(10, {
    id: '10-13',
    slug: 'source-control-git-for-network-engineers',
    title: 'Source Control for Network Automation: Git, Repositories, Branching, and Resolving Conflicts',
    minutes: 17,
    outcomes: [
      `Explain version control, a central repository, commits, branches, and merges.`,
      `Follow a safe change workflow: branch, edit, review, merge, deploy.`,
      `Identify and resolve a merge conflict.`,
      `Explain why configurations and automation belong in source control.`,
    ],
    why: `The modern-environments objective lists source control with version control, a central repository, conflict identification, and branching next to infrastructure as code. Network teams that store configurations and playbooks in Git get history, review, and rollback for free.`,
    simple: `Source control (version control) records every change to a set of files: who changed what, when, and why. In Git, a repository holds the files and their full history. A commit is a saved snapshot with a message. A branch is a separate line of work, so you can try a change without touching the main, production-ready version. When the change is reviewed and approved, you merge the branch back. A central repository on a service such as GitHub or GitLab lets a team share work: you clone it to your computer, push your commits, and pull others' changes. If two people change the same lines, Git cannot decide which is right, and a merge conflict must be resolved by a person.`,
    taglish: `Ang source control (version control) ay nagtatala ng bawat pagbabago sa mga file: sino, ano, kailan, at bakit. Sa Git, ang repository ay may mga file at buong history nila. Ang commit ay naka-save na snapshot na may mensahe. Ang branch ay hiwalay na linya ng trabaho, kaya puwede kang sumubok ng pagbabago nang hindi ginagalaw ang main na bersyon. Kapag na-review at aprubado, i-merge pabalik. Ang central repository sa GitHub o GitLab ang nagpapahintulot sa team na magbahagi: i-clone mo, i-push ang commits mo, at i-pull ang sa iba. Kapag dalawang tao ang nagbago ng parehong linya, hindi makapagpapasya ang Git; ang tao ang dapat mag-resolve ng merge conflict.`,
    analogy: {
      title: 'Google Docs na may history, at kopya para sa eksperimento',
      text: `Isipin ang dokumento na may buong history ng bawat bersyon (commits). Gusto mong subukan ang bagong ayos kaya gumawa ka ng kopya (branch). Kapag maganda, ipapasok mo ito sa orihinal (merge). Kapag dalawang tao ang nag-edit ng parehong pangungusap sa magkaibang kopya, kailangang mag-usap at pumili kung alin ang tama (conflict).`,
    },
    steps: [
      `Why network teams use it: every device configuration, template, playbook, and diagram is text. In Git you get a full history, an audit trail, peer review, the ability to roll back to a known good state, and a single source of truth for automation.`,
      `Core terms: repository (the project and its history), working copy (files on your computer), commit (snapshot with message and author), branch (a movable pointer to a line of commits), main (the production-ready branch), tag (a label for a version such as a release), remote (the shared central repository).`,
      `Everyday commands: git clone (copy a remote repository), git status, git add (stage changes), git commit (save a snapshot), git push (send commits to the remote), git pull (fetch and merge others' changes), git log (history), git diff (what changed).`,
      `Branching workflow: create a branch for each change (for example feature/add-vlan-30), commit your work there, push it, open a pull request (or merge request) so a colleague reviews it, run automated checks, then merge to main. Main always represents what should be deployed.`,
      `Merge conflicts: when two branches change the same lines, Git marks the file with conflict markers, and a person must choose or combine the correct content, remove the markers, commit the result, and complete the merge. Frequent pulls and small changes reduce conflicts.`,
      `Rollback: git revert creates a new commit that undoes an earlier one, preserving history; this is how you return to a known good configuration after a bad change.`,
      `Good practice: write clear commit messages, keep commits small, never store passwords, keys, or tokens in the repository (use a vault and a .gitignore file), protect the main branch (reviews required), and tie changes to change tickets.`,
      `Pipelines: a continuous integration system can lint templates, run tests in a lab, and then deploy approved changes from main, so every production change passes the same checks.`,
    ],
    deepDive: [
      {
        title: 'A safe change from start to finish',
        text: `Add VLAN 30 to a configuration template stored in a central repository. Every step is recorded and reviewable.`,
        code: `$ git clone https://git.example.com/netops/switch-configs.git
$ cd switch-configs
$ git checkout -b feature/add-vlan-30        # work on a branch, not on main
$ nano templates/access-switch.j2            # make the change
$ git diff                                   # review what changed
$ git add templates/access-switch.j2
$ git commit -m "Add VLAN 30 (GUEST) to access switch template. Ticket CHG-1042"
$ git push -u origin feature/add-vlan-30
  -> open a pull request; a teammate reviews; automated checks run
  -> after approval: merge into main; the pipeline deploys during the maintenance window`,
        note: `The branch protects production, the diff and review catch mistakes, and the commit message links the change to its ticket.`,
      },
      {
        title: 'A merge conflict, and how to resolve it',
        text: `Two engineers changed the same line of the same configuration file on different branches. Git stops the merge and marks the file.`,
        code: `$ git merge feature/new-mgmt-ip
Auto-merging switch1.cfg
CONFLICT (content): Merge conflict in switch1.cfg
Automatic merge failed; fix conflicts and then commit the result.

switch1.cfg now contains:
interface Vlan99
<<<<<<< HEAD
 ip address 10.1.99.1 255.255.255.0
=======
 ip address 10.1.99.2 255.255.255.0
>>>>>>> feature/new-mgmt-ip

Fix: decide which is correct (here 10.1.99.1 is the gateway; keep it), delete the markers:
interface Vlan99
 ip address 10.1.99.1 255.255.255.0

$ git add switch1.cfg
$ git commit                                  # completes the merge`,
        note: `Everything between <<<<<<< HEAD and ======= is your current branch; the part below it up to >>>>>>> is the incoming branch. Talk to the other author when it is not obvious.`,
      },
      {
        title: 'Undoing a bad change safely',
        code: `$ git log --oneline
a91c3e2 Change core uplink MTU to 9000   <-- caused the outage
7f20b4d Add VLAN 30 (GUEST)
$ git revert a91c3e2                      # new commit that reverses a91c3e2
$ git push origin main                    # pipeline redeploys the known good configuration`,
        note: `Revert preserves the history: you can see what went wrong and when it was fixed, which is better than silently overwriting.`,
      },
      {
        title: 'What belongs in the repository, and what does not',
        code: `Store in Git                          Do NOT store in Git
------------------------------------  ----------------------------------------
Config templates and golden configs   Passwords, SNMP communities, API tokens
Automation playbooks and scripts      Private keys and certificates
Network diagrams (source files)       Large binary firmware images (use artifact storage)
IP plan (as text/CSV/YAML)            Personal data
Documentation and runbooks            Generated output that can be rebuilt`,
      },
    ],
    table: {
      label: 'Table of Git terms',
      head: ['Term', 'Meaning'],
      rows: [
        ['Repository', 'Project files plus complete history'],
        ['Commit', 'Saved snapshot with a message'],
        ['Branch', 'Separate line of work'],
        ['Merge', 'Combine a branch into another'],
        ['Pull / merge request', 'Request for review before merging'],
        ['Conflict', 'Two changes to the same lines that need a human decision'],
        ['Remote / central repository', 'Shared copy on a server such as GitHub or GitLab'],
      ],
      caption: 'Branch, commit, review, merge.',
    },
    example: `A junior engineer pushes a change straight to the live router and drops a route; nobody knows what changed. After moving to Git, every change is a pull request: a colleague reviews the diff, a lab pipeline tests it, and when an outage later occurs the team uses git log and git revert to return to the last known good configuration in minutes.`,
    tips: [
      `Branch for every change; never commit directly to main.`,
      `Keep secrets out of the repository; if one is committed, rotate it, because history keeps it.`,
      `Small, frequent changes mean fewer and easier conflicts.`,
    ],
    exam: `Know the vocabulary: version control, central repository, branching, merging, commit, and conflict identification. Know that source control gives history, rollback, review, and a single source of truth for IaC, and that it complements configuration management and change control.`,
    mistakes: [
      `Committing passwords or keys to the repository.`,
      `Working directly on main without review.`,
      `Resolving a conflict by choosing a side without understanding the change.`,
    ],
    terms: [
      { term: 'Version control', def: `System that records changes to files over time so versions can be compared and restored.` },
      { term: 'Central repository', def: `Shared remote copy of a project used by a team.` },
      { term: 'Branch', def: `Independent line of changes that can later be merged.` },
      { term: 'Merge conflict', def: `Overlapping changes that Git cannot combine automatically.` },
      { term: 'Pull request', def: `Request to review and merge a branch.` },
      { term: 'Commit', def: `A recorded snapshot of changes with author and message.` },
    ],
    commands: [
      { os: 'Linux', cmd: 'git clone <url>', desc: `Copies a remote repository and its history to your computer.` },
      { os: 'Linux', cmd: 'git checkout -b feature/add-vlan-30', desc: `Creates and switches to a new branch for a change.` },
      { os: 'Linux', cmd: 'git diff', desc: `Shows exactly what changed before you commit.` },
      { os: 'Linux', cmd: 'git revert <commit>', desc: `Creates a new commit that undoes an earlier change.` },
    ],
    checks: [
      {
        prompt: `Why do network teams create a branch for each configuration change?`,
        options: [`To test and review a change without affecting the production version`, `To make the network faster`, `To avoid using commits`, `To change IP addresses automatically`],
        correct: 0,
        explanation: `Branches isolate changes until they are reviewed and merged.`,
      },
      {
        prompt: `Two engineers edit the same line of a configuration on different branches. What happens when they merge?`,
        options: [`A merge conflict that a person must resolve`, `Git deletes both changes`, `The newer change always wins silently`, `The device reboots`],
        correct: 0,
        explanation: `Git cannot decide between overlapping changes, so it marks a conflict for manual resolution.`,
      },
      {
        prompt: `Which item should NOT be stored in a Git repository?`,
        options: [`Plain-text passwords and API tokens`, `Configuration templates`, `Automation playbooks`, `Runbooks`],
        correct: 0,
        explanation: `Secrets belong in a vault; anything committed stays in the history.`,
      },
    ],
    mini: {
      prompt: `A bad change caused an outage and the team needs the previous configuration back right now while keeping a record of what happened.`,
      task: `Which Git action fits, and why not just delete the commit?`,
    },
    recap: `Git stores every configuration and automation file with history, branching, review, and rollback. Work on branches, review through pull requests, merge to main, resolve conflicts carefully, revert bad changes, and keep secrets out.`,
    classroom: `"Branch bago baguhin, review bago i-merge, at kapag sablay, revert — hindi burahin ang history."`,
  });

  NetReady.LESSONS['10-14'] = NetReady.lesson(10, {
    id: '10-14',
    slug: 'data-center-architecture-spine-leaf-and-facilities',
    title: 'Data Center Architecture: Three-Tier, Spine-Leaf, and Facilities',
    minutes: 16,
    outcomes: [
      `Compare the three-tier and spine-leaf designs.`,
      `Define north-south and east-west traffic.`,
      `Describe top-of-rack and end-of-row cabling.`,
      `Explain cooling, power, and fire protection in a data center.`,
    ],
    why: `Network+ expects you to recognize data center designs and their physical requirements. Spine-leaf, east-west traffic, top-of-rack switching, hot and cold aisles, and fire suppression are all vocabulary the exam uses.`,
    simple: `Traditional campus networks use three layers: core, distribution, and access. Modern data centers mostly send traffic between servers, so they use spine-leaf: every leaf switch connects to every spine switch, so any two servers are the same distance apart. Racks are arranged in hot and cold aisles to manage heat, and the room needs redundant power and gas-based fire suppression that will not destroy equipment.`,
    taglish: `Ang lumang disenyo ay tatlong layer: core, distribution, access. Sa modernong data center, madalas ay server-to-server ang daloy, kaya spine-leaf: bawat leaf ay konektado sa bawat spine, kaya pantay ang layo ng alinmang dalawang server. May hot at cold aisle para sa init, at gas na pamatay-apoy na hindi sisira sa kagamitan.`,
    analogy: {
      title: 'Mall na may escalator papunta sa bawat palapag',
      text: `Sa three-tier, para pumunta sa kabilang tindahan, akyat ka muna sa itaas at baba ulit. Sa spine-leaf, may direktang tulay mula sa bawat tindahan papunta sa bawat sentral na lobby, kaya pareho ang layo ng lahat.`,
    },
    steps: [
      `Three-tier model: access layer (connects servers and endpoints), distribution layer (aggregates access switches, applies policy, routing between VLANs), and core layer (fast backbone). A collapsed core combines distribution and core into one layer for smaller networks.`,
      `North-south traffic goes in and out of the data center (clients to servers, servers to the internet). East-west traffic moves between servers inside the data center (web to app to database, VM migration, storage). Virtualization and microservices made east-west the majority of traffic.`,
      `Spine-leaf: leaf switches connect to servers, spine switches connect only to leaves, and every leaf has a link to every spine. Servers on different leaves are always two hops apart (leaf, spine, leaf). It scales by adding leaves or spines, uses equal-cost multipath (ECMP) routing across all links, avoids Spanning Tree blocking, and gives predictable latency. Overlays such as VXLAN stretch Layer 2 segments across the fabric.`,
      `Top of rack (ToR): each rack holds its own switch, so servers use short patch cables and only uplinks leave the rack. End of row (EoR): servers connect over longer cables to a switch at the end of the row. Middle of row (MoR) is similar. ToR needs more switches but less cabling.`,
      `Rack basics: standard 19-inch rack, height in rack units (1U = 1.75 inches). Equipment mounts front and back with rails. Cable management arms and labeled patch panels keep airflow clear and make troubleshooting faster.`,
      `Cooling: arrange racks in hot aisle / cold aisle rows. Cold air enters the front of the equipment from the cold aisle, and hot air exhausts to the back into the hot aisle. Containment (a physical barrier) prevents mixing. Typical guidance is 64 to 80 degrees Fahrenheit (18 to 27 Celsius) at the intake and roughly 40 to 60 percent relative humidity. Too dry causes static electricity; too humid causes condensation and corrosion. Switch airflow direction (front to back or back to front) must match the aisle layout.`,
      `Power: redundant feeds (A and B) to dual power supplies, UPS (battery) for short outages, a generator for long ones, and PDUs in racks. Clean, monitored power prevents corruption and surprise reboots.`,
      `Fire protection: water sprinklers can destroy equipment, so data centers use clean agent gas systems (such as FM-200 or inert gas) or pre-action dry-pipe sprinklers that need two events (smoke detection and heat) before water flows. Detection includes smoke and very early smoke detection (VESDA).`,
      `Colocation (colo) rents space, power, cooling, and connectivity in someone else's data center. Related: SLA, cross-connects, and meet-me rooms. Tiers (Uptime Institute I to IV) describe redundancy; Tier IV is fault tolerant.`,
    ],
    deepDive: [
      {
        title: 'Why spine-leaf has predictable latency',
        text: `In a four-leaf, two-spine fabric, every leaf connects to both spines. A server on leaf 1 reaching a server on leaf 4 takes exactly leaf 1, spine, leaf 4 = three switches, and both spines give equal-cost paths. Losing one spine halves the cross-leaf capacity but does not break connectivity. Adding a third spine adds capacity with no redesign.`,
        code: `        Spine1        Spine2
        / | \ \      / | \ \
    Leaf1 Leaf2 Leaf3 Leaf4     (every leaf -> every spine)
     |      |     |     |
   servers servers servers servers

Any leaf to any leaf: Leaf -> Spine -> Leaf (same path length)
Leaf-to-leaf links: none. Spine-to-spine links: none.`,
        note: `Leaves do not link to each other, and spines do not link to each other. If you see leaf-to-leaf links, it is not a pure spine-leaf design.`,
      },
      {
        title: 'Calculating oversubscription',
        text: `A leaf has 48 server ports at 10 Gbps (480 Gbps) and 4 uplinks at 100 Gbps (400 Gbps). The ratio of downlink to uplink capacity is 480 to 400, or 1.2 to 1. Ratios of about 3 to 1 are common for general servers, while storage or AI clusters often need 1 to 1.`,
        code: `downlink = 48 x 10 Gbps  = 480 Gbps
uplink   =  4 x 100 Gbps = 400 Gbps
oversubscription = 480 / 400 = 1.2 : 1`,
      },
    ],
    table: {
      label: 'Three-tier versus spine-leaf design',
      head: ['Feature', 'Three-tier', 'Spine-leaf'],
      rows: [
        ['Best for', 'Campus, north-south traffic', 'Data center, east-west traffic'],
        ['Layers', 'Core, distribution, access', 'Spine and leaf only'],
        ['Path between servers', 'Varies, may go up to the core', 'Always leaf, spine, leaf'],
        ['Loop prevention', 'STP blocks redundant links', 'Routed fabric with ECMP, all links used'],
        ['Scaling', 'Upgrade the upper layers', 'Add leaves or spines'],
      ],
      caption: 'Spine-leaf is flat, predictable, and built for server-to-server traffic.',
    },
    example: `A hospital's new data center uses top-of-rack switches that uplink to two spines, with hot and cold aisle containment, dual A/B power feeds with a UPS and generator, and a clean agent fire system. Because patient systems move between virtual hosts constantly, east-west traffic is the majority.`,
    tips: [
      `East-west plus virtualization points to spine-leaf. Campus plus users points to three-tier.`,
      `Match switch airflow to the aisle. A switch that pulls hot air will overheat.`,
      `Water is the wrong answer for fire suppression in a server room unless it is a pre-action system.`,
    ],
    exam: `Be able to identify spine-leaf from its description (every leaf to every spine), define east-west versus north-south traffic, and choose appropriate fire suppression, cooling layout, and power redundancy.`,
    mistakes: [
      `Connecting leaf switches to each other and calling it spine-leaf.`,
      `Mounting equipment with intake and exhaust facing the wrong aisle.`,
      `Using wet sprinklers over live racks without pre-action control.`,
    ],
    terms: [
      { term: 'Spine-leaf', def: `Two-layer fabric where every leaf switch connects to every spine switch.` },
      { term: 'East-west traffic', def: `Traffic moving between servers inside the data center.` },
      { term: 'North-south traffic', def: `Traffic entering or leaving the data center.` },
      { term: 'Top of rack', def: `Design with a switch in each rack that uplinks to the fabric.` },
      { term: 'Hot aisle / cold aisle', def: `Rack layout that separates cold intake air from hot exhaust air.` },
      { term: 'Clean agent', def: `Gas fire suppression that leaves no residue on equipment.` },
      { term: 'Colocation', def: `Renting rack space, power, and connectivity in a provider data center.` },
    ],
    checks: [
      {
        prompt: `Which architecture connects every leaf switch to every spine switch so that any two servers are the same distance apart?`,
        options: [`Three-tier`, `Spine-leaf`, `Collapsed core`, `Star bus hybrid`],
        correct: 1,
        explanation: `Spine-leaf provides uniform, predictable paths and is built for east-west traffic.`,
      },
      {
        prompt: `Traffic between a web server VM and its database VM inside the same data center is called what?`,
        options: [`North-south traffic`, `East-west traffic`, `Out-of-band traffic`, `Backhaul traffic`],
        correct: 1,
        explanation: `Server-to-server traffic that stays inside the data center is east-west.`,
      },
      {
        prompt: `Which fire protection is best for protecting live server racks from damage by the extinguishing agent?`,
        options: [`Wet-pipe sprinklers over each rack`, `A clean agent gas system`, `A foam hose`, `Portable water extinguishers only`],
        correct: 1,
        explanation: `Clean agents such as FM-200 extinguish fire without water or residue that would damage equipment.`,
      },
    ],
    mini: {
      prompt: `A technician installs a switch whose fans pull air from the hot aisle, and it keeps overheating.`,
      task: `Explain the problem and give two ways to fix it.`,
    },
    recap: `Three-tier suits campus north-south traffic. Spine-leaf suits east-west data center traffic with equal paths and ECMP. Use ToR or EoR cabling, hot and cold aisles, redundant A/B power with UPS and generator, and clean agent fire suppression.`,
    classroom: `"Spine-leaf: bawat leaf sa bawat spine. East-west ang server sa server. Clean agent ang apoy, hindi tubig."`,
  });

  NetReady.LESSONS['10-15'] = NetReady.lesson(10, {
    id: '10-15',
    slug: 'storage-networking-das-nas-san-iscsi-and-fibre-channel',
    title: 'Storage Networking: DAS, NAS, SAN, iSCSI, and Fibre Channel',
    minutes: 15,
    outcomes: [
      `Compare DAS, NAS, and SAN.`,
      `Explain the difference between file-level and block-level storage.`,
      `Describe iSCSI, Fibre Channel, and FCoE.`,
      `Explain zoning, LUN masking, and multipathing.`,
    ],
    why: `Servers need storage, and how that storage is attached drives network design. The exam tests the difference between NAS and SAN, the names of the protocols, and which medium or port each uses.`,
    simple: `Direct-attached storage (DAS) is a disk inside or cabled to one server. A NAS is a file server on the network that shares folders. A SAN is a separate high-speed network that gives servers raw disk blocks, which the server formats as if the disk were local. SANs run over Fibre Channel or over Ethernet with iSCSI or FCoE.`,
    taglish: `Ang DAS ay disk na nakakabit sa isang server lang. Ang NAS ay file server sa network na nagse-share ng folders. Ang SAN ay hiwalay na mabilis na network na nagbibigay ng raw na disk blocks na ifo-format ng server na parang lokal na disk. Fibre Channel, iSCSI, o FCoE ang gamit.`,
    analogy: {
      title: 'Bodega, aparador, at bukas na lote',
      text: `Ang DAS ay aparador sa sarili mong kwarto. Ang NAS ay shared na aparador na may label ang bawat folder at may tagapamahala. Ang SAN ay bakanteng lote na ikaw mismo ang magtatayo ng estante: ikaw ang magpapasya kung paano gagamitin ang bawat bloke.`,
    },
    steps: [
      `DAS (direct-attached storage): internal or external drives connected by SATA, SAS, or USB to one host. Simple and fast but not shared.`,
      `NAS (network-attached storage): a device with its own operating system that shares files over a normal Ethernet network using file protocols: SMB/CIFS (Windows, TCP 445), NFS (UNIX and Linux, TCP/UDP 2049), and sometimes FTP or AFP. It provides file-level access: clients ask for a file by path.`,
      `SAN (storage area network): a dedicated network that provides block-level access. The server sees a LUN (logical unit number) as a local disk and puts its own file system on it. Used for databases and virtual machine storage because of speed and low latency.`,
      `Fibre Channel (FC): a dedicated, lossless storage network using FC switches, fiber cables, and HBAs (host bus adapters) in servers. Speeds of 8, 16, 32, 64 Gbps and up. Devices are identified by a WWN (World Wide Name); each port has a WWPN. It does not use IP.`,
      `iSCSI: carries SCSI commands inside TCP/IP (port 3260) over standard Ethernet. Cheaper than FC because it reuses Ethernet switches and cables. The server is the initiator and the storage array is the target, identified by an IQN (iSCSI Qualified Name). Best practice: a dedicated VLAN or network, jumbo frames (MTU 9000), and 10 Gbps or faster links.`,
      `FCoE (Fibre Channel over Ethernet): carries FC frames directly over Ethernet (EtherType 0x8906), not through IP, so it is not routable. It needs a lossless Ethernet fabric (Data Center Bridging with PFC) and a CNA (converged network adapter). It lets one cable carry LAN and SAN traffic.`,
      `Zoning (FC) is configured on the switch to control which initiators can see which targets. LUN masking is configured on the storage array to control which hosts can access which LUNs. Together they prevent one server from corrupting another's disk.`,
      `Multipathing (MPIO): two or more independent paths (separate adapters, switches, and controllers) between server and storage, for redundancy and load balancing. Loss of one path does not interrupt access.`,
      `Other terms: object storage (for example Amazon S3, accessed over HTTP APIs, used for backups and cloud data), InfiniBand (very high-speed low-latency link for clusters and HPC), and thin provisioning (allocating more logical space than physically exists).`,
    ],
    deepDive: [
      {
        title: 'The same file two ways',
        text: `With NAS, a user opens \\\\nas01\\finance\\budget.xlsx. The NAS owns the file system, permissions, and locking. With a SAN LUN, the server sees a blank 2 TB disk, formats it NTFS, and handles the files itself. The NAS cannot be used as a boot disk for a database the same way a LUN can.`,
        code: `NAS  (file level):   client -> SMB/NFS -> NAS file system -> disks
SAN  (block level):  server -> iSCSI/FC -> LUN (raw blocks) -> server's own file system`,
        note: `Remember: NAS = files, SAN = blocks. The exam often phrases it as "the host sees it as a local disk" for SAN.`,
      },
      {
        title: 'Why iSCSI traffic needs its own VLAN',
        text: `iSCSI is sensitive to delay and loss. If it shares a VLAN and uplink with user traffic, a large download can stall a database. Best practice puts iSCSI on its own VLAN with jumbo frames end to end, dedicated NICs, and two independent paths for multipathing. A mismatch in MTU anywhere on the path causes fragmentation or silent drops.`,
        code: `interface Gi1/0/10
  switchport access vlan 50       (iSCSI VLAN)
  mtu 9000                        (jumbo frames, set end to end)
  spanning-tree portfast`,
      },
    ],
    table: {
      label: 'Storage types compared',
      head: ['Type', 'Access level', 'Network and protocols'],
      rows: [
        ['DAS', 'Block, one host', 'SATA, SAS, USB'],
        ['NAS', 'File level', 'Ethernet, SMB (445), NFS (2049)'],
        ['SAN with Fibre Channel', 'Block level', 'Dedicated FC fabric, HBAs, WWN'],
        ['SAN with iSCSI', 'Block level', 'Ethernet, TCP 3260, IQN'],
        ['SAN with FCoE', 'Block level', 'Lossless Ethernet, CNA, EtherType 0x8906'],
      ],
      caption: 'NAS shares files; SAN presents disks.',
    },
    example: `A company runs its virtual machines on a SAN reached with iSCSI over a dedicated 25 Gbps VLAN with two paths for MPIO, and shares department folders from a NAS over SMB. Backups go to object storage in the cloud.`,
    tips: [
      `File-level equals NAS. Block-level equals SAN. A "LUN" is always a SAN term.`,
      `iSCSI uses TCP port 3260 and is routable. FCoE is not routable.`,
      `Zoning is on the FC switch. LUN masking is on the storage array.`,
    ],
    exam: `Distinguish NAS (file, SMB/NFS) from SAN (block), know iSCSI port 3260, Fibre Channel components (HBA, WWN), FCoE needs lossless Ethernet, and multipathing provides redundancy.`,
    mistakes: [
      `Calling a NAS a SAN because both are on a network.`,
      `Forgetting jumbo frames must match on every device along the iSCSI path.`,
      `Letting any server see all LUNs without masking.`,
    ],
    terms: [
      { term: 'NAS', def: `Network-attached storage that shares files over the network.` },
      { term: 'SAN', def: `Storage area network that provides block-level storage to servers.` },
      { term: 'LUN', def: `Logical unit number identifying a block volume presented to a server.` },
      { term: 'iSCSI', def: `Protocol that carries SCSI commands over TCP/IP, port 3260.` },
      { term: 'HBA', def: `Host bus adapter that connects a server to a Fibre Channel network.` },
      { term: 'WWN', def: `World Wide Name, the unique identifier of a Fibre Channel device or port.` },
      { term: 'Multipathing', def: `Using multiple independent paths to storage for failover and load sharing.` },
    ],
    checks: [
      {
        prompt: `A server must see storage as a locally attached disk that it can format with its own file system. Which technology provides this?`,
        options: [`NAS using SMB`, `SAN using block-level LUNs`, `An FTP server`, `A DNS server`],
        correct: 1,
        explanation: `A SAN provides block-level storage, which the server treats as a local disk.`,
      },
      {
        prompt: `Which TCP port does iSCSI use by default?`,
        options: [`445`, `2049`, `3260`, `3389`],
        correct: 2,
        explanation: `iSCSI uses TCP 3260. SMB is 445 and NFS is 2049.`,
      },
      {
        prompt: `Which technology lets one converged adapter carry both LAN and Fibre Channel traffic over Ethernet without using IP?`,
        options: [`iSCSI`, `NFS`, `FCoE`, `SMB`],
        correct: 2,
        explanation: `FCoE puts FC frames directly in Ethernet and requires a lossless fabric and a CNA.`,
      },
    ],
    mini: {
      prompt: `Two new servers can both see and mount the same LUN, and the file system gets corrupted.`,
      task: `Which two controls were missing, and where is each configured?`,
    },
    recap: `DAS is local, NAS shares files (SMB, NFS), and SAN delivers block storage over Fibre Channel, iSCSI (TCP 3260), or FCoE. Zoning and LUN masking restrict access, and multipathing provides redundancy.`,
    classroom: `"NAS ay files, SAN ay blocks. iSCSI ay port 3260 sa Ethernet. Zoning sa switch, masking sa storage."`,
  });

  NetReady.LESSONS['10-16'] = NetReady.lesson(10, {
    id: '10-16',
    slug: 'containers-kubernetes-serverless-and-virtual-networking',
    title: 'Containers, Kubernetes, Serverless, and Virtual Networking',
    minutes: 16,
    outcomes: [
      `Compare virtual machines and containers.`,
      `Explain how containers and Kubernetes pods get network connectivity.`,
      `Describe serverless computing.`,
      `Explain virtual switches, NIC teaming, and microsegmentation.`,
    ],
    why: `Modern networks carry traffic between containers, virtual machines, and cloud functions as often as between physical machines. The exam expects you to understand how virtual networking works and what each cloud-native term means.`,
    simple: `A virtual machine includes a whole operating system and runs on a hypervisor. A container shares the host's kernel and holds only the app and its libraries, so it starts in seconds and uses little memory. Kubernetes automates running many containers across many hosts. Serverless goes one step further: you upload a function and the provider runs it only when called. Inside the host, a virtual switch connects the virtual network cards to the physical network.`,
    taglish: `Ang VM ay may buong operating system. Ang container ay gumagamit ng kernel ng host kaya magaan at mabilis. Ang Kubernetes ang nag-aautomate ng maraming container. Ang serverless ay function lang na pinapatakbo ng provider kapag tinawag. Ang virtual switch ang nag-uugnay sa virtual NIC at sa pisikal na network.`,
    analogy: {
      title: 'Bahay, apartment unit, at hotel room service',
      text: `Ang VM ay buong bahay na may sariling pundasyon at kuryente. Ang container ay unit sa apartment na iisa ang pundasyon at tubo ng gusali. Ang serverless ay room service: umoorder ka lang kapag kailangan at nagbabayad ka lang sa nakonsumo.`,
    },
    steps: [
      `Hypervisors: Type 1 (bare metal, such as VMware ESXi, Microsoft Hyper-V, KVM) runs directly on hardware and is used in data centers. Type 2 (hosted, such as VirtualBox or VMware Workstation) runs on top of an operating system and is used on desktops.`,
      `Virtual switch (vSwitch): software switch in the hypervisor that connects virtual NICs (vNICs) to each other and to the physical NICs (uplinks). It supports VLANs through port groups, and a distributed switch spans many hosts for consistent policy. Traffic between two VMs on the same host and same VLAN never leaves the host.`,
      `Virtual network modes: bridged (VM appears on the physical LAN with its own IP), NAT (VM shares the host's address), host-only (VMs and host only), and internal. Choose by what must reach the VM.`,
      `Containers: packaged with an image, run by an engine such as Docker or containerd. They share the host kernel, so they are lighter than VMs but isolated less strongly. Docker network drivers: bridge (default, private network on the host with NAT), host (shares the host network stack), overlay (spans several hosts), and none.`,
      `Kubernetes (K8s): an orchestrator that schedules containers in pods across worker nodes. Each pod gets its own IP address. A Service gives a stable virtual IP and DNS name to a changing set of pods and load-balances across them. An Ingress controller exposes HTTP and HTTPS services to the outside. A CNI plugin provides pod networking, and network policies act as a firewall between pods.`,
      `Serverless / function as a service (FaaS), such as AWS Lambda, Azure Functions: code runs in response to events (an HTTP call, a file upload), scales automatically, and is billed per execution. There are no servers to patch, but you have limits on run time and rely on an API gateway for network access.`,
      `Microsegmentation: fine-grained firewall rules between workloads (even between two VMs on the same subnet), enforced in the hypervisor or the container network. It limits an attacker's lateral movement. It is a core part of zero trust.`,
      `NIC teaming / bonding: combining several physical NICs on a server for redundancy and bandwidth, similar to link aggregation. SR-IOV lets a physical NIC present virtual functions directly to VMs, bypassing the vSwitch for high performance. VNFs and NFV (network functions virtualization) run firewalls, routers, and load balancers as software on standard servers.`,
    ],
    deepDive: [
      {
        title: 'Following a request through Kubernetes',
        text: `A user opens https://shop.example.com. DNS points to the cloud load balancer in front of the Ingress controller. The Ingress forwards the request to the shop Service, which holds a stable virtual IP. The Service picks one of three healthy pods and sends the request to its pod IP. If a pod dies, the Service stops sending to it and Kubernetes starts a replacement with a new IP, but clients never notice.`,
        code: `Internet -> Load balancer -> Ingress controller
         -> Service "shop" (ClusterIP 10.96.12.5)
              -> Pod shop-a (10.244.1.7)
              -> Pod shop-b (10.244.2.4)
              -> Pod shop-c (10.244.1.9)`,
        note: `Pod IP addresses are temporary. That is why a Service gives a stable address and why you should never hard-code a pod IP.`,
      },
      {
        title: 'Docker bridge network and port publishing',
        text: `By default, containers join the docker0 bridge on a private subnet such as 172.17.0.0/16 and are not reachable from outside. Publishing a port with -p 8080:80 creates a NAT rule on the host that forwards host port 8080 to container port 80.`,
        code: `docker run -d --name web -p 8080:80 nginx
docker ps
CONTAINER ID  IMAGE  PORTS                   NAMES
a1b2c3d4e5f6  nginx  0.0.0.0:8080->80/tcp    web`,
      },
    ],
    table: {
      label: 'Virtual machines, containers, and serverless compared',
      head: ['Model', 'Includes', 'Start time and cost'],
      rows: [
        ['Virtual machine', 'Full guest OS on a hypervisor', 'Minutes, pay for the running VM'],
        ['Container', 'App and libraries, shares host kernel', 'Seconds, light on resources'],
        ['Serverless function', 'Only your code, provider runs it', 'Milliseconds, pay per execution'],
      ],
      caption: 'Moving right removes more of the stack you have to manage.',
    },
    example: `A retailer moves its web shop to Kubernetes. Three pods run behind a Service and an Ingress. Network policies allow only the shop pods to reach the payment database pod. Image resizing runs as a serverless function triggered by uploads to cloud storage.`,
    tips: [
      `Shares the host kernel equals container. Own kernel equals VM.`,
      `A Service gives a stable address; a pod IP is temporary.`,
      `Microsegmentation limits east-west attacks even inside one subnet.`,
    ],
    exam: `Be able to contrast VMs and containers, name Type 1 and Type 2 hypervisors, describe a vSwitch and port groups, define serverless and microsegmentation, and recognize NIC teaming and SR-IOV.`,
    mistakes: [
      `Thinking containers are fully isolated like VMs. They share the host kernel.`,
      `Hard-coding a pod IP address that changes when the pod restarts.`,
      `Forgetting that two VMs on one host can talk without the physical network, bypassing physical firewalls.`,
    ],
    terms: [
      { term: 'Hypervisor', def: `Software that creates and runs virtual machines.` },
      { term: 'vSwitch', def: `Software switch that connects virtual NICs to each other and to the physical network.` },
      { term: 'Container', def: `Lightweight packaged app that shares the host operating system kernel.` },
      { term: 'Kubernetes', def: `Platform that deploys, scales, and networks containers across many hosts.` },
      { term: 'Serverless', def: `Model where the provider runs your function on demand and bills per execution.` },
      { term: 'Microsegmentation', def: `Fine-grained workload-to-workload firewall policy.` },
      { term: 'SR-IOV', def: `Technology that gives VMs direct access to slices of a physical NIC.` },
    ],
    commands: [
      { os: 'Linux', cmd: 'docker network ls', desc: `Lists Docker networks such as bridge, host, and none.` },
      { os: 'Linux', cmd: 'kubectl get pods -o wide', desc: `Shows pods, their node, and their pod IP addresses.` },
      { os: 'Linux', cmd: 'kubectl get svc', desc: `Lists Services and their cluster IP and ports.` },
      { os: 'Linux', cmd: 'ip link show', desc: `Shows virtual interfaces and bridges such as docker0 and veth devices.` },
    ],
    checks: [
      {
        prompt: `Which statement about containers is correct?`,
        options: [`Each has its own full guest operating system kernel`, `They share the host operating system kernel`, `They require a Type 2 hypervisor`, `They cannot use networking`],
        correct: 1,
        explanation: `Containers share the host kernel, which makes them lightweight but less isolated than VMs.`,
      },
      {
        prompt: `In Kubernetes, what provides a stable IP address and DNS name in front of a changing set of pods?`,
        options: [`A Service`, `A node`, `A ConfigMap`, `A Dockerfile`],
        correct: 0,
        explanation: `A Service load-balances across matching pods and keeps a constant address as pods come and go.`,
      },
      {
        prompt: `Which technique restricts traffic between two workloads even if they are on the same subnet and host?`,
        options: [`Port mirroring`, `Microsegmentation`, `Link aggregation`, `Jumbo frames`],
        correct: 1,
        explanation: `Microsegmentation applies firewall policy between individual workloads, limiting lateral movement.`,
      },
    ],
    mini: {
      prompt: `A team hard-coded the IP of a database pod in their application. After a node restarted, the app broke.`,
      task: `What happened and what is the correct design?`,
    },
    recap: `VMs carry a full OS on a hypervisor, containers share the host kernel, and serverless runs code on demand. A vSwitch connects virtual NICs to uplinks; Kubernetes uses pods, Services, Ingress, and CNI networking. Microsegmentation limits lateral movement, and NIC teaming and SR-IOV improve host connectivity.`,
    classroom: `"Container ay nakikihati sa kernel. Service ang matatag na address ng mga pod. Microsegmentation ang harang sa gilid-gilid."`,
  });

}(window.NetReady));
