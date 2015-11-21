-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-11-2015 a las 23:29:41
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
(3, 20),
(4, 1),
(4, 28),
(4, 35),
(5, 41),
(6, 20),
(7, 2),
(7, 27),
(7, 29),
(9, 27),
(11, 27),
(11, 33),
(12, 6),
(12, 28),
(15, 6),
(15, 23),
(18, 13),
(18, 25),
(19, 32),
(19, 37),
(20, 20),
(20, 32),
(20, 37),
(21, 36),
(22, 37),
(23, 34),
(25, 10),
(25, 23),
(26, 28),
(26, 32),
(26, 37),
(29, 38),
(29, 40),
(30, 36),
(30, 38),
(30, 40),
(31, 14),
(31, 28),
(31, 40),
(31, 41),
(32, 23),
(32, 28),
(32, 33),
(32, 40),
(33, 38),
(33, 40),
(36, 35),
(36, 43),
(37, 36),
(38, 40),
(42, 19),
(42, 35),
(44, 43),
(45, 31),
(49, 6),
(50, 31),
(50, 39),
(51, 39),
(52, 10),
(55, 35),
(56, 41),
(57, 21),
(59, 7),
(66, 26),
(68, 12),
(68, 30),
(69, 29),
(73, 27),
(74, 26),
(75, 19),
(75, 31),
(76, 15),
(82, 13),
(83, 28),
(83, 29),
(84, 39),
(85, 39),
(85, 43),
(87, 39),
(91, 15),
(93, 36),
(99, 13),
(102, 34),
(103, 34),
(106, 16),
(106, 30),
(106, 34),
(106, 41),
(107, 30),
(108, 15),
(111, 27),
(114, 26),
(114, 36),
(114, 37),
(115, 11),
(115, 25),
(121, 42),
(123, 19),
(127, 14),
(128, 21),
(128, 25),
(128, 41),
(130, 42),
(131, 23),
(131, 42),
(134, 13),
(135, 15),
(135, 22),
(135, 41),
(136, 33),
(142, 35),
(144, 9),
(144, 33),
(145, 1),
(145, 9),
(145, 33),
(146, 9),
(151, 15),
(154, 5),
(154, 20),
(154, 31),
(155, 1),
(157, 5),
(157, 20),
(158, 22),
(158, 34),
(160, 20),
(160, 34),
(160, 42),
(163, 9),
(172, 25),
(173, 25),
(176, 24),
(177, 38),
(178, 33),
(178, 36),
(196, 18),
(200, 23),
(207, 21),
(214, 19),
(217, 14),
(217, 37),
(223, 32),
(224, 14),
(226, 42),
(229, 7),
(237, 30),
(238, 25),
(244, 7),
(248, 12),
(248, 31),
(249, 9),
(249, 13),
(249, 43),
(250, 9),
(252, 29),
(254, 22),
(255, 1),
(255, 10),
(257, 14),
(260, 22),
(262, 7),
(269, 18),
(270, 21),
(276, 26),
(282, 11),
(291, 6),
(291, 43),
(300, 2),
(305, 14),
(314, 43),
(321, 17),
(322, 3),
(322, 38),
(350, 12),
(350, 42),
(356, 16),
(358, 24),
(376, 22),
(377, 24),
(382, 17),
(384, 17),
(393, 10),
(402, 21),
(414, 6),
(417, 10),
(424, 18),
(427, 10),
(432, 16),
(447, 32),
(456, 24),
(469, 6),
(469, 21),
(485, 11),
(488, 11),
(488, 12),
(493, 17),
(497, 5),
(500, 1),
(500, 5),
(503, 5),
(523, 19),
(534, 16),
(540, 2),
(562, 19),
(562, 23),
(566, 2),
(591, 18),
(593, 18),
(620, 30),
(625, 22),
(626, 18),
(627, 24),
(627, 32),
(637, 16),
(639, 7),
(642, 11),
(644, 17),
(645, 11),
(646, 17),
(649, 26),
(658, 5),
(663, 26),
(668, 24),
(675, 30),
(676, 7),
(707, 12),
(715, 38),
(716, 16),
(716, 29),
(716, 35),
(717, 15),
(717, 27),
(717, 29),
(10039, 31);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `statistic`
--

