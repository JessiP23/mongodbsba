import express from 'express';
import User from '../models/User.js';

const router = express.Router();


//GET
router.get('/', async (req, res) => {
    //risky decision
    try {
        const userInList = await User.find();
        res.json(userInList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

router.get('/:id', async (req, res) => {
    //risky
    try {
        const userId = req.params.id;
        const userInList = await User.findById(userId);
        if (!userInList) {
            return res.send(400).json({ message: "User Not Found" });
        }
        res.json(userInList);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "Server Error" });
    }
});

//POST
router.post('/', async (req, res) => {
    //risky
    try{
        const dataOfUser = req.body;
        const userUnique = new User(dataOfUser);
        const saveUser = await userUnique.save();
        res.status(201).json(saveUser);
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

//PUT UPDATE
router.put('/:id', async (req, res) => {
    //risky
    try {
        const userId = req.params.id;
        const updateData = req.body;
        const ifUpdateData = await User.findByIdAndUpdate(userId, updateData, { new: true });
        res.json(ifUpdateData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

//DELETE
router.delete('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const deleteUser = await User.findByIdAndDelete(userId);
        res.json(deleteUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

export default router;