import { api } from './api'

export const AuthService = {
  async login({ email, password }){
    const res = await api.post('/api/auth/login', { email, password })
    // Expecting JWT token in response; adapt if shape differs
    const token = res?.accessToken || res?.token || res?.data?.accessToken
    if (token) {
      localStorage.setItem('auth_token', token)
    }
    return res
  },
  logout(){
    localStorage.removeItem('auth_token')
  },
  isAuthenticated(){
    try { return !!localStorage.getItem('auth_token') } catch { return false }
  }
}


