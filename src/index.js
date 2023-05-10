const { PrismaClient } = require("@prisma/client")

const cors = require('cors')
const express = require('express')

const app = express()

const routes = require("./routes")

app.use(express.json())
app.use(cors({origin:true}));
app.use(routes);

const port = 3011
app.listen(port, () =>
  console.log(`
🚀 Server ready`)
)