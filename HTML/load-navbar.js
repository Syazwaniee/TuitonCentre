// load-navbar.js
document.addEventListener('DOMContentLoaded', function() {
  fetch('navbar.html')
      .then(response => {
          if (!response.ok) throw new Error('Failed to load navbar');
          return response.text();
      })
      .then(html => {
          const navbarPlaceholder = document.createElement('div');
          navbarPlaceholder.innerHTML = html;
          document.body.prepend(navbarPlaceholder);
          
          // Highlight current page
          const currentPage = window.location.pathname.split('/').pop() || 'index.html';
          document.querySelectorAll(`a[href="${currentPage}"]`).forEach(link => {
              link.classList.add('active');
          });
      })
      .catch(error => {
          console.error('Error:', error);
          // Fallback visible navbar
          document.body.prepend(`
              <nav class="navbar navbar-light bg-danger text-white">
                  <div class="container-fluid">
                      <span>Error loading navbar (${error.message})</span>
                  </div>
              </nav>
          `);
      });
});