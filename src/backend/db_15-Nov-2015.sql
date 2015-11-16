-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-11-2015 a las 06:27:41
-- Versión del servidor: 5.6.21
-- Versión de PHP: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `poketracker`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order`
--

CREATE TABLE IF NOT EXISTS `order` (
  `order_id` int(11) NOT NULL,
  `pokemon_id` int(11) NOT NULL,
  `order_value` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pokemon`
--

CREATE TABLE IF NOT EXISTS `pokemon` (
  `pokemon_id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pokemon`
--

INSERT INTO `pokemon` (`pokemon_id`, `team_id`) VALUES
(2, 13),
(3, 1),
(3, 12),
(4, 1),
(7, 2),
(12, 6),
(15, 6),
(18, 13),
(25, 10),
(31, 14),
(49, 6),
(52, 10),
(59, 7),
(68, 12),
(76, 15),
(82, 13),
(91, 15),
(99, 13),
(106, 16),
(108, 15),
(115, 11),
(127, 14),
(134, 13),
(135, 15),
(144, 9),
(145, 1),
(145, 9),
(146, 9),
(151, 15),
(154, 5),
(155, 1),
(157, 5),
(163, 9),
(196, 18),
(217, 14),
(224, 14),
(229, 7),
(244, 7),
(248, 12),
(249, 9),
(249, 13),
(250, 9),
(255, 1),
(255, 10),
(257, 14),
(262, 7),
(269, 18),
(282, 11),
(291, 6),
(300, 2),
(305, 14),
(321, 17),
(322, 3),
(350, 12),
(356, 16),
(382, 17),
(384, 17),
(393, 10),
(414, 6),
(417, 10),
(424, 18),
(427, 10),
(432, 16),
(469, 6),
(485, 11),
(488, 11),
(488, 12),
(493, 17),
(497, 5),
(500, 1),
(500, 5),
(503, 5),
(534, 16),
(540, 2),
(566, 2),
(591, 18),
(593, 18),
(626, 18),
(637, 16),
(639, 7),
(642, 11),
(644, 17),
(645, 11),
(646, 17),
(658, 5),
(676, 7),
(707, 12),
(716, 16),
(717, 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `statistic`
--

CREATE TABLE IF NOT EXISTS `statistic` (
  `stat_id` int(11) NOT NULL,
  `username` int(11) NOT NULL,
  `user_team_id` int(11) NOT NULL,
  `foe_team_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `team`
--

CREATE TABLE IF NOT EXISTS `team` (
  `username` varchar(50) DEFAULT NULL,
  `team_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `team`
--

INSERT INTO `team` (`username`, `team_id`) VALUES
('jocan3', 1),
(NULL, 4),
(NULL, 5),
(NULL, 6),
(NULL, 7),
(NULL, 8),
('jocan3', 9),
('jocan3', 10),
('jocan3', 11),
('jocan3', 12),
('jocan3', 13),
('jocan2', 14),
('jocan3', 15),
('jocan3', 16),
('jocan3', 17),
('jocan2', 18);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `username` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`username`, `password`) VALUES
('jocan', '4c74468100405cb743427a5a6996fe30'),
('jocan1', '81dc9bdb52d04dc20036dbd8313ed055'),
('jocan2', '4c74468100405cb743427a5a6996fe30'),
('jocan3', '81dc9bdb52d04dc20036dbd8313ed055');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `order`
--
ALTER TABLE `order`
 ADD PRIMARY KEY (`order_id`,`order_value`);

--
-- Indices de la tabla `pokemon`
--
ALTER TABLE `pokemon`
 ADD PRIMARY KEY (`pokemon_id`,`team_id`);

--
-- Indices de la tabla `statistic`
--
ALTER TABLE `statistic`
 ADD PRIMARY KEY (`stat_id`);

--
-- Indices de la tabla `team`
--
ALTER TABLE `team`
 ADD PRIMARY KEY (`team_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`username`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
