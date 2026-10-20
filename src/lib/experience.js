// 工作經驗列表
export const workExperience = [
    {
        period: "2026 Mar - 2026 Aug",
        location: "Taipei, Taiwan",
        role: "Data Engineering Intern",
        company: "Aiii Marketing",
        url: "https://www.aiii.ai/en",
        division: "AI-native CRM software startup (healthcare & pharma)",
        description: [
            "Built data pipelines that structure LLM-extracted customer-conversation insights into PostgreSQL via SQLAlchemy, with JSON schema validation of LLM outputs.",
            "Redesigned an aesthetic clinic's AI customer service from single RAG into a LangGraph multi-agent system on an on-premise LLM, evaluated with DeepEval.",
            "Developed a Text2SQL pipeline for natural-language CRM queries, exposed via REST API and MCP for AI clients.",
            "Refactored a client's BigQuery data service from gRPC to FastAPI and maintained monthly reporting systems."
        ],
        skills: ["LangGraph", "MCP", "Text2SQL", "DeepEval", "FastAPI", "PostgreSQL", "SQLAlchemy", "BigQuery"],
        current: false
    },
    {
        period: "2024 Sep - 2025 Aug",
        location: "Taipei, Taiwan",
        role: "Data Engineering Intern",
        company: "Institute for Information Industry",
        url: "https://www.iii.org.tw/en",
        division: "Government-funded IT research institute",
        description: [
            "Architected a web app that generates trend reports from daily news using internal databases, LLM APIs (Claude, OpenAI) and Google Sheets; later commercialized by the institute.",
            "Deployed an automated newsletter service that summarizes scraped news with LLMs and sends daily digests.",
            "Built pandas pipelines processing 1M+ Amazon product records for analytics dashboards.",
            "Interpreted for Japanese client visits, supporting a partnership with the Japan Research Institute."
        ],
        skills: ["Claude API", "OpenAI API", "LangChain", "Pandas", "Streamlit", "Looker Studio", "Render"],
        current: false
    },
    {
        period: "2024 Sep - 2025 Aug",
        location: "Taipei, Taiwan",
        role: "Research Assistant",
        company: "C2L2 Lab, National Taiwan University",
        url: "https://c2l2.org/",
        division: "Applied Economics and Data Science Research Lab",
        description: [
            "Co-authored (2nd author) TW-LegalBench, the first benchmark evaluating LLMs on Taiwanese law; accepted at ICAIL 2026 (long paper) and presented at the NVIDIA GTC Research Summit Taipei.",
            "Built a pipeline converting official exam PDFs into 16,000+ structured questions across 18 professional exam categories.",
            "Translated the dataset, including court judgments, into English at scale with the Claude Batch API."
        ],
        skills: ["LLM Evaluation", "Claude Batch API", "Pandas", "Regex"],
        current: false
    },
    {
        period: "2022 Dec - 2023 Mar",
        location: "Taipei, Taiwan",
        role: "Research Assistant",
        company: "National Taiwan University",
        url: "https://www.ntu.edu.tw/english/",
        division: "Department of Economics",
        description: [
            "Led a 12-person team of assistants and international freelancers to map SIC industry codes to HS trade codes, designing the matching rubric and performance-based pay."
        ],
        skills: ["Team Leadership", "Data Mapping"],
        current: false
    }
];

// 教育背景列表
export const educationHistory = [
    {
        period: "2026 Sep - 2028 Jun",
        location: "Mannheim, Germany",
        university: "University of Mannheim",
        url: "https://www.uni-mannheim.de/en/",
        degree: "M.S. in Business Informatics",
        school: "School of Business Informatics and Mathematics",
        cumGPA: "",
        highlights: [],
        tags: ["Large-Scale Data Management", "Advanced Software Engineering", "Web Data Integration", "AI Deployment and Operations"],
        current: false
    },
    {
        period: "2020 Sep - 2025 Jun",
        location: "Taipei, Taiwan",
        university: "National Taiwan University",
        url: "https://www.ntu.edu.tw/english/",
        degree: "B.A. in Economics",
        school: "College of Social Science",
        cumGPA: "4.12/4.30",
        highlights: ["NTU Presidential Award - 2021"],
        tags: ["Economics", "Statistics", "Econometrics", "Data Science", "Machine Learning", "Database", "Operations Research"],
        current: false
    },
    {
        period: "2023 Apr - 2024 Jul",
        location: "Tokyo, Japan",
        university: "Waseda University",
        url: "https://www.waseda.jp/top/en/",
        degree: "B.A. in Global Political Economics",
        school: "School of Political Science and Economics",
        cumGPA: "3.64/4.00",
        highlights: ["BXAI - Asian Future Leader Scholarship Program 2023", "Data Science Certificate - Intermediate Level"],
        tags: ["Economics", "Political Communication", "Text Analysis", "Data Science"],
        current: false
    },
]