import React from "react";
import Box from "@mui/material/Box";
import ExchangeFrom from "./ExchangeFrom";
import { Container } from "@mui/system";
const DUMMY_RATES = [
  {
    id: "USD",
    rates: [
      { name: "GBP", rate: 0.49246 },
      { name: "CAD", rate: 0.98054 },
      { name: "EUR", rate: 0.70641 },
      { name: "AUD", rate: 1.12362 },
    ],
  },
  {
    id: "GBP",
    rates: [
      { name: "USA", rate: 2.03032 },
      { name: "CAD", rate: 1.99169 },
      { name: "EUR", rate: 1.43448 },
      { name: "AUD", rate: 2.29964 },
    ],
  },
  {
    id: "CAD",
    rates: [
      { name: "USA", rate: 1.01941 },
      { name: "GBP", rate: 0.50221 },
      { name: "EUR", rate: 0.72037 },
      { name: "AUD", rate: 1.15498 },
    ],
  },
  {
    id: "EUR",
    rates: [
      { name: "USA", rate: 0.88297 },
      { name: "GBP", rate: 0.43497 },
      { name: "CAD", rate: 0.88613 },
      { name: "AUD", rate: 0.62382 },
    ],
  },
  {
    id: "AUD",
    rates: [
      { name: "USA", rate: 0.49246 },
      { name: "GBP", rate: 0.98054 },
      { name: "CAD", rate: 0.70641 },
      { name: "EUR", rate: 1.12362 },
    ],
  },
];
const DUMMY_COUNTRY = [
  { id: 1, name: "USD" },
  { id: 2, name: "GBP" },
  { id: 3, name: "CAD" },
  { id: 4, name: "EUR" },
  { id: 5, name: "AUD" },
];
function Exchange() {
  return (
    <Container>
      <Box mt={20}>
        <ExchangeFrom Rates={DUMMY_RATES} country={DUMMY_COUNTRY} />
      </Box>
    </Container>
  );
}

export default Exchange;
