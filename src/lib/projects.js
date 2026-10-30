// 專案類別列表（用於篩選器）
export const categories = [
    {title: "Data Science", value: "ds"}, 
    {title: "Data Analytics", value: "da"}, 
    {title: "Data Engineering", value: "de"},
    {title: "AI Application", value: "ai"}, 
    {title: "Web Development", value: "web"}
];

// 專案列表
export const projects = [
    {
        title: "German Electricity Prediction - AI Deployment and Operations Project",
        description: "Ongoing team course project (Uni Mannheim, AI Deployment and Operations) on forecasting German electricity consumption. I built the feature engineering pipeline that merges nine public data sources into one modelling dataset, and I'm now building the SARIMAX model.",
        image: "/projects/ai_deployment.png",
        period: {start: "2026-10", end: null},
        skills: ["Python", "Pandas"],
        topics: ["Time Series", "Feature Engineering", "ETL", "MLOps"],
        link: "",
        github: "https://github.com/Wh4130/Germany-Electricity-Prediction-AI-DevOps",
        category: ["ds", "de"]
    },
    {
        title: "Airport Data Integration - Web Data Integration Project",
        description: "Course project (Uni Mannheim, Web Data Integration) integrating airport data from OurAirports, Wikidata (queried via SPARQL) and a Kaggle dataset into one schema. Profiled each source, cleaned and resolved conflicts such as a feet/metres elevation mix-up, aggregated runways into a list attribute, and checked empirically that the sources are heterogeneous enough for matching.",
        image: "/projects/airport-data-integration.png",
        period: {start: "2026-09", end: null},
        skills: ["Python", "Pandas", "SPARQL", "Wikidata"],
        topics: ["Data Integration"],
        link: "",
        github: "https://github.com/Wh4130/Web-Data-Integration-Project",
        category: ["de"]
    },
    {
        title: "Taiwan Media Dashboard",
        description: "Scrapes news from three Taiwanese outlets across the ideological spectrum. Search by keyword to retrieve articles, plot keyword trends, view category distributions and word clouds, and draw network graphs from search results. It collected around 1,000 articles per day on a daily schedule; data covers up to March 2026 and scraping is no longer scheduled.",
        image: "/projects/taiwan-media-dashboard.png",
        period: {start: "2025-11", end: "2026-03"},
        skills: ["Streamlit", "Plotly", "Pandas", "Selenium", "MongoDB"],
        topics: [],
        link: "https://taiwan-media-dashboard-tool.streamlit.app/",
        github: "https://github.com/Wh4130/Taiwan-Media-Dashboard",
        category: ["de"]
    },
    {
        title: "Easy Essay",
        description: "A RAG-based Literature Review Tool that makes you organize your thoughts and manage your knowledge neatly. Used by friends for their own literature reviews, who found it helpful.",
        image: "/projects/easyessay.png",
        period: {start: "2025-07", end: "2026-01"},
        skills: ["Langchain", "Streamlit", "Pinecone", "FastAPI", "Render", "Pandas", "Cerebras", "LiteLLM"],
        topics: [],
        link: "https://easyessay-literature-review-toolkit-guest.streamlit.app/",
        github: "https://github.com/Wh4130/easyessay_literature_review_toolkit",
        category: ["ai"]
    },
    {
        title: "Play Tic-Tac-Toe with AI",
        description: "Play Tic-Tac-Toe against an AI agent built on the GAME agent principle.",
        image: "/projects/tictactoe.gif",
        period: {start: "2025-12", end: "2026-01"},
        skills: ["Streamlit", "Numpy"],
        topics: ["AI Agent", "GAME Agent Principle"],
        link: "https://tic-tac-toe-with-agent.streamlit.app/",
        github: "https://github.com/Wh4130/tic_tac_toe/tree/master",
        category: ["ai"]
    },
    {
        title: "Taipei Bike Lane Optimization",
        description: "Team project (NTU Operations Research) on where Taipei should build bike lanes under a fixed budget. I co-formulated the integer program that maximizes cycling utility from YouBike-based demand, road danger from accident data and lane connectivity, solved with Gurobi, then developed two greedy heuristics and ran the experiments comparing them on real Taipei road data.",
        image: "/projects/or-final-project.png",
        period: {start: "2025-03", end: "2025-05"},
        skills: ["Gurobi", "GeoPandas", "Pandas"],
        topics: ["Operations Research", "Integer Programming", "Heuristics"],
        link: "",
        pdf: "/projects/bike-lane-optimization.pdf",
        github: "https://github.com/Wh4130/bike_lane_optimization",
        category: ["ds"]
    },
    {
        title: "Bubble Tea Review Analysis",
        description: "Do Google Maps ratings reflect what people actually say? Scraped reviews of bubble tea shops near Taipei MRT stations, scored comment sentiment, and tested it against ratings with OLS regression (R² = 0.12, p < 0.001). Also surfaces inconsistent shops, brand differences and review topics via k-means and word clouds.",
        image: "/projects/bubble-tea.png",
        period: {start: "2024-11", end: "2024-12"},
        skills: ["Streamlit", "Selenium", "Pandas", "Jieba", "Scikit-learn", "Statsmodels", "Google Maps API"],
        topics: [],
        link: "https://dssq-bubble-tea-m9jzmospevfsw8uh2ncz4o.streamlit.app/",
        github: "https://github.com/Wh4130/dssq-bubble-tea",
        category: ["ds"]
    },
    {
        title: "German Stock Dashboard",
        description: "An interactive dashboard that pulls German stock market data through public APIs and visualizes it with Plotly.",
        image: "/projects/financial-dashboard.png",
        period: {start: "2026-01", end: "2026-10"},
        skills: ["Streamlit", "Plotly", "Pandas"],
        topics: ["Public APIs"],
        link: "https://financialdashboard-de.streamlit.app/",
        github: "https://github.com/Wh4130/Financial_Dashboard/tree/master",
        category: ["da", "de"]
    },
    {
        title: "Minesweeper",
        description: "A playable Minesweeper on a 12x12 board with a twist: earn Lucky Stars from your score and spend them on Mine Sweep (remove a mine) or Safe Tap (reveal a safe cell). Includes flag and question-mark markers, in-app rules, and English / Traditional Chinese support.",
        image: "/projects/minesweeper.png",
        period: {start: "2026-01", end: "2026-01"},
        skills: ["Streamlit", "Numpy"],
        topics: ["Game Development"],
        link: "https://minesweeper-wh.streamlit.app/",
        github: "https://github.com/wh4130/minesweeper",
        category: ["web"]
    },
    {
        title: "README Writer Agent",
        description: "Compile your README file by simply pasting a public accessible remote github repository url.",
        image: "/projects/readme-writer.png",
        period: {start: "2025-12", end: "2025-12"},
        skills: ["Streamlit", "Cerebras", "LiteLLM"],
        topics: ["Multi-Agent System", "GAME Agent Principle"],
        link: "https://readme-compile-agent.streamlit.app/",
        github: "https://github.com/Wh4130/remote_readme_agent/tree/master",
        category: ["ai"]
    }

];

