use landprice;
CREATE TABLE pricetable2 (
CODE int(11) NOT NULL  comment '編碼', 
BUILD_TYPE varchar(45) DEFAULT NULL comment '建物型態',

PRIMARY KEY (CODE),
UNIQUE(CODE)
)ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;