// Simulated data for demonstration purposes
let healthData = {
  heartRate: 75,
  steps: 2500,
  temperature: 98.6,
};

// Simulated communication data
const communicationData = [
  {
    sender: "Healthcare Provider",
    message: "Your latest health data looks good!",
  },
  { sender: "Family Member", message: "Dont forget to take your medication." },
];

//

// Function to update the UI with communication data
function updateCommunicationUI() {
  const communicationDiv = document.getElementById("communication");
  communicationDiv.innerHTML = "<h2>Communication</h2>";

  communicationData.forEach((item) => {
    communicationDiv.innerHTML += `<p><strong>${item.sender}:</strong> ${item.message}</p>`;
  });
}

// Function to simulate triggering an emergency
document
  .getElementById("emergency")
  .addEventListener("click", function triggerEmergency() {
    alert("Emergency alert sent! Help is on the way.");
  });

// Initial UI update
updateCommunicationUI();
// ... (previous code) ...

// Update health data periodically (simulated)
setInterval(() => {
  // Simulate changing health data over time
  healthData.heartRate = Math.floor(Math.random() * (90 - 70) + 70);
  healthData.temperature = parseFloat(
    (Math.random() * (99 - 97) + 97).toFixed(1)
  );

  // Display initial health data
  function updateDashboard() {
    const dashboardSection = document.getElementById("dashboard");
    dashboardSection.innerHTML = `
        <h2>Health Dashboard</h2>
        <p>Heart Rate: ${healthData.heartRate} bpm</p>
        <p>Steps: ${healthData.steps}</p>
        <p>Temperature: ${healthData.temperature} °F</p>
    `;
  }

  // Update the dashboard
  updateDashboard();
}, 5000); // Update every 5 seconds

// Buttons Handler

// communication button click handler
document.getElementById("communicateButton").addEventListener("click", () => {
  // Add logic for displaying medication reminders here
  alert("Call on +116745296222 to connect with provider!");
});

// location button click handler
document
  .getElementById("locationInfo")
  .addEventListener("click", function updateLocation() {
    const locationInfo = document.getElementById("locationInfo");

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          locationInfo.textContent = `Current Location: Latitude ${latitude}, Longitude ${longitude}`;
        },
        (error) => {
          locationInfo.textContent = `Location tracking error: ${error.message}`;
        }
      );
    } else {
      locationInfo.textContent = "Location tracking is not supported.";
    }
  });

// Medication button click handler
document.getElementById("medicationButton").addEventListener("click", () => {
  // Add logic for displaying medication reminders here
  alert("Time for your medication!");
});

// Simulated health history data for demonstration purposes
const healthHistory = [
  { date: "2023-12-01", heartRate: 78, steps: 3000, temperature: 98.5 },
  { date: "2023-12-02", heartRate: 82, steps: 2500, temperature: 98.8 },
  // Add more data as needed
];

// Display detailed health history
function updateHealthHistory() {
  const historySection = document.getElementById("history");
  historySection.innerHTML = `
        <h2>Health History</h2>
        <ul>
            ${healthHistory
              .map(
                (entry) => `
                <li>
                    <strong>Date:</strong> ${entry.date}<br>
                    <strong>Average Heart Rate:</strong> ${entry.heartRate} bpm<br>
                    <strong>Total Steps:</strong> ${entry.steps}<br>
                    <strong>Temperature:</strong> ${entry.temperature} °F
                </li>`
              )
              .join("")}
        </ul>
    `;
}
updateHealthHistory();

// Initialize FullCalendar
// document.addEventListener("DOMContentLoaded", function () {
//   var calendarEl = document.getElementById("calendar");

//   var calendar = new FullCalender.Calendar(calendarEl, {
//     initialView: "dayGridMonth",
//     events: [
//       // Sample events (replace with actual data)
//       {
//         title: "Doctor Appointment",
//         start: "2023-12-15T10:00:00",
//         end: "2023-12-15T11:00:00",
//       },
//       {
//         title: "Medication Reminder",
//         start: "2023-12-20T14:00:00",
//         end: "2023-12-20T15:00:00",
//       },
//     ],
//   });

//   calendar.render();
// });
// document.addEventListener("DOMContentLoaded", function () {
//   var calendarEl = document.getElementById("calendar");
//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: "dayGridMonth",
//   });
//   calendar.render();
// });
// Open the calendar modal
document
  .getElementById("openCalendarModal")
  .addEventListener("click", function () {
    $("#calendarModal").modal("show"); // Use Bootstrap modal method
  });

// Initialize FullCalendar within the modal
document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    events: [
      // Sample events (replace with actual data)
      {
        title: "Doctor Appointment",
        start: "2023-12-15T10:00:00",
        end: "2023-12-15T11:00:00",
      },
      {
        title: "Medication Reminder",
        start: "2023-12-20T14:00:00",
        end: "2023-12-20T15:00:00",
      },
    ],
  });

  calendar.render();
});
