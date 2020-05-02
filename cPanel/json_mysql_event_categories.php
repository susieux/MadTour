<?
require "conn.php";

$id = 0;
for ($i = 1; $i <= 5; $i++)
{
    $filename = "events/event$i.json";
    $data = file_get_contents($filename);
    $array = json_decode($data, true)["docs"]["docs"];
    
    foreach ($array as $row)
    {
        $category = $row["categories"];
        foreach ($category as $cat)
        {
            $sql = "INSERT INTO category(eventId, catName, catId, id) VALUES('".$row["_id"]."', '".addslashes($cat["catName"])."', '".$cat["catId"]."', '".$id."')";
            mysqli_query($conn, $sql);
            $id = $id + 1;
            echo "$sql <br>";
        }
    }
}

echo "Event Data Inserted";

?>