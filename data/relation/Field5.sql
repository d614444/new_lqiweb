use landprice;
CREATE TABLE pricetable5 (
ID int(11) NOT NULL AUTO_INCREMENT,
F07 varchar(45) DEFAULT NULL comment '交易年月',
F14 varchar(45) DEFAULT NULL comment '建築完成年月',
F26 float DEFAULT NULL comment '交易標的橫坐標',
F27 float DEFAULT NULL comment '交易標的縱坐標',
F28 varchar(45) DEFAULT NULL comment '有無備註欄(Y/N)',
F29 varchar(200) DEFAULT NULL comment '備註',


PRIMARY KEY (ID),
FOREIGN KEY (ID) REFERENCES pricetable1 (ID)

)ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;