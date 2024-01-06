import React, { useState } from 'react';

const Gravador = function() {
  const [transcricao, setTranscricao] = useState('');
  const [estaGravando, setEstaGravando] = useState(false);
  const [reconhecimento, setReconhecimento] = useState(null);
  var transcript = "";

  const iniciarGravacao = async function() {
    setEstaGravando(true);

    const recognition = new window.webkitSpeechRecognition();

    recognition.onresult = function(event) {
      transcript = event.results[0][0].transcript;
      setTranscricao(transcript);
    };

    recognition.onend = function() {
      // Aqui vai limitar a gravação para não ficar muito grande
      setTimeout(() => {
        setEstaGravando(false);
      }, 1800);  
    };

    setReconhecimento(recognition);
    recognition.start();
  };

  const pausarGravacao = function() {
    if (reconhecimento) {
      reconhecimento.stop();
      setEstaGravando(false);
    }
  };

  return (
    <>
      <div className="flex">
        {estaGravando ? (
          <button onClick={pausarGravacao} className="m-6 w-[200px] h-[100px] bg-red-700 rounded-3xl">
            <img src="https://www.svgrepo.com/show/364660/microphone-slash-fill.svg" alt="microfone"/>
          </button>
        ) : (
          <button onClick={iniciarGravacao} className="m-6 w-[200px] h-[100px] bg-red-700 rounded-3xl">
            <img src="https://www.svgrepo.com/show/364659/microphone-fill.svg" alt="microfone"/>
          </button>
        )}
        
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          value={transcricao}
          onChange={(e) => setTranscricao(e.target.value)}  // Atualize sempre quando estiver fazendo uma nova gravação
          className="text-black block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          readOnly
        ></textarea>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="w-[300px] h-[300px] bg-blue-300"></div>
        <div className="w-[300px] h-[300px] bg-blue-300"></div>
        <div className="w-[300px] h-[300px] bg-blue-300"></div>
      </div>
    </>
  );
};

export default Gravador;
