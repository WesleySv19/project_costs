import { Link } from "react-router-dom"
import Container from './Container'
import styles from './Navbar.module.css'
import Logo from '../../assets/costs_logo.png'
const Navbar = () => {
  return (
    <nav>
        <Container>
            <Link to="/"><img src={Logo} alt="Costs" /></Link>
            <Link to="/">Home</Link>
            <Link to="contact">Contato</Link>
            <Link to="company">Empresa</Link>
            <Link to="newProject">Novo Projeto</Link>
        </Container>
    </nav>
  )
}

export default Navbar