//下面的字点击事件
$(".word").click(function () {
    if ($(".cell").text().length == $(".cells").children().length){
        return
    }
    else {
        for (var i = 0; i < $(".cell").length; i++) {
            var frame = $(".cells").children().eq(i);
            if (frame.text() == "") {
                frame.text($(this).text());
                break;
            }
        }
        $(this).text("");
        frame.attr("wordId",$(this).attr("id"));

    }

});
//框框点击事件
$(".cell").click(function () {
    if ($(this).text() == "")
        return
    else {
        for(var j = 0;j < $(".word").length; j++){
            var id = $(".words").children().eq(j).attr("id");
            if (id == $(this).attr("wordId")) {
                $(".words").children().eq(j).text($(this).text());
                $(this).text("");
            }
        }
    }
});