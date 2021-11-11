// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(licenseBadge) {
  if (licenseBadge) {
    return `![License Badge](https://img.shields.io/badge/License-${licenseBadge}-brightgreen)`
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function licenseLink(licenseLink) {
  if (licenseLink) {
    if (licenseLink === 'Apache') {
      return 'https://choosealicense.com/licenses/apache-2.0/'
    } else if (licenseLink === 'Boost Software') {
      return 'https://choosealicense.com/licenses/bsl-1.0/';
    } else if (licenseLink === 'MIT') {
      return 'https://choosealicense.com/licenses/mit/';
    } else if (licenseLink === 'Mozilla Public') {
      return 'https://choosealicense.com/licenses/mpl-2.0/';
    } else if (licenseLink === 'The Unlicense') {
      return 'https://choosealicense.com/licenses/unlicense/';
    }
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseSection) {
  if (licenseSection) {
    return `## License \n${licenseSection}: ${licenseLink(licenseSection)}`;
  } else {
    return '';
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${licenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Credits](#credits)
  * [Questions](#questions)
  * [License](#license)
  
  ## Description
  ${data.description}
  
  ## Installation Instructions
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## Tests
  ${data.tests}
  
  ## Contributing
  ${data.contribute}
  
  ## Questions
  Please reach me at ${data.email} for any further questions. I have a repository with my examples at my GitHub [Link](https://github.com/${data.github}).
  
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;