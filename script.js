document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("button");
    if (button) {
        button.addEventListener("click", booking);
    }
});

function booking() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const seating = document.getElementById("seating").value;
    const quantity = document.getElementById("quantity").value;
    
    const data = {
        name: name,
        email: email,
        seating: seating,
        quantity: quantity
    };

    alert("Booking complete, ${name}.\nYou have booked ${quantity} seats in the ${seating} section.\nAn email has been sent to ${email} with your booking details.");
}