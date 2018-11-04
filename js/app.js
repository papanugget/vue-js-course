// document.getElementById('greeting').innerHTML = "Hello from vanilla JS";

// $('#greeting').text('Hello from jQuery')

// new Vue({
//     el: '#app',
//     data: {
//         greeting: "Hello from Vue"
//     }
// });

const vm = new Vue({
    el: '#app',
    data: {
        email: 'grep@aol.com',
        submitted: false
    },
    methods: {
        process: function(e) {
            // e.preventDefault();
            // alert('Submitted' + this.email);
            this.submitted = true;
        }
    }
});