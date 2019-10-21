CREATE DATABASE  IF NOT EXISTS `happiness` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `happiness`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: happiness
-- ------------------------------------------------------
-- Server version	5.7.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `votes`
--

DROP TABLE IF EXISTS `votes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `votes` (
  `date` date NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `happinessIndicator` enum('happy','ok','sad') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=129 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `votes`
--

LOCK TABLES `votes` WRITE;
/*!40000 ALTER TABLE `votes` DISABLE KEYS */;
INSERT INTO `votes` VALUES ('2019-10-20',1,'happy'),('2019-10-20',2,'happy'),('2019-10-20',3,'happy'),('2019-10-20',4,'happy'),('2019-10-19',5,'sad'),('2019-10-19',6,'sad'),('2019-10-19',7,'sad'),('2019-10-19',8,'ok'),('2019-10-19',9,'ok'),('2019-10-18',10,'ok'),('2019-10-18',11,'ok'),('2019-10-18',12,'ok'),('2019-10-17',13,'ok'),('2019-10-17',14,'ok'),('2019-10-17',15,'ok'),('2019-10-17',16,'ok'),('2019-10-17',17,'ok'),('2019-10-17',18,'ok'),('2019-10-17',19,'ok'),('2019-10-15',20,'ok'),('2019-10-15',21,'ok'),('2019-10-15',22,'ok'),('2019-10-15',23,'ok'),('2019-10-14',24,'ok'),('2019-10-14',25,'ok'),('2019-10-14',26,'ok'),('2019-10-14',27,'ok'),('2019-10-14',28,'sad'),('2019-10-14',29,'sad'),('2019-10-14',30,'sad'),('2019-10-17',31,'sad'),('2019-10-17',32,'sad'),('2019-10-17',33,'sad'),('2019-10-17',34,'sad'),('2019-10-16',35,'happy'),('2019-10-16',36,'happy'),('2019-10-16',37,'happy'),('2019-10-16',38,'happy'),('2019-10-16',39,'happy'),('2019-10-16',40,'happy'),('2019-10-16',41,'happy'),('2019-10-16',42,'happy'),('2019-10-16',43,'happy'),('2019-10-18',44,'happy'),('2019-10-18',45,'happy'),('2019-10-18',46,'happy'),('2019-10-18',47,'happy'),('2019-10-19',48,'happy'),('2019-10-19',49,'happy'),('2019-10-19',50,'sad'),('2019-10-19',51,'sad'),('2019-10-19',52,'sad'),('2019-10-19',53,'sad'),('2019-10-01',54,'sad'),('2019-10-01',55,'sad'),('2019-10-01',56,'sad'),('2019-10-01',57,'sad'),('2019-10-03',58,'sad'),('2019-10-03',59,'sad'),('2019-10-03',60,'sad'),('2019-10-03',61,'sad'),('2019-10-03',62,'sad'),('2019-10-03',63,'sad'),('2019-10-03',64,'sad'),('2019-10-05',65,'ok'),('2019-10-05',66,'ok'),('2019-10-05',67,'ok'),('2019-10-07',68,'ok'),('2019-10-07',69,'ok'),('2019-10-07',70,'ok'),('2019-10-07',71,'ok'),('2019-10-09',72,'ok'),('2019-10-09',73,'ok'),('2019-10-09',74,'ok'),('2019-10-09',75,'happy'),('2019-10-09',76,'happy'),('2019-10-07',77,'happy'),('2019-10-07',78,'happy'),('2019-10-07',79,'happy'),('2019-10-07',80,'happy'),('2019-10-07',81,'happy'),('2019-10-12',82,'happy'),('2019-10-12',83,'happy'),('2019-10-12',84,'happy'),('2019-10-12',85,'happy'),('2019-10-12',86,'happy'),('2019-10-20',87,'happy'),('2019-10-20',88,'ok'),('2019-10-20',89,'ok'),('2019-10-20',90,'sad'),('2019-10-20',91,'happy'),('2019-10-20',92,'happy'),('2019-10-20',93,'happy'),('2019-10-20',94,'happy'),('2019-10-20',95,'happy'),('2019-10-20',96,'happy'),('2019-10-21',98,'happy'),('2019-10-21',99,'happy'),('2019-10-21',100,'happy'),('2019-10-21',101,'ok'),('2019-10-21',102,'sad'),('2019-10-21',103,'sad'),('2019-10-21',104,'sad'),('2019-10-21',105,'sad'),('2019-10-21',106,'ok'),('2019-10-21',107,'ok'),('2019-10-21',108,'ok'),('2019-10-21',109,'happy'),('2019-10-21',110,'happy'),('2019-10-21',111,'happy'),('2019-10-21',112,'happy'),('2019-10-21',113,'happy'),('2019-10-21',114,'happy'),('2019-10-21',115,'ok'),('2019-10-21',116,'ok'),('2019-10-21',117,'sad'),('2019-10-21',118,'sad'),('2019-10-21',119,'ok'),('2019-10-21',120,'ok'),('2019-10-21',121,'happy'),('2019-10-21',122,'happy'),('2019-10-21',123,'happy'),('2019-10-21',124,'sad'),('2019-10-21',125,'sad'),('2019-10-21',126,'ok'),('2019-10-21',127,'happy'),('2019-10-21',128,'happy');
/*!40000 ALTER TABLE `votes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-21 15:38:52
