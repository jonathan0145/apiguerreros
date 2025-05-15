-- Crear tabla de jugadores
CREATE TABLE players (
    player_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

-- Crear tabla de razas
CREATE TABLE races (
    race_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT
) ENGINE=InnoDB;

-- Crear tabla de tipos de guerrero
CREATE TABLE warrior_types (
    type_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT
) ENGINE=InnoDB;

-- Crear tabla de poderes
CREATE TABLE powers (
    power_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    percentage INT NOT NULL
) ENGINE=InnoDB;

-- Crear tabla de hechizos
CREATE TABLE spells (
    spell_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    percentage INT NOT NULL
) ENGINE=InnoDB;

-- Crear tabla de guerreros
CREATE TABLE warriors (
    warrior_id INT AUTO_INCREMENT PRIMARY KEY,
    player_id INT,
    name VARCHAR(50) NOT NULL,
    type_id INT,
    race_id INT,
    total_power INT NOT NULL,
    total_magic INT NOT NULL,
    health INT NOT NULL,
    speed INT NOT NULL,
    intelligence INT NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    FOREIGN KEY (player_id) REFERENCES players(player_id),
    FOREIGN KEY (type_id) REFERENCES warrior_types(type_id),
    FOREIGN KEY (race_id) REFERENCES races(race_id)
) ENGINE=InnoDB;

-- Relación muchos a muchos: guerreros y poderes
CREATE TABLE warrior_powers (
    warrior_id INT,
    power_id INT,
    PRIMARY KEY (warrior_id, power_id),
    FOREIGN KEY (warrior_id) REFERENCES warriors(warrior_id),
    FOREIGN KEY (power_id) REFERENCES powers(power_id)
) ENGINE=InnoDB;

-- Relación muchos a muchos: guerreros y hechizos
CREATE TABLE warrior_spells (
    warrior_id INT,
    spell_id INT,
    PRIMARY KEY (warrior_id, spell_id),
    FOREIGN KEY (warrior_id) REFERENCES warriors(warrior_id),
    FOREIGN KEY (spell_id) REFERENCES spells(spell_id)
) ENGINE=InnoDB;

-- Tabla de partidas
CREATE TABLE matches (
    match_id INT AUTO_INCREMENT PRIMARY KEY,
    mode VARCHAR(20) NOT NULL,
    winner_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    finished_at TIMESTAMP NULL,
    FOREIGN KEY (winner_id) REFERENCES players(player_id)
) ENGINE=InnoDB;

-- Relación jugadores-partidas (participantes)
CREATE TABLE match_players (
    match_id INT,
    player_id INT,
    PRIMARY KEY (match_id, player_id),
    FOREIGN KEY (match_id) REFERENCES matches(match_id),
    FOREIGN KEY (player_id) REFERENCES players(player_id)
) ENGINE=InnoDB;

-- Relación personajes-partidas
CREATE TABLE match_warriors (
    match_id INT,
    warrior_id INT,
    PRIMARY KEY (match_id, warrior_id),
    FOREIGN KEY (match_id) REFERENCES matches(match_id),
    FOREIGN KEY (warrior_id) REFERENCES warriors(warrior_id)
) ENGINE=InnoDB;

-- Tabla de estadísticas
CREATE TABLE player_stats (
    player_id INT PRIMARY KEY,
    games_played INT DEFAULT 0,
    victories INT DEFAULT 0,
    defeats INT DEFAULT 0,
    FOREIGN KEY (player_id) REFERENCES players(player_id)
) ENGINE=InnoDB;

-- Tabla de ranking
CREATE TABLE ranking (
    player_id INT PRIMARY KEY,
    score INT DEFAULT 0,
    FOREIGN KEY (player_id) REFERENCES players(player_id)
) ENGINE=InnoDB;

-- Tabla de usuarios de API (administradores o servicios)
CREATE TABLE api_users (
    api_user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'service', 'read_only') DEFAULT 'read_only',
    api_token VARCHAR(255) UNIQUE
) ENGINE=InnoDB;