var eventArray = [
    "shave"
];

var eventWeight = [
    1
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
