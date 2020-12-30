$(document).ready(() => {
  const $adventureButton = $('#plan-adventure-btn');

  // jQuery for adventure button to change words and colours on mouse enter, leave and click.
  let clicked = false;
  // event.currentTarget throws the actual element the user has moused over, could also us $adventureButton to specify.
  $adventureButton
    // When mouse over
    .on('mouseenter', (event) => {
      // If button has not been clicked
      if (clicked === false) {
        // Change text - '!' to '?'
        $('#button-link').html('Plan your own adventure?');
        // Remove the dark theme and add a light one
        $(event.currentTarget).removeClass('btn-dark');
        $(event.currentTarget).addClass('btn-light');
      }
    })
    .on('mouseleave', (event) => {
      if (clicked === false) {
        $('#button-link').html('Plan your own adventure!');
        $(event.currentTarget).removeClass('btn-light');
        $(event.currentTarget).addClass('btn-dark');
      }
    })
    .on('click', (event) => {
      clicked = true;
      $(event.currentTarget).removeClass('btn-light');
      $(event.currentTarget).removeClass('btn-dark');
      $(event.currentTarget).addClass('btn-success');
      $('#button-link').html('Lets go!');
    });
});
