import body from './assets/body.png';
import invertedBody from './assets/invertedBody.png';

import './Body.css';

function BodySite() {
  return (
    <>
      <div className="flex font-inter items-start justify-start md:ml-28 ml-5">
        <div className="flex flex-col mt-44 -ml-12">
          <span className="font-bold text-6xl mb-10">
            Aqui você tem
            <br />
            pessoas orando
            <br />
            por você
          </span>
          <span className="font-regular text-3xl">
            Você não precisa nos falar nem o seu nome,
          </span>
          <span className="font-bold text-3xl mb-10">apenas peça</span>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md w-64 h-12 font-inter">
            Peça sua oração
          </button>
        </div>
        <img src={body} className="ml-auto md:block hidden w-8/12" />
      </div>
      <span className="flex items-center justify-center font-inter text-3xl font-semibold mb-32">
        Como Funciona O Processo De Pedido?
      </span>
      <div className="flex items-end justify-center bg-indigo-600 absolute w-full h-96 mb-96">
        <span className="mb-8 text-white font-inter normal-case w-2/4 text-center">
          Esse é um site voltado para você fazer pedidos de oração. É simples,
          você cria um propósito com a gente e nós oramos por você e com você
        </span>
      </div>
      <div className="flex items-center mt-80 pt-80">
        <img
          src={invertedBody}
          alt="image"
          className="-mr-52 md:block hidden w-9/12 opacity-80"
        />
        <div className="flex flex-col content-center items-end text-end -mt-52 pr-96">
          <span className="text-4xl font-inter font-extrabold mb-10 w-96">
            Você <strong>não precisa</strong> fazer isso sozinho.{' '}
            <strong>Receba ajuda!</strong>
          </span>
          <span className="text-2xl mb-10 font-inter w-auto">
            Aqui você <strong>não precisa sentir medo.</strong> Esse é um site
            seguro onde nossa única intenção é te <strong>ajudar</strong>, te
            <strong>aproximar de Deus</strong> e te dar apoio na sua jornada.
          </span>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md w-64 h-12 font-inter absolute z-10 mt-96">
            Peça sua oração
          </button>
        </div>
      </div>
    </>
  );
}

export default BodySite;
