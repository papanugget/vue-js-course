// document.getElementById('greeting').innerHTML = "Hello from vanilla JS";

// $('#greeting').text('Hello from jQuery')

// new Vue({
//     el: '#app',
//     data: {
//         greeting: "Hello from Vue"
//     }
// });
const apiKey = 'z0YJP1kJd0Jg3INdrVgZffIc8CF7mDB1vVsqIPFw';
const url = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey;

// const vm = new Vue({
//     el: '#app',
//     data: {
//         email: 'grep@aol.com',
//         submitted: false
//     },
//     methods: {
//         process: function(e) {
//             // e.preventDefault();
//             // alert('Submitted' + this.email);
//             this.submitted = true;
//         }
//     }
// });
const vm = new Vue({
    el: '#app',
    data: {
        imgSrc: '',
        imgTitle: '',
        imgAlt: '',
        explanation: ''
    }
});
axios.get(url)
    .then(res => {
        vm.imgSrc = res.data.url,
        vm.imgTitle = res.data.title
        vm.explanation = res.data.explanation;
    });