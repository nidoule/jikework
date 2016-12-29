-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: 2016-11-15 03:36:45
-- 服务器版本： 5.5.49-log
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` text NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(14, '精选', '习近平同特朗普通电话 双方同意早日会面', 'img/5.jpg', '1小时前', '热点'),
(15, '本地', '习近平同特朗普通电话 双方同意早日会面''''''''''''''', 'img/5.jpg', '1小时前', '热点'),
(16, '军事', '习近平同特朗普通电话 双方同意早日会面', 'img/5.jpg', '1小时前', '热点'),
(17, '图片', '习近平同特朗普通电话 双方同意早日会面', 'img/5.jpg', '1小时前', '热点'),
(18, '百家', '第三届世界互联网大会于11月16日至18日举行', 'img/1.jpg', '1小时前', '热点'),
(19, '社会', '第三届世界互联网大会于11月16日至18日举行', 'img/1.jpg', '1小时前', '热点'),
(20, '互联网', '第三届世界互联网大会于11月16日至18日举行', 'img/1.jpg', '1小时前', '热点'),
(21, '精选', '第三届世界互联网大会于11月16日至18日举行', 'img/1.jpg', '1小时前', '热点'),
(22, '娱乐', '暴风TV双11称冠的背后，是DT时代的呼唤', 'img/3.jpg', '1小时前', '热点'),
(23, '精选', '暴风TV双11称冠的背后，是DT时代的呼唤', 'img/3.jpg', '1小时前', '热点'),
(24, '互联网', '暴风TV双11称冠的背后，是DT时代的呼唤', 'img/3.jpg', '1小时前', '热点'),
(25, '军事', '暴风TV双11称冠的背后，是DT时代的呼唤', 'img/3.jpg', '1小时前', '热点'),
(26, '女人', '暴风TV双11称冠的背后，是DT时代的呼唤', 'img/3.jpg', '1小时前', '热点'),
(27, '搞笑', '暴风TV双11称冠的背后，是DT时代的呼唤', 'img/2.jpg', '1小时前', '热点'),
(28, '搞笑', '暴风TV双11称冠的背后，是DT时代的呼唤[;[];/]/][/', 'img/4.jpg', '1小时前', '热点');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=36;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
