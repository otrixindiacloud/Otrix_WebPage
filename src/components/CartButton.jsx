"use client";

import Link from "next/link";
import { useCart } from "../contexts/CartContext";

export default function CartButton() {
  const { cartCount } = useCart();

  return (
    <Link 
      href="/cart" 
      className="relative p-2 text-foreground hover:text-primary transition-colors duration-200 group"
      aria-label="Shopping Cart"
    >
      {/* Enhanced 3D Shopping Cart Icon */}
      <div className="relative w-8 h-8">
        {/* Main basket body - light gray/silver */}
        <div className="absolute left-1 top-2 w-5 h-4 bg-gray-300 rounded-md shadow-sm">
          {/* Grid pattern inside basket */}
          <div className="absolute inset-1">
            <div className="w-full h-full">
              {/* Horizontal lines */}
              <div className="absolute top-1/3 w-full h-0.5 bg-gray-500 opacity-60"></div>
              <div className="absolute top-2/3 w-full h-0.5 bg-gray-500 opacity-60"></div>
              {/* Vertical lines */}
              <div className="absolute left-1/3 h-full w-0.5 bg-gray-500 opacity-60"></div>
              <div className="absolute left-2/3 h-full w-0.5 bg-gray-500 opacity-60"></div>
            </div>
          </div>
        </div>
        
        {/* Handle - blue color */}
        <div className="absolute left-0 top-0 w-1.5 h-4 bg-blue-500 rounded-l-full transform -rotate-12 origin-bottom-left shadow-sm"></div>
        
        {/* Base frame - light gray */}
        <div className="absolute left-0.5 bottom-0 w-6 h-0.5 bg-gray-300 rounded-sm"></div>
        
        {/* Wheels - blue color */}
        <div className="absolute left-1.5 bottom-0 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-sm">
          <div className="absolute inset-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
        </div>
        <div className="absolute right-1.5 bottom-0 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-sm">
          <div className="absolute inset-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
        </div>
        
        {/* Additional depth elements */}
        <div className="absolute left-1.5 top-1 w-4 h-0.5 bg-gray-400 rounded-sm opacity-50"></div>
      </div>
      
      {/* Cart count badge */}
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-pulse shadow-md">
          {cartCount}
        </span>
      )}
    </Link>
  );
}
