import { SendForgotPassowrdMailController } from "@modules/accounts/useCases/sendForgotPassowrdMail/SendForgotPassowrdMailController";
import { Router } from "express";

const passwordRoutes = Router();

const sendForgotPassowrdMailController = new SendForgotPassowrdMailController();

passwordRoutes.post("/forgot", sendForgotPassowrdMailController.handle);

export { passwordRoutes };
