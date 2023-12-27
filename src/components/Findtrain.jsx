import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Traininfo from './Traininfo';
import { Link } from 'react-router-dom';

const fetchData = async (fromStation, toStation, dateValue) => {
    const fromSCode = await fetchStationCode(fromStation);
    const toSCode = await fetchStationCode(toStation);

    const url = 'https://api.railyatri.in/api/trains-between-station-from-wrapper.json?';
    const params = new URLSearchParams({
        from: fromSCode,
        to: toSCode,
        dateOfJourney: dateValue,
        from_code: fromSCode,
        from_name: fromStation,
        journey_date: dateValue,
        journey_quota: 'GN',
        to_code: toSCode,
        to_name: toStation,
    });

    const response = await fetch(url + params);
    const result = await response.json();
    console.log(result.train_between_stations);
    console.log("the class type", result.train_between_stations[0].class_type);
    return result.train_between_stations;
};

const fetchStationCode = async (stationName) => {
    const url = `https://api.railyatri.in/api/common_city_station_search.json?hide_city=true&q=${stationName}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.items[0].station_code)
    return result.items[0].station_code;
};

const Findtrain = () => {
    const location = useLocation();
    const { fromStation, toStation, dateValue } = location.state || {};
    const [trainName, setTrainName] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataAndSetState = async () => {
            try {
                const trains = await fetchData(fromStation, toStation, dateValue);
                setTrainName(trains);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchDataAndSetState();
    }, [fromStation, toStation, dateValue]);

    return (
        <>
            <h1 className='text-center text-red-400 font-sans text-2xl'>Searched Trains</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='grid gap-x-4 md:grid-cols-2 lg:grid-cols-3 space-y-3 place-items-center'>
                    {trainName.map((train, index) => (
                        <Traininfo
                            key={index}
                            Trainname={train.train_name}
                            Trainnumber={train.train_number}
                            duration={train.duration}
                            arrival={train.from_sta}
                            departure={train.from_std}
                            reaching={train.to_std}
                            distance={train.distance}
                            halts={train.halt_stn}
                            SFCode={train.from}
                            STCode={train.to}
                            SFname={train.from_station_name}
                            STname={train.to_station_name}
                            coachtype={train.class_type}
                            date={train.train_date}
                        />
                    ))}
                </div>
            )}
            <div className='flex justify-center mb-2 mt-4'>
                <button className='btn btn-warning'>
                    <Link to='/'>Back</Link>
                </button>
            </div>
        </>
    );
};

export default Findtrain;
