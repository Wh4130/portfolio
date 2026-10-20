import {Button} from "@/components/Button"
import { Menu, X, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react";
import { FloatButton } from "@/components/FloatButton";





const navLinks = [
    {href: '#about', label: 'About'},
    {href: '#highlights', label: 'Highlights'},
    {href: '#experience', label: 'Experience'},
    {href: '#projects', label: 'Projects'},
    {href: '#contact', label: 'Contact'},
]


export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return (<>
        <header className = {`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? "glass-bg py-3" : "bg-transparent py-5"}`}>
        <nav className = 'container mx-auto px-6 flex items-center justify-between'>
            <a href = "#" className = "text-xl font-bold tracking-tight hover:text-primary transition-all duration-200" >
                <img src="/icon.png" alt="Icon" className="size-14 -mt-6 -mb-12 relative hover:drop-shadow-[0_0_8px_rgba(0,210,255,0.3)]" />
            </a>

            {/* Desktop Nav */}
            <div className = 'hidden md:flex items-center gap-1'>
                <div className = "glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map( (link, idx) => (
                        <a href={link.href} 
                            key = {idx}
                            className = "px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full  transition-all duration-200 hover:bg-primary/30"
                            >
                                {link.label}
                        </a>
                    ) )}
                </div>
            </div>

            {/* Call-To-Action button */}
            <div className = "hidden md:block py-1">
                <Button size='sm' className = 'bg-tertiary hover:bg-tertiary/80 text-tertiary-foreground transition-all duration-200'
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className = 'md:hidden p-2 text-foreground cursor-pointer transition-all duration-200' 
                    onClick = {() => setIsMobileMenuOpen((prev) => !prev)}>
                        {isMobileMenuOpen ? <X size = {24}/> : <Menu size = {24}></Menu>}
                
            </button>

        </nav>


        {/* Mobile Menu */}
        {isMobileMenuOpen && (<div className = "md:hidden glass-strong animate-fade-in">
            <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
                {navLinks.map( (link, idx) => (
                    <a href={link.href} 
                        key = {idx}
                        className = 'text-sm text-muted-foreground hover:text-foreground hover:bg-primary/30 rounded-full py-2 px-4 transition-all duration-200'
                        onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                    </a>
                ) )}

                <Button size='sm' className = 'bg-tertiary hover:bg-tertiary/80 text-tertiary-foreground transition-all duration-200'
                onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                    }
                    }>
                    Contact Me
                </Button>

                
            </div>
        </div>)}


        
    </header>


    <FloatButton 
        isScrolled={isScrolled}
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
    >
        <ArrowUp className="w-5 h-5" />
    </FloatButton>

    </>
    )
    
}