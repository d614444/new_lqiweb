use landprice;
CREATE TABLE pricetable6 (
ID int(11) NOT NULL AUTO_INCREMENT,
F30 varchar(50) NOT NULL comment '編號',
F16 varchar(45) DEFAULT NULL comment '建物現況格局-房',
F17 varchar(45) DEFAULT NULL comment '建物現況格局-廳',
F18 varchar(45) DEFAULT NULL comment '建物現況格局-衛',
F19 varchar(45) DEFAULT NULL comment '建物現況格局-隔間',
F20 varchar(45) DEFAULT NULL comment '有無管理組織',
F23 varchar(45) DEFAULT NULL comment '車位類別',
F24 float DEFAULT NULL comment '車位移轉總面積(平方公尺)',
F25 float DEFAULT NULL comment '車位總價(元)',


UNIQUE(F30),
PRIMARY KEY (ID),
FOREIGN KEY (F30) REFERENCES pricetable1 (F30)
)ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;