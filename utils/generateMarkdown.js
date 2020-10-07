
function generateMarkdown(data) {
//check user input to assign appropriate badge
let licensetxt = "";
if (data.license === "MIT") {
    data.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    licensetxt = "MIT license"
}

else if (data.license === "Apache 2.0") {
    data.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    licensetxt = "Apache 2.0 license"
}

else if (data.license === "GPL 2.0") {
    data.license = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    licensetxt = "GPL 2.0 license"
}

else if (data.license === "GPL 3.0") {
    data.license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    licensetxt = "GPL 3.0 license"
}

else if (data.license === "Unlicense") {
    data.license = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    licensetxt = "Unlicensed"
}

else {
    data.license = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    licensetxt = "Unlicensed"
}

// display appropriate data inside README file
return `
# ${data.title}
${data.license}

## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Test](#Test)
* [Questions](#Questions)

## Installation
This application will be invoked with the following command:
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## License
This application is covered under the ${licensetxt}.

## Contributing
${data.contribution}

## Test
Testing framework used: ${data.test}

## Questions
If you have additional questions, you can reach me via my GitHub profile: [${data.username}](https://github.com/${data.username})<br/>
or send me an email at: ${data.email}
`
}

module.exports = generateMarkdown;