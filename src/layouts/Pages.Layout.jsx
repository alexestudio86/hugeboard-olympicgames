import bgStepTodown from '../assets/bg-steptodown.jpg';
import logoHB from '../assets/logo-huge-board.png';
import { Table } from '../components/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function PagesLayout() {
    return (
        <div className='w3-content w3-padding-16'>
            <div className='w3-display-container'>
                <img className='w3-image' src={bgStepTodown} alt="Fondo" />
                <h1 className='w3-display-topleft w3-text-white w3-padding-large' style={ {textTransform: 'uppercase'} }>Medallero JJOO 2024</h1>
                <div className='w3-display-topright w3-padding-large'>
                    <img src={logoHB} alt="Logo Huge Board" height='75px' width='auto' />
                </div>
                <div className='w3-display-middle w3-padding-large' style={{width:'100%'}}>
                    <Table/>
                </div>
            </div>
            <div className='w3-white w3-margin-top w3-margin-bottom w3-row'>
                <a className='w3-button w3-gray w3-xlarge'>
                    <FontAwesomeIcon icon='fa-solid fa-arrow-left' />
                </a>
                <a className='w3-button w3-gray w3-right w3-xlarge'>
                    <FontAwesomeIcon icon='fa-solid fa-arrow-right' />
                </a>
            </div>
        </div>
    )    
}