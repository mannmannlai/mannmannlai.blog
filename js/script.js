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
}

function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Construct the mailto link
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const mailtoLink = `mailto:mannmannlai@gmail.com?subject=${subject}&body=${body}`;

    // Open the mailto link
    window.location.href = mailtoLink;
}