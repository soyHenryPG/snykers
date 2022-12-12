const express = require('express');
const router = express.Router();
const controllers = require('../controllers/Users');

router.get('/', async (req, res) => {
    try {
        const users = await controllers.listUsers();
        return res.status(200).json({users: users});
    } catch (error) {
        next();
    }
});

router.post('/', async (req, res) => {
    const { name, email, password, phone, address, city, image, admin } = req.body;
    try {
        const message = await controllers.addUser(name, email, password, phone, address, city, image, admin);
        return res.status(201).json(message);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await controllers.findUser(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const message = await controllers.deleteUser(id);
        return res.status(200).json(message);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, phone, address, city, image, admin } = req.body;
        const message = await controllers.modifyUser(id, name, email, password, phone, address, city, image, admin);
        return res.status(200).json(message);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

router.post('/data/json', async (req, res) => {
    let { users } = req.body;
    try {
        const message = await controllers.postUsers(users);
        return res.status(200).json(message);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

module.exports = router;