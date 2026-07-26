# SAHA BAR — website

## Run it on your computer (optional, to preview before deploying)

You need Node.js installed first: https://nodejs.org (download the LTS version, click through the installer).

Then, in a terminal, inside this folder:

```
npm install
npm run dev
```

It'll print a local address like `http://localhost:5173` — open that in your browser.

## Deploy to Vercel (the easy way — no terminal needed)

1. Go to https://vercel.com and sign up (free — you can sign up with GitHub, GitLab, or email).
2. Put this project on GitHub:
   - Go to https://github.com/new, create a new repository (e.g. `saha-bar`).
   - Upload all the files in this folder to that repository (GitHub's website has an "upload files" button — drag the whole folder in).
3. Back in Vercel, click "Add New Project," pick the `saha-bar` repository you just created.
4. Vercel will auto-detect it's a Vite project. Leave all settings as default.
5. Click "Deploy." Wait about a minute.
6. You'll get a live URL like `saha-bar.vercel.app` — that's your website, live on the internet.

Every time you update the code on GitHub afterward, Vercel automatically redeploys.

## Deploy to Vercel (terminal way, if you're comfortable)

```
npm install -g vercel
npm run build
vercel --prod
```

Follow the prompts (log in, confirm project settings). It'll give you the live URL directly.

## Custom domain

Once deployed, in the Vercel dashboard go to your project → Settings → Domains, and add your own domain (e.g. `sahabar.sk`) if you have one.
