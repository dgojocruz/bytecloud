import { Link } from 'react-router-dom';

function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      {service.image && (
        <img
          src={service.image}
          alt={service.imageAlt || ''}
          className="service-card-image"
          loading="lazy"
        />
      )}
      <div className="service-card-body">
        <h3>{service.name}</h3>
        <p>{service.tagline}</p>
        <span className="service-card-link">Learn more &rarr;</span>
      </div>
    </Link>
  );
}

export default ServiceCard;
