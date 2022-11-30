-- Commande pour créer la base de données.
CREATE DATABASE Netflix_Wish;

-- Sélection de la base de données
USE Netflix_Wish;

-- Création de la table User
CREATE TABLE Users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    admin BOOLEAN NOT NULL DEFAULT FALSE,
);

CREATE TABLE Favoris (
    idUser INT NOT NULL PRIMARY KEY,
    idMedia INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
)