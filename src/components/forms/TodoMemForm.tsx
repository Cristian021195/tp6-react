import React, { useEffect, useState } from 'react'

export const TodoMemForm = () => {
    const [tareas, setTareas] = useState<string[]>(JSON.parse(localStorage.getItem('tareas') || '[]'));
    const [tarea, setTarea] = useState("");
    const handle = (e:any) => {
        e.preventDefault();
        
        if(tarea.length > 3){
            setTareas([...tareas, tarea]);
        }
        e.target.reset();
    }
    useEffect(()=>{
        localStorage.setItem('tareas', JSON.stringify(tareas))
    },[tareas])
    function eliminar(id:string){
        setTareas(tareas.filter((t:string)=> t!== id))
    }
  return (
    <form onSubmit={handle} style={{borderRadius:'0.5em', border:'1px solid whitesmoke', textAlign:'center'}}>
        <b>BIENVENIDO</b>
        <p>Ingresa tus tareas</p>
        <input type="text" placeholder='Tarea..' style={{border:'1px solid grey'}} onChange={(e:any)=>setTarea(e.target.value)}/>
        <button type="submit">CARGAR</button>
        <hr />
        <div>
            {
                tareas.length > 0 ?
                tareas.map((t:string, i:number)=>{return <Tarea task={t} key={i} eliminar={()=>eliminar(t)}/>}) :
                <p>sin tareas</p>
            }
        </div>
    </form>
  )
}

interface ITarea {
    task:string,
    eliminar:(e:string)=>void
}
function Tarea({task, eliminar}:ITarea){
    return (
        <div>{task}<button type='button' onClick={()=>eliminar(task)}>❌</button></div>
    )
}