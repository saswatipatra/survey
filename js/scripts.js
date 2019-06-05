$(document).ready(function () {
  $("form").submit(function (event){
    var name = $("#name").val();
    var dob = parseInt($("#dob").val());
    var food = $("#food").val();
    var music = $("input:radio[name=music]:checked").val();
    var color = $("#color").val();

    // $(".output").text(name);

    event.preventDefault();
  });
});
