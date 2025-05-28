const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_TOKEN // Only needed if you want to make mutations
});



async function updateProfile() {
  try {
    // Create or update profile
    await client.createOrReplace({
      _id: 'profile',
      _type: 'profile',
      fullName: 'Aswin Raj Sivaprakash',
      headline: 'Business Executive / Customer Support',
      location: 'Porto, Portugal',
      email: 'aswinr63@gmail.com',
      shortBio: 'Spearheaded data-driven marketing strategies across Clean Tech, Pharmaceutical, Travel, and IGaming sectors, increasing lead generation by 35% and improving marketing ROI by 22% across diverse European markets.',
      fullBio: [
        {
          _type: 'block',
          children: [{
            _type: 'span',
            text: 'Spearheaded data-driven marketing strategies across Clean Tech, Pharmaceutical, Travel, and IGaming sectors, increasing lead generation by 35% and improving marketing ROI by 22% across diverse European markets. Passionate about driving impactful climate solutions and global sustainability through targeted marketing across the globe.'
          }]
        },
        {
          _type: 'block',
          children: [{
            _type: 'span',
            text: 'aswinr63@gmail.com'
          }]
        },
        {
          _type: 'block',
          children: [{
            _type: 'span',
            text: 'Porto, Portugal'
          }]
        },
        {
          _type: 'block',
          children: [{
            _type: 'span',
            text: '+351 938816822'
          }]
        },
        {
          _type: 'block',
          children: [{
            _type: 'span',
            text: 'linkedin.com/in/aswin-sivaprakash'
          }]
        }
      ],
      socialLinks: [
        {
          _type: 'socialLink',
          label: 'LinkedIn',
          url: 'https://linkedin.com/in/aswin-sivaprakash'
        }
      ]
    });

    console.log('Profile updated successfully!');
  } catch (error) {
    console.error('Error updating profile:', error);
  }
}

updateProfile();
