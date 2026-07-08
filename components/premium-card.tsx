import { ReactNode } from "react";

export function PremiumCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass-panel rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
}
