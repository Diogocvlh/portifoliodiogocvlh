import { useState, useEffect, useRef } from "react";

interface TerminalSimulatorProps {
  command: string;
  outputLines: string[];
  triggerOnView?: boolean;
}

const TerminalSimulator = ({ command, outputLines, triggerOnView = true }: TerminalSimulatorProps) => {
  const [isExecuting, setIsExecuting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          startExecution();
        }
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasTriggered, triggerOnView]);

  const startExecution = () => {
    setCursorVisible(true);
    setTimeout(() => {
      setCursorVisible(false);
      setIsExecuting(true);
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setVisibleLines(i);
        if (i >= outputLines.length) clearInterval(interval);
      }, 120);
    }, 1200);
  };

  return (
    <div ref={ref} className="bg-muted border border-muted-foreground/20 p-6 my-6">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-muted-foreground/20">
        <span className="text-muted-foreground text-xs font-heading">terminal</span>
      </div>
      <div className="font-body text-sm leading-relaxed">
        <div className="flex items-center">
          <span className="text-primary mr-2 font-heading">&gt;</span>
          <span className="text-primary font-heading">{command}</span>
          {cursorVisible && (
            <span className="cursor-blink text-primary ml-1 font-heading">_</span>
          )}
        </div>
        {isExecuting && (
          <div className="mt-4 pl-6 space-y-1">
            {outputLines.slice(0, visibleLines).map((line, idx) => (
              <div
                key={idx}
                className={`text-xs ${
                  line.startsWith("[OK]")
                    ? "text-primary"
                    : line.startsWith("[!]")
                    ? "text-secondary"
                    : "text-muted-foreground"
                }`}
              >
                {line}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalSimulator;
