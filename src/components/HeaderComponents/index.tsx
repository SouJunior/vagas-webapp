import * as styles from './styles'

import SouJuniorLogo from '../../assets/imgs/logotipo-icone-extendida.svg'
import Navbar from './Navbar'

export default function index() {
  return (
    <styles.HeaderBox>
        <styles.Logo src={SouJuniorLogo} alt='Logtipo SouJunior'/>
        <Navbar />
    </styles.HeaderBox>
  )
}
