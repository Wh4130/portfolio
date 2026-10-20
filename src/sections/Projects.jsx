import { ArrowUpRight, ChevronDown, ChevronsDownUp, X, FunnelPlus, Github, ListFilter, FileText } from "lucide-react";
import { useState } from "react";

import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
import { projects, categories, tags } from "@/lib/projects"





export const Projects = () => {
    // ** Initialization
    const [showFilters, setShowFilters] = useState(false);
    const [catFilters, setCatFilters] = useState([]);          // 用於儲存類別篩選器之值
    const [tagFilters, setTagFilters] = useState([]);          // 用於儲存標籤篩選器之值
    const filteredProjects = projects.filter(proj => {         // 篩選後的專案列表
            if (catFilters.length === 0 && tagFilters.length === 0) {  // 若沒選，顯示全部
                return true
            } else if (catFilters.length === 0) {                      // 只有標籤篩選器
                return tagFilters.some(filter => proj.tags.includes(filter.value));
            } else if (tagFilters.length === 0) {                      // 只有類別篩選器
                return catFilters.some(filter => proj.category.includes(filter.value))
            } else {
                return (
                    catFilters.some(filter => proj.category.includes(filter.value)) &&
                    tagFilters.some(filter => proj.tags.includes(filter.value))
                )
            }
        }
    )
    const initProjCount = 4;                                         
    const [visibleCount, setVisibleCount] = useState(initProjCount);       // 用於決定要顯示多少 project
    const handleLoadMore = () => {
        setVisibleCount(x => x + initProjCount)                            // 每次點擊 View More 就多顯示 k 個
    }
    const handleLoadLess = () => {
        setVisibleCount(initProjCount)                                     // 點擊 View Less BTN 就只顯示 k 個
    }

        



    return (
        <section id = "projects" className = "py-20 relative overflow-hidden">
            {/* Background Accents */}
            <div className = "absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className = "absolute bottom-1/4 right-0 w-64 h-96 bg-primary/5 rounded-full blur-3xl"/>

            <div className = "container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Connect the <span className=" text-primary glow-text-primary"> Dots.</span>
                    </h2>
                    <p className="text-gray-300">
                        A selection of my recent work.
                    </p>
                </div>

                {/* 篩選器 Filters*/}
                <div className="flex flex-col items-center justify-center gap-4 pt-3 pb-2 px-4 my-4 bg-transparent rounded-2xl">
                    <p className="text-tertiary font-medium  w-full flex items-center justify-center gap-2 mb-1">
                        Filters <Button size = "xs" 
                                        shapeRatio = {1}
                                        className = {`${showFilters ? "bg-tertiary/20" : "bg-transparent "}  border border-tertiary/40 text-tertiary`}
                                        onClick = {() => {
                                            setShowFilters(!showFilters);
                                            setCatFilters([]);
                                            setTagFilters([])
                                        }}
                                >
                                    {showFilters ? 
                                        <X className="w-3.5 h-3.5 stroke-3"/> : 
                                        <ListFilter className="w-3.5 h-3.5 stroke-3"/>}
                                    
                                </Button>
                        
                    </p>
                    {showFilters && (
                        <div className="grid md:grid-cols-2  w-full -mt-8 animate-fade-in animate-fade-out animation-delay-100">
                            <div >
                                <Select 
                                key = "domain-filter"
                                options={categories}
                                lineColors={{primaryColor: "#ccdee8", secondaryColor: "#e7ebd3"}}
                                selectedOption={catFilters} 
                                setSelectedOption={setCatFilters}
                                label="Filter by Domain"
                                placeholder=""
                                textClassName="!text-tertiary"
                                boxClassName="m-4"/>
                            </div>
                            <div >
                                <Select
                                key = "tag-filter" 
                                withIcon={true}
                                options={tags}
                                lineColors={{primaryColor: "#ccdee8", secondaryColor: "#e7ebd3"}}
                                selectedOption={tagFilters} 
                                setSelectedOption={setTagFilters}
                                label="Filter by Tag"
                                placeholder=""
                                textClassName="!text-tertiary"
                                boxClassName="m-4"/>
                            </div>
                        </div>
                    )}
                </div>
                
                
                
                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {filteredProjects.slice(0, visibleCount).map((project, idx) => (
                        <div key={idx} 
                             className="group glass-light rounded-2xl overflow-hidden animate-fade-in md:row-span-1" 
                             style={{ animationDelay: `${(idx + 1) * 35}ms` }}>

                            {/* Image div and Overlay Link */}
                            <div className="relative overflow-hidden aspect-video">
                                <img src={`${project.image}`} 
                                     alt={`${project.title}`} 
                                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"/>

                                <div className = "absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.link !== "" && (
                                        <a href={project.link} 
                                           className="p-3 rounded-full glass-light hover:bg-secondary hover:text-tertiary-foreground transition-all">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.pdf && (
                                        <a href={project.pdf}
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="p-3 rounded-full glass-light hover:bg-secondary hover:text-tertiary-foreground transition-all">
                                            <FileText className="w-5 h-5" />
                                        </a>
                                    )}
                                    {
                                        project.github != "" 
                                        ?
                                        <a href={project.github}
                                        className="p-3 rounded-full glass-light hover:bg-tertiary hover:text-tertiary-foreground transition-all">
                                            <Github  className="w-5 h-5"/>
                                        </a>
                                        :
                                        ""
                                    }
                                    
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 glow-text-primary">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300" />
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(( tag, tagIdx ) => (
                                        <span 
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border border text-muted-foreground/70 hover:text-muted-foreground/90 hover:border-primary transition-all duration-300 "
                                        >
                                                {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            


                        </div>
                    ))}

                </div>
            
            {/* View More CTA */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500 gap-4 flex items-center justify-center">

                    {/* 顯示更多專案的按鈕。若顯示專案數量 = 所有專案數量，則不顯示。 */}
                    {
                        visibleCount === filteredProjects.slice(0, visibleCount).length
                        &&
                        <Button size = "lg" className="text-sm bg-transparent glow-border-tertiary text-foreground border border-gray-400 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300 " onClick = {handleLoadMore} >
                            View More <ChevronDown className="w-5 h-5"/>
                        </Button>
                        
                    }
                    
                    
                    {/* 顯示更少專案的按鈕。若顯示專案數量 = 初始專案數量，則不顯示。 */}
                    {
                        visibleCount !== initProjCount
                        && 
                        <Button size = "lg" className="px-4 text-sm bg-transparent glow-border-tertiary text-foreground border border-gray-400 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300" onClick = {handleLoadLess} >
                            <ChevronsDownUp className="w-5 h-5"/>
                        </Button>
                    }
                    
            </div>
            {/* {() => window.open("https://github.com/wh4130", "_blank", "noopener,noreferrer")} */}

            </div>
        </section>
    )
}