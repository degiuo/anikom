-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 06 2024 г., 00:57
-- Версия сервера: 10.1.48-MariaDB
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `adb`
--

-- --------------------------------------------------------

--
-- Структура таблицы `closet`
--

CREATE TABLE `closet` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `width` float DEFAULT NULL,
  `height` float DEFAULT NULL,
  `power_consumption` float DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `closet`
--

INSERT INTO `closet` (`id`, `name`, `width`, `height`, `power_consumption`, `image`, `price`, `description`) VALUES
(1, 'Шкаф диспетчеризации', 250, 500, 1000, '1.png', 12100, 'Шкаф диспетчеризации характеризуется индивидуальным изготовлением для каждого объекта, поскольку изготавливается под индивидуальный задачи. Сбор данных производится с целью обеспечения удаленного мониторинга объекта. Управляющие действия шкафа возможны в двух случаях - автоматически благодаря запрограммированному алгоритму или принимаемый сигнал с рабочего места диспетчера.\r\n\r\nДиспетчеризация позволяет в удаленном режиме получать и отображать данные о работе системы. С её помощью становится возможным управление технологическим процессом в режиме реального времени. Ведётся журнал тревог и регистрация действий пользователей системы.\r\n\r\nШкаф диспетчеризации позволяет:\r\n\r\nПовысить качество и скорость обслуживания автоматизированных систем;\r\nСвоевременно реагировать на аварийные ситуации;\r\nСокращать износ оборудования;\r\nПовышать производительность труда сотрудников;\r\nОптимизация потребления энергоносителей, сокращение энергозатрат и ресурсосбережение;\r\nОбеспечение оптимального режима работы'),
(2, 'Шкаф управления тепловым пунктом', 250, 500, 1000, '2.png', 15000, 'Назначение шкафов управления ИТП(индивидуальными тепловыми пунктами) заключается в автоматизации работы исполнительных механизмов индивидуального теплового пункта. Они производят контроль температурных параметров контура отопления, внешнего воздуха и обратной воды (на основе показаний внешних датчиков). С учетом этих параметров ШУ ИТП регулирует работу теплоносителей по температурному графику. Это позволяет снизить затраты на теплоносители и повысить эффективность систем отопления.\r\n\r\nВажным элементом в работе шкафов управления ИТП являются защитные функции. Они позволяют не допускать или автоматически принимать меры в случае критического превышения температуры, сухого хода насосов, прорыва теплопровода и др.\r\n\r\nШкафы управления тепловым пунктом обеспечивают следующие виды защиты:\r\n\r\nЗащиту силовой части электрических цепей от короткого замыкания и перегрузки по току;\r\nЗащиту корпуса IP54;\r\nЗащиту от прямого прикосновения к токоведущим частям по всем требованиям ПУЭ.\r\nШкаф управления т'),
(3, 'Шкаф управления очистными сооружениями', 150, 150, 1000, '3.png', 15000, 'Шкаф управления очистными сооружениями предназначен для контроля состояния и управления комплексом оборудования очистного сооружения бытовых стоков в ручном, полуавтоматическом и автоматическом режимах, а так же координирования работы сети канализационных насосных станций.\r\n\r\nОсновные функции, воспроизводимые шкафом управления очистных сооружений\r\n\r\nУправление задвижками подачи теплоносителя и слива;\r\nУправление компрессорами подачи воздуха в аэротенк;\r\nУправление клапанами подачи воздуха в аэротенк;\r\nУправление установками обеззараживания в очистном сооружении;\r\nУправление подогревом приводов;\r\nУправление сливом очищенной воды из очистного сооружения;\r\nКонтроль состояния сети питания очистного сооружения и учёт электроэнергии;\r\nКонтроль уровня стоков в приёмнике аэротенка и стабилизаторе, а так же уровня очищенных стоков в отстойнике аэротенк;\r\nКонтроль температуры воздуха в павильоне очистного сооружения, а так же уличной температуры воздуха;\r\nКонтроль температуры в аэротенке и стаби'),
(4, 'Шкаф управления задвижками', 250, 300, 1000, '4.png', 12000, 'Шкаф управления задвижкой применяется в системах противопожарного водопровода, автоматического спринклерного и дренчерного пожаротушения. Шкаф может использоваться для управления входной задвижкой, секционной задвижкой, а также задвижкой пожарного резервуара.\r\n\r\nШУЗ - универсальный шкаф, предназначенный для работы с любым типом электрозадвижек.\r\n\r\nШУЗ работает с любыми типами пожарных модулей/приборов управления.\r\n\r\nФункциональный возможности шкафа управления:\r\n\r\nДва режима управления - «Открыть», «Закрыть»;\r\nСветовая индикация положения задвижки «Задвижка открыта», «Задвижка закрыта» после срабатывания концевых выключателей и останова в крайних положениях.;\r\nЗащита электрифицированных задвижек от коротких замыканий;\r\nАвтоматический ввод резерва(опционально);\r\nАвтоматическое открывание/закрывание задвижки от сигнала пожарной сигнализации или ручных пожарных извещателей;\r\nСветовая индикация наличия аварии при заклинивании задвижки или ином положении задвижки, кроме крайних положениях;\r\n'),
(5, 'Шкаф управления насосами и насосными станциями', 250, 500, 1000, '5.png', 10000, 'Шкаф управления насосами и насосными станциями предназначен для управления отдельными насосами и насосными станциями. Применяются для управления циркуляционными, повысительными и дренажными насосами, а, так же канализационными насосными станциями.\r\n\r\nФункциональные возможности шкафа управления. Часть из них являются опциональными оставляйте заявку и обсудим детали более подробно.\r\n\r\nРучное местное, дистанционное и автоматическое управление электродвигателями насосов;\r\nЗащита электродвигателей от перегрузок по току и коротких замыканий;\r\nЗащита насосов от «сухого» хода;\r\nПоддержание заданного уровня в резервуаре;\r\nПоддержание заданного давления в трубопроводе;\r\nРотация насосов для обеспечения равномерного расхода моторесурса, автоматическое переключение на резервный насос при выходе из строя рабочего;\r\nСветовая индикация аварийных и рабочих состояний;\r\nСветовая индикация аварийных и рабочих состояний;\r\nНаличие автоматического ввода резерва;\r\nНаличие операторской панели на двери щита для'),
(6, 'Шкаф коммерческого учёта энергоресурсов', 250, 500, 1200, '6.png', 16000, 'Шкаф коммерческого учёта энергоресурсов предназначен для сбора информации с узлов учета о потреблении энергоресурсов и передачи в диспетчерские и расчётные центры, в системы верхнего уровня.\r\n\r\nФункциональные возможности данного шкафа автоматики:\r\n\r\nАвтоматизированный сбор данных со счётчиков:\r\nЭлектрической энергии;\r\nТепловой энергии;\r\nВодных ресурсов;\r\nОбмен данными с внешними системами.');

