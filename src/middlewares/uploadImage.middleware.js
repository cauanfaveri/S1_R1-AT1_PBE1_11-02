import createMulter from "../config/upload.multer.js";

const uploadImage = createMulter({
    folder: 'Images',
    allowedTypes: ['image/jpeg', 'image/png', 'image/jpg'],
    fileSize: 10 * 1024 * 1024 
}).single('vinculoImagem'); // ✅ trocou 'image' por 'vinculoImagem'

export default uploadImage;