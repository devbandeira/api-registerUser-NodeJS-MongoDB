const { Router } = require('express');
const express = require('express');
const route = express.Router();
const User = require('../models/User');

// New User
route.post('/new', async (req, res) => {
    const data = new User({
        name: req.body.name,
        age: req.body.age,
        uf: req.body.uf,
    });

    try {

        const user = await data.save();
        res.status(200).json(user);

    } catch (error) {

        res.status(500).json({ msg: "Não foi possível cadastrar um novo usuário" });

    };
});


// Get all user
route.get('/get', async (req, res) => {

    try {

        const data = await User.find({});
        res.json(data);

    } catch (error) {

        res.status(404).json({ msg: 'Não foi possível trazer a lista de todos usuários.' });
    };
});


// Get Byid
route.get('/getid/:id', async (req, res) => {
    try {

        const id = req.params.id;
        const data = await User.findById(id);

        if (data) {

            res.json(data);

        } else {

            next();

        };

    } catch (error) {

        res.status(404).json({ msg: 'Usuário não encontrado' });

    };
});

// Delete User
route.delete('/delete/:id', async (req, res) => {
    try {

        const id = req.params.id;
        const data = await User.findByIdAndDelete(id);
        res.status(200).json({ msg: 'O usuário foi excluído' });

    } catch (error) {

        res.status(400).json({ msg: 'Não foi possível excluir o usuário' });

    };
});

// Updating User
route.patch('/update/:id', async (req, res) => {
   
    try{
        const id = req.params.id;
        const data = req.body; 
        const option = { new: true };

        const userUpdate = await User.findByIdAndUpdate(

            id, data, option,

        );

        res.status(200).json(userUpdate);

    } catch (error) {

        res.status(400).json({msg: error.message});

    };
});

module.exports = route;