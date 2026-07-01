// Lead routing default: Google Forms (matches the Avocadoria pattern).
// TODO: once Darwin creates the Bytecloud contact/quote Google Form, drop the
// form ID in here the same way Avocadoria's careers/franchise forms work
// (pre-filled via URL params, embedded or linked out).
const CONTACT_FORM_URL = null; // e.g. 'https://docs.google.com/forms/d/e/FORM_ID/viewform'

function Contact() {
  return (
    <section className="contact-page">
      <h1>Get in touch</h1>
      <p>Reach out for tailored IT solutions today.</p>

      <a href="mailto:sales@bytecloud.com.ph" className="cta-primary">
        sales@bytecloud.com.ph
      </a>

      {CONTACT_FORM_URL ? (
        <iframe
          title="Contact form"
          src={CONTACT_FORM_URL}
          width="100%"
          height="900"
          frameBorder="0"
        >
          Loading form...
        </iframe>
      ) : (
        <p className="form-placeholder">
          {/* Visible reminder in dev, not meant to ship to production as-is */}
          Contact form pending -- create the Google Form and set CONTACT_FORM_URL.
        </p>
      )}
    </section>
  );
}

export default Contact;
