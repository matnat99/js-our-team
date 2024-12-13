const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    }
  ];

// DOM Elements
const teamContainerElm = document.querySelector('.team-container')

let listItems = ""

// DOM Events
for(let i = 0; i < teamMembers.length; i++){
  const {name, role, email, img} = teamMembers[i]
  listItems += `
  <div class="team-card">
      <div class="card-image">
          <img src="${img}" alt="${name}">
      </div>
      <div class="card-description">
          <h3>${name}</h3>
          <span>${role}</span>
          <span>${email}</span>
      </div>
  </div>
  `
}

teamContainerElm.innerHTML = listItems