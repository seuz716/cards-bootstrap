import React, { useState } from 'react';
import './traduccion.css';
import openai from 'openai';

openai.promise.setApiKey("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");

function Traduccion() {
  const [inputText, setInputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('en');
  const [outputText, setOutputText] = useState('');
  const [progress, setProgress] = useState(0);
  const [isListening, setIsListening] = useState(false);

  const handleStartListening = () => {
    setIsListening(true);
    const recognition = new window.SpeechRecognition();
    recognition.onresult = event => {
      setInputText(event.results[0][0].transcript);
      setIsListening(false);
    };
    recognition.start();
  };

  const handleStopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  const handleInputText = event => setInputText(event.target.value);
  const handleTargetLanguage = event => setTargetLanguage(event.target.value);
  const handleTranslate = async () => {
    setProgress(0);
    const intervalId = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 200);

    const model = "text-davinci-002";
    const prompt = `Traducir "${inputText}" al ${targetLanguage}`;

    try {
      const response = await openai.promise.text({
        model,
        prompt
      });
      setOutputText(response.choices[0].text);
    } catch (error) {
      console.error(error);
      setOutputText("Error al traducir el texto. Por favor, inténtelo de nuevo más tarde.");
    }
  };


  const handleDownload = () => {
    const data = new Blob([outputText], { type: 'text/plain' });
    const url = URL.createObjectURL(data);
    const link = document.createElement('a');
    link.download = `traduccion.txt`;
    link.href = url;
    link.click();
  };

  return (

    <div className="container">
      <textarea id="inputText" onChange={handleInputText} value={inputText} />
      <button id="startListeningButton" onClick={handleStartListening}>Comenzar a escuchar</button>
      {isListening && (
        <button id="stopListeningButton" onClick={handleStopListening}>Detener</button>
      )}
      <select id="targetLanguage" onChange={handleTargetLanguage} value={targetLanguage}>
        <option value="en">Inglés</option>
        <option value="es">Español</option>
        <option value="fr">Francés</option>
        <option value="de">Alemán</option>
        <option value="it">Italiano</option>
      </select>
      <button id="translateButton" onClick={handleTranslate}>Traducir</button>
      {progress > 0 && progress < 100 && (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
      )}
      <textarea id="outputText" value={outputText} />
      {outputText.length > 0 && (
        <button id="downloadButton" onClick={handleDownload}>Descargar</button>
      )}
    </div>
  );
}

export default Traduccion;
