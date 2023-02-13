const { userModel, userEduModel } = require('./schema');

const getUsers = async (req, res) => {
    let data = await userModel.find();
    return res.send(data);
};

const addUser = async (req, res) => {
    let userEduData = {
        degree: req.body.degree,
        university: req.body.university,
    };

    let eduData = await userEduModel.insertMany(userEduData);

    let userData = {
        firstName: req.body.firstName,
        email: req.body.email,
        password: req.body.password,
        city: req.body.city,
        state: req.body.state,
        educationID: eduData[0]._id,
    };

    let add = new userModel(userData);
    add.save((error) => {
        if (error) {
            return res.status(401).send({ error });
        } else {
            return res.status(200).send({ message: 'User Added Successfully' });
        }
    });
};

const getByID = async (req, res) => {
    const { id } = req.params;
    let data = await userModel.findById(id);
    return res.send(data);
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    let update = await userModel.findByIdAndUpdate(id, req.body);
    return res.send(update);
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    let del = await userModel.findByIdAndDelete(id);
    return res.send(del);
};

const loginUser = async (req, res) => {
    let checkUser = await userModel.where('email', req.body.email);
    return res.send(checkUser);
};

module.exports = { getUsers, addUser, getByID, updateUser, deleteUser, loginUser };
