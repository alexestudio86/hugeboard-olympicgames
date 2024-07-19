import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCountriesContext } from "../context/DataProvider"

export function Table() {

    const {countries} = useCountriesContext();

    return (
        <table className="w3-table w3-text-white">
            <thead>
                <tr className="w3-xlarge">
                    <th></th>
                    <th className="w3-center">
                        <span className="w3-text-orange">
                            <FontAwesomeIcon icon='fa-solid fa-medal' />
                        </span>
                    </th>
                    <th className="w3-center">
                        <span className="w3-text-gray">
                            <FontAwesomeIcon icon='fa-solid fa-medal' />
                        </span>
                    </th>
                    <th className="w3-center">
                        <span className="w3-text-yellow">
                            <FontAwesomeIcon icon='fa-solid fa-medal' />
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                { countries.items.map ( (country, index) => (     
                    country.show &&           
                    <tr className="w3-large" key={index} style={ {textTransform: 'uppercase'} }>
                        <td className="w3-padding-large">
                            <span className="w3-padding-small">
                                <img src={country.flag} alt="country.name" height='20px' width='auto' />
                            </span>
                            <span>
                                {country.name}
                            </span>
                        </td>
                        <td className="w3-center">{country.medals.gold}</td>
                        <td className="w3-center">{country.medals.silver}</td>
                        <td className="w3-center">{country.medals.bronze}</td>
                    </tr>
                ) ) }
            </tbody>
        </table>
    )
}