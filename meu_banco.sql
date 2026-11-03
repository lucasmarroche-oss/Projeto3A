create database sistema_login;
use sistema_login;

create table usuarios (
id int auto_increment primary key,
nome varchar (100) not null,
cpf varchar (14) not null unique,
data_nascimento date not null,
telefone varchar (20) not null,
endereço varchar (200) not null,
senhar varchar (50) not null
);


