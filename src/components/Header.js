import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAddTask}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAddTask ? 'red' : 'blue'} text={showAddTask ? 'Close' : 'Add'} onAdd={onAdd} showAddTask={showAddTask}/>
        </header>
    )
}

Header.defaultProps = {title: 'Task tile'}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

/* const headingStyle = {
    color: 'red', backgroundColor: 'black'
} */

export default Header