-- --------------------------------------------------------

--
-- Структура таблицы `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `image` varchar(500) DEFAULT NULL,
  `title` varchar(500) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `online_check`
--

CREATE TABLE `online_check` (
  `id` int(11) NOT NULL,
  `closet` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `date` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user` int(11) DEFAULT NULL,
  `closet` int(11) DEFAULT NULL,
  `status_code` int(11) DEFAULT NULL,
  `online_check` tinyint(1) NOT NULL,
  `count` int(11) NOT NULL,
  `date` varchar(50) NOT NULL,
  `address` varchar(500) NOT NULL,
  `note_order` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `orders`
--

INSERT INTO `orders` (`id`, `user`, `closet`, `status_code`, `online_check`, `count`, `date`, `address`, `note_order`) VALUES
(12, 1, 1, 4, 0, 5, '1712538908', 'г Оренбург, ул Одесская, д 146', ''),
(13, 1, 2, 1, 0, 1, '1712539122', 'г Оренбург, ул Одесская, д 146', ''),
(14, 2, 1, 1, 0, 15, '1712563476', 'г Оренбург, ул Одесская, д 146', 'розовый шкаф'),
(15, 2, 6, 1, 0, 15, '1712563488', 'г Оренбург, ул Одесская, д 146', 'розовый шкаф');

