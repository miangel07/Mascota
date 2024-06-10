import multer from "multer";

// aqui usamos multer y le damos la ubicacion donde se va a logar la imagen 
const storage = multer.diskStorage({
  destination:function (res, file, cb) {
    cb(null, "public/img");
  },
  // aqui le damos el nombre de la imagen que se va a guardar en la carpeta public/img
  filename: function (res, file, cb) {
    console.log(file)
    cb(null, file.originalname);
  },
});
// se establece en el objeto storage que creaste previamente usando multer.diskStorage().
// Esto le dice a Multer que debe utilizar el almacenamiento en disco para guardar los archivos subidos en el directorio especificado.
const upload = multer({ storage: storage });
// a qui exportamos  constante subir imagen con el valor images 
export const subirImagen=upload.single("images")


