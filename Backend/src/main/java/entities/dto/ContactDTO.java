package entities.dto;

import entities.Contact;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/**
 *
 * @author asgerhs
 */
@Schema(name="Contact")
public class ContactDTO {
    @Schema(required=true, example="Viktor Alfredsen")
    private String fullName;
    @Schema(required=true, example="viktorErCool420@gmail.com")
    private String email;
    @Schema(required=true, example="22334455")
    private String phone;
    @Schema(required=true, example="Not recived my product")
    private String subject;
    @Schema(required=true, example="I need help. I have not recived my product.")
    private String message;

    public ContactDTO() {
    }

    public ContactDTO(Contact contact) {
        this.fullName = contact.getFullName();
        this.email = contact.getEmail();
        this.phone = contact.getPhone();
        this.subject = contact.getSubject();
        this.message = contact.getMessage();
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }



    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 17 * hash + Objects.hashCode(this.fullName);
        hash = 17 * hash + Objects.hashCode(this.email);
        hash = 17 * hash + Objects.hashCode(this.phone);
        hash = 17 * hash + Objects.hashCode(this.subject);
        hash = 17 * hash + Objects.hashCode(this.message);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final ContactDTO other = (ContactDTO) obj;
        if (!Objects.equals(this.fullName, other.fullName)) {
            return false;
        }
        if (!Objects.equals(this.email, other.email)) {
            return false;
        }
        if (!Objects.equals(this.phone, other.phone)) {
            return false;
        }
        if (!Objects.equals(this.subject, other.subject)) {
            return false;
        }
        if (!Objects.equals(this.message, other.message)) {
            return false;
        }
        return true;
    }

   

    
    

}
