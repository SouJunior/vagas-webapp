import * as styles from './styles'
import loginPeople from '../../assets/imgs/login-people.svg';

export default function index() {
  return (
    <styles.Container>
       <styles.leftContainer>
            <h1>Experiência real de trabalho em projetos construída por uma empresa de tecnologia!</h1>
            <button>Entre em contacto</button>
        </styles.leftContainer> 
        <styles.rightContainer>
            <img src={ loginPeople } alt='Imagem hero'/>
        </styles.rightContainer>
    </styles.Container>
  )
}