// 技能標籤（用於篩選器），依使用次數由多到少排序
const skillCounts = projects.flatMap(proj => proj.skills).reduce(
    (counts, skill) => counts.set(skill, (counts.get(skill) ?? 0) + 1),
    new Map()
);
export const skills = [...skillCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([skill]) => ({title: skill, value: skill}));

// 排序選項（用於排序器）。進行中的專案（end 為 null）視為最新。
const endKey = proj => proj.period.end ?? "9999-99";
export const sortOptions = [
    {label: "Newest", compare: (a, b) => endKey(b).localeCompare(endKey(a)) || b.period.start.localeCompare(a.period.start)},
    {label: "Oldest", compare: (a, b) => a.period.start.localeCompare(b.period.start) || endKey(a).localeCompare(endKey(b))},
    {label: "A-Z", compare: (a, b) => a.title.localeCompare(b.title)}
];

// "2025-11" -> "Nov 2025"
const formatMonth = ym => {
    const [year, month] = ym.split("-");
    return new Date(year, month - 1).toLocaleString("en-US", {month: "short", year: "numeric"});
};

export const formatPeriod = ({start, end}) => {
    if (end === null) return `${formatMonth(start)} - Present`;
    return start === end ? formatMonth(start) : `${formatMonth(start)} - ${formatMonth(end)}`;
};


