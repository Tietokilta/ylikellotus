# Web site: Ylikellotus 2026

This repository contains the web site for Ylikellotus 2026, a party organised by first-year students of Computer Science at Aalto University.

The repository uses NextJS with React 19 and the old `app` router. Currently, it uses the `npm` package manager (though support for others may be added in the future)

## Installation

1. Clone the repository as usual
2. Install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if you haven't already
3. Run `npm install`

## Development

1. Run `npm run dev` to start the local server.
2. Navigate to `http://localhost:3000` on your browser.
3. Edit the files in `app/`
4. Profit

## Production Builds
This application uses Next.js with a static export, but responsive imagesets are generated at compile time using `next-image-export-optimizer` (Next.js' `Image` element does not support the `export` output).

To build the application for production, run `npm run build`. This will automatically run `next-image-export-optimizer` and place the static website in the `out/` directory. To serve a production build in development, use `npm run build && npx serve@latest out`.