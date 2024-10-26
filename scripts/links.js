const devURL = "http://127.0.0.1:5500/"
const baseURL = "https://eliezargongora.github.io/wdd230/"
const linksURL = devURL + "data/links.json"

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  console.log("ELI'S DATA:", data);

  displayLinks(data.weeks)
}

function displayLinks(weeks) {
    weeks.forEach((week) => {
        const liElement = document.createElement('li')

        const spanElement = document.createElement('span')
        spanElement.classList.add('week-title')
        spanElement.innerText = week.week
        liElement.appendChild(spanElement)

        week.links.forEach((link) => {
            const aElement = document.createElement("a")
            aElement.href = link.url
            aElement.innerText = link.title + " | "
            liElement.appendChild(aElement)
        })

        document.getElementById("weeklist").appendChild(liElement)

    })
}

getLinks();


