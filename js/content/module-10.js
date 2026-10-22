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
}(window.NetReady));
