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