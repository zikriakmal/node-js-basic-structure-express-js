# Intallation

* npm i
* cp .env.example to .env and set your environtment

# run backend app

* npm run server

#  migration (using mysql-migrations package) 

*for make migration*

* npm run migrate add create_users_table 
* create your own up and down sql raw query

*run migration*

* npm run migrate up
  
*rollback migration*

* npm run migrate down