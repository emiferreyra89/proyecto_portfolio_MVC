const express = require ('express');
const app = express();
const path = require ('path');

app.use(express.static(path.join(__dirname + '/public')))

const homeController = require ('./controllers/homeController.js');
const aboutController = require ('./controllers/aboutController.js');
const homeRouter = require ('./routers/homeRouter.js');
const aboutRouter = require ('./routers/homeRouter.js')

app.use('/', homeController.home);
app.use('/about', aboutController.about)

app.listen (3000, () => {
    console.log('Servidor funcionando');
})