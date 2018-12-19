<?php
/**
 * Created by PhpStorm.
 * User: Kaspar
 * Date: 19.12.18
 * Time: 11:39
 */

include "db.php";

$user_id = $_GET['user_id'];
$musician_id = $_GET['musician_id'];
$response = [];

$query = mysqli_query($conn, "insert into added_musicians (user_id, musician_id) values ('$user_id', '$musician_id')");

echo 200;