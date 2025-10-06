import React from 'react';
import Header from '../components/Header';
import LiveMatches from '../components/LiveMatches';
import Fixtures from '../components/Fixtures';
import ScoreTable from '../components/ScoreTable';
import BroadcastInfo from '../components/BroadcastInfo';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="hero">
                    <h1>Kick Off Live</h1>
                    <p>Canlı Futbol Yayın Platformu</p>
                    <button className="explore-button">Maçlara Göz At</button>
                </section>
                <LiveMatches />
                <Fixtures />
                <ScoreTable />
                <BroadcastInfo />
            </main>
            <Footer />
        </div>
    );
};

export default Home;