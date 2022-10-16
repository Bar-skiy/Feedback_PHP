$("#send").on("click", function () {
  let email = $("#email").val().trim();
  let name = $("#name").val().trim();
  let phone = $("#phone").val().trim();
  let message = $("#message").val().trim();

  if (email == "") {
    $("#errorMess").text("Enter email");
    return false;
  } else if (name == "") {
    $("#errorMess").text("Enter name");
    return false;
  } else if (phone == "") {
    $("#errorMess").text("Enter phone");
    return false;
  } else if (message == "") {
    $("#errorMess").text("Enter message");
    return false;
  }
  $("#errorMess").text("");

  $.ajax({
    url: "ajax/mail.php",
    type: "POST",
    cache: false,
    data: {'email': email, 'name': name, 'phone': phone, 'message': message},
    dataType: "html",
    beforeSend: function () {
      $("#send").prop("disabled", true);
    },
    success: function (data) {
      if (!data) 
        alert("Errors occurred, message not sent");
      else 
        $("#mailForm").trigger("reset");
        $("#send").prop("disabled", false);
    },
  });
});
