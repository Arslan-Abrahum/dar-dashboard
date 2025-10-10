import { api, endpoints } from './api'

export const ProjectService = {
  list: (params) => api.get(`${endpoints.projects}`, { params }),
  details: (id) => api.get(`${endpoints.projects}/${id}`),
}


