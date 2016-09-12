function foldSignature(foldDuration) {
  $("#p_4, #p_5, #p_12, #p_13").css({
      "-webkit-animation-name": "fold1",
      "animation-name": "fold1",
      "-webkit-animation-fill-mode": "forwards",
      "animation-fill-mode": "forwards",
      "-webkit-animation-delay": "",
      "animation-delay": "",
      "-webkit-animation-duration": foldDuration / 3 + "s",
      "animation-duration": foldDuration / 3 + "s",});
  $("#p_8, #p_9").css({
      "-webkit-transform-origin": "bottom",
      "transform-origin": "bottom",
      "-webkit-animation-name": "fold2",
      "animation-name": "fold2",
      "-webkit-animation-fill-mode": "forwards",
      "animation-fill-mode": "forwards",
      "-webkit-animation-delay": foldDuration / 3 + "s",
      "animation-delay": foldDuration / 3 + "s",
      "-webkit-animation-duration": foldDuration / 3 + "s",
      "animation-duration": foldDuration / 3 + "s",});
  $("#p_16").css({
      "-webkit-transform-origin": "right",
      "transform-origin": "right",
      "-webkit-animation-name": "fold3",
      "animation-name": "fold3",
      "-webkit-animation-delay": (foldDuration / 3) * 2 + "s",
      "animation-delay": (foldDuration / 3) * 2 + "s",
      "-webkit-animation-duration": foldDuration / 3 + "s",
      "animation-duration": foldDuration / 3 + "s",});
}

function unfoldSignature(foldDuration) {
  $("#p_16").css({
      "-webkit-transform-origin": "right",
      "transform-origin": "right",
      "-webkit-animation-name": "unfold3",
      "animation-name": "unfold3",
      "-webkit-animation-delay": "",
      "animation-delay": "",
      "-webkit-animation-duration": foldDuration / 3 + "s",
      "animation-duration": foldDuration / 3 + "s",});
  $("#p_8, #p_9").css({
      "-webkit-transform-origin": "bottom",
      "transform-origin": "bottom",
      "-webkit-animation-name": "unfold2",
      "animation-name": "unfold2",
      "-webkit-animation-fill-mode": "backwards",
      "animation-fill-mode": "backwards",
      "-webkit-animation-delay": foldDuration / 3 + "s",
      "animation-delay": foldDuration / 3 + "s",
      "-webkit-animation-duration": foldDuration / 3 + "s",
      "animation-duration": foldDuration / 3 + "s",});
  $("#p_4, #p_5, #p_12, #p_13").css({
      "-webkit-animation-name": "unfold1",
      "animation-name": "unfold1",
      "-webkit-animation-fill-mode": "backwards",
      "animation-fill-mode": "backwards",
      "-webkit-animation-delay": (foldDuration / 3) * 2 + "s",
      "animation-delay": (foldDuration / 3) * 2 + "s",
      "-webkit-animation-duration": foldDuration / 3 + "s",
      "animation-duration": foldDuration / 3 + "s",});
}

function flipSignature(flipDuration) {
  $(".page-wrapper.front").css({
    "-webkit-animation-name": "flipB",
    "animation-name": "flipB",
    "-webkit-animation-duration": flipDuration + "s",
    "animation-duration": flipDuration + "s",});
  $(".page-wrapper.back").css({
    "-webkit-animation-name": "flipA",
    "animation-name": "flipA",
    "-webkit-animation-duration": flipDuration + "s",
    "animation-duration": flipDuration + "s",});
}

function flipSignatureBack(flipDuration) {
  $(".page-wrapper.front").css({
    "-webkit-animation-name": "flipA",
    "animation-name": "flipA",
    "-webkit-animation-duration": flipDuration + "s",
    "animation-duration": flipDuration + "s",});
  $(".page-wrapper.back").css({
    "-webkit-animation-name": "flipB",
    "animation-name": "flipB",
    "-webkit-animation-duration": flipDuration + "s",
    "animation-duration": flipDuration + "s",});
}

function turnSignature(turnDuration) {
  $(".signature-wrapper").css({
    "-webkit-animation-name": "turn",
    "animation-name": "turn",
    "-webkit-animation-duration": turnDuration + "s",
    "animation-duration": turnDuration + "s",});
}

