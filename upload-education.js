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

async function uploadEducation() {
  try {
    // Define the education entries
    const educationEntries = [
      {
        institution: "University of Twente",
        degree: "Master's in Environmental and Energy Management",
        logoPath: path.join('Assets', 'University', 'twente.png'), 
        url: "https://www.utwente.nl/en/",
        description: "Scholarship recipient for academic excellence in environmental and energy management.",
        startDate: "2021-09-01",
        endDate: "2022-06-30",
      },
      {
        institution: "Amity University",
        degree: "Bachelor's in Environmental Science",
        logoPath: path.join('Assets', 'University', 'Amity University.jpeg'),
        url: "https://www.amity.edu/",
        description: "Graduated with distinction in environmental science.",
        startDate: "2015-07-01",
        endDate: "2018-05-31",
      }
    ];

    // Upload each education entry
    for (const entry of educationEntries) {
      try {
        // Check if logo file exists
        let logoAsset = null;
        try {
          const imageBuffer = fs.readFileSync(entry.logoPath);
          const extension = path.extname(entry.logoPath).toLowerCase();
          const contentType = extension === '.png' ? 'image/png' : 'image/jpeg';
          logoAsset = await client.assets.upload('image', imageBuffer, {
            contentType,
            filename: path.basename(entry.logoPath),
          });
        } catch (error) {
          console.warn(`Warning: Could not find logo for ${entry.institution}: ${error.message}`);
        }

        // Create education document
        const educationDoc = {
          _type: 'education',
          institution: entry.institution,
          degree: entry.degree,
          ...(logoAsset && {
          logo: {
            _type: 'image',
            asset: {
              _ref: logoAsset._id,
              _type: 'reference',
            },
          },
        }),
          url: entry.url,
          description: entry.description,
          startDate: entry.startDate,
          endDate: entry.endDate,
        };

        // Create education document in Sanity
        await client.create(educationDoc);
        console.log(`Successfully uploaded logo and created education document for ${entry.institution}`);
      } catch (error) {
        console.error(`Error processing ${entry.institution}:`, error);
      }
    }

    console.log('All education entries have been uploaded successfully!');
  } catch (error) {
    console.error('Error uploading education entries:', error);
  }
}

uploadEducation();
