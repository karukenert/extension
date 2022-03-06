import { createApp } from 'vue';
import Popup from './Popup.vue';

const MOUNT_EL_ID = 'attonex_clipper';

let mountEl = document.getElementById(MOUNT_EL_ID);
if (mountEl) {
  mountEl.innerHTML = '';
}
mountEl = document.createElement('div');

mountEl.setAttribute('id', MOUNT_EL_ID);
document.body.appendChild(mountEl);

const vm = createApp(Popup).mount(mountEl);
// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener((message) => {
  if (message.toggleVisible) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (vm as unknown).visible = !(vm as unknown).visible;
  }
});
