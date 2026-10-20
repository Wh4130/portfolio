import { BookOpen, Award, GraduationCap, ExternalLink } from "lucide-react";
import { highlights } from "../lib/highlights";

const icons = {
    paper: BookOpen,
    award: Award,
    scholarship: GraduationCap
};

export const Highlights = () => {
    return (
        <section id="highlights" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-4xl mb-12 mx-auto text-center">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Highlights
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Research and
                        <span className="text-tertiary glow-text-tertiary"> recognition.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {highlights.map((item, idx) => {
                        const Icon = icons[item.icon];
                        return (
                            <div key={idx}
                                 className="glass-light p-6 rounded-2xl animate-fade-in flex flex-col"
                                 style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-tertiary" />
                                </div>
                                <span className="text-xs uppercase tracking-wider text-muted-foreground/70">{item.type}</span>
                                <h3 className="text-lg font-semibold mt-1 text-foreground">{item.title}</h3>
                                <p className="text-xs text-tertiary mt-1">{item.meta}</p>
                                <p className="text-sm text-muted-foreground mt-3 grow">{item.description}</p>
                                {item.link && (
                                    <a href={item.link}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-4">
                                        {item.linkLabel}
                                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                                    </a>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
