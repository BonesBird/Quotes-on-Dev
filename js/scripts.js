(function($) {
  $('#toggle-status').on('click', function() {
    event.preventDefault();

    $.ajax({
      method: 'post',
      url: api_vars.rest_url + 'wp/v2/posts/' + api_vars.post_id,
      data: { post_status: 'draft' },
      beforeSend: function(xhr) {
        xhr.setRequestHeader('x-wp-nonce', api_vars.wpapi_nonce);
      }
    }).done(function() {
      alert('Success! The status has been changed.');
    });
  });
})(jQuery);

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

(function() {
  //doc ready short hand...
  $(function() {
    $('#new-quote-button').on('click', getRandomQuote);
    function getRandomQuote(event) {
      $.ajax({
        method: 'get',
        url:
          api_vars.rest_url +
          'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
      }).done(function(data) {});
    }
  });
  //end of doc ready
})(jQuery);
