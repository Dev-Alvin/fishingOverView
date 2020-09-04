const navbar = () => {
    const links = document.querySelectorAll("li a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            
            // Remove Active
            links.forEach(btn => {
                btn.classList.remove("active");
            });

            // Add Active
            link.classList.add("active");
        });
    });
}

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navlinks = document.querySelectorAll(".nav-links li");
   
    burger.addEventListener("click", ()=> {

         // Toggle Nav
        nav.classList.toggle("nav-active");

        navlinks.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("nav-active");
                burger.classList.remove("toggle");
            });
        });

        // Burger Animation
        burger.classList.toggle("toggle");
    });
}

const form = () => {
    const btn = document.querySelector(".btnSub");
    const newForm = document.querySelector(".newForm");
    const submit = document.querySelector(".btnSub");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        newForm.reset();
        btn.classList.add("active");
    });

    submit.addEventListener("click", () => {
        const thanks = document.querySelector(".thanks h3");
        thanks.style.opacity="1";
    });
}

const light = () => {
    const lightbox = document.querySelector(".lightbox");
    const button = document.querySelector(".btn-clear");
    const closelightbox = document.querySelector(".close");
    
    button.addEventListener("click", () => {
        lightbox.classList.toggle("open");
    });

    closelightbox.addEventListener("click", () => {
        lightbox.classList.toggle("open");
    });
}

const app = () => {
    navbar();
    navSlide();
    form();
    light();
}

app();