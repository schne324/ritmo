(function () {
  'use strict';

  const getMediaElements = () => {
    return Array.prototype.slice.call(
      document.querySelectorAll('video, audio')
    );
  };

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const speed = request.speed;
    if (!speed) { return; }

    const mediaElements = getMediaElements();

    mediaElements.forEach(me => {
      me.playbackRate = parseFloat(speed);
      console.log(`setting speed to ${speed}`, me);
    });
  });
}());
