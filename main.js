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
  const displayMenu = async (menu) => {
    menuDisplay.innerHTML = '<div class="loader"></div>'; // Show loader

    try {
      const response = await fetch(`https://api.nanobanana.ai/generate-image?prompt=${menu}`);
      const data = await response.json();
      const imageUrl = data.imageUrl;

      menuDisplay.innerHTML = ''; // Clear loader
      const menuElement = document.createElement('div');
      menuElement.className = 'menu-item';
      menuElement.textContent = menu;
      menuDisplay.appendChild(menuElement);

      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imageElement.alt = `${menu} 이미지`;
      imageElement.className = 'menu-image';
      menuDisplay.appendChild(imageElement);

    } catch (error) {
      console.error('Error generating image:', error);
      menuDisplay.innerHTML = '이미지 생성에 실패했습니다.';
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
