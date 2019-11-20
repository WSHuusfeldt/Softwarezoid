package entities.dto;

import entities.Contact;
import java.util.Objects;

/**
 *
 * @author asgerhs
 */
public class ContactDTO {

    private String fullName;
    private String email;
    private int phone;
    private String subject;
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

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
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
        int hash = 3;
        hash = 17 * hash + Objects.hashCode(this.fullName);
        hash = 17 * hash + Objects.hashCode(this.email);
        hash = 17 * hash + this.phone;
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
        if (this.phone != other.phone) {
            return false;
        }
        if (!Objects.equals(this.fullName, other.fullName)) {
            return false;
        }
        if (!Objects.equals(this.email, other.email)) {
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
