const form = document.getElementById("form-contacto");

form.addEventListener("submit", async function(e) {

  e.preventDefault();

  const datos = new FormData(form);

  const res = await fetch("/api/contacto", {
    method: "POST",
    body: datos
  });

  const data = await res.json();

  document.getElementById("respuesta").textContent = data.mensaje;

});