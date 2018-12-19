<?php
/**
 * Created by PhpStorm.
 * User: Kaspar
 * Date: 19.12.18
 * Time: 08:48
 */

include "db.php";

$response = [];

$query = mysqli_query($conn, "select * from musicians");

while ($row = mysqli_fetch_assoc($query)) {
    array_push($response, $row);
}

echo json_encode($response);