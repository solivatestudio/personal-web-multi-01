export interface Project {
  id: number;
  title: string;
  slug: string;
  company: string;
  category: string;
  description: string;
  excerpt: string;
  tags: string[];
  image?: string;
  link: string | null;
  projectDate: string;
  details?: {
    overview: string;
    challenge: string;
    approach: string;
    technicalOverview: string;
    outcome: string;
  };
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  details: string[];
}

export const portfolioProjects: Project[] = [
  {
    id: 31,
    title: "ShellMate — Multi-SSH & SFTP Client",
    slug: "shellmate-multissh-device",
    company: "Open-Source / Local-First SaaS",
    category: "Systems & Desktop Utility",
    description: "A production-ready, self-hosted, and local-first Multi-SSH client desktop application built with Tauri v2, Rust, React, and TypeScript. Features a cryptographic secure credentials vault using Argon2id and AES-256-GCM, SQLite database storage, full multi-session terminal tabs with xterm.js, built-in interactive SFTP browser, port forwarding management, TOFU host key verification, exponential backoff auto-reconnect, and command broadcasting capabilities across active SSH sessions.",
    excerpt: "A production-ready, self-hosted, and local-first Multi-SSH client desktop application built with Tauri v2, Rust, React, and TypeScript.",
    tags: ["Tauri", "Rust", "React", "TypeScript", "SSH", "SFTP", "AES-256-GCM", "Argon2id"],
    projectDate: "2026-06-12",
    link: "https://github.com/hmad28/shellmate-multissh-device",
    details: {
      overview: "ShellMate was built to solve the security and complexity issues of managing dozens of remote servers. Traditional clients store credentials in plain-text or easily extractable formats. ShellMate addresses this with a local-first, cryptographically locked credential store.",
      challenge: "Providing a seamless SSH session dashboard with multiple terminal windows while assuring that private keys and passwords are completely secure at rest on the client machine without external auth providers.",
      approach: "Engineered a hybrid desktop app using Rust (Tauri v2) for low-level systems APIs and credentials processing, and React for a clean, tabbed dashboard. Utilized Argon2id for key derivation and AES-256-GCM to encrypt the SQLite database containing host details and credentials.",
      technicalOverview: "Implemented high-performance raw TCP socket connections in Rust, bridging them to xterm.js in the frontend via IPC. Designed a broadcast controller that replicates keyboard inputs across active sessions simultaneously, significantly shortening batch maintenance tasks.",
      outcome: "Open-sourced client with positive feedback from infrastructure engineers who value local-first privacy. Handled concurrent sessions with sub-millisecond input lag and zero memory leaks."
    }
  },
  {
    id: 27,
    title: "BLH Hunter — Broken Social Link Hijacking Recon",
    slug: "blh-hunter",
    company: "Security Research",
    category: "Cybersecurity & Web Utility",
    description: "A local reconnaissance workspace and security testing tool for discovering broken social links (Broken Link Hijacking), exposed third-party collaboration links, and sensitive configuration files across target subdomains. Built with FastAPI, SQLite, and an interactive system dashboard. Successfully used to discover multiple high-impact vulnerabilities, including in NASA's web infrastructure.",
    excerpt: "A local reconnaissance workspace and security testing tool for discovering broken social links, exposed collaboration links, and sensitive files.",
    tags: ["Python", "FastAPI", "SQLite", "Security Dorking", "Reconnaissance", "Vulnerability Assessment"],
    projectDate: "2026-06-01",
    link: "https://github.com/hmad28/BLH-hunter",
    details: {
      overview: "Broken Link Hijacking (BLH) occurs when a company's web assets point to dead social media handles or domains, allowing malicious actors to register them and hijack their identity. BLH Hunter automates the detection of these stale endpoints at scale.",
      challenge: "Orchestrating hundreds of parallel HTTP requests, parsing responses for custom social media profile links, and validating ownership statuses without triggering rate limits or security blocks.",
      approach: "Built an asynchronous scanning engine in Python utilizing `httpx` and `BeautifulSoup4`. Coupled it with a clean web dashboard that categorizes targets by severity, highlights high-value hijacking vectors, and exposes dork templates.",
      technicalOverview: "Designed custom parser modules for major services (Twitter/X, LinkedIn, GitHub, YouTube). Leveraged SQLite to keep track of target subdomains and scan histories, allowing differential scans that highlight newly introduced exposures.",
      outcome: "Successfully identified multiple vulnerabilities on high-profile domains. Earned letters of appreciation and listings in responsible disclosure programs, including the NASA Vulnerability Disclosure Program (VDP)."
    }
  },
  {
    id: 24,
    title: "Proxymon — Network Traffic Monitor & Proxy",
    slug: "proxymon",
    company: "Open Source Utility",
    category: "Systems & Desktop Utility",
    description: "A Windows tray application built in Go that runs a local HTTP CONNECT and SOCKS5 proxy, binds outbound traffic to selected network interfaces, and displays real-time aggregate and per-adapter bandwidth analytics on an embedded HTML/JS dashboard.",
    excerpt: "A Windows tray application built in Go that runs a local HTTP CONNECT and SOCKS5 proxy.",
    tags: ["Go", "Windows API", "Tailwind CSS", "WebView2", "Proxy", "Traffic Analysis"],
    projectDate: "2026-04-11",
    link: "https://github.com/hmad28/proxymon",
    details: {
      overview: "Proxymon is a developer utility designed to monitor and force internet traffic through specific adapters (e.g., Ethernet vs Wi-Fi vs VPN) on Windows. This is particularly useful for debugging geo-restricted APIs or testing multi-interface failover behaviors.",
      challenge: "Directing arbitrary application traffic through specific adapters on Windows without global routing table manipulation, which often breaks other background connections.",
      approach: "Created a lightweight SOCKS5/HTTP proxy in Go. Users configure target software (e.g. browsers, cURL) to use this local proxy. The proxy dynamically binds outbound connections to the IP address of the chosen network adapter.",
      technicalOverview: "Leveraged Windows API interfaces via Go sys calls to fetch network adapter metadata. Built a high-performance websocket stream that feeds real-time bandwidth metrics into a local WebView2 client displaying graphs.",
      outcome: "Lightweight tool running under 15MB of RAM, enabling secure adapter-specific traffic routing with zero performance overhead."
    }
  }
];

