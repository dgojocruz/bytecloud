import { services } from '../data/services';
import ServiceCard from '../components/molecules/ServiceCard';

function Home() {
  return (
    <>
      <section className="hero">
        <h1>IT infrastructure and ERP systems built to scale with your business</h1>
        <p>
          Bytecloud designs, deploys, and supports the network, endpoint, and ERP systems Philippine
          businesses run on {'\u2014'} with a straight line from problem to deliverable.
        </p>
        <a href="/contact" className="cta-primary">
          Book a consultation
        </a>
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
