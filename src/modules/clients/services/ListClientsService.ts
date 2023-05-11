import { FakerAPIProvider } from "../../../shared/providers/FakerAPI";

export class ListClientsService {
  constructor(
    private readonly fakerApiProvider: FakerAPIProvider
  ){}

  async execute(clientsQuantity: number) {
    const companies = await this.fakerApiProvider.listCompanies(clientsQuantity);
    const persons = await this.fakerApiProvider.listPersons(clientsQuantity);

    const companiesData = companies.map((company, index) => {
      const person = persons[index]
      
      return {
        id: company.id,
        name: company.name,
        email: company.email,
        phone: company.phone,
        person: {
          fullName: `${person.firstname} ${person.lastname}`
        }
      }
    });

    return {
      total: clientsQuantity,
      clients: companiesData
    }
  }
}