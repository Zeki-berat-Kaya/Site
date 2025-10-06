import React from 'react';

const ScoreTable = ({ standings }) => {
    return (
        <div className="score-table">
            <h2>Puan Tablosu</h2>
            <table>
                <thead>
                    <tr>
                        <th>Takım</th>
                        <th>O</th>
                        <th>G</th>
                        <th>B</th>
                        <th>M</th>
                        <th>Av</th>
                        <th>P</th>
                    </tr>
                </thead>
                <tbody>
                    {standings.map((team, index) => (
                        <tr key={index} className={team.isLive ? 'live-match' : 'finished-match'}>
                            <td>
                                <img src={team.logo} alt={`${team.name} Logo`} />
                                {team.name}
                            </td>
                            <td>{team.played}</td>
                            <td>{team.wins}</td>
                            <td>{team.draws}</td>
                            <td>{team.losses}</td>
                            <td>{team.goalDifference}</td>
                            <td>{team.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScoreTable;