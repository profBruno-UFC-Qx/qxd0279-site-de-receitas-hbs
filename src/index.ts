

import express from "express";
import { engine } from "express-handlebars"
import { fileURLToPath } from "url";
import path from 'path'
import { getAll } from "./services/receitasService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app = express()
app.use(express.static('public'))

app.set('view engine', 'hbs')
app.engine('hbs', engine({
  extname: '.hbs'
}))
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('index', {
    title:'Página inicial', receitas: getAll()
  })
})


app.listen(8083, () => {
  console.log("The server is running")
})