import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FloatingParticles } from "@/components/FloatingParticles";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { socialLinks } from "../lib/socialLinks";



const skills = [
    "LangGraph",
    "LangChain",
    "FastMCP",
    "RAG",
    "Text2SQL",
    "FastAPI",
    "PostgreSQL",
    "BigQuery",
    "Pandas",
    "Docker",
    "GCP"
];

export const Hero = () => {
    return (
        <section className="relative min-h-screen items-center overflow-hidden">

            {/* Dots */}
            <FloatingParticles particleColor = "#e0e0ca" particleCount = {20} />
            
            {/* Content */}
            <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
                
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    {/* Left Coloum */}
                    <div className='space-y-8'>
                        <div className='animate-fade-in'>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray">
                                <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse" />
                                AI & Data Engineering・Open to internships in Germany
                            </span>
                        </div>

                        {/* Headline */}
                        <div className='space-y-4'>
                            {/* heading */}
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                                HUANG LIN, <span className='text-primary '>CHUN</span> 
                                <br />
                                <span className=' text-tertiary glow-text-secondary'>Wally</span>
                                {/* <span className='font-serif italic font-normal text-white'>Wally</span> */}
                            </h1>

                            {/* paragraph */}
                            <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                                M.Sc. Business Informatics student in Mannheim, building LLM-powered data systems. Looking for an internship in Germany starting Feb 2027 (student visa, up to 20 h/week).
                            </p>
                        </div>

                        {/* Call To Action Btns*/}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button 
                                size="lg" 
                                className="transition-all duration-300" 
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Contact Me <ArrowRight className='w-5 h-5'></ArrowRight>
                            </Button>
                            <AnimatedBorderButton 
                                className="transition-all duration-300"
                                onClick={() => window.open('/CV_Chun_Huang-Lin.pdf', '_blank')}
                            >
                                Download CV<Download className="w-5 h-5"></Download>
                                
                            </AnimatedBorderButton>

                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground ">Follow me: </span>
                            {socialLinks.map((social, idx) => (
                                <a key = {idx} 
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   href={social.href} 
                                   className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-200'
                                >
                                    {<social.icon className='w-5 h-5'/>}
                                </a>

                            ))}
                        </div>

                    </div>



                    {/* Right Column */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto"> 
                            {/* Glowing ring */}
                            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/20 via-transparent to-primary/20 blur-2xl animate-pulse"/>
        
                            <div className="relative glass rounded-3xl p-2 glow-border ">
                                <img src="/profile-photo.png" 
                                     alt="Huang Lin, Chun" 
                                     className="w-full aspect-4/5 object-cover rounded-3xl"/>
                                {/* Floating Badge */}
                                {/* <div className="absolute -buttom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className='flex items-center gap-3'>
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                        <span className="text-sm font-medium">Available for work</span>
                                    </div>
                                </div> */}

                                {/* Stats Badge */}
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animateion-delay-400">
                                    <div className="text-2xl font-bold text-primary"> 2</div>
                                    <div className="text-xs text-muted-foreground">Years Exp. in Data & AI</div>
                                </div>
                

                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center uppercase font-medium">Technology I work with</p>
                    {/* Categorized by field */}
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="shrink-0 px-8 py-4">
                                    <span className="glow-text-primary text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-600">
            <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce"/>
            </a>
        </div>
        </section>
    )
}