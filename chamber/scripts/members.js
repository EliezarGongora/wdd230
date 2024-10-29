const baseURL = "https://eliezargongora.github.io/wdd230/chamber/data/members.json"
const devurl = "http://127.0.0.1:5500/chamber/data/members.json"

async function getMembers() {
  const response = await fetch(baseURL);
  const data = await response.json();
  console.log("ELI'S DATA:", data);

  displayMembers(data.companies)
}

function displayMembers(member) {
    member.forEach((member) => {

      let card = document.createElement('section');
      card.classList = 'list'

      const iconElement = document.createElement("img")
      iconElement.src = member.icon
      iconElement.width = 100 
      iconElement.height = 100
      iconElement.classList= "icon"
      card.appendChild(iconElement)

      const nameElement = document.createElement("span")
      nameElement.innerText = member.name
      nameElement.classList= "name"
      card.appendChild(nameElement)

      const addressElement = document.createElement("span")
      addressElement.innerText = member.address
      addressElement.classList= "address"
      card.appendChild(addressElement)

      const phoneElement = document.createElement("span")
      phoneElement.innerText = member.phone
      card.appendChild(phoneElement)

      // const emailElement = document.createElement("span")
      // emailElement.innerText = member.email
      // card.appendChild(emailElement)

     

      
      const urllElement = document.createElement("a")
      urllElement.href = member.url
      urllElement.innerText = member.url
      card.appendChild(urllElement)

    document.getElementById("cards").appendChild(card)

    });
}

getMembers();

const toggleListButton = document.getElementById('toggle-list')
toggleListButton.addEventListener('click', () => {
  toggleListButton.classList = 'active'
  toggleGridButton.classList = ''
  const cardElements = document.querySelectorAll('#cards')
  cardElements.forEach(card => card.classList = 'list')
})

const toggleGridButton = document.getElementById('toggle-grid')
toggleGridButton.addEventListener('click', () => {
  toggleGridButton.classList = 'active'
  toggleListButton.classList = ''
  const cardElements = document.querySelectorAll('#cards')
  cardElements.forEach(card => card.classList = 'grid')
})
