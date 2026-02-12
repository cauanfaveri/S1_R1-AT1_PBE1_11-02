import multer, { diskStorage } from "multer";
import path from 'path';
import crypto from 'crypto';
import fs from 'fs';

const baseUploadDir = path.resolve(process.cwd(), 'uploads');

const verificaDir = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

const createMulter = ({ folder, allowedTypes, fileSize }) => {
    // Montar o caminho da base upload e paste
    const uploadDir = path.join(baseUploadDir, folder);

    // Verficar se a pasta ja existe
    verificaDir(uploadDir);
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, uploadDir);
        },
        filename: (req, file, cb) => {
            const hash = crypto.randomBytes(12).toString('hex');
            cb(null, `${hash}-${file.originalname}`);
        }
    });

    const fileFilter = (req, file, cb) => {
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error('Tipo de arquivo não permitido'));
        }
        cb(null, true);
    }

    return multer({
        storage,
        limits: { fileSize },
        fileFilter
    })

}
export default createMulter;