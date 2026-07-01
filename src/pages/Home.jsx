import { services } from '../data/services';
import ServiceCard from '../components/molecules/ServiceCard';

const HERO_POSTER =
  'https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba?auto=format&fit=crop&w=1600&h=900&q=80';

function Home() {
  return (
    <>
      {/*
        TODO (Frontend Dev / QA roles): hero video is a free stock clip
        (Pexels, no attribution required) reused from the previous Hostinger
        site as an interim asset since a distinct alternative couldn't be
        reliably sourced/verified in this session. Swap for real Bytecloud
        footage (office, data center visit, team at work) when available --
        generic stock video is a known long-term credibility gap for B2B
        sites, same caution as the stock photos elsewhere on this site.
      */}
      <section className="hero" style={{ backgroundImage: `url(${HERO_POSTER})` }}>
        <video className="hero-media" autoPlay muted loop playsInline poster={HERO_POSTER}>
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-scrim" />
        <div className="hero-inner">
          <div className="hero-content">
            <h1>IT infrastructure and ERP systems built to scale with your business</h1>
            <p>
              Bytecloud designs, deploys, and supports the network, endpoint, and ERP systems
              Philippine businesses run on {'\u2014'} with a straight line from problem to
              deliverable.
            </p>
            <a href="/contact" className="cta-primary">
              Book a consultation
            </a>
          </div>
        </div>
      </section>

      {/* TODO: logo wall of real clients/partners goes here once assets are confirmed with Darwin */}

      <section className="services-overview">
        <h2>What we do</h2>
        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* TODO: proof section (case studies / metrics) -- pending real case study content */}
    </>
  );
}

export default Home;
