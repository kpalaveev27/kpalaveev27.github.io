var all_photos = {};
all_photos["Across America"] = "000015430004.jpg";
all_photos["New England"] = "000263810014-2.jpg";
all_photos["Form and Function"] = "000017440027.jpg";

function show_title(photo_id) {
  var cur_photo_element = document.getElementById(photo_id);
  var cur_hidden_elements = cur_photo_element.querySelectorAll(".hidden_element");
  for (var i = 0; i <cur_hidden_elements.length; i++) {
    var cur_element = cur_hidden_elements[i];
    cur_element.removeAttribute("hidden");
  }
  alert(text);
}

function remove_title(photo_id) {
  var cur_photo_element = document.getElementById(photo_id);
  var cur_hidden_elements = cur_photo_element.querySelectorAll(".hidden_element");
  for (var i = 0; i < cur_hidden_elements.length; i++) {
    var cur_element = cur_hidden_elements[i];
    cur_element.hidden = true;
  }

  // var text_element = cur_element.querySelectorAll(".centered_text")[0];
  // text_element.hidden = true;
  // var background_element = cur_element.querySelectorAll(".transparent_background")[0];
  // background_element.hidden = true;
  alert(text);
}
