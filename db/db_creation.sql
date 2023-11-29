-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Usuarios` (
  `idUsuarios` INT NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `mail` VARCHAR(40) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `contraseña` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idUsuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Servicios` (
  `idServicios` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(300) NOT NULL,
  `imagen` VARCHAR(300) NOT NULL,
  `Usuarios_idUsuarios` INT NOT NULL,
  PRIMARY KEY (`idServicios`, `Usuarios_idUsuarios`),
  INDEX `fk_Servicios_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) VISIBLE,
  CONSTRAINT `fk_Servicios_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `mydb`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Cotizacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Cotizacion` (
  `idCotizacion` INT NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `mail` VARCHAR(40) NOT NULL,
  `empresa` VARCHAR(100) NOT NULL,
  `mensaje` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idCotizacion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Cotizacion_has_Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Cotizacion_has_Servicios` (
  `Cotizacion_idCotizacion` INT NOT NULL,
  `Servicios_idServicios` INT NOT NULL,
  `Servicios_Usuarios_idUsuarios` INT NOT NULL,
  PRIMARY KEY (`Cotizacion_idCotizacion`, `Servicios_idServicios`, `Servicios_Usuarios_idUsuarios`),
  INDEX `fk_Cotizacion_has_Servicios_Servicios1_idx` (`Servicios_idServicios` ASC, `Servicios_Usuarios_idUsuarios` ASC) VISIBLE,
  INDEX `fk_Cotizacion_has_Servicios_Cotizacion1_idx` (`Cotizacion_idCotizacion` ASC) VISIBLE,
  CONSTRAINT `fk_Cotizacion_has_Servicios_Cotizacion1`
    FOREIGN KEY (`Cotizacion_idCotizacion`)
    REFERENCES `mydb`.`Cotizacion` (`idCotizacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Cotizacion_has_Servicios_Servicios1`
    FOREIGN KEY (`Servicios_idServicios` , `Servicios_Usuarios_idUsuarios`)
    REFERENCES `mydb`.`Servicios` (`idServicios` , `Usuarios_idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Ventas` (
  `idVentas` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME(6) NOT NULL,
  `precio` DECIMAL(20) NOT NULL,
  `Cotizacion_has_Servicios_Cotizacion_idCotizacion` INT NOT NULL,
  `Cotizacion_has_Servicios_Servicios_idServicios` INT NOT NULL,
  `Cotizacion_has_Servicios_Servicios_Usuarios_idUsuarios` INT NOT NULL,
  PRIMARY KEY (`idVentas`, `Cotizacion_has_Servicios_Cotizacion_idCotizacion`, `Cotizacion_has_Servicios_Servicios_idServicios`, `Cotizacion_has_Servicios_Servicios_Usuarios_idUsuarios`),
  INDEX `fk_Ventas_Cotizacion_has_Servicios1_idx` (`Cotizacion_has_Servicios_Cotizacion_idCotizacion` ASC, `Cotizacion_has_Servicios_Servicios_idServicios` ASC, `Cotizacion_has_Servicios_Servicios_Usuarios_idUsuarios` ASC) VISIBLE,
  CONSTRAINT `fk_Ventas_Cotizacion_has_Servicios1`
    FOREIGN KEY (`Cotizacion_has_Servicios_Cotizacion_idCotizacion` , `Cotizacion_has_Servicios_Servicios_idServicios` , `Cotizacion_has_Servicios_Servicios_Usuarios_idUsuarios`)
    REFERENCES `mydb`.`Cotizacion_has_Servicios` (`Cotizacion_idCotizacion` , `Servicios_idServicios` , `Servicios_Usuarios_idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
