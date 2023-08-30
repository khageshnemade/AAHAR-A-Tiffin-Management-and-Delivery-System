Tiffin Delivery and Management System
Version 1.0 approved

Prepared By Project Team 02 :

Name PRN
Shubhanshu Jaiswal (PL) 230340320107

Shweta Akash Bhosale 230340320109

Khagesh Sunil Nemade 230340320047

Amit Rajendra Danole 230340520013

Jyoti Vaibhav Jadhav 230340320044

The web based “Tiffin Delivery and Management System” project is an attempt to simulate the basic concepts of Tiffin Delivery and Management chain. The system is designed mainly through the perspective of the tiffin provider.
Customer needs to Sign up and check the menu and order the tiffin as per the requirement for required period. Customer needs to add his/her address where the tiffin needs to be delivered before ordering the tiffin. As per customers requirement he/she must have to do payment for the amount generated for that period according to the chosen tiffin.
The system allows the admin to post the tiffin details, manage orders and delivery staff. The admin can add new tiffin in the system, edit the existing system & delete the tiffin as per the requirement of mess provide. Admin can add new addresses where mess are available to deliver the tiffin. Admin can manage the customers. He can get currently active customers who are ordering tiffin’s from this system & can able to delete the inactive customers. Admin can add new Delivery Boy to the system & able to delete the existing Delivery Boy.
When user orders the tiffin, then that tiffin is moved to the “Pending Orders” category. When the tiffin is ready in the local mess, the admin must assign delivery boy to that particular order. After assigning the delivery boy, the status of that order is changed from “Pending” to “Dispatched.” The Delivery Boy has a basic role to accept the order and deliver the tiffin to mentioned address/location. After delivering tiffin to the specified address, the order is moved from “Dispatched” to “Delivered.”

1.1 Purpose
The purpose of the "Tiffin Delivery and Management System" is to streamline the tiffin ordering and delivery process, providing a seamless experience for customers, efficient menu management for admins, and effective order tracking for delivery staff.

1.2 Scope
The system encompasses user registration, menu management, tiffin ordering, order status tracking, and administrative functions. It enables secure transactions, menu updates, and real-time delivery tracking, enhancing the overall customer experience.
![image](https://github.com/khageshnemade/AAHAR-A-Tiffin-Management-and-Delivery-System/assets/128049399/5ce93f43-5a0f-4bf9-95d6-6f585144899b)

Appendix A

1.Entity Relationship Diagram
![image](https://github.com/khageshnemade/AAHAR-A-Tiffin-Management-and-Delivery-System/assets/128049399/a651c77f-02f9-48a5-b543-11bb6d6c94e9)

2.CLass Diagram
![image](https://github.com/khageshnemade/AAHAR-A-Tiffin-Management-and-Delivery-System/assets/128049399/ae076685-6611-4f79-8c09-7d11efe09f57)

### Docker COmmand to export and import image to tar

docker save -o <file_name.tar> <image_name>
docker load -i <file_name.tar>
docker run <image_name>
