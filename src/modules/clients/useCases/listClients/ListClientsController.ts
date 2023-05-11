import { ListClientsControllerRequestDTO } from "@modules/clients/dtos/LIstClientsControllerRequestDTO"
import { Controller } from "@shared/core/Controller"
import { ListClientsService } from "./ListClientsUseCase"


type clientResponse = { id: number, "name": string, "email": string, "phone": string, "person": { "fullName": string } }
interface ListClientsControllerResponse {
  total: number,
  clients: clientResponse[]
}

export class ListClientsController implements Controller<ListClientsControllerRequestDTO, ListClientsControllerResponse> {
  constructor(
    private readonly listClientsService: ListClientsService
  ){}
  
  async handle(req: ListClientsControllerRequestDTO): Promise<ListClientsControllerResponse> {
    const total = parseInt(req.total)
    const response = await this.listClientsService.execute(total || 20)

    return response
  }
}