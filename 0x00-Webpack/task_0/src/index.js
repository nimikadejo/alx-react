import $ from "jquery";

$(document).ready(function() {
    const paragraph1 = $("<p>").text("Holberton Dashboard");
    $("body").append(paragraph1);

    const paragraph2 = $("<p>").text("Dashboard data for the students");
    $("body").append(paragraph2);

    const paragraph3 = $("<p>").text("Copyright - Holberton School");
    $("body").append(paragraph3);
});