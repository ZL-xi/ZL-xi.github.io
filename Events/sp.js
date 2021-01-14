var eventArray = [
    "20",
    "30",
    "40",
    "50"
];

var eventWeight = [
    0.25,
    0.3,
    0.3,
    0.15
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
