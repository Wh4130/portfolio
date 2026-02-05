import { workExperience } from "../../lib/experience"

export const Work = () => {
    return (
        <div className = "relative">

            {/* Vertical Line */}
            <div className = "timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/20 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(0,210,255,0.3)]"/>

            {/* Work Experience */}
            <div
                className = "space-y-12"
            >
                {workExperience.map((exp, idx) => (
                    <div 
                        key = {idx}
                        className = "relative grid md:grid-cols-2 gap-8 animate-fade-in "
                        style = {{
                            animationDelay: `${(idx + 1) * 100}ms`
                        }}
                    >

                        {/* Timeline Dot */}
                        <div
                            className = "absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary   rounded-full -translate-x-1/2 ring-4 ring-background z-10"
                        >
                            {
                                exp.current && <span className = "absolute inset-0 rounded-full bg-highlight animate-ping opacity-75"/>
                            }
                        </div>

                        {/* Content */}
                        <div 
                            className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right": "md:col-start-2 md:pl-16"}`}>
                            <div
                                className={`glass-strong p-6 rounded-2xl border border-primary/30 hover:border-primary/60 glow-border-primary transition-all duration-300 group`}
                            >
                                    
                                <h3
                                    className = "text-xl font-semibold mt-2 text-primary glow-text-primary  group-hover:group-hover:scale-101 transition-all duration-300"
                                >
                                    {exp.role}                   {/* Role */}
                                </h3>
                                <p
                                    className = "font-semibold mt-2 text-md text-tertiary hover:text-highlight transition-all duration-300 glow-text-primary"
                                >
                                    {exp.company}                {/* Company */}
                                </p>
                                <p
                                    className = "font-medium mt-1 text-sm text-muted-foreground/80 hover:text-highlight transition-all duration-300"
                                >
                                    {exp.division}               {/* Department */}
                                </p>
                                <span
                                    className = "text-xs text-muted-foreground/70 font-medium hover:text-highlight transition-all duration-300"
                                >
                                    {exp.period}｜{exp.location}  {/* Period & Location */}
                                </span>
                                <p
                                    className = "mt-4 text-sm text-muted-foreground"
                                >
                                    {exp.description}            {/* Description */}
                                </p>
                                <div
                                    className = {`-mb-1 mt-1.5 -mx-1 flex flex-wrap gap-2 ${idx % 2 === 0 && "md:justify-end"}`}
                                >
                                    {                                // * skills
                                        exp.skills.map((skill, skillIdx) => (
                                            <p 
                                                key = {skillIdx}
                                                className = "px-3 py-1 rounded-full bg-surface text-xs font-medium border-border border text-muted-foreground/70 hover:text-muted-foreground/90 hover:border-primary transition-all duration-300 "
                                            >
                                                {skill}
                                            </p>
                                        ))
                                    }
                                </div>
                                
                            </div>

                        </div>
                    </div>
                    )
                )}

            </div>

        </div>
    )
}