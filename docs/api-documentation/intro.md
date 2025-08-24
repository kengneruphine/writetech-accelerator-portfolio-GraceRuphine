# API Documentation Project

This project documents [Chimoney](chimoney.io) Public REST API, including a Getting started section and selected endpoints following the OpenAPI Specifications.

In this project, I documented the beneficiaries endpoints following the OpenAPI specification.

[This Plugin](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs) was used to render OpenAPI in Docusaurus.

## Challenges

- I faced a challenge with the version of the **docusaurus-theme-openapi-docs theme**, which was causing my deployment to fail on the Vercel platform. Initially, when I ran npm install to add the theme, it installed version 1.7.3, which is no longer maintained, and its dependencies conflicted with Docusaurus version 3. Upon noticing this, I upgraded the docusaurus-theme-openapi-docs theme to the latest version(4.5.1) to ensure compatibility with Docusaurus version 3.

## What I Learnt

- I learned how to configured and add OpenAPI specification to docusaurus and documented the beneficiaries endpoints from the Chimoney REST API
