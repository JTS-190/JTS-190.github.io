document.addEventListener("DOMContentLoaded", function () {
  const volunteerBtn = document.getElementById("volunteerBtn");

  const contactForm = document.createElement("form");
  contactForm.innerHTML = `
    <h3>Contact Info</h3>
    <label>Name: <input type="text" name="name" required></label><br><br>
    <label>Email: <input type="email" name="email" required></label><br><br>
    <label>Phone: <input type="tel" name="phone"></label><br><br>
    <button type="submit">Submit</button>
  `;
  contactForm.style.display = "none";
  contactForm.className = "contact-form";

  document.querySelector(".volunteer-section").appendChild(contactForm);

  volunteerBtn.addEventListener("click", function () {
    contactForm.style.display = "block";
  });

  const extraInfo = document.createElement("p");
  extraInfo.textContent = "We also offer training for volunteers!";
  extraInfo.style.display = "none";
  extraInfo.style.fontStyle = "italic";
  document.querySelector(".charity-description").appendChild(extraInfo);

  document.querySelector(".charity-description").addEventListener("mouseover", function () {
    extraInfo.style.display = "block";
  });

  document.querySelector(".charity-description").addEventListener("mouseout", function () {
    extraInfo.style.display = "none";
  });
});
