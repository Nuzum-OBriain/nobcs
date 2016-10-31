var socket = io("http://localhost:8081");
$(document).ready(function() {
    $("#send").click(function() {
        if($("#commentBoxType").val().length != 0) {
            $("#comments")
            .append("<div class = 'comment'>\
                         <div class = 'name'>"+$("#name").val() +"</div>"+
                         $("#commentBoxType").val()+
                    "</div>\
                    <hr>")
            //socket.emit("comment",{comment:$("#commentBoxType").val()});
            socket.emit("saveComments",{page:"<html>"+$("html").html()+"</html>"});
            socket.on("done",function() {
                location.reload();
            });
            $("#commentBoxType").val("");
        }else {
            alert("ComentBox is EmTy!")
        }
    })
});
