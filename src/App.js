import React, { useState } from "react";
import Icon from "./components/Icon"; // Icon.js

//IMPORTING REACT - TOSTIFY
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// IMPORTING REACTSTRAP
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"; // App.css

// WE HAVE 9 DIFFERENT ICONS ON WHICH THE PLAYER CAN PLAY AND
// ALL 9 ICONS HAS SOMETHING ON TO THEM EITHER circle, cross, empty.
// WE ARE GOING TO START EMPTY i.e. AiTwotoneCloseCircle
const itemArray = new Array(9).fill("empty");

const App = () => {
  // STATES
  const [isCross, setIsCross] = useState(false); // false is the initial value
  const [winMessage, setWinMessage] = useState(""); // state to display who is the winner

  // METHOD TO RELOAD GAME
  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9); // Filling the empty value from start to end
  };

  // METHOD TO CHECK WINNER
  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMessage(`${itemArray[3]} Wins`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMessage(`${itemArray[6]} Wins`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMessage(`${itemArray[1]} Wins`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} Wins`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} Wins`);
    }
  };

  // METHOD TO CHANGE ITEM (after click)
  const changeItem = (itemNumber) => {
    // IF SOMEONE WINS
    if (winMessage) {
      return toast(winMessage, { type: "success" }); // toast is comming from toastify to show the message
    }

    if (itemArray[itemNumber] === "empty") {
      // EMPTY = AiTwotoneCloseCircle
      itemArray[itemNumber] = isCross ? "cross" : "circle"; // To check the player's card
      setIsCross(!isCross); // To switch the turns player by player
    } else {
      return toast("Already filled", { type: "error" });
    }

    checkIsWinner();
  };

  return (
    // CREATING A BASIC STRUCTURE OF TICTACTEO USING REACTSTRAP
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="md-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button
                className="mb-2"
                color="warning"
                block
                onClick={reloadGame}
              >
                Reload Game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-light">
              {isCross ? "FULL HEART's" : "EMPTY HEART's"} TURN
            </h1>
          )}

          <div className="grid">
            {itemArray.map((item, index) => (
              // .map is used because we want to loop through the itemArray
              <Card color="secondary" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
