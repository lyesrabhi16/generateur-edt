
-- Creation des ENUMS
create type TypePersonne as enum('Administrateur', 'Enseignant','Etudiant');
create type TypeLocal as enum('Amphi', 'SalleTD', 'SalleTP');
create type TypeSeance as enum('Cours', 'TD', 'TP');
create type jour as enum('Dimanche', 'Lundi', 'Mardi', 'Merecredi', 'Jeudi', 'Vendredi', 'Samedi');

-- Creation des Tables
create table section(
	code_section varchar(10), 
	constraint pk_section primary key(code_section)
);

create table groupe(
	id_groupe serial,
	code_groupe varchar(4),
	code_section varchar(10),
	constraint pk_groupe primary key(id_groupe),
	constraint fk_section foreign key(code_section) references section(code_section),
	constraint nn_section check(code_section is not null),
	constraint nn_code_groupe check(code_groupe is not null)
);

create table personne(
	matricule bigserial,
	nom varchar(30),
	prenom varchar(30),
	email varchar(80),
	password text,
	type TypePersonne,
	role varchar(50),
	anneBac numeric(4),
	niveau varchar(10),
	charges integer,
	pourcentagePriorite real,
	id_groupe integer,
	constraint pk_personne Primary Key(matricule),
	constraint fk_groupe Foreign Key(id_groupe) references groupe(id_groupe),
	constraint nn_nom check(nom is not null),
	constraint nn_prenom check(prenom is not null),
	constraint nn_email check(email is not null),
	constraint nn_password check(password is not null),
	constraint nn_type check(type is not null)
	--constraint nn_role_admin_ens check( type in ['Administrateur', 'Enseignant'] and role is not null ),
);

create table disponibilite(
	id_dispo serial,
	jour jour,
	heur_debut time,
	heur_fin time,
	constraint pk_disponibilite primary key(id_dispo),
	constraint nn_jour check(jour is not null),
	constraint nn_heurD check(heur_debut is not null),
	constraint nn_heurF check(heur_fin is not null),
	constraint un_jourHeurDHeurF unique(jour, heur_debut, heur_fin)
);

create table ensdispo(
	matricule integer,
	id_dispo integer,
	priorite integer,
	constraint pk_ensdispo primary key(matricule, id_dispo),
	constraint fk_personne foreign key(matricule) references personne(matricule),
	constraint fk_disponibilite foreign key(id_dispo) references disponibilite(id_dispo),
	constraint nn_priorite check(priorite is not null)
);

create table emploisdutemps(
	id_emp serial,
	id_groupe integer,
	constraint pk_emploisdutemps primary key(id_emp),
	constraint fk_groupe foreign key(id_groupe) references groupe(id_groupe),
	constraint nn_groupe check(id_groupe is not null)
);

create table module(
	code_module varchar(10),
	nom_module varchar(50),
	constraint pk_module primary key(code_module),
	constraint nn_nom_module check(nom_module is not null),
	constraint un_nom_module unique(nom_module)
);

create table moduleens(
	code_module varchar(10),
	matricule integer,
	priorite integer,
	constraint pk_moduleEns primary key(code_module, matricule),
	constraint fk_module foreign key(code_module) references module(code_module),
	constraint fk_personne foreign key(matricule) references personne(matricule),
	constraint nn_priorite check(priorite is not null)
);

create table local(
	code_local varchar(10),
	capacite integer,
	type TypeLocal,
	constraint pk_local primary key(code_local),
	constraint nn_capacite check( capacite is not null ),
	constraint nn_type check( type is not null )
);

create table creneau(
	id_creneau serial,
	debut time,
	fin time,
	jour jour,
	id_emp integer,
	code_module varchar(10),
	code_local varchar(10),
	constraint pk_creneau primary key(id_creneau),
	constraint fk_emploisdutemps foreign key(id_emp) references emploisdutemps(id_emp),
	constraint fk_module foreign key(code_module) references module(code_module),
	constraint fk_local foreign key(code_local) references local(code_local),
	constraint nn_debut check(debut is not null),
	constraint nn_fin check(fin is not null),
	constraint nn_jour check(jour is not null),
	constraint nn_emploisdutemps check(id_emp is not null),
	constraint nn_code_module check(code_module is not null),
	constraint nn_code_local check(code_local is not null)
);

create table enscreneaux(
	matricule integer,
	id_creneau integer,
	role varchar(50),
	constraint pk_enscreneaux primary key(matricule, id_creneau),
	constraint fk_personne foreign key(matricule) references personne(matricule),
	constraint fk_creneau foreign key(id_creneau) references creneau(id_creneau),
	constraint nn_role check(role is not null)
);

create table specialite(
	code_specialite varchar(10),
	nom_specialite varchar(50),
	constraint pk_specialite primary key(code_specialite),
	constraint nn_nom_specialite check(nom_specialite is not null),
	constraint un_nom_specialite unique(nom_specialite)
);

create table seance(
	code_module varchar(10),
	code_specialite varchar(10),
	type TypeSeance,
	constraint pk_seance primary key(code_module, code_specialite),
	constraint fk_module foreign key(code_module) references module(code_module),
	constraint fk_specialite foreign key(code_specialite) references specialite(code_specialite),
	constraint nn_type check(type is not null)
);










