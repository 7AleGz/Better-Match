import React from "react";
import styles from "../styles/PlayerEvent.module.scss";
import out from "../assets/images/events/substitutes/out.svg";
import entry from "../assets/images/events/substitutes/in.svg";
import ball from "../assets/images/events/ball.svg";
import redBall from "../assets/images/events/redBall.svg";

const PlayerEvent = ({ events, player }) => {
  const playerEvents = events.filter(
    (event) =>
      event.player.id === player.player.id ||
      event.assist.id === player.player.id
  );

  const eventElements = playerEvents.map((event, index) => {
    if (event.type === "Goal") {
      return event.detail === "Normal Goal" &&
        event.player.id === player.player.id ? (
        <img key={`goal-${index}`} src={ball} className={styles.ball} />
      ) : event.detail === "Own Goal" &&
        event.player.id === player.player.id ? ( // own goal
        <img key={`goal-${index}`} src={redBall} className={styles.redBall} />
      ) : null;
    } else if (event.type === "Card") {
      return event.detail === "Yellow Card" &&
        event.player.id === player.player.id ? ( // No assist event (goal)
        <span key={`card-${index}`} className={styles.yellowCard}></span>
      ) : (
        <span key={`card-${index}`} className={styles.redCard}></span>
      );
    } else if (event.type === "subst") {
      return event.assist.id === player.player.id ? (
        <img src={out} key={`card-${index}`} className={styles.out} />
      ) : (
        <img src={entry} key={`card-${index}`} className={styles.in} />
      );
    }
    return null;
  });

  return <div>{eventElements}</div>;
};

export default PlayerEvent;
