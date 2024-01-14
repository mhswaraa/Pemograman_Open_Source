const UserModel = require('../models/users');

const getAllUserHtml = async (req, res) => {
    try {
        // Dapatkan data pengguna dari database
        const [data] = await UserModel.getAllUserHtml();
        
        // Render tampilan HTML dengan memberikan data ke EJS template
        res.render('user', { title: 'List of Users', data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createNewUser = async (req, res) => {
    const { name, email, address } = req.body;

    if (!name || !email || !address) {
        return res.status(400).json({ error: 'Name, email, and address are required' });
    }

    try {
        const newUser = await UserModel.createNewUser(name, email, address);
        res.json({
            message: 'CREATE New User BERHASIL',
            data: newUser,
        });
    } catch (error) {
        console.error('Error during CREATE operation:', error);
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    const { idUser } = req.params;
    const { name, email, address } = req.body;

    try {
        const updatedUser = await UserModel.updateUser(idUser, name, email, address);
        res.json({
            message: 'UPDATE User BERHASIL',
            data: updatedUser,
        });
    } catch (error) {
        console.error('Error during UPDATE operation:', error);
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    const { idUser } = req.params;

    try {
        await UserModel.deleteUser(idUser);
        res.json({
            message: 'DELETE User BERHASIL',
            data: {
                id: idUser,
            },
        });
    } catch (error) {
        console.error('Error during DELETE operation:', error);
        res.status(500).json({ error: error.message });
    }
};

const searchUser = async (req, res) => {
    const { name } = req.query; // Mengambil kata kunci "nama" dari query params

    try {
        const searchData = await UserModel.searchUser(name);
        res.json(searchData);
    } catch (error) {
        console.error('Error during search operation:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllUserHtml,
    createNewUser,
    updateUser,
    deleteUser,
    searchUser,
};