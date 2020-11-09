$(function(){
    $("#free").click(function(){
        let fName = $("#fName").val();
        let lName = $("#lName").val();
        let email = $("#email").val();
        let pass = $("#pass").val();
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (fName == "") {
            $("#fName").css("border", "2px solid red");
            $("#fNameAlert").css("visibility", "visible");
            $("#fNameImg").css("display", "inline");
        };

        if (lName == "") {
            $("#lName").css("border", "2px solid red");
            $("#lNameAlert").css("visibility", "visible");
            $("#lNameImg").css("display", "inline");
        };

        if (email == "") {
            $("#email").css("border", "2px solid red");
            $("#emailAlert").css("visibility", "visible");
            $("#emailImg").css("display", "inline");
        } else if (re.test(String(email).toLowerCase()) == false) {
            $("#emailAlert").css("visibility", "visible").text("Looks like this is not an email");
            $("#email").css("border", "2px solid red");
            $("#emailImg").css("display", "inline");
        };

        if (pass == "") {
            $("#pass").css("border", "2px solid red");
            $("#passAlert").css("visibility", "visible");
            $("#passImg").css("display", "inline");
        };  
    });
});