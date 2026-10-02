import { Icons } from "@/components/icons";
import { BookOpenText, BriefcaseBusiness, House } from "lucide-react";
import type { ReactNode } from "react";

const EMPTY_HACKATHONS: {
  title: string;
  dates: string;
  location?: string;
  description?: string;
  image?: string;
  links?: { title: string; icon: ReactNode; href: string }[];
}[] = [];

const EMPTY_PHOTOS: { src: string; alt: string }[] = [];

export const DATA = {
  name: "Pranav Darshan",
  initials: "PD",
  location: "Bengaluru, India",
  locationLink: "",
  description: "Computer Science Engineer and AI Researcher based in Bengaluru, India.",
  summary:
    "I work at the intersection of AI research and systems engineering. My research focuses on understanding and detecting failures in generative models, particularly hallucinations and knowledge conflicts in language and diffusion models. Alongside research, I work on cloud authentication, security, testing, and distributed systems at HPE Aruba.",
  avatarUrl: "",
  ogImage: "",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    research: { order: 2, enabled: true, heading: "Research" },
    work: { order: 3, enabled: true, heading: "Experience", presentLabel: "Present" },
    projects: {
      order: 4,
      enabled: true,
      label: "Selected Projects",
      heading: "Selected Projects",
      text: "A mix of applied AI and systems work.",
    },
    publications: { order: 5, enabled: true, heading: "Publications" },
    education: { order: 6, enabled: true, heading: "Education" },
    awards: { order: 7, enabled: true, heading: "Awards & Certifications" },
    skills: { order: 8, enabled: true, heading: "Technical Skills" },
    hackathons: {
      order: 10,
      enabled: false,
      label: "Hackathons",
      heading: "Hackathons",
      text: "",
    },
    photos: { order: 11, enabled: false, heading: "Photos" },
    contact: {
      order: 9,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "For research, engineering, or collaboration conversations, find me on GitHub or LinkedIn.",
    },
  },
  skills: [
    { category: "Languages", items: ["Python", "Java", "C", "SQL"] },
    { category: "ML / AI", items: ["LLMs", "RAG", "Diffusion Models", "Hallucination Detection"] },
    { category: "Cloud / Systems", items: ["AWS", "SageMaker", "Lambda", "Jenkins", "Grafana", "Redfish", "REST APIs"] },
    { category: "Frameworks / Tools", items: ["React", "Spring Boot", "Django", "Git", "WebSocket"] },
  ],
  photos: EMPTY_PHOTOS,
  hackathons: EMPTY_HACKATHONS,
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/#work", icon: BriefcaseBusiness, label: "Experience" },
    { href: "/publications", icon: BookOpenText, label: "Publications" },
  ],
  contact: {
    email: "",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/PranavDarshan",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pranav-darshan/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  research: [
    {
      title: "Hallucination detection across language models",
      description:
        "Across four language models and three factual QA datasets, evaluated 12 model-dataset settings using lexical, semantic, and trajectory-level response dispersion. Identified high-agreement \"Ghost\" and low-agreement \"Flickering\" regimes, with a 0.35–0.46 AUC detectability gap.",
      venue: "GlobalSouthAI Workshop @ NeurIPS 2026",
      accent: "blue",
    },
    {
      title: "Detecting RAG conflicts in diffusion models",
      description:
        "Developed Trajectory Variance Score (TVS), measuring semantic divergence across independent diffusion trajectories. On LLaDA across four datasets, TVS achieved 70.10% accuracy and 0.7647 AUROC.",
      venue: "UncertaiNLP Workshop @ EMNLP 2026",
      accent: "teal",
    },
  ],
  researchInterests: [
    "AI Safety",
    "Hallucination Detection",
    "Large Language Models",
    "Diffusion Language Models",
    "Mechanistic Interpretability",
    "Retrieval-Augmented Generation",
    "Reliable and Trustworthy AI",
  ],
  work: [
    {
      company: "Hewlett Packard Enterprise Aruba",
      href: "",
      badges: ["Current"],
      location: "Bengaluru, India",
      title: "Cloud Developer I",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Hewlett_Packard_Enterprise_logo_2025.svg",
      start: "Sep 2026",
      end: undefined,
      description:
        "Own production smoke testing across CloudAuth and CentralNAC, plus regression testing and E2E coverage for 11 modules. Handle defect triage and investigation with a typical one-day turnaround.",
    },
    {
      company: "Technical University of Applied Sciences Würzburg-Schweinfurt",
      href: "",
      badges: ["Research"],
      location: "Remote",
      title: "Research Collaborator",
      logoUrl: "/logos/thws.png",
      start: "Jan 2026",
      end: undefined,
      description:
        "Researching hallucination detection and RAG conflicts in language and diffusion models. Two workshop papers were accepted: GlobalSouthAI @ NeurIPS 2026 and UncertaiNLP @ EMNLP 2026.",
    },
    {
      company: "Hewlett Packard Enterprise Aruba",
      href: "",
      badges: [],
      location: "Bengaluru, India",
      title: "Cloud Development Intern",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Hewlett_Packard_Enterprise_logo_2025.svg",
      start: "Feb 2026",
      end: "Aug 2026",
      description:
        "Built Python/pytest automation for a wired overlay E2E workflow, raising automated coverage from 0% to approximately 85%; owned E2E testing for four modules and expanded regression coverage across CloudAuth and CentralNAC. Automated 802.1X, RADIUS, EAP, MPSK, MAC authentication, and MAC caching scenarios. Configured Aruba access points, switches, and gateways, including SSIDs, VLANs, and DHCP, and debugged gateway CLI issues. Managed production E2E runs through Jenkins and monitored them in Grafana. Filed a production-cluster CloudAuth defect later independently reported by a customer.",
    },
    {
      company: "Hewlett Packard Enterprise",
      href: "",
      badges: [],
      location: "Bengaluru, India",
      title: "CPP Project Intern",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Hewlett_Packard_Enterprise_logo_2025.svg",
      start: "Feb 2025",
      end: "Jul 2025",
      description:
        "Extended the DMTF Redfish API Emulator with POST/PATCH workflows for BIOS and system resets, BIOS configuration, Manager.Reset, VirtualMedia, and chassis management. Added dynamic state with unique Chassis IDs, System UUIDs, and Serial Numbers, plus status transitions, validation, logging, and error handling. Developed RAID0, RAID1, RAID5, and RAID10 volume creation and deletion. Contributed approximately 1,700 lines across 29 files in a merged pull request to the public emulator repository.",
    },
  ],
  education: [
    {
      school: "R.V. College of Engineering",
      href: "",
      degree: "Bachelor of Engineering in Computer Science and Engineering · CGPA 9.66/10",
      logoUrl: "/logos/rvce-crest.png",
      logoSource: "https://commons.wikimedia.org/wiki/File:Rv_New_logo_with_address.jpg",
      logoCredit: "Logo: Shreyas shaurya / Wikimedia Commons · CC BY-SA 4.0",
      start: "2022",
      end: "2026",
      location: "Bengaluru, India",
    },
  ],
  projects: [
    {
      title: "ChronoTick – Market Replay & Algorithmic Trading Simulator",
      href: "",
      dates: "",
      active: true,
      description:
        "A full-stack paper-trading platform for historical market replay with real-time candlestick charts and manual or algorithmic trading. Includes a Python strategy editor with SMA and RSI, market and limit orders, stop loss, long/short positions, P&L and position sizing, margin calls, and analytics for win rate, drawdown, and returns.",
      technologies: ["React", "TypeScript", "Python", "WebSocket"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AI-Powered Handwritten Exam Script Evaluation",
      href: "",
      dates: "",
      active: true,
      description:
        "An automated handwritten exam evaluation system using a fine-tuned LLaMA2 model and RAG to retrieve relevant textbook content. Inference ran on AWS SageMaker with Lambda-based API integration; the work was published in IEEE Xplore.",
      technologies: ["LLaMA2", "RAG", "AWS SageMaker", "Lambda"],
      links: [],
      image: "",
      video: "",
    },
  ],
  publications: [
    {
      title: "The Detectability Gap: Hidden Heterogeneity in Hallucination Detection Across Language Models",
      venue: "GlobalSouthAI Workshop @ NeurIPS 2026",
      status: "Accepted",
      href: "https://arxiv.org/abs/2609.35860",
      featured: true,
      accent: "blue",
    },
    {
      title: "The Temporal Tug-of-War: Visualizing and Detecting RAG Conflicts in Diffusion Models via Trajectory Variance",
      venue: "UncertaiNLP Workshop @ EMNLP 2026",
      status: "Accepted",
      href: "https://arxiv.org/abs/2609.31684",
      featured: true,
      accent: "purple",
    },
    {
      title: "Eyes All Around: Design and Analysis of 360-Degree LiDAR Perception Using Equivariant Feature Learning in Unstructured Traffic",
      venue: "arXiv (2026)",
      status: "arXiv",
      href: "https://arxiv.org/abs/2606.07626",
      description:
        "This paper studies a 360-degree LiDAR perception pipeline for autonomous driving, combining sector-wise panoramic processing with rotation-equivariant sparse convolutions. It evaluates a custom Ouster OS0 dataset collected across diverse Indian urban traffic conditions, finding strong detection for cars, buses, and trucks and lower scores for smaller, more variable road users.",
      featured: false,
      accent: "purple",
    },
    {
      title: "Intellectual Property Rights and Entrepreneurship in the NFT Ecosystem: Legal Frameworks, Business Models, and Innovation Opportunities",
      venue: "arXiv (2025)",
      status: "arXiv",
      href: "https://arxiv.org/abs/2507.00172",
      description:
        "This research examines the gap between traditional copyright law and blockchain-based NFT transactions. Using a mixed-methods approach, it introduces an IP rights matrix and a business-model taxonomy, and analyzes legal cases, smart contracts, and stakeholder interviews to identify challenges in cross-border enforcement, license standardization, and sustainable commercial opportunities.",
      featured: false,
      accent: "teal",
    },
    {
      title: "Leveraging LLM and RAG for Automated Answer Script Evaluation",
      venue: "CSITSS 2024",
      status: "IEEE Xplore",
      href: "https://ieeexplore.ieee.org/abstract/document/10817016",
      featured: false,
      accent: "teal",
    },
  ],
  awards: [
    "Award of Merit – INITIATE Enterprise Architecture 2025 Competition, The Open Group",
    "1st Place – IEEE Hackathon AI in Education, 2024",
  ],
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner (2025–2028)",
      href: "https://www.credly.com/badges/b10090ee-aa71-4eb1-a329-a3e610c2ab76/public_url",
    },
    {
      title: "AWS Machine Learning Fundamentals – Udacity",
      href: "https://www.udacity.com/certificate/e/c1158722-f6c0-11ee-af07-b327f9d37ad7",
    },
    {
      title: "AI Programming with Python – Udacity",
      href: "https://www.udacity.com/certificate/e/82a03532-6c23-11ee-b618-13931275cae6",
    },
    {
      title: "Financial Markets – Coursera",
      href: "https://www.coursera.org/account/accomplishments/certificate/KX6HTCMAJ79C",
    },
  ],
} as const;
