import { Link } from 'react-router-dom';

function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      <h3>{service.name}</h3>
      <p>{service.tagline}</p>
      <span className="service-card-link">Learn more &rarr;</span>
    </Link>
  );
}

export default ServiceCard;
