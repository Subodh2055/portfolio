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

  //   // Form submission
  //   const contactForm = document.querySelector(".contact-form");
  //   if (contactForm) {
  //     contactForm.addEventListener("submit", function (e) {
  //       e.preventDefault();
  //       fetch(contactForm.action, {
  //         method: "POST",
  //         body: new FormData(contactForm),
  //       })
  //       .then(response => response.ok ? alert("Email Sent Successfully!") : alert("Error sending email!"))
  //       .then(() => contactForm.reset())
  //       .catch(error => console.error("Error:", error));
  //     });
  //   }

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

document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const userEmail = formData.get("email");

  // Validate email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(userEmail)) {
    alert("Please provide a valid email address.");
    return;
  }

  // Log the data being sent
  console.log({
    to_email: "subodhbhandari4@example.com",
    from_name: formData.get("name"),
    from_email: userEmail,
    message: formData.get("message"),
  });

  emailjs.send("service_wvczn3l", "template_7tf5rwn", {
    to_email: "subodhbhandari4@gmail.com", 
    from_name: formData.get("name"),
    from_email: formData.get("email"),
    message: formData.get("message"),
  })
  .then(response => {
    alert("Email sent successfully!");
    console.log("Success:", response);
  })
  .catch(error => {
    alert("Failed to send email.");
    console.error("Error:", error);
  });

});

});
