export const addtodo=(todo)=>({
type: 'ADDTODO',
payload: todo
})

export const removetodo = (index)=>(
  {
    type: 'REMOVETODO',
    payload: index
  }
)