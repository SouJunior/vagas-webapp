import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
    return (
        <div className='h-screen'>
            <h1 className='text-6xl text-center mb-10'>Home Page SOuJunior</h1>
            <nav className='flex flex-col items-center justify-center text-4xl'>
                <Link to="/login">Login</Link>
                <Link to="feedjobs">Feed de Vagas</Link>
            </nav>
        </div>
    )
}