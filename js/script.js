function applyLanguage(lang) {
    const header = document.getElementById("main-header");

    // Remove existing language-specific font classes
    header.classList.remove("font-en", "font-zh", "font-ja");

    // Add the appropriate font class based on the selected language
    if (lang === "en") {
        header.classList.add("font-en");
    } else if (lang === "zh-Hant") {
        header.classList.add("font-zh");
    } else if (lang === "ja") {
        header.classList.add("font-ja");
    }

    // Update translations
    document.title = translations[lang]["title"];
    document.getElementById("welcome").innerText = translations[lang]["welcome"];
    document.getElementById("about").querySelector("h2").innerText = translations[lang]["about"];
    document.getElementById("story").querySelector("h2").innerText = translations[lang]["story"];
    document.getElementById("projects").querySelector("h2").innerText = translations[lang]["projects"];
    document.getElementById("contact").querySelector("h2").innerText = translations[lang]["contact"];
    document.getElementById("language-select").value = lang;

    // Update navigation links
    const navLinks = document.querySelectorAll(".nav-link");
    if (navLinks.length >= 3) {
        navLinks[0].innerText = translations[lang]["about"]; // About Me
        navLinks[1].innerText = translations[lang]["projects"]; // Projects
        navLinks[2].innerText = translations[lang]["contact"]; // Contact
    }

    // Update details elements from translations
    const detailsTranslations = translations[lang].details;
    for (const key in detailsTranslations) {
        const elems = document.querySelectorAll(`[data-key="${key}"]`);
        elems.forEach(elem => {
            elem.innerText = detailsTranslations[key];
        });
    }
}

function sendEmail(event) {
    event.preventDefault();
    const form = event.target;
    // Ensure reply_to is set with the sender's email
    form.querySelector('input[name="reply_to"]').value = form.querySelector('#email').value;
    emailjs.sendForm('service_mannmannlai', 'template_mannmannlai', form)
      .then(function(response) {
          alert("Email sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
      }, function(error) {
          alert("Failed to send email. Please try again later.");
          console.log("FAILED...", error);
      });
}