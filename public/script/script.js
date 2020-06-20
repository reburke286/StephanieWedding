$(document).ready(function () {
  $(".pic").click(function () {
    console.log("pic button");
  });
  $(".gift").click(function () {
    console.log("gift button");
  });
  $(".datepicker").datepicker();

  $(".btn-large").on("click", function (event) {
    event.preventDefault();

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
    $(".sent").prop("checked", false);
  });
});
