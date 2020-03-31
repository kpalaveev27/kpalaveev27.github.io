var num_colums = 3; //the number of columns in the all_photos page
var index = 0;

var all_titled_photos = {};
all_titled_photos["Across America"] = "000015430004.jpg";
all_titled_photos["New England"] = "000471250018.jpg";
all_titled_photos["Form and Function"] = "000017440027.jpg";

var all_photos = [];
all_photos.push("000015430004.jpg");
all_photos.push("000471250018.jpg");
all_photos.push("000017440027.jpg");
all_photos.push("000015440001.jpg");
all_photos.push("000023400029.jpg");
all_photos.push("000020770023-4.png");
all_photos.push("000020770019.jpg");
all_photos.push("000359880023-2.jpg");
all_photos.push("74980019-Corrected.png");

// var photos_1 = {};
// photos_1["Across America"] = "000015430004.jpg";
// photos_1["blonde girl"] = "000015440001.jpg";
// photos_1["ping pong ball"] = "000020770019.jpg";
//
// var photos_2 = {};
// photos_2["New England"] = "000471250018.jpg";
// photos_2["volleyball"] = "000023400029.jpg";
// photos_2["door"] = "000359880023-2.jpg";
//
// var photos_3 = {};
// photos_3["Form and Function"] = "000017440027.jpg";
// photos_3["eye ball"] = "000020770023-4.png";
// photos_3["skyline"] = "74980019-Corrected.png";

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
  alert(text);
}

function picture_left() {
  index -= 1;
  if (index < 0) {
    index = Object.keys(all_photos).length - 1;
  }
  document.getElementById("photo_display").innerHTML = get_code_for_photo();
}

function picture_right() {
  index += 1;
  if (index >= Object.keys(all_photos).length) {
    index = 0;
  }
  document.getElementById("photo_display").innerHTML = get_code_for_photo();
}

function go_to_all_pictures() {
  window.location.href = "/all_photos.html";
}

//THIS CODE INCLUDES THE TEXT ON THE PHOTOS

// function get_code_for_photo() {
//   var photo_id = "photo" + index;
//   var photo_name = Object.keys(all_photos)[index];
//   var photo_src = all_photos[photo_name];
//   var toReturn = "";
//   toReturn += '<div id="' + photo_id + '" class="photo_container full_page">';
//   toReturn += ('<img class="full_page" src="/photos/' + photo_src + '">');
//   toReturn +=('<div class="transparent_background">');
//   toReturn +=('<div class="transparent_text">' + photo_name + '</div>');
//   toReturn +=('<div id="click_left" onclick="picture_left()" class="clickable"></div>');
//   toReturn +=('<div id="click_middle" onclick="go_to_all_pictures()" class="clickable"></div>');
//   toReturn +=('<div id="click_right" onclick="picture_right()" class="clickable"></div>');
//   toReturn +=('</div></div>');
//   return toReturn;
// }

// function make_photo_columns() {
//   make_photo_column(photos_1);
//   make_photo_column(photos_2);
//   make_photo_column(photos_3);
// }

// function make_photo_column(cur_photos) {
//   document.write('<div class="photo_column">');
//   document.write('<div class="photo_display">');
//   for (var index=0; index < Object.keys(cur_photos).length; index++) {
//     var photo_id = "photo" + index;
//     var photo_name = Object.keys(cur_photos)[index];
//     var photo_src = cur_photos[photo_name];
//     document.write('<div id="' + photo_id + '" class="photo_container">');
//     document.write('<img src="/photos/' + photo_src + '">');
//     document.write('<div class="transparent_background">');
//     document.write('<div class="transparent_text">' + photo_name + '</div>');
//     document.write('</div></div>');
//   }
//   document.write('</div>');
//   document.write('</div>');
//   document.write(' '); //this puts space between columns
// }


//THIS CODE DOES NOT HAVE PHOTO TEXT
function get_code_for_photo() {
  var photo_id = "photo" + index;
  var photo_name = Object.keys(all_photos)[index];
  var photo_src = all_photos[photo_name];
  var toReturn = "";
  toReturn += '<div id="' + photo_id + '" class="photo_container full_page">';
  toReturn += ('<img class="full_page" src="/photos/' + photo_src + '">');
  toReturn +=('<div class="transparent_background">');
  toReturn +=('<div id="click_left" onclick="picture_left()" class="clickable"></div>');
  toReturn +=('<div id="click_middle" onclick="go_to_all_pictures()" class="clickable"></div>');
  toReturn +=('<div id="click_right" onclick="picture_right()" class="clickable"></div>');
  toReturn +=('</div></div>');
  return toReturn;
}

function make_photo_columns() {
  for (var i = 0; i < num_colums; i++) {
    make_photo_column(i);
  }
}

function make_photo_column(starting_index) {
  document.write('<div class="photo_column">');
  document.write('<div class="photo_display">');
  var cur_photos = all_photos
  for (var index=starting_index; index < Object.keys(cur_photos).length; index+=num_colums) {
    var photo_id = "photo" + index;
    var photo_name = Object.keys(cur_photos)[index];
    var photo_src = cur_photos[photo_name];
    document.write('<div id="' + photo_id + '" class="photo_container">');
    document.write('<img src="/photos/' + photo_src + '">');
    document.write('<div class="transparent_background"></div>');
    document.write('</div>');
  }
  document.write('</div>');
  document.write('</div>');
  document.write(' '); //this puts space between columns
}
