import React from 'react';

export const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
};

export const Input = ({ type = 'text', placeholder, value, onChange, className = '' }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
};