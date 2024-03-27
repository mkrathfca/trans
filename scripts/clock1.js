let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let h = day.getHours() * 30;
    let m = day.getMinutes() * 6;
    let s = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${h + (m / 12)}deg)`;
    mn.style.transform = `rotateZ(${m}deg)`;
    sc.style.transform = `rotateZ(${s}deg)`;

    //Digital Clock part
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    let hrs = day.getHours();
    let mnt = day.getMinutes();
    let scnd = day.getSeconds();
    let apm = (hrs < 12) ? "AM" : "PM";
    if (hrs > 12) {
        hrs = hrs - 12;
    }

    hrs = (hrs < 10) ? "0" + hrs : hrs;
    mnt = (mnt < 10) ? "0" + mnt : mnt;
    scnd = (scnd < 10) ? "0" + scnd : scnd;

    hours.innerHTML = hrs;
    minutes.innerHTML = mnt;
    seconds.innerHTML = scnd;
    ampm.innerHTML = apm;
})