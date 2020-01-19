USE local;

DROP TABLE mb_languages;

CREATE TABLE mb_languages (
  lang_id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  lang VARCHAR(60) NOT NULL,
  lang_eng VARCHAR(20) NOT NULL,
  PRIMARY KEY (lang_id),
  UNIQUE (lang)
) DEFAULT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci';

DROP TABLE mb_threads;

CREATE TABLE mb_threads (
  thread_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  lang_id TINYINT(3) UNSIGNED NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  subject VARCHAR(150) NOT NULL,
  PRIMARY KEY (thread_id),
  INDEX (lang_id),
  INDEX (user_id)
) DEFAULT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci';

DROP TABLE mb_posts;

CREATE TABLE mb_posts (
  post_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  thread_id INT UNSIGNED NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  message TEXT NOT NULL,
  posted_on DATETIME NOT NULL,
  PRIMARY KEY (post_id),
  INDEX (thread_id),
  INDEX (user_id)
) DEFAULT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci';

DROP TABLE mb_users;

CREATE TABLE mb_users (
  user_id MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
  lang_id TINYINT UNSIGNED NOT NULL,
  time_zone VARCHAR(30) NOT NULL,
  username VARCHAR(30) NOT NULL,
  pass CHAR(40) NOT NULL,
  email VARCHAR(60) NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE (username),
  UNIQUE (email),
  INDEX login (username, pass)
) DEFAULT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci';

DROP TABLE mb_words;

CREATE TABLE mb_words (
  word_id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  lang_id TINYINT UNSIGNED NOT NULL,
  title VARCHAR(80) NOT NULL,
  intro TINYTEXT NOT NULL,
  home VARCHAR(30) NOT NULL,
  forum_home VARCHAR(40) NOT NULL,
  `language` VARCHAR(40) NOT NULL,
  register VARCHAR(30) NOT NULL,
  login VARCHAR(30) NOT NULL,
  logout VARCHAR(30) NOT NULL,
  new_thread VARCHAR(40) NOT NULL,
  subject VARCHAR(30) NOT NULL,
  body VARCHAR(30) NOT NULL,
  submit VARCHAR(30) NOT NULL,
  posted_on VARCHAR(30) NOT NULL,
  posted_by VARCHAR(30) NOT NULL,
  replies VARCHAR(30) NOT NULL,
  latest_reply VARCHAR(40) NOT NULL,
  post_a_reply VARCHAR(40) NOT NULL,
  PRIMARY KEY (word_id),
  UNIQUE (lang_id)
) DEFAULT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci';

INSERT INTO mb_languages (lang, lang_eng) VALUES
  ('English', 'English'),
  ('Português', 'Portugese'),
  ('Français', 'French'),
  ('Norsk', 'Norwegian'),
  ('Românesc', 'Romanian'),
  ('Ελληνικά', 'Greek'),
  ('Deutsch', 'German'),
  ('Српски', 'Serbian'),
  ('日本語', 'Japanese'),
  ('Hollandsk', 'Dutch'),
  ('Pусский', 'Russian');

INSERT INTO mb_users (lang_id, time_zone, username, pass, email) VALUES
  (1, 'America/New_York', 'troutster', SHA1('password'), 'email@example.com'),
  (7, 'Europe/Berlin', 'Ute', SHA1('pa24word'), 'ute@example.com'),
  (4, 'Europe/Oslo', 'Silje', SHA1('2kll13'), 'silje@example.com'),
  (2, 'America/Sao_Paolo', 'João', SHA1('fJDLN34'), 'joao@example.com'),
  (1, 'Pacific/Auckland', 'kiwi', SHA1('conchord'), 'kiwi@example.com');

INSERT INTO mb_words VALUES
  (NULL, 1, 'PHP and MySQL for Dynamic Web Sites: The Forum!', '<p>Welcome to our site!</p>\r\n<p>Please use the links above.</p>', 'Home', 'Forum Home', 'Language', 'Register', 'Login', 'Logout', 'New Thread', 'Subject', 'Body', 'Submit', 'Posted on', 'Posted by', 'Replies', 'Latest Reply', 'Post a Reply');