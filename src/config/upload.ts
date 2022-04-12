import multer from 'multer'
import { nanoid } from 'nanoid'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.substring(file.originalname.lastIndexOf('.'))

    cb(null, `${nanoid()}${ext}`)
  },
})

const uploads = multer({ storage: storage })

export default uploads
