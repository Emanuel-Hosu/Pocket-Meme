import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Footer = () => {
    return (
        <div className="flex justify-center items-center bg-gray-400 w-60 h-12">
            hola
        </div>
    );
};

root.render(<Footer />);
