// Portfolio Data
const portfolioData = {
  name: "HEE CHEE KEONG",
  title: "iOS Developer | Software Engineer",
  about: "I’m a Software Engineer with over 8 years of experience in mobile app development for iOS, Android, and backend systems. I specialize in building user-friendly solutions with expertise in audio technologies, BLE, NFC, IoT, and cloud integrations. Passionate about creating high-performance software, I excel in collaborating with teams to deliver innovative and reliable solutions.",
  skills: ["iOS Development", "Java", "Python", "Android Development", "ASP.Net", "Ionic", "OAuth2.0"],
  experience: [
    {
      company: "Creative Labs Pte. Ltd.",
      position: "Software Engineer",
      duration: "2022–2025",
      responsibilities: [
        "Developed iOS/macOS libraries for audio devices, enhancing performance and ensuring seamless integration with Bluetooth audio technologies.",
        "Designed and implemented a secure OAuth 2.0 authorization code flow with PKCE, incorporating secret key exchange and backend token validation to retrieve JWT tokens, aligning with mobile security best practices to ensure authentication integrity.",
        "Enhanced authentication processes by integrating biometric login methods such as Face ID and Fingerprint authentication, utilizing Keychain storage to streamline user access while reducing login times."
      ]
    },
    {
      company: "Team One Technologies Pte. Ltd.",
      position: "Software Engineer",
      duration: "2017–2022",
      responsibilities: [
        "Developed Android applications with BLE and NFC integration to support secure configuration and management of military-grade devices, resulting in a 40% improvement in setup efficiency and significant reduction in manual configuration errors.",
        "Built a cross-platform smart device management application using Ionic, integrating push notifications and remote alerting functionality to enable proactive monitoring. Improved response times to device events and reduced support workload through enhanced situational awareness tools.",
        "Designed and implemented a backend data pipeline using Python for processing encrypted telemetry from military modules, providing real-time insights through an AngularJS dashboard. Resolved critical parsing bugs and achieved test coverage for approximately 96% of known telemetry scenarios, enhancing system reliability and accuracy."
      ]
    },
    {
      company: "MTech Holdings Sdn. Bhd",
      position: "Android Developer ( Android )",
      duration: "2016–2017",
      responsibilities: [
        "Development and enhancement of a survey application, achieving an 80% increase in completion rates through the implementation of a progress bar to indicate remaining survey length",
        "Creation and maintenance of a mobile application utilized by over 580,000 users, with weekly viewership exceeding 3 million across Malaysia.",
        "Integration of Google Analytics for tracking user interactions with coupons and promotions, delivering actionable insights to marketing and content teams to optimize ad personalization"
      ]
    }
  ],
  projects: [
    {
      title: "Smart Magazine (Android)",
      description: "Smart Magazine is an Android project designed to control, diagnose the status, and modify device values through a BLE connection. Additionally, users can change values using an NFC connection.",
      images: ["images/military1.png", "images/military2.png", "images/military3.png"],
      githubLink: "https://github.com/yourusername/project2"
    },
    {
      title: "Health Questionnaire App (Android)",
      description: "The Health Questionnaire App is designed to streamline the process of health assessments by collecting detailed information from users through an intuitive questionnaire. By capturing essential health data, the app provides healthcare professionals with a comprehensive overview, enabling them to offer more accurate and personalized health examination services.",
      images: [ "images/mj2.jpg", "images/mj3.jpg"],
      githubLink: "https://github.com/yourusername/project2"
    },
    {
      title: "E-Ticket System (iOS)",
      description: "The application is a membership-based e-ticketing system that enables users to browse and purchase event tickets online. Each e-ticket is issued with a unique QR code, which serves as a digital pass for event entry. Users can securely complete transactions via credit card, with all payments processed through a secure backend system.",
      images: ["images/herbal1.png", "images/herbal2.png"],
      githubLink: "https://github.com/yourusername/project2"
    },
    {
      title: "Brainy Bin (Android and iOS)",
      description: "The Brainy Bin App is an innovative solution designed to optimize waste management processes. This mobile application allows users to remotely monitor the fill levels of waste bins in real-time and automatically alerts designated personnel when a bin is full and requires emptying. By eliminating the need for routine patrols to check bin status, the app significantly reduces operational inefficiencies and frees up valuable manpower to be redirected to other critical tasks.",
      images: ["images/bn1.jpg", "images/bn2.jpg", "images/bn3.png"],
      githubLink: "https://github.com/yourusername/project2"
    },
  ],
  contact: {
    email: "cksys.development@gmail.com",
    linkedIn: "https://sg.linkedin.com/in/hee-chee-keong-987209144"
  }
};

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("headerName").textContent = portfolioData.name;
  document.getElementById("headerTitle").textContent = portfolioData.title;
  document.getElementById("aboutText").textContent = portfolioData.about;
  // document.getElementById("contactEmail").innerHTML = `Email: <a href="mailto:${portfolioData.contact.email}">${portfolioData.contact.email}</a>`;
  // document.getElementById("contactLinkedIn").innerHTML = `LinkedIn: <a href="${portfolioData.contact.linkedIn}" target="_blank">LinkedIn</a>`;
  document.getElementById("contactEmail").innerHTML = `
  Email: <a href="mailto:${portfolioData.contact.email}">
    <img src="images/email_icon.png" alt="Email Icon" style="width: 20px; height: 20px;" />
  </a>
`;

document.getElementById("contactLinkedIn").innerHTML = `
  LinkedIn: <a href="${portfolioData.contact.linkedIn}" target="_blank">
    <img src="images/linkedin_icon.png" alt="LinkedIn Icon" style="width: 20px; height: 20px;" />
  </a>
`;

  // Skills
  const skillsList = document.getElementById("skillsList");
  portfolioData.skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  // Experience
  const experienceSection = document.getElementById("experienceSection");
  portfolioData.experience.forEach(job => {
    const div = document.createElement("div");
    div.classList.add("job");
    div.innerHTML = `
      <h3>${job.position} @ ${job.company}</h3>
      <p><strong>Duration:</strong> ${job.duration}</p>
      <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
    `;
    experienceSection.appendChild(div);
  });

  // Projects
  const projectsSection = document.getElementById("projectsSection");
  portfolioData.projects.forEach(project => {
    const div = document.createElement("div");
    div.classList.add("project-card");

    const gallery = project.images.map(img =>
      `<div class="gallery-item"><img src="${img}" alt="${project.title}" onclick="openModal('${img}', '${project.title}')"></div>`
    ).join('');

    // div.innerHTML = `
    //   <h3>${project.title}</h3>
    //   <p>${project.description}</p>
    //   <div class="project-gallery">${gallery}</div>
    //   <a href="${project.githubLink}" target="_blank">View on GitHub</a>
    // `;

    div.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-gallery">${gallery}</div>
    `;
    projectsSection.appendChild(div);
  });

  // Scroll animation
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => observer.observe(sec));
});

// Modal
function openModal(src, alt) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const caption = document.getElementById("caption");

  modal.style.display = "flex";
  modalImg.src = src;
  caption.textContent = alt;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