export const allProjects: Project[] = [
  ...portfolioProjects,
  {
    id: 30,
    title: "Hematt — Privacy-First Finance Manager",
    slug: "hmatt-app",
    company: "Hematt",
    category: "Mobile Application Development",
    description: "A privacy-first personal finance management application designed for Indonesian users. Built with Flutter and Dart, utilizing Clean Architecture (Data, Domain, Presentation layers) and Riverpod state management. Features include OCR receipt scanning via Google ML Kit, local-first offline storage with Hive, fl_chart visualizations, and an optional AI assistant proxy.",
    excerpt: "A privacy-first personal finance management application designed for Indonesian users built with Flutter and Hive.",
    tags: ["Flutter", "Dart", "Riverpod", "Hive", "Google ML Kit"],
    projectDate: "2026-06-11",
    link: "https://github.com/hmad28/hmatt-app"
  },
  {
    id: 29,
    title: "Threads Autopost — AI Post Scheduler",
    slug: "threads-autopost",
    company: "Local-First SaaS",
    category: "Fullstack Web Development",
    description: "A local-first automation dashboard and scheduler for generating and publishing threads. Built with Next.js dashboard, FastAPI async backend, Redis, and Celery workers for background scheduling. Features RSS/news topic discovery, local AI-powered draft generation, Meta Threads OAuth integration, media publishing pipelines, and automated token refresh utilities.",
    excerpt: "A local-first automation dashboard and scheduler for generating and publishing threads using Next.js and FastAPI.",
    tags: ["NextJS", "FastAPI", "Celery", "Tailwind CSS", "Redis"],
    projectDate: "2026-06-04",
    link: "https://github.com/hmad28/threads-autopost"
  },
  {
    id: 28,
    title: "Multi-School — Multi-Tenant School SaaS",
    slug: "multi-school",
    company: "SaaS Platform",
    category: "Fullstack Web Development",
    description: "A production-ready SaaS school management platform serving multiple independent school tenants from a single database. Built with Laravel, Vue 3, Inertia, and TypeScript. Implements custom multi-tenant request routing, trial expiration/billing middleware, automatic audit logs, dynamic onboarding wizards, and role-based portals.",
    excerpt: "A production-ready SaaS school management platform serving multiple independent school tenants from a single database.",
    tags: ["Laravel", "Vue 3", "InertiaJS", "Multi-Tenant SaaS", "TypeScript"],
    projectDate: "2026-06-03",
    link: "https://github.com/hmad28/multi-school"
  }
];

