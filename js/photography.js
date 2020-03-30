var all_photos = {};
all_photos["Across America"] = "000015430004.jpg";
all_photos["New England"] = "000471250018.jpg";
all_photos["Form and Function"] = "000017440027.jpg";

var photos_1 = {};
photos_1["Across America"] = "000015430004.jpg";
photos_1["blonde girl"] = "000015440001.jpg";
photos_1["ping pong ball"] = "000020770019.jpg";

var photos_2 = {};
photos_2["New England"] = "000471250018.jpg";
photos_2["volleyball"] = "000023400029.jpg";
photos_2["door"] = "000359880023-2.jpg";

var photos_3 = {};
photos_3["Form and Function"] = "000017440027.jpg";
photos_3["eye ball"] = "000020770023-4.png";
photos_3["skyline"] = "74980019-Corrected.png";

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
