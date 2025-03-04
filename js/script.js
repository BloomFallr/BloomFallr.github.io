document.addEventListener('DOMContentLoaded', function() {
    // 联系表单提交处理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // 在实际应用中，你应该将这些数据发送到服务器
            // 这里我们只是简单地显示一个确认消息
            alert(`感谢您的留言，${name}！我会尽快回复您。`);
            
            // 清空表单
            contactForm.reset();
        });
    }

    // 添加滚动到顶部按钮
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

    // 监听滚动事件，显示/隐藏滚动到顶部按钮
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // 为导航菜单项添加激活状态
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

// 添加博客文章搜索功能
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
