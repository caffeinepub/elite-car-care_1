import Text "mo:core/Text";
import Array "mo:core/Array";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type Booking = {
    name : Text;
    email : Text;
    phone : Text;
    service : Text;
    preferredDate : Text;
    message : Text;
  };

  let bookings = List.empty<Booking>();

  public shared ({ caller }) func submitBooking(name : Text, email : Text, phone : Text, service : Text, preferredDate : Text, message : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or phone.isEmpty() or service.isEmpty() or preferredDate.isEmpty()) {
      Runtime.trap("All fields except message are required");
    };

    let booking : Booking = {
      name;
      email;
      phone;
      service;
      preferredDate;
      message;
    };

    bookings.add(booking);
  };

  public query ({ caller }) func getBookings() : async [Booking] {
    bookings.reverse().toArray();
  };
};
