<?php

  
  $full_name = $_POST['name'];
  $mobile = $_POST['number'];
  $email = $_POST['email'];
  $ploc = $_POST['plocation'];
  $pdate = $_POST['pickupdate'];
  $ptime = $_POST['ptime'];
  $dloc = $_POST['dlocation'];
  $ddate = $_POST['dropdate'];
  $dtime = $_POST['dtime'];


  $vehicle = $_POST['car_select'];
  $price = $_POST['amt'];



  $to = "rentacargoa0@gmail.com";
  $subject = "Resever Now Form Enquiry";
  $detail = "$full_name $mobile $email $ploc $pdate $ptime $dloc $ddate $dtime $vehicle";


  // if(mail($to, $full_name, $mobile, $ploc, $pdate, $dloc, $ddate, $vehicle, $price)){
  //   echo "Mail send Successfully";
  // }
  // else{
  //   echo "Error sending Mail";
  // }

   if(mail($to, $subject, $detail)){
    echo "Mail send Successfully, $detail";
  }
  else{
    echo "Error sending Mail";
  }




  
// if($_POST) {
//     $car_select = "";
//     $name = "";
//     $number = "";
//     $email = "";
//     $location = "";
//     $pickupdate = "";
//     $dlocation = "";
//     $dropdate = "";

      
//     if(isset($_POST['car_select'])) {
//         $car_select = filter_var($_POST['car_select'], FILTER_SANITIZE_STRING);
//         $email_body .= "<div>
//                            <label><b>Car Name:</b></label>&nbsp;<span>".$car_select."</span>
//                         </div>";
//     }
 
//     if(isset($_POST['name'])) {
//         $name = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['name']);
//         $name = filter_var($name, FILTER_VALIDATE_EMAIL);
//         $email_body .= "<div>
//                            <label><b>Full Name:</b></label>&nbsp;<span>".$name."</span>
//                         </div>";
//     }
      
//     if(isset($_POST['number'])) {
//         $number = filter_var($_POST['number'], FILTER_SANITIZE_STRING);
//         $number .= "<div>
//                            <label><b>Mobile Number:</b></label>&nbsp;<span>".$number."</span>
//                         </div>";
//     }
      
//     if(isset($_POST['email'])) {
//         $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
//         $email .= "<div>
//                            <label><b>Email:</b></label>&nbsp;<span>".$email."</span>
//                         </div>";
//     }
      
//     if(isset($_POST['location'])) {
//         $location = htmlspecialchars($_POST['location']);
//         $location .= "<div>
//                            <label><b>Location:</b></label>
//                            <div>".$location."</div>
//                         </div>";
//     }

//     if(isset($_POST['pickupdate'])) {
//         $pickupdate = htmlspecialchars($_POST['pickupdate']);
//         $pickupdate .= "<div>
//                            <label><b>Pickup Date:</b></label>
//                            <div>".$pickupdate."</div>
//                         </div>";
//     }

//     if(isset($_POST['dlocation'])) {
//         $dlocation = htmlspecialchars($_POST['dlocation']);
//         $dlocation .= "<div>
//                            <label><b>Drop Location:</b></label>
//                            <div>".$dlocation."</div>
//                         </div>";
//     }

//     if(isset($_POST['dropdate'])) {
//         $dropdate = htmlspecialchars($_POST['dropdate']);
//         $dropdate .= "<div>
//                            <label><b>Drop Date:</b></label>
//                            <div>".$dropdate."</div>
//                         </div>";
//     }
      
//     if(mail($to, $car_select,
//     $name,
//     $number,
//     $email,
//     $location,
//     $pickupdate,
//     $dlocation,
//     $dropdate)) {
//         echo "<p>Thank you for contacting us, $name. You will get a reply within 24 hours.</p>";
//     } else {
//         echo "p>We are sorry but the email did not go through. $name</p>";
//     }
      
// } else {
//     echo '<p>Something went wrong</p>';
// }
?>