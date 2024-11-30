const form = document.getElementById("contactForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(form); // Gather form data

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      alert("Your message has been sent successfully!");
      form.reset(); // Clear the form fields
    } else {
      alert("There was an error sending your message. Please try again.");
    }
  } catch (error) {
    alert("An error occurred. Please check your connection and try again.");
  }
});

const themeToggleButton = document.getElementById("themeToggle");
const body = document.body;

themeToggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode"); // Mengubah kelas pada body
  // Menyimpan tema yang dipilih ke localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Memeriksa tema yang disimpan di localStorage saat halaman dimuat
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode"); // Mengatur tema gelap jika disimpan
  }
});
