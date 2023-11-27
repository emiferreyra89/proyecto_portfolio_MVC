const express = require ('express');
const app = express();
const path = require ('path');

app.use(express.static(path.join(__dirname + '/public')))

const homeRouter = require ('./routers/homeRouter.js');
const aboutRouter = require ('./routers/homeRouter.js')

app.use('/', homeRouter);
app.use('/about', aboutRouter)

app.listen (3000, () => {
    console.log('Servidor funcionando');
});
