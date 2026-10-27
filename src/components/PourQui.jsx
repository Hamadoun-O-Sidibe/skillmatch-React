import React from "react"
function PourQui() {
  return (
    <section
      id="pour-qui"
      className="bg-slate-50 px-6 py-20 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Titre de la section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Pour qui est fait SkillMatch ?
          </h2>

          <p className="mt-4 rounded-lg bg-white p-4 text-lg text-slate-700 shadow-lg">
            Que tu sois bachelier, étudiant, diplômé ou jeune
            professionnel, SkillMatch t’aide à mieux comprendre
            tes compétences et à préparer ton avenir professionnel.
          </p>
        </div>

        {/* Les quatre cartes */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Carte 1 */}
          <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <img
              src="/images/learn.jpg"
              alt="Bachelier en apprentissage"
              className="aspect-4/3 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-slate-900">
                Bachelier
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Tu viens d’obtenir ton bac et tu hésites encore sur
                ta filière ou ton domaine ?
              </p>

              <a
                href="#comment-ca-marche"
                className="mt-4 inline-block font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Explore ton orientation →
              </a>
            </div>
          </article>

          {/* Carte 2 */}
          <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <img
              src="/images/elite.jpg"
              alt="Étudiant préparant son parcours"
              className="aspect-4/3 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-slate-900">
                Étudiant
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Tu veux mieux comprendre tes compétences et préparer
                la suite de tes études ?
              </p>

              <a
                href="#comment-ca-marche"
                className="mt-4 inline-block font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Construis ton projet →
              </a>
            </div>
          </article>

          {/* Carte 3 */}
          <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <img
              src="/images/soutenance.jpg"
              alt="Diplômé préparant son avenir"
              className="aspect-4/3 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-slate-900">
                Diplômé
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Tu souhaites valoriser ton diplôme et trouver les
                opportunités qui correspondent à ton profil ?
              </p>

              <a
                href="#comment-ca-marche"
                className="mt-4 inline-block font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Prépare ton avenir →
              </a>
            </div>
          </article>

          {/* Carte 4 */}
          <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <img
              src="/images/work.jpg"
              alt="Jeune professionnel au travail"
              className="aspect-4/3 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-slate-900">
                Jeune professionnel
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Tu veux développer tes compétences et faire évoluer
                ta carrière ?
              </p>

              <a
                href="#comment-ca-marche"
                className="mt-4 inline-block font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Passe à l’étape suivante →
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

export default PourQui
