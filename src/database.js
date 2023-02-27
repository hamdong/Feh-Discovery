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
    db.get('PRAGMA foreign_keys = ON');
  }
});

db.serialize(() => {
  db.run(
    `CREATE TABLE tblStat (
      stat CHAR(3) PRIMARY KEY NOT NULL,
      seq INTEGER UNIQUE
    )`,
    (err) => {
      if (err) {
        // Table already created
        console.log(err);
      } else {
        // Table just created, creating some rows
      }
    }
  );
  var insert = 'INSERT INTO tblStat (stat, seq) VALUES (?,?)';
  db.run(insert, ['HP', 1]);
  db.run(insert, ['Atk', 2]);
  db.run(insert, ['Spd', 3]);
  db.run(insert, ['Def', 4]);
  db.run(insert, ['Res', 5]);
  db.run(
    `CREATE TABLE tblEffect (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      cond TEXT NOT NULL,
      stat CHAR(3) NOT NULL REFERENCES tblStat (stat) ON DELETE CASCADE
    )`,
    (err) => {
      if (err) {
        // Table already created
        console.log(err.message);
      } else {
        // Table just created, creating some rows
        try {
        } catch (err) {
          console.log(err.message);
        }
      }
    }
  );
  var insert = 'INSERT INTO tblEffect (cond, stat) VALUES (?,?)';
  db.run(insert, ['Unit initiates combat', 'Atk']);
  db.run(insert, ['Unit initiates combat', 'Spd']);
  db.run(
    `CREATE TABLE tblSkill (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name text,
      slot text,
      value INTEGER,
      effectId INTEGER,
      CONSTRAINT effectId
      FOREIGN KEY (effectId)
      REFERENCES tblEffect (id)
      ON DELETE CASCADE
    )`,
    (err) => {
      if (err) {
        // Table already created
        console.log(err);
      } else {
        // Table just created, creating some rows
      }
    }
  );
  var insert =
    'INSERT INTO tblSkill (name, slot, value, effectId) VALUES (?,?,?,?)';
  db.run(insert, ['Death Blow 1', 'A', 2, 1]);
  db.run(insert, ['Death Blow 2', 'A', 4, 1]);
  db.run(insert, ['Death Blow 3', 'A', 6, 1]);
  db.run(insert, ['Darting Blow 1', 'A', 2, 2]);
  db.run(insert, ['Darting Blow 2', 'A', 4, 2]);
  db.run(insert, ['Darting Blow 3', 'A', 6, 2]);
});

module.exports = db;
