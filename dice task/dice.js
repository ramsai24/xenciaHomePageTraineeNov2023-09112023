let dice1 = document.getElementById("player1");
let dice2 = document.getElementById("player2");
let cube = document.getElementById("cube");
let result = document.getElementById("result");

cube.onclick = function cube() {
  const getRandomNumber1 = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomNumber2 = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let player1 = getRandomNumber1(1, 6);
  console.log(player1);

  let player2 = getRandomNumber2(1, 6);
  console.log(player2);

  if (player1 > player2) {
    console.log("player1 is winnner");
    result.textContent = "Player 1 is winner";
  } else if (player1 < player2) {
    console.log("player2 is winner");
    result.textContent = "Player 2 is winner";
  } else {
    console.log("Draw");
    result.textContent = "Draw";
  }

  // console.log(10+10+'23'+10)

  if (player1 === 1) {
    dice1.src =
      "https://res.cloudinary.com/daoquetki/image/upload/v1702462728/dice/mfy1kqwwluhx0qrau9xe.jpg";
  } else if (player1 === 2) {
    dice1.src =
      "https://res.cloudinary.com/daoquetki/image/upload/v1702462728/dice/i9sq5sjwagnrrv9weeyj.jpg";
  } else if (player1 === 3) {
    dice1.src =
      "https://res.cloudinary.com/daoquetki/image/upload/v1702462728/dice/ppqqbq2rt6tg38vmgs1p.jpg";
  } else if (player1 === 4) {
    dice1.src =
      "https://res.cloudinary.com/daoquetki/image/upload/v1702462729/dice/psk27on2dmkmgkfjrzvi.jpg";
  } else if (player1 === 5) {
    dice1.src =
      "https://res.cloudinary.com/daoquetki/image/upload/v1702462729/dice/bno4vb9c10rz5yx01xpd.jpg";
  } else if (player1 === 6) {
    dice1.src =
      "https://res.cloudinary.com/daoquetki/image/upload/v1702462729/dice/bno4vb9c10rz5yx01xpd.jpg";
  }

  switch (player2) {
    case 1:
      dice2.src =
        "https://res.cloudinary.com/daoquetki/image/upload/v1702462728/dice/mfy1kqwwluhx0qrau9xe.jpg";
      break;
    case 2:
      dice2.src =
        "https://res.cloudinary.com/daoquetki/image/upload/v1702462728/dice/i9sq5sjwagnrrv9weeyj.jpg";
      break;
    case 3:
      dice2.src =
        "https://res.cloudinary.com/daoquetki/image/upload/v1702462728/dice/ppqqbq2rt6tg38vmgs1p.jpg";
      break;
    case 4:
      dice2.src =
        "https://res.cloudinary.com/daoquetki/image/upload/v1702462729/dice/psk27on2dmkmgkfjrzvi.jpg";
      break;
    case 5:
      dice2.src =
        "https://res.cloudinary.com/daoquetki/image/upload/v1702462729/dice/bno4vb9c10rz5yx01xpd.jpg";
      break;
    case 6:
      dice2.src =
        "https://res.cloudinary.com/daoquetki/image/upload/v1702462729/dice/bno4vb9c10rz5yx01xpd.jpg";
      break;
  }
};
