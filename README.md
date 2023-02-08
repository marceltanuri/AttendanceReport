# AttendanceReport

* `npm install`
* Run the createCommandForConsoleGoogleMeet with teacher names as a parameter
    * `sh ./createCommandForConsoleGoogleMeet.sh "['Teacher 0001', 'Teacher 0002']"`
* After running the shell script, a text will be set to your clipboard. This is the command you have to paste in your on going google meeting session. Go to your browser, in your on going google meeting and paste the command into the browser console. For example:

```
var AttendanceReport_;(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{AttendanceReport:()=>r});class r{teacherNames=[];attendances=[];constructor(e){null!=e&&(this.teacherNames=e)}loadFromGoogleMeet(){return document.querySelectorAll("div[aria-label='Participants'] > div").forEach((e=>{try{let t=e.querySelector("div").querySelectorAll("div")[1].querySelector("div").innerText.split("\n")[0];this.teacherNames.includes(t)||t.includes("(You)")||this.attendances.push(t)}catch{}})),this}printAttendances(){this.attendances.sort(),console.log("Total participants "+this.attendances.length);let e="";this.attendances.forEach((t=>{e+=t+"\n"})),console.log(e)}}AttendanceReport_=t})();new AttendanceReport_.AttendanceReport(['Teacher 0001', 'Teacher 0002']).loadFromGoogleMeet().printAttendances()
```