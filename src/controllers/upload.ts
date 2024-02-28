import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/req-ext";
import { registerUpload } from "../services/storage";
import { Storage } from "../interfaces/storage";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    console.log(file);
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export { getFile };
