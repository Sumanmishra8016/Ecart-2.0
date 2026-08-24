const db = require('../config/db');

exports.getCart = async (req, res) => {
  try {
    const query = `
      SELECT c.id AS cart_id, p.id AS product_id, p.name, p.price, p.image_url, c.quantity
      FROM cart_items c
      JOIN products p ON c.product_id = p.id
      ORDER BY c.id ASC;
    `;
    const { rows } = await db.query(query);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart', error: error.message });
  }
};

exports.addToCart = async (req, res) => {
  const { productId, quantity = 1 } = req.body;
  try {
    const existing = await db.query('SELECT * FROM cart_items WHERE product_id = $1', [productId]);
    if (existing.rows.length > 0) {
      const updated = await db.query(
        'UPDATE cart_items SET quantity = quantity + $1 WHERE product_id = $2 RETURNING *',
        [quantity, productId]
      );
      return res.status(200).json(updated.rows[0]);
    }
    const inserted = await db.query(
      'INSERT INTO cart_items (product_id, quantity) VALUES ($1, $2) RETURNING *',
      [productId, quantity]
    );
    res.status(201).json(inserted.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart', error: error.message });
  }
};

exports.removeFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM cart_items WHERE id = $1', [id]);
    res.status(200).json({ message: 'Item removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing item', error: error.message });
  }
};