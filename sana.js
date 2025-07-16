       // Gallery navigation functionality
        document.addEventListener('DOMContentLoaded', function() {
            const dots = document.querySelectorAll('.dot');
            const sections = document.querySelectorAll('.gallery-section');
            
            dots.forEach((dot, index) => {
                dot.addEventListener('click', function() {
                    // Remove active class from all dots
                    dots.forEach(d => d.classList.remove('active'));
                    // Add active class to clicked dot
                    this.classList.add('active');
                    
                    // Scroll to corresponding section
                    sections[index].scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                });
            });

            // Update active dot on scroll
            window.addEventListener('scroll', function() {
                let current = '';
                sections.forEach((section, index) => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
                        current = index;
                    }
                });

                dots.forEach((dot, index) => {
                    dot.classList.remove('active');
                    if (index === current) {
                        dot.classList.add('active');
                    }
                });
            });
        });