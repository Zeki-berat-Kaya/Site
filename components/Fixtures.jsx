import React from 'react';

const Fixtures = () => {
    const fixturesData = [
        {
            date: "2025-10-01",
            league: "Premier League",
            matches: [
                { homeTeam: "Arsenal", awayTeam: "Chelsea", score: "2 - 1" },
                { homeTeam: "Liverpool", awayTeam: "Manchester City", score: "1 - 3" },
            ]
        },
        {
            date: "2025-10-02",
            league: "La Liga",
            matches: [
                { homeTeam: "Barcelona", awayTeam: "Real Madrid", score: "0 - 0" },
                { homeTeam: "Atletico Madrid", awayTeam: "Sevilla", score: "2 - 2" },
            ]
        },
        {
            date: "2025-10-03",
            league: "Serie A",
            matches: [
                { homeTeam: "Juventus", awayTeam: "AC Milan", score: "1 - 1" },
                { homeTeam: "Inter", awayTeam: "Napoli", score: "3 - 0" },
            ]
        }
    ];

    return (
        <div className="fixtures-section">
            <h2 className="section-title">Fikstür ve Sonuçlar</h2>
            {fixturesData.map((fixture, index) => (
                <div key={index} className="fixture-day">
                    <h3>{fixture.date} - {fixture.league}</h3>
                    <ul className="fixture-list">
                        {fixture.matches.map((match, matchIndex) => (
                            <li key={matchIndex} className="fixture-item">
                                <span>{match.homeTeam} vs {match.awayTeam}</span>
                                <span className="score">{match.score}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Fixtures;