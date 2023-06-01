import { useState } from "react";

interface IProps {
    persona?:string
}
export const HelloWord = ({persona = 'World'}:IProps) => {
    const [msj, setMsj] = useState<string>("");
    return (
      <div>
          <p>Hello {persona} {msj}</p>
          <button onClick={()=>setMsj(', un gusto!')}>CLICK</button>
      </div>
    )
}
