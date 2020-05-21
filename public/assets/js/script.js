$(function() {
    // Add
    $("#newBurger").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#newBurgerName").val().trim(),
            devoured: 0
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        });
    });

    // Update
    $(".devourBurger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = { devoured: 1 };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            location.reload();
        });
    });

    // Delete
    $(".removeBurger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function() {
            location.reload();
        });
    });
});