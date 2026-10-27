import React from "react";

function CTA() {
  return (
    <section
      id="cta"
      className="bg-linear-to-br from-indigo-600 to-violet-700 px-6 py-16 text-center text-white lg:px-20"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold md:text-4xl">
          Prêt à faire le point sur ton avenir professionnel ?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-indigo-100">
          Découvre comment SkillMatch peut t'aider à transformer tes
          compétences en prochaines étapes concrètes.
        </p>

        <a
          href="#comment-ca-marche"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
        >
          Découvrir le parcours
        </a>
      </div>
    </section>
  )
}

export default CTA
