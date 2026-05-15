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
    var tagInput = contactForm.querySelector("[data-tag-input]");
    var tagButtons = Array.prototype.slice.call(contactForm.querySelectorAll("[data-tag]"));

    if (tagInput && tagButtons.length) {
      tagButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          var tag = button.getAttribute("data-tag") || "";
          var tags = tagInput.value.split(",").map(function (value) {
            return value.trim();
          }).filter(Boolean);

          if (tags.indexOf(tag) === -1) {
            tags.push(tag);
          } else {
            tags = tags.filter(function (value) {
              return value !== tag;
            });
          }

          tagInput.value = tags.join(", ");
          button.classList.toggle("active", tags.indexOf(tag) !== -1);
          tagInput.focus();
        });
      });

      tagInput.addEventListener("input", function () {
        var selected = tagInput.value.split(",").map(function (value) {
          return value.trim();
        });

        tagButtons.forEach(function (button) {
          button.classList.toggle("active", selected.indexOf(button.getAttribute("data-tag")) !== -1);
        });
      });
    }

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var formData = new FormData(contactForm);
      var name = formData.get("name") || "";
      var email = formData.get("email") || "";
      var lane = formData.get("lane") || "";
      var message = formData.get("message") || "";
      var note = contactForm.querySelector("[data-form-note]");
      var subject = "fastlabs project conversation: " + lane;
      var body = [
        "Name: " + name,
        "Email: " + email,
        "Focus: " + lane,
        "",
        "What are we tuning?",
        message
      ].join("\n");

      window.location.href = "mailto:madison@fastlabs.io?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

      if (note) {
        note.textContent = "Your email draft should open now. If it does not, email madison@fastlabs.io directly.";
      }
    });
  }
})();
