const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "public/admin/upload");
    },
    filename: function (req, file, callback) {
        let ext = path.extname(file.originalname);
        callback(null, Date.now() + ext);
    },
});

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        // console.log(file);
        if (
            file.mimetype == "image/bmp" ||
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpeg"||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/gif"
        ) {
            callback(null, true);
        } else {
            return callback(new Error("Only image files with jpg, png, gif, bmp, jpeg . extension are supported!!"));
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
});

module.exports = upload;
