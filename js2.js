
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark");
  var change = document.getElementById("toggle");

                if (change.innerHTML == "светлая тема")
                {
                    change.innerHTML = "темная тема";  
                  change.style.backgroundColor = "#444444";
                  change.style.color = "#E5E5E5";
                }
                else {
                    change.innerHTML = "светлая тема";
                  change.style.backgroundColor = "#E5E5E5";
                  change.style.color ="#444444";
                }
   
            }


 