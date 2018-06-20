$(document)
    .ready(function () {

        //Container 01 Transform in space-evenly
        $("#spaceEvenly")
            .click(function () {
                $(".ex1Container").css("justify-content", "space-evenly")
            })
        //Transform in space-between
        $("#spaceAround").click(function () {
            $(".ex1Container").css("justify-content", "space-around")
        })
        //Transform in space-around
        $("#spaceBetween").click(function () {
            $(".ex1Container").css("justify-content", "space-between")
        })

        //Container 02 Transform to center justify
        $("#contentCenter").click(function () {
            $(".ex2Container").css("justify-content", "center")
        })
        //Transform to flex-end
        $("#contentEnd").click(function () {
            $(".ex2Container").css("justify-content", "flex-end")
        })
        //Transform to flex-start
        $("#contentStart").click(function () {
            $(".ex2Container").css("justify-content", "flex-start")
        })

        //Container 03 Transform to center justify
        $("#alignBaseline").click(function () {
            $(".ex3Container").css("align-items", "center")
        })
        //Transform to flex-end
        $("#alignEnd").click(function () {
            $(".ex3Container").css("align-items", "flex-end")
        })
        //Transform to flex-start
        $("#alignStart").click(function () {
            $(".ex3Container").css("align-items", "flex-start")
        })

        //Container 04 Transform to center justify
        $("#flexWrap").click(function () {
            $(".ex4Container").css("flex-wrap", "wrap")
        })
        //Transform to flex-end
        $("#noWrap").click(function () {
            $(".ex4Container").css("flex-wrap", "nowrap")
        })
        //Transform to flex-start
        $("#reverseWrap").click(function () {
            $(".ex4Container").css("flex-wrap", "wrap-reverse")
        })

    });