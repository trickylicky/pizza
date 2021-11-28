// $(document).ready(function() {
//      var element = document.getElementById("welcome");
//      element.classList.toggle("pizza");
//   })
// function myFunction() {
    // var x = document.getElementsByClassName("pizza");
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
    $("button.try").click(function(event){
      event.preventDefault();
      $(".welcome").toggle();
      $(".pizza").toggle();
    });

    function myFunction(){
      var locationz = prompt("input your locatio here please to be delivered");
      if (locationz != null){
        alert('your order will be delivered at'+ locationz);

      }
    }