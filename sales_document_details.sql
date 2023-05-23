-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-05-2023 a las 17:09:17
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `invoice`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales_document_details`
--

CREATE TABLE `sales_document_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_product` bigint(20) UNSIGNED NOT NULL,
  `id_document` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `price_by_unit` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sales_document_details`
--

INSERT INTO `sales_document_details` (`id`, `id_product`, `id_document`, `quantity`, `price_by_unit`, `total`, `created_at`, `updated_at`) VALUES
(1, 2, 11, 33, 80, 303, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(2, 9, 5, 33, 96, 221, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(3, 16, 4, 41, 16, 205, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(4, 17, 10, 51, 14, 989, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(5, 9, 5, 72, 41, 948, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(6, 14, 10, 44, 55, 147, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(7, 10, 8, 46, 35, 164, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(8, 15, 13, 30, 75, 858, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(9, 12, 6, 54, 16, 436, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(10, 3, 9, 73, 91, 793, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(11, 5, 7, 42, 71, 209, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(12, 8, 1, 47, 32, 372, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(13, 9, 4, 10, 59, 300, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(14, 18, 6, 9, 18, 194, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(15, 16, 7, 89, 25, 382, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(16, 7, 8, 14, 43, 767, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(17, 14, 1, 17, 56, 349, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(18, 11, 6, 85, 72, 601, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(19, 17, 1, 55, 49, 743, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(20, 6, 10, 13, 23, 217, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(21, 13, 11, 35, 70, 955, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(22, 15, 8, 49, 85, 168, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(23, 14, 3, 15, 97, 956, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(24, 7, 9, 22, 70, 719, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(25, 2, 1, 24, 56, 566, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(26, 3, 9, 46, 44, 421, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(27, 5, 7, 46, 14, 755, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(28, 17, 8, 35, 10, 285, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(29, 16, 11, 17, 44, 284, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(30, 9, 13, 65, 68, 437, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(31, 10, 7, 15, 48, 562, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(32, 10, 4, 77, 43, 121, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(33, 12, 13, 43, 45, 467, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(34, 8, 8, 13, 34, 810, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(35, 14, 10, 75, 38, 930, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(36, 18, 11, 1, 96, 935, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(37, 12, 7, 79, 12, 553, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(38, 1, 7, 42, 12, 672, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(39, 15, 13, 66, 32, 788, '2023-05-23 20:06:39', '2023-05-23 20:06:39'),
(40, 2, 4, 1, 71, 507, '2023-05-23 20:06:39', '2023-05-23 20:06:39');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `sales_document_details`
--
ALTER TABLE `sales_document_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sales_document_details_id_document_foreign` (`id_document`),
  ADD KEY `sales_document_details_id_product_foreign` (`id_product`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `sales_document_details`
--
ALTER TABLE `sales_document_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `sales_document_details`
--
ALTER TABLE `sales_document_details`
  ADD CONSTRAINT `sales_document_details_id_document_foreign` FOREIGN KEY (`id_document`) REFERENCES `sales_documents` (`id`),
  ADD CONSTRAINT `sales_document_details_id_product_foreign` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
