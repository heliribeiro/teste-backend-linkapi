import { Request, Response } from "express";
import { ImportFromBlingUseCase } from "./ImportFromBlingUseCase";

class ImportFromBlingController {
  constructor(private importFromBlingUseCase: ImportFromBlingUseCase) {}
  handle(request:Request, response:Response):Response {
    this.importFromBlingUseCase.execute()
    return response.send();
  }
}

export {ImportFromBlingController}