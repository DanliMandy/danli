
$(".word").click(function () {
    for (var i = 0; i < $(".cell").length; i++) {
        var frame = $(".cells").children().eq(i);
        if (frame.text() == "") {
            frame.text($(this).text());
            break;
        }
    }
    $(this).text("");
    frame.attr("word",$(this).attr("id"));
});
$(".cell").click(function () {
    for(var j = 0;j < $(".word").length; j++){
        var word = $(".words").children().eq(j).attr("id");
        if (word == $(this).attr("word")) {
            $(".words").children().eq(j).text($(this).text());
            $(this).text("")
        }

    }


});