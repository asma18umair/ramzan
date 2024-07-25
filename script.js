const countdown = () => {
    const ramzanDate = moment("2025-03-01"); // Example date for Ramzan 2025
    const now = moment();
    const duration = moment.duration(ramzanDate.diff(now));

    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
};

setInterval(countdown, 1000);
