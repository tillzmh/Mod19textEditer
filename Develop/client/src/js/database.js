import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('add to database');
  
  // create a connection to the data bases and version
  const jateDb = await openDB('jate', 1, );
  const tx = jateDb.transaction('jate', 'readwrite'); // created a new transaction and specify the db and db privileges
  const store = tx.objectStore('jate'); // opened the desired object store
  const request = store.add({content}); // used .add method on the stroe and pass in the content
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
