CREATE TABLE IF NOT EXISTS asignatura(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nombre TEXT,
    docente TEXT,
    horario TEXT);

INSERT INTO asignatura
 ( nombre, docente, horario) VALUES 
('Diseño de Prototipo','Cindy Perez','lunes y martes');

INSERT INTO asignatura 
 ( nombre, docente, horario) VALUES
 ('Base de Datos', 'Orlando Sepulveda','viernes, miercoles');