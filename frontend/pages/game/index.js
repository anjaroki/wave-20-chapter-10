import Head from "next/head";
import NavbarLayout from "../../components/NavbarLayout";
import Player from "./player";
import Link from "next/link";

export default function game() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
      </Head>
      <NavbarLayout>
        <h1 style={{ textAlign: "center" }}>Rock Paper Scissors</h1>
        <div className="text-center">
          <div>
            <Player weapon={playerOne} />
            <Player weapon={playerTwo} />
          </div>
          <div>
            <Link onClick={() => selectWeapon("rock")}>
              <Player weapon="rock" />
            </Link>
            <Link onClick={() => selectWeapon("paper")}>
              <Player weapon="paper" />
            </Link>
            <Link onClick={() => selectWeapon("scissors")}>
              <Player weapon="scissors" />
            </Link>
          </div>
          <div className="winner">{winner}</div>
          <div>
            <h1>Score: {score}</h1>
          </div>
        </div>
      </NavbarLayout>
    </>
  );
}
