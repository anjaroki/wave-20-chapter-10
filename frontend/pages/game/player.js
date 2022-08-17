import React from "react";
import scissors from "../../public/gunting.png";
import paper from "../../public/kertas.png";
import rock from "../../public/batu.png";
import Image from "next/image";

const Player = ({ weapon }) => (
  <>
    <div className="player">
      <Image className="player-image" src={weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper} alt="Rock Paper Scissors" />
    </div>
  </>
);

export default Player;
