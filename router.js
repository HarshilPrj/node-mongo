const express = require('express');
const router = express.Router();

const { getUsers, addUser, getByID, updateUser, deleteUser, loginUser } = require('./controller');

router.get('/getUsers', getUsers);
router.post('/addUsers', addUser);
router.post('/getByID/:id', getByID);
router.post('/updateUser/:id', updateUser);
router.post('/deleteUser/:id', deleteUser);
router.post('/login', loginUser);

module.exports = router;
