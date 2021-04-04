var board_image, planchette_image;
var planchette_scale_factor = 2;
var screen_is_frozen = false;
var popup_window;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    board_image = loadImage('ouija_board/board.jpg');
    planchette_image = loadImage('ouija_board/planchette.png');
}

function draw() {
    if (!screen_is_frozen) {
        // Displays the board filling up the whole screen
        image(board_image, 0, 0, width, height);

        // displayed the planchette scaled up by factor x
        var planchette_width = planchette_image.width * planchette_scale_factor;
        var planchette_height = planchette_image.height * planchette_scale_factor;
        image(planchette_image, mouseX - (planchette_width / 2), mouseY - (planchette_height / 2),planchette_width ,planchette_height);
    }
}

function keyPressed() {
    print("key: [" + key + "]");
    if (key === ' ') { //space because it's easy
        screen_is_frozen = !screen_is_frozen;
    }

    if (key === 'p') { //p for popup
        popup_window = window.open("", "Portal Pop-up", "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,top=250,left=500,width=500,height=400");
        write_window();
    }

    if (key === 'm') { //m for modal
        openModel();
    }
}

function write_window() { //TODO: fill out with whatever is needed
    popup_window.document.write("<p>This is 'MsgWindow'. I am 500px wide and 400px tall!</p>");
    popup_window.document.write("<button>Close Portal</button>");
}

// for modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function openModel() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
