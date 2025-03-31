# Laboratorio 21

## La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.

```
SELECT SUM(e.cantidad*(m.precio+m.impuesto)) as Importe, SUM(e.cantidad) as Cantidad
FROM entregan e, materiales m
WHERE e.clave = m.clave
AND e.fecha BETWEEN '1997-01-01' AND '1997-12-31';
```

## Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.

```
SELECT p.razonsocial, COUNT(*) as Entregas, SUM(e.cantidad*(m.precio+m.impuesto)) as Importe
FROM proveedores p, entregan e, materiales m
WHERE p.rfc = e.rfc
AND e.clave = e.clave
GROUP BY p.razonsocial;
```

## Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.

```
SELECT m.clave, m.descripcion, SUM(e.cantidad) as 'Total entregado', MIN(e.cantidad) as 'Mínima cantidad entregada', MAX(e.cantidad) as 'Máxima cantidad entregada', SUM(e.cantidad*(m.precio+m.impuesto)) as Importe
FROM materiales m, entregan e
WHERE m.clave = e.clave
GROUP BY m.clave
HAVING AVG(e.cantidad) > 400;
```

## Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.

```
SELECT p.razonsocial, AVG(e.cantidad) as 'Cantidad promedio', e.clave, m.descripcion
FROM proveedores AS p, entregan as e, materiales AS m
WHERE m.clave = e.clave
AND p.rfc = e.rfc
GROUP BY e.clave
HAVING AVG(e.cantidad) >= 500;
```

## Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450.

```
SELECT p.razonsocial, AVG(e.cantidad) as 'Cantidad promedio', e.clave, m.descripcion
FROM proveedores AS p, entregan as e, materiales AS m
WHERE m.clave = e.clave
AND p.rfc = e.rfc
GROUP BY e.clave
HAVING AVG(e.cantidad) <= 370 OR AVG(e.cantidad) >=450;
```

## Utilizando la sentencia `INSERT INTO tabla VALUES (valorcolumna1, valorcolumna2, [...] , valorcolumnan) ;`

```
INSERT INTO materiales(clave, descripcion, precio, impuesto) VALUES (3000, 'Material 1', 500, 50);
INSERT INTO materiales(clave, descripcion, precio, impuesto) VALUES (3010, 'Material 2', 400, 40);
INSERT INTO materiales(clave, descripcion, precio, impuesto) VALUES (3020, 'Material 3', 300, 30);
INSERT INTO materiales(clave, descripcion, precio, impuesto) VALUES (3030, 'Material 4', 200, 20);
INSERT INTO materiales(clave, descripcion, precio, impuesto) VALUES (3040, 'Material 5', 100, 10);
```

## Clave y descripción de los materiales que nunca han sido entregados.

```
SELECT M.clave as 'Clave', M.descripcion as 'Descripcion'
FROM materiales as M
WHERE M.clave NOT IN (SELECT E.clave FROM entregan as E)
```

## Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.

```
SELECT Prov.razonsocial
FROM proveedores as Prov
WHERE EXISTS (
    SELECT * FROM entregan as E
    JOIN proyectos as Proy ON E.numero = Proy.numero
    WHERE E.rfc = Prov.rfc AND Proy.denominacion = 'Vamos México'
)
AND EXISTS (
    SELECT * FROM entregan as E
    JOIN proyectos as Proy ON E.numero = Proy.numero
    WHERE E.rfc = Prov.rfc AND Proy.denominacion = 'Queretaro Limpio'
);
```

## Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.

```
(SELECT m.descripcion
FROM materiales m)
EXCEPT
(SELECT m.descripcion
FROM materiales m, entregan e, proyectos p
WHERE m.clave = e.clave
AND e.numero = p.numero
AND p.denominacion = "CIT Yucatán");
```

## Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.

```
SELECT p.razonsocial, AVG(e.cantidad) AS 'Cantidad Promedio'
FROM entregan AS e, proveedores AS p
WHERE e.rfc = p.rfc
GROUP BY p.razonsocial
HAVING AVG(e.cantidad) > (
                            SELECT AVG(e2.cantidad)
                            FROM entregan AS e2, proveedores AS p2
                            WHERE p2.rfc = e2.rfc
                            AND p2.rfc ='VAGO780901'
                          );
```

## RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.

```
SELECT p.RFC, p.RazonSocial
FROM Proveedores p, Entregan e, Proyectos pr
WHERE p.RFC = e.RFC
AND e.Numero = pr.Numero
AND pr.Denominacion = 'Infonavit Durango'
GROUP BY p.RFC, p.RazonSocial
HAVING
SUM(CASE WHEN YEAR(e.Fecha) = 2000 THEN e.Cantidad ELSE 0 END)
>
SUM(CASE WHEN YEAR(e.Fecha) = 2001 THEN e.Cantidad ELSE 0 END);
```
