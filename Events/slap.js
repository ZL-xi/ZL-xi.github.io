var eventArray = [
    "10",
    "15",
    "20",
    "25"
];

var eventWeight = [
    0.3,
    0.3,
    0.25,
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
