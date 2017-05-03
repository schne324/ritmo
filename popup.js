'use strict';

const getDisplayTempo = (v) => `${Math.floor(parseFloat(v) * 100)}%`;
const getTab = () => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, (tabs) => {
      if (!tabs.length) { return reject('No tab found'); }
      return resolve(tabs[0]);
    });
  });
};
const sendSpeed = (speed) => {
  getTab().then((tab) => {
    if (!tab) { return}
    chrome.tabs.sendMessage(tab.id, {
      speed: speed
    });
  }).catch((err) => console.error(err));
};

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');
  const helper = document.getElementById('tempo');
  const initialVal = localStorage.getItem('ritmo') || '1.0';
  // set initial value
  slider.value = initialVal;
  helper.innerHTML = getDisplayTempo(initialVal);
  sendSpeed(initialVal);

  slider.addEventListener('change', () => {
    const val = slider.value;

    localStorage.setItem('ritmo', slider.value);
    helper.innerHTML = getDisplayTempo(val);

    sendSpeed(val);
  });
});
