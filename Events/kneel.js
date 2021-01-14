var eventArray = [
    "20s",
    "30s",
    "40s"
];

var eventWeight = [
    0.4,
    0.4,
    0.2
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
