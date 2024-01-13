import User from '../models/user.js';

export function signin(req, res) {
    User.findOne({ username: req.body.username, password: req.body.password })
    .then(user => {
        if(user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
}

export function signup(req, res) {
    const user = new User(req.body);
    user.save()
    .then(newUser => {
        res.status(201).json({
            username: newUser.username,
            password: newUser.password,
            wallet: newUser.wallet
        });
    })
    .catch(err => {
        res.status(500).json(err);
    });
}

export function putOnce(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        res.status(500).json(err);
    });
}