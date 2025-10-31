// ===========================================
// 📈  Skill Radar Chart — Afsar Azam
// ===========================================

// Dynamically load Chart.js from CDN
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/chart.js";
document.head.appendChild(script);

script.onload = () => {
  const ctx = document.getElementById("skillChart").getContext("2d");

  new Chart(ctx, {
    type: "radar",
    data: {
      labels: [
        "Python",
        "Machine Learning",
        "ReactJS",
        "Data Analysis",
        "Frontend (HTML/CSS/JS)",
        "UI/UX Design"
      ],
      datasets: [{
        label: "Skill Proficiency (%)",
        data: [95, 90, 85, 88, 92, 80],
        backgroundColor: "rgba(0, 255, 255, 0.2)",
        borderColor: "#00ffff",
        pointBackgroundColor: "#00ff99",
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          angleLines: { color: "#00ffff33" },
          grid: { color: "#00ffff22" },
          pointLabels: { color: "#00ffff" },
          suggestedMin: 0,
          suggestedMax: 100,
        }
      },
      plugins: {
        legend: {
          labels: { color: "#00ffcc", font: { size: 13 } }
        }
      },
      animation: {
        duration: 2000,
        easing: "easeOutCubic"
      }
    }
  });
};