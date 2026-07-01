import { services } from '../data/services';
import ServiceCard from '../components/molecules/ServiceCard';
import ProcessTimeline from '../components/organisms/ProcessTimeline';

function Services() {
  return (
    <>
      <section className="services-page">
        <h1>Our Services</h1>
        <p>Custom IT solutions to power your business growth.</p>
      </section>

      <section className="process-section">
        <h2>How we work</h2>
        <p className="process-intro">
          Every engagement follows the same four phases, from first conversation to long-term
          support {'\u2014'} click a step to see what happens at each one.
        </p>
        <ProcessTimeline />
      </section>

      <section className="services-overview">
        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
