const { values } = require("sequelize/types/lib/operators");
const {
    user
} = require("../models");
const db = ("../models");
const User = db.user;


exports.levelup = (req, res) => {
    User.findOne({
            where: {
                id: req.user.id
            }
        })
        .then(user => {
            let newLevel;
            switch (progressbar) {
                case '25':
                    newLevel = 2
                    break;
                case '50':
                    newLevel = 3
                    break;
                case '75':
                    newLevel= 4
                    break;
                case '100':
                    newLevel= 5
                    break;
            }
            user.update({level: newLevel})
        })
}