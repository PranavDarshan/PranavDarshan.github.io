import { Icons } from "@/components/icons";
import { BookOpenText, BriefcaseBusiness, FolderKanban, GraduationCap, House } from "lucide-react";
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
  resumeUrl: "/resume.pdf",
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
    certifications: { order: 7, enabled: true, heading: "Certifications" },
    awards: { order: 8, enabled: true, heading: "Awards" },
    skills: { order: 9, enabled: true, heading: "Technical Skills" },
    hackathons: {
      order: 11,
      enabled: false,
      label: "Hackathons",
      heading: "Hackathons",
      text: "",
    },
    photos: { order: 12, enabled: false, heading: "Photos" },
    contact: {
      order: 10,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "For research, engineering, or collaboration conversations, find me on GitHub or LinkedIn.",
    },
  },
  skills: [
    { category: "Languages", items: ["Python", "Java", "C", "SQL"] },
    { category: "ML / AI", items: ["LLMs", "RAG", "Diffusion Models", "Hallucination Detection", "Prompt Engineering", "PyTorch", "TensorFlow", "Hugging Face", "Model Fine-Tuning"] },
    { category: "Cloud / Systems", items: ["AWS", "AWS E2E", "SageMaker", "Lambda", "Step Functions", "S3", "Jenkins", "Grafana", "Redfish", "REST APIs"] },
    { category: "Frameworks / Tools", items: ["React", "Django", "Git", "WebSocket", "Linux", "Bash"] },
  ],
  photos: EMPTY_PHOTOS,
  hackathons: EMPTY_HACKATHONS,
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/#work", icon: BriefcaseBusiness, label: "Experience" },
    { href: "/projects", icon: FolderKanban, label: "Projects" },
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
      "Google Scholar": {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=18hK4OYAAAAJ&hl=en",
        icon: GraduationCap,
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
      company: "RVCE – Centre of Excellence in Connected Autonomous Vehicles",
      href: "",
      badges: ["Research"],
      location: "Bengaluru, India",
      title: "Research Collaborator",
      logoUrl: "/logos/rvce-crest.png",
      start: "",
      end: undefined,
      description:
        "Collaborating on 360-degree LiDAR perception in dense, unstructured urban traffic. The work explores panoramic sensing, azimuthal sector-wise processing, and rotation-equivariant sparse convolutions, evaluated on a custom Ouster OS0 dataset collected in Indian urban conditions. Detection was strongest for cars (92.02/90.51), buses (80.53/76.34), and trucks (78.59/74.16), with smaller and more variable road users presenting greater challenges. This work is titled **Eyes All Around: Design and Analysis of 360-Degree LiDAR Perception Using Equivariant Feature Learning in Unstructured Traffic**. [RVCE Centre of Excellence](https://rvce.edu.in/department/ece/centre_of_excellence_in_connected_autonomous_vehicles/).",
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
      href: "https://github.com/DMTF/Redfish-Interface-Emulator/pull/127",
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
      start: "2022",
      end: "2026",
      location: "Bengaluru, India",
    },
  ],
  projects: [
    {
      title: "ChronoTick – Market Replay & Algorithmic Trading Simulator",
      href: "https://github.com/PranavDarshan/ChronoTick-Algorithmic-Stock-Market-Trading-Simulator",
      dates: "",
      active: true,
      description:
        "A market-replay paper-trading simulator for testing strategies against historical data. Supports manual and algorithmic trading, configurable replay speed and date ranges, multi-symbol charts, a Python strategy editor, orders, risk controls, and performance analytics.",
      technologies: ["React", "TypeScript", "Python", "WebSocket"],
      accent: "blue",
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AutoGrader – Handwritten Exam Script Evaluation",
      href: "https://github.com/PranavDarshan/AutoGrader",
      dates: "",
      active: true,
      description:
        "An Operating Systems answer-script evaluator using a fine-tuned LLaMA 2 model, handwriting recognition, and retrieval-augmented generation to ground grading in textbook content. Deployed with AWS SageMaker and Lambda; the project is described in the IEEE CSITSS 2024 publication.",
      technologies: ["LLaMA2", "RAG", "AWS SageMaker", "Lambda"],
      accent: "teal",
      links: [],
      image: "",
      video: "",
    },
    {
      title: "NASGuard v6 – IPv6 Home Server",
      href: "https://github.com/PranavDarshan/NASGuard-v6-Home-Server",
      dates: "",
      active: true,
      description:
        "A lightweight NAS for IPv6-only servers, using WireGuard to securely connect IPv4-only clients and Samba for private file sharing. Designed to run on low-spec and older hardware.",
      technologies: ["Debian", "IPv6", "WireGuard", "Samba", "iptables"],
      accent: "violet",
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Internet-Controlled Robotic Delivery System",
      href: "https://github.com/PranavDarshan/ESP8266-IoT-Delivery-Vehicle",
      dates: "",
      active: true,
      description:
        "Built a remotely controlled delivery prototype combining a small car and robotic arm. A NodeMCU connected the hardware to the Blynk platform for control over the internet. OpenCV image processing was integrated with a dynamic inventory and tracking system. The prototype explores technology that could contribute to future last-mile delivery automation.",
      technologies: ["NodeMCU", "Blynk", "OpenCV", "Image Processing"],
      accent: "blue",
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Next-Gen E-Commerce",
      href: "https://github.com/PranavDarshan/Next-Gen-Ecommerce",
      dates: "",
      active: true,
      description:
        "A full-stack commerce platform with authentication, product and inventory management, shopping cart, checkout, and an admin dashboard. Integrates LLaMA Vision for product recognition and AI-assisted search.",
      technologies: ["React", "Java", "Spring Boot", "MySQL", "LLaMA Vision"],
      accent: "teal",
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AI-Powered Automotive Fault Detection",
      href: "https://github.com/PranavDarshan/Automotive-Fault-Detection",
      dates: "",
      active: true,
      description:
        "A vehicle-health and predictive-maintenance project that uses TabNet to estimate fault risk from sensor data, with an LLM generating human-readable explanations and recommendations.",
      technologies: ["TabNet", "Python", "React", "LLaMA"],
      accent: "violet",
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
    {
      title: "Award of Merit",
      event: "INITIATE Enterprise Architecture Competition",
      organization: "The Open Group",
      year: "2025",
    },
    {
      title: "1st Place",
      event: "IEEE Hackathon: AI in Education",
      organization: "IEEE",
      year: "2024",
    },
  ],
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner (2025–2028)",
      provider: "AWS",
      href: "https://www.credly.com/badges/b10090ee-aa71-4eb1-a329-a3e610c2ab76/public_url",
    },
    {
      title: "AWS Machine Learning Fundamentals – Udacity",
      provider: "Udacity",
      href: "https://www.udacity.com/certificate/e/c1158722-f6c0-11ee-af07-b327f9d37ad7",
    },
    {
      title: "AI Programming with Python – Udacity",
      provider: "Udacity",
      href: "https://www.udacity.com/certificate/e/82a03532-6c23-11ee-b618-13931275cae6",
    },
    {
      title: "Financial Markets – Coursera",
      provider: "Coursera",
      href: "https://www.coursera.org/account/accomplishments/certificate/KX6HTCMAJ79C",
    },
  ],
} as const;
