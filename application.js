var Player = function (player_name){
this.position = 0;
this.name = player_name;
console.log(name);

console.log(track_length);

this.advance = function()
{
console.log("advance() invoked for player:" + this.name);
this.position = this.position + 10;
console.log("track_length: " + track_length);
console.log("position: " + this.position);
if (this.position == track_length){
console.log(this.name + " wins!")
$('.status').html("<div class=\"status\">" + this.name + " is the Winner!</div>")
 enable_race = false;
    }
}

this.reset = function()
{
this.position = 0;
}
}


function resetRace(){

$(".player").css("left", "0px");
return position;
}

$(document).ready(function() {

console.log("js ready");


window.track_length = 100;
window.enable_race = false;

  
var p1 = new Player("🐶");
var p2 = new Player("🐱");

  $("button.input").prop("disabled", true);
  $("#reset-button").css("display", "none");



$("#reset-button").click(function(){
position = p1.reset();
    position = p2.reset();
    resetRace();
    enable_race = true;
    $("button.input").prop("disabled", false);
    $("#reset-button").css("display", "none");
});

  $("#start-button").click(function(){
    position = p1.reset();
    position = p2.reset();
    resetRace();
    enable_race = true;
    $("button.input").prop("disabled", false);
  });

console.log(p1);
console.log(p1.name);
console.log(p1.position);

$("#advance-button-1").click(function(){
p1.advance();
console.log(p1.position);
$(".p1").css("left", p1.position);
    
   
    if (enable_race == false) {
      console.log("disabling buttons...");
      $("button.input").prop("disabled", true);
      $("#reset-button").css("display", "inline-block");
    }
});

  $("#advance-button-2").click(function(){
    p2.advance();
    console.log(p2.position);
    $(".p2").css("left", p2.position);
    
   
    if (enable_race == false) {
      console.log("disabling buttons...");
      $("button.input").prop("disabled", true);
      $("#reset-button").css("display", "inline-block");
    }
  });


});