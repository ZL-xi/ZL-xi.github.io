var eventArray = [
    "sp",
    "耳光",
    "边缘高潮",
    "控制高潮",
    "淫言浪语",
    "操屁眼",
    "虐乳",
    "淫荡照片",
    "跪",
    "剃毛",
    "狗狗真乖",
    "再来一次"
];

var eventWeight = [
    0.09,
    0.09,
    0.09,
    0.09,
    0.09,
    0.09,
    0.09,
    0.09,
    0.09,
    0.09,
    0.05,
    0.05
];

var eventLink = [
    "./Events/sp.html",
    "./Events/slap.html",
    "./Events/edging.html",
    "./Events/noOrgasm.html",
    "./Events/dirtyWord.html",
    "./Events/assFuck.html",
    "./Events/breastAbuse.html",
    "./Events/dirtyPhoto.html",
    "./Events/kneel.html",
    "./Events/shaving.html",
    "./",
    "./"
]

var singleEventLink = ""

function getEvent() {
    var num = Math.random(),
        s = 0,
        lastIndex = eventWeight.length;

    for (var i = 0; i < lastIndex; ++i) {
        s += eventWeight[i];
        if (num <= s) {
            $('#text').text(eventArray[i]);
            singleEventLink = eventLink[i];
            return;
        }
    }

}

$(document).ready(function() {
    $("#new-event").click(async function() {
        getEvent();
        var a = document.getElementById('pageLink'); 
        a.href = singleEventLink;
    });
  });

