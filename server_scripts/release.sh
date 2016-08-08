appdir='/opt/lysanoe'
cd $appdir

noprev=$1
if [ -z $noprev ] || [ $noprev != 'noprev' ]; then
	prev=1;
else 
	prev=0;
fi

if [ $prev == 1 ]; then
	echo '--- Keeping current as previous'
	rm -rf previous/
	mv current previous
else
	rm -rf current/
fi

echo '--- Unpacking to current'
git clone https://github.com/mnfilius/lysanoe.git current
chgrp ubuntu current/public -R
chmod g=u    current/public -R

echo '--- Installing libraries'
cd  current
npm install

cd $appdir

echo '--- Next: app restart using ./restart.sh'
echo '--- Done'

