import React, { useState } from 'react';

const Gravador = function() {
  // Estados para armazenar a transcrição, estado de gravação e objeto de reconhecimento.
  const [transcricao, setTranscricao] = useState('');
  const [estaGravando, setEstaGravando] = useState(false);
  const [reconhecimento, setReconhecimento] = useState(null);
  var transcript = "";

  // Função para iniciar a gravação
  const iniciarGravacao = async function() {
    setEstaGravando(true);

    // Cria uma nova instância de reconhecimento de fala
    const recognition = new window.webkitSpeechRecognition();

    // Evento chamado quando há resultados na transcrição
    recognition.onresult = function(event) {
      transcript = event.results[0][0].transcript;
      setTranscricao(transcript);
    };

    // Evento chamado quando a gravação é encerrada
    recognition.onend = function() {
      // Aqui vai limitar a gravação para não ficar muito grande
      setTimeout(() => {
        setEstaGravando(false);
      }, 1800);
    };

    setReconhecimento(recognition);
    recognition.start();
  };

  // Função para pausar a gravação
  const pausarGravacao = function() {
    if (reconhecimento) {
      reconhecimento.stop();
      setEstaGravando(false);
    }
  };

  return (
    <>
      {/* Botões para iniciar ou pausar a gravação */}
      <div className="flex">
        {estaGravando ? (
          <button onClick={pausarGravacao} className="m-6 w-[150px] h-[100px] bg-red-700 rounded-3xl mt-20">
            <img src="https://www.svgrepo.com/show/364660/microphone-slash-fill.svg" className="h-[90%] mx-auto" alt="microfone"/>
          </button>
        ) : (
          <button onClick={iniciarGravacao} className="m-6 w-[150px] h-[100px] bg-red-700 rounded-3xl mt-20">
            <img src="https://www.svgrepo.com/show/364659/microphone-fill.svg" className="h-[90%] mx-auto" alt="microfone"/>
          </button>
        )}

        {/* Área de texto para exibir a transcrição */}
        <textarea
          id="message"
          value={transcricao}
          onChange={(e) => setTranscricao(e.target.value)}//Atualiza sempre quando iniciar uma nova gravação
          className="resize-none w-[500px] h-[300px] text-black block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          readOnly
        ></textarea>
      </div>
    </>
  );
};

export default Gravador;
