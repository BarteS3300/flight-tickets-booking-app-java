package rest.services;

import common.domain.Flight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.repository.IFlightRepository;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/project/flights")
public class ProjectFlightController {

    @Autowired
    private IFlightRepository FlightDBRepository;

    @RequestMapping("/test")
    public String test(){
        return "Test";
    }

    @RequestMapping(method = RequestMethod.GET)
    Iterable<Flight> readFlights(){
        return FlightDBRepository.getAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    ResponseEntity<?> readFlight(@PathVariable String id){
        Flight flight = FlightDBRepository.findOne(Long.valueOf(id)).orElse(null);
        if(flight == null)
            return new ResponseEntity<String>("Flight not found", HttpStatus.NOT_FOUND);
        else
            return new ResponseEntity<Flight>(flight, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<?> addFlight(@RequestBody Flight flight){
        System.out.println("Adding flight: " + flight);
        Long id = FlightDBRepository.saveV2(flight);
        return new ResponseEntity<Long>(id, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    ResponseEntity<?> updateFlight(@RequestBody Flight flight){
        FlightDBRepository.update(flight);
        return new ResponseEntity<Flight>(flight, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    ResponseEntity<?> deleteFlight(@PathVariable String id){
        Optional<Flight> flight = FlightDBRepository.findOne(Long.valueOf(id));
        if(flight.isPresent()){
            FlightDBRepository.delete(Long.valueOf(id));
            return new ResponseEntity<Flight>(flight.get(), HttpStatus.OK);
        }
        return new ResponseEntity<String>("Flight not found", HttpStatus.NOT_FOUND);
    }

}
