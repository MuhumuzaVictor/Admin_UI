// ###################################
// Drop down content on clicking on the user profile
// ###################################
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function toggleUserMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".profile-image")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// ###################################
// These scripts are from the dashboard scripts
// ###################################
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.style.display = "none";
});
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  if (!btn.classList.contains("slider")) {
    btn.classList.add("slider");
    document.body.style.background = "#000";
    document.body.style.color = "#fff";
  } else {
    btn.classList.remove("slider");
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
  }
});

const profile_image = document.querySelector(".profile-image");
const profile_drop_down = document.querySelector(".profile-drop-down");
profile_image.addEventListener("click", () => {
  profile_drop_down.style.display = "block";
});
