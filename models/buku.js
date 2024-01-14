const dbPool = require('../config/database');

const getAllBook = () => {
    const SQLQuery = 'Select * FROM Books';

    return dbPool.execute(SQLQuery);
} 

const createNewBook = async (judul_buku, penerbit, kota) => {
    const SQLQuery = 'INSERT INTO Users (judul_buku, penerbit, kota) VALUES (?, ?, ?)';
    const [result] = await dbPool.execute(SQLQuery, [judul_buku, penerbit, kota]);

    const newBuku = { id: result.insertId, judul_buku, penerbit, kota };
    return newBuku;
};


module.exports = {
    getAllBook,
    createNewBook,
}