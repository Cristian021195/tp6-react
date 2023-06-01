import {useState, useEffect} from 'react'

interface ITurno {
    nombre:string, 
    duenio:string,
    fecha:string,
    hora:string,
    sintomas:string,
    eliminar?: any
}

export const VeterinariaForm = () => {
    const [turnos, setTurnos] = useState<ITurno[]>(JSON.parse(localStorage.getItem('turnos') || '[]'));
    const [turno, setTurno] = useState<ITurno>({
        nombre: '',
        duenio: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    const handle = (e:any) => {
        e.preventDefault();

        if(turno.nombre == '' || turno.duenio == '' || turno.fecha == '' || turno.hora == '' || turno.sintomas == ''){
            alert('¡Rellene todos los campos!')
        }else{
            alert('¡Enviado!');
            
            setTurnos([...turnos, turno])
            
            e.target.reset();
            setTurno({nombre: '', duenio: '', fecha: '', hora: '', sintomas: ''});
        }
    }
    useEffect(()=>{
        localStorage.setItem('turnos', JSON.stringify(turnos))
    },[turnos])

    function eliminar(nombre:string){
        setTurnos(turnos.filter((t:ITurno)=>t.nombre!==nombre))
    }
    return (
        <form onSubmit={handle} style={{borderRadius:'0.5em', border:'1px solid whitesmoke', display:'flex', margin:'0 auto', padding:'1em', flexDirection:'column'}}>
            <b>ADMINISTRADOR - PACIENTES DE VETERINARIA</b>
            <p>Llenar el formulario para crear un turno</p>
            <div style={{width:'30em', display:'flex', margin:'0 auto', flexDirection:'column', backgroundColor:'lightblue'}} className='vet_form'>
                <label htmlFor="nombre">Nombre de la mascota: </label>
                <input type="text" name='nombre' id='nombre' placeholder='Nombre..' 
                style={{border:'1px solid grey'}} 
                onChange={(e:any)=>setTurno({...turno, nombre:e.target.value})}/>

                <label htmlFor="duenio">Nombre del dueño: </label>
                <input type="text" name='duenio' id='duenio' placeholder='Nombre de duenio..' 
                style={{border:'1px solid grey'}} onChange={(e:any)=>setTurno({...turno, duenio:e.target.value})}/>

                <label htmlFor="fecha">Fecha: </label>
                <input type="text" name='fecha' id='fecha' placeholder='fecha..' 
                style={{border:'1px solid grey'}} onChange={(e:any)=>setTurno({...turno, fecha:e.target.value})}/>

                <label htmlFor="hora">Hora: </label>
                <input type="text" name='hora' id='hora' placeholder='hora..' 
                style={{border:'1px solid grey'}} onChange={(e:any)=>setTurno({...turno, hora:e.target.value})}/>

                <label htmlFor="sintomas">Sintomas (separados por coma): </label>
                <input type="text" name='sintomas' id='sintomas' placeholder='sintomas..' 
                style={{border:'1px solid grey'}} onChange={(e:any)=>setTurno({...turno, sintomas:e.target.value})}/>

                <button type="submit" style={{marginTop:'1em', backgroundColor:'dodgerblue'}}>CARGAR</button>
            </div>
            <hr />
            <div style={{display:'flex', justifyContent:'center'}}>
                {
                    turnos.length > 0 ?
                    turnos.map((t:ITurno, i:number)=>{
                        return (
                            <TurnoCard key={i} nombre={t.nombre} duenio={t.duenio} fecha={t.fecha} 
                            hora={t.hora} sintomas={t.sintomas} eliminar={(c:any)=>eliminar(c)}/>
                        )
                    }) :
                    <div style={{textAlign:'center'}}><b style={{fontSize:'1.5em'}}>sin turnos</b></div>
                }
            </div>
        </form>
    )
}

function TurnoCard({nombre="A", duenio, fecha, hora, sintomas, eliminar}:ITurno){
    return (
        <div style={{width:'16em', border:'solid 1px #000', margin:'1em', borderRadius:'0.5em'}}>
            <div className="card-header" style={{display:'flex', justifyContent:'space-between', padding:'0.3em 0.5em 0.3em 0.5em', alignItems:'center'}}>
                <div style={{backgroundColor:'dodgerblue', color:'white', borderRadius:'50%', padding:'0.7em', height:'0.7em', width:'0.7em', textAlign:'center', fontSize:'2em'}}>{nombre[0]}</div>
                <div>
                    <div><b>Mascota: {nombre}</b></div>
                    <div>Dueño: {duenio}</div>
                </div>
            </div>
            <div className="card-body vet_form" style={{backgroundColor:'lightblue', display:'flex', margin:'0 auto', flexDirection:'column'}}>
                <label htmlFor="cfecha">Fecha: </label>
                <input type="text" readOnly id='cfecha' name='cfecha' value={fecha}/>
                <label htmlFor="chora">Hora: </label>
                <input type="text" readOnly id='chora' name='chora' value={hora}/>
                <label htmlFor="csintomas">Sintomas: </label>
                <input type="text" readOnly id='csintomas' name='csintomas' value={sintomas}/>
            </div>
            <div className="card-footer" style={{textAlign:'end', padding:'0.3em 0.5em 0.3em 0.5em'}}>
                <button type='button' style={{backgroundColor:'red', padding:'0.5em', color:'white'}} 
                onClick={ ()=>eliminar(nombre)}>BORRAR</button>
            </div>
        </div>
    )
}