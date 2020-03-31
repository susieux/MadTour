<?
require "conn.php";

for ($i = 1; $i <= 5; $i++)
{
    $filename = "events/event$i.json";
    $data = file_get_contents($filename);
    $array = json_decode($data, true)["docs"]["docs"];
    
    foreach ($array as $row)
    {
        $sql = "INSERT INTO event(id, address, zip, start_date, type, end_date, 
        location, start_time, end_time, title) VALUES('".$row["_id"]."', 
        '".addslashes($row["address1"])."', '".$row["zip"]."', '".$row["startDate"]."', 
        '".$row["typeName"]."', '".$row["endDate"]."', '".addslashes($row["location"])."', 
        '".$row["startTime"]."', '".$row["endTime"]."', '".addslashes($row["title"])."')";
        mysqli_query($conn, $sql);
        echo "$sql <br>";
    }
}

echo "Event Data Inserted";

?>