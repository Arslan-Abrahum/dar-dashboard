import { api, endpoints } from './api'

export const CustomerService = {
  list: () => api.get(`${endpoints.customers}`),
  details: (id) => api.get(`${endpoints.customers}/${id}`),
}


