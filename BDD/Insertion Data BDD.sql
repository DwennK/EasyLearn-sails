DROP TABLE IF EXISTS  users;
DROP TABLE IF EXISTS  Langues;
DROP TABLE IF EXISTS  Mots;
DROP TABLE IF EXISTS  Cartes;
DROP TABLE IF EXISTS  Categories;
DROP TABLE IF EXISTS  Resultat;


CREATE TABLE users (
	Numero 				INTEGER, 
	Nom 				VARCHAR(50),
	Prenom 				VARCHAR(50),
	Email				VARCHAR(50),
	MotDePasse			VARCHAR(50),
	CONSTRAINT PK_users
		PRIMARY KEY (Numero),
	CONSTRAINT NN_users_Email
		CHECK (Email IS NOT NULL),
	CONSTRAINT XU_users_Email
		UNIQUE (Email),
	CONSTRAINT NN_users_MotDePasse
		CHECK (MotDePasse IS NOT NULL)
);
ALTER TABLE users ENGINE=InnoDB;


CREATE TABLE Langues (
	Numero 				INTEGER,
	Libelle 			VARCHAR(50),
	CONSTRAINT PK_Langues
		PRIMARY KEY (Numero)
);
ALTER TABLE users ENGINE=InnoDB;

CREATE TABLE Mots (
	Numero 				INTEGER,
	NumLangue			INTEGER,
	Libelle 			VARCHAR(50),
	CONSTRAINT PK_Mots
		PRIMARY KEY (Numero),
	CONSTRAINT FK_Mots_Langues
		FOREIGN KEY (NumLangue)REFERENCES Langues(Numero)
);
ALTER TABLE users ENGINE=InnoDB;

CREATE TABLE Cartes (
	Numero 				INTEGER,
	NumRecto			INTEGER,
	NumVerso 			INTEGER,
	CONSTRAINT PK_Cartes
		PRIMARY KEY (Numero),
	CONSTRAINT FK_Cartes_Mots_Recto
		FOREIGN KEY (NumRecto)REFERENCES Mots(Numero),
	CONSTRAINT FK_Cartes_Mots_Verso
		FOREIGN KEY (NumVerso)REFERENCES Mots(Numero)
);
ALTER TABLE users ENGINE=InnoDB;

CREATE TABLE Categories (
	Numero 				INTEGER,
	Libelle 			VARCHAR(50),
	CONSTRAINT PK_Categories
		PRIMARY KEY (Numero)
);
ALTER TABLE users ENGINE=InnoDB;

CREATE TABLE Resultat (
	Numero				INTEGER,
	NumUtilisateur		INTEGER,
	NumCategorie		INTEGER,
	NumCarte			INTEGER,
	Compartiment 		INTEGER,
	NbFois				INTEGER,
	CONSTRAINT PK_Resultats
		PRIMARY KEY (Numero),
	CONSTRAINT FK_Resultats_users
		FOREIGN KEY (NumUtilisateur)REFERENCES users(Numero),
	CONSTRAINT FK_Resultats_Categories
		FOREIGN KEY (NumCategorie)REFERENCES Categories(Numero),
	CONSTRAINT FK_Resultats_Cartes
		FOREIGN KEY (NumCarte)REFERENCES Cartes(Numero),
	CONSTRAINT CH_Resultat_Compartiment
		CHECK (Compartiment > 0 AND Compartiment < 6)
);
ALTER TABLE users ENGINE=InnoDB;