document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const seat = this.seat.value;
  const msg = document.getElementById('responseMsg');

  // Here you would normally send a request to your backend
  msg.textContent = `Thank you, ${name}! Your seat ${seat} has been booked.`;
  this.reset();
});