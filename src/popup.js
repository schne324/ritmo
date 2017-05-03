// const queryAll = (selector, context) => {
//   context = context || document;
//
//   return Array.prototype.slice.call(
//     context.querySelectorAll(selector)
//   );
// };
//
// document.addEventListener('DOMContentLoaded', () => {
//   const speedButtonWrap = document.getElementById('speed-buttons');
//   const speedButtons = queryAll('button', speedButtonWrap);
//
//   speedButtons.forEach(button => {
//     const val = button.getAttribute('data-value');
//
//     button.addEventListener('click', () => {
//       chrome.tabs.query({
//         active: true,
//         currentWindow: true
//       }, tabs => {
//         chrome.tabs.sendMessage(tabs[0].id, {
//           speed: val
//         });
//       });
//     });
//   });
// });

(function () {
  'use strict';
  $('.slider')
    .electricSlide({
      label: '.slider-label',
      values: {
        min: 50,
        max: 350
      },
      initialValue: 100,
      increment: 10
    })
    .on('electricSlide:change', (e, container, handle) => {
      const valueNow = $(handle).attr('aria-valuenow');
      const val = parseInt(valueNow);
      console.log(val/100);
      // chrome.tabs.query({
      //   active: true,
      //   currentWindow: true
      // }, tabs => {
      //   chrome.tabs.sendMessage(tabs[0].id, { speed: val / 100 });
      // });

      $('.slider-label').text(valueNow);
    });
}());
