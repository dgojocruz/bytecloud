import { useState } from 'react';
import { Link } from 'react-router-dom';

function buildInitialValues(fields, presetValues) {
  const values = {};
  fields.forEach((field) => {
    values[field.name] = presetValues?.[field.name] || '';
  });
  return values;
}

function InquiryForm({ config, presetValues }) {
  const [values, setValues] = useState(() => buildInitialValues(config.fields, presetValues));
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [consentChecked, setConsentChecked] = useState(false);

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!consentChecked) {
      return;
    }

    if (config.googleFormAction.startsWith('TODO')) {
      // Form isn't wired to a real Google Form yet -- fail loudly in dev
      // rather than pretending to succeed.
      setStatus('error');
      return;
    }

    setStatus('submitting');

    const formData = new FormData();
    config.fields.forEach((field) => {
      formData.append(field.entryId, values[field.name] || '');
    });
    if (config.consentEntryId) {
      formData.append(config.consentEntryId, config.consentValue);
    }

    try {
      // no-cors means we can't read the actual response -- Google Forms
      // doesn't support CORS for form submissions, so this is the standard
      // pattern (same one used on avocadoria.com). We treat a resolved
      // fetch as success since we can't inspect the opaque response.
      await fetch(config.googleFormAction, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
      setStatus('success');
      setValues(buildInitialValues(config.fields, {}));
      setConsentChecked(false);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success">
        <h3>Thanks {'\u2014'} we got it.</h3>
        <p>We&rsquo;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      {config.fields.map((field) => (
        <div className="form-group" key={field.name}>
          <label htmlFor={field.name} className="form-label">
            {field.label}
            {field.required && <span aria-hidden="true"> *</span>}
          </label>

          {field.type === 'textarea' && (
            <textarea
              id={field.name}
              className="form-textarea"
              required={field.required}
              value={values[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              rows={5}
            />
          )}

          {field.type === 'select' && (
            <select
              id={field.name}
              className="form-select"
              required={field.required}
              value={values[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
            >
              {field.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}

          {field.type !== 'textarea' && field.type !== 'select' && (
            <input
              id={field.name}
              type={field.type}
              className="form-input"
              required={field.required}
              value={values[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}

      <div className="form-consent">
        <input
          type="checkbox"
          id={`consent-${config.id}`}
          checked={consentChecked}
          onChange={(e) => setConsentChecked(e.target.checked)}
          required
        />
        <label htmlFor={`consent-${config.id}`}>
          I agree to let Bytecloud collect and use this information to respond to my inquiry, per
          the <Link to="/privacy">Privacy Policy</Link>.
        </label>
      </div>

      {status === 'error' && (
        <p className="form-error">
          Something went wrong sending that {'\u2014'} try again, or email us directly at{' '}
          <a href="mailto:sales@bytecloud.com.ph">sales@bytecloud.com.ph</a>.
        </p>
      )}

      <button type="submit" className="cta-primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}

export default InquiryForm;
