import React from 'react';
import { useParams } from 'react-router-dom';
import BroadcastInfo from '../components/BroadcastInfo';
import Fixtures from '../components/Fixtures';
import ScoreTable from '../components/ScoreTable';

const MatchDetail = () => {
    const { matchId } = useParams();

    // Dummy data for match details
    const matchDetails = {
        id: matchId,
        homeTeam: "F.BAHÇE",
        awayTeam: "G.SARAY",
        homeScore: 3,
        awayScore: 2,
        league: "SÜPER DERBİ",
        summary: "F.BAHÇE, G.SARAY'ı 3-2 mağlup etti. Maçta heyecan dolu anlar yaşandı.",
        lineups: {
            home: ["Player 1", "Player 2", "Player 3"],
            away: ["Player A", "Player B", "Player C"]
        },
        statistics: {
            possession: "55%",
            shots: "15",
            shotsOnTarget: "7"
        }
    };

    return (
        <div className="match-detail">
            <h2>{matchDetails.league}</h2>
            <h3>{matchDetails.homeTeam} {matchDetails.homeScore} - {matchDetails.awayScore} {matchDetails.awayTeam}</h3>
            <p>{matchDetails.summary}</p>

            <h4>Kadrolar</h4>
            <div className="lineups">
                <div>
                    <h5>{matchDetails.homeTeam}</h5>
                    <ul>
                        {matchDetails.lineups.home.map(player => <li key={player}>{player}</li>)}
                    </ul>
                </div>
                <div>
                    <h5>{matchDetails.awayTeam}</h5>
                    <ul>
                        {matchDetails.lineups.away.map(player => <li key={player}>{player}</li>)}
                    </ul>
                </div>
            </div>

            <h4>İstatistikler</h4>
            <p>Topla Oynama: {matchDetails.statistics.possession}</p>
            <p>Şut: {matchDetails.statistics.shots}</p>
            <p>İsabetli Şut: {matchDetails.statistics.shotsOnTarget}</p>

            <BroadcastInfo matchId={matchId} />
            <Fixtures />
            <ScoreTable />
        </div>
    );
};

export default MatchDetail;