import body from '../../assets/body.png'

import './styles.css'

function BodySite() {
  return (
    <div className="flex font-inter items-start justify-start md:ml-16 ml-5">
      <div id='container' className="flex flex-col mt-44">
        <span className="font-bold text-6xl">Aqui você tem </span>
        <span className="font-bold text-6xl">pessoas orando</span>
        <span className="font-bold text-6xl mb-10">por você</span>
        <div className='secoundText'>
          <span>Você não precisa nos falar nem o seu nome, <strong>apenas peça</strong> </span>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md w-64 h-12">
          Peça sua oração
        </button>

      </div>
      <img id='image' src={body} />
    </div>
  );
}

export default BodySite;
