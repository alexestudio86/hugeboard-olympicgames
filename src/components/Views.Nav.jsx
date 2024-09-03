import styles03 from './Views.Nav.module.css';


export function ViewsNav({operations}) {
    const {tab, setTab} = operations;
    const pages = [
        {
            title:  'table',
        },{
            title:  'Report',
        }
    ];

    return (
        <div className="">
            <nav className="navbar">
                <ul className="navbar-nav mr-auto justify-content-between">
                    {pages.map( (page, index) => (
                        <li key={index}>
                            <button
                                className={[styles03['button'], styles03['round'], styles03[tab === index ? 'theme-color-01' : '']].join(' ')}
                                onClick={ () => {
                                    setTab(index);
                                }}
                            >{page.title}</button>
                        </li>
                    ))}
                </ul>
            </nav> 
        </div>
    )
}