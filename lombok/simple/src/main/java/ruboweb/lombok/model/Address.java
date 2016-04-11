package ruboweb.lombok.model;

import lombok.Data;
import lombok.NonNull;

@Data
public class Address {
	@NonNull
	private String city;

	@NonNull
	private String state;

	private String street;

	private int number;

	private String door;

	private String flat;

	@NonNull
	private String zip;

}
