import { tipo } from "./Variables";

export const continuarEjercicio = () => {
  document.getElementById("btnContinuar").onclick = () => false;
  document.querySelector(".feedback").style.display = "none";
  document.querySelector("footer").style.display = "grid";
  if (tipo === "selección múltiple") {
    document.querySelector("input[type=radio]:checked").checked = false;
  } else {
    document.querySelectorAll("input[type=text]").forEach(input => {
      input.value = "";
    });
  }
};
