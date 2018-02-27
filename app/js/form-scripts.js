function custom_alert( message, title ) {
    if ( !title )
        title = 'Alert';

    if ( !message )
        message = 'No Message to Display.';

    $('<div></div>').html( message ).dialog({
        title: title,
        resizable: false,
        modal: true,
        buttons: {
            'Ok': function()  {
                $( this ).dialog( 'close' );
            }
        }
    });
}

$("#contactForm").submit(function(event){
    // cancels the form submission
    //alert("Paso por submit event");
    event.preventDefault();
    submitForm();
});


function submitForm(){
    // Initiate Variables With Form Content
    //alert("Paso por ajax call");

    var name = $("#first-name").val();
    var lastName = $("#last-name").val();
    var phone = $("#phone-number").val();
    var email = $("#email").val();
    var message = $("#message").val();

    //console.log(name);
    //console.log(lastName);
    //console.log(phone);
    //console.log(email);
    //console.log(message);


    $.ajax({
        type: "POST",
        url: "php/mail.php",
        data: "name=" + name + "&lastName=" + lastName + "&phone=" + phone + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                //formSuccess();
                //alert("exito");
                custom_alert("La solicitud de información ha sido enviada correctamente. Recibirá una copia de la misma al correo especificado en el formilario.","¡Éxito!");
            } else {
                //formError();
                //submitMSG(false,text);
                //alert("fail");
                custom_alert("Ha ocurrido un error en el envío de la solicitud de información. Por favor intente de nuevo.","¡Error!");
            }
        }
    });

}
