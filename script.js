document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('time');
    const dayElement = document.getElementById('day');

    function updateTime() {
        const now = new Date();
        timeElement.textContent = now.toUTCString().split(' ')[4];
        dayElement.textContent = now.toLocaleString('en-us', { weekday: 'long' });
    }

    updateTime();
    setInterval(updateTime, 1000);
});
