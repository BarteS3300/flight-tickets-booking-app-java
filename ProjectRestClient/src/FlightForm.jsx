
import React from  'react';
import { useState } from 'react';
import moment from 'moment';
export default function FlightForm({addFunc}){

    const [id, setId] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [nrOfSeats, setNrOfSeats] = useState('');


   function handleSubmit (event){
       event.preventDefault();
        let flight={
            from: from,
            to: to,
            date: moment(date).format('YYYY-MM-DD HH:mm'),
            nrOfSeats: nrOfSeats
        }
        console.log('A flight was submitted: ');
        console.log(flight);
        addFunc(flight);
    }
    return(
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

        <input type="submit" value="Add flight" />
    </form>);
}
/*class FlightForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {username: '', name:'', passwd:''};

      //  this.handleChange = this.handleChange.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange=(event) =>{
        this.setState({username: event.target.value});
    }

    handleNameChange=(event) =>{
       this.setState({name: event.target.value});
    }

    handlePasswdChange=(event) =>{
        this.setState({passwd: event.target.value});
    }
    handleSubmit =(event) =>{

        let user={id:this.state.username,
                name:this.state.name,
                passwd:this.state.passwd
        }
        console.log('A user was submitted: ');
        console.log(user);
        this.props.addFunc(user);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={this.state.username} onChange={this.handleUserChange} />
                </label><br/>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </label><br/>
                <label>
                    Passwd:
                    <input type="password" value={this.state.passwd} onChange={this.handlePasswdChange} />
                </label><br/>

                <input type="submit" value="Add user" />
            </form>
        );
    }
}
export default FlightForm;*/