import { useState } from "react"

export const AddTask = ({onAdd}) => {
    const [player_name, setText] = useState('')
    const [player_shirt, setId] = useState('')
    const [position, setPostion] = useState('')
    const [player_image, setImage] = useState('')

    const onSubmitTask = (e) => {
        console.log('task')
        e.preventDefault()

        if(!player_name){
            alert('Please add name')
            return false;
        }

        onAdd({player_name, player_shirt, position, player_image})

        setText('')
        setId('')
        setPostion('')
        setImage('')

    }

    return (
        <form style={{marginBottom: '50px'}} onSubmit={onSubmitTask}>
            <div className="form-control">
                <label>Name</label>
                <input type='text' placeholder= 'Name' value={player_name} onChange= {(e) => {setText(e.target.value)}} />
            </div>
            <div className="form-control">
                <label>Kit number</label>
                <input type='number' placeholder= 'Kit number' value={player_shirt} onChange= {(e) => {setId(parseInt(e.target.value))}} />
            </div>
            <div className="form-control">
                <label>Position</label>
                <input type='text' placeholder= 'Position' value={position} onChange= {(e) => {setPostion(e.target.value)}} />
            </div>
            <div className="form-control">
                <label>Image</label>
                <input type='text' placeholder= 'Image' value={player_image} onChange= {(e) => {setImage(e.target.value)}} />
            </div>
            <input type='submit' value= 'Add player' className='btn btn-block'/>
        </form>
    )
}
