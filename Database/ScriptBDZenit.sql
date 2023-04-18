create database  Zenit;

use Zenit;
Database changed
create table Empresa
    (idEmpresa int primary key auto_increment ,
    nomeEmpresa varchar(45) ,
    CNPJ char(14) ,
    contatoEmpresa varchar(45));


create table Endereço (
    idEndereco int primary key auto_increment ,
    Rua varchar(45) ,
    Bairro varchar(45) ,
    cidade varchar(45) ,
    CEP varchar(45),
    numero varchar (45),
    fkEmpresa int ,
    foreign key (fkEmpresa) references Empresa (idEmpresa));


create table Transformadores (
    idTransformadores int primary key auto_increment ,
    tamanhoTransformadores varchar(45) ,
    taxaTransferencia varchar(45) ,
    fkEmpresa int ,
    foreign key (fkEmpresa) references Empresa (idEmpresa));


create table Sensores (
    idSensores int primary key auto_increment,
    tipoSensor varchar(45),
    fkTransformador int ,
    foreign key (fkTransformador) references Transformadores (idTransformadores));


create table Dados (
    idDados int primary key auto_increment ,
    dataHoraDados datetime ,
    valorDados Decimal(5,2) ,
    fkSensor int ,
    foreign key (fkSensor) references Sensores (idSensores));



create table Usuario (
    idUsuario int primary key auto_increment ,
    nomeUsuario varchar(45) ,
    senhaUsuario varchar(45) ,
    emailUsuario varchar(45) ,
    fkEmpresa int ,
    foreign key (fkEmpresa) references Empresa (idEmpresa));


