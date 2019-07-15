import User from './../Models/User';

class UserController {
    create(req, res) {
        const newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err)
                res.send(err);
            res.json(user);
        })
    }

    findAll(req, res) {
        User.find()
            .then(users => {
                res.send(users);
            }).catch((err) => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving users."
                })
            });
    }
}

export default UserController;