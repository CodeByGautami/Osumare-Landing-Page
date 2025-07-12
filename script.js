 AOS.init();


        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute("href")).scrollIntoView({
                    behavior: "smooth"
                });
            });
        });

        const navbar = document.querySelector(".navbar");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
            } else {
                navbar.style.boxShadow = "none";
            }
        });

        const scrollTopBtn = document.getElementById("scrollTopBtn");

        window.addEventListener("scroll", () => {
            scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });

        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });