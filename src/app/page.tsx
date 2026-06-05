/**
 * Foco Gestão Visual — Landing Page
 *
 * Stub inicial. As 9 seções da LP serão construídas progressivamente seguindo
 * `docs/LANDING.md` e a referência visual em `preview/index.html`.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary mb-3">
          Foco Gestão Visual
        </p>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-primary-darker mb-3">
          Landing page em construção
        </h1>
        <p className="text-sm text-neutral-600">
          Próxima etapa: portar o Hero validado de <code className="font-mono text-xs">preview/index.html</code>
          {" "}para a primeira seção do site.
        </p>
      </div>
    </main>
  );
}
