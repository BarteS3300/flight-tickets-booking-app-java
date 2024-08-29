
import React from  'react';
import './FlightApp.css'

function FlightRow({flight, deleteFunc, updateFunc}){
    function handleDelete(event){
        console.log('delete button pentru '+flight.id);
        deleteFunc(flight.id);
    }

    function handleUpdate(event){
        console.log('update button pentru '+flight.id);
        updateFunc(flight);
    }

    return (
        <tr>
            <td>{flight.id}</td>
            <td>{flight.from}</td>
            <td>{flight.to}</td>
            <td>{flight.date}</td>
            <td>{flight.nrOfSeats}</td>
            <td><button onClick={handleDelete}>Delete</button></td>
            <td><button onClick={handleUpdate}>Update</button></td>
        </tr>
    );
}
/*class UserRow extends React.Component{

    handleDelete=(event)=>{
        console.log('delete button pentru '+this.props.user.id);
        this.props.deleteFunc(this.props.user.id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.name}</td>
                <td><button  onClick={this.handleDelete}>Delete</button></td>
            </tr>
        );
    }
}
*/

export default function FlightTable({flightsList, deleteFunc, updateFunc}){
    console.log("In FlightTable");
    console.log(flightsList);
    let rows = [];
    let functieStergere=deleteFunc;
    let functieUpdate=updateFunc;
    flightsList.forEach(function(flight) {
        rows.push(<FlightRow flight={flight}  key={flight.id} deleteFunc={functieStergere} updateFunc={functieUpdate}/>);
    });


    return (
        <div className="FlightTable">

            <table className="center">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Date</th>
                    <th>Nr of seats</th>

                    <th colSpan={2}>Actions</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>

        </div>
    );
}

/*class FlightTable extends React.Component {
    render() {
        let rows = [];
        let functieStergere=this.props.deleteFunc;
        this.props.users.forEach(function(user) {

            rows.push(<UserRow user={user}  key={user.id} deleteFunc={functieStergere} />);
        });
        return (<div className="FlightTable">

            <table className="center">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Name</th>

                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>

            </div>
        );
    }
}

export default FlightTable;*/