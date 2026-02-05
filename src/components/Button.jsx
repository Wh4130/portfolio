import { cn } from "../lib/utils"; 

export const Button = ({className = "", 
                        size = "default", 
                        shapeRatio = 2,
                        children, 
                        onClick,
                        ...props}) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/80 shadow-primary/25 hover:cursor-pointer"

    const sizeClasses = {
        xs: `px-${shapeRatio * 1.5} py-1.5 text-xs`,
        sm: `px-${shapeRatio * 2} py-2 text-sm`,
        default: `px-${shapeRatio * 3} py-3 text-base`,
        lg: `px-${shapeRatio * 4} py-4 text-lg`
    }

    const classes = cn(baseClasses, sizeClasses[size], className);

    return (
        <button className = {classes} onClick = {onClick} {...props}>
            <span className = "relative flex items-center justify-center gap-2">{children}</span>
        </button>
    )
};