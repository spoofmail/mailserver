# mailserver
Receives emails sent to @spoofmail.us and forwards them to the backend heroku service.

Deployed on AWS Lightsail.

MX record setup on Google DNS points to the Lightsail instance

Spoofmail Frontend: https://github.com/spoofmail/front-end

Spoofmail Backend: https://github.com/spoofmail/back-end

# Docker
```
docker build . -t spoofmail-mailserver

docker run -d -p 25:25 spoofmail-mailserver --name spoofmail-mailserver

docker tag local-image:tagname new-repo:tagname

docker push new-repo:tagname
```