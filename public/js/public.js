$(function () {

  $('.thankYouBlock').hide();

  $('form').on('submit',   function (e) {
    e.preventDefault();
    var form = $(this),
    data = form.serialize(),
    url = form.data('type');

    $.ajax({
      type: 'POST',
      url: '/'+url,
      data: data
    }).then(function (userData) {
      form.trigger('reset');
      updateBlock(form);
    });
  });

  /* Ui work on submission */

  var updateBlock = function (form) {
    form.hide();
    form.next('div').fadeIn();
  };

  $('.newAddition').on('click', function(e){
    e.preventDefault();
    var form  = $(e.currentTarget).parent().prev('form');
    var formType = form.data('type');
    form.next('.thankYouBlock').hide();
    $('form[data-type="'+formType+'"]').fadeIn();
  })

});
