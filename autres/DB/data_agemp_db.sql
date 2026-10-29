--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Ubuntu 16.2-1.pgdg22.04+1)
-- Dumped by pg_dump version 16.2 (Ubuntu 16.2-1.pgdg22.04+1)

-- Started on 2024-04-19 15:59:37 CET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3609 (class 0 OID 22747)
-- Dependencies: 215
-- Data for Name: specialite; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.specialite (code_specialite, nom_specialite) VALUES ('GL', 'genie logiciel');
INSERT INTO public.specialite (code_specialite, nom_specialite) VALUES ('MI', 'Math informatique');


--
-- TOC entry 3611 (class 0 OID 22756)
-- Dependencies: 217
-- Data for Name: section; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.section (id_section, code_section, niveau, code_specialite) VALUES (1, 'A', 'M1', 'GL');


--
-- TOC entry 3613 (class 0 OID 22773)
-- Dependencies: 219
-- Data for Name: groupe; Type: TABLE DATA; Schema: public; Owner: postgres
--
INSERT INTO public.groupe (id_groupe, code_groupe, id_section) VALUES (1, 'G1', 1);
INSERT INTO public.groupe (id_groupe, code_groupe, id_section) VALUES (2, 'G2', 1);
INSERT INTO public.groupe (id_groupe, code_groupe, id_section) VALUES (3, 'G3', 1);
INSERT INTO public.groupe (id_groupe, code_groupe, id_section) VALUES (4, 'G4', 1);
INSERT INTO public.groupe (id_groupe, code_groupe, id_section) VALUES (5, 'G5', 1);


--
-- TOC entry 3620 (class 0 OID 22843)
-- Dependencies: 226
-- Data for Name: emploisdutemps; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre,annee) VALUES (1, 1, 'M1', '1',2024);


--
-- TOC entry 3623 (class 0 OID 22879)
-- Dependencies: 229
-- Data for Name: local; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.local (code_local, capacite, type) VALUES ('b5s112', 60, 'SalleTD');
INSERT INTO public.local (code_local, capacite, type) VALUES ('b5s120', 40, 'SalleTD');
INSERT INTO public.local (code_local, capacite, type) VALUES ('b1s1', 30, 'SalleTP');
INSERT INTO public.local (code_local, capacite, type) VALUES ('Amphi16', 200, 'Amphi');


--
-- TOC entry 3621 (class 0 OID 22855)
-- Dependencies: 227
-- Data for Name: module; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.module (code_module, nom_module) VALUES ('PA', 'programmation avancee');
INSERT INTO public.module (code_module, nom_module) VALUES ('BDD', 'base des donnees');
INSERT INTO public.module (code_module, nom_module) VALUES ('POO', 'programmation oriente objet');
INSERT INTO public.module (code_module, nom_module) VALUES ('PS', 'PS');
INSERT INTO public.module (code_module, nom_module) VALUES ('AIE', 'AIE');
INSERT INTO public.module (code_module, nom_module) VALUES ('TOP', 'TOP');
INSERT INTO public.module (code_module, nom_module) VALUES ('MC', 'MC');
INSERT INTO public.module (code_module, nom_module) VALUES ('Req-Con', 'Req-Con');
INSERT INTO public.module (code_module, nom_module) VALUES ('Anglais', 'Anglais');


