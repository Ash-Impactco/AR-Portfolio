const { createClient } = require('@sanity/client');

// Load environment variables
require('dotenv').config();

const client = createClient({
  projectId: '2iczu3ec',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-07-21',
  token: 'skB3aFqSxUiWHFuf81MjrPKtox4noqLooyg8SJxly2n5j1v8h6ZSmDEtdHeohiV4MKEcpEkHSTFavFD2n2chFDJTlck0UKK6M2JoCxzkgUzQobhE9UPMbRa1Qjiv8gHpnFT9srous1oHWaLNPU54u1vfs2fdVIxuxeL0orSprbhgkqAJaW0H'
});

async function updateContent() {
  try {
    // Update Profile
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
        }
      ],
      ventures: [
        {
          name: 'Intrusive Thoughts',
          description: 'Created Intrusive Thoughts, a platform to spread awareness about sustainable living and eco-friendly practices',
          startDate: '2022-01-01',
          website: 'https://intrusivethoughts.com'
        },
        {
          name: 'Burrito Delhi',
          description: 'Launched Burrito Delhi, a plant-based food venture that promotes sustainable eating',
          startDate: '2023-01-01',
          website: 'https://burrito-delhi.com'
        },
        {
          name: 'Anna Kadukaan',
          description: 'Partnered in Anna Kadukaan, a vegan food venture that blends traditional Indian flavors with sustainable practices',
          startDate: '2023-01-01',
          website: 'https://annakadukaan.com'
        }
      ]
    });

    // Create Social Links
    await client.createOrReplace({
      _id: 'social-link-1',
      _type: 'socialLink',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/aswin-sivaprakash',
      icon: 'linkedin'
    });

    // Create Jobs
    const jobs = [
      {
        _id: 'job-1',
        _type: 'job',
        name: 'Freelance',
        jobTitle: 'Clean Tech Marketer',
        startDate: '2025-01-01',
        endDate: null,
        description: 'Executed targeted demand generation campaigns for early-stage cleantech startups, increasing SQLs by 1.5× and contributing to a $100K+ sales pipeline.'
      },
      {
        _id: 'job-2',
        _type: 'job',
        name: 'Scores & Levels',
        jobTitle: 'Customer Success & Marketing Specialist',
        startDate: '2024-06-01',
        endDate: null,
        description: 'Collaborated with the marketing team to develop data-driven promotional strategies using HubSpot, leading to a 25% increase in customer retention across all regions.'
      },
      {
        _id: 'job-3',
        _type: 'job',
        name: 'National Chromatography Inco',
        jobTitle: 'Business Development Manager',
        startDate: '2022-10-01',
        endDate: '2024-05-01',
        description: 'Acquired consistent new business with well-formulated and executed strategies based on market expertise.'
      },
      {
        _id: 'job-4',
        _type: 'job',
        name: 'Eurail',
        jobTitle: 'Client Relationship Specialist',
        startDate: '2022-09-01',
        endDate: '2023-08-01',
        description: 'Addressed customer inquiries through phone, email, and chat channels.'
      },
      {
        _id: 'job-5',
        _type: 'job',
        name: 'MGK Aqua Inco',
        jobTitle: 'Environmental Assistant',
        startDate: '2020-11-01',
        endDate: '2021-08-01',
        description: 'Developed Detailed Project Reports (DPRs) on sustainability, climate change, GHG management, and energy efficiency for BOSCH, PepsiCo, and multiple textile and tanning companies.'
      },
      {
        _id: 'job-6',
        _type: 'job',
        name: 'UNICEF',
        jobTitle: 'Project Assistant',
        startDate: '2018-07-01',
        endDate: '2019-06-01',
        description: 'Communicated with government officials regarding environmental sustainability and GHG Management projects.'
      }
    ];

    // Create Projects
    const projects = [
      {
        _id: 'project-1',
        _type: 'project',
        name: 'Upcoming Geothermal Heat Grid',
        tagline: 'Social Impact Assessment for Geothermal Energy',
        startDate: '2022-02-01',
        endDate: '2022-04-01',
        description: 'Conducted comprehensive social impact assessment through interviews with 100 respondents. Implemented DESSIN-ESS conceptual framework for qualitative data processing.'
      },
      {
        _id: 'project-2',
        _type: 'project',
        name: 'Coral Bleaching Status',
        tagline: 'Andaman Islands Coral Conservation',
        startDate: '2017-12-01',
        endDate: '2018-02-01',
        description: 'Conducted comprehensive SST analysis revealing 1°C temperature threshold above maximum monthly temperature. Developed Coral Bleaching Alert System (CBAS) using satellite-derived SST data.'
      },
      {
        _id: 'project-3',
        _type: 'project',
        name: 'EV-Charging App Pilot',
        tagline: 'Smart Mobility Solutions',
        startDate: '2022-04-01',
        endDate: '2022-07-01',
        description: 'Assisted in product marketing strategy for fast-charging network. Performed traffic analysis and urban planning recommendations.'
      }
    ];

    // Create all jobs and projects
    for (const job of jobs) {
      await client.createOrReplace(job);
    }

    for (const project of projects) {
      await client.createOrReplace(project);
    }

    console.log('Content updated successfully!');
  } catch (error) {
    console.error('Error updating content:', error);
  }
}

updateContent();
