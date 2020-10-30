import express from "express";
import { promises } from "fs";

const { readFile, writeFile } = promises;
const router = express.Router();

router.post("/", async (req, res) => {
  const json = JSON.parse(await readFile("lancamentos.json"))
  
});

export default router;
//module.exports = router;
