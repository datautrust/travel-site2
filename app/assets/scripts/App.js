import '../styles/styles.css'
//alert("this is just a testxxxx");
import mobilemenu from "./modules/MobileMenu.js";
import revealonscroll from "./modules/RevealOnScroll.js";

let mobileMenu = new mobilemenu();
// let revealOnScroll = new revealonscroll();
new revealonscroll(document.querySelectorAll(".feature-item"),75);
new revealonscroll(document.querySelectorAll(".testimonial"),60)

if (module.hot) {
    module.hot.accept()
  }



