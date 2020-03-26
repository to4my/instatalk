import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log('Connected to RoomChannel')
  },

  disconnected() {
    console.log('Disconnected from RoomChannel')
  },

  received(data) {
    console.log('Received data: ' + data)
  },

  speak: function() {
    return this.perform('speak');
  }
});
