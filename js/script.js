// Variables
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
const teamFormElm = document.getElementById('team-form')
const fullNameElm = document.getElementById('full-name')
const roleElm = document.getElementById('role')
const emailElm = document.getElementById('email')
const imgElm = document.getElementById('img')
const submitElm = document.getElementById('submit')

// DOM Events

//On page load
renderTeam()

// Submit Form
teamFormElm.addEventListener('submit', function(event){
  event.preventDefault()

  const name = fullNameElm.value 
  const role = roleElm.value
  const email = emailElm.value
  const img = imgElm.value
  const newMember = {
    name,
    role,
    email,
    img
  }

  // Aggiornamento array e ri-render HTML
  teamMembers.push(newMember)
  renderTeam()
})
