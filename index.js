const core = require('@actions/core');
const https = require('https');
const fs = require('fs');

try {
  const urlToPing = core.getInput('url');
  if (!urlToPing) {
    core.setFailed('URL is required!');
    return;
  }
  https
    .get(urlToPing, () => {
      // core.setOutput('✅ Success');
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `status=🟢 Ping Success\n`)
    })
    .on('error', (error) => {
      // core.setOutput(`🛑 ${error.message}`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `status=🛑 ${error.message}\n`);
    });
} catch (error) {
  core.setFailed(`🛑 ${error.message}`);
}
