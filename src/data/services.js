// Central source of truth for Bytecloud's service lines.
// Each service links to its own indexable page (Content/SEO standard: unique title/meta per service).

export const services = [
  {
    slug: 'network-infrastructure',
    name: 'Network Infrastructure',
    tagline: 'Robust, secure network infrastructure designed for reliability and speed.',
    image:
      'https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&w=600&h=360&q=80',
    imageAlt: 'Network switch with organized cabling',
    problem:
      'Growing businesses outgrow ad-hoc network setups — unreliable connectivity, security gaps, and no clear path to scale.',
    approach:
      'We design and deploy network infrastructure built for your actual load and growth plan, not a generic template.',
    deliverables: [
      'Network design & topology planning',
      'Switch/router configuration and deployment',
      'Security hardening (VLANs, firewall rules, access control)',
      'Documentation and handover',
    ],
    metaTitle: 'Network Infrastructure Setup Philippines | Bytecloud',
    metaDescription:
      'Design, deployment, and hardening of secure, scalable network infrastructure for growing Philippine businesses.',
  },
  {
    slug: 'endpoint-management',
    name: 'Endpoint Management',
    tagline: 'Comprehensive desktop hardware and device management to keep operations secure.',
    image:
      'https://images.unsplash.com/photo-1580983559367-0dc2f8934365?auto=format&fit=crop&w=600&h=360&q=80',
    imageAlt: 'Person using a laptop for device management',
    problem:
      'Unmanaged endpoints are a security and productivity risk — inconsistent patching, no visibility, slow issue resolution.',
    approach: 'Centralized endpoint management with proactive monitoring, patching, and support.',
    deliverables: [
      'Endpoint provisioning & configuration',
      'Patch management and monitoring',
      'Remote support and troubleshooting',
      'Asset inventory tracking',
    ],
    metaTitle: 'Endpoint Management Services | Bytecloud',
    metaDescription:
      'Centralized device management, patching, and support for growing teams in the Philippines.',
  },
  {
    slug: 'erp-solutions',
    name: 'ERP Solutions',
    tagline: 'Streamlined ERP implementation and support tailored to your operations.',
    image:
      'https://images.unsplash.com/photo-1574311382329-80bcc540bd52?auto=format&fit=crop&w=600&h=360&q=80',
    imageAlt: 'ERP dashboard displayed on a computer screen',
    problem:
      'Off-the-shelf ERP systems often force a business to bend its processes to fit the software, wasting the efficiency gain.',
    approach:
      'We implement and configure ERP systems around how your business actually operates, with Philippine compliance built in from day one.',
    deliverables: [
      'ERP implementation & configuration',
      'Custom module development',
      'Payroll compliance setup (SSS, PhilHealth, Pag-IBIG, BIR, DOLE)',
      'Training and ongoing support',
    ],
    metaTitle: 'ERP Implementation Services Philippines | Bytecloud',
    metaDescription:
      'ERP implementation and custom development tailored to Philippine SMEs, with statutory payroll compliance built in.',
  },
  {
    slug: 'it-consulting',
    name: 'IT Consulting',
    tagline: 'Strategic technology guidance to power confident growth decisions.',
    image:
      'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=600&h=360&q=80',
    imageAlt: 'IT consultant working on a laptop',
    problem:
      'Technology decisions made without a clear strategy lead to wasted spend and systems that don\u2019t scale with the business.',
    approach:
      'We assess your current stack, identify gaps and risk, and build a practical roadmap tied to business goals.',
    deliverables: [
      'IT infrastructure audit',
      'Technology roadmap & budget planning',
      'Vendor and platform selection guidance',
      'Ongoing advisory',
    ],
    metaTitle: 'IT Consulting Services Philippines | Bytecloud',
    metaDescription:
      'Strategic IT consulting for Philippine businesses — infrastructure audits, roadmaps, and vendor guidance.',
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
