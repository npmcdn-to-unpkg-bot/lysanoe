echo '--- Starting MongoDB'
mongod --dbpath mongodb/db/ &

echo '--- Starting app' 
node src/index.js &


