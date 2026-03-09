import * as React from "react";
import { cn } from "@/lib/utils";

interface IdeWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: React.ReactNode;
  showLineNumbers?: boolean;
  lineCount?: number;
}

const IdeWindow = React.forwardRef<HTMLDivElement, IdeWindowProps>(
  ({ className, title, icon, showLineNumbers = false, lineCount = 8, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("ide-window", className)} {...props}>
        {/* Title bar */}
        <div className="ide-titlebar">
          <div className="flex items-center gap-2">
            {icon}
            <span>{title}</span>
          </div>
          <div className="ide-window-controls">
            <div className="ide-window-btn">─</div>
            <div className="ide-window-btn">□</div>
            <div className="ide-window-btn">✕</div>
          </div>
        </div>
        {/* Content area */}
        {showLineNumbers ? (
          <div className="flex">
            <div className="ide-line-numbers">
              {Array.from({ length: lineCount }, (_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <div className="flex-1 p-4 min-w-0">{children}</div>
          </div>
        ) : (
          <div className="p-4">{children}</div>
        )}
      </div>
    );
  }
);
IdeWindow.displayName = "IdeWindow";

const IdeCursor = () => <span className="ide-cursor">█</span>;

export { IdeWindow, IdeCursor };
