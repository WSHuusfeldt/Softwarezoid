package errorhandling.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(name = "ApiResponse")
public class ExceptionDTO{

  public ExceptionDTO(int code, String description){
      this.code = code;
      this.message = description;
  }
  private int code;
  private String message;

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
  
}
