import { useEffect, useState } from "react";
import { GYG_PARTNER_ID } from "@/config/site";

/**
 * Widget automático de excursiones de GetYourGuide.
 *
 * El script de GYG (cargado en __root.tsx) rellena el div con un iframe.
 * Se pinta solo tras montar en el navegador: si viniera del HTML
 * prerenderizado, GYG lo modificaría antes de que React hidrate y
 * provocaría un error de hidratación.
 */
export function GygWidget({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className={className}>
      {mounted && <div data-gyg-widget="auto" data-gyg-partner-id={GYG_PARTNER_ID}></div>}
    </div>
  );
}
