interface ITarea {
    task:string
}
export function Tarea({task}:ITarea){
    return (
        <div>{task}<button type='button'>❌</button></div>
    )
}