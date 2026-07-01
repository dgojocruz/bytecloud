import AboutHero from '../components/organisms/AboutHero';
import evolutionByteImage from '../assets/images/evolution-byte.jpg';
import evolutionBridgeImage from '../assets/images/evolution-bridge.jpg';
import evolutionCloudImage from '../assets/images/evolution-cloud.jpg';

const deliverables = [
  {
    title: 'Cloud & On-Premise Infrastructure',
    description:
      'Network design, deployment, and hosting \u2014 whether on your own servers, in the cloud, or both.',
  },
  {
    title: 'ERP Implementation & Custom Development',
    description:
      'System implementation and custom modules built around how your business actually operates.',
  },
  {
    title: 'Secure Endpoint Provisioning',
    description:
      'Device setup, patch management, and monitoring so every endpoint stays secure and accounted for.',
  },
  {
    title: 'Digitalization & IT Strategy Consulting',
    description: 'Roadmaps and technology guidance to help you modernize without wasted spend.',
  },
];

// Small custom SVG icons per era -- no external icon library needed.
const ByteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="4" width="18" height="12" rx="1" />
    <path d="M8 20h8M12 16v4" />
  </svg>
);

const BridgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 15l6-6M8 8l1.5-1.5a3 3 0 014.24 4.24L12 12M16 16l-1.5 1.5a3 3 0 01-4.24-4.24L12 12" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6.5 19a4.5 4.5 0 010-9 5.5 5.5 0 0110.8-1.5A4 4 0 0118 19H6.5z" />
  </svg>
);

const evolutionStages = [
  {
    id: '01',
    stageClass: 'stage-byte',
    title: 'The Byte Era',
    icon: <ByteIcon />,
    copy: 'Computing started on-premise \u2014 physical servers, local networks, hardware you could touch. That foundation, one byte at a time, is where every IT system still begins.',
    image: evolutionByteImage,
    imageAlt: 'Network patch panel with connected cables',
  },
  {
    id: '02',
    stageClass: 'stage-bridge',
    title: 'The Bridge',
    icon: <BridgeIcon />,
    copy: 'Most businesses today run somewhere in between \u2014 legacy systems that still work, modern tools that need to connect to them. We specialize in that middle ground.',
    image: evolutionBridgeImage,
    imageAlt: 'Abstract cloud infrastructure illustration',
  },
  {
    id: '03',
    stageClass: 'stage-cloud',
    title: 'The Cloud Era',
    icon: <CloudIcon />,
    copy: 'Scalable, remote, always-on. We help businesses move at their own pace toward cloud-first infrastructure, without abandoning what already works.',
    image: evolutionCloudImage,
    imageAlt: 'AI and cloud computing interface',
  },
];

function About() {
  return (
    <>
      <AboutHero>
        <div className="about-story-intro">
          <h1>About Bytecloud</h1>

          {/*
            TODO (Brand/Copywriter role): the paragraph below is written to be
            specific and lead-focused, but any performance stats (cost savings,
            efficiency gains, etc.) must be confirmed by Darwin with real data
            before publishing -- do not add invented percentages here.
          */}
          <p>
            Founded in 2025, Bytecloud partners with growing Philippine businesses to modernize how
            they run on technology &mdash; from the network and endpoints that keep daily operations
            moving, to the ERP systems that tie the business together. We focus on infrastructure
            that scales with you, software that fits how you actually work, and support that
            doesn&rsquo;t disappear after go-live.
          </p>
        </div>

        <div className="about-story-evolution">
          <div className="evolution-header">
            <h2>From Byte to Cloud</h2>
            <p>
              Our name is our story &mdash; computing started with the byte, and we&rsquo;ve helped
              businesses move it to the cloud ever since.
            </p>
          </div>

          <div className="evolution-track">
            {evolutionStages.map((stage) => (
              <div className={`evolution-stage ${stage.stageClass}`} key={stage.id}>
                <img
                  src={stage.image}
                  alt={stage.imageAlt}
                  className="evolution-stage-image"
                  loading="lazy"
                />
                <div className="evolution-stage-overlay" />
                <div className="evolution-stage-content">
                  <span className="evolution-stage-icon">{stage.icon}</span>
                  <span className="evolution-stage-number">{stage.id}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.copy}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="evolution-tagline">
            Byte + Cloud &mdash; from the ground up. That&rsquo;s not just our name. That&rsquo;s
            how we build.
          </p>
        </div>
      </AboutHero>

      <section className="deliverables-section">
        <h2>What we deliver</h2>
        <p className="deliverables-intro">
          Four areas, one team {'\u2014'} each backed by the same standard of follow-through from
          first call to long after go-live.
        </p>

        <div className="deliverable-grid">
          {deliverables.map((item, index) => (
            <div className="deliverable-card" key={item.title}>
              <span className="deliverable-card-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="highlight-grid">
          <div className="highlight-card highlight-vision">
            <span className="highlight-label">Vision</span>
            <p>
              To be the technology partner Philippine businesses trust first &mdash; delivering
              infrastructure, ERP, and IT strategy that scale as they grow, without the overhead of
              building an internal IT department from scratch.
            </p>
          </div>
          <div className="highlight-card highlight-mission">
            <span className="highlight-label">Mission</span>
            <p>
              We design, deploy, and support the systems businesses run on, so our clients spend
              less time managing technology and more time running their business.
            </p>
          </div>
        </div>

        {/* TODO: team bios/credentials -- currently missing from the site entirely */}

        <a href="/contact" className="cta-primary">
          Talk to us about your IT roadmap
        </a>
      </section>
    </>
  );
}

export default About;
