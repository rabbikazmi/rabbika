document.addEventListener("DOMContentLoaded", () => {
  const navIcons = document.querySelectorAll(".nav-icon");
  const sections = document.querySelectorAll(".section");

  navIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      const targetId = icon.getAttribute("data-target");

      // Hide all sections
      sections.forEach(section => {
        section.classList.remove("active-section");
      });

      // Show the targeted section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active-section");
      }

      // Update active icon
      navIcons.forEach(i => i.classList.remove("active"));
      icon.classList.add("active");
    });
  });
});

function toggleBox(box) {
      box.classList.toggle('expanded');
    }
console.log("Loaded script");
console.log("Navigating to:", targetId);

