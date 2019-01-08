use landprice;
CREATE TABLE pricetable7 (
ID int(11) NOT NULL AUTO_INCREMENT,
F30 varchar(50) NOT NULL comment '編號',
F21 float DEFAULT NULL comment '總價(元)',
F22 float DEFAULT NULL comment '單價(元/平方公尺)',
F21a float DEFAULT NULL comment '總價1(萬元)',
F22a float DEFAULT NULL comment '單價1(萬元/坪)',
F21b float DEFAULT NULL comment '去車位總價(萬元)',
F22b float DEFAULT NULL comment '單價2(萬元/坪)',
F22c float DEFAULT NULL comment '單價3(萬元/坪)',

UNIQUE(F30),
PRIMARY KEY (ID),
FOREIGN KEY (F30) REFERENCES pricetable1 (F30)
)ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;