CREATE SCHEMA `nominas` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `nominas`.`empleados` (
  `nombre` VARCHAR(40) NOT NULL,
  `dni` VARCHAR(9) NOT NULL,
  `sexo` CHAR(1) NOT NULL,
  `categoria` INT(2) NOT NULL,
  `anyos` INT(3) NOT NULL,
  PRIMARY KEY (`dni`),
CONSTRAINT SEXO_CHECK CHECK (sexo = 'M' OR sexo = 'F'),
CONSTRAINT CATEGORIA_CHECK CHECK (categoria >=1 AND categoria <=10),
CONSTRAINT ANYOS_CHECK CHECK (anyos >=0))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `nominas`.`nominas` (
  `dni` VARCHAR(9) NOT NULL,
  `sueldo` INT NOT NULL,
  PRIMARY KEY (`dni`),
  CONSTRAINT `DNI_FK`
    FOREIGN KEY (`dni`)
    REFERENCES `nominas`.`empleados` (`dni`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

insert into empleados  values ('Alejandro', '30244234Q','M','2','3');