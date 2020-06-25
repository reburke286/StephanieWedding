$(document).ready(function () {
  //Materialize jQuery
  $(".datepicker").datepicker();

  //Variables

  //sent radio button
  const sentNoVar = $("#sentNo").prop("checked");

  const sentYesVar = $("#sentYes").prop("checked");

  let sent;
  if (sentNoVar) {
    sent = "no";
  } else if (sentYesVar) {
    sent = "yes";
  } else {
    sent = "";
  }

  const image = document.getElementById("giftPic").files;

  const giftInfo = {
    name: $("#name").val(),
    gift: $("#gift").val(),
    date: $("#date").val(),
    address: $("#address").val(),
    image: image,
    sent: sent,
  };
  // const selectedFile = document.getElementById("pictures").files[0];

  //when you hit Submit for New Gift
  function giftButtonSubmit() {
    if (!giftInfo) {
      return;
    } else {
      addNote(giftInfo);
      appendNewRow();
    }

    console.log(giftInfo);
  }

  //posts new row into Table
  function addNote(data) {
    $.post("/api/notes", data).then(() => {
      $("#name").val("");
      $("#gift").val("");
      $("#date").val("");
      $("#address").val("");
      $(".file-path").val("");
      $(".sent").prop("checked", false);
    });
  }

  // adds new Note info to page
  function appendNewRow() {
    const newRow = `<div class="col s9">
      <p>${giftInfo.name}</p>
    </div>
    <div class="col s3">
      <a class="btn red lighten-2 edit">
        <i class="material-icons">edit</i>
      </a>
    </div>`;

    $("#gifts").append(newRow);
  }

  //pictures.html code
  $(".picBtn").click(function (e) {
    e.preventDefault();
    console.log(selectedFile);
    $(".file-path").val("");
  });

  //gift.html code
  $(".giftBtn").click(function (e) {
    e.preventDefault();
    giftButtonSubmit();
  });
});
