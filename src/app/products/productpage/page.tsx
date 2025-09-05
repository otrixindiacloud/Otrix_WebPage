"use client";
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import products from '../../../data/products.js';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../../contexts/CartContext.js';
import { useNotifications } from '../../../contexts/NotificationContext.js';
import { useRouter } from 'next/navigation';

export default function productdetailpage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const product = products.find((p) => String(p.id) === String(id));
  const { addToCart, removeFromCart, cartItems } = useCart();
  const { addNotification } = useNotifications();
  const router = useRouter();
  // Get related items (other products, excluding current)
  const relatedItems = product ? products.filter((p) => String(p.id) !== String(product.id)).slice(0, 4) : [];

  if (!product) {
    return <div className="max-w-2xl mx-auto p-8 text-center text-red-600">Product not found.</div>;
  }

  // Find current quantity in cart
  const cartItem = cartItems?.find((item: any) => String(item.id) === String(product?.id));
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);

  // Sync quantity with cart changes
  // (Optional: useEffect to sync if cartItems change externally)

  const handleAddToCart = () => {
    addToCart(product);
    setQuantity(1);
    addNotification({
      title: 'Cart',
      message: 'Added to cart!',
      type: 'cart',
      icon: '🛒'
    });
  };

  const handleIncrement = () => {
    addToCart(product);
    setQuantity(quantity + 1);
    addNotification({
      title: 'Cart',
      message: 'Quantity increased!',
      type: 'cart',
      icon: '🛒'
    });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      removeFromCart(product);
      setQuantity(quantity - 1);
      addNotification({
        title: 'Cart',
        message: 'Quantity decreased!',
        type: 'cart',
        icon: '🛒'
      });
    } else {
      removeFromCart(product);
      setQuantity(0);
      addNotification({
        title: 'Cart',
        message: 'Removed from cart!',
        type: 'cart',
        icon: '🛒'
      });
    }
  };

  const handleBuyNow = () => {
    addToCart(product);
    router.push('/cart');
  };

  const handleLike = () => {
    addNotification({
      title: 'Favourites',
      message: 'Added to favourites!',
      type: 'favourite',
      icon: '❤️'
    });
  };

  const handleImageError = (e: any) => {
    e.target.src = '/images/placeholder.png';
  };

  return (
    <>
      <div className="w-full p-4 bg-white rounded-lg shadow-lg flex flex-col md:flex-row gap-10 relative">

       
        {/* Left Side: Product Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center rounded-lg p-6">
            <Link href="/products" className="absolute top-4 left-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 shadow-lg z-10" aria-label="Back to Products">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <Image src={product.image} alt={product.name} width={600} height={600} className="rounded-lg object-contain" onError={handleImageError} />
        </div>
        {/* Right Side: Product Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-start gap-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <p className="text-lg text-gray-700">Product ID: {product.id}</p>
          <p className="text-2xl text-green-700 font-bold">₹{product.price}</p>
          <p className="mt-2 text-gray-600 text-base">{product.description}</p>
          <div className="flex gap-4 mt-6 items-center">
            {quantity === 0 ? (
              <button onClick={handleAddToCart} className="bg-yellow-500 text-white px-6 py-3 rounded font-bold hover:bg-yellow-600">Add to Cart</button>
            ) : (
              <div className="flex items-center gap-2">
                <button onClick={handleDecrement} className="bg-yellow-500 text-white px-4 py-3 rounded font-bold hover:bg-yellow-600">-</button>
                <span className="px-4 py-2 font-bold text-lg text-gray-900 dark:text-gray-800 opacity-90">{quantity}</span>
                <button onClick={handleIncrement} className="bg-yellow-500 text-white px-4 py-3 rounded font-bold hover:bg-yellow-600">+</button>
              </div>
            )}
            <button onClick={handleBuyNow} className="bg-green-500 text-white px-6 py-3 rounded font-bold hover:bg-green-600">Buy Now</button>
          </div>
        </div>
      </div>
      {/* Related Items Section */}
  <div className="w-full mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedItems.map((item) => (
            <Link href={`/products/productpage?id=${item.id}`} key={item.id} className="block border rounded-lg p-4 hover:shadow-lg transition">
              <div className="flex flex-col items-center">
                <Image src={item.image} alt={item.name} width={120} height={80} className="rounded object-contain mb-2" />
                <h3 className="text-lg font-semibold text-gray-700 mb-1 text-center">{item.name}</h3>
                <p className="text-green-700 font-bold text-base">₹{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
