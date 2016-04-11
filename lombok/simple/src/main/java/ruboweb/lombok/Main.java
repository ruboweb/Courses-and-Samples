package ruboweb.lombok;

import ruboweb.lombok.model.Address;
import ruboweb.lombok.model.Person;

public class Main {

	public Main() {

	}

	// all get and set are auto generated by lombok
	private void run() {
		Address a = new Address("Oviedo", "Asturias", "12345"); // auto-generated constructor with @NonNull
		a.setNumber(16); // this set is auto-generated
		
		Person p = new Person("Dummy", 123456789L, a); // auto-generated constructor with @NonNull
		p.setSurname("My last Name");// this set is auto-generated
		p.setYears(32);// this set is auto-generated
			
		System.out.println(p); // auto-generated toString
		System.out.println(p.getAddress()); // auto-generated toString
	}
	
	public static void main(String[] args) {
		new Main().run();
	}

}