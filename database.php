<?php

$host = "localhost";
$dbname = "book_db";
$username = "root";
$password = "";

// creates a new instance of the mysqli class with the specified parameters for connecting to the database.

$mysqli = new mysqli(hostname: $host,
                     username: $username,
                     password: $password,
                     database: $dbname);

// checks for any connection errors by checking the value of the connect_errno property of the $mysqli object. If the value is not zero, the script dies and prints the error message specified in connect_error.

if ($mysqli->connect_errno) {
    die("Connection error: " . $mysqli->connect_error);
}

//  returns the $mysqli object, which can be used to interact with the database.

return $mysqli;