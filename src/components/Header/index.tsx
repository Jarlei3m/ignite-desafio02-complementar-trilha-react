import { FiPlusSquare } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import { useFood } from '../../Hook/useFood';
import { Container } from './styles';

export function Header() {
  const { toggleAddModal } = useFood();

  return (
    <Container>
      <header>
        <img src={Logo} alt='GoRestaurant' />
        <nav>
          <div>
            <button type='button' onClick={toggleAddModal}>
              <div className='text'>Novo Prato</div>
              <div className='icon'>
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
}

export default Header;
