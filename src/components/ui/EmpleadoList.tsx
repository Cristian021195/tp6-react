import React from 'react'
import { EmpleadoRow } from '.'

interface IEmpleado {
    id: number,
    fullName:string,
    title: string,
    department: string,
    pic: string 
}



const empleados:IEmpleado[] = [
    { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "empleado01.png" },
    { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "empleado02.png" },
    { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "empleado03.png" },
    { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "empleado04.png" },
    { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "empleado05.png" },
    { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "empleado06.png" },
    { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "empleado07.png" },
    { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "empleado08.png" },
    { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "empleado09.png" },
  ];
  

export const EmpleadoList = () => {
  return (
    <div style={{maxWidth:'24em', margin:'0 auto', backgroundColor:'#f5f5f5'}}>
        {
            empleados.length > 0 ? 
            empleados.map((e:IEmpleado)=><EmpleadoRow key={e.id} department={e.department} fullName={e.fullName} id={e.id} pic={e.pic} title={e.title} />) :
            <p>Sin empleados</p>
        }
    </div>
  )
}
