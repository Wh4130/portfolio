import { cn } from "../lib/utils"

export const FloatButton = ({className = "", 
                             size = "default", 
                             children, 
                             position = "right", 
                             isScrolled,
                             onClick}) => {

    const baseClasses = `fixed overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary glass-light text-foreground hover:bg-primary/80 shadow-primary/25 hover:cursor-pointer z-100 transition-all duration-200 animate-pulse
    ${isScrolled 
        ? "opacity-100 translate-y-0"       /* 捲動時顯示 */
        : "opacity-0 translate-y-30 pointer-events-none" /* 在頂端時隱藏並往下縮 */
    }
    `

    const posMap = {
        "right": "bottom-8 right-8",
        "left": "bottom-8 left-8"
    }

    const sizeClasses = {
        sm: "px-1.5 py-1.5 text-sm",
        default: "px-3.5 py-3.5 text-base",
        lg: "px-5.5 py-5.5 text-lg"
    }

    const classes = cn(baseClasses, sizeClasses[size], className, posMap[position]);

    return (
        <button className={classes} onClick = {onClick}>
            <span className = "relative flex items-center justify-center gap-2">{children}</span>
        </button>
    )
}
