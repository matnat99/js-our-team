createCardMember = (member) =>{
    const {name, role, email, img} = member
    
    const card = `
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
        return card
}

renderTeam = () =>{
    let listItems = ""

    for(let i = 0; i < teamMembers.length; i++){
      const {name, role, email, img} = teamMembers[i]
      listItems += createCardMember(teamMembers[i])
    }
    
    teamContainerElm.innerHTML = listItems
}