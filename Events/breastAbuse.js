var eventArray = [
    "20s",
    "30s",
    "40s"
];

var eventWeight = [
    0.3,
    0.4,
    0.3
];


function getEvent() {
    var num = Math.random(),
        s = 0,
        lastIndex = eventWeight.length;
    console.log(num);
    for (var i = 0; i < lastIndex; i++) {
        s += eventWeight[i];
        console.log(s);
        if (num <= s) {
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
