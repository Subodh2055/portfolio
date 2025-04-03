document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("show");
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navMenu.classList.contains("show")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("show");
      }
    });
  });

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll(".skill-bar");

  function animateSkillBars() {
    skillBars.forEach((bar) => {
      const level = bar.getAttribute("data-level");
      const barElement = bar.querySelector(".bar");
      if (isElementInViewport(bar)) {
        barElement.style.width = level + "%";
      }
    });
  }

  // Check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  // Animate timeline items on scroll
  const timelineItems = document.querySelectorAll(".timeline-item");
  const projectCards = document.querySelectorAll(".project-card");
  const educationItems = document.querySelectorAll(".education-item");

  function animateOnScroll() {
    animateSkillBars();

    timelineItems.forEach((item) => {
      if (isElementInViewport(item)) {
        item.classList.add("visible");
      }
    });

    projectCards.forEach((card) => {
      if (isElementInViewport(card)) {
        card.classList.add("visible");
      }
    });

    educationItems.forEach((item) => {
      if (isElementInViewport(item)) {
        item.classList.add("visible");
      }
    });
  }

  // Initial check on load
  animateOnScroll();

  // Check on scroll
  window.addEventListener("scroll", animateOnScroll);

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    }
  });

  // email sender
  emailjs.init("P7vsLl1LMUjGwlFCD");

  document
    .querySelector(".contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const userEmail = formData.get("email");

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(userEmail)) {
        Toastify({
          text: "Please provide a valid email address.",
          duration: 3000,
          gravity: "top",
          position: "center",
          backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
        }).showToast();
        return;
      }

      emailjs
        .send("service_wvczn3l", "template_7tf5rwn", {
          to_email: "subodhbhandari4@gmail.com",
          from_name: formData.get("name"),
          from_email: userEmail,
          message: formData.get("message"),
        })
        .then((response) => {
          Toastify({
            text: "Email sent successfully!",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
          }).showToast();
          console.log("Success:", response);
        })
        .catch((error) => {
          Toastify({
            text: "Failed to send email.",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
          }).showToast();
          console.error("Error:", error);
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
      document.querySelector(".info-item").addEventListener("click", function () {
          window.location.href = "https://mail.google.com/mail/?view=cm&to=subodhbhandari4@gmail.com";
      });
  });
  
});
