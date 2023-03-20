import { useState } from 'react';
import body from './assets/body.png';
import './Body.css';
import { IonIcon } from '@ionic/react';
import { menu } from 'ionicons/icons';

function BodySite() {
  return (
    <div className="flex font-inter items-start justify-start md:ml-28 ml-5">
      <div className="flex flex-col mt-44">
        <span className="font-bold text-6xl">Aqui você tem </span>
        <span className="font-bold text-6xl">pessoas orando</span>
        <span className="font-bold text-6xl mb-10">por você</span>
        <span className="font-regular text-3xl">
          Você não precisa nos falar nem o seu nome,
        </span>
        <span className="font-bold text-3xl mb-10">apenas peça</span>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md w-64 h-12">
          Peça sua oração
        </button>
      </div>
      <img src={body} className="ml-auto mx-2 md:block hidden" />
    </div>
  );
}

export default BodySite;
