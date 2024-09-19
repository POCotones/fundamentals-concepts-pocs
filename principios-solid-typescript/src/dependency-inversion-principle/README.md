# DIP: Dependency Inversion Principle (Principio de inversion de dependencia)

"Los sistemas flexibles son aquellos en los que las dependencias del código fuente se refieren solo a abstracciones, no a concreciones (cosas concretas)".

## Niveles
Niel es la distancia entre entradas y salidas.

Cuanto más **lejos** estén las politicas y/o reglas de negocio de las entradas **mayor será su nivel**. Las politicas que administran entradas y salidas son  de **más bajo nivel** en el sistema. El


*Los módulos de alto nivel no deberían depender de los módulos de bajo nivel. Ambos deberían depender de abstracciones*


## Detalles

Implementaciones concretas que contienen los detalles de quién o qué o cómo se logra algo en su sistema. 

Son detalles:
- La base de datos
- el framework
- El broker
- Sistema de cache

*Las abstracciones no deberían depender de los detalles. Los detalles deben depender de abstracciones.*


