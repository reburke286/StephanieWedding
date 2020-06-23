$(document).ready(function () {
  //pictures.html code
  $(".picBtn").click(function () {
    const selectedFile = document.getElementById("pictures").files[0];
    console.log(selectedFile);
    $(".file-path").val("");
  });

  //gifts.html code
  // $(".giftBtn").click(function () {
  //   console.log("gift button");
  // });
  $(".datepicker").datepicker();

  $(".giftBtn").on("click", function (event) {
    event.preventDefault();

    // image file
    // const image = document.getElementById("#giftPic").files;

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

    const giftInfo = {
      name: $("#name").val(),
      gift: $("#gift").val(),
      date: $("#date").val(),
      address: $("#address").val(),
      // image: image,
      sent: sent,
    };
    console.log(giftInfo);

    const newRow = `<div class="col s9">
    <p>${giftInfo.name}</p>
  </div>
  <div class="col s3">
    <a class="btn red lighten-2 edit">
      <i class="material-icons">edit</i>
    </a>
  </div>`;
    $("#gifts").append(newRow);

    $("#name").val("");
    $("#gift").val("");
    $("#date").val("");
    $("#address").val("");
    $(".file-path").val("");
    $(".sent").prop("checked", false);
  });
});
