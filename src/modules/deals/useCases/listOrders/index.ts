
import { TotalOrdersRepositoy } from "../../repositories/implementations/TotalOrdersRepository";
import { ListOrdersController } from "./listOrdersController";
import { ListOrdersUseCase } from "./listOrdersUseCase";


const totalOrdersRepository = new TotalOrdersRepositoy();

const listOrdersUseCase = new ListOrdersUseCase(totalOrdersRepository);

const listOrdersController = new ListOrdersController(listOrdersUseCase);

export {listOrdersController}