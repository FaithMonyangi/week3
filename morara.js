    <script>
      function placeOrder() {
        let snack = prompt("What snack would you like to order?");
        let quantity = parseInt(
          prompt("What quantity would you like to order?")
        );
        let amountPayable = totalPrice(snack, quantity);
        alert("Amount payable: " + amountPayable);
      }
      function totalPrice(snack, quantity) {
        let price = 0;
        if (snack.toLowerCase() === "plain fries") {
          price = 200;
        } else if (snack.toLowerCase() === "fries chicken") {
          price = 500;
        } else if (snack.toLowerCase() === "samosa") {
          price = 80;
        } else if (snack.toLowerCase() === "sausages") {
          price = 100;
        } else if (snack.toLowerCase() === "burger") {
          price = 450;
        } else if (snack.toLowerCase() === "chicken wings") {
          price = 600;
        }
        return price * quantity;
      }
      let placeOrderButton = document.querySelector("button");
      placeOrderButton.addEventListener("click", placeOrder);
    </script>