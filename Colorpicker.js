import React,{useState} from "react";



function Colorpicker(){

    const [color,setcolor] = useState("#ffff");

    function handlecolor(event){
        setcolor(event.target.value);
    }

    return(
        <div>
            <h1>Color Picker</h1>
            <div className="color-picker" style={{backgroundColor:color}}>
            <p>Color: {color}</p>
            </div>
            <div className="name">
            <label>
                pick color
            </label>
            <input type="color" onChange={handlecolor}/>
            </div>
        </div>
    )
}

export default Colorpicker;