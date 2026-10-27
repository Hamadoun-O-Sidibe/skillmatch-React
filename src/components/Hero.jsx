import React from 'react'
function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-[80vh] overflow-hidden bg-linear-to-br from-amber-50 via-rose-50 to-indigo-100"
    >
      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-stretch gap-8 px-6 pt-12 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-2 lg:pt-16">

        {/* Texte de présentation */}
        <div className="order-1">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            De l’orientation{" "}
            <span className="text-indigo-600">à l’emploi</span>, construis un
            parcours qui te correspond.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Que tu sois bachelier, étudiant, diplômé ou jeune professionnel,
            SkillMatch t’aide à mieux comprendre tes compétences, à découvrir
            les métiers qui te correspondent et à construire la suite de ton
            parcours.
          </p>

          {/* Liste des avantages */}
          <ul className="mt-6 flex flex-col gap-2 text-sm font-medium text-slate-700">
            <li className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-emerald-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="m8 12 3 3 5-6" />
              </svg>
              Analyse CV PDF, GitHub IA
            </li>

            <li className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-emerald-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="m8 12 3 3 5-6" />
              </svg>
              Matching d'offres en temps réel
            </li>

            <li className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-emerald-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="m8 12 3 3 5-6" />
              </svg>
              Roadmap personnalisée
            </li>
          </ul>

          {/* Boutons d'action */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700"
            >
              Découvrir le parcours
            </a>

            <a
              href="#comment-ca-marche"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Voir les étapes
            </a>
          </div>
        </div>

        {/* Image de présentation */}
        <div className="order-2 flex items-end justify-center lg:items-start lg:justify-end">
          <img
            src="/images/elite1.png"
            alt="Présentation de SkillMatch"
            className="h-auto max-h-[65vh] w-full max-w-xs -translate-y-2 object-contain object-bottom sm:max-w-sm lg:max-h-[75vh] lg:max-w-md lg:translate-x-4 lg:-translate-y-1"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
