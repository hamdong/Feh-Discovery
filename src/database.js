var sqlite3 = require('sqlite3').verbose();
var md5 = require('md5');

const DBSOURCE = 'src/db.sqlite';

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');
    db.run(
      `CREATE TABLE tblEffect (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cond text,
        stat text,
        buff INTEGER
      )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert =
            'INSERT INTO tblEffect (cond, stat, buff) VALUES (?,?,?)';
          db.run(insert, ['Unit initiates combat', 'Atk', 2]);
          db.run(insert, ['Unit initiates combat', 'Atk', 4]);
          db.run(insert, ['Unit initiates combat', 'Atk', 6]);
        }
      }
    );
    db.run(
      `CREATE TABLE tblSkill (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name text, 
        slot text, 
        effectId INTEGER,
        CONSTRAINT effectId 
        FOREIGN KEY (effectId)
        REFERENCES tblEffect (id)
      )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert =
            'INSERT INTO tblSkill (name, slot, effectId) VALUES (?,?,?)';
          db.run(insert, ['Death Blow 1', 'A', 1]);
          db.run(insert, ['Death Blow 2', 'A', 2]);
          db.run(insert, ['Death Blow 3', 'A', 3]);
        }
      }
    );
  }
});

module.exports = db;
