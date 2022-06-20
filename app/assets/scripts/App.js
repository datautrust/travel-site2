import '../styles/styles.css'
//alert("this is just a testxxxx");
import mobilemenu from "./modules/MobileMenu.js";
import revealonscroll from "./modules/RevealOnScroll.js";
import StickyHeader from "./modules/StickyHeader";

//we could get rid of the let variable statements since we don't need its methods
// cold have new StickyHeader(); new mobilemenu();
// eg. modal we must have let because we are using its method here.
let stickHeader = new StickyHeader();
let mobileMenu = new mobilemenu();
let modal;


// let revealOnScroll = new revealonscroll();
new revealonscroll(document.querySelectorAll(".feature-item"),75);
new revealonscroll(document.querySelectorAll(".testimonial"),60)


// re arranging our code for code splitting with webpack
// so now we first have know when the user clicks 'get touch' to 
// then load the modal.js code
document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
        modal = new x.default()
        setTimeout(() => modal.openTheModal(), 20)
      }).catch(() => console.log("There was a problem."))
    } else {
      modal.openTheModal()
    }
  })
})



if (module.hot) {
    module.hot.accept()
  }



