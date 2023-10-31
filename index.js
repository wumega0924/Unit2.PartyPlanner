const COHORT = "2309-FTB-ET-WEB-FT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;

const state = {
    events: [],
  };
  
  const eventsList = document.querySelector("#events");
  
  const addEventsForm = document.querySelector("#addEvents");
  addEventsForm.addEventListener("submit", addEvents);


  
async function getEvent() {
    let response = await fetch(API_URL)
    let json = await response.json()
    console.log('json.data:', json.data)
    
    return data;
    state.events = json.data
}

function renderEvents(eventsList) {
    if (!state.events.length) {
        eventsList.innerHTML = '<li>No Events.</li>'
        return
    }
    const eventsCards = state.events.map((events) => {
        const li =document.createElement('li')
        li.innerHTML = `
        <h2>${events.name}</h2>
        <h3>${events.date}</h3>
        <h3>${events.time}</h3>
        <h3>${events.location}</h3>
        <p>${events.dexriptions}</p>
        `

        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'DELETE'
        deleteButton.addEventListener('click', () => {
            deleteEvent(events.id)
        })

        liappendChild(deleteButton)

        return li
    })

    eventsList.replaceChildren(...eventsCards)
}
