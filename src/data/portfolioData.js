export const portfolioData = {
  hero: {
    name: "Vaibhavi Jaiswal",
    roles: ["Full-Stack Engineer", "AI/ML Solutions Architect", "Research Engineer"],
    tagline: "Building intelligent systems at the intersection of deep learning and scalable infrastructure.",
    links: {
      github: "https://github.com/vaibhavij20",
      linkedin: "https://linkedin.com/in/vaibhavijaiswal",
      leetcode: "https://leetcode.com/vaibhavij20",
      resume: "/Vaibhavi_Jaiswal_Resume.pdf"
    },
    metrics: [
      { label: "LeetCode Solved", value: "280+", icon: "code" },
      { label: "Active Systems", value: "6+", icon: "cpu" },
      { label: "Research Papers", value: "1", icon: "file-text" },
      { label: "Certifications", value: "3", icon: "award" }
    ]
  },
  about: {
    university: "Vellore Institute of Technology (VIT)",
    focus: ["AI/ML Engineering", "Full-Stack Development", "Research & Innovation"],
    currently: "B.Tech in Artificial Intelligence & Machine Learning (CGPA: 8.38)",
    lookingFor: "Software Engineering & AI/ML Internship Opportunities",
    funFact: "Optimized satellite vision transformers achieving 93% R² prediction accuracy",
    timeline: [
      { year: "2023", title: "DSA Fundamentals", description: "Mastered core algorithms and data structures through competitive programming" },
      { year: "2024", title: "Full-Stack Development", description: "Built production-ready web applications with React, Node.js, and modern deployment pipelines" },
      { year: "2024", title: "AI/ML Integration", description: "Developed RAG systems, computer vision models, and multi-agent architectures" },
      { year: "2026", title: "Research Publication", description: "Submitting Vision Transformer research on cyclone tracking for peer review" },
      { year: "2026", title: "Advanced RAG Orchestrations", description: "Engineering multi-agent state charts and LangGraph-based autonomous systems" }
    ]
  },

  skills: {
    languages: ["Python", "Java", "C++", "JavaScript", "SQL", "TypeScript"],
    aiDeepLearning: ["LangGraph", "LangChain", "PyTorch", "TensorFlow", "Scikit-Learn", "Gemini API", "ChromaDB", "FAISS", "Ollama", "HuggingFace"],
    frameworks: ["React", "Node.js", "Express.js", "Flask", "Streamlit", "Docker", "Git", "GitHub Actions", "Vercel"],
    databases: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Vector Stores"]
  },


  projects: [
    {
      image: "/images/projects/trafficking-assessment.png",
      id: "trafficking-assessment",
      name: "Human Trafficking Risk Assessment & Blockchain Ledger",
      description: "An intelligent security system combining a Random Forest Classifier to predict trafficking threats with an immutable cryptographically hashed Blockchain ledger for tamper-resistant case management.",
      tags: ["Scikit-learn", "Blockchain", "Cryptography", "SHA-256", "Streamlit"],
      github: "https://github.com/vaibhavij20/aiblockchain",
      live: "https://aiblockchain-i2i6ddmilmr2yyb3izneop.streamlit.app",
      pipeline: "CTDC Dataset Processing → Random Forest Classification Risk Matrix → Secure SHA-256 Block Minting"
    },
    {
      image: "/images/projects/repo-assistant.png",
      id: "repo-assistant",
      name: "AI Repo Assistant",
      description: "RAG-powered interactive repository explorer utilizing language-aware semantic chunking pipelines to surface deep context answers directly over massive foreign codebases.",
      tags: ["LangChain", "ChromaDB", "Gemini AI", "Streamlit", "HuggingFace Embeddings"],
      github: "https://github.com/vaibhavij20/repo-assistant",
      live: "https://repo-assistant-bphqhsvugxjhwggbwcqzrf.streamlit.app",
      pipeline: "Clone Repository → AST-aware Language Chunking → ChromaDB Embedding Index → MMR Retrieval Matrix",
      
    },
    {
      image: "/images/projects/nayepankh-management.png",
      id: "nayepankh-management",
      name: "NayePankh Volunteer Management System",
      description: "An AI-enhanced enterprise portal built with automated mentor-matching agent layers and real-time operational coordination analytical grids.",
      tags: ["Streamlit", "Python", "AI Agent System", "Data Analytics"],
      github: "https://github.com/vaibhavij20/nayepankh",
      live: "https://nayepankh-7d8ewzrbfrr7gttdpwzvvw.streamlit.app",
      pipeline: "Volunteer Data Ingestion → AI-Based Mentor Matching → Real-time Coordination Dashboard"
    },
    {
      image: "/images/projects/cyclone-prediction.png",
      id: "cyclone-prediction",
      name: "Cyclone Tracking & Intensity Prediction",
      description: "A computer vision neural pipeline training Vision Transformers (ViT) on multi-spectral satellite imagery datasets to compute real-time structural vector intensities.",
      tags: ["Vision Transformers", "PyTorch", "Python", "Deep Learning"],
      github: "https://github.com/vaibhavij20",
      metrics: { mae: "5.54", r2: "0.93" },
      pipeline: "Satellite Imagery Ingestion → ViT Feature Extraction → Intensity Regression Model → Real-time Tracking Output",
      
    },
    {
      image: "/images/projects/school-website.png",
      id: "school-website",
      name: "Modern School Hub Platform (SRJIC)",
      description: "A responsive educational platform engineered for search engine discoverability, optimized asset rendering distributions, and smooth micro-interactions.",
      tags: ["React", "Tailwind CSS", "Vercel", "SEO Optimization", "Framer Motion"],
      github: "https://github.com/vaibhavij20/srjic",
      live: "https://srjic.vercel.app",
      pipeline: "Content Management System → SEO-Optimized Rendering → Vercel Edge Deployment"
    },
    {
      image: "/images/projects/ai-optimizer.png",
      id: "ai-optimizer",
      name: "Autonomous AI Code Optimization Agent",
      description: "A multi-agent system powered by LangGraph that profiles Python execution workflows inside an isolated Docker sandbox and iteratively optimizes algorithmic inefficiencies.",
      tags: ["LangGraph", "Docker", "Gemini API", "FAISS", "Python"],
      github: "https://github.com/vaibhavij20/codeoptimiser",
      pipeline: "Code Input → Static Analysis → Runtime Profiling → FAISS Retrieval → LangGraph Multi-Agent Optimization → Docker Sandbox Validation → Performance Report"
    }
  ],

  research: {
    paper: {
      title: "Cyclone Tracking and Intensity Prediction using Vision Transformers",
      description: "Architected an optimized ViT network configuration evaluating spectral satellite telemetry matrices to identify tracking models with low spatial variant error anomalies.",
      metrics: { mae: "5.54", r2: "0.93" }
    }
  },

  certifications: [
    {
      title: "Network Addressing and Basic Troubleshooting",
      issuer: "Cisco",
      date: "2024",
      verify: "https://www.credly.com/badges/08a87cfd-9a0e-4074-bb8a-9a44ddc62910/public_url"
    },
    {
      title: "Full-Stack Web Development",
      issuer: "Udemy",
      date: "2024",
      verify: "https://www.udemy.com/certificate/UC-547f600f-3f02-4296-bb86-50c12e5775ed/"
    },
    {
      title: "GEN AI Using IBM Watsonx",
      issuer: "IBM",
      date: "2024",
      verify: "https://courses.vit.skillsnetwork.site/certificates/423b734ac9e3448ebae4103e480ccc84"
    }
  ],

  github: {
    username: "vaibhavij20",
    stats: "https://github-profile-summary-cards.vercel.app/api/cards/stats?username=vaibhavij20&theme=github_dark",
    languages: "https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=vaibhavij20&theme=github_dark",
    productiveTime: "https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=vaibhavij20&theme=github_dark"
  },

  contact: {
    email: "vaibhavijaiswal2002@gmail.com",
    web3formsKey: "620631a2-3487-45d6-a8ae-952df2fd9f54"
  }
};