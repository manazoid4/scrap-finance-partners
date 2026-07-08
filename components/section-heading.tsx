export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-widest text-[--color-copper] font-medium mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-[--color-blue-grey] text-base leading-relaxed">{description}</p>
      )}
    </div>
  );
}
