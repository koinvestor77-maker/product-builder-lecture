document.addEventListener('DOMContentLoaded', () => {
  const recommendBtn = document.getElementById('recommendBtn');
  const menuDisplay = document.getElementById('menu-display');
  const darkModeToggle = document.getElementById('darkModeToggle');

  const dinnerMenus = [
    '치킨', '피자', '햄버거', '떡볶이', '초밥', '파스타', '삼겹살', '부대찌개', '김치찌개', '된장찌개'
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

    if (menu === '피자') {
      const pizzaImage = document.createElement('img');
      pizzaImage.src = './pizza.png'; // Assuming pizza.png is in the same directory
      pizzaImage.alt = 'Pizza Image';
      pizzaImage.className = 'menu-image'; // Add a class for styling
      menuDisplay.appendChild(pizzaImage);
    }
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
