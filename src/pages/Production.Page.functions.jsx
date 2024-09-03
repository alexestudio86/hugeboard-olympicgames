export const formatCurrency = ( num ) => {
    const parteEntera = Math.trunc(num); // Obtiene la parte entera
    const parteDecimal = Math.abs(num - parteEntera).toFixed(2).split('.')[1]; // Obtiene la parte decimal
    const currency = `${parteEntera}`.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (parteEntera > 1) {
        return  (
            <>
                <span className="small">$</span>{currency}<sup className="small">{parteDecimal}</sup>
            </>
        )
    } else {
        return  (
            <>
                <span className="small">$</span>0
            </>
        )
    }
};

export const filterRevenue2023 = (revenue = [{date:0, minutes:0, quantity:0}]) => {
    /*2022*/
    const newMapa = revenue.filter( r => { return new Date(r.date.seconds*1000) > new Date( new Date().setFullYear(new Date().getFullYear() - 2) ) && new Date(r.date.seconds*1000) < new Date( new Date().setFullYear(new Date().getFullYear() - 1) ) } );
    const newRed = newMapa.reduce( (accumulator, item) => {return accumulator += item.quantity},0 );
    return newRed
};

export const filterMinutes2023 = (revenue = [{date:0, minutes:0, quantity:0}]) => {
    const newMapa = revenue.filter( r => { return new Date(r.date.seconds*1000) > new Date( new Date().setFullYear(new Date().getFullYear() - 2) ) && new Date(r.date.seconds*1000) < new Date( new Date().setFullYear(new Date().getFullYear() - 1) ) } );
    const newReduce = newMapa.reduce( (accumulator, item) => {return accumulator += item.minutes},0 );
    return newReduce;
};

export const average2023 = (revenue) => {
    return filterRevenue2023(revenue) / filterMinutes2023(revenue)
};

export const filterRevenue2024 = (revenue = [{date:0, minutes:0, quantity:0}]) => {
    const newMapa = revenue.filter( r => { return new Date(r.date.seconds*1000) > new Date( new Date().setFullYear(new Date().getFullYear() - 1) ) && new Date(r.date.seconds*1000) < new Date( new Date().setFullYear(new Date().getFullYear()) ) } );
    const newReduce = newMapa.reduce( (accumulator, item) => {return accumulator += item.quantity},0 );
    return newReduce;
};

export const filterMinutes2024 = (revenue = [{date:0, minutes:0, quantity:0}]) => {
    const newMapa = revenue.filter( r => { return new Date(r.date.seconds*1000) > new Date( new Date().setFullYear(new Date().getFullYear() - 1) ) && new Date(r.date.seconds*1000) < new Date( new Date().setFullYear(new Date().getFullYear()) ) } );
    const newRed = newMapa.reduce( (accumulator, item) => {return accumulator += item.minutes},0 );
    return newRed;
};

export const average2024 = (revenue) => {
    return filterRevenue2024(revenue) / filterMinutes2024(revenue);
};