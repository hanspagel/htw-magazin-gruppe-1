// NOTE: function for menu 
$(document).ready(() => {
  // NOTE: .product-photo is the name of class. show is function
$('.product-photo').show()
// NOTE: #nav-dropdown is id
$('#nav-dropdown').hide();
// NOTE: anothe way how ti write
 const $navDropdown = $('#nav-dropdown').hide();
 // NOTE: at first we hide the element ant with next code want to on it
  const $menuButton = $('.menu-button');
  const $menuButton = $('.menu-button');
 const $navDropdown = $('#nav-dropdown');

 $menuButton.on('click', () => {
   $navDropdown.show();
 })

 $navDropdown.on('mouseleave', () => {
   $navDropdown.hide();
 })
});
// NOTE: if the mouse comes to area appera an element, if goes back - hide
$('.menu-button').on('mouseenter', () =>{
  $('.nav-menu').show()
})
$('.nav-menu').on('mouseleave', () => {
     $('.nav-menu').hide()
 })
