"use client";

import { useEffect, useRef, useState } from "react";

export default function MapComponent({ className = "" }) {
  const mapRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    // Check if API key is available
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    
    if (!apiKey || apiKey === 'your_google_maps_api_key_here') {
      setError("Google Maps API key not configured. Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file.");
      setIsLoading(false);
      return;
    }

    // Load Google Maps script
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      // Check if script already exists
      if (scriptRef.current) {
        scriptRef.current.onload = initializeMap;
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      script.onerror = () => {
        setError("Failed to load Google Maps. Please check your API key and internet connection.");
        setIsLoading(false);
      };
      document.head.appendChild(script);
      scriptRef.current = script;
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      try {
        const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 22.9528705, lng: 76.0292178 }, // Otrix India Tech location
        zoom: 15,
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [{ color: "#1a1a1a" }]
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#2c3e50" }]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{ color: "#34495e" }]
          }
        ]
      });

      const marker = new window.google.maps.Marker({
        position: { lat: 22.9528705, lng: 76.0292178 },
        map: map,
        title: "Otrix India Tech",
        icon: {
          url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
            <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#00BFA5" stroke="#ffffff" stroke-width="2"/>
              <text x="20" y="26" text-anchor="middle" fill="white" font-family="Arial" font-size="16" font-weight="bold">O</text>
            </svg>
          `)
        }
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="color: black; padding: 10px;">
            <h3 style="margin: 0 0 10px 0; color: #00BFA5;">Otrix India Tech</h3>
            <p style="margin: 0; font-size: 14px;">
              159 LIG Vikas Nagar,<br>
              Ganga Nagar Dewas,<br>
              Madhya Pradesh 455001
            </p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">
              Phone: +91 9893377444
            </p>
          </div>
        `
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });

      setIsLoading(false);
    } catch (err) {
      console.error("Error initializing map:", err);
      setError("Failed to initialize map. Please try again.");
      setIsLoading(false);
    }
  };

  loadGoogleMaps();

  // Cleanup function
  return () => {
    if (scriptRef.current && scriptRef.current.parentNode) {
      scriptRef.current.parentNode.removeChild(scriptRef.current);
    }
  };
}, []);

  if (error) {
    return (
      <div className={`w-full h-96 rounded-xl overflow-hidden shadow-2xl ${className} flex items-center justify-center bg-gray-100`}>
        <div className="text-center p-8">
          <div className="text-[#2e95b7] text-6xl mb-4">🗺️</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Map Unavailable</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          
          {/* Fallback: Static map image */}
          <div className="mt-6">
            <img 
              src={`https://maps.googleapis.com/maps/api/staticmap?center=22.9528705,76.0292178&zoom=15&size=600x400&markers=color:red%7C22.9528705,76.0292178&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyBvOkBwJjJjJjJjJjJjJjJjJjJjJjJjJjJ'}`}
              alt="Otrix India Tech Location"
              className="rounded-lg shadow-lg max-w-full h-auto"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="hidden text-sm text-gray-500 mt-2">
              <p><strong>Otrix India Tech</strong></p>
              <p>159 LIG Vikas Nagar, Ganga Nagar</p>
              <p>Dewas, Madhya Pradesh 455001</p>
              <p>Phone: +91 9893377444</p>
            </div>
          </div>
          
          {/* Get Directions Button */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=22.9528705,76.0292178"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 mt-4 bg-[#2e95b7] text-white font-semibold rounded-lg hover:bg-[#236f8a] transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-96 rounded-xl overflow-hidden shadow-2xl ${className} relative`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      )}
      <div 
        ref={mapRef} 
        className="w-full h-full"
        style={{ minHeight: '400px' }}
      />
    </div>
  );
}