-- --------------------------------------------------------

--
-- Структура таблицы `order_status`
--

CREATE TABLE `order_status` (
  `status_code` int(11) NOT NULL,
  `value` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `order_status`
--

INSERT INTO `order_status` (`status_code`, `value`, `description`) VALUES
(1, 'Заказ принят', 'мы получили Ваш заказ и начали работу над ним.'),
(2, 'Заказ передан на исполнение', 'мы приступили к выполнению Вашего заказа.'),
(3, 'Заказ доставляется', 'машина с Вашим заказом выехала по указанному в заказе адресу.'),
(4, 'Заказ выдан', 'Спасибо за покупку! Ждем Вас снова!'),
(5, 'Ошибка', '');

-- --------------------------------------------------------

--
-- Структура таблицы `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `closet` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `comment` varchar(250) NOT NULL,
  `date` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `reviews`
--

INSERT INTO `reviews` (`id`, `closet`, `user`, `comment`, `date`) VALUES
(1, 1, 1, 'рвоалдв', '1711615987'),
(2, 1, 2, 'адема', '1711941452'),
(3, 6, 2, 'хуай', '1714098459'),
(5, 1, NULL, 'h', '1714099210');

-- --------------------------------------------------------

--
-- Структура таблицы `role`
--

CREATE TABLE `role` (
  `value` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `role`
--

INSERT INTO `role` (`value`, `description`) VALUES
('ADMIN', 'role admin can do anything'),
('USER', 'role user can: registration, login, make orders');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `lastname` varchar(150) NOT NULL,
  `firstname` varchar(150) NOT NULL,
  `surname` varchar(150) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL,
  `phone` decimal(11,0) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `lastname`, `firstname`, `surname`, `email`, `password`, `phone`, `role`) VALUES
(1, 'admin', 'admin', '.', 'admin@gmail.com', '$2a$06$CgVr21/aAcJlJLTv4BGa0unbWBFul8zg5l5hfHNCTYqqfdMzuVq7u', '8922222222', 'ADMIN'),
(2, 'IOSIV', 'IGOR', '.', 'test@gmail.com', '$2a$06$59V/GaaEoyQ2LjBaSlkp/.3MGTtA51v1I7flXwHay3ukSCdGbjRIS', '8922222222', 'USER');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `closet`
--
ALTER TABLE `closet`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `online_check`
--
ALTER TABLE `online_check`
  ADD PRIMARY KEY (`id`),
  ADD KEY `closet` (`closet`,`user`),
  ADD KEY `user` (`user`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`),
  ADD KEY `orders_ibfk_1` (`closet`),
  ADD KEY `orders_ibfk_3` (`status_code`);

--
-- Индексы таблицы `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`status_code`);

--
-- Индексы таблицы `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `closet` (`closet`),
  ADD KEY `user` (`user`);

--
-- Индексы таблицы `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`value`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role` (`role`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `closet`
--
ALTER TABLE `closet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `online_check`
--
ALTER TABLE `online_check`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `online_check`
--
ALTER TABLE `online_check`
  ADD CONSTRAINT `online_check_ibfk_1` FOREIGN KEY (`closet`) REFERENCES `closet` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `online_check_ibfk_2` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`closet`) REFERENCES `closet` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`status_code`) REFERENCES `order_status` (`status_code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`closet`) REFERENCES `closet` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`value`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
