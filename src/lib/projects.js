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
        title: "Easy Essay",
        description: "A RAG-based Literature Review Tool that makes you organize your thoughts and manage your knowledge neatly.",
        image: "/projects/easyessay.gif",
        tags: ["Langchain", "Streamlit", "Pinecone", "FastAPI", "Render", "Pandas", "Cerebras", "LiteLLM"],
        link: "https://easyessay-literature-review-toolkit-wally.streamlit.app/",
        github: "https://github.com/Wh4130/easyessay_literature_review_toolkit",
        category: ["ai"]
    },
    {
        title: "README Writer Agent",
        description: "Compile your README file by simply pasting a public accessible remote github repository url.",
        image: "/projects/readme-writer.png",
        tags: ["Multi-Agent System", "GAME Agent Principle", "Streamlit", "Cerebras", "LiteLLM"],
        link: "https://readme-compile-agent.streamlit.app/",
        github: "https://github.com/Wh4130/remote_readme_agent/tree/master",
        category: ["ai"]
    },
    {
        title: "Taiwan Financial Dashboard",
        description: "abc",
        image: "/projects/tw-fin-dashboard.gif",
        tags: ["Streamlit", "Plotly", "Pandas", "API"],
        link: "hhttps://taiwan-financialdashboard.streamlit.app/",
        github: "https://github.com/Wh4130/Financial_Dashboard/tree/master",
        category: ["da", "de"]
    },
    {
        title: "Play Tic-Tac-Toe with AI",
        description: "abc",
        image: "/projects/tictactoe.gif",
        tags: ["Streamlit", "Numpy", "AI Agent",  "GAME Agent Principle"],
        link: "https://tic-tac-toe-with-agent.streamlit.app/",
        github: "https://github.com/Wh4130/tic_tac_toe/tree/master",
        category: ["ai"]
    },
    {
        title: "Plslkej",
        description: "abc",
        image: "/",
        tags: ["Streamlit", "Numpy", "AI Agent",  "GAME Agent Principle"],
        link: "#",
        github: "#",
        category: [""]
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



