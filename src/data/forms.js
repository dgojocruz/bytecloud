// Single form config for Contact page (general inquiry + consultation
// booking share one Google Form).

export const inquiryFormConfig = {
  id: 'inquiry',
  title: 'Get in Touch',
  description:
    'Whether you have a quick question or want to book a consultation, fill out the form below and our team will get back to you.',
  googleFormAction:
    'https://docs.google.com/forms/d/e/1FAIpQLSetPaOchZJQ2TY68knBsP85asyHoaKaZJTScQhw6qiKUvM0Dg/formResponse',
  consentEntryId: 'entry.37455416',
  consentValue: 'I agree',
  fields: [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      entryId: 'entry.1109965671',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      entryId: 'entry.293733564',
      required: true,
    },
    {
      name: 'company',
      label: 'Company Name',
      type: 'text',
      entryId: 'entry.1808174472',
      required: true,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      entryId: 'entry.440391318',
      required: true,
    },
    {
      name: 'message',
      label: 'How can I help you?',
      type: 'textarea',
      entryId: 'entry.14955326',
      required: true,
    },
  ],
};
