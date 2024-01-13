import Achat from '../models/achat.js';
import Game from '../models/game.js';
import User from '../models/user.js';

export function buyGame(req, res) {
    User.findById(req.params.idUser)
    .then(user => { Game.findById(req.params.idGame)
        .then(game => {
            if(game.quantity > 0 && user.wallet >= game.price) {
                const achat = new Achat();
                achat.save()
                .then(newAchat => {       // creation d'une instance
                    Game.findByIdAndUpdate(req.params.idGame, { quantity : game.quantity - 1 })
                    .then(updatedGame => {
                        User.findByIdAndUpdate(req.params.idUser, { wallet : user.wallet - game.price })
                        .then(updatedUser => {
                            res.status(201).json(achat);
                        })
                        .catch(err => {
                            res.status(500).json(err);
                        });
                    })
                    .catch(err => {
                        res.status(500).json(err);
                    });
                })
                .catch(err => {
                    res.status(500).json(err);
                });
            }
            else {
                res.status(200).json({ message : "Can't buy this game !"});
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
    })
    .catch(err => {
        res.status(500).json(err);
    });
}