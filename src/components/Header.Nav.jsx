import { NavLink } from "react-router-dom";
import '../components/Header.Nav.css';


export function HeaderNav() {

    const pages = [
        {
            title:  'Clean Report Maintain',
            path:   'cpr'
        },{
            title:  'Analytics',
            path:   'analytics'
        },{
            title:  'Login',
            path:   'login'
        }
    ];

    return (
        <div className="theme-color-01">
            <div className="container ">
                <nav className="navbar">
                    <NavLink className='navbar-brand button' to='/' end >{document.title}</NavLink>
                    <button className="button hide">Abrir</button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto justify-content-between">
                            <div style={{display: 'flex'}}>
                                {pages.map( (page, index) => (
                                    index !== pages.length-1
                                        &&
                                        <li key={index}>
                                            <NavLink className='button' to={page.path} end >{page.title}</NavLink>
                                        </li>
                                ))}
                            </div>
                            <div>
                                {pages.map( (page, index) => (
                                    index === pages.length-1
                                        &&
                                        <li key={index}>
                                            <NavLink className='button' to={page.path} end >{page.title}</NavLink>
                                        </li>
                                ))}
                            </div>
                        </ul>
                    </div>
                </nav> 
            </div>
        </div>
    )
};