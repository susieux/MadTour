<?
require "conn.php";

$id = 0;
for ($i = 1; $i <= 3; $i++)
{
    $filename = "attractions/$i.json";
    $data = file_get_contents($filename);
    $array = json_decode($data, true);
    
    foreach ($array as $row)
    {
        $category = $row["categories"];
        foreach ($category as $cat)
        {
            $sql = "INSERT INTO attraction(attrId, attrName, url, address, zip, phone, catName, catId, id) VALUES('".$row["_id"]."', '".addslashes($row["title"])."', '".$row["absolute_url"]."','".addslashes($row["address1"])."', '".$row["zip"]."', '".$row["phone"]."', '".addslashes($cat["subcatname"])."', '".$cat["subcatid"]."', '".$id."')";
            mysqli_query($conn, $sql);
            $id = $id + 1;
        }
    }
}

echo $id, " Event Data Inserted";

?>