
function off() {
  document.querySelectorAll(".ball").forEach(ball => {
    ball.classList.remove("piscar", "piscar_out");
    ball.classList.add("desligado")
  });
}

//function on() {
 // document.querySelectorAll(".ball").forEach(ball => {
  //  ball.classList.add("piscar", "piscar_out","psiscar");
 //   ball.classList.remove("desligado")
 // });
//}

function on() {
  for (let i = 1; i < 6; i++) {
    const balls = document.getElementsByClassName("ball" + i);

    for (let ball of balls) {
      ball.classList.add("piscar");
      ball.classList.remove("desligado")
    }
  }

  for (let i = 6; i < 13; i++) {
    const balls = document.getElementsByClassName("ball" + i);

    for (let ball of balls) {
      ball.classList.add("piscar_out");
      ball.classList.remove("desligado")
    }
  }
}
  const velocidade = document.getElementById("range");

range.addEventListener("input", () => { 
  let tempo = 10 - range.value 
  document.querySelectorAll(".ball").forEach(ball => {
    ball.style.animationDuration = `${tempo}s`;

  });
});





