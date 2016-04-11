package ruboweb.lombok.model;

import lombok.Data;
import lombok.NonNull;
import lombok.ToString;

@Data
@ToString(callSuper = false, exclude = "address")
public class Person {
	
	@NonNull
	private String name;
	
	private String surname;
	
	private int years;
	
	@NonNull
	private Long idNumber;

	@NonNull
	private Address address;
}