function turnSignatureBack(turnDuration) {
  $(".signature-wrapper").css({
    "-webkit-animation-name": "turn-back",
    "animation-name": "turn-back",
    "-webkit-animation-duration": turnDuration + "s",
    "animation-duration": turnDuration + "s",});
}

var turnAction = 1;

function turnTurn(turnDuration) {
  if ( turnAction == 1 ) {
    turnSignature(turnDuration);
    turnAction = 2;
    $(".signature-wrapper").addClass("turned");
  } else {
    turnSignatureBack(1);
    turnAction = 1;
    $(".signature-wrapper").removeClass("turned");
  }
}

$("#turn").click(function() {
  if ( $(".page-wrapper").hasClass("folded") ) {
    unfoldSignature(1);
    foldAction = 1;
    $(".page-wrapper").removeClass("folded");
    turnTurn(1);
  } else {
    turnTurn(1);
  }
});

var foldAction = 1;

function foldUnfold() {
  $(".page-wrapper").removeAttr("style");
  if ( foldAction == 1 ) {
    foldSignature(2);
    foldAction = 2;
    $(".page-wrapper").addClass("folded");
  } else {
    unfoldSignature(2);
    foldAction = 1;
    $(".page-wrapper").removeClass("folded");
  }
}

$("#fold").click(function() {
  if ( ($(".page-wrapper").hasClass("front flipped")) || ( $(".signature-wrapper").hasClass("turned")) ) {
    setTimeout(function(){ foldUnfold(); }, 1200);
  } else {
    foldUnfold();
  }
  if ( $(".page-wrapper").hasClass("front flipped") ) {
    flipSignatureBack(1);
    $(".page-wrapper.back").addClass("flipped");
    $(".page-wrapper.front").removeClass("flipped");
    flipAction = 1;
  }
  if ( $(".signature-wrapper").hasClass("turned") ) {
    turnSignatureBack(1);
    $(".signature-wrapper").removeClass("turned");
    turnAction = 1;
  }


});

var flipAction = 1;

function flipFlip(flipDuration) {
  $(".page-wrapper").removeAttr("style");
  if ( flipAction == 1 ) {
    flipSignature(flipDuration);
    $(".page-wrapper.front").addClass("flipped");
    $(".page-wrapper.back").removeClass("flipped");
    flipAction = 2;
  } else {
    flipSignatureBack(flipDuration);
    $(".page-wrapper.back").addClass("flipped");
    $(".page-wrapper.front").removeClass("flipped");
    flipAction = 1;
  }
}

$("#flip").click(function() {
  if ( $(".page-wrapper").hasClass("folded") ) {
    unfoldSignature(1);
    foldAction = 1;
    $(".page-wrapper").removeClass("folded");
    setTimeout(function(){ flipFlip(1); }, 1000);
  } else {
    flipFlip(1);
  }
});

$("#print").click(function(){
  window.print();
});

$('select[name="resize"]').change(function(){

    var paperSize = $(this).val();

    if ( paperSize == "letter" ) {
      var padding = 77.2727;
      var width = 8.5;
      var height = 11;
      var adjustedDoubleWidth = 16.95;
      var units = "in";
    }
    if ( paperSize == "legal" ) {
      var padding = 60.7143;
      var width = 8.5;
      var height = 14;
      var adjustedDoubleWidth = 16.95;
      var units = "in";
    }
    if ( paperSize == "tabloid" ) {
      var padding = 64.7059;
      var width = 11;
      var height = 17;
      var adjustedDoubleWidth = 21.95;
      var units = "in";
    }
    if ( paperSize == "A4" ) {
      var padding = 64.7059;
      var width = 210;
      var height = 297;
      var adjustedDoubleWidth = 418;
      var units = "mm";
    }
    if ( paperSize == "A3" ) {
      var padding = 70.7143;
      var width = 297;
      var height = 420;
      var adjustedDoubleWidth = 592;
      var units = "mm";
    }

    // adjustedDoubleWidth is to create the double height page for printing in landscape mode,
    // less a little to account for variance that without this was causing three pages to print

    $("#page-size").html(
      ".signature-wrapper { padding-bottom: " + padding + "%; } @media print { @page { size: " + paperSize + " landscape; } body { width: " + height + units + "; height: " + adjustedDoubleWidth + units + "; } }"
    );

  });
