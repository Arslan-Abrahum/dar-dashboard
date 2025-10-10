import React, { useState } from 'react'
import { AuthService } from '../../services/authService'

function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try{
      await AuthService.login({ email, password })
      window.location.hash = '#/dashboard'
    }catch(err){
      setError(err?.message || 'Login failed')
    }finally{
      setLoading(false)
    }
  }

  return (
    <div style={{display:'grid',placeItems:'center',minHeight:'100vh',background:'#f6f7f9'}}>
      <form onSubmit={onSubmit} style={{width:420,background:'#fff',padding:24,border:'1px solid #e5e7eb',borderRadius:12,boxShadow:'0 10px 30px rgba(0,0,0,0.06)'}}>
        <h2 style={{textAlign:'center',marginTop:0}}>Welcome Back</h2>
        <p style={{textAlign:'center',color:'#6b7280'}}>Please enter your credentials to login</p>
        {error ? <div style={{color:'#b91c1c',marginBottom:8}}>{error}</div> : null}
        <label className="field"><div className="field-label">Enter Email</div>
          <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        </label>
        <label className="field"><div className="field-label">Enter Password</div>
          <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        </label>
        <button className="btn primary" type="submit" disabled={loading} style={{width:'100%',marginTop:12}}>
          {loading ? 'Logging in…' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default Login


