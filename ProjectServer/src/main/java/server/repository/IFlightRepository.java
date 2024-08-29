package server.repository;

import common.domain.Flight;

public interface IFlightRepository extends Repository<Long, Flight> {
    Long saveV2(Flight entity);
}
