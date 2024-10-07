let targetDate;

function setYear() {
    const year = document.getElementById('yearInput').value;
    if (year && year >= new Date().getFullYear()) {
        targetDate = new Date(`${year}-01-01T00:00:00`);
        updateCountDown(); // Start the countdown when the year is set
    } else {
        alert("Please enter a valid year greater than or equal to the current year.");
    }
}

function updateCountDown() {
    const now = new Date();
    
    // Ensure targetDate is set before calculating
    if (!targetDate) return;
    
    const diff = targetDate - now;
    
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;

        setTimeout(updateCountDown, 1000); // Continue updating every second
    } else {
        document.getElementById('countdown').innerHTML = "Time's up!";
    }
}
