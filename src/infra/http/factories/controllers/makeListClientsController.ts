import { ListClientsController } from "@modules/clients/useCases/listClients/ListClientsController";
import { ListClientsService } from "@modules/clients/useCases/listClients/ListClientsUseCase";
import { FakerAPIProvider } from "@shared/providers/FakerAPI";

export function makeListClientsController() {
  const fakerApiProvider = new FakerAPIProvider()
  const listClientsService = new ListClientsService(fakerApiProvider)

  return new ListClientsController(listClientsService);
}