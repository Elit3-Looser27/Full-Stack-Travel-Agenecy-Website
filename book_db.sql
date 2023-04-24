-- phpMyAdmin SQL Dump


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


-- Database name: `book_db`
-- Tables structure for table `book_form`


CREATE TABLE `book_form` (
  `id` int(255) PRIMARY NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `phone` int(15) NOT NULL,
  `address` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `guests` int(255) NOT NULL,
  `arrivals` date NOT NULL,
  `leaving` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

CREATE TABLE `user` (
  `id` int(255) PRIMARY NOT NULL,
  `name` varchar(128) NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `password_hash`varchar(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;