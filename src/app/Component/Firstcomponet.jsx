'use client'
import page from "../page"

const Firstcomponent = ({data,fn})=>{
    return(<div>
        <button onClick={()=>{fn(10)}}>set 10</button>
        {data}
        </div>)
}
export default Firstcomponent