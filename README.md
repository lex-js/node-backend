# lex-js node-backend

This is a nodejs backend for [lex-js](https://github.com/lex-js/lex-js).

# Running

```bash
git clone --recurse-submodules https://github.com/lex-js/node-backend.git
cd node-backend
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1
cd lex-js
npm install
cd ..
npm install
npm run bundle:build
npm run start:production
```

If you want to run tests, unset `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD` and run `npm install` again (or, alternatively, set `PUPPETEER_EXECUTABLE_PATH` as described [here](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#environment-variables))
