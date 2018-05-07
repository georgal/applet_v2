var room = 1;
function education_fields() {

    room++;
    var objTo = document.getElementById('education_fields')
    var divtest = document.createElement("div");
	divtest.setAttribute("class", "form-group removeclass"+room);
	var rdiv = 'removeclass'+room;
    divtest.innerHTML = '<div class="form-group">Name<input class="form-control" placeholder="First name..." id="name" name="name[]" value=""></div><div class="form-group">Surname<input class="form-control" placeholder="Last name..." id="surname" name="surname[]" value=""></div><div class="input-group-btn"> <button class="btn btn-danger" type="button" onclick="remove_education_fields('+ room +');">-</button></div></div></div></div><div class="clear"></div>';

    objTo.appendChild(divtest)
}
   function remove_education_fields(rid) {
	   $('.removeclass'+rid).remove();
   }
