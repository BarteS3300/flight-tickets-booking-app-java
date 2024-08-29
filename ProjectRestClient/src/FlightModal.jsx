import React from 'react';
import { useState } from 'react';

export default function FlightModal({isOpen, onClose, children}){

    if(!isOpen) {
        console.log('modal is closed');
        return null;
    }


    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    background: "white",
                    height: 150,
                    width: 240,
                    margin: "auto",
                    padding: "2%",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                }}
            >

                {/*<form>*/}
                {/*    <label>*/}
                {/*        From:*/}
                {/*        <input type="text" value={flight.from} onChange={e=>setFlight({...flight, from: e.target.value})} />*/}
                {/*    </label><br/>*/}
                {/*    <label>*/}
                {/*        To:*/}
                {/*        <input type="text" value={flight.to} onChange={e=>setFlight({...flight, to: e.target.value})} />*/}
                {/*    </label><br/>*/}
                {/*    <label>*/}
                {/*        Date:*/}
                {/*        <input type="datetime-local" value={flight.date} onChange={e=>setFlight({...flight, date: e.target.value})} />*/}
                {/*    </label><br/>*/}
                {/*    <label>*/}
                {/*        Seats:*/}
                {/*        <input type="number" value={flight.nrOfSeats} onChange={e=>setFlight({...flight, nrOfSeats: e.target.value})} />*/}
                {/*    </label><br/>*/}
                {/*    <button onClick={updateFunc(flight)}>Update</button>*/}
                {/*</form>*/}
                {children}
            </div>
        </div>
    );
}