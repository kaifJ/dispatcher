const socket = io();

socket.on("connect", () => {
  let dataToSend = { number: "8884059560" };
  socket.emit("userData", dataToSend);
});

socket.on("newMessage", message => {
  console.log(`Received Message: ${message}`);
});

socket.emit("sendMessage", { message: "Hey There Wassup" }, acknowledgement => {
  console.log(acknowledgement);
});
