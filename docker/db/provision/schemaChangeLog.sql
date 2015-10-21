BEGIN;
DROP SCHEMA IF EXISTS public CASCADE;

CREATE SCHEMA dbv AUTHORIZATION geegomoonshine;

CREATE TABLE dbv.schemaChangeLog (
  id SERIAL,
  version VARCHAR(4) NOT NULL UNIQUE,
  description VARCHAR(60) NOT NULL,
  date DATE NOT NULL DEFAULT NOW()
);

INSERT INTO dbv.schemaChangeLog (version, description)
VALUES (
  '000',
  'Initial install'
);
COMMIT;