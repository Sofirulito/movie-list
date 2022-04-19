import './styles.css';
import logo from '../../assets/hr-logo.png'

export const Header = () => {
  return (
    <header className='header'>
      <div className="container mx-auto">
        {/* <img src={logo} alt="hackerrack logo" className='header__img'/> */}
        <h1 className='header__title'>Movie List</h1>
      </div>
    </header>
  )
};
