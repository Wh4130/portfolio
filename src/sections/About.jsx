import { Code2, Rocket, Handshake, Blend, Earth } from "lucide-react";

const Highlights = [
    {
        icon: Blend,
        title: "Multi-disciplinary background",
        description: "My education spans Economics, Political Science, and Data Science, providing me with a unique lens to view the digital landscape. I am skilled in both the theoretical foundations of digital technology and the strategic evaluation of its practical possibilities and limitations."
    },
    {
        icon: Earth,
        title: "Multi-lingual proficiency",
        description: "Ex atque nesciunt hic suscipit! Illum sequi quia libero explicabo placeat sapiente voluptatibus nemo."
    },
    {
        icon: Handshake,
        title: "Collaborative and Leadership",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae ad deserunt neque expedita labore quas, ipsum cumque necessitatibus minus illum amet! Asperiores maxime corrupti consectetur quasi adipisci eveniet qui?"
    }
];

export const About = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className = "space-y-8">
                        <div className = "animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            A 
                            <span className=" text-primary glow-text-primary"> digital transformation enthusiast </span>
                            with
                            <span className=" text-tertiary glow-text-tertiary"> international horizon.</span>
                        </h2>

                        <div className="space-y-4 text-gray-300 animate-fade-in animation-delay-200">
                            <p>
                                With a multidisciplinary foundation in Economics and Political Science complemented by advanced training in Data Science, I am currently pursuing a Master’s in Business Informatics (International Information Systems) in Europe.
                            </p>
                            <p>
                                In this era of rapid innovation, my mission is to leverage technology to drive meaningful benefits to organizations and society.
                            </p>
                        </div>

                        {/* Mission Statement */}
                        {/* <div className="glass rounded-2xl p-6 glow-border-primary animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                In the era of explosive innovation, technology 
                            </p>
                        </div> */}

                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-1 gap-6">
                        {Highlights.map((item, idx) => (
                            <div key={idx} 
                                 className="glass-light p-6 rounded-2xl animate-fade-in"
                                 style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/25">
                                    <item.icon className="w-6 h-6 text-tertiary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-foreground hover:glow-text-primary">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}