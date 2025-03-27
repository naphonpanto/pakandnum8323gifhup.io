function updateTime() {
    // เวลาที่ตั้งไว้
    const startTime1 = new Date('2021-07-21T22:55:00'); // 21/07/2021 10:55 PM
    const startTime2 = new Date('2023-03-08T20:30:00'); // 08/03/2023 08:30 PM

    // เวลาปัจจุบัน
    const currentTime = new Date();

    // คำนวณเวลาผ่านไป
    const elapsedTime1 = currentTime - startTime1;
    const elapsedTime2 = currentTime - startTime2;

    // ฟังก์ชันเพื่อแปลงเวลาเป็นปี, เดือน, วัน, ชั่วโมง, นาที, วินาที
    function formatTime(elapsed) {
        const seconds = Math.floor(elapsed / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const years = Math.floor(days / 365);
        const months = Math.floor((days % 365) / 30);

        return {
            years: years,
            months: months,
            days: days % 30,
            hours: hours % 24,
            minutes: minutes % 60,
            seconds: seconds % 60
        };
    }

    // อัปเดตเวลาที่แสดงใน HTML
    const time1 = formatTime(elapsedTime1);
    const time2 = formatTime(elapsedTime2);

    // แสดงผลในรูปแบบเดียวกัน (ปี : เดือน : วัน)
    document.getElementById('elapsed-time1').innerText = `${time1.years} years : ${time1.months} months : ${time1.days} days`;
    document.getElementById('elapsed-time2').innerText = `${time2.years} years : ${time2.months} months : ${time2.days} days`;

    // อัปเดตเวลาที่แสดงในกล่องเวลา
    document.getElementById('hours1').innerText = time1.hours;
    document.getElementById('minutes1').innerText = time1.minutes;
    document.getElementById('seconds1').innerText = time1.seconds;

    document.getElementById('hours2').innerText = time2.hours;
    document.getElementById('minutes2').innerText = time2.minutes;
    document.getElementById('seconds2').innerText = time2.seconds;
}

// เรียกใช้ฟังก์ชัน updateTime ทุกๆ วินาที
setInterval(updateTime, 1000);

// เริ่มอัปเดตทันทีเมื่อโหลดหน้าเว็บ
updateTime();
