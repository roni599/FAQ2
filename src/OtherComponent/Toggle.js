import React, { useState } from 'react'
let Main={
    backgroundColor:"red",
    padding:"10px"
}
let btn={
    textAlign:"center"
}

const Toggle = () => {
    let [Toggle,setToggle]=useState(true)
  return (
    <div>
      <div style={Main}>
        {Toggle&&<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra libero imperdiet, molestie est eu, pellentesque ante. Donec tincidunt ipsum in eros gravida aliquam. Vivamus nec cursus justo, vitae porttitor quam. Morbi ornare nisi eu eros efficitur lacinia. Duis leo nibh, auctor porta metus sit amet, cursus commodo leo. Aenean venenatis lacinia nisi, interdum tincidunt erat efficitur ac. Etiam eget metus in dui condimentum dapibus ac quis arcu. Donec pulvinar nulla vel mollis pellentesque. Curabitur ut varius lectus, ut sagittis diam. Fusce et ante ultrices, mattis mi vitae, pharetra nulla. Donec faucibus justo vel suscipit placerat. Morbi massa nisi, hendrerit eu condimentum id, semper sed sem. Nam sollicitudin nisi elit, nec sollicitudin ante blandit vitae. Phasellus lacinia sodales nunc, vel condimentum dolor lobortis non. Vivamus in hendrerit tellus.</p>}
      </div>
      <div style={btn}>
        <button onClick={()=>{
            setToggle(!Toggle)
        }}>{Toggle?"Hide":"Show"}</button>
      </div>
    </div>
  )
}

export default Toggle
