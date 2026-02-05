export const Background = ({src, alt = "Background Image", className}) => {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            {/* 背景圖 */}
            <img 
                src={src}
                alt={alt}
                className="w-full h-full object-cover opacity-30" 
            />
            
            {/* 漸層遮罩 - 確保上方文字清晰 */}
            <div className={ `${className} absolute inset-0 bg-linear-to-b from-transparent via-tertiary/5 to-transparent`}
                
            />
        </div>
    )
}

