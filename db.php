<?php
/**
 * Created by PhpStorm.
 * User: Kaspar
 * Date: 12.11.18
 * Time: 10:19
 */

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mobiilirakendus";

// Create connection
global $conn;
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}