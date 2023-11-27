const path = require ('path');

const homeController = {
    home: (req,res) => {res.sendfile(path.join(__dirname + '../views/home.html'))}
};

module.exports = homeController;
