// Sample data to pre-fill the list (you can remove this in a real application)
const sampleGames = [
    { title: 'Dragon Quest 2', progress: 90, rating:3, location: "Before Hargon's Castle" },
  ];
  
  // Function to add a new game to the list

  function addGame() {
    const gameTitle = document.getElementById('gameTitle').value;
    const progress = document.getElementById('progress').value;
    const currentLocation = document.getElementById('currentLocation').value;
    const rating = document.getElementById('rating').value;
  
    // Validate input
    if (!gameTitle || !progress || !currentLocation || !rating) {
      alert('Please fill in all fields.');
      return;
    }

    // Create a new game object
    const newGame = {
    title: gameTitle,
    progress: progress,
    location: currentLocation,
    rating: rating,
    };
    
    // Add the new game to the list
    displayGame(newGame);
  
    // Clear the form fields
    document.getElementById('gameForm').reset();
  }
  
  // Function to display a game in the list
  function displayGame(game) {
    const gameList = document.getElementById('gameList');
    const gameEntry = document.createElement('div');
    gameEntry.className = 'game-entry';
    gameEntry.innerHTML = `<strong>${game.title}</strong> - ${game.progress}% (${game.location})<br> Rating: ${game.rating}/5`;
    gameList.appendChild(gameEntry);
  }
  
  // Display sample games on page load
  document.addEventListener('DOMContentLoaded', function() {
    for (const game of sampleGames) {
      displayGame(game);
    }
  });

  // Function to get a random game recommendation
function getRandomRecommendation() {
  const gameList = document.getElementById('gameList');
  const games = gameList.getElementsByClassName('game-entry');

  // Check if there are any games in the list
  if (games.length === 0) {
    alert('No games available for recommendation.');
    return;
  }

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * games.length);

  // Get the game at the random index
  const randomGame = games[randomIndex];

  // Create a new HTML element for the recommendation
  const recommendationContainer = document.getElementById('recommendationContainer');

  // If the recommendation container doesn't exist, create it
  if (!recommendationContainer) {
    const container = document.createElement('div');
    container.id = 'recommendationContainer';
    document.body.appendChild(container);
  }

  // Display the random game as a recommendation in the container
  recommendationContainer.innerHTML = `<p>You should play:</p><div>${randomGame.innerHTML}</div>`;
};