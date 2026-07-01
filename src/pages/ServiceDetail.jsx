import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug } from '../data/services';

function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <section className="service-detail not-found">
        <h1>Service not found</h1>
        <Link to="/services">Back to Services</Link>
      </section>
    );
  }

  return (
    <section className="service-detail">
      <h1>{service.name}</h1>
      <p className="tagline">{service.tagline}</p>

      <div className="service-block">
        <h2>The problem</h2>
        <p>{service.problem}</p>
      </div>

      <div className="service-block">
        <h2>Our approach</h2>
        <p>{service.approach}</p>
      </div>

      <div className="service-block">
        <h2>What you get</h2>
        <ul>
          {service.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <a href="/contact" className="cta-primary">
        Talk to a specialist
      </a>
    </section>
  );
}

export default ServiceDetail;
