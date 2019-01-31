"use strict";

var respGeneral = 0,
    rspMalas = 0,
    rspSinFeedBack = 0,
    RespNeg = 0,
    fechaEntrada = new Date().toLocaleTimeString(),
    idEjercicio = document.body.id,
    nivelF = idEjercicio.substring(0, 2),
    ejeF = idEjercicio.substring(2, 4),
    errFre = '',
    feed = '',
    check = false;
var _TIPO_INPUT_ = '';
var feedCorrectas = ['¡Muy Bien!', '¡Excelente!', '¡Sigue así!'];
var feedIncorrectas = ['¡Atención!', '¡Pon Atención!', 'Cuidado']; //boton responder

var btnRespuesta = document.getElementById('btnResponder');
btnRespuesta.setAttribute("onClick", "answer();");
var tmpProgreso = localStorage.getItem('tmpProgreso') ? JSON.parse(localStorage.getItem('tmpProgreso')) : [];
var tmpTotal = localStorage.getItem('tmpTotal') ? Number(localStorage.getItem('tmpTotal')) : 5;
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  barraDeProgreso();
  $(window).resize(function () {
    barraDeProgreso();
  });
  window.addEventListener("keyup", function (event) {
    event.preventDefault();

    if (event.keyCode === 13) {
      !btnRespuesta.disabled && btnRespuesta.click();
    }
  });
});

function validaRespuesta() {
  //Validar respuesta
  var respuesta, respuestaObj;

  if (_TIPO_INPUT_ === 'radio') {
    respuesta = document.querySelector('input[name="answer"]:checked');
    respuestaObj = JSON.parse(respuesta.getAttribute('data-content'));
    feed = respuestaObj ? respuestaObj.feedback : "<p>Debes seleccionar una respuesta</p>";
    errFre = respuestaObj ? respuestaObj.errFrec : true;
  } else if (_TIPO_INPUT_ === 'input') {
    var inputs = document.querySelectorAll(".contenido input[name='answer']");

    if (inputs.length === 1) {
      //si solo hay un input de texto
      evaluaInputTexto(inputs[0]);
    } else {
      //si hay mas de un input de texto
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var input = _step.value;
          evaluaInputTexto(input);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }
}

function evaluaInputTexto(inputElement) {
  var content = JSON.parse(inputElement.getAttribute('data-content'));
  var match = false;

  switch (content.tipoInput) {
    case 'numero':
      var resp = inputElement.value.replace(/\s/g, '');
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = content.answers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var answer = _step2.value;

          if (resp === answer.respuesta) {
            feed = answer.feedback;
            errFre = answer.errFrec;
            match = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      break;
  }

  if (!match) {
    feed = content.feedbackDefecto;
    errFre = content.errFrecDefecto;
  }
}

function answer() {
  validaRespuesta();
  var feedHtml = regex(feed, versionBody.vars, false);
  feedHtml = regexFunctions(feedHtml);

  if (respGeneral < 2 && !check) {
    if (!errFre) {
      //la respuesta correcta no tiene error frecuente
      check = true;
      muestraFeedback(!errFre, feedHtml);
    } else {
      if (!respGeneral) {
        muestraFeedback(!errFre, feedHtml);
      } else {
        openModalGlosa(document.getElementById('glosa').innerHTML);
      }
    }

    respGeneral++;
    enviar();
  }
}

function barraDeProgreso() {
  $("#progressbar").empty();
  var svg = document.getElementById('progressbar');
  var separacion = (1000 - 46 * tmpTotal) / tmpTotal;

  for (var i = 0; i < tmpTotal; i++) {
    var xRect = i * separacion + i * 46 + 5; //calcula centro x para rectangulo

    var cxCircle = i * separacion + i * 46 + separacion + 23; //calcula x de inicio para recta

    var circle = crearElemento('circle', {
      cx: cxCircle,
      cy: 25,
      r: 23,
      fill: 'black',
      stroke: 'none'
    });
    var rect = crearElemento('rect', {
      x: xRect,
      y: 13.5,
      width: separacion - 10,
      height: 27,
      fill: 'black',
      stroke: 'none'
    });
    svg.appendChild(circle);
    svg.appendChild(rect);
  }

  function crearElemento(nombre, atributos) {
    var element = document.createElementNS("http://www.w3.org/2000/svg", nombre);

    for (var p in atributos) {
      element.setAttributeNS(null, p.replace(/[A-Z]/g, function (m, p, o, s) {
        return "-" + m.toLowerCase();
      }), atributos[p]);
    }

    return element;
  }
} //muestgra feeedbacks


function muestraFeedback(esCorrecta, feedback) {
  var x = window.matchMedia("(max-width: 768px)");

  if (x.matches) {
    //mostrar feedback en modal
    if (esCorrecta) {
      openModalFeedback(feedback, true);
    } else {
      openModalFeedback(feedback, false);
    }
  } else {
    //mostrar feedback en footer
    var arrCorrecta = ["PatoFeedBack_00007.png", "PataFeedBack_00007.png"]; //Imagen feedback si es correcto

    var arrIncorrecta = ["PatoFeedBack_00001.png", "PataFeedBack_00001.png"];
    $('#btnResponder').html('<span>CONTINUAR</span>');
    $('footer.pie').find('div > span').html(feedback);
    $('#imgfeedback').removeClass('d-none');
    $('#btnConsulta').addClass('d-none');
    $('section.contenido').find('input').prop('disabled', true);

    if (esCorrecta) {
      var rando = Math.floor(Math.random() * arrCorrecta.length);
      var src = "https://desarrolloadaptatin.blob.core.windows.net/feedbacksimg/".concat(arrCorrecta[rando]);
      feedbackCorrecta(src);
    } else {
      var rando = Math.floor(Math.random() * arrIncorrecta.length);
      var src = "https://desarrolloadaptatin.blob.core.windows.net/feedbacksimg/".concat(arrIncorrecta[rando]);
      feedbackIncorrecta(src);
    }
  }

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]); //dibuja las ecuaciones que fueron inyectadas despues de que cargo la pagina
}

