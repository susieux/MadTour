<?
require "conn.php";

$time = $_POST["time"];
$arr = [];
if ($_POST["eAnnual"] == "true"){
    array_push($arr, 'Annual Events');
}
if ($_POST["eArt"] == "true"){
    array_push($arr, 'Arts & Culture');
}
if ($_POST["eEducation"] == "true"){
    array_push($arr, 'Education & Lectures');
}
if ($_POST["eEntertainment"] == "true"){
    array_push($arr, 'Entertainment & Nightlife');
}
if ($_POST["eFairs"] == "true"){
    array_push($arr, 'Fairs & Festivals');
}
if ($_POST["eFood"] == "true"){
    array_push($arr, 'Food & Drink');
}
if ($_POST["eFree"] == "true"){
    array_push($arr, 'Free Event');
}
if ($_POST["eGallery"] == "true"){
    array_push($arr, 'Gallery & Exhibitions');
}
if ($_POST["eGeneral"] == "true"){
    array_push($arr, 'General & Community Events');
}
if ($_POST["eHoliday"] == "true"){
    array_push($arr, 'Holiday/Seasonal'); // TODO
}
if ($_POST["eKids"] == "true"){
    array_push($arr, 'Kids & Families');
}
if ($_POST["eLocal"] == "true"){
    array_push($arr, 'Local Libations');
}
if ($_POST["eMusic"] == "true"){
    array_push($arr, 'Music & Concerts');
}
if ($_POST["eNature"] == "true"){
    array_push($arr, 'Nature & Outdoors');
}
if ($_POST["eShopping"] == "true"){
    array_push($arr, 'Shopping');
}
if ($_POST["eSports"] == "true"){
    array_push($arr, 'Sports & Recreation');
}
if ($_POST["eTheater"] == "true"){
    array_push($arr, 'Theater & Performing Arts');
}
if ($_POST["eTours"] == "true"){
    array_push($arr, 'Tours & Walks');
}
if ($_POST["eTrivia"] == "true"){
    array_push($arr, 'Trivia');
}
if ($_POST["eVirtual"] == "true"){
    array_push($arr, 'Virtual Event');
}

// user didn't select any category, return everything
if (count($arr) == 0){
    $sql = "SELECT e.title, e.date, e.start_time, e.end_time, e.address, e.zip, e.location FROM event AS e, category AS c WHERE c.eventId = e.id AND e.date = $time ORDER BY e.title ASC";
    // echo "No category chosen, here's all events on the chosen date.";
}

else{
    $sql = "SELECT e.title, e.date, e.start_time, e.end_time, e.address, e.zip, e.location FROM event AS e, category AS c WHERE c.eventId = e.id AND e.date = $time AND c.catName IN ('";
    
    foreach ($arr as $cat){
        $sql .= $cat . "', '";
    }
    $sql = substr($sql, 0, -3) . ") ORDER BY e.title ASC";
}

$result = mysqli_query($conn, $sql);

// In case of an empty query, return everything
if (mysqli_num_rows($result) == 0) { 
    $sql = "SELECT e.title, e.date, e.start_time, e.end_time, e.address, e.zip, e.location FROM event AS e, category AS c WHERE c.eventId = e.id AND e.date = $time ORDER BY e.title ASC";
    $result = mysqli_query($conn, $sql);
}

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
// echo json_encode(array($rows));

if ($conn -> query($sql) !== FALSE) {
     header('Content-Type: application/json');
    // echo json_encode(array(
    //     'message' => 'Submitted',
    //     ));
    echo json_encode(array("events" =>$rows));
 }
 else {
     echo "Error: " .$sql . "<br>". $conn->error;
 }

$conn->close();
?>