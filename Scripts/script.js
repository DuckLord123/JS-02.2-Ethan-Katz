function playGame() {
  let input = prompt("It's a duck! Will you:\n1. Pet the duck\n2. Attack the duck\n3. Feed the duck\n Choose wisely!");
  while (!(input == 1) && !(input == 2) && !(input == 3)) {
    input = prompt("Choose 1, 2, or 3! Will you:\n1. Pet the duck\n2. Attack the duck\n3. Feed the duck\n Choose wisely!");
  }
  switch(input) {
    case "1":
      if (Math.random() < 0.5) {
        alert("You pet the duck nicely, and it waddles away happily!\nYou win!");
      } else {
        alert("You accidentally slap the duck in the face and it attacks you, using the incredible power of Duck-jitsu!\nYou lose!")
      }
      break;
    case "2":
      if (Math.random() < 0.3) {
        alert("You try to attack the duck, but it's pure awesomeness holds you back.\nAfter a brief moment, you decide it best not to attack the duck.\nYou win!");
      } else {
        alert("You pick up a rock, a duck comes out of nowhere, and disarms you with a wing. You're surprised, but not done yet: You reach in your back pocket to get your sword, but 2 ducks fly out of the ground in front of you, and cut it in three with their beaks! Frustrated, you take out your crossbow, but before you can even load it, 6 ducks fly past your ears, and pull it away from you. Of course, however, you still have your flamethrower... wait... you always keep it in your front pocket, but it's not there! As you turn around to check if it fell out, you see 24 ducks off in the distance, dropping it into a nearby pond. You've had enough! You reach for the RPG in your pant leg, but 120 ducks fly by and steal not only the explosive, but also your pants. You call down your remote attack helicopter, but as it begins to land, 720 ducks fly through it and it explodes into a raging swarm of ducks. 5040 ducks fly by and carry you off. You are never seen again. \nYou lose!")
      }
    break;
      break;
    case "3":
      if (Math.random() < 0.7) {
        alert("You feed the duck, and it quacks at you happily!\nYou win!");
      } else {
        alert("You feed the duck, and it lets out a thunderous quack...\nIn seconds, you are surrounded by swarming ducks, all quacking angrily for more food! You won't be getting out of this anytime soon...\nYou lose!")
      }
      break;
    default:
      alert("Well, there was a bug, so I guess you win!")
  }
}
let playAgain = false;
while(true){
  playGame();

  playAgain = (prompt("Would you like to play again?\ny/n"));
  while (!(playAgain == "y") && !(playAgain == "n")){
    playAgain = (prompt("Enter y or n.\ny/n"));
  }
  if (playAgain == "n"){
    break;
  }
}
