$(document).ready(function(){

  var totalAmount = 13;

  $(".price li:contains('gluten')").fadeToggle();
  $(".price li:contains('sauce')").fadeToggle();

  $('.crust').toggleClass("crust-gluten-free");
  $('.btn-crust').toggleClass('active');


  $('.sauce').fadeToggle(200);
  $('.btn-sauce').toggleClass('active');

  $('.price strong').html('$'+totalAmount);

$('.btn-pepperonni').on('click', function(){
  $('.pep').fadeToggle(200);
  $('.btn-pepperonni').toggleClass('active');
  $(".price li:contains('pepperonni')").fadeToggle();
  if ('.btn-pepperonni' === 'active'){
    totalAmount+=1;
  }
  else{
    totalAmount-=1;
  }
});
  $('.btn-mushrooms').on('click', function(){
    $('.mushroom').fadeToggle(200);
    $('.btn-mushrooms').toggleClass('active');
    $(".price li:contains('mushroom')").fadeToggle();
});
  $('.btn-green-peppers').on('click', function(){
    $('.green-pepper').fadeToggle(200);
    $('.btn-green-peppers').toggleClass('active');
    $(".price li:contains('peppers')").fadeToggle();
});
  $('.btn-crust').on('click', function(){
    $('.crust').toggleClass("crust-gluten-free");
    $('.btn-crust').toggleClass('active');
    $(".price li:contains('gluten')").fadeToggle();
});
  $('.btn-sauce').on('click', function(){
    $('.sauce').fadeToggle(200);
    $('.btn-sauce').toggleClass('active');
    $(".price li:contains('sauce')").fadeToggle();
});



});
