<?
require "conn.php";

$arr = [];
if ($_POST["aArt"] == "true"){
    array_push($arr, 'Arts & Crafts');
}
if ($_POST["aBars"] == "true"){
    array_push($arr, 'Bars & Nightlife');
}
if ($_POST["aBrew"] == "true"){
    array_push($arr, 'Breweries, Wineries & Distilleries');
}
if ($_POST["aGalleries"] == "true"){
    array_push($arr, 'Galleries & Museums');
}
if ($_POST["aGuidedTour"] == "true"){
    array_push($arr, 'Guided Tours');
}
if ($_POST["aHealth"] == "true"){
    array_push($arr, 'Health & Wellness');
}
if ($_POST["aLocal"] == "true"){
    array_push($arr, 'Local');
}
if ($_POST["aPerform"] == "true"){
    array_push($arr, 'Performing Arts');
}
if ($_POST["aSpecial"] == "true"){
    array_push($arr, 'Special Events');
}
if ($_POST["aSports"] == "true"){
    array_push($arr, 'Sports & Recreation');
}

$sql = "SELECT attrName, url, address, zip, phone, catName FROM attraction WHERE catName IN ('";

foreach ($arr as $cat){
    $sql .= $cat . "', '";
}
$sql = substr($sql, 0, -3) . ")";

$result = mysqli_query($conn, $sql);

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}

echo json_encode(array("attraction" => $rows));

// if ($conn -> query($sql) !== FALSE) {
//      header('Content-Type: application/json');
//     // echo json_encode(array(
//     //     'message' => 'Submitted',
//     //     ));
//     echo "if";
//     echo json_encode(array($rows));
//  }
//  else {
//      echo "else";
//      echo "Error: " .$sql . "<br>". $conn->error;
//  }

$conn->close();
?>