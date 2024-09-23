import Select from 'react-select';


export function FiltersNav({data}) {

    const {accounts, dataFiltered, setDataFiltered} = data;

    return (
        <nav className='p-2'>
            {
                dataFiltered.items.length > 0
                ?
                <>
                    <div className='p-1'>
                        <p>Ejecutivo</p>
                        <Select
                            isMulti
                            name={'Sales Manager'}
                            onChange={ (selectedOption) => {
                                console.log('dataFiltered: ', dataFiltered.selectedOption)
                                //console.log( accounts.map( account => account.salesManager.name !==  ) );
                                //setDataFiltered({items, selectedOption})
                            }}
                            options={ [...new Set(dataFiltered.items.map( account => account.salesManager.name ))].map( a => ({value: a, label: a})) }
                        />
                    </div>
                    <div className='p-1'>
                        <p>Giro</p>
                        <Select
                            isMulti
                            name='Market Segment'
                            //options={ [...new Set(dataFiltered.items.map( account => account.marketSegment.name ))].map( a => ({label: a})) }
                        />
                    </div>
                </>
                :
                console.log('nada')
            }
        </nav>
    )

}