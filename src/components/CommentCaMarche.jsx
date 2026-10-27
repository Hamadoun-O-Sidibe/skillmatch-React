import React from "react"
function CommentCaMarche() {
  return (
    <section
      id="comment-ca-marche"
      className="bg-white px-6 py-20 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* En-tête */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Comment ça marche ?
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Un parcours simple pour mieux comprendre ton profil,
            découvrir les opportunités qui te correspondent et
            préparer ton avenir professionnel.
          </p>
        </div>

        {/* Les quatre étapes */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Étape 1 */}
          <article className="rounded-2xl border border-slate-200 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src="/images/Game analytics-rafiki.svg"
              alt="Analyse du profil"
              className="mx-auto h-40 w-full object-contain"
            />

            <span className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
              1
            </span>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Analyse ton profil
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Découvre tes compétences, tes points forts et les
              domaines qui correspondent à ton profil.
            </p>
          </article>

          {/* Étape 2 */}
          <article className="rounded-2xl border border-slate-200 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src="/images/Throw away-bro.svg"
              alt="Identification des compétences à développer"
              className="mx-auto h-40 w-full object-contain"
            />

            <span className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
              2
            </span>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Identifie tes besoins
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Repère les compétences que tu possèdes et celles
              que tu dois encore développer.
            </p>
          </article>

          {/* Étape 3 */}
          <article className="rounded-2xl border border-slate-200 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src="/images/Job hunt-amico.svg"
              alt="Recherche d'opportunités professionnelles"
              className="mx-auto h-40 w-full object-contain"
            />

            <span className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
              3
            </span>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Explore les opportunités
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Découvre les métiers et les offres qui correspondent
              à tes compétences et à tes objectifs.
            </p>
          </article>

          {/* Étape 4 */}
          <article className="rounded-2xl border border-slate-200 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src="/images/Goal-bro.svg"
              alt="Planification des objectifs professionnels"
              className="mx-auto h-40 w-full object-contain"
            />

            <span className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
              4
            </span>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Construis ta roadmap
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Suis un parcours personnalisé pour progresser et
              te rapprocher de tes objectifs professionnels.
            </p>
          </article>

        </div>
      </div>
    </section>
  )
}

export default CommentCaMarche
