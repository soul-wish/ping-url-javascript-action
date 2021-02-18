import core from '@actions/core';
import https from 'https';

try {
  const urlToPing = core.getInput('url');
  if (!urlToPing) {
    return core.setFailed('URL is required!');
  }
  https
    .get(urlToPing, () => {
      core.setOutput('✅ Success');
    })
    .on('error', (error) => core.setOutput(`🛑 ${error.message}`));
} catch (error) {
  core.setFailed(`🛑 ${error.message}`);
}
