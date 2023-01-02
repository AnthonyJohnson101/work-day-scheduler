//doesnt manipulate dom until page is fully rendered
$(window).ready(function () {
  //gets current time and displays it
  $("#currentDay").text(dayjs().format("MMMM DD YYYY, h:mm:ss A"));

  //listener for saving user text to the time block
  $(".saveBtn").on("click", function() {

    //set variable for the user's input in the time block
    let userTextInput = $(this).siblings(".description").val();
    //set variable for time block
    let blockId = $(this).parent().attr("id")

    //moves input for each time block to local storage
    localStorage.setItem(blockId, userTextInput);

  });

  //pulls user text input from loacal storage and applies it to the time block
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-13 .description").val(localStorage.getItem("hour-13"))
  $("#hour-14 .description").val(localStorage.getItem("hour-14"))
  $("#hour-15 .description").val(localStorage.getItem("hour-15"))
  $("#hour-16 .description").val(localStorage.getItem("hour-16"))
  $("#hour-17 .description").val(localStorage.getItem("hour-18"))

  //changes color based on current time
  function displayColor () {
    let now = dayjs().format('HH');
    let timeBlocks = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    for (let i=0; i < timeBlocks.length; i++){
      if (timeBlocks[i] > now) {
        $(`#hour-${timeBlocks[i]}`).addClass('future');
      }
      if (timeBlocks[i] == now) {
        $(`#hour-${timeBlocks[i]}`).addClass('present');
      }
      if (timeBlocks[i] < now) {
        $(`#hour-${timeBlocks[i]}`).addClass('past');
      }

    }};

    displayColor();
   
});
