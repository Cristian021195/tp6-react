import {useState,useEffect} from 'react'

export const ColorForm = () => {
    const [color, setColor] = useState("red");
    const [colores, setColores] = useState(JSON.parse(localStorage.getItem('colores') || '[]'));
    const handle = (e:any) => {
        e.preventDefault();

        setColores([...colores, color]);

        e.target.reset();
    }
    useEffect(()=>{
        localStorage.setItem('colores', JSON.stringify(colores))
    },[colores])
    function eliminar(c:string){
        setColores(colores.filter((cl:string)=>cl!==c))
    }
  return (
    <form onSubmit={handle} style={{borderRadius:'0.5em', border:'1px solid coral', backgroundColor:'whitesmoke', color:'#000', padding:'1em'}}>
        <div>
            <b>Administrar Colores</b>
        </div>
        <hr/>
        <div style={{display:'flex', justifyContent:'space-evenly'}}>
            <div style={{backgroundColor:color || 'red', height:'5em', width:'5em'}}></div>
            <input type="text" required placeholder='color..' style={{border:'1px solid grey', backgroundColor:'whitesmoke', fontSize:'2em', color:'black'}} 
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setColor(e.target.value)}/>
        </div>
        <hr />
        <div style={{textAlign:'end'}}>
            <button type="submit">CARGAR</button>
        </div>
        <div style={{display:'flex', justifyContent:'center', gap:'1em'}}>
            {
                colores.length > 0 ?
                colores.map((c:string, i:number)=>{return <CardColor color={c} key={i} eliminar={(c:string)=>eliminar(c)}/>}) :
                <p>sin colores</p>
            }
            
        </div>
    </form>
  )
}

interface ICardColor {
    color:string,
    eliminar: (c:string)=>void
}
function CardColor({color='red',eliminar}:ICardColor){
    return (
        <div style={{borderRadius:'0.4em', width:'10em', padding:'0.5em', textAlign:'center', border:'1px solid grey'}}>
            <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{border:'5px solid #000', width:'5em', height:'5em', backgroundColor:color}}></div>
            </div>
            <hr />
            <button type='button' onClick={()=>eliminar(color)}>ELIMINAR</button>
        </div>
    )
}
