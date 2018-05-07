                  function myFunction() {
          var x = document.getElementById("enabler");
          var y = document.getElementById("hider");
          if (y.style.display === "none") {
              y.style.display = "block";
              x.style.display = "none";
							event.preventDefault();
			}
			}
