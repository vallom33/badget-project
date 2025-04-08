# 🎯 Badge Management Project

Ce projet est une application web de gestion de badges pour les employés, développée avec **Spring Boot** (backend) et **Angular** (frontend).

## 📦 Structure du projet

- `backend/` : Application Spring Boot (API REST, base de données, logique métier)
- `frontend/` : Application Angular (interface utilisateur)

## ⚙️ Technologies utilisées

- **Java 17**
- **Spring Boot 3**
- **Spring Data JPA (Hibernate)**
- **MySQL** (base de données)
- **Angular 17**
- **Git / GitHub** (gestion de version)

## 📁 Entités principales

Voici les entités du projet (en cours d’implémentation) :

- `User`
- `Profile`
- `Autorite`
- `Permission`
- `Employe`
- `Badge`
- `BadgeStatus` (`en attente`, `produit`, `délivré`, `finie`, `renew`, `désactivé`)
- `Lot`

## 🚀 Lancer l’application

### 🔧 Backend (Spring Boot)

```bash
cd backend
mvn spring-boot:run

### 🔧 frontend (angular)
cd frontend
npm install
ng serve
L’interface sera disponible sur : http://localhost:4200




### 🔧 Git (commands)

# Initialiser un dépôt Git
git init

# Lier un dépôt GitHub
git remote add origin https://github.com/votre-utilisateur/nom-du-repo.git

# Ajouter et committer
git add .
git commit -m "Message de commit"
git push -u origin main


### branches:
git checkout -b nom-du-branche
git checkout nom-du-branche
git push -u origin nom-du-branche
git checkout main
git merge nom-du-branche
