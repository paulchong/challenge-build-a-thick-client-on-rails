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

var QuizController = {

  initialize: function() {
    QuizController.onPageLoad();
    $('.container').on('click', '.quiz a', QuizController.onQuizClick);
    // $('.container').on('click', '.quiz a', QuizController.onQuizClick);

  },

  onPageLoad: function() {
    // var quizView = new QuizView(data.quizzes[i]);
    // $('.content-area').append(quizView.render());
    $('.header').clone().appendTo('.title').text('Quizzes');
    $.ajax({url: '/quizzes.json', type: 'get'}).done(function(data){
      for (var i=0;i<data.quizzes.length;i++) {
        var $quizEl = $('.quiz').clone().appendTo('.content-area').text('')
        $('.quiz a').clone().appendTo($quizEl).text(data.quizzes[i].name);
      }
    })

  },

  onQuizClick: function() {
    var randNum = Math.floor((Math.random()*1000)+1);
    var quiz_id = 1 //still need to define
    var session_key = {session_key: randNum};
    $('.title > .header').remove();
    $('.content-area > .quiz').remove();

    $.ajax({url: '/quizzes/'+quiz_id+'/questions/next.json', type: 'get', data: session_key }).done(function(data){
      $('.header').clone().appendTo('.title').text(data.question.question);

      for (var i=0;i<data.question.choices.length;i++) {
        $('.quiz > a').clone().appendTo('.content-area').text(data.question.choices[i].choice).css('li');
      }
    })
  }

  // nextQuizClick: function() {

  // }
}

$(document).ready(QuizController.initialize);

// var QuizView = function(quizModel) {
// }

// var quizModel = {
// }



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

// $('some-selector').on('click', QuizController.onQuizClick)


// $(document).ready(function(){
//   console.log('working now')
//   QuizController
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