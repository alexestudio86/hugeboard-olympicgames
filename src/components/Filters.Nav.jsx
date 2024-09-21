import Select from 'react-select';


export function FiltersNav({data}) {

    const {accountsFiltered} = data;

    return (
        <nav className='p-2'>
            {
                accountsFiltered.length > 0
                ?
                <>
                    <div className='p-1'>
                        <p>Ejecutivo</p>
                        <Select
                            name={'Sales Manager'}
                            options={ [...new Set(accountsFiltered.map( account => account.salesManager.name ))].map( a => ({label: a})) }
                        />
                    </div>
                    <div className='p-1'>
                        <p>Giro</p>
                        <Select
                            name={'Sales Manager'}
                            options={ [...new Set(accountsFiltered.map( account => account.marketSegment.name ))].map( a => ({label: a})) }
                        />
                    </div>
                </>
                :
                console.log('nada')
            }
        </nav>
    )

}