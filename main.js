document.addEventListener('DOMContentLoaded', () => {
  const recommendBtn = document.getElementById('recommendBtn');
  const menuDisplay = document.getElementById('menu-display');
  const darkModeToggle = document.getElementById('darkModeToggle');

  const dinnerMenus = [
    { name: '치킨', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=300&h=200&fit=crop' },
    { name: '피자', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop' },
    { name: '햄버거', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop' },
    { name: '떡볶이', img: 'https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=300&h=200&fit=crop' },
    { name: '초밥', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300&h=200&fit=crop' },
    { name: '파스타', img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=300&h=200&fit=crop' },
    { name: '삼겹살', img: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=300&h=200&fit=crop' },
    { name: '부대찌개', img: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=300&h=200&fit=crop' },
    { name: '김치찌개', img: 'https://images.unsplash.com/photo-1583224964978-2257b960c3f3?w=300&h=200&fit=crop' },
    { name: '된장찌개', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=300&h=200&fit=crop' },
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
    menuElement.textContent = menu.name;

    const imgElement = document.createElement('img');
    imgElement.src = menu.img;
    imgElement.alt = menu.name;
    imgElement.className = 'menu-image';
    menuElement.appendChild(imgElement);

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
