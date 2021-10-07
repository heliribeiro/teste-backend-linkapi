import { DealsRepository } from "../../repositories/implementations/DealsRepository";
import { DoIntegrationController } from "./DoIntegrationController";
import { DoIntegrationUseCase } from "./DoIntegrationUseCase";


const dealsRepository =  DealsRepository.getInstance();

const doIntegrationUseCase = new DoIntegrationUseCase(dealsRepository);

const doIntegrationController = new DoIntegrationController(doIntegrationUseCase);

export {doIntegrationController}