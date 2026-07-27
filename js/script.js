document.addEventListener('DOMContentLoaded', function() {
    // Add a scroll-to-top button.
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '&uarr;';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.display = 'none';
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Toggle the scroll-to-top button while scrolling.
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Add active state to matching navigation items.
    const currentLocation = window.location.pathname;
    const navItems = document.querySelectorAll('nav ul li a');
    
    navItems.forEach(item => {
        if (currentLocation.includes(item.getAttribute('href')) && item.getAttribute('href') !== 'index.html') {
            item.classList.add('active');
        } else if (currentLocation.endsWith('/') && item.getAttribute('href') === 'index.html') {
            item.classList.add('active');
        }
    });
});

// Blog post search helper.
function searchBlog() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const blogPosts = document.querySelectorAll('.post-item, .post-card');
    
    blogPosts.forEach(post => {
        const title = post.querySelector('h3').textContent.toLowerCase();
        const content = post.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}
