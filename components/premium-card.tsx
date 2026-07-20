import { ReactNode } from "react";

export function PremiumCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`border border-hairline bg-panel p-6 ${className}`}>
      {children}
    </div>
  );
}
