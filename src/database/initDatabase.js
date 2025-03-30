export async function initDatabase(database) {
  await database.execAsync(
    `
      CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL
      );
  
      CREATE TABLE IF NOT EXISTS tasks (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          taskName TEXT NOT NULL,
          isDone BOOLEAN NOT NULL DEFAULT false,
          userId INTEGER NOT NULL,
  
          FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
      );
    `
  );
}
