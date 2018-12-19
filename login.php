<?php
/**
 * Created by PhpStorm.
 * User: Kaspar
 * Date: 12.11.18
 * Time: 12:10
 */

include "db.php";

$username = $_GET['username'];
$password = $_GET['password'];
$response = [];

$query = mysqli_query($conn, "select * from users WHERE username='$username' && password='$password'");

while ($row = mysqli_fetch_assoc($query)) {
    $response = $row;
}

if (!empty($response)) {
    echo $response["user_id"];
} else {
    echo 0;
}