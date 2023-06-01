import React from 'react'
import { EmpleadoAvatar } from '.'

interface IEmpleado {
    id: number,
    fullName:string,
    title: string,
    department: string,
    pic: string 
}

export const EmpleadoRow = ({id, fullName='Full Name', title='empleado', department='Department', pic='https://picsum.photos/200'}:IEmpleado) => {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'1em',borderBottom:'1px solid grey'}}>
        <EmpleadoAvatar src={pic} alt={title}/>
        <div>
            <b>{fullName}</b>
            <div style={{display:'flex', gap:'1em'}}>
                <p>CEO <span style={{backgroundColor:'dodgerblue', color:'whitesmoke', borderRadius:'0.3em', padding:'0.2em'}}>{department}</span></p>                
            </div>
        </div>
    </div>
    
  )
}
