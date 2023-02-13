"use strict";

function loadFromGoogleMeet() {

    let attendances = []

    document.querySelectorAll("div[aria-label='Participants'] > div").forEach(item => {
        try {
            let participantName = item.querySelector("div").querySelectorAll("div")[1].querySelector("div").innerText.split("\n")[0]
            attendances.push(participantName)
        }
        catch { }
    })
    return attendances
}

export default loadFromGoogleMeet