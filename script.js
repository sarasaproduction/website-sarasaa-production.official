document.addEventListener('DOMContentLoaded', () => {
    // Cari semua link yang ada di dalam class nav-links
    const links = document.querySelectorAll('.nav-links a, .nav-links li a');
    const overlay = document.querySelector('.page-transition-overlay');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetUrl = this.getAttribute('href');
            
            // Memastikan link tujuan valid
            if (targetUrl && targetUrl !== '#' && !targetUrl.startsWith('http')) {
                e.preventDefault(); // TAHAN BROWSER BIAR GAK JEPRET
                
                if (overlay) {
                    // Perintahkan tirai untuk menutup layar
                    overlay.classList.add('shutter-close');
                    
                    // Tunggu tirai selesai menutup (0.6 detik), baru pindah halaman asli
                    setTimeout(() => {
                        window.location.href = targetUrl;
                    }, 600);
                } else {
                    window.location.href = targetUrl;
                }
            }
        });
    });
});
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});