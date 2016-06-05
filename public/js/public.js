$(function () {
 // $.get('/blocks', appendToList);
 //
 // function appendToList(blocks){
 //   var  list = [],
 //        content,
 //        block;
 //
 //   for(var i in blocks){
 //     block = blocks[i];
 //     content = '<a href="/blocks/'+block+'">'+block+'</a>';
 //     content += ' <a data-block="'+block+'" href="#">DEL</a>';
 //     list.push($('<li>',{html:content}));
 //   }
 //   $('.block-list').append(list);
 // };

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
    });
  });


});
