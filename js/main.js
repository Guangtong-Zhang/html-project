// 主要JavaScript文件

// 等待DOM内容加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 处理联系表单提交
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // 在实际项目中，这里会发送数据到服务器
            // 但由于这是静态网站，我们只显示一个成功消息
            alert(`感谢您的留言，${name}！\n\n我们已收到您的消息，将尽快回复您。`);
            
            // 重置表单
            contactForm.reset();
        });
    }
    
    // 添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 添加响应式导航菜单功能（如果需要）
    // 这里可以添加移动端菜单切换的代码
});