const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer ({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './uploads');
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now() + ".jpg");
        }
    })
}).single("user_file");
app.post("/upload",upload, (req, resp)=>{
    resp.send("file upload");
});

app.listen(3000);