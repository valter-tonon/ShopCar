import React from 'react'
import { useSelector } from 'react-redux'

const MessageAlert = ()=>{
    const isShow = useSelector((state) => state.layout.showMessage)
    
    return(
        <React.Fragment>
        { isShow && <div className='container mt-3'>
            <div className = 'alert alert-primary' role='alert'>
                Cadastro realizado com sucesso!
            </div>
        
        </div>}
        </React.Fragment>
    )
}

export default MessageAlert