<?php

  /**
   * Turn off error display
   */
  ini_set('display_errors', 0);
  ini_set('display_startup_errors', 0);
  error_reporting(0);

  include 'inc.header.php'; 


  /**
   * Main transaction
   */

  $page = $_GET['page'] ?? null;

  switch($page){

    case 'ripple.connection-test':
      ?><script type="text/javascript" src="js/<?php echo $page; ?>.js"></script><?php
    break;

    case 'ripple.get-account-info':
      ?><script type="text/javascript" src="js/<?php echo $page; ?>.js"></script><?php
    break;

     case 'ripple.send-payment':
      ?><script type="text/javascript" src="js/<?php echo $page; ?>.js"></script><?php
    break;

  }

  include 'inc.footer.php'; 

?>