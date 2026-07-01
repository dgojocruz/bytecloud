import { services } from '../data/services';
import ServiceCard from '../components/molecules/ServiceCard';

function Services() {
  return (
    <section className="services-page">
      <h1>Our Services</h1>
      <p>Custom IT solutions to power your business growth.</p>
      <div className="service-grid">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
