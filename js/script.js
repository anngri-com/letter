$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var lastnameInput = $("input#lastname").val();
    var emailInput= $("input#email").val();
    var addressInput = $("input#address").val();

    $(".name").text(nameInput);
    $(".lastname").text(lastnameInput);
    $(".email").text(emailInput);
    $(".address").text(addressInput);

    $("#story").show();
    event.preventDefault();
  });

    $("#formTwo").submit(function(event) {
      var wordInput = $("input#word").val();
      var upperWord = wordInput.toUpperCase();

      $(".word").text(upperWord);

      $("#return").show();
      event.preventDefault();
    });
});
