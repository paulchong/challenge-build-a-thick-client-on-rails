// A: Initial Page Load
//   - display a list of quizzes
//     - AJAX to server to get the quizzes
//     - append each quiz name to the DOM
//     - attach an event handler for (B) to the quiz name
// B: User Selects Quiz
//   - display the next question from the quiz
//     - AJAX to server to get the next question
//     - replace main content area with the question
//       - displaying the question
//       - displaying the choices

var Controller = function() {
    console.log('controller is being called');

}
Controller.prototype = {
  onPageLoad: function() {
    console.log('controller is being called');
    $.ajax({url: quizzes_path, type: 'get'}).done(function(){
      console.log('ajax call is working');
    })
    // ajax request
    // on done ... (in a loop)
    var quizView = new QuizView(data.quizzes[i]);
    $('.content-area').append(quizView.render());
  },

  onQuizClick: function() {
  }
}

// var quizModel = {
//   quiz_id: 1,
//   name: "Random Stuff"
// };

// var QuizView = function(quizModel) {
//   this.quizModel = quizModel;
// }

// QuizView.prototype.render = function() {
//   var $quizDiv = $('#templates .quiz').clone();
//   $quizDiv.find('.name').html(this.quizModel.name);
//   return $quizDiv;
// }

// $('some-selector').on('click', Controller.onQuizClick)

$(document).ready(Controller.onPageLoad);

// $(document).ready(function(){
//   console.log('working now')
//   Controller
// });


// $(document).ready(function(){
//   $('select-quiz').click(function(){
//     var quiz = new Quiz();
//   })


//   console.log('setup is working properly');

//   $('button').click(function(){
//     $.getJSON('https://api.github.com/users/paulchong', function(data){
//       console.log(data);
//     })
//   })

// })