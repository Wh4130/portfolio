import { Work } from "./Experience/Work"
import { Education } from "./Experience/Education"
import { CenteredTabs } from "../components/CenteredTabs"
import { useState } from "react"

const tabs = [
    "Work",
    "Education"
]

export const Experience = () => {
    const [currentTab, setCurrentTab] = useState(0);


    return (
        <section id = "experience" className = "py-20 relative overflow-hidden">
            <div className = "absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>

            <div 
                className = "container mx-auto px-6 relative z-10"
            >
                {/* Section Header */}
                <div className="max-w-4xl mb-12 mx-auto text-center">
                    <span 
                        className = "text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Background
                    </span>
                    <h2
                        className = "text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Experience that 
                        <span className = "text-tertiary glow-text-tertiary"> speaks volumes.</span>
                    </h2>
                    <p>
                        Multidisciplinary background.
                    </p>

                </div>

                <CenteredTabs
                    selectedTab = {currentTab}
                    setSelectedTab = {setCurrentTab}
                    options = {tabs}
                    activeColor = {currentTab === 0 ? "#00d2ff" : "#d6e3a6"}
                    indicatorColor = {currentTab === 0 ? "#00d2ff" : "#d6e3a6"}
                >
                </CenteredTabs>

                {
                    currentTab === 0 ? <Work/> : <Education/>
                }

                
            </div>

            

            
        </section>
    )
}