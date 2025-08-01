// Put your application javascript here
  document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll('.main-menu .has-children');

    // Desktop Hover (optional, already handled with CSS)
    // Mobile Click Behavior
    menuItems.forEach(item => {
      const toggleLink = item.querySelector('.header-btn');

      toggleLink.addEventListener('click', function (e) {
        const isMobile = window.innerWidth < 992; // adjust as needed

        if (isMobile) {
          e.preventDefault(); // prevent navigation
          item.classList.toggle('active');

          // Close other open dropdowns
          menuItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
            }
          });
        }
      });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', function (e) {
      menuItems.forEach(item => {
        if (!item.contains(e.target)) {
          item.classList.remove('active');
        }
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
  const drawer = document.getElementById('Country-drawer-footer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = drawer.querySelector('.js-btn-close-drawer');

  // Toggle aria-expanded attribute
  drawer.querySelector('summary').addEventListener('click', function (e) {
    e.preventDefault();
    if (drawer.hasAttribute('open')) {
      drawer.removeAttribute('open');
      console.log('open')
    } else {
      drawer.setAttribute('open', true);
    }
  });

  // Close on overlay click
  overlay.addEventListener('click', function () {
    drawer.removeAttribute('open');
  });

  // Close button inside drawer
  closeBtn.addEventListener('click', function () {
    console.log('close');
    drawer.removeAttribute('open');
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.querySelector(".mobile-menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");

    // Toggle mobile menu visibility
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("open"); // CSS should target this class
      });
    }

    // Toggle submenu visibility on click (mobile only)
    const mobileMenuItems = document.querySelectorAll(".mobile-menu-item.has-children > a");

    mobileMenuItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const parent = item.closest(".mobile-menu-item");
        const submenu = parent.querySelector("ul");

        // Collapse other open submenus
        document.querySelectorAll(".mobile-menu-item.open").forEach((el) => {
          if (el !== parent) {
            el.classList.remove("open");
            const sub = el.querySelector("ul");
            if (sub) sub.classList.remove("open");
          }
        });

        // Toggle current
        parent.classList.toggle("open");
        if (submenu) submenu.classList.toggle("open");
      });
    });
  });
