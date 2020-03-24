import {
  numeroIntento,
  siguienteIntento,
  validaciones,
  tipo,
  tmpProgreso,
  srcImgRespuestaCorrecta,
  srcImgRespuestaIncorrecta,
  srcImgGlosa, 
  feedPositivos,
  feedNegativos
} from "./Variables";
import { validaRespuesta } from "./ValidaRespuesta";
import { continuarEjercicio } from "./ContinuarEjercicio";
import FormateaNumeros from "../utils/FormateaNumeros"

export const handleRespuesta = () => {
  document.querySelector("footer").style.display = "none";
  document.getElementById("btnResponder").disabled = true;
  document.getElementsByName("answer").forEach(input => {
    input.disabled = true;
  });
  let { feedback, errorFrecuente } = validaRespuesta(validaciones, tipo);
  let feedbackElement = document.querySelector(".feedback");
  let feedbackStrong = document.querySelector(".feedback span");
  let feedbackText = document.querySelector(".feedback p");
  let imgFeedback = document.querySelector(".feedback img");
  if (!errorFrecuente) {
    //respuesta correcta
    feedbackElement.style.display = "block";
    feedbackElement.classList.add("feedback-correcto");
    feedbackStrong.innerHTML = feedRandomIndex(true);
    let racha = rachaCorrectas();
    if (racha) {
      feedbackText.innerHTML = `Tienes una racha de <b>${rachaCorrectas()}</b> respuestas correctas.`;
    }
    imgFeedback.setAttribute(
      "src",
      srcImgRespuestaCorrecta[imgRandomIndex(true)]
    );
    numeroIntento === 2 && document.getElementById("btnContinuar").removeEventListener ("click", continuarEjercicio);//si es que es el segundo intento
    document.getElementById("btnContinuar").setAttribute("onClick", "cerrarFeed();");
  } else {
    //respuesta incorrecta
    if (numeroIntento === 1) {
      imgFeedback.setAttribute(
        "src",
        srcImgRespuestaIncorrecta[imgRandomIndex(false)]
      );
      feedbackElement.style.display = "block";
      feedbackElement.classList.add("feedback-incorrecto");
      feedbackStrong.innerHTML = feedRandomIndex(false);
      feedbackText.innerHTML = FormateaNumeros(feedback);
      document.getElementById("btnContinuar").addEventListener("click", continuarEjercicio);
      siguienteIntento();
      window.MathJax && MathJax.Hub.Queue(["Typeset", MathJax.Hub]) //muestra el mathjax en los feedbacks en caso de que existan
    } else {
      document
        .getElementById("imagenGlosa")
        .setAttribute(
          "src",
          srcImgGlosa[Math.floor(Math.random() * srcImgGlosa.length)]
        );
      document.getElementById("glosa").style.display = "block";
    }
  }
  eval(`enviar(${errorFrecuente == null}, ${errorFrecuente == null ? errorFrecuente : '"'+errorFrecuente+ '"'})`)
};

const imgRandomIndex = esCorrecta => {
  if (esCorrecta) {
    return Math.floor(Math.random() * srcImgRespuestaCorrecta.length);
  } else {
    return Math.floor(Math.random() * srcImgRespuestaIncorrecta.length);
  }
};

const feedRandomIndex = esCorrecta => {
  if(esCorrecta) {
    return feedPositivos[Math.floor(Math.random() * feedPositivos.length)]
  } else {
    return feedNegativos[Math.floor(Math.random() * feedNegativos.length)]
  }
}

const rachaCorrectas = () => {
  var correctos = 0;
  for (var i = tmpProgreso.length - 1; i > -1; i--) {
    if (tmpProgreso[i].correcto) {
      correctos++;
    } else {
      break;
    }
  }
  return correctos + 1 > 1 ? correctos + 1 : null;
};