--
-- TOC entry 3625 (class 0 OID 22887)
-- Dependencies: 231
-- Data for Name: seance; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (3, 'PA', 'GL', 'TD', 'M1', '1');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (4, 'BDD', 'MI', 'TD', 'L2', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (5, 'PA', 'GL', 'Cours', 'M1', '1');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (6, 'PA', 'GL', 'TP', 'M1', '1');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (7, 'BDD', 'MI', 'Cours', 'L2', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (8, 'BDD', 'MI', 'TP', 'L2', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (10, 'PS', 'GL', 'TD', 'M1', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (9, 'PS', 'GL', 'Cours', 'M1', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (11, 'PS', 'GL', 'TP', 'M1', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (12, 'AIE', 'GL', 'TD', 'M1', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (13, 'AIE', 'GL', 'TP', 'M1', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (14, 'TOP', 'GL', 'Cours', 'M1', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (15, 'TOP', 'GL', 'TD', 'M1', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (16, 'MC', 'GL', 'Cours', 'M1', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (17, 'MC', 'GL', 'TD', 'M1', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (18, 'MC', 'GL', 'TP', 'M1', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (19, 'Req-Con', 'GL', 'Cours', 'M1', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (20, 'Req-Con', 'GL', 'TD', 'M1', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (21, 'Req-Con', 'GL', 'TP', 'M1', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (22, 'Anglais', 'GL', 'TD', 'M1', '2');


--
-- TOC entry 3627 (class 0 OID 22909)
-- Dependencies: 233
-- Data for Name: creneau; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (1, '08:00:00', '09:30:00', 'Dimanche', 1, 6, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (2, '08:00:00', '09:30:00', 'Dimanche', 1, 4, 'b5s112');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (3, '13:00:00', '14:30:00', 'Jeudi', 1, 19, 'b5s112');


--
-- TOC entry 3615 (class 0 OID 22789)
-- Dependencies: 221
-- Data for Name: personne; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (24, 'test', 'test', 'test@se.univ-bejaia.dz', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Administrateur', 'jsp', NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (1, 'admin', 'admin', 'admin@admin.admin', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Administrateur', 'Admin technicien ', NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (2, 'Doe', 'Speed', 'admin22@admin.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Administrateur', 'Admin assistant ', NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (3, 'Garcia', 'Carlos', 'carlos.garcia@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Etudiant', NULL, 2018, 'Licence', NULL, 1, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (5, 'Martin', 'Pierre', 'pierre.martin@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Etudiant', NULL, 2019, 'Master', NULL, 2, 'MI');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (6, 'Dubois', 'Marie', 'marie.dubois@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Enseignant', 'Professeur', NULL, NULL, 6, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (7, 'Johnson', 'Michael', 'michael.johnson@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Etudiant', NULL, 2020, 'Licence', NULL, 2, 'MI');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (8, 'Chen', 'Ling', 'ling.chen@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Enseignant', 'Doctorant', NULL, NULL, 7, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (9, 'Kumar', 'Raj', 'raj.kumar@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Etudiant', NULL, 2017, 'Master', NULL, 1, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (10, 'Gonzalez', 'Maria', 'maria.gonzalez@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Enseignant', 'vacataire', NULL, NULL, 4, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (11, 'Li', 'Wei', 'wei.li@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Enseignant', 'vacataire', NULL, NULL, 3, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (12, 'Kim', 'Yuna', 'yuna.kim@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Etudiant', NULL, 2021, 'Licence', NULL, 1, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (13, 'Martinez', 'Antonio', 'antonio.martinez@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Enseignant', 'vacataire', NULL, NULL, 9, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (14, 'Nguyen', 'Linh', 'linh.nguyen@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Etudiant', NULL, 2020, 'Master', NULL, 1, 'MI');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (15, 'Gomez', 'Ana', 'ana.gomez@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Enseignant', 'Professeur', NULL, NULL, 4, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (16, 'Wilson', 'David', 'david.wilson@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Etudiant', NULL, 2019, 'Licence', NULL, 1, 'MI');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (17, 'Roy', 'Sophie', 'sophie.roy@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Enseignant', 'Doctorant', NULL, NULL, 6, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (18, 'Singh', 'Amit', 'amit.singh@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Etudiant', NULL, 2018, 'Master', NULL, 2, 'MI');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (19, 'Fernandez', 'Laura', 'laura.fernandez@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Enseignant', 'Doctorant', NULL, NULL, 8, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (20, 'Wang', 'Xiao', 'xiao.wang@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Etudiant', NULL, 2021, 'Licence', NULL, 1, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (21, 'Doe', 'John', 'john.doe@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Administrateur', 'Admin Principal', NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (22, 'Smith', 'Jane', 'jane.smith@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Enseignant', 'Professeur', NULL, NULL, 5, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (23, 'Dupont', 'Sophie', 'sophie.dupont@example.com', '$2b$10$5fTEPpmMs8UfRi.1/12ARuovv5uE6EHACFAc7K7SoV3ac/x2H1llC', 'Enseignant', 'Professeur', NULL, NULL, 8, NULL, NULL);


--
-- TOC entry 3628 (class 0 OID 22936)
-- Dependencies: 234
-- Data for Name: ensetcreneaux; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (7, 2);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (6, 1);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 2);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (7, 3);


--
-- TOC entry 3617 (class 0 OID 22816)
-- Dependencies: 223
-- Data for Name: occupation; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.occupation (id_occup, jour, heur_debut, heur_fin) VALUES (1, 'Lundi', '08:00:00', '13:00:00');
INSERT INTO public.occupation (id_occup, jour, heur_debut, heur_fin) VALUES (2, 'Dimanche', '08:00:00', '09:30:00');
INSERT INTO public.occupation (id_occup, jour, heur_debut, heur_fin) VALUES (3, 'Dimanche', '08:00:00', '11:00:00');


--
-- TOC entry 3618 (class 0 OID 22827)
-- Dependencies: 224
-- Data for Name: ensetoccup; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.ensetoccup (matricule, id_occup) VALUES (7, 1);
INSERT INTO public.ensetoccup (matricule, id_occup) VALUES (6, 1);
INSERT INTO public.ensetoccup (matricule, id_occup) VALUES (8, 1);
INSERT INTO public.ensetoccup (matricule, id_occup) VALUES (6, 3);
INSERT INTO public.ensetoccup (matricule, id_occup) VALUES (10, 2);
INSERT INTO public.ensetoccup (matricule, id_occup) VALUES (22, 1);
INSERT INTO public.ensetoccup (matricule, id_occup) VALUES (19, 3);


--
-- TOC entry 3622 (class 0 OID 22863)
-- Dependencies: 228
-- Data for Name: moduleens; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('POO', 7, 1);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('BDD', 7, 3);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('PS', 6, 1);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('PS', 8, 3);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('MC', 6, 2);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('MC', 8, 1);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('MC', 13, 1);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('Req-Con', 22, 1);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('TOP', 15, 3);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('TOP', 19, 2);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('Anglais', 19, 1);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('AIE', 17, 2);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('AIE', 13, 1);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('AIE', 10, 3);


--
-- Extra demo data: more sections/groups/students/teachers/rooms/seances so that
-- the timetable generator can produce several timetables (GL M1, MI L2, GL L3).
-- Demo accounts (password: demo1234):
--   admin.demo@example.com, prof.demo@example.com, etudiant.demo@example.com
--

INSERT INTO public.section (id_section, code_section, niveau, code_specialite) VALUES (2, 'A', 'L2', 'MI');
INSERT INTO public.section (id_section, code_section, niveau, code_specialite) VALUES (3, 'A', 'L3', 'GL');

INSERT INTO public.groupe (id_groupe, code_groupe, id_section) VALUES (6, 'G1', 2);
INSERT INTO public.groupe (id_groupe, code_groupe, id_section) VALUES (7, 'G2', 2);
INSERT INTO public.groupe (id_groupe, code_groupe, id_section) VALUES (8, 'G1', 3);
INSERT INTO public.groupe (id_groupe, code_groupe, id_section) VALUES (9, 'G2', 3);

INSERT INTO public.local (code_local, capacite, type) VALUES ('b5s121', 40, 'SalleTD');
INSERT INTO public.local (code_local, capacite, type) VALUES ('b5s122', 40, 'SalleTD');
INSERT INTO public.local (code_local, capacite, type) VALUES ('b1s2', 30, 'SalleTP');
INSERT INTO public.local (code_local, capacite, type) VALUES ('b1s3', 30, 'SalleTP');
INSERT INTO public.local (code_local, capacite, type) VALUES ('Amphi8', 150, 'Amphi');

-- seances GL M1 S1
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (23, 'POO', 'GL', 'Cours', 'M1', '1');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (24, 'POO', 'GL', 'TD', 'M1', '1');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (25, 'POO', 'GL', 'TP', 'M1', '1');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (26, 'BDD', 'GL', 'Cours', 'M1', '1');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (27, 'BDD', 'GL', 'TD', 'M1', '1');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (28, 'Anglais', 'GL', 'TD', 'M1', '1');
-- seances MI L2 S2
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (29, 'POO', 'MI', 'Cours', 'L2', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (30, 'POO', 'MI', 'TD', 'L2', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (31, 'Anglais', 'MI', 'TD', 'L2', '2');
-- seances GL L3 S1
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (32, 'PA', 'GL', 'Cours', 'L3', '1');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (33, 'PA', 'GL', 'TD', 'L3', '1');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (34, 'PA', 'GL', 'TP', 'L3', '1');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (35, 'BDD', 'GL', 'Cours', 'L3', '1');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (36, 'BDD', 'GL', 'TD', 'L3', '1');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (37, 'POO', 'GL', 'TD', 'L3', '1');

-- teachers (25 = demo teacher) and demo admin (27)
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (25, 'Benali', 'Karim', 'prof.demo@example.com', '$2b$10$HIExtKqhpOX8L5m0zQ8SOO0EDcw585ywGlVaQ3JQ05t2rd8ENyepq', 'Enseignant', 'Professeur', NULL, NULL, 12, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (26, 'Haddad', 'Lina', 'lina.haddad@example.com', '$2b$10$HIExtKqhpOX8L5m0zQ8SOO0EDcw585ywGlVaQ3JQ05t2rd8ENyepq', 'Enseignant', 'Doctorant', NULL, NULL, 10, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (27, 'Demo', 'Admin', 'admin.demo@example.com', '$2b$10$HIExtKqhpOX8L5m0zQ8SOO0EDcw585ywGlVaQ3JQ05t2rd8ENyepq', 'Administrateur', 'Admin Principal', NULL, NULL, NULL, NULL, NULL);
-- students (28 = demo student)
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (28, 'Cherif', 'Sarah', 'etudiant.demo@example.com', '$2b$10$HIExtKqhpOX8L5m0zQ8SOO0EDcw585ywGlVaQ3JQ05t2rd8ENyepq', 'Etudiant', NULL, 2024, 'M1', NULL, 1, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (29, 'Amrani', 'Yacine', 'yacine.amrani@example.com', '$2b$10$HIExtKqhpOX8L5m0zQ8SOO0EDcw585ywGlVaQ3JQ05t2rd8ENyepq', 'Etudiant', NULL, 2024, 'M1', NULL, 2, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (30, 'Meziane', 'Nadia', 'nadia.meziane@example.com', '$2b$10$HIExtKqhpOX8L5m0zQ8SOO0EDcw585ywGlVaQ3JQ05t2rd8ENyepq', 'Etudiant', NULL, 2024, 'M1', NULL, 3, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (31, 'Boudiaf', 'Rayane', 'rayane.boudiaf@example.com', '$2b$10$HIExtKqhpOX8L5m0zQ8SOO0EDcw585ywGlVaQ3JQ05t2rd8ENyepq', 'Etudiant', NULL, 2024, 'M1', NULL, 4, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (32, 'Ouali', 'Amel', 'amel.ouali@example.com', '$2b$10$HIExtKqhpOX8L5m0zQ8SOO0EDcw585ywGlVaQ3JQ05t2rd8ENyepq', 'Etudiant', NULL, 2024, 'M1', NULL, 5, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (33, 'Salhi', 'Mounir', 'mounir.salhi@example.com', '$2b$10$HIExtKqhpOX8L5m0zQ8SOO0EDcw585ywGlVaQ3JQ05t2rd8ENyepq', 'Etudiant', NULL, 2023, 'L2', NULL, 6, 'MI');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (34, 'Kaci', 'Imane', 'imane.kaci@example.com', '$2b$10$HIExtKqhpOX8L5m0zQ8SOO0EDcw585ywGlVaQ3JQ05t2rd8ENyepq', 'Etudiant', NULL, 2023, 'L2', NULL, 7, 'MI');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (35, 'Taleb', 'Walid', 'walid.taleb@example.com', '$2b$10$HIExtKqhpOX8L5m0zQ8SOO0EDcw585ywGlVaQ3JQ05t2rd8ENyepq', 'Etudiant', NULL, 2022, 'L3', NULL, 8, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (36, 'Messaoudi', 'Celia', 'celia.messaoudi@example.com', '$2b$10$HIExtKqhpOX8L5m0zQ8SOO0EDcw585ywGlVaQ3JQ05t2rd8ENyepq', 'Etudiant', NULL, 2022, 'L3', NULL, 9, 'GL');

-- who teaches what
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('PA', 25, 1);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('PA', 23, 2);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('PA', 11, 3);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('POO', 25, 1);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('POO', 15, 2);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('BDD', 22, 1);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('BDD', 26, 2);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('Anglais', 10, 2);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('Anglais', 26, 3);

-- more demo data: second GL M1 section, extra students/teachers, module RES
INSERT INTO public.section (id_section, code_section, niveau, code_specialite) VALUES (4, 'B', 'M1', 'GL');
INSERT INTO public.groupe (id_groupe, code_groupe, id_section) VALUES (10, 'G1', 4);
INSERT INTO public.groupe (id_groupe, code_groupe, id_section) VALUES (11, 'G2', 4);
INSERT INTO public.groupe (id_groupe, code_groupe, id_section) VALUES (12, 'G3', 4);
INSERT INTO public.module (code_module, nom_module) VALUES ('RES', 'Reseaux');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (38, 'RES', 'MI', 'Cours', 'L2', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (39, 'RES', 'MI', 'TD', 'L2', '2');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type, niveau, semestre) VALUES (40, 'RES', 'MI', 'TP', 'L2', '2');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (45, 'Mansouri', 'Sofiane', 'sofiane.mansouri@example.com', '$2b$10$mMbBdSIZNkAEaeJ.FLZOAekc4zP86s4.I9ayiE78e4.2nAZSXcmkW', 'Enseignant', 'Professeur', NULL, NULL, 10, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (46, 'Belkacem', 'Yasmine', 'yasmine.belkacem@example.com', '$2b$10$mMbBdSIZNkAEaeJ.FLZOAekc4zP86s4.I9ayiE78e4.2nAZSXcmkW', 'Enseignant', 'Doctorant', NULL, NULL, 8, NULL, NULL);
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (37, 'Hamidi', 'Ilyes', 'ilyes.hamidi@example.com', '$2b$10$mMbBdSIZNkAEaeJ.FLZOAekc4zP86s4.I9ayiE78e4.2nAZSXcmkW', 'Etudiant', NULL, 2024, 'M1', NULL, 10, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (38, 'Zerrouki', 'Hiba', 'hiba.zerrouki@example.com', '$2b$10$mMbBdSIZNkAEaeJ.FLZOAekc4zP86s4.I9ayiE78e4.2nAZSXcmkW', 'Etudiant', NULL, 2024, 'M1', NULL, 10, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (39, 'Bensalem', 'Anis', 'anis.bensalem@example.com', '$2b$10$mMbBdSIZNkAEaeJ.FLZOAekc4zP86s4.I9ayiE78e4.2nAZSXcmkW', 'Etudiant', NULL, 2024, 'M1', NULL, 11, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (40, 'Guerfi', 'Lydia', 'lydia.guerfi@example.com', '$2b$10$mMbBdSIZNkAEaeJ.FLZOAekc4zP86s4.I9ayiE78e4.2nAZSXcmkW', 'Etudiant', NULL, 2024, 'M1', NULL, 11, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (41, 'Rahmani', 'Tarek', 'tarek.rahmani@example.com', '$2b$10$mMbBdSIZNkAEaeJ.FLZOAekc4zP86s4.I9ayiE78e4.2nAZSXcmkW', 'Etudiant', NULL, 2024, 'M1', NULL, 12, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (42, 'Ferhat', 'Meriem', 'meriem.ferhat@example.com', '$2b$10$mMbBdSIZNkAEaeJ.FLZOAekc4zP86s4.I9ayiE78e4.2nAZSXcmkW', 'Etudiant', NULL, 2024, 'M1', NULL, 12, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (43, 'Ait', 'Koceila', 'koceila.ait@example.com', '$2b$10$mMbBdSIZNkAEaeJ.FLZOAekc4zP86s4.I9ayiE78e4.2nAZSXcmkW', 'Etudiant', NULL, 2024, 'M1', NULL, 1, 'GL');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type, role, anneebac, niveau, charges, id_groupe, code_specialite) VALUES (44, 'Slimani', 'Dalia', 'dalia.slimani@example.com', '$2b$10$mMbBdSIZNkAEaeJ.FLZOAekc4zP86s4.I9ayiE78e4.2nAZSXcmkW', 'Etudiant', NULL, 2024, 'M1', NULL, 2, 'GL');
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('RES', 45, 1);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('RES', 46, 2);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('TOP', 45, 1);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('PS', 46, 2);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('Req-Con', 46, 2);


-- teacher availability (occupied slots): Benali (25), Haddad (26)
INSERT INTO public.occupation (id_occup, jour, heur_debut, heur_fin) VALUES (4, 'Mercredi', '08:00:00', '12:50:00');
INSERT INTO public.occupation (id_occup, jour, heur_debut, heur_fin) VALUES (5, 'Jeudi', '13:00:00', '16:10:00');
INSERT INTO public.occupation (id_occup, jour, heur_debut, heur_fin) VALUES (6, 'Mercredi', '13:00:00', '16:10:00');
INSERT INTO public.ensetoccup (matricule, id_occup) VALUES (25, 4);
INSERT INTO public.ensetoccup (matricule, id_occup) VALUES (25, 5);
INSERT INTO public.ensetoccup (matricule, id_occup) VALUES (26, 6);


-- generated timetables (2024/2025): GL M1 (sections A, B) S1 + S2, MI L2 S2, GL L3 S1
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (17, 1, 'M1', '2', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (18, 2, 'M1', '2', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (19, 3, 'M1', '2', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (20, 4, 'M1', '2', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (21, 5, 'M1', '2', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (24, 8, 'L3', '1', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (25, 9, 'L3', '1', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (36, 1, 'M1', '1', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (37, 2, 'M1', '1', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (38, 3, 'M1', '1', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (39, 4, 'M1', '1', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (40, 5, 'M1', '1', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (46, 10, 'M1', '1', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (47, 11, 'M1', '1', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (48, 12, 'M1', '1', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (54, 10, 'M1', '2', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (55, 11, 'M1', '2', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (56, 12, 'M1', '2', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (57, 6, 'L2', '2', 2025);
INSERT INTO public.emploisdutemps (id_emp, id_groupe, niveau, semestre, annee) VALUES (58, 7, 'L2', '2', 2025);
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (127, '08:00:00', '09:30:00', 'Dimanche', 17, 14, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (128, '09:40:00', '11:10:00', 'Dimanche', 17, 19, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (129, '11:20:00', '12:50:00', 'Dimanche', 17, 17, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (130, '14:40:00', '16:10:00', 'Dimanche', 17, 22, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (131, '08:00:00', '09:30:00', 'Lundi', 17, 9, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (132, '09:40:00', '11:10:00', 'Lundi', 17, 13, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (133, '11:20:00', '12:50:00', 'Lundi', 17, 11, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (134, '14:40:00', '16:10:00', 'Lundi', 17, 16, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (135, '08:00:00', '09:30:00', 'Mardi', 17, 15, 'b5s112');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (136, '09:40:00', '11:10:00', 'Mardi', 17, 20, 'b5s112');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (137, '11:20:00', '12:50:00', 'Mardi', 17, 18, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (138, '14:40:00', '16:10:00', 'Mardi', 17, 12, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (139, '08:00:00', '09:30:00', 'Mercredi', 17, 10, 'b5s122');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (140, '09:40:00', '11:10:00', 'Mercredi', 17, 21, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (141, '08:00:00', '09:30:00', 'Dimanche', 18, 14, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (142, '09:40:00', '11:10:00', 'Dimanche', 18, 19, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (143, '11:20:00', '12:50:00', 'Dimanche', 18, 22, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (144, '14:40:00', '16:10:00', 'Dimanche', 18, 17, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (145, '08:00:00', '09:30:00', 'Lundi', 18, 9, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (146, '09:40:00', '11:10:00', 'Lundi', 18, 11, 'b1s3');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (147, '11:20:00', '12:50:00', 'Lundi', 18, 13, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (148, '14:40:00', '16:10:00', 'Lundi', 18, 16, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (149, '08:00:00', '09:30:00', 'Mardi', 18, 18, 'b1s3');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (150, '09:40:00', '11:10:00', 'Mardi', 18, 15, 'b5s122');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (151, '11:20:00', '12:50:00', 'Mardi', 18, 20, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (152, '14:40:00', '16:10:00', 'Mardi', 18, 10, 'b5s122');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (153, '08:00:00', '09:30:00', 'Mercredi', 18, 12, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (154, '14:40:00', '16:10:00', 'Mercredi', 18, 21, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (155, '08:00:00', '09:30:00', 'Dimanche', 19, 14, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (156, '09:40:00', '11:10:00', 'Dimanche', 19, 19, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (157, '11:20:00', '12:50:00', 'Dimanche', 19, 13, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (158, '14:40:00', '16:10:00', 'Dimanche', 19, 11, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (159, '08:00:00', '09:30:00', 'Lundi', 19, 9, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (160, '09:40:00', '11:10:00', 'Lundi', 19, 17, 'b5s112');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (161, '11:20:00', '12:50:00', 'Lundi', 19, 22, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (162, '14:40:00', '16:10:00', 'Lundi', 19, 16, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (163, '09:40:00', '11:10:00', 'Mardi', 19, 18, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (164, '11:20:00', '12:50:00', 'Mardi', 19, 12, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (165, '13:00:00', '14:30:00', 'Mardi', 19, 15, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (166, '08:00:00', '09:30:00', 'Mercredi', 19, 20, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (167, '09:40:00', '11:10:00', 'Mercredi', 19, 10, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (168, '08:00:00', '09:30:00', 'Jeudi', 19, 21, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (169, '08:00:00', '09:30:00', 'Dimanche', 20, 14, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (170, '09:40:00', '11:10:00', 'Dimanche', 20, 19, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (171, '11:20:00', '12:50:00', 'Dimanche', 20, 11, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (172, '14:40:00', '16:10:00', 'Dimanche', 20, 13, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (173, '08:00:00', '09:30:00', 'Lundi', 20, 9, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (174, '11:20:00', '12:50:00', 'Lundi', 20, 17, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (175, '13:00:00', '14:30:00', 'Lundi', 20, 15, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (176, '14:40:00', '16:10:00', 'Lundi', 20, 16, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (177, '08:00:00', '09:30:00', 'Mardi', 20, 22, 'b5s122');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (178, '09:40:00', '11:10:00', 'Mardi', 20, 21, 'b1s3');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (179, '11:20:00', '12:50:00', 'Mardi', 20, 10, 'b5s122');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (180, '14:40:00', '16:10:00', 'Mardi', 20, 20, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (181, '09:40:00', '11:10:00', 'Mercredi', 20, 18, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (182, '11:20:00', '12:50:00', 'Mercredi', 20, 12, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (183, '08:00:00', '09:30:00', 'Dimanche', 21, 14, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (184, '09:40:00', '11:10:00', 'Dimanche', 21, 19, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (185, '11:20:00', '12:50:00', 'Dimanche', 21, 15, 'b5s122');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (186, '14:40:00', '16:10:00', 'Dimanche', 21, 20, 'b5s122');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (187, '08:00:00', '09:30:00', 'Lundi', 21, 9, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (188, '11:20:00', '12:50:00', 'Lundi', 21, 18, 'b1s3');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (189, '13:00:00', '14:30:00', 'Lundi', 21, 17, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (190, '14:40:00', '16:10:00', 'Lundi', 21, 16, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (191, '08:00:00', '09:30:00', 'Mardi', 21, 13, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (192, '09:40:00', '11:10:00', 'Mardi', 21, 22, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (193, '11:20:00', '12:50:00', 'Mardi', 21, 11, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (194, '14:40:00', '16:10:00', 'Mardi', 21, 21, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (195, '11:20:00', '12:50:00', 'Mercredi', 21, 10, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (196, '13:00:00', '14:30:00', 'Mercredi', 21, 12, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (209, '08:00:00', '09:30:00', 'Dimanche', 24, 33, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (210, '11:20:00', '12:50:00', 'Dimanche', 24, 35, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (211, '13:00:00', '14:30:00', 'Dimanche', 24, 32, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (212, '14:40:00', '16:10:00', 'Dimanche', 24, 37, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (213, '08:00:00', '09:30:00', 'Lundi', 24, 34, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (214, '11:20:00', '12:50:00', 'Lundi', 24, 36, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (215, '08:00:00', '09:30:00', 'Dimanche', 25, 36, 'b5s122');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (216, '11:20:00', '12:50:00', 'Dimanche', 25, 35, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (217, '13:00:00', '14:30:00', 'Dimanche', 25, 32, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (218, '14:40:00', '16:10:00', 'Dimanche', 25, 33, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (219, '11:20:00', '12:50:00', 'Lundi', 25, 34, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (220, '13:00:00', '14:30:00', 'Lundi', 25, 37, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (311, '08:00:00', '09:30:00', 'Dimanche', 36, 6, 'b1s3');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (312, '09:40:00', '11:10:00', 'Dimanche', 36, 3, 'b5s112');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (313, '11:20:00', '12:50:00', 'Dimanche', 36, 26, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (314, '14:40:00', '16:10:00', 'Dimanche', 36, 23, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (315, '08:00:00', '09:30:00', 'Lundi', 36, 25, 'b1s3');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (316, '09:40:00', '11:10:00', 'Lundi', 36, 5, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (317, '11:20:00', '12:50:00', 'Lundi', 36, 27, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (318, '14:40:00', '16:10:00', 'Lundi', 36, 24, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (319, '13:00:00', '14:30:00', 'Mardi', 36, 28, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (320, '11:20:00', '12:50:00', 'Dimanche', 37, 26, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (321, '13:00:00', '14:30:00', 'Dimanche', 37, 6, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (322, '14:40:00', '16:10:00', 'Dimanche', 37, 23, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (323, '09:40:00', '11:10:00', 'Lundi', 37, 5, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (324, '11:20:00', '12:50:00', 'Lundi', 37, 3, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (325, '13:00:00', '14:30:00', 'Lundi', 37, 25, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (326, '11:20:00', '12:50:00', 'Mardi', 37, 27, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (327, '13:00:00', '14:30:00', 'Mardi', 37, 24, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (328, '14:40:00', '16:10:00', 'Mardi', 37, 28, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (329, '11:20:00', '12:50:00', 'Dimanche', 38, 26, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (330, '13:00:00', '14:30:00', 'Dimanche', 38, 3, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (331, '14:40:00', '16:10:00', 'Dimanche', 38, 23, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (332, '08:00:00', '09:30:00', 'Lundi', 38, 6, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (333, '09:40:00', '11:10:00', 'Lundi', 38, 5, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (334, '11:20:00', '12:50:00', 'Lundi', 38, 25, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (335, '14:40:00', '16:10:00', 'Lundi', 38, 27, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (336, '14:40:00', '16:10:00', 'Mardi', 38, 24, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (337, '11:20:00', '12:50:00', 'Mercredi', 38, 28, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (338, '11:20:00', '12:50:00', 'Dimanche', 39, 26, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (339, '13:00:00', '14:30:00', 'Dimanche', 39, 25, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (340, '14:40:00', '16:10:00', 'Dimanche', 39, 23, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (341, '09:40:00', '11:10:00', 'Lundi', 39, 5, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (342, '11:20:00', '12:50:00', 'Lundi', 39, 6, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (343, '13:00:00', '14:30:00', 'Lundi', 39, 27, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (344, '08:00:00', '09:30:00', 'Mardi', 39, 3, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (345, '08:00:00', '09:30:00', 'Mercredi', 39, 24, 'b5s112');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (346, '13:00:00', '14:30:00', 'Mercredi', 39, 28, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (347, '11:20:00', '12:50:00', 'Dimanche', 40, 26, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (348, '13:00:00', '14:30:00', 'Dimanche', 40, 27, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (349, '14:40:00', '16:10:00', 'Dimanche', 40, 23, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (350, '09:40:00', '11:10:00', 'Lundi', 40, 5, 'Amphi16');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (351, '11:20:00', '12:50:00', 'Lundi', 40, 28, 'b5s122');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (352, '13:00:00', '14:30:00', 'Lundi', 40, 6, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (353, '08:00:00', '09:30:00', 'Mardi', 40, 25, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (354, '11:20:00', '12:50:00', 'Mardi', 40, 3, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (355, '09:40:00', '11:10:00', 'Mercredi', 40, 24, 'b5s122');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (356, '09:40:00', '11:10:00', 'Dimanche', 46, 25, 'b1s3');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (357, '11:20:00', '12:50:00', 'Dimanche', 46, 26, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (358, '13:00:00', '14:30:00', 'Dimanche', 46, 23, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (359, '08:00:00', '09:30:00', 'Lundi', 46, 27, 'b5s122');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (360, '11:20:00', '12:50:00', 'Lundi', 46, 5, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (361, '13:00:00', '14:30:00', 'Lundi', 46, 24, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (362, '14:40:00', '16:10:00', 'Lundi', 46, 6, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (363, '11:20:00', '12:50:00', 'Mardi', 46, 3, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (364, '13:00:00', '14:30:00', 'Mardi', 46, 28, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (365, '11:20:00', '12:50:00', 'Dimanche', 47, 26, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (366, '13:00:00', '14:30:00', 'Dimanche', 47, 23, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (367, '14:40:00', '16:10:00', 'Dimanche', 47, 24, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (368, '08:00:00', '09:30:00', 'Lundi', 47, 3, 'b5s112');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (369, '11:20:00', '12:50:00', 'Lundi', 47, 5, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (370, '13:00:00', '14:30:00', 'Lundi', 47, 25, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (371, '14:40:00', '16:10:00', 'Lundi', 47, 28, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (372, '11:20:00', '12:50:00', 'Mardi', 47, 27, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (373, '14:40:00', '16:10:00', 'Mardi', 47, 6, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (374, '11:20:00', '12:50:00', 'Dimanche', 48, 26, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (375, '13:00:00', '14:30:00', 'Dimanche', 48, 23, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (376, '14:40:00', '16:10:00', 'Dimanche', 48, 25, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (377, '11:20:00', '12:50:00', 'Lundi', 48, 5, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (378, '13:00:00', '14:30:00', 'Lundi', 48, 6, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (379, '14:40:00', '16:10:00', 'Lundi', 48, 24, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (380, '11:20:00', '12:50:00', 'Mardi', 48, 28, 'b5s122');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (381, '13:00:00', '14:30:00', 'Mardi', 48, 27, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (382, '09:40:00', '11:10:00', 'Mercredi', 48, 3, 'b5s112');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (383, '11:20:00', '12:50:00', 'Dimanche', 54, 16, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (384, '13:00:00', '14:30:00', 'Dimanche', 54, 19, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (385, '14:40:00', '16:10:00', 'Dimanche', 54, 11, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (386, '08:00:00', '09:30:00', 'Lundi', 54, 14, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (387, '11:20:00', '12:50:00', 'Lundi', 54, 9, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (388, '13:00:00', '14:30:00', 'Lundi', 54, 10, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (389, '14:40:00', '16:10:00', 'Lundi', 54, 17, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (390, '11:20:00', '12:50:00', 'Mardi', 54, 13, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (391, '13:00:00', '14:30:00', 'Mardi', 54, 20, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (392, '14:40:00', '16:10:00', 'Mardi', 54, 18, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (393, '08:00:00', '09:30:00', 'Mercredi', 54, 21, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (394, '11:20:00', '12:50:00', 'Mercredi', 54, 22, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (395, '13:00:00', '14:30:00', 'Mercredi', 54, 15, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (396, '14:40:00', '16:10:00', 'Mercredi', 54, 12, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (397, '11:20:00', '12:50:00', 'Dimanche', 55, 16, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (398, '13:00:00', '14:30:00', 'Dimanche', 55, 19, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (399, '14:40:00', '16:10:00', 'Dimanche', 55, 10, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (400, '08:00:00', '09:30:00', 'Lundi', 55, 14, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (401, '11:20:00', '12:50:00', 'Lundi', 55, 9, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (402, '13:00:00', '14:30:00', 'Lundi', 55, 11, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (403, '14:40:00', '16:10:00', 'Lundi', 55, 13, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (404, '11:20:00', '12:50:00', 'Mardi', 55, 20, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (405, '13:00:00', '14:30:00', 'Mardi', 55, 17, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (406, '14:40:00', '16:10:00', 'Mardi', 55, 15, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (407, '08:00:00', '09:30:00', 'Mercredi', 55, 18, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (408, '11:20:00', '12:50:00', 'Mercredi', 55, 21, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (409, '13:00:00', '14:30:00', 'Mercredi', 55, 22, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (410, '09:40:00', '11:10:00', 'Jeudi', 55, 12, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (411, '11:20:00', '12:50:00', 'Dimanche', 56, 16, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (412, '13:00:00', '14:30:00', 'Dimanche', 56, 19, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (413, '14:40:00', '16:10:00', 'Dimanche', 56, 17, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (414, '08:00:00', '09:30:00', 'Lundi', 56, 14, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (415, '11:20:00', '12:50:00', 'Lundi', 56, 9, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (416, '13:00:00', '14:30:00', 'Lundi', 56, 13, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (417, '14:40:00', '16:10:00', 'Lundi', 56, 11, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (418, '11:20:00', '12:50:00', 'Mardi', 56, 10, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (419, '13:00:00', '14:30:00', 'Mardi', 56, 21, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (420, '14:40:00', '16:10:00', 'Mardi', 56, 20, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (421, '09:40:00', '11:10:00', 'Mercredi', 56, 18, 'b1s3');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (422, '11:20:00', '12:50:00', 'Mercredi', 56, 12, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (423, '14:40:00', '16:10:00', 'Mercredi', 56, 15, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (424, '08:00:00', '09:30:00', 'Jeudi', 56, 22, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (425, '11:20:00', '12:50:00', 'Dimanche', 57, 29, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (426, '13:00:00', '14:30:00', 'Dimanche', 57, 38, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (427, '14:40:00', '16:10:00', 'Dimanche', 57, 40, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (428, '11:20:00', '12:50:00', 'Lundi', 57, 7, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (429, '13:00:00', '14:30:00', 'Lundi', 57, 31, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (430, '14:40:00', '16:10:00', 'Lundi', 57, 8, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (431, '11:20:00', '12:50:00', 'Mardi', 57, 4, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (432, '13:00:00', '14:30:00', 'Mardi', 57, 30, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (433, '11:20:00', '12:50:00', 'Mercredi', 57, 39, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (434, '11:20:00', '12:50:00', 'Dimanche', 58, 29, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (435, '13:00:00', '14:30:00', 'Dimanche', 58, 38, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (436, '14:40:00', '16:10:00', 'Dimanche', 58, 8, 'b1s2');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (437, '11:20:00', '12:50:00', 'Lundi', 58, 7, 'Amphi8');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (438, '13:00:00', '14:30:00', 'Lundi', 58, 40, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (439, '14:40:00', '16:10:00', 'Lundi', 58, 30, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (440, '11:20:00', '12:50:00', 'Mardi', 58, 31, 'b5s120');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (441, '13:00:00', '14:30:00', 'Mardi', 58, 39, 'b5s121');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (442, '14:40:00', '16:10:00', 'Mardi', 58, 4, 'b5s120');
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 127);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 128);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 129);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 130);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 131);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (17, 132);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 133);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 134);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 135);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 136);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 137);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (13, 138);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (6, 139);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 140);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 141);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 142);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 143);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 144);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 145);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 146);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (17, 147);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 148);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 149);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 150);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 151);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (6, 152);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (13, 153);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 154);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 155);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 156);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (13, 157);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (6, 158);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 159);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (13, 160);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 161);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 162);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 163);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (13, 164);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 165);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 166);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (6, 167);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 168);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 169);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 170);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (6, 171);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (13, 172);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 173);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (13, 174);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 175);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 176);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 177);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 178);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 179);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 180);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 181);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (13, 182);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 183);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 184);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 185);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 186);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 187);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (6, 188);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 189);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 190);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (13, 191);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 192);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (6, 193);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 194);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (6, 195);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (13, 196);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 209);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 210);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 211);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 212);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (23, 213);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (26, 214);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (26, 215);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 216);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 217);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 218);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 219);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 220);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (23, 311);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 312);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 313);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 314);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 315);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 316);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (26, 317);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 318);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 319);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 320);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 321);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 322);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 323);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (23, 324);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 325);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 326);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 327);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 328);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 329);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (23, 330);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 331);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (11, 332);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 333);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 334);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 335);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 336);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 337);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 338);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 339);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 340);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 341);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 342);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 343);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 344);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 345);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 346);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 347);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 348);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 349);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 350);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 351);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 352);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 353);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 354);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 355);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 356);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 357);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 358);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (26, 359);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 360);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 361);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (23, 362);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 363);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 364);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 365);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 366);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 367);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (11, 368);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 369);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 370);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 371);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 372);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 373);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 374);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 375);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (15, 376);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 377);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (23, 378);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 379);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 380);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 381);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (23, 382);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 383);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 384);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (6, 385);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (45, 386);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (46, 387);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (46, 388);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 389);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (13, 390);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 391);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 392);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (46, 393);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 394);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (45, 395);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (13, 396);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 397);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 398);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (46, 399);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (45, 400);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (46, 401);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (6, 402);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (13, 403);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 404);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 405);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (45, 406);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 407);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 408);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 409);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (13, 410);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 411);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 412);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 413);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (45, 414);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (46, 415);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (13, 416);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (6, 417);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (6, 418);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (46, 419);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 420);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (8, 421);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (13, 422);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (45, 423);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 424);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 425);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (45, 426);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (45, 427);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (26, 428);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 429);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 430);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 431);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 432);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (45, 433);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 434);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (45, 435);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 436);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (26, 437);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (45, 438);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (25, 439);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (19, 440);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (45, 441);
INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (22, 442);


--
-- TOC entry 3634 (class 0 OID 0)
-- Dependencies: 232
-- Name: creneau_id_creneau_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.creneau_id_creneau_seq', 442, true);


--
-- TOC entry 3635 (class 0 OID 0)
-- Dependencies: 225
-- Name: emploisdutemps_id_emp_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.emploisdutemps_id_emp_seq', 58, true);


--
-- TOC entry 3636 (class 0 OID 0)
-- Dependencies: 218
-- Name: groupe_id_groupe_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.groupe_id_groupe_seq', 12, true);


--
-- TOC entry 3637 (class 0 OID 0)
-- Dependencies: 222
-- Name: occupation_id_occup_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.occupation_id_occup_seq', 6, true);


--
-- TOC entry 3638 (class 0 OID 0)
-- Dependencies: 220
-- Name: personne_matricule_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.personne_matricule_seq', 46, true);


--
-- TOC entry 3639 (class 0 OID 0)
-- Dependencies: 230
-- Name: seance_id_seance_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seance_id_seance_seq', 40, true);


--
-- TOC entry 3640 (class 0 OID 0)
-- Dependencies: 216
-- Name: section_id_section_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.section_id_section_seq', 4, true);


-- Completed on 2024-04-19 15:59:37 CET

--
-- PostgreSQL database dump complete
--

