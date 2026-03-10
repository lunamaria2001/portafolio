export default async function handler(req, res) {  //Peticion del navegador, Respuesta del Back

  if (req.method !== "POST") {
    return res.status(405).json({
      mensaje: "No permitido" //No valido
    });
  }

  const { nombre, email, mensaje } = req.body;

  console.log("Nuevo contacto:");
  console.log(nombre, email, mensaje);

  res.status(200).json({
    mensaje: "Mensaje enviado correctamente"
  });

}