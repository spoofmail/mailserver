docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname

docker build . -t spoofmail-mailserver

docker run -d -p 25:25 spoofmail-mailserver --name spoofmail-mailserver