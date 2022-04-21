import multer from 'multer';
import { nanoid } from 'nanoid';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },

  filename: function (req, file, cb) {
    const fileExtension = file.originalname.substring(
      file.originalname.lastIndexOf('.')
    );

    const fileName = `${nanoid()}${fileExtension}`;

    cb(null, fileName);
  },
});

const uploads = multer({ storage: storage });

export { uploads };
