import React, { useEffect, useState } from 'react'

interface IPelicula{
    nombre:string,
    desc:string,
    genero:string,
    eliminar?: any
}
export const PeliculaForm = () => {
    const [peliculas, setPeliculas] = useState<IPelicula[]>(JSON.parse(localStorage.getItem('peliculas') || '[]'));
    const [pelicula, setPelicula] = useState<IPelicula>({ nombre: '', desc: '', genero: '' });

    const handle = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setPeliculas([...peliculas, pelicula]);

        e.currentTarget.reset();
    }

    useEffect(()=>{
        localStorage.setItem('peliculas', JSON.stringify(peliculas))
    },[peliculas])

    function eliminar(nombre:string){
        setPeliculas(peliculas.filter((t:IPelicula)=>t.nombre!==nombre))
    }

  return (
    <div>
        <form onSubmit={handle} style={{borderRadius:'0.5em', border:'1px solid whitesmoke', display:'flex', margin:'0 auto', padding:'1em', flexDirection:'column', maxWidth:'30em'}}>
            <label htmlFor="nombre">Nombre:</label>
            <input required minLength={4} maxLength={50} type="text" name="nombre" id="nombre" placeholder='nombre de peli..' onChange={(e)=>setPelicula({...pelicula, nombre: e.target.value})}/>

            <label htmlFor="desc">Descripción:</label>
            <textarea required name="desc" minLength={10} maxLength={280} id="desc" cols={30} rows={10} onChange={(e)=>setPelicula({...pelicula, desc: e.target.value})}></textarea>

            <label htmlFor="genero">Genero:</label>
            <select required name="genero" id="genero" onChange={(e)=>setPelicula({...pelicula, genero: e.target.value})}>
                <option value="comedia">Comedia</option>
                <option value="infantil">Infantil</option>
                <option value="drama">Drama</option>
            </select>
            <button type='submit' style={{backgroundColor:'dodgerblue', marginTop:'1em'}}>Guardar</button>
        </form>
        <div style={{display:'flex', gap:'1em', justifyContent:'center'}}>
            {
                peliculas.length > 0 ?
                peliculas.map((t:IPelicula, i:number)=>{
                    return (
                        <PeliculaCard key={i} nombre={t.nombre} desc={t.desc} genero={t.genero} eliminar={(c:any)=>eliminar(c)}/>
                    )
                }) :
                <div style={{textAlign:'center'}}><b style={{fontSize:'1.5em'}}>sin turnos</b></div>
            }
        </div>
    </div>
  )
}
/*

<div key={i} style={{borderRadius:'0.4em', border:'1px solid #000', maxWidth:'20em', padding:'1em'}}>
                            <ul>
                                <li><b>Nombre:</b> {t.nombre}</li>
                                <li><b>Descripcion:</b> {t.desc}</li>
                                <li><b>Genero:</b> {t.genero}</li>
                            </ul>
                            <div style={{textAlign:'center'}}>
                                <button style={{backgroundColor:'red'}} onClick={ ()=>eliminar(t.nombre)}>Borrar</button>
                            </div>
                        </div>

*/

function PeliculaCard({nombre,desc, genero, eliminar}:IPelicula){
    return (
        <div style={{borderRadius:'0.4em', border:'1px solid #000', maxWidth:'20em', padding:'1em'}}>
            <ul>
                <li><b>Nombre:</b> {nombre}</li>
                <li><b>Descripcion:</b> {desc}</li>
                <li><b>Genero:</b> {genero}</li>
            </ul>
            <div style={{textAlign:'center'}}>
                <button style={{backgroundColor:'red'}} onClick={ ()=>eliminar(nombre)}>Borrar</button>
            </div>
        </div>
    )
}