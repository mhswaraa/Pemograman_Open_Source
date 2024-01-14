const dbPool = require('../config/database');

const getAllUserHtml = () => {
    const SQLQuery = 'Select * FROM users';

    return dbPool.execute(SQLQuery);
} 

const createNewUser = async (name, email, address) => {
    const SQLQuery = 'INSERT INTO Users (name, email, address) VALUES (?, ?, ?)';
    const [result] = await dbPool.execute(SQLQuery, [name, email, address]);

    const newUser = { id: result.insertId, name, email, address };
    return newUser;
};

const updateUser = async (id, name, email, address) => {
    const SQLQuery = 'UPDATE Users SET name = ?, email = ?, address = ? WHERE id = ?';
    await dbPool.execute(SQLQuery, [name, email, address, id]);

    const updatedUser = { id, name, email, address };
    return updatedUser;
};


const deleteUser = async (id) => {
    const SQLQuery = 'DELETE FROM Users WHERE id = ?';
    await dbPool.execute(SQLQuery, [id]);

    return { id };
};

const searchUser = async (name) => {
    const SQLQuery = 'SELECT * FROM Users WHERE name LIKE ?';
    const [searchResults] = await dbPool.execute(SQLQuery, [`%${name}%`]);

    return searchResults;
};

module.exports = {
    getAllUserHtml,
    createNewUser,
    updateUser,
    deleteUser,
    searchUser,
};