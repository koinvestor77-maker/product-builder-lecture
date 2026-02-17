document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  const lottoNumbersContainer = document.getElementById('lotto-numbers');
  const darkModeToggle = document.getElementById('darkModeToggle');

  // Function to generate unique random numbers
  const generateLottoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  };

  // Function to get color based on number range
  const getNumberColor = (number) => {
    if (number <= 10) return '#fbc400'; // Yellow
    if (number <= 20) return '#69c8f2'; // Blue
    if (number <= 30) return '#ff7272'; // Red
    if (number <= 40) return '#aaa'; // Gray
    return '#b0d840'; // Green
  };

  // Function to display lotto numbers
  const displayNumbers = (numbers) => {
    lottoNumbersContainer.innerHTML = '';
    numbers.forEach(number => {
      const ball = document.createElement('div');
      ball.className = 'lotto-ball';
      ball.textContent = number;
      ball.style.backgroundColor = getNumberColor(number);
      lottoNumbersContainer.appendChild(ball);
    });
  };

  // Event listener for the generate button
  generateBtn.addEventListener('click', () => {
    const numbers = generateLottoNumbers();
    displayNumbers(numbers);
  });

  // Event listener for the dark mode toggle
  darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Check for saved dark mode preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
  }
});
