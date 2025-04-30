# CIS-2336-SP25-Project

Please update this README with the instructions on how to use the repository (developer documentation).

Use [GitHub Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github) to oraginze and fromat your README document.
# UH Sugar Land Student Center Website

This project is a mock website for the new University of Houston Sugar Land Student Center. It was developed using **HTML**, **CSS**, **JavaScript**, and **Node.js** as part of a multi-phase web development project.

---

##  Project Overview

The website includes a homepage, FAQ section, and a room booking page. The front-end is fully responsive and interactive, and the back-end handles form submissions using Express on Node.js.

---

##  Phase 2: Frontend Implementation

- Designed and built a homepage with navigation links.
- Implemented a collapsible **FAQ section** using JavaScript.
- Developed a **room booking form** with five rooms and front-end validation.
- Embedded media on the homepage (UH video).
- Styled the website using **CSS** for a clean, responsive design.

---

##  Phase 3: Backend Implementation

- Set up a **Node.js + Express** server.
- Created backend routing for `/`, `/faq`, and `/booking` using GET.
- Handled POST requests to `/booking` for room booking form submission.
- Performed back-end form data validation and displayed a confirmation.
- (Optional) Stored booking data in a temporary JavaScript object.
- Documented the project in this `README.md` file.

---

## Project Structure
project-root/
├── backend/
│   ├── server.js
│   ├── bookings.json
├── frontend/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   ├── index.html
│   ├── faq.html
│   └── booking.html

---

# How to Run This Project

1. **Install dependencies**:
   ```bash
   npm install
/	GET	Displays the Home page
/faq	GET	Displays the FAQ page
/booking	GET	Displays the Room Booking page
/booking	POST	Processes the Room Booking form submission
