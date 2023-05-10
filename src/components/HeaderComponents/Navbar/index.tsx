import * as styles from './styles'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <styles.Nav>
       <styles.List>
            <styles.itelList><Link to="/">Home</Link></styles.itelList>
            <styles.itelList><Link to="/feedVagas">Feed</Link></styles.itelList>
            <styles.itelList><Link to="/addjobs">Criar vagas</Link></styles.itelList>
            <styles.itelList><Link to="/">Contactos</Link></styles.itelList>
        </styles.List> 
        <styles.ButtonLogin><Link to="/login">Entrar</Link></styles.ButtonLogin>
    </styles.Nav>
  )
}
