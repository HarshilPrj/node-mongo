const userModel = require('./schema');

const getUsers = async (req, res) => {
    let data = await userModel.find();
    return res.send(data);
};

const addUser = async (req, res) => {
    if (!req.body) {
        return res.send({ message: 'Required Data' });
    }

    let add = new userModel(req.body);
    add.save((error) => {
        if (error) {
            return res.status(401).send({ error });
        } else {
            return res.status(401).send({ message: 'User Added Successfully' });
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

module.exports = { getUsers, addUser, getByID, updateUser, deleteUser };
