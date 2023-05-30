CREATE USER 'zenitUser'@'localhost' IDENTIFIED BY 'Zenit@123';
create database  zenit;

use zenit;
GRANT ALL PRIVILEGES ON zenit.* TO 'zenitUser'@'localhost';

create table empresa(
    idEmpresa int primary key auto_increment ,
    nomeEmpresa varchar(45) not null,
    emailEmpresa VARCHAR (45) not null,
    senhaEmpresa VARCHAR(45) not null,
    CNPJ char(14) not null ,
    telEmpresa varchar(45)
	)
;
SELECT * FROM empresa;


create table endereco (
    fkEmpresa int,
    foreign key (fkEmpresa) references empresa (idEmpresa),
    idEndereco int,
    primary key(fkEmpresa, idEndereco),
    rua varchar(45) ,
    bairro varchar(45) ,
    cidade varchar(45) ,
    cep varchar(45),
    numero varchar (45)
    )
;


create table transformadores (
    idTransformadores int primary key auto_increment ,
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

create table funcionario (
    fkEmpresa int ,
    foreign key (fkEmpresa) references empresa (idEmpresa),
    -- idUsuario int primary key auto_increment,
    idFuncionario int primary key auto_increment,
    primary key(fkEmpresa, idFuncionario),
    senhaFuncionario varchar(45) ,
    emailFuncionario varchar(45) 
    -- fkEmpresa int,
    -- foreign key (fkEmpresa) references empresa (idEmpresa),
    -- fkGerente int,
    -- foreign key(fkGerente) references usuario(idUsuario)
    )
;

insert into empresa(nomeEmpresa, CNPJ, contatoEmpresa) values
	('enel' ,'07523555000167', 'contato@enel.com.br'),
    ('condominio terras de são josé', '48988323000161', 'contato@condominioterras.com.br')
;

insert into endereco (fkEmpresa, idEndereco, rua, bairro, cidade, numero, cep)values
	(1, 1, 'Voluntários da Pátria', 'Santana', 'São Paulo', '1068', '02011000'),
    (1, 2, 'Av. Ernani do Amaral Peixoto', 'Centro', 'Niterói', '1011',  '24020005'),
    (2, 1, 'Av. Corporação Musical União dos Artistas', 'Cruz das Almas', 'Itu', '2041', '13306430')
;
desc endereco;
select * from empresa;
insert into transformadores (taxaTransferencia, fkEmpresa) values
	(380, 1),
    (380, 2)
;
insert into sensores(tipoSensor, fkTransformador) values
	('lm35', 1),
    ('lm35', 2)
;
insert into dados(dataHoraDados, valorDados, fkSensor) values
	('2023-04-21 12:00:00', '55.5', 1),
    ('2023-04-21 13:00:00', '56.1', 1),
    ('2023-04-21 14:00:00', '55.7', 1),
    ('2023-04-21 15:00:00', '54.9', 1),
    ('2023-04-21 16:00:00', '55.1', 1),
	('2023-04-21 12:00:00', '52.5', 2),
    ('2023-04-21 13:00:00', '53.1', 2),
    ('2023-04-21 14:00:00', '52.7', 2),
    ('2023-04-21 15:00:00', '51.9', 2),
    ('2023-04-21 16:00:00', '52.1', 2)

;
insert into usuario(fkEmpresa, idUsuario, nomeUsuario, senhaUsuario, emailUsuario) values
	(1, 1, 'Gláucio Couto', 'abc!1234', 'glaucio.couto@enel.com.br'),
    (1, 2, 'Maria Miranda', 'abc!1234', 'maria.miranda@enel.com.br'),
    (1, 3, 'Joel Baesso', 'abc!1234', 'joel.baesso@enel.com.br'),
    (1, 4, 'Augusto Rabelo', 'abc!1234', 'augusto.rabelo@enel.com.br'),
	(2, 1, 'Mariza Valente', 'abc!1234', 'mariza.valente@condominioterras.com.br'),
    (2, 2, 'Luiz Vilela', 'abc!1234', 'luiz.vilela@condominioterras.com.br'),
    (2, 3, 'Renan Donato', 'abc!1234', 'renan.donato@condominioterras.com.br'),
    (2, 4, 'Bernardo Duarte', 'abc!1234', 'bernardo.duarte@condominioterras.com.br')
;

select * from empresa;
select * from endereco join empresa on idEmpresa = fkEmpresa and fkEmpresa = 1;
select * from transformadores join empresa on idEmpresa = fkEmpresa;
select * from sensores join transformadores on idTransformadores = fkTransformador and fkTransformador = 1;
select * from dados join sensores on idSensores = fkSensor and fkSensor = 1;
select * from usuario join empresa on idEmpresa = fkEmpresa and idEmpresa = 1 and idUsuario in(1, 2, 3, 4);