function feedbackCorrecta(src) {
  $('footer.pie').addClass('pieCorrecta');
  $('#btnResponder').addClass('respCorrecta');
  $('#imgfeedback').attr('src', src);
  var racha = rachaCorrectas();
  var textoSpan = feedCorrectas[Math.floor(Math.random() * feedCorrectas.length)];

  if (racha) {
    var textoRacha = "Tienes una racha de <b>".concat(rachaCorrectas(), "</b> respuestas correctas.");
    $('footer.pie').find('div.col-2.col-sm-4.col-md-6').html("<span class=\"spanFeedback\">".concat(textoSpan, "</span><p class=\"textoFeedback\">").concat(textoRacha, "</p>"));
  } else {
    $('footer.pie').find('div.col-2.col-sm-4.col-md-6').html("<span class=\"spanFeedback\">".concat(textoSpan, "</span>"));
  }

  btnRespuesta.setAttribute("onClick", "cerrarFeed();");
}

function rachaCorrectas() {
  var correctos = 0;

  for (var i = tmpProgreso.length - 1; i > -1; i--) {
    if (tmpProgreso[i].correcto) {
      correctos++;
    } else {
      break;
    }
  }

  return correctos + 1 > 1 ? correctos + 1 : null;
}

function feedbackIncorrecta(src) {
  $('footer.pie').addClass('pieIncorrecta');
  $('#btnResponder').addClass('respIncorrecta');
  $('#imgfeedback').attr('src', src);
  var textoSpan = feedIncorrectas[Math.floor(Math.random() * feedCorrectas.length)];
  $('footer.pie').find('div.col-2.col-sm-4.col-md-6').html("<span class=\"spanFeedback\">".concat(textoSpan, "</span><p class=\"textoFeedback\">").concat(feed, "</p>"));
  btnRespuesta.setAttribute("onClick", "continuarEjercicio();");
}

function continuarEjercicio() {
  //permite continuar con el segundo intento en DESKTOP O TABLET
  $('footer.pie').removeClass('pieIncorrecta pieCorrecta');
  $('#btnResponder').removeClass('respIncorrecta respCorrecta');
  $('footer.pie').find('div.col-2.col-sm-4.col-md-6').html('').css('color', '');
  $('#btnResponder').html('<span>RESPONDER</span>');
  $('#btnConsulta').removeClass('d-none');
  $('#imgfeedback').addClass('d-none');
  btnRespuesta.setAttribute("onClick", "answer();");
  btnRespuesta.disabled = true; //limpia inputs

  if (_TIPO_INPUT_ === 'radio') {
    $('input:checked')[0].checked = false;
    $('.radio-div__selected').removeClass('radio-div__selected');
  } else if (_TIPO_INPUT_ === 'input') {
    $('section.contenido').find('input[type=text]').val('');
  }

  $('section.contenido').find('input').prop('disabled', false);
} //handle modals


