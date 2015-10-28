BEGIN;
DROP SCHEMA IF EXISTS public CASCADE;
DROP SCHEMA IF EXISTS dbv CASCADE;

CREATE SCHEMA dbv
  AUTHORIZATION geegomoonshine;

CREATE TABLE dbv.schemaChangeLog (
  version     INT         PRIMARY KEY,
  description VARCHAR(60) NOT NULL,
  date        DATE        NOT NULL DEFAULT NOW()
);

INSERT INTO dbv.schemaChangeLog (version, description)
VALUES (
  1,
  'Initial_install'
);

CREATE OR REPLACE FUNCTION dbv.log_update(
  IN
  i_version     INT,
  i_description VARCHAR(4)
)
  RETURNS BOOLEAN AS
$BODY$
BEGIN
  INSERT INTO dbv.schemaChangeLog (version, description)
  VALUES (i_version, i_description);
  RETURN FOUND;
END;
$BODY$
LANGUAGE plpgsql;

COMMIT;