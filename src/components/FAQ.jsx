import React from "react"
function FAQ() {
  return (
    <section
      id="faq"
      className="bg-white px-6 py-20 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-3xl">
        {/* Titre de la section */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wider text-indigo-600">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Tu as des questions ?
          </h2>
        </div>

        {/* Liste des questions */}
        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          <details className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
              À qui s'adresse SkillMatch ?
              <span
                className="text-xl text-indigo-600 transition group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>

            <p className="mt-3 leading-relaxed text-slate-600">
              Aux bacheliers, étudiants, jeunes diplômés et professionnels
              qui souhaitent clarifier leur orientation ou faire évoluer
              leur parcours.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
              De quoi ai-je besoin pour commencer ?
              <span
                className="text-xl text-indigo-600 transition group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>

            <p className="mt-3 leading-relaxed text-slate-600">
              Prépare les éléments qui décrivent ton parcours : expériences,
              formation, projets et compétences. Tu peux aussi ajouter un CV
              ou un profil GitHub.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
              SkillMatch choisit-il un métier à ma place ?
              <span
                className="text-xl text-indigo-600 transition group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>

            <p className="mt-3 leading-relaxed text-slate-600">
              Non. La plateforme t'aide à explorer des pistes et à mieux
              comprendre tes compétences ; tes choix restent les tiens.
            </p>
          </details>

          <details className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
              Puis-je utiliser SkillMatch si je suis déjà en poste ?
              <span
                className="text-xl text-indigo-600 transition group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>

            <p className="mt-3 leading-relaxed text-slate-600">
              Oui. Le parcours s'adresse aussi aux professionnels qui
              veulent mieux valoriser leurs compétences ou préparer une
              évolution.
            </p>
          </details>
        </div>
      </div>
    </section>
  )
}

export default FAQ
