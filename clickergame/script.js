let points = 0;
let pointsPerClick = 1;
let upgradeCost = 10;

const scoreElement = document.getElementById('score');
const pointsPerClickElement = document.getElementById('points-per-click');
const clickButton = document.getElementById('click-button');
const upgradeButton = document.getElementById('upgrade-button');
const leaderboardList = document.getElementById('leaderboard-list');
const rooms = document.querySelectorAll('.room');

clickButton.addEventListener('click', () => {
  points += pointsPerClick;
  scoreElement.textContent = `Points: ${points}`;
  checkUnlockables();
  checkUpgrades();
});

upgradeButton.addEventListener('click', () => {
  if (points >= upgradeCost) {
    points -= upgradeCost;
    pointsPerClick++;
    upgradeCost = Math.floor(upgradeCost * 1.5); // Harder upgrade scaling
    pointsPerClickElement.textContent = `Points per Click: ${pointsPerClick}`;
    upgradeButton.textContent = `Upgrade (Cost: ${upgradeCost} Points)`;
    checkUpgrades();
    scoreElement.textContent = `Points: ${points}`;
  }
});

function checkUpgrades() {
  upgradeButton.disabled = points < upgradeCost;
}

function checkUnlockables() {
  if (points >= 50) {
    document.getElementById('room-2').classList.remove('locked');
  }
  if (points >= 150) {
    document.getElementById('room-3').classList.remove('locked');
  }
}

function updateLeaderboard(playerName, score) {
  const li = document.createElement('li');
  li.textContent = `${playerName}: ${score} Points`;
  leaderboardList.appendChild(li);
}

// Simulate leaderboard entries
updateLeaderboard('Player1', 300);
updateLeaderboard('Player2', 250);