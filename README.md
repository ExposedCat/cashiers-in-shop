# Cashiers In Shop

TypeScript backend for cashiers service (<a href="https://docs.google.com/document/d/111R0KBTRgTGuY2VWJVEwXFRgVqnAr9E0tTU610UkqXU/edit#heading=h.uaixm4b7snbc">test task</a> for Chatbots.Studio internship).


## Usage

Change database and user info at `db/db.env` (default db is `shop-db` on localhost port `5432` with user `shop-admin` and password `uck202urP`).  
Run `npm start` in project root with variables from `db/db.env` file to compile and run program.  

P.S. Run `env $(cat ./db/db.env | xargs) npm start` to pass variables from `db/db.env` to program. (Requires `xargs` and `cat`)

## Dependencies

Install dependencies using `npm install`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.  
Please make sure to update tests as appropriate.

## License

[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)
