# Ping URL JavaScript Action

A lightweight GitHub Action to ping a specified URL using Node.js’s built-in `https` module.  
This is especially useful for setting up simple **cron jobs** to keep services awake, monitor uptime, or trigger remote tasks.

## 🚀 Use Case

By combining this action with GitHub Actions' built-in [scheduled workflows](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule), you can easily create a cron job to ping any URL on a regular basis—without needing your own server or infrastructure.

## 📥 Inputs

### `url`

**Required** — The URL you want to ping.

## 📘 Example Usage

```yaml
on:
  schedule:
    - cron: "*/15 * * * *" # Runs every 15 minutes

jobs:
  ping_url:
    runs-on: ubuntu-latest
    name: Ping URL
    steps:
      - name: Ping the URL
        uses: soul-wish/ping-url-javascript-action@v1.5
        with:
          url: "https://google.com"
```
