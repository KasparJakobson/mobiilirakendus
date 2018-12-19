<?php
/**
 * Created by PhpStorm.
 * User: Kaspar
 * Date: 18.12.18
 * Time: 17:29
 */

include "db.php";

$id_array = $_GET['id_array'];
$response = [];

$query = mysqli_query($conn, "select * from musicians WHERE musician_id in ($id_array)");

while ($row = mysqli_fetch_assoc($query)) {
    array_push($response, $row);
}

echo json_encode($response);