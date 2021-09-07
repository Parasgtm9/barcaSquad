import { useState } from "react"

export const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [id, setId] = useState('')
    const [position, setPostion] = useState('')
    const [src, setImage] = useState('')

    const onSubmitTask = (e) => {
        console.log('task')
        e.preventDefault()

        if(!text){
            alert('Please add name')
            return false;
        }

        onAdd({text, id, position, src})

        setText('')
        setId('')
        setPostion('')
        setImage('')

    }

    return (
        <form style={{marginBottom: '50px'}} onSubmit={onSubmitTask}>
            <div className="form-control">
                <label>Name</label>
                <input type='text' placeholder= 'Name' value={text} onChange= {(e) => {setText(e.target.value)}} />
            </div>
            <div className="form-control">
                <label>Kit number</label>
                <input type='number' placeholder= 'Kit number' value={id} onChange= {(e) => {setId(parseInt(e.target.value))}} />
            </div>
            <div className="form-control">
                <label>Position</label>
                <input type='text' placeholder= 'Position' value={position} onChange= {(e) => {setPostion(e.target.value)}} />
            </div>
            <div className="form-control">
                <label>Image</label>
                <input type='text' placeholder= 'Image' value={src} onChange= {(e) => {setImage(e.target.value)}} />
            </div>
            <input type='submit' value= 'Add player' className='btn btn-block'/>
        </form>
    )
}
