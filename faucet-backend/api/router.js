import express from "express";
import getNetworks from "./modules/networks.js";
import getBalance from "./modules/balance.js";
import transferBalance from "./modules/transfer.js";
import sendAmount from "./modules/amountPerRequest.js";

const router = express.Router();

router.route("/networks").get(getNetworks);
router.route("/balance").get(getBalance);
router.route("/transfer").post(transferBalance);
router.route("/sendamount").get(sendAmount);

// router.use("/user", userRouter);
export default router;
