import { NavLink } from "react-router-dom";
import style from '../components/Header.Nav.module.css'


export function HeaderNav() {

    const pages = [
        {
            title:  'Proposals',
            path:   'proposals'
        },{
            title:  'Analytics',
            path:   'analytics'
        },{
            title:  'Login',
            path:   'login'
        }
    ];

    return (
        <nav>
            <div>
                <NavLink to='/' end >{document.title}</NavLink>
                <button style={{display:'none'}}>Open</button>
                <div>
                    <ul>
                        {pages.map( (page, index) => (
                            <li key={index}>
                                <NavLink to={page.path} end >{page.title}</NavLink>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
      </nav> 
    )
};