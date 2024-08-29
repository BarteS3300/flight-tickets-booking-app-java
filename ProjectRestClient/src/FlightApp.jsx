
import React, {useEffect} from 'react';
import { useState } from 'react';
import FlightTable from './FlightTable.jsx';
import './FlightApp.css'
import FlightForm from "./FlightForm.jsx";
import {GetFlights, DeleteFlight, AddFlight, UpdateFlight} from './utils/rest-calls'
import FlightModal from "./FlightModal.jsx";


export default function FlightApp(){
	const [flights, setFlights] = useState([]);
	const [form, setForm] = useState()
	const [open, setOpen] = useState(false);

	const [id, setId] = useState('');
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');
	const [date, setDate] = useState('');
	const [nrOfSeats, setNrOfSeats] = useState('');

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	useEffect(()=>{
		GetFlights().then(flights=>setFlights(flights));
	}, []);

	function addFunc(flight){
		console.log('inside add Func '+ flight);
		AddFlight(flight)
			.then(res=> GetFlights())
			.then(flights=>setFlights(flights))
			.catch(erorr=>console.log('eroare add ',erorr));
	}

	function updateFunc(flight){
		console.log('inside modify Func '+ JSON.stringify(flight));
		UpdateFlight(flight)
			.then(res=> GetFlights())
			.then(flights=>setFlights(flights))
			.catch(erorr=>console.log('eroare modify ',erorr));
	}

	function handleSubmit(event){
		event.preventDefault();
		let flight={
			id: id,
			from: from,
			to: to,
			date: date,
			nrOfSeats: nrOfSeats
		}
		console.log('A flight was submitted: ');
		console.log(flight);
		updateFunc(flight);
		handleClose();
	}

	function updateModal(flight){
		console.log('inside updateModal '+flight);
		setId(flight.id);
		setFrom(flight.from);
		setTo(flight.to);
		setDate(flight.date);
		setNrOfSeats(flight.nrOfSeats);
		handleOpen();
	}

	function deleteFunc(flight){
		console.log('inside deleteFunc '+flight);
		DeleteFlight(flight)
			.then(res=> GetFlights())
			.then(flights=>setFlights(flights))
			.catch(error=>console.log('eroare delete', error));
	}

	return (<div className="FlightApp">
		<h1>New Flight Management App </h1>
		<FlightForm addFunc={addFunc}/>
		<br/>
		<br/>
		<FlightTable flightsList={flights} deleteFunc={deleteFunc} updateFunc={updateModal}/>
		<FlightModal isOpen={open} onClose={handleClose}>
			<>
				<h2>Update Flight {id}</h2>
				<form onSubmit={handleSubmit}>
					<label>
						From:
						<input type="text" value={from} onChange={e=>setFrom(e.target.value)} />
					</label><br/>
					<label>
						To:
						<input type="text" value={to} onChange={e=>setTo(e.target.value)} />
					</label><br/>
					<label>
						Date:
						<input type="datetime-local" value={date} onChange={e=>setDate(e.target.value)} />
					</label><br/>
					<label>
						Seats:
						<input type="number" value={nrOfSeats} onChange={e=>setNrOfSeats(e.target.value)} />
					</label><br/>
				    <input type="submit" value="Update flight" />
					<button onClick={handleClose}>Close</button>
				</form>
			</>
		</FlightModal>
	</div>);
}

