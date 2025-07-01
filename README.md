# Ping URL JavaScript action

This action pings required URL by using Node.js `https` module.

## Inputs

### `url`

**Required** The URL you need this action to ping.

## Example usage

```
on:
  schedule:
    - cron: '*/15 * * * *' # will run every 15 minutes

jobs:
  ping_url:
    runs-on: ubuntu-latest
    name: Ping URL
    steps:
      - name: Check the URL
        id: ping
        uses: soul-wish/ping-url-javascript-action@v1.4
        with:
          url: 'https://google.com'
```
