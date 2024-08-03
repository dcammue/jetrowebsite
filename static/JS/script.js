/**
* Jetro Web Development
* Project Created: April 10, 2024 
* Author: Jetro Web Team
*/ 
 
 
 /**
   * Jetro Window bar variable & function
   */

const jetro_Window = document.querySelector(".nav_window");
const jetro_Menu = document.querySelector(".nav_menu");

jetro_Window.addEventListener("click", ()=>{
    jetro_Window.classList.toggle("active");
    jetro_Menu.classList.toggle("active");

})

document.querySelectorAll(".nav_list").forEach(n => n.addEventListener("click", ()=>{
    jetro_Window.classList.remove("active");
    jetro_Menu.classList.remove("active");
}))

 /**
   * End of Window bar
   */