const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X'; // X starts the game
let gameState = ['', '', '', '', '', '', '', '', '']; // Represents the board state
let gameActive = true;  
const winningConditions =[
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6]  // Diagonal top-right to bottom-left
];

// Function to handle cell clicks
function handleCellClick(event) {
    const clickedCell = event.target; // Get the clicked cell
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index')); // Get the cell index

    // If the cell is already filled or the game is over, do nothing
    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    // Update the game state and UI
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    // Check if the current move resulted in a win or a draw
    checkForWinner();
}

// Function to check for a winner or a draw
function checkForWinner() {
    let roundWon = false;

    // Check all winning conditions
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i]; // Destructure the winning combination

        // Check if the cells in the winning combination are filled by the same player
        if (gameState[a] === '' || gameState[b] === '' || gameState[c] === '') {
            continue; // Skip if any cell is empty
        }

        if (gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
            roundWon = true; // A winning condition is met
            break;
        }
    }

    // If a player has won
    if (roundWon) {
        statusText.textContent = `Player ${currentPlayer} wins! 🎉`;
        gameActive = false; // End the game
        return;
    }

    // If all cells are filled and no winner, it's a draw
    const roundDraw = !gameState.includes('');
    if (roundDraw) {
        statusText.textContent = 'It\'s a draw! 😊';
        gameActive = false; // End the game
        return;
    }

    // Switch to the other player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `It's ${currentPlayer}'s turn`;
}

// Function to reset the game
function resetGame() {
    gameState = ['', '', '', '', '', '', '', '', '']; // Clear the game state
    gameActive = true; // Reactivate the game
    currentPlayer = 'X'; // Reset to player X
    statusText.textContent = `It's ${currentPlayer}'s turn`; // Update status text
    cells.forEach(cell => cell.textContent = ''); // Clear the board UI
}

// Add event listeners to cells and reset button
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

// Initialize the game status
statusText.textContent = `It's ${currentPlayer}'s turn`;