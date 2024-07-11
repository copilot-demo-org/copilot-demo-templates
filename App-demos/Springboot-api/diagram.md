# Class Diagram for CustomerController.java

Below is the class diagram for the `CustomerController` class using Mermaid JS:

```mermaid
classDiagram
    class CustomerController {
        +Customer getCustomer()
    }
    class CustomerDAO {
        +Customer getCustomer()
    }
    class Customer {
        +int customerID
        +String name
        +String address
        +String phoneNumber
        +String email
        +int getCustomerID()
        +String getName()
    }
    CustomerController --> CustomerDAO
    CustomerDAO --> Customer

classDiagram
    class Customer {
        -int customerID
        -String name
        -String address
        -String phoneNumber
        -String email
        -CustomerCreditRating creditRating
        -CustomerPaymentReport paymentReport
        +Customer(int customerID, String name, String address, String phoneNumber, String email)
        +int getCustomerID()
        +void setCustomerID(int customerID)
        +String getName()
        +void setName(String name)
        +String getAddress()
        +void setAddress(String address)
        +String getPhoneNumber()
        +void setPhoneNumber(String phoneNumber)
        +String getEmail()
        +void setEmail(String email)
        +boolean validateEmail()
        +boolean validatePhoneNumber()
        +CustomerCreditRating getCreditRating()
        +void setCreditRating(CustomerCreditRating creditRating)
        +CustomerPaymentReport getPaymentReport()
        +void setPaymentReport(CustomerPaymentReport paymentReport)
        +static Customer getSampleCustomer()
    }
    class CustomerCreditRating {
        // Assume fields and methods for CustomerCreditRating
    }
    class CustomerPaymentReport {
        // Assume fields and methods for CustomerPaymentReport
    }
    Customer --> CustomerCreditRating
    Customer --> CustomerPaymentReport
