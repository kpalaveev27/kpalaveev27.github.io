var num_colums = 3; //the number of columns in the all_photos page
var project_index = 0, internal_project_index = 0;

function is_valid_number(input) {
  var regex = new RegExp(/^[0-9]+$/i, );
  return regex.test(input);
}

function is_valid_project(input) {
  for (var i = 0; i < Object.keys(all_projects).length; i++) {
    if (Object.keys(all_projects)[i] == input) {
      return true;
    }
  }
  return false;
}

function remove_spaces(input) {
  return input.replace(/ /g, "_");
}

function replace_spaces(input) {
  return input.replace(/_/g, " ");
}

function get_index_of(element, dictionary) {
  for (var i = 0; i < Object.keys(dictionary).length; i++) {
    if (Object.keys(dictionary)[i] == element) {
      return i;
    }
  }
  return -1;
}

// var all_titled_photos = {};
// all_titled_photos["Across America"] = "000015430004.jpg";
// all_titled_photos["New England"] = "000471250018.jpg";
// all_titled_photos["Form and Function"] = "000017440027.jpg";
// all_titled_photos["Portraits"] = "000359890009-2.jpg";

var all_projects = {};
all_projects["Across America"] = ["000015430004.jpg", "000015410026.jpg", "000015420023.jpg", "000015430016.jpg"];
all_projects["New England"] = ["000471250018.jpg", "000263810014-2.jpg", "000263810027-2.jpg"];
all_projects["Form and Function"] = ["000017440027.jpg", "000017440023.jpg", "000020770019.jpg", "000020770023-3.jpg"];
all_projects["Portraits"] = ["000359890009-2.jpg", "000020770020.jpg", "000023400016.jpg"];

// var all_photos = [];
// all_photos.push("000015430004.jpg");
// all_photos.push("000471250018.jpg");
// all_photos.push("000017440027.jpg");
// all_photos.push("000015440001.jpg");
// all_photos.push("000023400029.jpg");
// all_photos.push("000020770023-4.png");
// all_photos.push("000020770019.jpg");
// all_photos.push("000359880023-2.jpg");
// all_photos.push("74980019-Corrected.png");

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
  // alert(text);
}

function remove_title(photo_id) {
  var cur_photo_element = document.getElementById(photo_id);
  var cur_hidden_elements = cur_photo_element.querySelectorAll(".hidden_element");
  for (var i = 0; i < cur_hidden_elements.length; i++) {
    var cur_element = cur_hidden_elements[i];
    cur_element.hidden = true;
  }
  // alert(text);
}

function picture_left(project_index) {
  project_index -= 1;
  if (project_index < 0) {
    project_index = Object.keys(all_projects).length - 1;
  }
  document.getElementById("photo_display").innerHTML = get_code_for_photo(project_index);
  window.location.href = "/projects.html#" + parseInt(project_index);
}

function picture_right(project_index) {
  project_index += 1;
  if (project_index >= Object.keys(all_projects).length) {
    project_index = 0;
  }
  document.getElementById("photo_display").innerHTML = get_code_for_photo(project_index);
  window.location.href = "/projects.html#" + parseInt(project_index);
}

function project_picture_left(project) {
  internal_project_index -= 1;
  if (internal_project_index < 0) {
    internal_project_index = Object.keys(all_projects[replace_spaces(project)]).length - 1;
  }
  document.getElementById("photo_display").innerHTML = get_code_for_photo_with_project(project, internal_project_index);
  window.location.href = "/photo_project.html#" + project + "/" + parseInt(internal_project_index);
}

function project_picture_right(project) {
  internal_project_index += 1;
  if (internal_project_index >= Object.keys(all_projects[replace_spaces(project)]).length) {
    internal_project_index = 0;
  }
  document.getElementById("photo_display").innerHTML = get_code_for_photo_with_project(project, internal_project_index);
  window.location.href = "/photo_project.html#" + project + "/" + parseInt(internal_project_index);
}

function go_to_all_pictures() {
  window.location.href = "/all_photos.html";
}

//THIS CODE INCLUDES THE TEXT ON THE PHOTOS

// function get_code_for_photo() {
//   var photo_id = "photo" + project_index;
//   var photo_name = Object.keys(all_photos)[project_index];
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
function get_code_for_photo(cur_index) {
  project_index = cur_index;
  var photo_id = "photo" + cur_index;
  var photo_name = Object.keys(all_projects)[cur_index];
  var edited_name = remove_spaces(photo_name);
  var photo_src = all_projects[photo_name][0];
  var toReturn = "";
  toReturn += '<div id="' + photo_id + '" class="photo_container full_page">';
  toReturn += ('<img class="full_page" src="/photos/for_website/' + photo_name + "/" + photo_src + '">');
  toReturn +=('<div class="transparent_background">');
  toReturn +=('<div class="transparent_text">' + photo_name + '</div>');
  toReturn +=('<div id="click_left" onclick="picture_left(' + cur_index + ')" class="clickable"></div>');
  toReturn +=('<div id="click_middle_for_project" onclick="go_to_project(\'' + edited_name + '\')" class="clickable"></div>');
  toReturn +=('<div id="click_right" onclick="picture_right(' + cur_index + ')" class="clickable"></div>');
  toReturn +=('</div></div>');
  return toReturn;
}

function get_code_for_photo_with_project(project, cur_index) {
  cur_index = parseInt(cur_index);
  internal_project_index = cur_index;

  var photo_id = "photo" + cur_index;
  // alert(project);
  // alert(all_projects[project]);
  // var photo_name = Object.keys(all_projects)[cur_index];
  // alert(photo_name);
  var edited_name = remove_spaces(project);
  var orig_name = replace_spaces(edited_name);
  alert(all_projects[orig_name][internal_project_index]);
  var photo_src = all_projects[orig_name][internal_project_index];
  var toReturn = "";
  toReturn += '<div id="' + photo_id + '" class="photo_container full_page">';
  toReturn += ('<img class="full_page" src="/photos/for_website/' + orig_name + '/' + photo_src + '">');
  toReturn +=('<div class="transparent_background">');
  // toReturn +=('<div class="transparent_text">' + photo_name + '</div>');
  toReturn +=('<div id="click_left" onclick="project_picture_left(\'' + edited_name + '\')" class="clickable"></div>');
  toReturn +=('<div id="click_middle" onclick="open_photo(\'' + get_index_of(orig_name, all_projects) + '\');" class="clickable"></div>');
  toReturn +=('<div id="click_right" onclick="project_picture_right(\'' + edited_name + '\')" class="clickable"></div>');
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
    document.write('<div id="' + photo_id + '" onclick="open_photo(' + index + ')" class="photo_container">');
    document.write('<img src="/photos/other/' + photo_src + '">');
    document.write('<div class="transparent_background"></div>');
    document.write('</div>');
  }
  document.write('</div>');
  document.write('</div>');
  document.write(' '); //this puts space between columns
}

function open_photo(photo_id_number) {
  // alert(parseInt(photo_id.split("photo")[1]));
  // index = photo_id_number;
  window.location.href = "/projects.html#" + photo_id_number;
  // alert(index);
}

function go_to_project(project_name) {
  // alert("got here");
  window.location.href = "/photo_project.html#" + project_name + "/0";
}
