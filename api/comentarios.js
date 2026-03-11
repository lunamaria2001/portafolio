let comentarios = [];

export default function handler(req, res) {
//agregar
  if (req.method === "POST") {

    const { nombre, mensaje } = req.body;

    const nuevoComentario = {
      nombre,
      mensaje,
      fecha: new Date().toLocaleString()
    };

    comentarios.unshift(nuevoComentario);

    res.status(200).json({ ok: true });

  }
 //dar
  if (req.method === "GET") {
    res.status(200).json(comentarios);
  }

}