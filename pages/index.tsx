import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  selectCounter,
} from "../redux/counter/counterSlice";

export default function Home() {
  const value = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <h1>{value}</h1>
        <ButtonGroup className="me-2" aria-label="First group">
          <Button onClick={() => dispatch(increment())}>Increase</Button>
          <Button onClick={() => dispatch(decrement())}>Decrease</Button>
          <Button className="btn btn-danger" onClick={() => dispatch(reset())}>
            Reset
          </Button>
        </ButtonGroup>
      </div>
    </React.Fragment>
  );
}
