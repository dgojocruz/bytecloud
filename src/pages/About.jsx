const deliverables = [
  'Cloud & on-premise infrastructure',
  'ERP implementation & custom development',
  'Secure endpoint provisioning & automated device management',
  'Digitalization & IT strategy consulting',
];

function About() {
  return (
    <section className="about-page">
      <h1>About Bytecloud</h1>

      <img
        src="https://images.unsplash.com/photo-1671726805768-93b4c260766b?auto=format&fit=crop&w=900&h=420&q=80"
        alt="Consultants collaborating over technical plans"
        className="about-hero-image"
        loading="lazy"
      />

      {/*
        TODO (Brand/Copywriter role): the paragraph below is written to be
        specific and lead-focused, but any performance stats (cost savings,
        efficiency gains, etc.) must be confirmed by Darwin with real data
        before publishing -- do not add invented percentages here.
      */}
      <p>
        Founded in 2025, Bytecloud partners with growing Philippine businesses to modernize how they
        run on technology &mdash; from the network and endpoints that keep daily operations moving,
        to the ERP systems that tie the business together. We focus on infrastructure that scales
        with you, software that fits how you actually work, and support that doesn&rsquo;t disappear
        after go-live.
      </p>

      <div className="about-block">
        <h2>What we deliver</h2>
        <ul>
          {deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="about-grid">
        <div className="about-block">
          <h2>Vision</h2>
          <p>
            To be the technology partner Philippine businesses trust first &mdash; delivering
            infrastructure, ERP, and IT strategy that scale as they grow, without the overhead of
            building an internal IT department from scratch.
          </p>
        </div>
        <div className="about-block">
          <h2>Mission</h2>
          <p>
            We design, deploy, and support the systems businesses run on, so our clients spend less
            time managing technology and more time running their business.
          </p>
        </div>
      </div>

      {/* TODO: team bios/credentials -- currently missing from the site entirely */}

      <a href="/contact" className="cta-primary">
        Talk to us about your IT roadmap
      </a>
    </section>
  );
}

export default About;
