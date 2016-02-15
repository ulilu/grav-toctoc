#!/bin/sh
chown toctoc:toctoc .
chown -R toctoc:toctoc *
find . -type f | xargs chmod 664
find ./bin -type f | xargs chmod 775
find . -type d | xargs chmod 775
find . -type d | xargs chmod +s
umask 0002
