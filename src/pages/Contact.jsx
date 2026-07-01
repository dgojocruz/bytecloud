import { useSearchParams } from 'react-router-dom';
import InquiryForm from '../components/organisms/InquiryForm';
import { inquiryFormConfig } from '../data/forms';

function buildPresetMessage(searchParams) {
  const isConsultation = searchParams.get('type') === 'consultation';
  const service = searchParams.get('service');

  if (isConsultation && service) {
    return `I'd like to book a consultation about ${service}.`;
  }
  if (isConsultation) {
    return "I'd like to book a consultation.";
  }
  return '';
}

function Contact() {
  const [searchParams] = useSearchParams();
  const presetMessage = buildPresetMessage(searchParams);
  const presetValues = presetMessage ? { message: presetMessage } : undefined;

  return (
    <section className="contact-page">
      <h1>Get in touch</h1>
      <p>Reach out for tailored IT solutions today.</p>

      <a href="mailto:sales@bytecloud.com.ph" className="contact-email-link">
        sales@bytecloud.com.ph
      </a>

      <div className="contact-form-panel">
        <p className="contact-form-description">{inquiryFormConfig.description}</p>
        <InquiryForm config={inquiryFormConfig} presetValues={presetValues} />
      </div>
    </section>
  );
}

export default Contact;
