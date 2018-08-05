$(document).ready(function() {
    $("#add_form").validate({
        rules: {
            input_account: "required",
            input_code:"required",
            R_input_code:{
                equalTo: "#input_code"
            },
            input_platform:"required"
        },

        messages: {
            input_account: "Please enter the account",
            input_code: "Please enter the code",
            R_input_code: {
                equalTo: "different from code above"
            },
            input_platform:"Please enter the platform"
        }
    });
});