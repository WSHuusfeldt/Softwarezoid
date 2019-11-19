package entities.dto;

import entities.Contact;

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


    
    

}
