const form = document.getElementById("comentario-form");
const lista = document.getElementById("lista-comentarios");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const datos = new FormData(form);

  await fetch("/api/comentarios", {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      nombre: datos.get("nombre"),
      mensaje: datos.get("mensaje")
    })

  });

  form.reset();

  cargarComentarios();

});


async function cargarComentarios(){

  const res = await fetch("/api/comentarios");

  const comentarios = await res.json();

  lista.innerHTML = "";

  comentarios.forEach(c => {

    lista.innerHTML += `

      <div class="comentario">

        <div class="comentario-nombre">${c.nombre}</div>

        <div class="comentario-mensaje">${c.mensaje}</div>

        <div class="comentario-fecha">${c.fecha}</div>

      </div>

    `;

  });

}

cargarComentarios();