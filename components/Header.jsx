import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Logo dosyasının yolu

const Header = () => {
    return (
        <header className="main-header">
            <div className="logo">
                <img src={logo} alt="Kick Off Live Logo" />
            </div>
            <nav className="main-nav">
                <ul>
                    <li><Link to="/">Ana Sayfa</Link></li>
                    <li><Link to="/live">Canlı Maçlar</Link></li>
                    <li><Link to="/fixtures">Fikstür</Link></li>
                    <li><Link to="/score-table">Puan Tablosu</Link></li>
                    <li><Link to="/broadcast-info">Yayın Bilgisi</Link></li>
                </ul>
            </nav>
            <div className="header-actions">
                <Link to="/login" className="profile-icon" title="Giriş Yap">
                    <i className="fas fa-user-circle"></i>
                </Link>
            </div>
        </header>
    );
};

export default Header;