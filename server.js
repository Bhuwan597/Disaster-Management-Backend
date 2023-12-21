const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')





dotenv.config()
const app = express()
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "API is running successfully."
    });
  })

  
const server = app.listen(
    process.env.PORT || 5000,
    "0.0.0.0",
    console.log(
      `Server started at: http://localhost:${process.env.PORT || 5000}`
    )
  );
