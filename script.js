function calculateDays() {
    let currentTime = Date.now();
    let dob = document.getElementById("dob").value;
    let persedDob  = parseInt(dob);
    const dateDisplayer = document.getElementById("daysOld")

    
    if (isNaN(persedDob)) {
        console.log("no date")
        dateDisplayer.innerText = "Please enter your date of birth"
    } else {
        let timeDiff = currentTime = new Date(dob)
        const daysOld = Math.round(timeDiff / 1000 / 60 / 60 / 24)
        dateDisplayer.innerText = `You are officially ${daysOld} 🎉days old`;

    }

}

