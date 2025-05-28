const { createClient } = require('@sanity/client');
const path = require('path');
const fs = require('fs');

// Initialize Sanity client
const client = createClient({
  projectId: '2iczu3ec',
  dataset: 'production',
  token: 'skB3aFqSxUiWHFuf81MjrPKtox4noqLooyg8SJxly2n5j1v8h6ZSmDEtdHeohiV4MKEcpEkHSTFavFD2n2chFDJTlck0UKK6M2JoCxzkgUzQobhE9UPMbRa1Qjiv8gHpnFT9srous1oHWaLNPU54u1vfs2fdVIxuxeL0orSprbhgkqAJaW0H',
  apiVersion: '2023-07-21',
});

async function uploadCompanyLogos() {
  try {
    // Define the companies and their logos
    const companies = [
      {
        name: "Scores & Levels",
        logoPath: path.join('Assets', 'Companies', 'download (5).png'),
        url: "https://scoresandlevels.com",
        jobTitle: "Customer Success & Marketing Specialist",
        description: "Leading customer success and marketing initiatives at Scores & Levels, a clean tech startup focused on energy transition and sustainability.",
        startDate: "2024-01-01",
        endDate: null,
      },
      {
        name: "National Chromatography Inco",
        logoPath: path.join('Assets', 'Companies', 'download (6).png'),
        url: "https://nationalchromatography.com",
        jobTitle: "Business Development Manager",
        description: "Managed business development and client relationships at National Chromatography Inco, a leading provider of chromatography solutions.",
        startDate: "2022-06-01",
        endDate: "2023-12-31",
      },
      {
        name: "Eurail",
        logoPath: path.join('Assets', 'Companies', 'download (7).png'),
        url: "https://eurail.com",
        jobTitle: "Client Relationship Specialist",
        description: "Specialized in client relationship management and customer support at Eurail, a major European railway company.",
        startDate: "2021-01-01",
        endDate: "2022-05-31",
      },
      {
        name: "MGK Aqua Inco",
        logoPath: path.join('Assets', 'Companies', '1677765123902.jpeg'),
        url: "https://mgkaqua.com",
        jobTitle: "Environmental Assistant",
        description: "Assisted in environmental projects and sustainability initiatives at MGK Aqua Inco.",
        startDate: "2020-01-01",
        endDate: "2020-12-31",
      },
    ];

    // Upload each company logo and create job document
    for (const company of companies) {
      // Upload the logo
      const logoFile = path.join(__dirname, company.logoPath);
      const imageBuffer = fs.readFileSync(logoFile);
      const extension = path.extname(company.logoPath).toLowerCase();
      const contentType = extension === '.png' ? 'image/png' : 'image/jpeg';

      const logoAsset = await client.assets.upload('image', imageBuffer, {
        contentType,
        filename: path.basename(company.logoPath),
      });

      // Create job document
      const jobDoc = {
        _type: 'job',
        name: company.name,
        jobTitle: company.jobTitle,
        logo: {
          _type: 'image',
          asset: {
            _ref: logoAsset._id,
            _type: 'reference',
          },
        },
        url: company.url,
        description: company.description,
        startDate: company.startDate,
        endDate: company.endDate,
      };

      // Create job document in Sanity
      await client.create(jobDoc);
      console.log(`Successfully uploaded logo and created job document for ${company.name}`);
    }

    console.log('All company logos and job documents have been uploaded successfully!');
  } catch (error) {
    console.error('Error uploading company logos:', error);
  }
}

uploadCompanyLogos();
