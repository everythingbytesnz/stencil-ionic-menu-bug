'use strict';

const index = require('./index-eff8f523.js');
const helpers = require('./helpers-d7660b7e.js');

const startStatusTap = () => {
  const win = window;
  win.addEventListener('statusTap', () => {
    index.readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = el.closest('ion-content');
      if (contentEl) {
        new Promise(resolve => helpers.componentOnReady(contentEl, resolve)).then(() => {
          index.writeTask(() => contentEl.scrollToTop(300));
        });
      }
    });
  });
};

exports.startStatusTap = startStatusTap;
