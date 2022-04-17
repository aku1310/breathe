<?php

$score1 = 0;
$score2 = 0;

// if(isset($_GET['submit'])){
//         if(!empty($_GET['radio'])) {
//             $score1 = ques-eight + ques-nine + ques-ten + ques-eleven + ques-twelve + ques-thirteen + ques-eight + ques-eight + ques-eight + ques-eight + ques-eight;
//             // echo "<script>console.log('Console: " . $score1 . "' );</script>";
//         } 
//     }

if (isset($_POST['result']))
    {
  $radioVal1 = $_POST["ques-one"];
  
}


// for ($i = 0; $i < 27; $i++) { 
    
// }

// for ($i = 0; $i < 21; $i++) { 
    
// }

$anxseverity;
$depseverity;

if($score1 >= 20) {
    $depseverity = "Severe";
}

else if($score1 < 20 && $score1 >= 15) {
    $depseverity = "Moderately Severe";
}

else if($score1 < 15 && $score1 >= 10) {
    $depseverity = "Moderate";
}

else if($score1 < 10 && $score1 >= 5) {
    $depseverity = "Mild";
}
else {
    $depseverity = "Big Sad";
}




if($score1 >= 15) {
    $depseverity = "Severe";
}

else if($score2 < 15 && $score1 >= 10) {
    $depseverity = "Moderate";
}

else if($score2 < 10 && $score1 >= 5) {
    $depseverity = "Mild";
}

else {
    $depseverity = "Big Panic";
}


?>

<script>
    console.log(<?php $radioVal1 ?>);
</script>