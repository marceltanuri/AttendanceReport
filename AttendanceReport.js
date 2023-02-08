/**
 * @author marcel.tanuri@gmail.com
 * 
 * example of usage: new Attendance(["Marcel Tanuri", "Noah Tanuri"]).loadFromGoogleMeet().printAttendances()
 */
export  class AttendanceReport {

    teacherNames = []
    attendances = []

    constructor(teacherNames) {
        if (teacherNames != null)
            this.teacherNames = teacherNames
    }

    loadFromGoogleMeet() {

        document.querySelectorAll("div[aria-label='Participants'] > div").forEach(item => {
            try {
                let participantName = item.querySelector("div").querySelectorAll("div")[1].querySelector("div").innerText.split("\n")[0]

                const isTheParticipantATeacher = this.teacherNames.includes(participantName) || participantName.includes("(You)" || participantName.includes("(Você)"))
                if (!isTheParticipantATeacher)
                    this.attendances.push(participantName)

            }
            catch { }
        })

        return this

    }

    printAttendances() {
        this.attendances.sort()
        console.log("Total participants " + this.attendances.length)
        let participantsOutput = ""
        this.attendances.forEach(element => {
            participantsOutput += element + "\n"
        });
        console.log(participantsOutput)
    }

}
