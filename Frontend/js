// Room Booking Form
document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("booking_form");

  if (bookingForm) {
    bookingForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        room: document.getElementById("room").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
      };

      try {
        const response = await fetch("/booking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.text();
        document.getElementById("confirmation").style.display = "block";
        document.getElementById("confirmation").innerHTML = result;
        bookingForm.reset();
      } catch (error) {
        alert("Something went wrong.");
        console.error(error);
      }
    });
  }

  // FAQ Toggle - INSIDE same DOMContentLoaded
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });
});
