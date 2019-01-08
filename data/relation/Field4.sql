use landprice;
CREATE TABLE pricetable4 (
ID int(11) NOT NULL AUTO_INCREMENT,
F30 varchar(50) NOT NULL comment '編號',
F02 text(150) DEFAULT NULL comment '土地區段位置/建物區段門牌',
F03 float DEFAULT NULL comment '土地移轉總面積(平方公尺)',
F04 varchar(45) DEFAULT NULL comment '使用分區或編定',
F05 varchar(45) DEFAULT NULL comment '非都市土地使用分區',
F06 varchar(45) DEFAULT NULL comment '非都市土地使用地',
F08 varchar(45) DEFAULT NULL comment '交易筆棟數',
F09 varchar(70) DEFAULT NULL comment '移轉層次',
F10 varchar(45) DEFAULT NULL comment '總樓層數',
F12 varchar(45) DEFAULT NULL comment '主要用途',
F13 varchar(45) DEFAULT NULL comment '主要建材',
F15 float DEFAULT NULL comment '建物移轉總面積(平方公尺)',


UNIQUE(F30),
PRIMARY KEY (ID),
FOREIGN KEY (F30) REFERENCES pricetable1 (F30) 
ON DELETE CASCADE
)ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;