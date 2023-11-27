const path = require ('path');

const aboutController = {
    about: (req,res) => {res.sendfile(path.join(__dirname, '../views/about.html'))}
};

module.exports = aboutController;