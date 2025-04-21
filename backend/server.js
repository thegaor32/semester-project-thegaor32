const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express(); // always before app.use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes for pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/faq", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "faq.html"));
});

app.get("/booking", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "booking.html"));
});

// JSON file path
const bookingsFile = path.join(__dirname, "bookings.json");

// Load existing bookings from JSON file if it exists
let bookedRooms = [];
if (fs.existsSync(bookingsFile)) {
  const data = fs.readFileSync(bookingsFile);
  bookedRooms = JSON.parse(data);
}

// Handle room booking form submission
app.post("/booking", (req, res) => {
  const { name, email, room, date, time } = req.body;
  console.log(req.body);

  if (!name || !email || !room || !date || !time) {
    return res.status(400).send("All fields are required.");
  }

  const isAlreadyBooked = bookedRooms.find(
    (booking) =>
      booking.room === room &&
      booking.date === date &&
      booking.time === time
  );

  if (isAlreadyBooked) {
    return res.send(`<h2>Sorry, ${room} is already booked for ${date} at ${time}.</h2>`);
  }

  const newBooking = { name, email, room, date, time };
  bookedRooms.push(newBooking);

  // Save to JSON file
  fs.writeFile(bookingsFile, JSON.stringify(bookedRooms, null, 2), (err) => {
    if (err) {
      console.error("Error saving to file:", err);
    } else {
      console.log("Booking saved to bookings.json");
    }
  });

  res.send(`<h2>✅ ${name}, your booking for ${room} on ${date} at ${time} is confirmed!</h2>`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
