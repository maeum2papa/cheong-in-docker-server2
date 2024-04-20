apt-get update
apt-get install -y nodejs npm mariadb-server certbot python3-certbot-nginx



echo "nginx.conf 복사..."
cp /etc/nginx/sites-available/default /etc/nginx/sites-available/_backup_default
cp /var/www/html/nginx.conf /etc/nginx/sites-available/default

service nginx restart


echo "mariadb 실행..."
service mariadb start


echo "mariadb 자동 실행 설정..."
update-rc.d mariadb defaults



echo "mariadb root 설정..."
mysql_secure_installation <<EOF

y
y
cjddlstjfql10#
cjddlstjfql10#
y
y
y
y
EOF


# echo "mariadb 계정 생성 및 데이터베이스 생성..."
mysql <<MYSQL_SCRIPT
CREATE DATABASE cheongin;
CREATE USER 'cheongin'@'localhost' IDENTIFIED BY 'cjddlstjfql10#';
GRANT ALL PRIVILEGES ON cheongin.* TO 'cheongin'@'localhost';
FLUSH PRIVILEGES;
MYSQL_SCRIPT


echo "데이터베이스 복원..."
mysql -u cheongin -pcjddlstjfql10# cheongin < /var/www/html/cheongin.sql


echo "서버 시작..."
cd /var/www/html/cheong-in.com
npm install
npm run build

export PORT=3000
nohup node /var/www/html/cheong-in.com/build/index.js &


echo "ssl 인증 받기..."
certbot certonly --webroot -w /var/www/html -d cheong-in.com<<EOF
okhi1@naver.com
y
y
EOF


echo "SHELL=/bin/sh
PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin

0 */12 * * * test -x /usr/bin/certbot -a \! -d /run/systemd/system && perl -e 'sleep int(rand(43200))' && certbot -q renew --no-random-sleep-on-renew" > /etc/cron.d/certbot



service nginx restart