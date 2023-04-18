create database  zenit;

use zenit;

create table empresa(
    idEmpresa int primary key auto_increment ,
    nomeEmpresa varchar(45) not null,
    CNPJ char(14) not null ,
    contatoEmpresa varchar(45)
	)
;


create table endereco (
    idEndereco int primary key auto_increment ,
    rua varchar(45) ,
    bairro varchar(45) ,
    cidade varchar(45) ,
    cep varchar(45),
    numero varchar (45),
    fkEmpresa int ,
    foreign key (fkEmpresa) references empresa (idEmpresa)
    )
;


create table transformadores (
    idTransformadores int primary key auto_increment ,
    tamanhoTransformadores varchar(45) ,
    taxaTransferencia varchar(45) ,
    fkEmpresa int ,
    foreign key (fkEmpresa) references Empresa (idEmpresa)
    )
;


create table sensores (
    idSensores int primary key auto_increment,
    tipoSensor varchar(45),
    fkTransformador int ,
    foreign key (fkTransformador) references transformadores (idTransformadores)
    )
;


create table dados (
    idDados int primary key auto_increment ,
    dataHoraDados datetime ,
    valorDados Decimal(5,2) ,
    fkSensor int ,
    foreign key (fkSensor) references sensores (idSensores)
    )
;

create table usuario (
    idUsuario int primary key auto_increment ,
    nomeUsuario varchar(45) ,
    senhaUsuario varchar(45) ,
    emailUsuario varchar(45) ,
    fkEmpresa int ,
    foreign key (fkEmpresa) references empresa (idEmpresa)
    )
;
desc empresa;
desc endereco;
desc transformadores;
desc sensores;
desc dados;
desc usuario;



