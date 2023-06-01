import {useState} from 'react';

interface IPersonaForm{
    nombre:string,
    apellido:string,
    dni:number | null,
    email:string,
}

export const PersonaForm = () => {
    const [persona, setPersona] = useState<IPersonaForm>({
        nombre:'',
        apellido:'',
        dni:null,
        email:''
    });
    const handle = (e:any) => {
        e.preventDefault();

        if(persona.nombre == '' || persona.apellido == '' || persona.dni == null || persona.email == ''){
            alert('¡Rellene todos los campos!')
        }else{
            alert('¡Enviado!');
            e.target.reset();
            setPersona({nombre:'', apellido:'', dni:null, email:''});
        }
    }

    return (
      <div style={{backgroundColor:'#e5e5e5', color:'#666666', padding:'2em 0 2em 0', marginBottom:'2em'}}>
          <form onSubmit={handle} style={{maxWidth:'30em', display:'flex', margin:'0 auto', padding:'1em', flexDirection:'column', backgroundColor:'white'}}>
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" id='nombre' name='nombre' placeholder='Ingrese nombre' onChange={(e:any)=>{setPersona({...persona, nombre:e.target.value})}}/>
            <label htmlFor="apellido">Apellido: </label>
            <input type="text" id='apellido' name='apellido' placeholder='Ingrese apellido' onChange={(e:any)=>{setPersona({...persona, apellido:e.target.value})}}/>
            <label htmlFor="dni">DNI: </label>
            <input type="number" id='dni' name='dni' placeholder='Ingrese dni' min={10000000} max={100000000} onChange={(e:any)=>{setPersona({...persona, dni:e.target.value})}}/>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" placeholder='mister2729@gmail.com' onChange={(e:any)=>{setPersona({...persona, email:e.target.value})}}/>
            <button type='submit' style={{marginTop:'1em'}}>ENVIAR</button>
          </form>
      </div>
    )
}
