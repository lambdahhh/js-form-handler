rebuild: stop build up

up:
	docker-compose up -d --build --remove-orphans
build:
	docker-compose build
stop:
	docker-compose stop
front:
	docker-compose exec frontend bash
