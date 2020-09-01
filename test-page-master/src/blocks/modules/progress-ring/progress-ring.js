"use strict";



    const circle = document.querySelector(".progress-ring__circle");
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    const smallCircle = document.querySelector(".progress-ring__circle--small");
    const smallRadius = smallCircle.r.baseVal.value;
    const smallCircumference = 2 * Math.PI * smallRadius;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    smallCircle.style.strokeDasharray = `${smallCircumference} ${smallCircumference}`;
    smallCircle.style.strokeDashoffset = smallCircumference;
    
    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
    }

    function setSmallProgress(smallPercent) {
        const smallOffset = smallCircumference - smallPercent / 100 * smallCircumference;
        smallCircle.style.strokeDashoffset = smallOffset;
    }
    
    setProgress(+circle.attributes["data-progress"].value);

    setSmallProgress(+smallCircle.attributes["data-progress"].value);




