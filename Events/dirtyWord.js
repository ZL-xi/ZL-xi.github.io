var eventArray = [
    "母狗",
    "女仆",
    "性玩具",
    "反差婊"
];

var eventWeight = [
    0.25,
    0.25,
    0.25,
    0.25
];


function getEvent() {
    var num = Math.random(),
        s = 0,
        lastIndex = eventWeight.length;

    for (var i = 0; i < lastIndex; ++i) {
        s += eventWeight[i];
        if (num < s) {
            $('#text').text(eventArray[i]);
            return;
        }
    }

}

$(document).ready(function() {
    $("#new-event").click(async function() {
        getEvent();
    });
  });
