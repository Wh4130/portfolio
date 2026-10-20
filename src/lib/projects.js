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
        title: "Taiwan Media Dashboard",
        description: "Scrapes news from three Taiwanese outlets across the ideological spectrum. Search by keyword to retrieve articles, plot keyword trends, view category distributions and word clouds, and draw network graphs from search results. It collected around 1,000 articles per day on a daily schedule; data covers up to March 2026 and scraping is no longer scheduled.",
        image: "/projects/taiwan-media-dashboard.png",
        tags: ["Streamlit", "Plotly", "Pandas", "Selenium", "MongoDB"],
        link: "https://taiwan-media-dashboard-tool.streamlit.app/",
        github: "https://github.com/Wh4130/Taiwan-Media-Dashboard",
        category: ["de"]
    },
    {
        title: "Easy Essay",
        description: "A RAG-based Literature Review Tool that makes you organize your thoughts and manage your knowledge neatly. Used by friends for their own literature reviews, who found it helpful.",
        image: "/projects/easyessay.png",
        tags: ["Langchain", "Streamlit", "Pinecone", "FastAPI", "Render", "Pandas", "Cerebras", "LiteLLM"],
        link: "https://easyessay-literature-review-toolkit-wally.streamlit.app/",
        github: "https://github.com/Wh4130/easyessay_literature_review_toolkit",
        category: ["ai"]
    },
    {
        title: "Play Tic-Tac-Toe with AI",
        description: "Play Tic-Tac-Toe against an AI agent built on the GAME agent principle.",
        image: "/projects/tictactoe.gif",
        tags: ["Streamlit", "Numpy", "AI Agent",  "GAME Agent Principle"],
        link: "https://tic-tac-toe-with-agent.streamlit.app/",
        github: "https://github.com/Wh4130/tic_tac_toe/tree/master",
        category: ["ai"]
    },
    {
        title: "Taipei Bike Lane Optimization",
        description: "Team project (NTU Operations Research) on where Taipei should build bike lanes under a fixed budget. I co-formulated the integer program that maximizes cycling utility from YouBike-based demand, road danger from accident data and lane connectivity, solved with Gurobi, then developed two greedy heuristics and ran the experiments comparing them on real Taipei road data.",
        image: "/projects/or-final-project.png",
        tags: ["Operations Research", "Integer Programming", "Gurobi", "Heuristics", "GeoPandas", "Pandas"],
        link: "",
        pdf: "/projects/bike-lane-optimization.pdf",
        github: "https://github.com/Wh4130/bike_lane_optimization",
        category: ["ds"]
    },
    {
        title: "Bubble Tea Review Analysis",
        description: "Do Google Maps ratings reflect what people actually say? Scraped reviews of bubble tea shops near Taipei MRT stations, scored comment sentiment, and tested it against ratings with OLS regression (R² = 0.12, p < 0.001). Also surfaces inconsistent shops, brand differences and review topics via k-means and word clouds.",
        image: "/projects/bubble-tea.png",
        tags: ["Streamlit", "Selenium", "Pandas", "Jieba", "Scikit-learn", "Statsmodels", "Google Maps API"],
        link: "https://dssq-bubble-tea-m9jzmospevfsw8uh2ncz4o.streamlit.app/",
        github: "https://github.com/Wh4130/dssq-bubble-tea",
        category: ["ds"]
    },
    {
        title: "German Stock Dashboard",
        description: "An interactive dashboard that pulls German stock market data through public APIs and visualizes it with Plotly.",
        image: "/projects/financial-dashboard.png",
        tags: ["Streamlit", "Plotly", "Pandas", "API"],
        link: "https://financialdashboard-de.streamlit.app/",
        github: "https://github.com/Wh4130/Financial_Dashboard/tree/master",
        category: ["da", "de"]
    },
    {
        title: "Minesweeper",
        description: "A playable Minesweeper on a 12x12 board with a twist: earn Lucky Stars from your score and spend them on Mine Sweep (remove a mine) or Safe Tap (reveal a safe cell). Includes flag and question-mark markers, in-app rules, and English / Traditional Chinese support.",
        image: "/projects/minesweeper.png",
        tags: ["Streamlit", "Numpy", "Game Development"],
        link: "https://minesweeper-wh.streamlit.app/",
        github: "https://github.com/wh4130/minesweeper",
        category: ["web"]
    },
    {
        title: "README Writer Agent",
        description: "Compile your README file by simply pasting a public accessible remote github repository url.",
        image: "/projects/readme-writer.png",
        tags: ["Multi-Agent System", "GAME Agent Principle", "Streamlit", "Cerebras", "LiteLLM"],
        link: "https://readme-compile-agent.streamlit.app/",
        github: "https://github.com/Wh4130/remote_readme_agent/tree/master",
        category: ["ai"]
    }

];

// 專案標籤（用於篩選器）
export const tags = [
        ...new Set (
            projects.flatMap(
                proj => [...proj.tags]
            )
        )
    ].map(
        tag => ({title: tag, value: tag})
    );



