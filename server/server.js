const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const expressAsyncHandler = require('express-async-handler');
const cors = require('cors');
const Image = require('./models/imagesModel');
const { default: axios } = require('axios');

const app = express();

app.use(cors({
    origin: [process.env.ORIGIN, "http://192.168.29.218:5173"],
    methods: ['GET','POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use(express.json());
const PORT = process.env.port || 3000

mongoose.connect(process.env.DBURL).then(() => {
    app.listen(PORT, (err) => {
        console.log(`listening on port http://localhost:${PORT}`);
    });

    app.post("/saveimage", expressAsyncHandler(async(req,res) => {
        // console.log(req.body);
        
        const {imageUrl, prompt, clerkUserId} = req.body;
        
        const response = await axios.get(imageUrl, {responseType: 'arraybuffer'});

        const imageB64 = Buffer.from(response.data, 'binary').toString('base64');
        const newImage = new Image({
            clerkUserId: clerkUserId,
            imageUrl: imageUrl,
            image: imageB64,
            prompt: prompt,
        })

        await newImage.save();
        
        res.status(200).json({status: "ok"});
    }));

    app.get("/getimages/:id", expressAsyncHandler(async(req,res) => {
        const clerkUserId = req.params.id;
        // console.log(clerkUserId);
        const imageObj = await Image.find({clerkUserId: clerkUserId});
        // console.log(imageObj);
        res.status(200).json(imageObj   );
    }));

    app.delete("/deleteimage/:id", expressAsyncHandler(async(req,res)=> {
        const imageId = req.params.id;
        // console.log(imageId);
        await Image.findByIdAndDelete(imageId);
        res.status(200).json({status: "ok"});
    }));
})
.catch((err) => {
    console.log(err);
});
