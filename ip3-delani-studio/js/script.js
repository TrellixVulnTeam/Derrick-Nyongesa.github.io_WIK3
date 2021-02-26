//What we do section
$("#design").click(function() {
    $(".description").toggle("slow");
    $("#img-1").toggle("slow");
});
  
$("#development").click(function() {
    $(".description-2").toggle("slow");
    $("#img-2").toggle("slow");
});
  
$("#product").click(function() {
    $(".description-3").toggle("slow");
    $("#img-3").toggle("slow");
});


  //Portfolio
$('.work1-overlay').hide();
$(".work2-overlay").hide();
$(".work3-overlay").hide();
$(".work4-overlay").hide();
$(".work5-overlay").hide();
$(".work6-overlay").hide();
$(".work7-overlay").hide();
$(".work8-overlay").hide();

$('.portfolio-1').mouseover(function() {
  $('.work1-overlay').show();
}).mouseout(function() {
  $('.work1-overlay').hide();
});
$(".portfolio-2").mouseenter(function() {
  $(".work2-overlay").show();
}).mouseleave(function() {
  $(".work2-overlay").hide();
});
$(".portfolio-3").mouseenter(function() {
  $(".work3-overlay").show();
}).mouseleave(function() {
  $(".work3-overlay").hide();
});
$(".portfolio-4").mouseenter(function() {
  $(".work4-overlay").show();
}).mouseleave(function() {
  $(".work4-overlay").hide();
});
$(".portfolio-5").mouseenter(function() {
  $(".work5-overlay").show();
}).mouseleave(function() {
  $(".work5-overlay").hide();
});
$(".portfolio-6").mouseenter(function() {
  $(".work6-overlay").show();
}).mouseleave(function() {
  $(".work6-overlay").hide();
});
$(".portfolio-7").mouseenter(function() {
  $(".work7-overlay").show();
}).mouseleave(function() {
  $(".work7-overlay").hide();
});
$(".portfolio-8").mouseenter(function() {
  $(".work8-overlay").show();
}).mouseleave(function() {
  $(".work8-overlay").hide();
});

//Contact-us section
$("form").submit(function(event){
    event.preventDefault();
   var name = $("input#mce-NAME").val();
   var email = $("input#mce-EMAIL").val();
   var message = $("textarea#mce-MESSAGE").val();
   var myModal = new bootstrap.Modal(document.getElementById('modal'), {backdrop: true});
 
   if (name && email){
     // alert (name + ", we have received your message. Thank you for reaching out to us.");
     $("#modal-body").html(name + ", we have received your message. Thank you for reaching out to us.");
     $("#modalLabel").html("Message received");
     myModal.show();
   }
   else {
     // alert("Please enter your name and email!");
     $("#modal-body").html("Please enter your name and email!");
     $("#modalLabel").html("Invalid input!");
     myModal.show();
   }
   
});