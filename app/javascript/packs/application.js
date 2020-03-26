require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")


$(function() {
    console.log('Document is loaded');
});

$(document).on("turbolinks:load", function() {
    console.log('Document is loaded (turbolinks:load)');
})