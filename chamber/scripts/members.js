const baseURL = "https://eliezargongora.github.io/wdd230/chamber/data/members.json"

async function getMembers() {
  const response = await fetch(baseURL);
  const data = await response.json();
  console.log("ELI'S DATA:", data);

  displayMembers(data.companies)
}

function displayMembers(member) {
    member.forEach((member) => 

    }

getMembers();


