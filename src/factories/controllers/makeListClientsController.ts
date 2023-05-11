import { ListClientsController } from "../../controllers/ListClientsController";
import { FakerAPIProvider } from "../../providers/FakerAPI";
import { ListClientsService } from "../../services/ListClientsService";

export function makeListClientsController() {
  const fakerApiProvider = new FakerAPIProvider()
  const listClientsService = new ListClientsService(fakerApiProvider)

  return new ListClientsController(listClientsService);
}