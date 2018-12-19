<?php
/**
 * Created by PhpStorm.
 * User: Kaspar
 * Date: 19.12.18
 * Time: 08:44
 */

include "db.php";

$id = $_GET['id'];
$response = [];

$query = mysqli_query($conn, "select * from musicians WHERE musician_id = '$id'");

echo json_encode(mysqli_fetch_assoc($query));