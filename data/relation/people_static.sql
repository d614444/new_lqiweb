use lqi_static;
CREATE TABLE People_Static (
ID int(10) NOT NULL,
SP00 varchar(5) DEFAULT NULL comment '縣市代碼', 
SP01 varchar(50) DEFAULT NULL comment '區域',
SP02 int(45) DEFAULT NULL comment '人口數',
SP03 varchar(45) DEFAULT NULL comment '日期',

PRIMARY KEY (ID)
)ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;