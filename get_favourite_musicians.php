<?php
/**
 * Created by PhpStorm.
 * User: Kaspar
 * Date: 19.12.18
 * Time: 11:39
 */

include "db.php";

$user_id = $_GET['user_id'];
$id_array = [];
$response = [];

$query = mysqli_query($conn, "select * from added_musicians where user_id = '$user_id'");

while ($row = mysqli_fetch_assoc($query)) {
    array_push($id_array, $row["musician_id"]);
}
$id_array = implode(",", $id_array);

$query = mysqli_query($conn, "select * from musicians WHERE musician_id in ($id_array)");

while ($row = mysqli_fetch_assoc($query)) {
    array_push($response, $row);
}

echo json_encode($response);