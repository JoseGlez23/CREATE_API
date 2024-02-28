import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const resposeUser = await registerNewUser(body);
  res.send(resposeUser);
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const resposeUser = await loginUser({ email, password });

  if (resposeUser == "PASSWORD_INCORRECT") {
    res.status(403);
    res.send(resposeUser);
  } else {
    res.send(resposeUser);
  }
};

export { loginCtrl, registerCtrl };
