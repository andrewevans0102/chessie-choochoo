#!/bin/sh
# setup_commit.sh

mkdir 'setup_commit'
cd 'setup_commit'

curl -H "Authorization:token $CC_TOKEN" -H "Accept:application/vnd.github.v3.raw" -O -L $CC_EMPTY'environment.ts'
curl -H "Authorization:token $CC_TOKEN" -H "Accept:application/vnd.github.v3.raw" -O -L $CC_EMPTY'environment.prod.ts'

rm -rf ../src/environments/environment.ts
rm -rf ../src/environments/environment.prod.ts

cp environment.ts ../src/environments/environment.ts
cp environment.prod.ts ../src/environments/environment.prod.ts

cd ..
rm -rf 'setup_commit'
