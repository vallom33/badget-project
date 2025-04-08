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
