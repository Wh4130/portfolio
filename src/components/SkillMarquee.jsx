import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

const SPEED = 30;          // 自動捲動速度（px / 秒）
const PAUSE_MS = 1000;    // 使用者操作後，暫停自動捲動的時間
const JUMP_PX = 480;       // 點擊快轉按鈕時，一次捲動的距離
const COPIES = 3;          // 內容重複份數：從中間那份開始，左右都有空間可捲

export const SkillMarquee = ({ items }) => {
    const scrollRef = useRef(null);
    const pausedUntil = useRef(0);

    const pause = () => {
        pausedUntil.current = performance.now() + PAUSE_MS;
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const setWidth = () => el.scrollWidth / COPIES;
        let pos = (el.scrollLeft = setWidth());
        let last = performance.now();
        let frame;

        const tick = (now) => {
            const dt = Math.min((now - last) / 1000, 0.1);       // 切換分頁回來時，避免一次跳太遠
            last = now;

            if (now < pausedUntil.current) {
                pos = el.scrollLeft;                              // 使用者在捲，跟著實際位置走
            } else {
                const w = setWidth();
                pos += SPEED * dt;
                pos = w + (((pos - w) % w) + w) % w;              // 超出中間那份就繞回來（內容相同，看不出跳動）
                el.scrollLeft = pos;
            }
            frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);

        const events = ["wheel", "touchstart", "touchmove", "touchend", "pointerdown"];
        events.forEach(name => el.addEventListener(name, pause, {passive: true}));

        return () => {
            cancelAnimationFrame(frame);
            events.forEach(name => el.removeEventListener(name, pause));
        };
    }, []);

    const handleFastForward = () => {
        pause();
        scrollRef.current?.scrollBy({left: JUMP_PX, behavior: "smooth"});
    };

    return (
        <div className="relative">
            <div ref={scrollRef}
                 className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                 style={{maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)"}}>
                {Array.from({length: COPIES}).flatMap((_, copy) =>
                    items.map((item, idx) => (
                        <div key={`${copy}-${idx}`} aria-hidden={copy !== 1} className="shrink-0 px-8 py-4">
                            <span className="glow-text-primary text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors whitespace-nowrap">{item}</span>
                        </div>
                    ))
                )}
            </div>

            <button onClick={handleFastForward}
                    aria-label="Scroll skills forward"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-foreground/80 hover:text-primary transition-colors drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">
                <ChevronRight className="w-7 h-7"/>
            </button>
        </div>
    );
};
