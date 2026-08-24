const db = require('../config/db');

exports.getAllProducts = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM products ORDER BY id ASC');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};