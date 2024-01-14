const BukuModel = require('../models/buku');


const getAllBook = async (req, res) => {
    try {
        // Dapatkan data pengguna dari database
        const [data] = await BukuModel.getAllBook();
        
        // Render tampilan HTML dengan memberikan data ke EJS template
        res.render('buku', { title: 'List of Books', data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const createNewBook = async (req, res) => {
    const { judul_buku, penerbit, kota } = req.body;

    if (!judul_buku || !penerbit || !kota) {
        return res.status(400).json({ error: 'judul_buku, penerbit, and kota are required' });
    }

    try {
        const newBuku = await BukuModel.createNewBook(judul_buku, penerbit, kota);
        res.json({
            message: 'CREATE New Buku BERHASIL',
            data: newBuku,
        });
    } catch (error) {
        console.error('Error during CREATE operation:', error);
        res.status(500).json({ error: error.message });
    }
};

const updateBook = (req, res) => {
    const {idBuku} = req.params;
    console.log('idBuku: ', idBuku);
    res.json({
        message: "UPDATE Buku BERHASIL"
    });
};

const deleteBook = (req, res) => {
    const {idBuku} = req.params;
    res.json({
        message: "DELETE Buku BERHASIL",
        data: {
            id: idBuku,
            judul_buku: 'Bagai Angin Tak Bertepi',
            penerbit: 'Maheswara',
            tanggal_terbit: '12-12-2011'
        }
    });
};

module.exports = {
    getAllBook,
    createNewBook,
    updateBook,
    deleteBook
};
