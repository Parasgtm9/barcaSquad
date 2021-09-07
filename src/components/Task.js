import {FaTimes} from 'react-icons/fa'

export const Task = ({task, onDelete}) => {
    return (
        <div className='task'>
            {
                <table>
                    <tbody>
                        <tr>
                            <td style={{width: '100px'}}><div style={{height:'70px', width:'70px', overflow: 'hidden'}}><img src={task.src} alt="Barcelona" style={{maxWidth:'100%'}}/></div></td>
                            <td><span className='squadText'>{task.id} - {task.text} <span style={{display: 'block', fontSize: 'smaller'}}>{task.position}</span></span></td>
                            <td><FaTimes style={{color: 'red', cursor : 'pointer', float: 'right'}} onClick={() => onDelete(task.id)} /></td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    )
}
