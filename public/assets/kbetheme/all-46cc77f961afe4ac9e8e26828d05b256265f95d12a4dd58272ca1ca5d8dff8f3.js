(function() {
  var load_missing_content, setup_listener;

  $(function() {
    setup_listener();
    return load_missing_content();
  });

  setup_listener = function() {
    $(document).on('progressive_render:end', load_missing_content);
    $(document).on('ajax:end', load_missing_content);
    if (window.Turbolinks) {
      return $(document).on('turbolinks:load', load_missing_content);
    }
  };

  load_missing_content = function() {
    return $('[data-progressive-render-placeholder=true]').each(function() {
      var $this;
      $this = $(this);
      $this.attr('data-progressive-render-placeholder', false);
      return $.ajax({
        url: $this.data('progressive-render-path'),
        cache: false,
        success: function(response) {
          $this.html(response);
          return $(document).trigger('progressive_render:end');
        }
      });
    });
  };

}).call(this);
// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//


;
