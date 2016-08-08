if [ -z $1 ]; then 
	echo '--- Restarting NodeJS only'	
	killall node
	node src/index.js &
	exit;
fi

./stop.sh
sleep 1
./start.sh

