import { AlertCircle, CheckCircle, Mail, MapPin, Send } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";



const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "huang0jin@gmail.com",
        href: "mailto:huang0jin@gmail.com"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Taipei, Taiwan",
        href: "https://www.google.com/maps/place/%E8%87%BA%E5%8C%97/@25.0168615,121.176034,10z/data=!3m1!4b1!4m6!3m5!1s0x3442ac72bce20a99:0x3f6a35cedd0ac2e0!8m2!3d25.0329694!4d121.5654177!16s%2Fg%2F1q5bldlsj?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D"
    }
]

export const Contact = () => {
    const [formInfo, setFormInfo] = useState({
        name: "",
        email: "",
        title: "",
        message: ""
    })
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null,    // 'success' or 'error'
        message: ""
    })
    const handleSubmit = async (formEvent) => {
        formEvent.preventDefault();      // prevent default refreshing of the page 
        
        setIsLoading(true);
        setSubmitStatus({type: null, message: ""});
        try {
            const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceID || !templateID || !publicKey) {
                throw new Error(
                    "EmailJS configuration is missing. Please check your environment."
                )
            }; 

            await emailjs.send(
                serviceID,
                templateID,
                {
                    name: formInfo.name,
                    email: formInfo.email,
                    title: formInfo.title,
                    message: formInfo.message 
                },
                publicKey
            );
            
            setSubmitStatus(
                {
                    type: "success",
                    message: "Message sent successfully!"
                }
            );
            setFormInfo({name: "", email: "", title: "", message: ""});

        } catch (err) {
            console.error("EmailJS error: ", err);
            setSubmitStatus(
                {
                    type: "error",
                    message: err.text || "Failed to send message. Please try again later."
                }
            )
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section id = "contact" className = "py-20 relative overflow-hidden">
            {/* Glowing Background */}
            <div className = "absolute top-0 left-0 w-full h-full"> 
                <div className = "absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
                <div className = "absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl -translate-y-1/2"/>
            </div>

            {/* Main Container */}
            <div className = "container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="max-w-4xl mb-12 mx-auto text-center">
                    <span 
                        className = "text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">
                        Get In Touch
                    </span>
                    <h2
                        className = "text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Let's
                        <span className = "text-tertiary glow-text-tertiary"> Connect!</span>
                    </h2>
                    <p>
                        Feel free to reach out to me for any inquiries or collaborations.
                    </p>
                </div>

                
                <div className = "grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Form */}
                    <div className = "glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-200">
                        <form action="space-y-6" onSubmit = {handleSubmit}>
                            <div className = "mb-2">
                                <label htmlFor="name" 
                                       className = "block text-sm font-medium mb-2"
                                >
                                Name
                                </label>
                                <input id = "name" 
                                       type = "text" 
                                       required 
                                       placeholder = "Your name..."
                                       value = {formInfo.name}
                                       onChange = {(e) => setFormInfo({...formInfo, name: e.target.value})}
                                       className = "w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                            </div>

                            <div className = "mb-2">
                                <label htmlFor="email" 
                                       className = "block text-sm font-medium mb-2"
                                >
                                Email
                                </label>
                                <input id = "email" 
                                       type = "email" 
                                       required 
                                       placeholder = "your@email.com"
                                       value = {formInfo.email}
                                       onChange = {(e) => setFormInfo({...formInfo, email: e.target.value})}
                                       className = "w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                            </div>

                            <div className = "mb-2">
                                <label htmlFor="title" 
                                       className = "block text-sm font-medium mb-2"
                                >
                                Title
                                </label>
                                <input id = "title" 
                                       type = "text" 
                                       required 
                                       placeholder = "Title"
                                       value = {formInfo.title}
                                       onChange = {(e) => setFormInfo({...formInfo, title: e.target.value})}
                                       className = "w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                            </div>

                            <div className = "mb-2">
                                <label htmlFor="message" 
                                       className = "block text-sm font-medium mb-2"
                                >
                                Message
                                </label>
                                <textarea id = "message"  
                                       required
                                       placeholder = "Your message..."
                                       rows = {5}
                                       value = {formInfo.message}
                                       onChange = {(e) => setFormInfo({...formInfo, message: e.target.value})}
                                       className = "w-full px-4 py-4 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" />
                            </div>
                            
                            {/* Submit Button */}
                            <Button
                               className = "w-full bg-tertiary hover:bg-tertiary/80"
                               size = "default"
                               type = "submit"
                               disabled = {isLoading}
                            >
                                {isLoading ? (
                                    <>
                                    Sending...
                                    </>
                                ) : (
                                    <>
                                    Send Message
                                    <Send className = "w-5 h-5"/>
                                    </>
                                )}
                                
                            </Button>

                            {/* Error Message */}
                            {submitStatus.type && (
                                <div
                                    className = {`flex items-center gap-3 p-4 rounded-xl mt-4 ${
                                        submitStatus.type === "success" 
                                        ? "bg-green-500/10 border border-green-500/20 text-tertiary" 
                                        : "bg-red-500/10 border border-red-500/20 text-tertiary"

                                    }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className = "w-5 h-5 shrink-0"/>
                                    ) : (
                                        <AlertCircle className = "w-5 h-5 shrink-0" />
                                    )}

                                    <p className = "text-sm">{submitStatus.message}</p>

                                </div>
                            )

                            }

                            
                        </form>
                    </div>


                    {/* Contact Info */}
                    <div className="space-y-6 animate-fade-in animation-delay-400">
                        <div className="glass rounded-3xl p-8">
                        <h3 className="text-xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-4">
                            {contactInfo.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="flex items-center gap-4 p-4 rounded-xl hover:bg-tertiary/10 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                <div className="text-sm text-muted-foreground">
                                    {item.label}
                                </div>
                                <div className="font-medium">{item.value}</div>
                                </div>
                            </a>
                            ))}
                        </div>
                        </div>

                        {/* Availability Card */}
                        <div className="glass rounded-3xl p-8 border border-primary/30">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="font-medium">Focused on Specific Projects</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-normal">
                            I am currently <strong>not available for full-time roles</strong> as I focus on upcoming commitments. 
    However, I’m always open to discussing <strong>exciting short-term projects</strong>.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}