(function() {
    function checkTime() {
        var now = new Date();
        var day = now.getDay(); // 0 is Sunday, ..., 5 is Friday, 6 is Saturday
        var hour = now.getHours();

        // בדיקה אם הזמן הוא בין שישי ב-20:00 לשבת ב-17:00
        var isBlockedTime = (day === 5 && hour >= 20) || (day === 6 && hour < 17);

        if (isBlockedTime) {
            // החלפת תוכן הדף בהודעה מתאימה וחסימת גלילה
            document.body.innerHTML = '<div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f4f4f4; color: #333; font-family: Arial, sans-serif; direction: rtl; text-align: center;"><h1>הדף אינו פעיל כעת</h1></div>';
            document.body.style.overflow = 'hidden';
        }
    }

    // הפעלת הבדיקה מיד כשהדף נטען
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkTime);
    } else {
        checkTime();
    }
    
    // בדיקה חוזרת כל דקה (60,000 מילישניות) למקרה שהזמן מתחלף בזמן שהדף פתוח
    setInterval(checkTime, 60000);
})();
