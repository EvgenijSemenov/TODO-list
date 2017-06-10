package app.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="TASK")
public class Task {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private int id;

    @Column(name = "description")
    private String description;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @Type(type="app.hibernate.type.LocalDateTimeUserType")
    @Column(name = "done_at_date")
    private LocalDateTime doneAtDate;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @Type(type="app.hibernate.type.LocalDateTimeUserType")
    @Column(name = "done_date")
    private LocalDateTime doneDate;

    public Task() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
