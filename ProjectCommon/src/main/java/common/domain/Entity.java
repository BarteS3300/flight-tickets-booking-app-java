package common.domain;

import java.io.Serializable;
import java.util.Objects;

public interface Entity<ID> extends Serializable {
    ID getId();

    void setId(ID id);
}
