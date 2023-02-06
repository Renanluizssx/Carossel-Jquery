$(function () {
    $("#images").css({
        marginTop: "20px",
        display:"flex",
        alignItems: "center",
        justifyContent: "center"
    })
        $("#buttonone").click(
            function () {
                $("#seaone").fadeIn("fast")
                $("#seatwo").hide()
                $("#seathree").hide()
                $("#seafour").hide()
            }
        )
        $("#buttontwo").click(function () {gi
            $("#seatwo").fadeIn("fast")
            $("#seathree").hide()
            $("#seafour").hide()
            
        })
        $("#buttonthree").click(function () {
            $("#seaone").hide()
            $("#seatwo").hide()
            $("#seathree").fadeIn("fast")
            $("#seafour").hide()
        })
        $("#buttonfour").click(function () {
            $("#seaone").hide()
            $("#seatwo").hide()
            $("#seathree").hide()
            $("#seafour").fadeIn("fast")
        })
        $("#buttonfive").click(function () {
            $("#seaone").fadeIn("fast")
            $("#seatwo").fadeIn("fast")
            $("#seathree").fadeIn("fast")
            $("#seafour").fadeIn("fast")
        })

})