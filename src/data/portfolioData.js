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
      { label: "LeetCode Solved", value: "58+", icon: "code" },
      { label: "Active Systems", value: "6+", icon: "cpu" },
      { label: "Research Papers", value: "1", icon: "file-text" },
      { label: "Certifications", value: "2", icon: "award" }
    ]
  },

  // Achievements
  achievements: [
    "3rd Place Winner: Ranked 3rd out of hundreds of peer competitors in a highly competitive coding battle among 3rd-year students at VIT Chennai.",
    "Hackathon Finalist: Secured a spot as a Top 20 Finalist at Hack Night ’25, an elite inter-college hackathon championship."
  ],

  about: {
    university: "Vellore Institute of Technology (VIT)",
    focus: ["AI/ML Engineering", "Full-Stack Development", "Research & Innovation"],
    currently: "B.Tech in Artificial Intelligence & Machine Learning (CGPA: 8.38)",
    lookingFor: "Software Engineering & AI/ML Internship Opportunities",
    funFact: "Optimized satellite vision transformers achieving 93% R² prediction accuracy",
    timeline: [
      { year: "2023", title: "DSA Fundamentals", description: "Mastered core algorithms and data structures through competitive programming" },
      { year: "2024", title: "Full-Stack Development", description: "Built production-ready web applications with React, Node.js, and\n\n## Production Deployment Options\n\n- **Project images are now integrated and visible in the Projects section.**\n\nmodern deployment pipelines" },
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
      architecture: [
        "Developed a RAG-powered interactive codebase parser using language-aware Abstract Syntax Tree (AST) semantic chunking to capture deep technical contexts across complex external architectures.",
        "Constructed an optimized retrieval matrix using Maximal Marginal Relevance (MMR) over vector space representations hosted natively in ChromaDB indexes."
      ]
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
      architecture: [
        "Co-architected an optimized Vision Transformer (ViT) configuration in a cross-functional team, evaluating spectral satellite telemetry matrices to minimize spatial variant error anomalies.",
        "Collaborated on the training and tuning loops to achieve a structural vector intensity prediction accuracy of 93% R² score and an MAE of 5.54 during rigorous neural validation testing."
      ]
    },
    {
      image: "/images/projects/school-website.png",
      id: "school-website",
      name: "Modern School Hub Platform (SRJIC)",
      description: "A responsive, SEO-optimized educational platform featuring decoupled interaction loops to ensure a 0ms Total Blocking Time (TBT) on the main thread.",
      achievements: [
        "3rd Place Winner: Ranked 3rd out of hundreds of peer competitors in a highly competitive coding battle among 3rd‑year students at VIT Chennai.",
        "Hackathon Finalist: Secured a spot as a Top 20 Finalist at Hack Night ’25, an elite inter‑college hackathon championship."
      ],
      tags: ["React", "Tailwind CSS", "Vercel", "SEO Optimization", "Framer Motion"],
      github: "https://github.com/vaibhavij20/srjic",
      live: "https://srjic.vercel.app",
      pipeline: "Content Management System → SEO-Optimized Rendering → Vercel Edge Deployment",
      metrics: {
        mae: "98/100",  // Actual Production Lighthouse Performance Index
        r2: "0.70s"     // Actual Document First Contentful Paint (FCP) Speed Tracker
      },
      architecture: [
        "Engineered a responsive, SEO-optimized educational platform featuring decoupled interaction loops to ensure a 0ms Total Blocking Time (TBT) on the main thread.",
        "Deployed a highly optimized asset rendering architecture via global edge middleware routing paths, resulting in a 0.70s First Contentful Paint (FCP).",
        "Achieved a validated 98/100 production Lighthouse Performance Index for discoverability, access speeds, and mobile-first micro-interactions."
      ]
    },
    {
      image: "/images/projects/ai-optimizer.png",
      id: "ai-optimizer",
      name: "Autonomous AI Code Optimization Agent",
      description: "A multi-agent system powered by LangGraph that profiles Python execution workflows inside an isolated Docker sandbox and iteratively optimizes algorithmic inefficiencies.",
      tags: ["LangGraph", "Docker", "Gemini API", "FAISS", "Python"],
      github: "https://github.com/vaibhavij20/codeoptimiser",
      architecture: [
        "Engineered a production multi-agent system utilizing LangGraph to build iterative code profiling and runtime optimization graphs.",
        "Isolated code execution flows securely inside dynamically managed Docker sandboxes to map structural bottlenecks safely.",
        "Integrated an automated semantic loop that cross-checks code targets against indexed software engineering design patterns to generate valid algorithmic optimizations verified by unit boundaries."
      ]
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
      title: "IBM Watsonx AI Assistant",
      issuer: "IBM",
      date: "2024",
      verify: "https://www.credly.com/badges/verify"
    },
    {
      title: "Full-Stack Web Development",
      issuer: "Udemy",
      date: "2024",
      verify: "https://www.udemy.com/certificate"
    }
  ],

  github: {
    username: "vaibhavij20",
    stats: "https://github-profile-summary-cards.vercel.app/api/cards/stats?username=vaibhavij20&theme=github_dark",
    languages: "https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=vaibhavij20&theme=github_dark",
    productiveTime: "https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=vaibhavij20&theme=github_dark"
  },

  contact: {
    email: "vaibhavi.jaiswal2023@vitstudent.ac.in",
    web3formsKey: "620631a2-3487-45d6-a8ae-952df2fd9f54"
  }
};