CREATE TABLE IF NOT EXISTS `statistic` (
  `stat_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `user_team_id` int(11) NOT NULL,
  `foe_team_id` int(11) NOT NULL,
  `result` varchar(25) NOT NULL,
  `pokemon_id_1` int(11) NOT NULL,
  `pokemon_id_2` int(11) NOT NULL,
  `pokemon_id_3` int(11) NOT NULL,
  `pokemon_id_4` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `statistic`
--

INSERT INTO `statistic` (`stat_id`, `username`, `user_team_id`, `foe_team_id`, `result`, `pokemon_id_1`, `pokemon_id_2`, `pokemon_id_3`, `pokemon_id_4`) VALUES
(1, 'jocan3', 14, 1, 'win', 224, 257, 127, 31),
(2, 'jocan3', 16, 22, 'undefined', 534, 637, 356, 106),
(3, 'jocan3', 16, 23, 'draw', 106, 637, 432, 356),
(4, 'jocan3', 9, 24, 'win', 163, 249, 145, 146),
(5, 'jocan3', 1, 25, 'undefined', 4, 255, 155, 3),
(6, 'jocan3', 11, 26, 'win', 115, 488, 642, 282),
(7, 'jocan3', 10, 27, 'loose', 255, 393, 52, 417),
(8, 'jocan3', 11, 29, 'loose', 488, 282, 485, 645),
(9, 'jocan2', 18, 30, 'undefined', 196, 424, 269, 593),
(10, 'jocan2', 20, 31, 'undefined', 6, 157, 160, 20),
(11, 'jocan2', 20, 31, 'win', 3, 6, 157, 160),
(12, 'jocan2', 20, 31, 'undefined', 6, 3, 154, 157),
(13, 'jocan2', 20, 31, 'draw', 6, 20, 154, 3),
(14, 'jocan2', 20, 31, 'loose', 6, 20, 154, 157),
(15, 'jocan2', 20, 31, 'loose', 6, 20, 3, 154),
(16, 'jocan2', 20, 31, 'undefined', 6, 154, 157, 160),
(17, 'jocan2', 20, 31, 'draw', 6, 20, 154, 157),
(18, 'jocan2', 20, 31, 'loose', 3, 6, 20, 154),
(19, 'jocan2', 20, 31, 'draw', 6, 20, 154, 157),
(20, 'jocan2', 20, 31, 'win', 6, 20, 154, 157),
(21, 'jocan2', 20, 31, 'draw', 20, 6, 154, 157),
(22, 'jocan2', 20, 31, 'win', 20, 154, 157, 160),
(23, 'jocan2', 20, 31, 'undefined', 3, 6, 20, 154),
(24, 'jocan2', 18, 32, 'draw', 196, 269, 424, 591),
(25, 'jocan2', 18, 32, 'win', 196, 269, 424, 591),
(26, 'jocan2', 14, 33, 'loose', 217, 224, 257, 305),
(27, 'jocan3', 11, 34, 'loose', 115, 282, 485, 488),
(28, 'jocan2', 20, 35, 'draw', 6, 20, 154, 157),
(29, 'jocan2', 20, 35, 'win', 6, 20, 154, 3),
(30, 'jocan2', 20, 36, 'loose', 3, 6, 20, 154),
(31, 'jocan2', 18, 37, 'draw', 269, 196, 424, 591),
(32, 'jocan2', 18, 37, 'draw', 269, 424, 591, 593),
(33, 'jocan2', 18, 37, 'undefined', 196, 269, 424, 591),
(34, 'jocan2', 18, 37, 'undefined', 269, 196, 626, 591),
(35, 'jocan2', 20, 38, 'win', 6, 3, 154, 157),
(36, 'jocan2', 14, 39, 'loose', 127, 31, 217, 224),
(37, 'jocan2', 14, 39, 'win', 127, 217, 224, 257),
(38, 'jocan2', 14, 39, 'draw', 127, 217, 224, 305),
(39, 'jocan2', 14, 40, 'undefined', 127, 31, 217, 224),
(40, 'jocan2', 18, 41, 'draw', 591, 593, 269, 196),
(41, 'jocan2', 42, 43, 'win', 160, 350, 131, 130);

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
('jocan3', 9),
('jocan3', 10),
('jocan3', 11),
('jocan3', 12),
('jocan3', 13),
('jocan2', 14),
('jocan3', 15),
('jocan3', 16),
('jocan3', 17),
('jocan2', 18),
('jocan3', 19),
('jocan2', 20),
('jocan3', 21),
('undefined', 22),
('undefined', 23),
('undefined', 24),
('undefined', 25),
('undefined', 26),
('undefined', 27),
('undefined', 28),
('undefined', 29),
('undefined', 30),
('undefined', 31),
('undefined', 32),
('undefined', 33),
('undefined', 34),
('undefined', 35),
('undefined', 36),
('undefined', 37),
('undefined', 38),
('undefined', 39),
('undefined', 40),
('undefined', 41),
('jocan2', 42),
('undefined', 43);

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
