package rest.start;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import server.StartJsonServer;
import server.repository.FlightDBRepository;

import java.io.IOException;
import java.util.Properties;

@ComponentScan("server")
@ComponentScan("rest")
@SpringBootApplication
@EnableWebMvc
public class StartRestServices {
    public static void main(String[] args) {
        ConfigurableApplicationContext context =  SpringApplication.run(StartRestServices.class, args);


//        FlightDBRepository repo = context.getBean(FlightDBRepository.class);
//
//        Properties serverProps = new Properties();
//        try{
//            serverProps.load(StartJsonServer.class.getResourceAsStream("/projectserver.properties"));
//            System.out.println("Server properties set.");
//            serverProps.list(System.out);
//        } catch (IOException e){
//            System.err.println("Cannot find projectserver.properties " + e);
//            return;
//        }
//
//
//
//        repo.setProps(serverProps);
    }
}
