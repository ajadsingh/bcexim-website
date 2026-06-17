export default function SectionHeading({
  title,
  subtitle,
  center = false,
  light = false,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? "text-center" : ""}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`h-px flex-1 ${light ? "bg-white/20" : "bg-primary/30"}`} />
        <span className={`text-xs md:text-sm font-semibold tracking-widest uppercase ${light ? "text-primary-light" : "text-primary"}`}>
          {title}
        </span>
        <div className={`h-px flex-1 ${light ? "bg-white/20" : "bg-primary/30"}`} />
      </div>
      {subtitle && (
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${center ? "text-center" : ""} ${light ? "text-white" : "text-dark"}`}>
          {subtitle}
        </h2>
      )}
    </div>
  );
}