export const roles: Experience[] = [
  {
    period: "Jun 2026 - Present",
    title: "Tech Lead",
    company: "Solivate Studio",
    details: [
      "Leads architecture, stack decisions, code review, and technical delivery for client projects across travel, logistics, education, and food businesses.",
      "Coordinates parallel Next.js and Laravel projects with a small delivery team."
    ]
  },
  {
    period: "Jan 2026 - Present",
    title: "Fullstack Developer & Systems Owner",
    company: "Travel & Logistics Business Group",
    details: [
      "Sole developer of a monorepo ecosystem connecting admin, finance, operations, airport handling, and logistics dashboards.",
      "Migrating spreadsheet-based operations into centralized PostgreSQL systems serving thousands of Umrah pilgrim records.",
      "Owns VPS infrastructure, deployment, production maintenance, and incident resolution."
    ]
  },
  {
    period: "Nov 2024 - Present",
    title: "Independent Freelance Developer & Security Researcher",
    company: "Self-employed",
    details: [
      "Delivered 20+ projects spanning multi-tenant SaaS, POS systems, e-commerce, corporate sites, and mobile applications.",
      "Conducted vulnerability research and automated scanning, reporting critical flaws to Indonesian ministries, institutions, and global organizations."
    ]
  }
];

export const securityRecognitions = [
  "NASA Vulnerability Disclosure Program (VDP)",
  "ESDM-CSIRT (Kementerian ESDM)",
  "Kementerian PU-CSIRT",
  "BMKG-CSIRT (Badan Meteorologi Klimatologi Geofisika)",
  "Diskominfo Kota Bogor",
  "Universitas Brawijaya",
  "CilacapKab-CSIRT",
  "PurbalinggaKab-CSIRT",
  "Detikcom Media",
  "Jakarta Smart City",
  "Kabupaten Sukoharjo",
  "Kabupaten Bantul"
];

export const capabilities = [
  {
    id: "01",
    title: "APPLICATION SECURITY",
    description: "Deep source-code audits, secure authentication architecture design, API fuzzing, and structural dependency vulnerability mapping to guarantee secure builds from line one.",
    matrix: [
      { name: "Code Review & Audits", rating: 5 },
      { name: "OAuth & Auth Architecture", rating: 5 },
      { name: "Dependency Verification", rating: 4 }
    ]
  },
  {
    id: "02",
    title: "VULNERABILITY ASSESSMENT",
    description: "Automated and manual external reconnaissance targeting exposed configuration files, broken link hijacking (BLH) entrypoints, and third-party SaaS integration vulnerabilities.",
    matrix: [
      { name: "Reconnaissance (OSINT)", rating: 5 },
      { name: "Broken Link Hijacking", rating: 5 },
      { name: "Cloud Configuration Audits", rating: 4 }
    ]
  },
  {
    id: "03",
    title: "SECURITY SOLUTIONS & AUTOMATION",
    description: "Building custom security tools like local-first encrypted clients (Tauri/Rust) and asynchronous reconnaissance scanners (Python/FastAPI) to automate repetitive testing pipelines.",
    matrix: [
      { name: "Custom Tool Development", rating: 5 },
      { name: "System Programming (Rust/Go)", rating: 4 },
      { name: "Automation Pipelines", rating: 5 }
    ]
  }
];
