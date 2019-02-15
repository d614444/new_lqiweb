use lqi_static;
CREATE TABLE GDP_Static (
ID int(10) NOT NULL,
year varchar(45) DEFAULT NULL comment '西元', 
year_t varchar(45) DEFAULT NULL comment '民國',
gdp float DEFAULT NULL comment 'GDP',

PRIMARY KEY (ID)
)ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;