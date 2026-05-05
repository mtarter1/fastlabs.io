(function () {
  var menuButton = document.querySelector("[data-menu-toggle]");
  var siteNav = document.querySelector("[data-site-nav]");

  if (menuButton && siteNav) {
    menuButton.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var projects = Array.prototype.slice.call(document.querySelectorAll("[data-category]"));

  if (filterButtons.length && projects.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.getAttribute("data-filter");

        filterButtons.forEach(function (candidate) {
          candidate.classList.toggle("active", candidate === button);
        });

        projects.forEach(function (project) {
          var categories = project.getAttribute("data-category") || "";
          var show = filter === "all" || categories.split(" ").indexOf(filter) !== -1;
          project.hidden = !show;
        });
      });
    });
  }

  var contactForm = document.querySelector("[data-contact-form]");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var formData = new FormData(contactForm);
      var name = formData.get("name") || "";
      var email = formData.get("email") || "";
      var lane = formData.get("lane") || "";
      var message = formData.get("message") || "";
      var note = contactForm.querySelector("[data-form-note]");
      var subject = "FastLabs project conversation: " + lane;
      var body = [
        "Name: " + name,
        "Email: " + email,
        "Project lane: " + lane,
        "",
        "What should work better?",
        message
      ].join("\n");

      window.location.href = "mailto:madison.tarter@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

      if (note) {
        note.textContent = "Your email draft should open now. If it does not, email madison.tarter@gmail.com directly.";
      }
    });
  }
})();
