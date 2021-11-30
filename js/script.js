// $(document).ready(function() {
//      var element = document.getElementById("welcome");
//      element.classList.toggle("pizza");
//   })

    $("button.try").click(function(event){
      event.preventDefault();
      $(".welcome").toggle();
      $(".pizza").toggle();
    });

    function myFunction(){
      var locationz = prompt("input your location here please to be delivered");
      if (locationz != null){
        alert('your order will be delivered at'+ locationz);

      }
    }
  $("button.orderz").click(function(event){
    event.preventDefault();

    var newSize = document.getElementById("sizet").value;
    var newTopping = document.getElementById("toppingz").value;
    var newCrust = document.getElementById("crust").value;
    var newNumber = document.getElementById("namba").value;

   if ( newSize== "large"){
     var sizem = 400;
   }
   else if (newSize=="medium"){
     var sizem = 300;
   }
   else if (newSize=="small"){
    var sizem = 200;
  }
  else{
    alert("enter correct value");

  }
   
  if(newTopping == "ham"){
    var topping = 300;
  }
  else if(newTopping == "BBQ-chicken"){
    var topping = 350;

  }
  else if(newTopping == "bacon"){
    var topping = 300;

  }
  else if(newTopping == "beef"){
    var topping = 350;

  }
  else if(newTopping == "brie"){
    var topping = 300;
  }
  else if(newTopping == "manchengo"){
    var topping = 300;
  }
  else if(newTopping == "parmessan"){
    var topping = 240;
  }
  else if(newTopping == "carrots"){
    var topping = 300;
  }
  else if(newTopping == "tomatoes"){
    var topping = 390;
  }
  else if(newTopping == "peas"){
    var topping = 300;
  }
  else if(newTopping == "olives"){
    var topping = 370;
  }
  else{
    alert("enter correct value");
  }

  if(newCrust == "crispy"){
    var crust = 200;
  }
  else if(newCrust == "stuffed"){
    var crust = 250; 
  }
  else if(newCrust == "gluten-free"){
    var crust = 240; 
  }
  else{
      alert("enter correct value");
    }
    var total = topping + crust + sizem;

     var final= total * newNumber;
      alert("YOUR ORDER IS "+final+"KSH")
      alert("PLEASE CLICK ORDER TO ENTER YOUR LOCATION ")
 
  

  
  });



