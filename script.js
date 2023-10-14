// script.js
const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");

function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}
function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("click", (e) => e.stopPropagation());
  });
}
function toggleHamburger() {
  navMenu.classList.toggle("show");
}
dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);

    dropdownElement.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
        drop.classList.remove("active");
      }
    });
    e.stopPropagation();
    btn.setAttribute(
      "aria-expanded",
      btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
  });
});

// close dropdown menu when the dropdown links are clicked
links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    toggleHamburger();
  })
);

// close dropdown menu when you click on the document body
document.documentElement.addEventListener("click", () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});

// close dropdown when the escape key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdownMenu();
    setAriaExpandedFalse();
  }
});

hamburgerBtn.addEventListener("click", toggleHamburger);
/* *************************************************************************
                        rotating earth/globe
*********************************************************************** */

const globeImage = document.querySelector(".rotating-globe img");
globeImage.addEventListener("click", () => {
  globeImage.classList.toggle("paused");
});
globeImage.addEventListener("mouseover", () => {
  globeImage.classList.add("paused");
});
globeImage.addEventListener("mouseout", () => {
  globeImage.classList.remove("paused");
});

/* *************************************************************************
                          special features
*********************************************************************** */
const coll = document.querySelectorAll(".collapsible-btn");

coll.forEach((button) => {
  button.addEventListener("click", () => {
    // Close all collapsible sections
    document.querySelectorAll(".collapse-content").forEach((content) => {
      content.style.display = "none";
    });
    // Toggle the clicked section
    button.classList.toggle("active");
    const content = button.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});
/* *************************************************************************
                         contact us
*********************************************************************** */
