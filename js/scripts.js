// (function($) {
//   $('#toggle-status').on('click', function() {
//     event.preventDefault();

//     $.ajax({
//       method: 'post',
//       url: api_vars.rest_url + 'wp/v2/posts/' + api_vars.post_id,
//       data: { post_status: 'draft' },
//       beforeSend: function(xhr) {
//         xhr.setRequestHeader('x-wp-nonce', api_vars.wpapi_nonce);
//       }
//     }).done(function() {
//       alert('Success! The status has been changed.');
//     });
//   });
// })(jQuery);

// beginning of example

// ajax old school version

// (function($) {
//     $('#toggle-status').on('click', function() {
//       event.preventDefault();

//       $.ajax({
//         method: 'post',
//         url: api_vars.ajax_url,
//         data: {
//           action: 'qod-status-ajax',
//           secrity: api_vars.status_nonce,
//           the_post_id: api_vars.post_id
//         }
//       }).done(function(response) {
//         alert('Success! The status has been changed.');
//       });
//     });
//   })(jQuery);

// end of example

(function($) {
  //doc ready short hand...
  $(function() {
    let lastPage = '';
    //events
    $('#quote-submission-form').on('submit', postQuote);

    $('#new-quote-button').on('click', getRandomQuote);

    function getRandomQuote(event) {
      event.preventDeafult();

      lastPage = document.URL;

      $.ajax({
        method: 'get',
        url:
          api_vars.rest_url +
          'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
      })

        .done(function(data) {
          const randomQuote = data[0];
          history.pushState(null, null, randomQuote.slug);
          $('#quote-submission-form').slideUp(500);

          //return the dom array
        })

        .fail(function(error) {
          console.log(error);
        });

      $(window).on('popstate', function() {
        window.location.replace(lastPage);
      });
    }
    function postQuote(event) {
      event.preventDeafult();
      console.log('form submitted');
      const quoteAuthor = $('#quote-author').val();
      if(quoteAuthor !== '')
      postAjax();
    }
    function postAjax(){
    $.ajax({
              method: 'post',
              url: api_vars.ajax_url + 'wp/v2posts',
              data: {
                title:'A new post',
                content: 'the most amazing quote by gordan ramsey',
                status: 'pending'
                // _qod_quote_source:
                // qod_quote_url:
              },beforeSend: function(xhr){
                xhr.setRequestHeader('X-WP-wpapi_nonce');
              }

  )}).done(function){

  }).fail(function)(){

  });})}(jQuery);
