import React from 'react';
import Navbar from '../Navbar';
import '../../styles/leaderboard.css';

const Leaderboard = () => {
  // Sample data for leaderboard
  const leaderboardData = [
    { rank: 1, name: 'Soham Mahajan', points: 258.244, goldMedal: true },
    { rank: 2, name: 'Sahil Patel', points: 258.242, goldMedal: false },
    { rank: 3, name: 'Yash Shirke', points: 258.223, goldMedal: false },
    { rank: 4, name: 'Ansh Joglekar', points: 258.212, goldMedal: false },
    { rank: 5, name: 'Johnny Bande', points: 258.208, goldMedal: false },
  ];

  return (
    <div><Navbar />
      <div className="dashboard">
        <main>
          <div id="header">
            <h1>Ranking</h1>
            <button className="share">
              <i className="ph ph-share-network"></i>
            </button>
          </div>
          <div id="leaderboard">
            <div className="ribbon"></div>
            <table>
              <tbody>
                {leaderboardData.map((player) => (
                  <tr key={player.rank}>
                    <td className="number">{player.rank}</td>
                    <td className="name">{player.name}</td>
                    <td className="points">
                      {player.points}
                      {player.goldMedal && (
                        <img
                          className="gold-medal"
                          src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                          alt="gold medal"
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Leaderboard;
