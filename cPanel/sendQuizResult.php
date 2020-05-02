<?
require "connResults.php";

$filename = "result.json";
$data = file_get_contents($filename);
$array = json_decode($data, true)["results"];

foreach ($array as $row)
{
    $sql = "INSERT INTO result(intensity, distance, inOutDoor, transport) VALUES('".$row["intensity"]."', 
    '".addslashes($row["distance"])."', '".addslashes($row["inOutDoor"])."', '".addslashes($row["transport"])."')";
    mysqli_query($conn, $sql);
    echo "$sql <br>";
}

echo "Quiz Result Saved";

echo json_encode(array(
    'message' => 'Submitted',
    ));

?>