function openModalFeedback(feedback, correcto) {
  var textoSpan,
      textoFeedback = "",
      btnClass,
      btnAction;

  if (correcto) {
    textoSpan = feedCorrectas[Math.floor(Math.random() * feedCorrectas.length)];
    var racha = rachaCorrectas();

    if (racha) {
      textoFeedback = "Tienes una racha de <b>".concat(rachaCorrectas(), "</b> respuestas correctas.");
    }
  } else {
    textoSpan = feedIncorrectas[Math.floor(Math.random() * feedCorrectas.length)];
    textoFeedback = feedback;
  }

  $('#modalFeedback div.col-12').first().html("<span class=\"spanFeedback\">".concat(textoSpan, "</span><p class=\"textoFeedback\">").concat(textoFeedback, "</p>"));
  $('#modalFeedback div.modal-content').addClass(correcto ? 'modalFeedbackOK' : 'modalFeedbackError');
  btnClass = correcto ? 'btnCerrarFeedGood' : 'btnCerrarFeedBad';
  btnAction = correcto ? 'cerrarFeed()' : 'closeModalFeedback()';
  $('#btnCloseModal').attr('onclick', btnAction).removeClass('btnCerrarFeedBad btnCerrarFeedGood').addClass(btnClass);
  console.log(btnClass, btnAction);
  $('section.contenido').find('input').prop('disabled', true);
  $('#modalFeedback').modal({
    backdrop: 'static',
    keyboard: false
  });
  $('#modalFeedback').modal('show');
}

function closeModalFeedback() {
  //esta funcion permite continuar con el segundo intento en MOBILE 
  $('#modalFeedback').modal('hide');

  if (_TIPO_INPUT_ === 'radio') {
    $('input:checked')[0].checked = false;
    $('.radio-div__selected').removeClass('radio-div__selected');
  } else if (_TIPO_INPUT_ === 'input') {
    $('section.contenido').find('input[type=text]').val('');
  }

  $('section.contenido').find('input').prop('disabled', false);
  btnRespuesta.disabled = true;
}

function openModalGlosa() {
  $('#modalGlosa').modal({
    backdrop: 'static',
    keyboard: false
  });
  $('#modalGlosa').modal('show');
} //FUNCIONES DE LOS INPUTS DE RESPUESTA


function cambiaRadios(e) {
  console.log(e.target.value);
  _TIPO_INPUT_ = 'radio';
  btnRespuesta.disabled = false;
}

function cambiaInputTexto(e) {
  var theEvent = e || window.event; // Handle paste

  if (theEvent.type === 'paste') {
    key = event.clipboardData.getData('text/plain');
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }

  var regex = /[a-zA-Z]|\.|ñ|\s/;

  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  } else {
    _TIPO_INPUT_ = 'input';
    checkTexts();
  }
}

function cambiaInputNumerico(e) {
  var theEvent = e || window.event; // Handle paste

  if (theEvent.type === 'paste') {
    key = event.clipboardData.getData('text/plain');
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }

  var regex = /[0-9]|\./;

  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function formatearNumero(e) {
  var arrayReverse = String(e.target.value).replace(/\s/g, '').split("").reverse();

  for (var i = 0, count = 0, valor = ''; i < arrayReverse.length; i++) {
    count++;

    if (count === 3 && arrayReverse[i + 1]) {
      valor = ' ' + arrayReverse[i] + valor;
      count = 0;
    } else {
      valor = arrayReverse[i] + valor;
    }
  }

  e.target.value = valor;
  _TIPO_INPUT_ = 'input';
  checkTexts();
}

function cambiaInputAlfanumerico(e) {
  var theEvent = e || window.event; // Handle paste

  if (theEvent.type === 'paste') {
    key = event.clipboardData.getData('text/plain');
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }

  var regexNumero = /[0-9]|\./;
  var regexTexto = /[a-zA-Z]|\.|ñ|\s/;

  if (!regexNumero.test(key) && !regexTexto.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  } else {
    _TIPO_INPUT_ = 'input';
    checkTexts();
  }
}

function checkTexts() {
  var todasRespondidas = true;
  $('input[type=text]:not([disabled])').each(function () {
    if ($(this).val() == '') {
      todasRespondidas = false;
      return false;
    }
  });

  if (!check || respGeneral >= 2) {
    btnRespuesta.disabled = !todasRespondidas;
  }
}