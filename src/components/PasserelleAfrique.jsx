import React from "react"
function PasserelleAfrique() {
  return (
    <section
      id="passerelle-afrique"
      className="overflow-hidden bg-indigo-950 px-6 py-20 text-white lg:px-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">

        {/* Colonne de gauche : le texte */}
        <div>
          <p className="font-semibold uppercase tracking-wider text-indigo-200">
            Passerelle Afrique
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            Les talents d'ici méritent des opportunités à leur mesure.
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed text-indigo-100">
            SkillMatch veut aider chacun à mieux faire connaître ses
            compétences, à explorer les opportunités professionnelles
            et à construire un parcours en phase avec ses ambitions
            et son environnement.
          </p>

          <a
            href="#fonctionnalites"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-950 transition hover:bg-indigo-100"
          >
            Découvrir les fonctionnalités
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Colonne de droite : l'image */}
        <div className="flex justify-center">
          <img
            src="/images/future.jpg"
            alt="Jeune professionnel tourné vers son avenir"
            className="max-h-96 w-full max-w-md rounded-3xl object-cover shadow-2xl"
          />
        </div>

      </div>
    </section>
  )
}

export default PasserelleAfrique
