import Game from '../models/game.js';

export function getAll(req, res) {
    Game.find({})
    .select("_id title price")
    .exec()
    .then(games => {
        res.status(200).json(games);
    })
    .catch(err => {
        res.status(500).json(err);
    });
}

export function addOnce(req, res) {
    const game = new Game(req.body);
    game.save()
    .then(newGame => {
        res.status(201).json({
            title: newGame.title,
            description: newGame.description,
            price: newGame.price,
            quantity: newGame.quantity
        });
    })
    .catch(err => {
        res.status(500).json(err);
    });
}

export function getOnce(req, res) {
    Game.findById(req.params.id)
    .then(game => {
        res.status(200).json(game);
    })
    .catch(err => {
        res.status(500).json(err);
    });
}

export function putOnce(req, res) {
    Game.findByIdAndUpdate(req.params.id, req.body)
    .then(game => {
        res.status(200).json(game);
    })
    .catch(err => {
        res.status(500).json(err);
    });
}