import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-10 text-slate-300 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Logo : ramène le visiteur en haut de la page */}
        <a
          href="#accueil"
          className="inline-flex"
          aria-label="SkillMatch, retour à l'accueil"
        >
          <img
            src="/images/skillmatch_logo_navbar_horizontal.svg"
            alt="SkillMatch"
            className="w-40 rounded bg-white p-2"
          />
        </a>

        {/* Liens vers les sections du site */}
        <nav aria-label="Liens de pied de page">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <li>
              <a href="#pour-qui" className="transition hover:text-white">
                Pour qui ?
              </a>
            </li>

            <li>
              <a
                href="#fonctionnalites"
                className="transition hover:text-white"
              >
                Fonctionnalités
              </a>
            </li>

            <li>
              <a
                href="#passerelle-afrique"
                className="transition hover:text-white"
              >
                Passerelle Afrique
              </a>
            </li>

            <li>
              <a href="#faq" className="transition hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <p className="text-sm">© 2026 SkillMatch.</p>
      </div>
    </footer>
  )
}

export default Footer
