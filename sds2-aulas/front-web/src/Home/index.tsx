import './styles.css';
import { ReactComponent as MainImage } from './main.svg';
import Footer from '../Footer/indesx';
import { Link} from 'react-router-dom';
function Home() {
    return (
        <>

            <div className="home-conteiner">
                <div className="home-content"></div>
                <div className="home-actions">

                    <h1 className="home -titlle">
                        Faça seu pedido<br /> que entregamos<br />pra você!!!
                     </h1>
                    <h3 className="home-subtitle">

                        Escolha o seu pedido e em poucos minutos<br />
     levaremoss na sua porta
    </h3>
                    <Link to="/orders" className="home-btn-order">
                        FAZER PEDIDO

    </Link>
                </div>
                <div className="home-image">
                    <MainImage />


                </div>
                </div>
                <Footer />

   </>
  )
        








    
    
}
export default Home;