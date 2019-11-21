import {
  numeroIntento,
  siguienteIntento,
  validaciones,
  tipo,
  tmpProgreso,
  srcImgRespuestaCorrecta,
  srcImgRespuestaIncorrecta,
  srcImgGlosa
} from "./Variables";
import { validaRespuesta } from "./ValidaRespuesta";
import { continuarEjercicio } from "./ContinuarEjercicio";

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
  console.log(feedbackStrong);
  console.log(feedbackText);
  if (!errorFrecuente) {
    //respuesta correcta
    feedbackElement.style.display = "block";
    feedbackElement.classList.add("feedback-correcto");
    feedbackStrong.innerHTML = "¡Muy Bien!";
    let racha = rachaCorrectas();
    if (racha) {
      feedbackText.innerHTML = `Tienes una racha de <b>${rachaCorrectas()}</b> respuestas correctas.`;
    }
    imgFeedback.setAttribute(
      "src",
      srcImgRespuestaCorrecta[imgRandomIndex(true)]
    );
    //se debe agregar la funcion al #btnContinuar para pasar al siguiente ejercicio
  } else {
    //respuesta incorrecta
    if (numeroIntento === 1) {
      imgFeedback.setAttribute(
        "src",
        srcImgRespuestaIncorrecta[imgRandomIndex(false)]
      );
      feedbackElement.style.display = "block";
      feedbackElement.classList.add("feedback-incorrecto");
      feedbackStrong.innerHTML = "¡Ten Cuidado!";
      feedbackText.innerHTML = feedback;
      document
        .getElementById("btnContinuar")
        .addEventListener("click", continuarEjercicio);
      siguienteIntento();
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
};

const imgRandomIndex = esCorrecta => {
  if (esCorrecta) {
    return Math.floor(Math.random() * srcImgRespuestaCorrecta.length);
  } else {
    return Math.floor(Math.random() * srcImgRespuestaIncorrecta.length);
  }
};

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
