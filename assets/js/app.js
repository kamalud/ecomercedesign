function increment_cart(){
  event.preventDefault();
  let input = event.currentTarget.previousElementSibling;
  input.value = parseInt(input.value) + 1;
}

function decrement_cart(){
    event.preventDefault();
    let input = event.currentTarget.nextElementSibling;
    input.value = parseInt(input.value) - 1;
  }