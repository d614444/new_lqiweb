use landprice;
CREATE TABLE pricetable1 (
ID int(11) NOT NULL AUTO_INCREMENT, 
F30 varchar(50) NOT NULL comment '編號',
F32 varchar(45) DEFAULT NULL comment '縣市名',
F00 varchar(45) DEFAULT NULL comment '鄉鎮市區',
F01 int(11) DEFAULT NULL comment '交易標的',
F11 int(11) DEFAULT NULL comment '建物型態',

UNIQUE(F30),
PRIMARY KEY (ID),
FOREIGN KEY (F01) REFERENCES pricetable2 (CODE)
ON DELETE CASCADE,
FOREIGN KEY (F11) REFERENCES pricetable3 (CODE)
ON DELETE CASCADE
)ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;