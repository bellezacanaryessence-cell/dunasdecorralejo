import { Link } from "@tanstack/react-router";
import { useContent } from "@/content";
import { SITE } from "@/config/site";

export function SiteFooter() {
  const { footer, nav } = useContent();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border/60 bg-sand">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              {SITE.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {footer.about}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-ink">
              Secciones
            </h2>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-ocean"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-ink">
              Legal
            </h2>
            <ul className="mt-4 space-y-2">
              {footer.legalLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-ocean"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 rounded-xl border border-border/60 bg-background/70 p-4 text-xs leading-relaxed text-muted-foreground">
          {footer.afiliados}
        </p>

        <p className="mt-6 text-xs text-muted-foreground">
          © {year} {SITE.name}. Contenido informativo elaborado de forma
          independiente.
        </p>
      </div>
    </footer>
  );
}
