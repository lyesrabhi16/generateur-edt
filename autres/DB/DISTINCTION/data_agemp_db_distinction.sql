--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Ubuntu 16.2-1.pgdg22.04+1)
-- Dumped by pg_dump version 16.2 (Ubuntu 16.2-1.pgdg22.04+1)

-- Started on 2024-03-13 21:10:17 CET

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
-- TOC entry 3609 (class 0 OID 20965)
-- Dependencies: 220
-- Data for Name: personne; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.personne (matricule, nom, prenom, email, password, type) VALUES (1, 'admin', 'admin', 'admin@admin.admin', 'admin', 'Administrateur');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type) VALUES (4, 'ens', 'ens', 'ens@ens.ens', 'ens', 'Enseignant');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type) VALUES (7, 'ens1', 'ens1', 'ens@ens.ens', 'ens', 'Enseignant');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type) VALUES (8, 'ens2', 'ens2', 'ens@ens.ens', 'ens', 'Enseignant');
INSERT INTO public.personne (matricule, nom, prenom, email, password, type) VALUES (6, 'etd', 'etd', 'etd@etd', 'etd', 'Etudiant');


--
-- TOC entry 3610 (class 0 OID 20978)
-- Dependencies: 221
-- Data for Name: administrateur; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.administrateur (matricule, role) VALUES (1, 'admin de jsp quoi');


--
-- TOC entry 3605 (class 0 OID 20943)
-- Dependencies: 216
-- Data for Name: section; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.section (code_section) VALUES ('M1GL');


--
-- TOC entry 3607 (class 0 OID 20949)
-- Dependencies: 218
-- Data for Name: groupe; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.groupe (id_groupe, code_groupe, code_section) VALUES (1, 'G5', 'M1GL');


--
-- TOC entry 3617 (class 0 OID 21053)
-- Dependencies: 228
-- Data for Name: emploisdutemps; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.emploisdutemps (id_emp, id_groupe) VALUES (1, 1);


--
-- TOC entry 3620 (class 0 OID 21089)
-- Dependencies: 231
-- Data for Name: local; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.local (code_local, capacite, type) VALUES ('b5s112', 60, 'SalleTD');
INSERT INTO public.local (code_local, capacite, type) VALUES ('b5s120', 40, 'SalleTD');
INSERT INTO public.local (code_local, capacite, type) VALUES ('b1s1', 30, 'SalleTP');
INSERT INTO public.local (code_local, capacite, type) VALUES ('Amphi16', 200, 'Amphi');


--
-- TOC entry 3618 (class 0 OID 21065)
-- Dependencies: 229
-- Data for Name: module; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.module (code_module, nom_module) VALUES ('PA', 'programmation avancee');
INSERT INTO public.module (code_module, nom_module) VALUES ('BDD', 'base des donnees');
INSERT INTO public.module (code_module, nom_module) VALUES ('POO', 'programmation oriente objet');


--
-- TOC entry 3604 (class 0 OID 20935)
-- Dependencies: 215
-- Data for Name: specialite; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.specialite (code_specialite, nom_specialite) VALUES ('GL', 'genie logiciel');
INSERT INTO public.specialite (code_specialite, nom_specialite) VALUES ('MI', 'Math informatique');


--
-- TOC entry 3622 (class 0 OID 21097)
-- Dependencies: 233
-- Data for Name: seance; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.seance (id_seance, code_module, code_specialite, type) VALUES (3, 'PA', 'GL', 'TD');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type) VALUES (4, 'BDD', 'MI', 'TD');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type) VALUES (5, 'PA', 'GL', 'Cours');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type) VALUES (6, 'PA', 'GL', 'TP');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type) VALUES (7, 'BDD', 'MI', 'Cours');
INSERT INTO public.seance (id_seance, code_module, code_specialite, type) VALUES (8, 'BDD', 'MI', 'TP');


--
-- TOC entry 3624 (class 0 OID 21119)
-- Dependencies: 235
-- Data for Name: creneau; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (1, '08:00:00', '09:30:00', 'Dimanche', 1, 6, 'b1s1');
INSERT INTO public.creneau (id_creneau, debut, fin, jour, id_emp, id_seance, code_local) VALUES (2, '08:00:00', '09:30:00', 'Dimanche', 1, 4, 'b5s112');


--
-- TOC entry 3612 (class 0 OID 21013)
-- Dependencies: 223
-- Data for Name: enseignant; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.enseignant (matricule, charges, role) VALUES (4, 0, 'jsp');
INSERT INTO public.enseignant (matricule, charges, role) VALUES (7, 0, 'jsp');
INSERT INTO public.enseignant (matricule, charges, role) VALUES (8, 0, 'jsp');


--
-- TOC entry 3625 (class 0 OID 21146)
-- Dependencies: 236
-- Data for Name: ensetcreneaux; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.ensetcreneaux (matricule, id_creneau) VALUES (7, 2);


--
-- TOC entry 3614 (class 0 OID 21026)
-- Dependencies: 225
-- Data for Name: occupation; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.occupation (id_occup, jour, heur_debut, heur_fin) VALUES (1, 'Lundi', '08:00:00', '13:00:00');


--
-- TOC entry 3615 (class 0 OID 21037)
-- Dependencies: 226
-- Data for Name: ensetoccup; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.ensetoccup (matricule, id_occup) VALUES (7, 1);


--
-- TOC entry 3611 (class 0 OID 20989)
-- Dependencies: 222
-- Data for Name: etudiant; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.etudiant (matricule, anneebac, niveau, id_groupe, code_specialite) VALUES (6, 2020, 'M1', 1, 'GL');


--
-- TOC entry 3619 (class 0 OID 21073)
-- Dependencies: 230
-- Data for Name: moduleens; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('POO', 7, 1);
INSERT INTO public.moduleens (code_module, matricule, priorite) VALUES ('BDD', 7, 3);


--
-- TOC entry 3631 (class 0 OID 0)
-- Dependencies: 234
-- Name: creneau_id_creneau_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.creneau_id_creneau_seq', 2, true);


--
-- TOC entry 3632 (class 0 OID 0)
-- Dependencies: 227
-- Name: emploisdutemps_id_emp_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.emploisdutemps_id_emp_seq', 1, true);


--
-- TOC entry 3633 (class 0 OID 0)
-- Dependencies: 217
-- Name: groupe_id_groupe_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.groupe_id_groupe_seq', 1, true);


--
-- TOC entry 3634 (class 0 OID 0)
-- Dependencies: 224
-- Name: occupation_id_occup_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.occupation_id_occup_seq', 1, true);


--
-- TOC entry 3635 (class 0 OID 0)
-- Dependencies: 219
-- Name: personne_matricule_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.personne_matricule_seq', 8, true);


--
-- TOC entry 3636 (class 0 OID 0)
-- Dependencies: 232
-- Name: seance_id_seance_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seance_id_seance_seq', 8, true);


-- Completed on 2024-03-13 21:10:17 CET

--
-- PostgreSQL database dump complete
--

