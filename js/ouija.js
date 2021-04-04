var board_image, planchette_image;
var planchette_scale_factor = 2;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    board_image = loadImage('ouija_board/board.jpg');
    planchette_image = loadImage('ouija_board/planchette.png');
}

function draw() {
    // Displays the board filling up the whole screen
    image(board_image, 0, 0, width, height);

    // displayed the planchette scaled up by factor x
    var planchette_width = planchette_image.width * planchette_scale_factor;
    var planchette_height = planchette_image.height * planchette_scale_factor;
    image(planchette_image, mouseX - (planchette_width / 2), mouseY - (planchette_height / 2),planchette_width ,planchette_height);
}