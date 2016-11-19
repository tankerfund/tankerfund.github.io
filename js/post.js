$(function(){
  let content = $('.post-content');

  content.find('img').parent().css({'text-align': 'center'})

  content.find('img').ready(function() {
    content.find('img').css({'opacity': '1'})
  })
});
