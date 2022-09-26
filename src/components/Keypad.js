// Code Keypad Component Here

function Keypad (){
    function yes(){
        console.log('Entering password...')
    }
    return (
        <input type="password" onChange ={yes}></input>
    )
}

export default Keypad;