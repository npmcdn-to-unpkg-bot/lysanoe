echo '--- Starting MongoDB'
mongod --dbpath mongodb/db/ &

echo '--- Starting app' 
#npm start &
node src/index.js &


