import { Controller } from "../core/Controller";
import { ListClientsService } from "../modules/clients/services/ListClientsService";

interface ListClientsControllerRequest {
  total: string
}

type clientResponse = { id: number, "name": string, "email": string, "phone": string, "person": { "fullName": string } }
interface ListClientsControllerResponse {
  total: number,
  clients: clientResponse[]
}

export class ListClientsController implements Controller<ListClientsControllerRequest, ListClientsControllerResponse> {
  constructor(
    private readonly listClientsService: ListClientsService
  ){}
  
  async handle(req: ListClientsControllerRequest): Promise<ListClientsControllerResponse> {
    const response = await this.listClientsService.execute(parseInt(req.total) ?? 20)

    return response
  }
}