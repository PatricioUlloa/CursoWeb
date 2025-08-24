console.log("Formulario JS");

const formulario = document.querySelector("#formulario");
const btnEnviar = document.querySelector("#btnEnviar");
const spinnerbtnEnviar = document.querySelector("#spinnerbtnEnviar");
const statusbtnEnviar = document.querySelector("#statusbtnEnviar");

const btnReset = document.querySelector("#btnReset");

const toastFormulario = document.querySelector(".toast");

formulario.addEventListener("submit", e => {
    console.log("Formulario enviado");
    e.preventDefault();

    const datos = new FormData(formulario);

    console.log('Nombre: ', datos.get("nombreCampo"));
    console.log('Apellido: ', datos.get("emailCampo"));
    console.log('Contraseña: ', datos.get("contrasenaCampo"));
    console.log('Confirmación: ', datos.get("confirmaCampo"));

    if (btnReset !== null) {
        btnReset.disabled = true;
        btnReset.classList.add("d-none");
    }

    if (btnEnviar !== null) {
        btnEnviar.disabled = true;
        btnEnviar.classList.replace("btn-primary", "btn-secondary");
    }

    if (spinnerbtnEnviar !== null) {
        spinnerbtnEnviar.classList.remove("d-none");
    }

    if (statusbtnEnviar !== null) {
        statusbtnEnviar.textContent = "Cargando...";
    }

    // Simular tiempo de espera
    window.setTimeout(() => {
        btnEnviar.innerHTML = `<span role="status">Enviado</span>`

        const eventoToast = new bootstrap.Toast(toastFormulario);
        eventoToast.show();

    }, 1000);
    formulario.reset();
});