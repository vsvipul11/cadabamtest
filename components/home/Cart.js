import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { CartContext } from '../../contexts/CartContext';
import { Trash2, ShoppingBag, ArrowRight, TestTube, Clipboard, Activity } from 'lucide-react';
import styles from '../../styles/Cart.module.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const router = useRouter();

  const totalPrice = cart.reduce((total, item) => total + parseInt(item.discountedPrice), 0);
  const totalItems = cart.length;

  const handleCheckout = () => {
    router.push('/checkout');
  };

  const handleContinueShopping = () => {
    router.push('/');
  };

  const getItemIcon = (itemTitle) => {
    const title = itemTitle.toLowerCase();
    if (title.includes('test') || title.includes('sample')) {
      return <TestTube size={24} />;
    } else if (title.includes('checkup') || title.includes('screening')) {
      return <Clipboard size={24} />;
    } else {
      return <Activity size={24} />;
    }
  };

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Your Cart</h1>
      {cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <ShoppingBag size={48} />
          <p>Your cart is empty</p>
          <button onClick={handleContinueShopping} className={styles.continueShoppingBtn}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemIcon}>
                  {getItemIcon(item.title)}
                </div>
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <p className={styles.itemPrice}>₹{item.discountedPrice}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
          <div className={styles.cartSummary}>
            <div className={styles.summaryRow}>
              <span>Subtotal ({totalItems} items)</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
            <button onClick={handleCheckout} className={styles.checkoutBtn}>
              Proceed to Checkout <ArrowRight size={16} />
            </button>
            <button onClick={clearCart} className={styles.clearCartBtn}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;