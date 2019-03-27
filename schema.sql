CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top5000(
index_rank INT NOT NULL,
artist VARCHAR(30) NULL,
title VARCHAR(30) NULL,
date_year INT,
sales_total DECIMAL (10,4) NULL,
sales_uk DECIMAL (10,4) NULL,
sales_japan DECIMAL (10,4) NULL,
sales_usa DECIMAL (10,4) NULL,
sales_russia DECIMAL (10,4) NULL
)

SELECT * FROM top5000;