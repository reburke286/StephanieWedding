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

    $(".sent").prop("checked", false);
  });
});
