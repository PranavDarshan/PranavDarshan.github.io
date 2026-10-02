<div align="center">

# Pranav Darshan

**Computer Science Engineer and AI Researcher**

[Portfolio](https://pranavdarshan.github.io/) · [GitHub](https://github.com/PranavDarshan) · [LinkedIn](https://www.linkedin.com/in/pranav-darshan/)

</div>

## About

This repository contains the source code for my personal portfolio. It presents my work at the intersection of AI research and systems engineering, including research on hallucination detection and knowledge conflicts in language and diffusion models, professional experience, selected projects, education, and publications.

The site is based on the [Starfolio Astro portfolio starter](https://github.com/webrating/starfolio) and has been customized for my portfolio. The original MIT license is retained in [LICENSE](./LICENSE).

## Publications

- [The Detectability Gap: Hidden Heterogeneity in Hallucination Detection Across Language Models](https://arxiv.org/abs/2609.35860) — GlobalSouthAI Workshop @ NeurIPS 2026
- [The Temporal Tug-of-War: Visualizing and Detecting RAG Conflicts in Diffusion Models via Trajectory Variance](https://arxiv.org/abs/2609.31684) — UncertaiNLP Workshop @ EMNLP 2026
- [Eyes All Around: Design and Analysis of 360-Degree LiDAR Perception Using Equivariant Feature Learning in Unstructured Traffic](https://arxiv.org/abs/2606.07626) — 2026
- [Intellectual Property Rights and Entrepreneurship in the NFT Ecosystem: Legal Frameworks, Business Models, and Innovation Opportunities](https://arxiv.org/abs/2507.00172) — 2025
- [Leveraging LLM and RAG for Automated Answer Script Evaluation](https://ieeexplore.ieee.org/abstract/document/10817016) — CSITSS 2024

## Built with

- [Astro](https://astro.build) with React
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript

## Run locally

**Requirements:** Node.js 22.12 or later and pnpm.

```bash
pnpm install
pnpm dev
```

Open <http://localhost:4321>.

To create a production build:

```bash
pnpm build
```

## Updating content

- `src/data/resume.tsx` contains portfolio content, including profile details, experience, education, projects, and publications.
- `src/data/config.ts` contains the site URL and presentation settings.
- `src/pages/` contains the site pages.
- `public/` contains static assets such as logos and images.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` builds the site and deploys it to GitHub Pages when changes are pushed to `main`. The production site is <https://pranavdarshan.github.io/>.
