
import { TotalOrdersRepositoy } from "../../repositories/implementations/TotalOrdersRepository";
import { ImportFromBlingController } from "./ImportFromBlingController";
import { ImportFromBlingUseCase } from "./ImportFromBlingUseCase";


const totalOrdersRepository = new TotalOrdersRepositoy();

const importFromBlingUseCase = new ImportFromBlingUseCase(totalOrdersRepository);

const importFromBlingController = new ImportFromBlingController(importFromBlingUseCase);

export {importFromBlingController}