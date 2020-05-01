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

// user didn't select any category, return everything
if (count($arr) == 0){
    $sql = "SELECT attrName, url, address, zip, phone, catName FROM attraction ORDER BY attrName";
    // echo "No category chosen, here's all events on the chosen date.";
}

else{
    $sql = "SELECT attrName, url, address, zip, phone, catName FROM attraction WHERE catName IN ('";
    
    foreach ($arr as $cat){
        $sql .= $cat . "', '";
    }
    $sql = substr($sql, 0, -3) . ") ORDER BY attrName";
}

$result = mysqli_query($conn, $sql);

// In case of an empty query
if (mysqli_num_rows($result) == 0) { 
    $sql = "SELECT e.title, e.date, e.start_time, e.end_time, e.address, e.zip, e.location FROM event AS e, category AS c WHERE c.eventId = e.id AND e.date = $time ORDER BY e.title ASC";
    $result = mysqli_query($conn, $sql);
}

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}

echo json_encode(array("attraction" => $rows));

$conn->close();
?>