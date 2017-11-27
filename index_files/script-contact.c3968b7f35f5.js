$(document).ready(function() {
  // Flashes
  setTimeout(function(){
    $('.flash-success').fadeOut(250);
  }, 2500);

  setTimeout(function(){
    $('.flash-error').fadeOut(250);
  }, 5000);

  setTimeout(function(){
    $('.flash-info').fadeOut(250);
  }, 7500);

  setTimeout(function(){
    $('.flash-warning').fadeOut(250);
  }, 7500);

  var distance = 5;
  if (! $('.flash').hasClass('flash-no-top')) {
    $(window).scroll(function() {
      if ( $(window).scrollTop() >= distance ) {
        $('.flash').addClass('flash-no-top');
      } else {
        $('.flash').removeClass('flash-no-top');
      }
    });
  }
  
  $('.contact-button-open').click(function() {
    $('.outer-message-container').show(0, function() {
        $('body').animate({scrollTop:$('.outer-message-container').offset().top}, 'slow', function() {
          $("#id_name").focus();
          $('.contact').hide();
        });
      });
  });


  $('.contact-button-close').click(function() {
    console.log(" showed ")
    $('.contact').slideDown(0,function () {
      $('.outer-message-container').hide();
    });

    return false;

  });


  $('form').submit(function(event) {
    event.preventDefault();
  });

  $('#submit').click(function(event) {
      $form = $('form');
      $name = $('input[name=name]');
      $email = $('input[name=email]');
      $message = $('textarea[name=message]');

      var formData = {
          'name'    : $name.val(),
          'email'   : $email.val(),
          'message' : $message.val(),
      };

      // process the form
      $.ajax({
          type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
          url         : $form.attr('action'), // the url where we want to POST
          data        : $form.serialize(), // our data object
          traditional : true,
          beforeSend: function( xhr ) {
            window.message__submit_text = $('#submit').html();
            $('#submit').html('...');
          },
          success: function(ajaxResponse) {
                response = $.parseJSON(ajaxResponse);
                if(response.success) {
                  $('.message-content').html('<div class="big-message">' + response.message + '</div>');
                } else {
                  if(response.message == 'invalid') {
                    $('.message-content').html('<div class="big-message">' + window.message__something_wrong + '</div>');
                  } else {
                    $('#flash-message').html(response.message);
                    $('.flash-error').show();
                    setTimeout(function(){
                      $('.flash-error').fadeOut(250);
                    }, 2500);

                    errors = response.data;
                    if(errors.name) {
                      $name.addClass('error');
                    } else {
                      $name.removeClass('error');
                    }
                    if(errors.email) {
                      $email.addClass('error');
                    } else {
                      $email.removeClass('error');
                    }
                    if(errors.message) {
                      $message.addClass('error');
                    } else {
                      $message.removeClass('error');
                    }
                  }
                }
          },
          error: function(xhr){
            $('.message-content').html('<div class="big-message">' + window.message__something_wrong + '</div>');
          },
      }
    ).done(function( data ) {
      $('#submit').html(window.message__submit_text);
    });

  });
});
