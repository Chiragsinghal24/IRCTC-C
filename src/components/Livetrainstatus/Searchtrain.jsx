import React, { useEffect, useState} from 'react';
import { FaTrainSubway } from "react-icons/fa6";
import Trainmap from './Trainmap';
import { Link, useNavigate } from 'react-router-dom';

const Searchtrain = () => {
    const [trainnumber, setTrainNumber] = useState("");
    const [trainData, setTrainData] = useState([]);
    // const [isListOpen, setIsListOpen] = useState(true);

    const navigate = useNavigate();

    const [routeTrainnumber, setRouteTrainNumber] = useState("");
    const [routeTrainname, setRouterTrainName] = useState("");

    const [stationDataArray, setStationDataArray] = useState([]);

    const handleClick = (e) => {
        setTrainNumber(e.target.value);
    };

    useEffect(() => {
        if (trainnumber !== "") {
            handleButtonClick();
        }
    }, [trainnumber]);

    const handleButtonClick = async () => {
        try {
            const apiUrl = `https://www.prokerala.com/travel/indian-railway/search.json?mode=trains&query=${trainnumber}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Assuming data[0].items is an array of train data
            setTrainData(data[0].items);
            console.log("Fetched data:", data[0].items);

        } catch (error) {
            alert("Please enter a correct PNR number.");
            console.error('Error fetching data:', error);
        }
    };

    const handleFetchStationData = async () =>{
        try{
            const url=`https://gotrains.goibibo.com/v2/trains/status/${routeTrainnumber}?flavour=mweb`
            const trainResponse = await fetch(url);
            const traindata = await trainResponse.json();
            const bigDataValue=traindata.response.station_data;

        } catch (error) {
            alert("Please enter a correct PNR number.");
            console.error('Error fetching data:', error);
        }
    }
    
    const handleInputChange = (selectedTrain) => {
        setRouteTrainNumber(selectedTrain.train_number);
        setRouterTrainName(selectedTrain.train_name);
        const newTrainName = `${selectedTrain.train_number} - ${selectedTrain.train_name}`;
        setTrainNumber(newTrainName);
        setIsListOpen(false);
    };

    const handleTrainStatus = () => {
        console.log("route train no.", routeTrainnumber);
        console.log("route train name:", routeTrainname);

        // handleFetchStationData();

        const shouldRenderTrainmap = routeTrainnumber !== '' && routeTrainname !== '';
        shouldRenderTrainmap ? navigate(`/trainmap?trainNumber=${routeTrainnumber}&trainName=${routeTrainname}`): alert("Please enter the train number or train name");
    };
    

    return (
        <div className="bg-gradient-to-l from-purple-950 to-black flex flex-col w-screen min-h-screen">
            <h1 className='text-center text-white font-sans text-2xl mb-2'>Check Live Train Status</h1>
            <div className='flex flex-col max-h-screen mt-2 items-center'>
                <div className="card w-96 bg-base-100 shadow-xl h-[190px]">
                    <div className="card-body w-full flex flex-col rounded-md">
                        <h2 className="card-title">
                            Enter the Train number/name
                        </h2>
                        <div className='w-100'>
                            <input
                                type="text"
                                value={trainnumber}
                                onChange={handleClick}
                                placeholder="Train number/name"
                                className="input input-bordered input-info w-[300px]"
                                required
                            />
                        </div>
                        <div className='search_container'>
                            <button className='btn btn-warning' onClick={handleTrainStatus}>Train Status</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='max-h-[600px] overflow-y-auto overflow-clip w-96 mt-5'>
                        <ul>
                            {trainData.map((train, index) => (
                                <li key={index} className="bg-white border-b" onClick={() => handleInputChange(train)}>
                                    <p className='p-3 w-96 cursor-pointer'><span><FaTrainSubway /></span><span className='font-bold'>{train.train_number}</span>-<span className='text-gray-800 font-'>{train.train_name}</span></p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searchtrain;
