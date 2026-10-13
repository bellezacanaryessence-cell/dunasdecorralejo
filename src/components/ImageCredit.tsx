export type Credito = {
  autor: string;
  licencia: string;
  licenciaUrl: string;
  fuente: string;
  fuenteUrl: string;
};

/** Crédito en letra pequeña para fotos con licencia que exige atribución. */
export function ImageCredit({ credito }: { credito: Credito }) {
  const link = "underline underline-offset-2 hover:text-foreground";
  return (
    <figcaption className="mt-2 text-xs text-muted-foreground">
      Foto: {credito.autor} ·{" "}
      <a href={credito.licenciaUrl} target="_blank" rel="noopener noreferrer license" className={link}>
        {credito.licencia}
      </a>{" "}
      ·{" "}
      <a href={credito.fuenteUrl} target="_blank" rel="noopener noreferrer" className={link}>
        {credito.fuente}
      </a>
    </figcaption>
  );
}
