import reducer from './index'

describe('Layout Reducer',()=>{
    test('deve retornar state inicial',()=>{
        expect(reducer(undefined,{})).toEqual({ showMessage: false})
    })
    test('deve retornar state com props showMessage = true',()=>{
        expect(reducer(undefined,{type: 'SHOW_MESSAGE'})).toEqual({ showMessage: true})
    })
    test('deve retornar state com props showMessage = false',()=>{
        expect(reducer({showMessage: true},{type: 'HIDE_MESSAGE'})).toEqual({ showMessage: false})
    })
})