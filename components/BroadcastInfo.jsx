import React from 'react';

const BroadcastInfo = ({ match }) => {
    return (
        <div className="broadcast-info">
            <h3>Yayın Bilgileri</h3>
            <p><strong>Lig:</strong> {match.league}</p>
            <p><strong>Ev Sahibi:</strong> {match.homeTeam.name}</p>
            <p><strong>Misafir:</strong> {match.awayTeam.name}</p>
            <p><strong>Skor:</strong> {match.homeScore !== null ? match.homeScore : '-'} - {match.awayScore !== null ? match.awayScore : '-'}</p>
            <p><strong>Yayın Saati:</strong> {match.time}</p>
            {match.videoUrl && (
                <a href={match.videoUrl} target="_blank" rel="noopener noreferrer" className="watch-link">
                    <button className="watch-button">Yayını İzle</button>
                </a>
            )}
        </div>
    );
};

export default BroadcastInfo;