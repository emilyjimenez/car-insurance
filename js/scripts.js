$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age) {

    var quote = (100 - age) * 3;
    if (gender === "male" && age < 26) {
      quote += 50;
    } else if (age >= 75) {
      quote += 100;
    }


    $("#rate").empty().append(quote);
    $("#quote").show();

    event.preventDefault();
  } else {
    alert("Please enter your age.")
  }
  });
});
