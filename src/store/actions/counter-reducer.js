import { Step } from "@mui/material";
import { createAction } from "@reduxjs/toolkit";

const counterIncrement = createAction("counter/increment"); //<= creacteaction nous demande une action qui couter/increment

const counterIncrementOld = (Step) => ({
  type: "counter/increment",
  payload: Step,
});
