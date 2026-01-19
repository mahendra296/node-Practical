document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      this.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInsideNav = navMenu?.contains(event.target);
    const isClickOnToggle = mobileMenuToggle?.contains(event.target);

    if (
      !isClickInsideNav &&
      !isClickOnToggle &&
      navMenu?.classList.contains("active")
    ) {
      navMenu.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
    }
  });

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navMenu?.classList.contains("active")) {
        navMenu.classList.remove("active");
        mobileMenuToggle?.classList.remove("active");
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Form validation and enhancement
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const urlInput = document.getElementById("url");
      const shortCodeInput = document.getElementById("shortCode");

      // Validate URL format
      if (urlInput && !isValidUrl(urlInput.value)) {
        e.preventDefault();
        showError(urlInput, "Please enter a valid URL");
        return;
      }

      // Validate shortcode if provided
      if (shortCodeInput && shortCodeInput.value) {
        const shortCodePattern = /^[a-zA-Z0-9-_]+$/;
        if (!shortCodePattern.test(shortCodeInput.value)) {
          e.preventDefault();
          showError(
            shortCodeInput,
            "Shortcode can only contain letters, numbers, hyphens, and underscores"
          );
          return;
        }
      }
    });
  }

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".feature-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
});

// Helper Functions
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

function showError(input, message) {
  // Remove existing error
  const existingError = input.parentElement.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  // Add error styling
  input.style.borderColor = "#f56565";

  // Create error message
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.style.color = "#f56565";
  errorDiv.style.fontSize = "0.85rem";
  errorDiv.style.marginTop = "0.5rem";
  errorDiv.textContent = message;

  input.parentElement.appendChild(errorDiv);

  // Remove error on input
  input.addEventListener(
    "input",
    function () {
      input.style.borderColor = "";
      if (errorDiv.parentElement) {
        errorDiv.remove();
      }
    },
    { once: true }
  );
}

function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          z-index: 10000;
          animation: slideIn 0.3s ease-out;
          font-weight: 600;
        `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease-out";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}
