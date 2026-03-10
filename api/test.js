export default function handler(req, res) {
  res.status(200).json({
    mensaje: "Backend funcionando",
    autor: "Luna Maria"
  });
}