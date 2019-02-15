use lqi_static;
CREATE TABLE Money_Supply (
ID int(10) NOT NULL,
M1B_money int(45) DEFAULT NULL comment 'M1B', 
M1B_money_rate float DEFAULT NULL comment 'M1B_rate',
M2_money int(45) DEFAULT NULL comment 'M2',
M2_money_rate float DEFAULT NULL comment 'M2_rate',
days int(45) DEFAULT NULL comment 'date',

PRIMARY KEY (ID)
)ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;