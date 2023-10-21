require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || "5000";
app.listen(PROT, () => console.log(`Server running on PORT: ${PORT}`));
