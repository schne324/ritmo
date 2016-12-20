const queryAll = (selector, context) => {
  context = context || document;

  return Array.prototype.slice.call(
    context.querySelectorAll(selector)
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const speedButtonWrap = document.getElementById('speed-buttons');
  const speedButtons = queryAll('button', speedButtonWrap);

  speedButtons.forEach(button => {
    const val = button.getAttribute('data-value');

    button.addEventListener('click', () => {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {
          speed: val
        });
      });
    });
  });
});
