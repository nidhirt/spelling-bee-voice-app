# SpellVerse

Voice-first spelling practice app.

## Dictionary Source Priority

The app resolves dictionary data in this order:

1. **Primary**: Merriam-Webster Learner's Dictionary API (requires `LEARNERS_API_KEY`)
2. **Definition fallback**: `dictionaryapi.dev` (no key) when MW key is missing or MW does not return a usable entry
3. **Origin fallback**: Wiktionary etymology when MW does not provide origin

`LEARNERS_API_KEY` is used **only** for Merriam-Webster Learner's API requests.

## 1) Local setup

1. Copy env template:

```bash
cp .env.example .env
```

2. Set your key in `.env`:

```env
LEARNERS_API_KEY=your_real_key
```

3. Inject the key into the browser runtime before loading `script.js`.

Create `env.js` (do not commit):

```js
window.LEARNERS_API_KEY = "your_real_key";
```

Then include it in `index.html` before `script.js`:

```html
<script src="env.js"></script>
<script src="script.js"></script>
```

If `LEARNERS_API_KEY` is missing, the app does **not** call Merriam-Webster and uses `dictionaryapi.dev` fallback for definition/sentence.

## 2) Deployment setup

For static hosts, environment variables are not directly available in the browser at runtime. Inject them at deploy/build time.

Recommended pattern:

1. Store `LEARNERS_API_KEY` in your platform secrets (only needed for MW Learner's API).
2. Generate an `env.js` file during deployment with:

```js
window.LEARNERS_API_KEY = "...";
```

3. Ensure `env.js` is loaded before `script.js`.

## Security note

- Never print API keys in logs.
- Do not commit real keys to source control.
- `dictionaryapi.dev` and Wiktionary fallback calls do not require API keys.
