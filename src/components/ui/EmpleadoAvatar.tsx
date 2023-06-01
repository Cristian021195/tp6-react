import React from 'react'

interface IProps{
    src:string, 
    alt:string
}
export const EmpleadoAvatar = ({src='https://picsum.photos/200',alt='textoalternativo'}:IProps) => {
  return (
    <div>
        <img src={src} alt={alt} style={{width:'5em', height:'5em', borderRadius:'0.3em'}}/>
    </div>
  )
}
