import React,{useState} from 'react'
import { useDispatch} from 'react-redux'
import { authLogin } from '../../store/fetchActions'

const Login = ()=>{
    const [form, setForm] = useState({ username: '', password: ''})
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        dispatch(authLogin(form))
        setForm({ username:'', password: ''})
    }

    function changeSubmit(e){
        const {name, value} = e.target

        setForm({...form,[name]:value})
        
    }

    return(
        <div className='container mt-5 ' style={{width:'300px'}}>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nome de usuário</label>
                    <input value={form.name} onChange={changeSubmit} type="name" name='username' className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
               
            </div>
            <div className="form-group">
                <label >Senha</label>
                <input value={form.password} onChange={changeSubmit} type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Entrar</button>
        </form>
        </div>
    )
}

export default Login