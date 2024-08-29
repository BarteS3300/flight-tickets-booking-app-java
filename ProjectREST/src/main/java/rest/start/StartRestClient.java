package rest.start;

import common.domain.Flight;
import org.springframework.web.client.RestClientException;
import rest.client.RESTClient;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;
import server.business.ServiceException;

public class StartRestClient {
    private final static RESTClient flightClient=new RESTClient();
    public static void main(String[] args) {

        Flight flightTest=new Flight("testRest1","testRest2", LocalDateTime.now(), 0);

        try{
            System.out.println("Adding a new flight "+ flightTest);
            show(()-> System.out.println(flightClient.create(flightTest)));
        }catch(RestClientException ex){
            System.out.println("Exception ... "+ex.getMessage());
        }

        Flight[] res=flightClient.getAll();
        System.out.println("\nPrinting all flights ...");
        show(()->{
            for(Flight f:res){
                System.out.println(f.toString());
            }
        });

        Optional<Flight> oFlight=Optional.empty();

        for(Flight f:res){
            if(f.getFrom().equals("testRest1") && f.getTo().equals("testRest2")){
                oFlight=Optional.of(f);
                break;
            }
        }

        if(oFlight.isPresent()){
            Long lastFlightId = oFlight.get().getId();
            System.out.println("\nInfo for flight with id"+lastFlightId);
            show(()-> System.out.println(flightClient.getById(lastFlightId)));

            System.out.println("\nDeleting flight with id="+lastFlightId);
            show(()-> flightClient.delete(lastFlightId));
        }
    }



    private static void show(Runnable task) {
        try {
            task.run();
        } catch (ServiceException e) {
            //  LOG.error("Service exception", e);
            System.out.println("Service exception"+ e);
        }
    }
}
