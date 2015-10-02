#!/usr/bin/env bash

echo ""
echo "*****STARTING UP DB TO PROVISION*****"

gosu postgres pg_ctl start -w -D $PGDATA

echo ""
echo "******EXECUTING WEB_USERS SCRIPT******"

gosu postgres psql -h localhost \
                   -p 5432 \
                   -U postgres  \
                   -d lindoriadb \
                   -a \
                   -f /docker-entrypoint-initdb.d/web_users.sql

echo ""
echo "******WEB_USERS SCRIPT DONE******"

echo ""
echo "*****PROVICION COMPLETE SHUTING DOWN DB CLUSTER*****"

gosu postgres pg_ctl stop -w

echo ""
echo "******DB CLUSTER SHUT DOWN******"
