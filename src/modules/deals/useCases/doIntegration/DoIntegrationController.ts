import { Request, Response } from "express";
import { DoIntegrationUseCase } from "./DoIntegrationUseCase";

class DoIntegrationController {
  constructor(private doIntegrationUseCase: DoIntegrationUseCase) {}
  handle(request:Request, response:Response):Response {
    this.doIntegrationUseCase.execute()
    return response.send();
  }
}

export {DoIntegrationController}