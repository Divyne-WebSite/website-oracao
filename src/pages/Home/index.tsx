import { useState } from 'react'
import { IonIcon } from '@ionic/react';
import { menu } from 'ionicons/icons';

import Body from '../../components/BodySite/BodySite';
import Logo from '../../assets/logo.svg'

import './styles.css'

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

return (
  <div>
      <nav className="pg-9 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <div className="md:flex md:items-center Parte-esquerda">
            <img src={Logo} alt="logo" className="h-30 inline" />
            <span className="text-2x1 font-inter ml-3">
              <div className="flex flex-col">
                <span className="text-black opacity-50 font-regular">
                  Seja Bem-vindo a
                </span>
                <span className="text-2x1 font-bold">
                  7x Support Prayer
                </span>
              </div>
            </span>
          </div>
          <span className="text-3x1 cursor-pointer mx-2 md:hidden block" onClick={toggleMenu}>
            <IonIcon icon={menu} size="large" />
          </span>
        </div>
        <ul
          className={`md:flex md:items-center font-inter mr-8 z-[-1] md:z-auto md:static absolute left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${showMenu ? 'opacity-100 top-[-400] bg-white-500 z-10' : 'opacity-0 top-[-200]'} transition-all ease-in duration-500`}
        >
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-xl hover:text-indigo-900 duration-500">
              Início
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-xl hover:text-indigo-900 duration-500">
              Sobre
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-xl hover:text-indigo-900 duration-500">
              Ajuda
            </a>
          </li>
        </ul>
      </nav>
      <Body />
    </div>
)
}
