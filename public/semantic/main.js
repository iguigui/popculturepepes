$(document).ready(function() {
  $("#events-tab.tabs.menu .item").tab();

  $("#event-detail-tabs.tabs.menu .item").tab();

  $("#venue-tabs.tabs.menu .item").tab();

  $(".lang-dropdown").dropdown();

  $(".currency-dropdown").dropdown();

  $(".sort-dropdown").dropdown();

  $(".popular-dropdown").dropdown();

  $(".action-dropdown").dropdown();

  $(".ui.accordion").accordion();

  $(".ui.radio.checkbox").checkbox();

  $("#add_ticket_price_Modal").click(function() {
    $(".ticket_price_modal").modal("show");
  });

  $("#add_ticket_type_Modal").click(function() {
    $(".ticket_type_modal").modal("show");
  });
});

$(document).on("click", ".search", function() {
  $("#input_test").val("test");
  $(this)
    .popup({
      popup: $("#content"),
      on: "click",
    })
    .popup("show");
});
