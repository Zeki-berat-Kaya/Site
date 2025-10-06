import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Optional: Add specific styles for NotFound page

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404 - Sayfa Bulunamadı</h1>
            <p className="not-found-message">Aradığınız sayfa mevcut değil.</p>
            <Link to="/" className="not-found-link">Ana Sayfaya Dön</Link>
        </div>
    );
};

export default NotFound;