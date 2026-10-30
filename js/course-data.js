/**
 * course-data.js — exam metadata and the full course roadmap.
 *
 * Editable in one place so a future exam revision only requires updating
 * this object. `status` on a module is one of:
 *   'available'   -> lessons exist in js/content/*.js and are unlocked
 *   'coming-soon' -> shown on the roadmap for transparency, not clickable
 *
 * We only ever render a lesson link for modules that are 'available' so the
 * UI never contains a dead or decorative button.
 */
(function (NetReady) {
  'use strict';

  // NOTE: verify against CompTIA's official N10-009 exam objectives page
  // before using this platform for a real exam attempt. Domain weights
  // below match the publicly posted N10-009 blueprint at time of writing.
  NetReady.EXAM_META = {
    code: 'N10-009',
    name: 'CompTIA Network+',
    versionNote:
      'Domain names and weights follow the N10-009 objectives. Re-check comptia.org before your exam date — CompTIA revises objectives roughly every 3 years.',
    domains: [
      { id: 'concepts', name: 'Networking Concepts', weight: 23, color: 'var(--accent-cyan)' },
      { id: 'implementation', name: 'Network Implementation', weight: 20, color: 'var(--accent-blue)' },
      { id: 'operations', name: 'Network Operations', weight: 19, color: 'var(--accent-green)' },
      { id: 'security', name: 'Network Security', weight: 14, color: 'var(--accent-amber)' },
      { id: 'troubleshooting', name: 'Network Troubleshooting', weight: 24, color: 'var(--accent-red)' },
    ],
  };

  NetReady.MODULES = [
    {
      id: 0,
      domain: null,
      title: 'Welcome, Exam Roadmap, and Study Setup',
      blurb: 'Simulahan natin dito — kung paano ka mag-aaral at ano ang inaasahan sa exam.',
      status: 'available',
      lessonIds: ['0-1', '0-2', '0-3', '0-4'],
    },
    {
      id: 1,
      domain: 'concepts',
      title: 'Networking From Absolute Zero',
      blurb: 'Ano nga ba talaga ang "network"? Magsisimula tayo sa pinaka-basic.',
      status: 'available',
      lessonIds: ['1-1', '1-2', '1-3', '1-4', '1-5'],
    },
    {
      id: 2,
      domain: 'concepts',
      title: 'OSI and TCP/IP Models',
      blurb: 'Ang "restaurant kitchen" ng networking — bawat layer may trabaho.',
      status: 'available',
      lessonIds: ['2-1', '2-2', '2-3', '2-4', '2-5', '2-6'],
    },
    {
      id: 3,
      domain: 'implementation',
      title: 'Ethernet, Cabling, and Physical Infrastructure',
      blurb: 'Mga kable, konektor, at ang mismong "kalsada" ng data.',
      status: 'available',
      lessonIds: ['3-1', '3-2', '3-3', '3-4', '3-5', '3-6', '3-7', '3-8', '3-9', '3-10', '3-11', '3-12'],
    },
    {
      id: 4,
      domain: 'implementation',
      title: 'IPv4 Addressing and Subnetting',
      blurb: 'Subnetting without the panic — step-by-step, may calculator ka pa.',
      status: 'available',
      lessonIds: ['4-1', '4-2', '4-3', '4-4', '4-5', '4-6', '4-7'],
    },
    {
      id: 5,
      domain: 'implementation',
      title: 'IPv6 Addressing',
      blurb: 'Ang "malaking address space" na kapalit ng IPv4.',
      status: 'available',
      lessonIds: ['5-1', '5-2', '5-3', '5-4', '5-5', '5-6'],
    },
    {
      id: 6,
      domain: 'implementation',
      title: 'Ports, Protocols, and Network Services',
      blurb: 'DNS, DHCP, HTTP/S, at ang mga "language" ng internet.',
      status: 'available',
      lessonIds: ['6-1', '6-2', '6-3', '6-4', '6-5', '6-6', '6-7', '6-8', '6-9', '6-10', '6-11', '6-12', '6-13'],
    },
    {
      id: 7,
      domain: 'implementation',
      title: 'Switching, VLANs, and Layer 2',
      blurb: 'Paano nag-uusap ang mga device sa parehong network.',
      status: 'available',
      lessonIds: ['7-1', '7-2', '7-3', '7-4', '7-5', '7-6', '7-7', '7-8', '7-9', '7-10', '7-11', '7-12'],
    },
    {
      id: 8,
      domain: 'implementation',
      title: 'Routing and Wide Area Networking',
      blurb: 'Paano naghahanap ng ruta ang data papunta sa ibang network.',
      status: 'available',
      lessonIds: ['8-1', '8-2', '8-3', '8-4', '8-5', '8-6', '8-7', '8-8', '8-9', '8-10', '8-11', '8-12'],
    },
    {
      id: 9,
      domain: 'implementation',
      title: 'Wireless Networking',
      blurb: 'Wi-Fi standards, channels, at pagpaplano ng coverage.',
      status: 'available',
      lessonIds: ['9-1', '9-2', '9-3', '9-4', '9-5', '9-6', '9-7', '9-8', '9-9', '9-10', '9-11', '9-12', '9-13', '9-14', '9-15', '9-16'],
    },
    {
      id: 10,
      domain: 'operations',
      title: 'Cloud, Virtualization, and Modern Architecture',
      blurb: 'IaaS/PaaS/SaaS, SDN, at ang "network sa cloud".',
      status: 'available',
      lessonIds: ['10-1', '10-2', '10-3', '10-4', '10-5', '10-6', '10-7', '10-8', '10-9', '10-10', '10-11', '10-12', '10-13', '10-14', '10-15', '10-16'],
    },
    {
      id: 11,
      domain: 'operations',
      title: 'Network Operations and Documentation',
      blurb: 'Diagrams, baselines, change management, disaster recovery.',
      status: 'available',
      lessonIds: ['11-1', '11-2', '11-3', '11-4', '11-5', '11-6', '11-7', '11-8', '11-9', '11-10', '11-11', '11-12', '11-13'],
    },
    {
      id: 12,
      domain: 'security',
      title: 'Network Security',
      blurb: 'CIA triad, AAA, firewalls, at karaniwang atake.',
      status: 'available',
      lessonIds: ['12-1', '12-2', '12-3', '12-4', '12-5', '12-6', '12-7', '12-8', '12-9', '12-10', '12-11', '12-12', '12-13', '12-14', '12-15', '12-16', '12-17', '12-18', '12-19'],
    },
    {
      id: 13,
      domain: 'troubleshooting',
      title: 'Troubleshooting Methodology and Tools',
      blurb: 'Ang tamang proseso kapag may sirang network.',
      status: 'available',
      lessonIds: ['13-1', '13-2', '13-3', '13-4', '13-5', '13-6', '13-7', '13-8', '13-9', '13-10', '13-11', '13-12', '13-13', '13-14', '13-15'],
    },
    {
      id: 14,
      domain: 'troubleshooting',
      title: 'Performance-Based Labs and Final Review',
      blurb: 'Pagsamahin ang lahat sa mga hands-on na simulation.',
      status: 'available',
      lessonIds: ['14-1', '14-2', '14-3'],
    },
    {
      id: 15,
      domain: 'troubleshooting',
      title: 'Case Files: Network Stories From the Field',
      blurb: 'Mga kuwento ng totoong problema, mula reklamo hanggang solusyon.',
      status: 'available',
      lessonIds: ['15-1', '15-2', '15-3', '15-4', '15-5', '15-6', '15-7'],
    },
    {
      id: 16,
      domain: 'implementation',
      title: 'Deep Dives: Worked Examples and Configuration Walkthroughs',
      blurb: 'Mas malalim: step-by-step na solusyon, config, at output.',
      status: 'available',
      lessonIds: ['16-1', '16-2', '16-3', '16-4', '16-5', '16-6', '16-7', '16-8', '16-9', '16-10'],
    },
  ];

  NetReady.getModule = (id) => NetReady.MODULES.find((m) => m.id === Number(id));

  NetReady.availableModules = () => NetReady.MODULES.filter((m) => m.status === 'available');

  NetReady.courseStats = function () {
    const available = NetReady.availableModules();
    const lessonCount = available.reduce((sum, m) => sum + m.lessonIds.length, 0);
    return {
      totalModulesPlanned: NetReady.MODULES.length,
      modulesAvailable: available.length,
      lessonsAvailable: lessonCount,
    };
  };
}(window.NetReady));
