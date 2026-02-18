---
description: Build and Deployment Workflow for Antares Systems
---

# Deploy Workflow

This workflow ensures the site is ready for Cloudflare Pages.

1. **Clean and Install**
   // turbo
   `npm install`

2. **Run Linting and Type Check**
   // turbo
   `npm run check`

3. **Build the Static Site**
   // turbo
   `npm run build`

4. **Verify Output**
   Check if the `dist/` directory contains the expected HTML files.

5. **Commit and Push**
   Push changes to the main branch to trigger Cloudflare Pages deployment.
