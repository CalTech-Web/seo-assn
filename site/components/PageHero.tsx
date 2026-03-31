import Image from "next/image";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  image?: {
    src: string;
    alt: string;
  };
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  image,
}: PageHeroProps) {
  return (
    <section className="relative pt-[187px] pb-20 min-h-[340px] overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-0 left-0 w-56 h-56 bg-blue-500/8 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      />
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`flex flex-col ${image ? "lg:flex-row lg:items-center lg:gap-12" : ""}`}>
          <div className={image ? "flex-1" : "max-w-3xl"}>
            <div className="mb-4">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-1.5 text-sm text-white/50 flex-wrap">
                  <li>
                    <a
                      href="/"
                      className="hover:text-white/80 transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  {breadcrumbs.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:text-white/80 transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span className="text-white/80 font-medium">
                          {item.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-lg text-white/60 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          {image && (
            <div className="hidden lg:flex shrink-0 justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={320}
                height={320}
                className="w-72 xl:w-80 drop-shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
