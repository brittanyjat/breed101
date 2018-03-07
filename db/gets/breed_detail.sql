select * from breeds 
natural join traits where id = $1;