use landprice;
CREATE TABLE pricetable3 (
CODE int(11) NOT NULL  comment '編碼', 
BUILD_TYPE varchar(45) DEFAULT NULL comment 'build_type',

PRIMARY KEY (CODE),
UNIQUE(CODE)
)ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;