document.addEventListener('DOMContentLoaded', () => {
  const recommendBtn = document.getElementById('recommendBtn');
  const menuDisplay = document.getElementById('menu-display');
  const darkModeToggle = document.getElementById('darkModeToggle');

  const dinnerMenus = [
    'Chicken', 'Pizza', 'Hamburger', 'Tteokbokki', 'Sushi', 'Pasta', 'Samgyeopsal', 'Budae-jjigae', 'Kimchi-jjigae', 'Doenjang-jjigae'
  ];

  // Function to recommend a random menu
  const recommendMenu = () => {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    return dinnerMenus[randomIndex];
  };

  // Function to display the recommended menu
  const displayMenu = (menu) => {
    menuDisplay.innerHTML = '';
    const menuElement = document.createElement('div');
    menuElement.className = 'menu-item';
    menuElement.textContent = menu;
    menuDisplay.appendChild(menuElement);
  };

  // Event listener for the recommend button
  recommendBtn.addEventListener('click', () => {
    const menu = recommendMenu();
    displayMenu(menu);
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
