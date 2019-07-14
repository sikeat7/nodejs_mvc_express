import User from './../Models/User';

class UserController {
    addUser(req, res) {
        const newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err)
                res.send(err);
            res.json(user);
        })
    }
}

export default UserController;