import axios from "axios";

import { Company } from "@shared/models/Company";
import { Person } from "@shared/models/Person";

export class FakerAPIProvider {
  async listCompanies(quantity: number) {
    const { data: response } = await axios.get(`https://fakerapi.it/api/v1/companies?_quantity=${quantity}`)

    return response.data as Company[]
  }

  async listPersons(quantity: number ) {
    const { data: response } = await axios.get(`https://fakerapi.it/api/v1/persons?_quantity=${quantity}`)

    return response.data as Person[]
  }
}