import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { menu } from "ionicons/icons";
import Logo from '../assets/logo.svg'

export function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between">
                <div className="flex justify-center flex-row max-md:flex-col max-md:text-center items-center z-10 max-md:pl-5 relative">
                    <img src={Logo} alt="logo" className="h-30 max-md:h-24 max-md:mt-4" />
                    <div className="flex flex-col max-md:text-xs max-md:text-center font-inter max-md:absolute top-3/4 whitespace-nowrap">
                        <span className="text-black opacity-50 font-regular">
                            Seja Bem-vindo a
                        </span>
                        <span className="text-2x1 font-bold">
                            7x Support Prayer
                        </span>
                    </div>
                </div>
                <div className={`flex flex-1 justify-end max-md:h-screen font-inter mr-8 max-md:w-screen max-md:absolute max-md:justify-center left-0 max-md:py-0 py-4 max-md:pl-0 pl-7 duration-500 items-center ${mobileMenuOpen ? 'top-0 bg-white' : '-top-full'}`}>
                    <ul className='flex gap-12 max-md:gap-7 max-md:flex-col max-md:text-center text-xl'>
                        <li>
                            <a href="#" className="hover:text-indigo-900 duration-500">
                                Início
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-900 duration-500">
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-indigo-900 duration-500">
                                Ajuda
                            </a>
                        </li>
                    </ul>
                </div>
                <span
                    className="pr-5 z-10 cursor-pointer md:hidden max-md:mt-14 block"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className="sr-only">Open main menu</span>
                    <IonIcon icon={menu} size="large" />
                </span>
            </nav>
    )
}