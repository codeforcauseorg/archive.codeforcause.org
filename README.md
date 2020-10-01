[![Discord](https://img.shields.io/discord/463752820026376202.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/jBHPxUz)

# Code for Cause home website

## Contributions and PR

- PRs should be generated against `development`.
- Remember to run `npm run format` before creating pull request.
- Netlify will create a preview inside pull request, please check if your work is fine.
- When in doubt, ask your queries on [#cfc-website channel on our Discord server](https://discord.gg/jBHPxUz)

## Sandbox Deployment

You can find sandbox deployment at https://sandbox.codeforcause.org

## Build Setup

```bash
# install dependencies
npm install

# development run
npm run start

# build for production
npm run build
```

## Design

- Home : [Web](/design/home_view/home_web.pdf), [Mobile](/design/home_view/home_mobile.pdf), [Mobile Nav](/design/home_view/home_mobile_nav.pdf), [Figma](/design/home_view/home_complete.fig).

## Project Structure

    .
    ├── build                   # Compiled files
    ├── src                     # Source files
    └── ...

## Src Structure

    .
    ├── ...
    ├── src
    │   ├── ...
    │   ├── assets              # assets for the website
    |   ├── index.js            # starting point
    │   └── ...
    └── ...
