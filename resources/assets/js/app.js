import Vue from 'vue';
import sample from './data';
import "core-js/fn/object/assign";

var app = new Vue({
    el: '#app',
    data: {
        title: sample.title,
        address: sample.address,
        about: sample.about,
        headerImageStyle: {
            'background-image': 'url(http://vuebnb.local/images/header.jpg)'
        },
        amenities: sample.amenities,
        prices: sample.prices,
        contracted: true,
        modalOpen: false,
        message: 'test'
    },
    watch: {
        modalOpen: function() {
            var className = 'modal-open';
            if (this.modalOpen) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    },
    methods: {
        escapeKeyListener: function(evt) {
          if (evt.keyCode === 27 && this.modalOpen) {
            this.modalOpen = false;
          }
        }
    },
    created: function() {
        document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed: function () {
        document.removeEventListener('keyup', this.escapeKeyListener);
    }
});