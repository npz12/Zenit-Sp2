Create database Zenit;
Use Zenit;
Create Table dadosTemp (
idDados int primary key auto_increment , 
Dados decimal(4,2), 
Horario time);

Insert into dadosTemp values ( null, 27.02, '15:30'),
							 ( null, 27.30, '15:32'),
                             ( null, 28.82, '15:34'),
                             ( null, 29.33, '15:36'),
                             ( null, 28.45, '15:38'),
							 ( null, 27.90, '15:40'),
                             ( null, 26.72, '15:42'),
                             ( null, 27.08, '15:44'),
                             ( null, 29.46, '15:46'),
                             ( null, 30.00, '15:48');

Create table dadosLogin
 (idPessoa int primary key auto_increment ,
 Email varchar(30),
telefone char(11),
 Nome varchar(40),
 -- UserName será o nome para login na plataforma, o nome será o nome efetivo do cliente/usuário
 UserName varchar (20),
 Senha varchar(30)
 ); 
 
 Insert into dadosLogin values (null, 'roberto@gmail.com', '11942352890', 'Roberto Carlos','EsseCaraSouEu','********'),
							   (null, 'carlos@gmail.com', '11932142890', 'Carlos Augusto','Carlinhos','**********'),
                               (null, 'brandao@gmail.com', '11934552890', 'Brandão','Brandão Lindo','********'),
                               (null, 'mario@gmail.com', '11973642591', 'Mário Alves','Mário Games','*********'),
                               (null, 'lucas@gmail.com', '11977656390', 'Lucas Rogério', 'Roger Lucas','********'),
                               (null, 'reinaldo@gmail.com', '11937280870', 'Reinaldo Araujo', 'ReiNaldo','******'),
                               (null, 'julia@gmail.com', '11976852470', 'Julia Silva', 'Julinha','*********');


create unique index telefone on dadosLogin(telefone);


create table dadosEmpresas ( 
idEmpresa int primary key auto_increment,
 Cnpj char(14), 
 Representante varchar(30),
 Nome varchar (30),  
 senha varchar(30)
 );
 
 insert into dadosEmpresas values ( null, '47684330000107', 'Fabiana', 'Enel','********'),
								  ( null, '47684330000107', 'Rogério', 'IntelBrás','********'),
                                  ( null, '47684330000107', 'Marcos', 'Eletrolux','***********');
                                  
