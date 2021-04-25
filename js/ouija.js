var board_image, planchette_image;
var planchette_scale_factor = 2;
var screen_is_frozen = false;
var popup_window;
var cursor_is_visible = true;

function toggle_cursor() {
    if (cursor_is_visible) {
        cursor_is_visible = false;
        document.body.style["cursor"] = "none";
    } else {
        cursor_is_visible = true;
        document.body.style["cursor"] = "default";
    }
}

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
        popup_window = window.open("https://kpalaveev27.github.io/countdown.html", "Portal Pop-up", "scrollbars=no,status=no,location=no,toolbar=no,menubar=no,top=250,left=500,width=800,height=500");
        // write_window();
    }

    if (key === 'm') { //m for modal
        openModel();
    }

    if (key === '1') { //call ended
        makeModal("paracomm_graphics/Call Ended.png");
    }

    if (key === '2') { //close portal
        makeModal("paracomm_graphics/Close Portal.png");
    }

    if (key === '3') { //generic error
        makeModal("paracomm_graphics/Generic Error.png");
    }

    if (key === '4') { //incoming call
        makeModal("paracomm_graphics/Incoming Call.png");
    }

    if (key === '5') { //scare achieved
        makeModal("paracomm_graphics/Scare Achieved.png");
    }

    if (key === '6') { //scare counter base
        makeModal("paracomm_graphics/Scare Counter Base.png");
    }

    if (key === '7') { //scare failed
        makeModal("paracomm_graphics/Scare Failed Error.png");
    }

    if (key === 'c') { //cursor
        toggle_cursor();
    }
}

// function write_window() { //TODO: fill out with whatever is needed
//     popup_window.document.write("<p>This is 'MsgWindow'. I am 500px wide and 400px tall!</p>");
//     popup_window.document.write("<button>Close Portal</button>");
// }

// When the user clicks, close the most recent modal
window.onclick = function(event) {
    i = modal_counter - 1;
    if (document.getElementById("modal" + i)) {
        document.body.removeChild(document.getElementById("modal" + i));
        modal_counter -= 1;
        if (modal_counter === 0) {
            screen_is_frozen = false;
        }
    }
}

modal_counter = 0;
multiplier = 20;
function makeModal(image_src) {
    modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    modal.setAttribute("id", "modal" + modal_counter);
    modal_counter += 1;
    modal_content = document.createElement("div");
    modal_content.setAttribute("class", "modal-content");
    close_button = document.createElement("span");
    close_button.setAttribute("class", "close");
    close_button.setAttribute("innerHTML", "&times;");
    new_image = document.createElement("img");
    // new_image.setAttribute("src", "ouija_board/board.jpg");
    new_image.setAttribute("src", image_src);

    new_image.style["padding-left"] += (modal_counter * multiplier) + "px";
    new_image.style["padding-top"] += (modal_counter * multiplier) + "px";

    modal.appendChild(modal_content);
    modal_content.appendChild(close_button);
    modal_content.appendChild(new_image);
    document.body.insertBefore(modal, document.getElementsByTagName("main")[0]);

    if (modal_counter > 0) {
        screen_is_frozen = true;
    }
}