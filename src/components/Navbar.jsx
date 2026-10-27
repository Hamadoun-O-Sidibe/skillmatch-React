import React from 'react'

function Navbar() {
  return (
  <nav className="sticky top-0 z-50 flex w-full flex-col flex-wrap justify-between gap-5 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-md lg:flex-row lg:px-20">

      {/* Logo et bouton du menu mobile */}
      <div className="flex w-full items-center justify-between lg:w-auto">
        <a href="#accueil" aria-label="SkillMatch, accueil">
          <img
            src="public\images\skillmatch_logo_navbar_horizontal.svg"
            className="h-auto w-40 object-contain md:w-40"
            alt="Logo SkillMatch"
          />
        </a>

        <label
          htmlFor="burger"
          aria-label="Ouvrir ou fermer le menu"
          className="flex cursor-pointer flex-col gap-1 text-4xl hover:cursor-pointer lg:hidden"
        >
          <i className="bi bi-list text-slate-900"></i>
        </label>
      </div>

      {/* Case qui contrôle l'ouverture du menu mobile */}
      <input type="checkbox" id="burger" className="peer hidden" />

      {/* Liens de navigation */}
      <div className="mt-4 hidden w-full flex-col gap-6 transition-all duration-300 ease-in peer-checked:flex lg:mt-0 lg:flex lg:flex-1 lg:flex-row lg:items-center lg:justify-end">

        <ul className="flex flex-col items-center gap-3 font-bold uppercase lg:flex-row">
          <li>
            <a
              href="#pour-qui"
              className="font-bold text-gray-600 transition duration-300 ease-in hover:text-indigo-500"
            >
              Pour qui ?
            </a>
          </li>

          <li>
            <a
              href="#comment-ca-marche"
              className="font-bold text-gray-600 transition duration-300 ease-in hover:text-indigo-500"
            >
              Comment ça marche
            </a>
          </li>

          <li>
            <a
              href="#fonctionnalites"
              className="font-bold text-gray-600 transition duration-300 ease-in hover:text-indigo-500"
            >
              Fonctionnalités
            </a>
          </li>

          <li>
            <a
              href="#passerelle-afrique"
              className="font-bold text-gray-600 transition duration-300 ease-in hover:text-indigo-500"
            >
              Passerelle Afrique
            </a>
          </li>

          <li>
            <a
              href="#faq"
              className="font-bold text-gray-600 transition duration-300 ease-in hover:text-indigo-500"
            >
              FAQ
            </a>
          </li>
        </ul>

        {/* Boutons d'action */}
        <div className="mt-4 flex w-full shrink-0 items-center justify-center gap-2 lg:mt-0 lg:w-auto">
          <a
            href="#comment-ca-marche"
            className="btn btn-sm bg-white px-3 py-1.5 font-bold text-gray-600 transition-all hover:text-indigo-500"
          >
            Voir le parcours
          </a>

          <a
            href="#cta"
            className="btn btn-sm rounded-2xl bg-blue-500 px-3 py-1.5 text-sm font-medium text-white transition-all hover:text-white"
          >
            Découvrir
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
