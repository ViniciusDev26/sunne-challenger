import { FakerAPIProvider } from "../../../../shared/providers/FakerAPI";
import { ListClientsService } from "../../../../modules/clients/services/ListClientsService";
import { ListClientsController } from "../../../../modules/clients/controllers/ListClientsController";

export function makeListClientsController() {
  const fakerApiProvider = new FakerAPIProvider()
  const listClientsService = new ListClientsService(fakerApiProvider)

  return new ListClientsController(listClientsService);
}