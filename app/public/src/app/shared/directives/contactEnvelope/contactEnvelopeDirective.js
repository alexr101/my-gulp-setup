angular.module('app')

.directive('contactEnvelope', function(){
  return {
    restrict: 'E',
    scope: {},
    replace: true,
    templateUrl: './app/components/contact/partials/contactEnvelope.html',
    link: function(scope, element, attrs){

      var $thanks = angular.element(document.getElementsByClassName('thanks'));
      var $reset = angular.element(document.getElementsByClassName('reset'));
      var $sendMe = angular.element(document.getElementsByClassName('send_me'));
      var $contactMe = angular.element(document.getElementsByClassName('contact_me'));
      var $contact = angular.element(document.getElementsByClassName('contact'));
      var $contactForm = angular.element(document.getElementsByClassName('contact_form'));
      var $topFlap = angular.element(document.getElementsByClassName('top_flap'));

      $thanks.hide();
      $sendMe.hide();

      $contactMe.on('click', openEnvelope);
      $reset.on('click', closeEnvelope);
      $sendMe.on('click', closeEnvelope);

      function openEnvelope(){
        $contact.animate({marginTop:'80px'}, 300);
        $topFlap.removeClass('close_sesame');
        $contactForm.delay(500).queue(function(){
          $contactForm.addClass('open_form').dequeue();
        })
        angular.element(this).fadeOut(300);
        $sendMe.fadeIn(300);
      }

      function closeEnvelope(){
        $contact.delay(800).animate({marginTop:'0px'}, 300);
        $topFlap.delay(800).queue(function(){
          angular.element(this).addClass('close_sesame').dequeue();
        });
        $contactForm.removeClass('open_form');
        $sendMe.fadeOut(300);
        $contactMe.fadeIn(300);
      }
    }
  }
})

// $('.reset,.send_me').on('click',function(){
//   $('.contact').delay(800).animate({marginTop:'0px'},300);
//   $('.top_flap').delay(800).queue(function(){$(this).addClass('close_sesame').dequeue();});
//   $('.contact_form').removeClass('open_form');
//   $('.send_me').fadeOut(300);
//   $('.contact_me').fadeIn(300);
// });

// $('.thanks, .send_me').hide();

// $('.contact_me').on('click',function(){
//   $('.contact').animate({marginTop:'80px'},300);
//   $('.top_flap').removeClass('close_sesame');
//   $('.contact_form').delay(500).queue(function(){$('.contact_form').addClass('open_form').dequeue();});
//   $(this).fadeOut(300);
//   $('.send_me').fadeIn(300);
// });