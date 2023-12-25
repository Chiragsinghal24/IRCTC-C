import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Traininfo from './Traininfo';
import { Link } from 'react-router-dom';

const Findtrain = () => {
    const location = useLocation();
    const { fromStation, toStation, dateValue } = location.state || {};
    const [fromSCode, setFromSCode] = useState("");
    const [toSCode, setToSCode] = useState("");
    const [trainName, setTrainName] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchFromStationsCode = async () => {
        const url = `https://api.railyatri.in/api/common_city_station_search.json?hide_city=true&q=${fromStation}`

        try {
            const response = await fetch(url);
            const result = await response.json();
            setFromSCode(result.items[0].station_code);   //setting of fromSCode
        } catch (error) {
            console.log(error);
        }
    };

    const fetchToStationsCode = async () => {
        const url = `https://api.railyatri.in/api/common_city_station_search.json?hide_city=true&q=${toStation}`

        try {
            const response = await fetch(url);
            const result = await response.json();
            setToSCode(result.items[0].station_code);   //setting of ToSCode
        } catch (error) {
            console.log(error);
        }
    };

    const getTrains = async () => {
        const url = 'https://api.railyatri.in/api/trains-between-station-from-wrapper.json?';
        const params = new URLSearchParams({
            from: fromSCode,
            to: toSCode,
            dateOfJourney: dateValue,  //date of travel
            from_code: fromSCode,
            from_name: fromStation,
            journey_date: dateValue,  //date of travel
            journey_quota: "GN",
            to_code: toSCode,
            to_name: toStation,
        })

        const response = await fetch(url + params);
        const result = await response.json();
        setTrainName(result.train_between_stations);

    }



    useEffect(() => {
        fetchFromStationsCode();
        fetchToStationsCode();
        getTrains();
        setLoading(false);
    }, [trainName]);



    return (
        <>
            <h1 className='text-center text-red-400 font-sans text-2xl'>Searched Trains</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='grid md:grid-cols-2 lg:grid-cols-3 space-y-3 place-items-center'>
                    {trainName.map((train, index) => (
                        <Traininfo key={index} Trainname={train.train_name} Trainnumber={train.train_number}
                            duration={train.duration} arrival={train.from_sta} departure={train.from_std} reaching={train.to_std} />
                    ))}
                </div>
            )}
            <div className="flex justify-center mb-2">
                <button className='btn btn-warning'>
                    <Link to="/">Back</Link>
                </button>
            </div>
        </>
    );
};

export default Findtrain;