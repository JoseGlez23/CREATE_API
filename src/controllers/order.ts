import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { handleHttp } from "../utils/error.handle";



const getItems = (req: JwtPayload, res: Response) => {
  try {
    res.send({
      data: "ESTO SOLO LO VE LAS PERSONAS CON SESSION / JWT",
      user:req?.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_BLOG");
  }
};

export { getItems };
