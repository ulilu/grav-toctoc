chown ulliver:staff .
chown -R ulliver:staff *
find . -type f ! -path "./bin/" | xargs chmod 664
find . -type f -path "./bin/" | xargs chmod 775
find . -type d | xargs chmod 775
find . -type d | xargs chmod +s
umask 0002
