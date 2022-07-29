import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'black'} text={showAdd ? 'Close' : 'Add Course'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Welcome to our Online Learning App'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
