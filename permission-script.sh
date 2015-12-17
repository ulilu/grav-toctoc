#!/bin/sh
chown ulliver:staff .
chown -R ulliver:staff *
find . -type f | xargs chmod 664
find ./bin -type f | xargs chmod 775
find . -type d | xargs chmod 775
find . -type d | xargs chmod +s
umask 0002
