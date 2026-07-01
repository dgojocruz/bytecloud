// TODO (Darwin): have this reviewed by a lawyer before publishing.
// Placeholders below (effective date, retention period, DPO contact,
// NPC registration status) need real values -- ask a legal professional
// whether NPC registration applies to Bytecloud's current data volume.

const EFFECTIVE_DATE = 'TODO: set effective date';

function PrivacyPolicy() {
  return (
    <section className="privacy-page">
      <h1>Privacy Policy</h1>
      <p className="privacy-effective-date">Effective date: {EFFECTIVE_DATE}</p>

      <div className="privacy-block">
        <h2>Who we are</h2>
        <p>
          Bytecloud (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides IT
          infrastructure, endpoint management, ERP, and consulting services to businesses in the
          Philippines. This policy explains how we collect, use, and protect personal information
          submitted through bytecloud.com.ph, in line with the Data Privacy Act of 2012 (Republic
          Act No. 10173).
        </p>
      </div>

      <div className="privacy-block">
        <h2>Information we collect</h2>
        <p>When you submit an inquiry or consultation request through this site, we collect:</p>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Company name</li>
          <li>Phone number (consultation requests only)</li>
          <li>Any details you include in the message field</li>
        </ul>
      </div>

      <div className="privacy-block">
        <h2>How we use it</h2>
        <p>We use the information you provide to:</p>
        <ul>
          <li>Respond to your inquiry or consultation request</li>
          <li>Prepare quotes, proposals, or scheduling for services you&rsquo;ve asked about</li>
          <li>Keep internal records of client and prospect communications</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </div>

      <div className="privacy-block">
        <h2>How it&rsquo;s stored</h2>
        <p>
          Form submissions are processed and stored via Google Forms. This means your submission is
          subject to Google&rsquo;s own data handling and security practices in addition to ours.
          Access to submitted data is limited to authorized Bytecloud personnel.
        </p>
      </div>

      <div className="privacy-block">
        <h2>Data retention</h2>
        <p>
          {/* TODO: replace with actual retention policy once defined */}
          We retain inquiry and consultation data for as long as reasonably necessary to respond to
          your request and maintain business records, after which it is deleted or anonymized.
        </p>
      </div>

      <div className="privacy-block">
        <h2>Your rights under the Data Privacy Act</h2>
        <p>As a data subject under Philippine law, you have the right to:</p>
        <ul>
          <li>Be informed that your personal data will be processed</li>
          <li>Access your personal data we hold</li>
          <li>Object to or withdraw consent for processing</li>
          <li>Correct inaccurate or outdated personal data</li>
          <li>Request erasure or blocking of your data, subject to legal limitations</li>
          <li>Data portability, where applicable</li>
          <li>
            File a complaint with the National Privacy Commission (
            <a href="https://www.privacy.gov.ph" target="_blank" rel="noreferrer">
              privacy.gov.ph
            </a>
            ) if you believe your rights have been violated
          </li>
        </ul>
      </div>

      <div className="privacy-block">
        <h2>Security</h2>
        <p>
          We apply reasonable organizational, physical, and technical measures to protect personal
          information against unauthorized access, disclosure, alteration, or destruction. No method
          of transmission or storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </div>

      <div className="privacy-block">
        <h2>Children&rsquo;s privacy</h2>
        <p>
          This site is not directed at individuals under 18, and we do not knowingly collect
          personal information from minors.
        </p>
      </div>

      <div className="privacy-block">
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. Material changes will be reflected by
          updating the effective date above.
        </p>
      </div>

      <div className="privacy-block">
        <h2>Contact us</h2>
        <p>
          For questions about this policy or to exercise your data privacy rights, contact us at{' '}
          <a href="mailto:sales@bytecloud.com.ph">sales@bytecloud.com.ph</a>.
        </p>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
