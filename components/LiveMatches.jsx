import React from 'react';

const LiveMatches = ({ matches }) => {
    return (
        <section className="live-matches">
            <h2 className="section-title">Canlı Maçlar</h2>
            <div className="match-grid">
                {matches.map((match, index) => (
                    <div key={index} className={`match-card ${match.type}`}>
                        <div className="match-header">
                            <span className="status live-status">{match.status}</span>
                            <span className="league">{match.league}</span>
                        </div>
                        <div className="teams">
                            <div className="team">
                                <img src={match.homeTeam.logo} alt={`${match.homeTeam.name} Logo`} />
                                <span>{match.homeTeam.name}</span>
                            </div>
                            <div className="score">
                                <span>{match.homeScore !== null ? match.homeScore : '-'}</span> - <span>{match.awayScore !== null ? match.awayScore : '-'}</span>
                            </div>
                            <div className="team">
                                <img src={match.awayTeam.logo} alt={`${match.awayTeam.name} Logo`} />
                                <span>{match.awayTeam.name}</span>
                            </div>
                        </div>
                        <div className="match-info">
                            <span className="time">{match.time}</span>
                            <button className="watch-button">Yayına Gir</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LiveMatches;