load data local infile '/home/d614444/new_lqiweb/new_lqiweb/data/relation/data/static/GDP_static.csv'
into table GDP_Static
fields terminated by ','
lines terminated by '\n'
ignore 1 lines;

