import dotenv from 'dotenv';
import axios from 'axios';  // ✅ Import axios

const API_BASE = "http://localhost:3000";  // or your deployed server

const contactForm = document.querySelector('#contactForm');

 document.querySelector("#submitBtn").onClick(alert("contact-form"))

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    alert("hello anuj")

    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();
    const responseMessage = document.getElementById('responseMessage');

    if (!name || !email || !message) {
      alert("Please fill out all the fields.");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
    } else {
      try {
        const response = await axios.post(`${API_BASE}/sendmessage`, {
          name,
          email,
          message
        });

        responseMessage.textContent = response.data.message || 'Message sent!';
        responseMessage.style.color = 'green';
        contactForm.reset();
      } catch (error) {
        console.error(error);
        responseMessage.textContent = error.response?.data?.message || 'An error occurred. Please try again later.';
        responseMessage.style.color = 'red';
      }
    }
  });
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
