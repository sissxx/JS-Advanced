function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minute = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let rotation = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }
    document.getElementById('daysBtn').addEventListener('click', onConvert);
    document.getElementById('hoursBtn').addEventListener('click', onConvert);
    document.getElementById('minutesBtn').addEventListener('click', onConvert);
    document.getElementById('secondsBtn').addEventListener('click', onConvert);

    function convert(value, unit) {

        let days = value / rotation[unit];

        return {
            days: days,
            hours: days * rotation.hours,
            minutes: days * rotation.minutes,
            seconds: days * rotation.seconds,
        }
    }

    function onConvert(event) {

        let input = event.target.parentElement.querySelector('input[type="text"]');
        let time = convert(Number(input.value), input.id);

        days.value = time.days;
        hours.value = time.hours;
        minute.value = time.minutes;
        seconds.value = time.seconds;

    }
}