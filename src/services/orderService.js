import { api, endpoints } from './api'

export const OrderService = {
  list: () => api.get(`${endpoints.orders}`),
  details: (id) => api.get(`${endpoints.orders}/${id}`),
}


