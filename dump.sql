--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Assets; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Assets" (
    id integer NOT NULL,
    name character varying(255),
    type character varying(255),
    quantity integer,
    base character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Assets" OWNER TO postgres;

--
-- Name: Assets_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Assets_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Assets_id_seq" OWNER TO postgres;

--
-- Name: Assets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Assets_id_seq" OWNED BY public."Assets".id;


--
-- Name: Assignments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Assignments" (
    id integer NOT NULL,
    "assetId" integer,
    "assignedTo" character varying(255),
    quantity integer,
    status character varying(255),
    base character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Assignments" OWNER TO postgres;

--
-- Name: Assignments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Assignments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Assignments_id_seq" OWNER TO postgres;

--
-- Name: Assignments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Assignments_id_seq" OWNED BY public."Assignments".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: Transfers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Transfers" (
    id integer NOT NULL,
    "fromBase" character varying(255),
    "toBase" character varying(255),
    "assetId" integer,
    quantity integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Transfers" OWNER TO postgres;

--
-- Name: Transfers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Transfers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Transfers_id_seq" OWNER TO postgres;

--
-- Name: Transfers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Transfers_id_seq" OWNED BY public."Transfers".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    name character varying(255),
    email character varying(255),
    password character varying(255),
    role character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(255) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: Assets id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Assets" ALTER COLUMN id SET DEFAULT nextval('public."Assets_id_seq"'::regclass);


--
-- Name: Assignments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Assignments" ALTER COLUMN id SET DEFAULT nextval('public."Assignments_id_seq"'::regclass);


--
-- Name: Transfers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Transfers" ALTER COLUMN id SET DEFAULT nextval('public."Transfers_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: Assets; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Assets" (id, name, type, quantity, base, "createdAt", "updatedAt") FROM stdin;
1	Night Vision Goggles	Optics	8	Leh HQ	2025-06-26 18:55:17.613+05:30	2025-06-26 21:14:47.265+05:30
2	Night Vision Goggles	Optics	2	Siachen Base	2025-06-26 21:14:47.279+05:30	2025-06-26 21:14:47.311+05:30
\.


--
-- Data for Name: Assignments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Assignments" (id, "assetId", "assignedTo", quantity, status, base, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20250626122829-create-asset.js
20250626132924-create-transfer.js
20250627062350-create-users.js
\.


--
-- Data for Name: Transfers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Transfers" (id, "fromBase", "toBase", "assetId", quantity, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, name, email, password, role, "createdAt", "updatedAt") FROM stdin;
1	Asha	admin@military.com	$2b$10$lzHu4HQwXA.3aCsvQyYSyuOOMwEgJ/phHDo73ZasqnEXU5tXF.y3e	admin	2025-06-26 15:31:21.47+05:30	2025-06-26 15:31:21.47+05:30
2	Ashlesha	asha@military.com	$2b$10$1qMPoJXIq5y7qm1iNkOWS.5bU3G7hlW6FqQoDlHhnVLN7C.8lMysq	admin	2025-06-26 15:36:35.724+05:30	2025-06-26 15:36:35.724+05:30
3	Ash	ash@army.com	$2b$10$CFptCbVn7Hv69kmNMktyeerY/KB1vvbxVRiHiV3reI80FzBlCxBwq	admin	2025-06-26 18:50:33.47+05:30	2025-06-26 18:50:33.47+05:30
4	\N	admin@example.com	$2b$10$Tjj9t8YHrqFd19MK21l0beXsMJEgPThU/Nj3DivEBFxusaKr2nR4G	admin	2025-06-27 10:52:50.134+05:30	2025-06-27 10:52:50.134+05:30
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, role, "createdAt", "updatedAt") FROM stdin;
1	admin@example.com	$2b$10$jLIoDmM966cWJTkJndo5o.EBi3.LdR.R6EH0hGZCzSJ9MKRk6hZoa	admin	2025-06-27 12:04:30.072+05:30	2025-06-27 12:04:30.072+05:30
\.


--
-- Name: Assets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Assets_id_seq"', 2, true);


--
-- Name: Assignments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Assignments_id_seq"', 1, false);


--
-- Name: Transfers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Transfers_id_seq"', 1, false);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: Assets Assets_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Assets"
    ADD CONSTRAINT "Assets_pkey" PRIMARY KEY (id);


--
-- Name: Assignments Assignments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Assignments"
    ADD CONSTRAINT "Assignments_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Transfers Transfers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Transfers"
    ADD CONSTRAINT "Transfers_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

