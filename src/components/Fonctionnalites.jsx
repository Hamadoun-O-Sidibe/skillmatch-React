
function Fonctionnalites() {
  return (
    <section
      id="fonctionnalites"
      className="bg-slate-50 px-6 py-20 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* En-tête de la section */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-wider text-indigo-600">
            Un parcours à ton image
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Les outils pour passer à l'action
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Des repères concrets pour comprendre où tu en es et
            décider de la prochaine étape.
          </p>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Fonctionnalité 1 */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-2xl text-indigo-600"
              aria-hidden="true"
            >
              <i className="bi bi-file-earmark-person"></i>
            </span>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Analyse de ton profil
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Valorise les compétences et les expériences que tu
              as acquises, à partir de ton CV et de tes projets.
            </p>
          </article>

          {/* Fonctionnalité 2 */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-2xl text-rose-600"
              aria-hidden="true"
            >
              <i className="bi bi-stars"></i>
            </span>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Compétences à développer
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Repère les savoir-faire à renforcer pour avancer vers
              le métier ou le domaine qui t'intéresse.
            </p>
          </article>

          {/* Fonctionnalité 3 */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl text-amber-600"
              aria-hidden="true"
            >
              <i className="bi bi-compass"></i>
            </span>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Pistes de métiers
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Explore des pistes professionnelles cohérentes avec
              tes compétences et tes aspirations.
            </p>
          </article>

          {/* Fonctionnalité 4 */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl text-emerald-600"
              aria-hidden="true"
            >
              <i className="bi bi-signpost-split"></i>
            </span>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Plan de progression
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Organise tes prochaines étapes avec une feuille de
              route adaptée à ton objectif.
            </p>
          </article>

        </div>
      </div>
    </section>
  )
}

export default Fonctionnalites
