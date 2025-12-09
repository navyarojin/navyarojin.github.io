# Custom ESP32-S3 Development Board

A fully custom ESP32-S3 based development board designed for embedded systems
prototyping, IoT, and healthcare applications.

---

## 🔹 Overview

This board integrates power management, USB connectivity, sensing, and storage
on a compact PCB. It is intended as a flexible platform for experimentation
and product-oriented embedded development.

---

## 🔹 Features

- ESP32-S3-MINI module
- USB Type-C interface with ESD protection
- Li-ion battery charging using LTC4054
- Regulated 3.3V power supply
- MPU6050 IMU (accelerometer + gyroscope)
- DS3231 real-time clock (RTC)
- Micro SD card interface
- Boot and reset buttons
- Status and user LEDs
- Exposed headers for GPIO, I2C, SPI, UART

---

## 🔹 Power Design

- USB-powered operation
- Single-cell Li-ion battery support
- Resettable USB fuse
- Low-dropout regulation for stable 3.3 V rail
- Proper decoupling and protection for sensitive peripherals

---

## 🔹 Interfaces

| Interface | Components |
|---------|------------|
| USB | Programming, power |
| I2C | IMU, RTC |
| SPI | SD card |
| UART | Debug / flashing |
| GPIO | External modules |

---

## 🔹 Files Included

- Schematic Design (PDF)
- PCB Layout Files
- Component References
- Pin Mapping Documentation

---

## 🔹 Applications

- Embedded prototyping
- IoT nodes
- Wearable electronics
- Sensor data logging
- Healthcare electronics experimentation

---

## 🔹 Author

**Navya Deena Rojin**  
Electronics & Communication Engineering  
Embedded Systems | PCB Design | Healthcare Electronics
