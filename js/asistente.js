 
   //
  //
 // MENSAJE DEL USUARIO
function enviarMensaje() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");
  const text = input.value.trim();

  if (!text) return;

  // mensaje usuario
  chat.innerHTML += `<div class="msg-user">${text}</div>`;
  input.value = "";

  chat.scrollTop = chat.scrollHeight;

 
  setTimeout(() => {
    agregarMensajeBotConTyping(responder(text));
  }, 300);
}

//respuestas
function responder(msg) {
    msg = msg.toLowerCase();
    //sobre mi
    if (msg.includes("quien") || msg.includes("sobre luna")) {
        return "Luna es desarrolladora full stack, le gustan muchos idiomas como para enforcarse en uno solo!";
    }

    //tecnologias
    if (msg.includes("tecnologias") || msg.includes("stack") || msg.includes("usas")) {
        return "Luna puede realizar trabajos con HTML, CSS, JavaScript, Java, PostgreSQL, PHP, Python, Flask y discord.py.";
    }

    //proyectos
    if (msg.includes("proyectos") || msg.includes("portfolio")) {
        return "Podes ver los proyectos en la sección Portafolio del sitio.";
    }

    //contacto
    if (msg.includes("contacto") || msg.includes("email") || msg.includes("linkedin")) {
        return "Podes ver los datos de Luna en la seccion contactos. Su email es Luna 22012001@gmail.com";
    }

    // EXPERIENCIA
    if (msg.includes("experiencia") || msg.includes("trabajo")) {
        return "Luna se especializa en desarrollo full stack y bots de Discord. Aun no trabajó para ninguna empresa pero esta ansiosa por hacerlo";
    }

    return "Puedo contarte sobre Luna, sus tecnologías, proyectos o cómo contactarla.";
}

//crea el mensaje del bot
function agregarMensajeBot(texto) {
  const chat = document.getElementById("chat");

  const msg = document.createElement("div");
  msg.className = "msg-bot";
  msg.textContent = texto;

  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

//simular que el bot esta escribiendo
function agregarMensajeBotConTyping(texto) {
  const chat = document.getElementById("chat");
  if (!chat) return console.error("No existe #chat");

  const typing = document.createElement("div");
  typing.className = "msg-bot typing";
  typing.textContent = "Escribiendo...";
  chat.appendChild(typing);

  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    typing.remove();
    agregarMensajeBot(texto);
  }, 1500);
}

//botoncitos de sugerencias
function preguntaRapida(texto) {
  document.getElementById("userInput").value = texto;
  enviarMensaje
();
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    agregarMensajeBotConTyping(
      "👋 Hola, soy el asistente de Luna. Podés preguntarme sobre sus tecnologías, proyectos o experiencia."
    );
  }, 600);
});