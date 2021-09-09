/* eslint-disable no-undef */
const socket = io();

socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});
