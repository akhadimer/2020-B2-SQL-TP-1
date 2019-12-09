const name = "thomas-dumont"
const promo = "B2A"

const q1 = `SELECT Name 
FROM Track
WHERE Milliseconds < (SELECT Milliseconds FROM Track
WHERE TrackId = 3457) ;`
const q2 = `SELECT Name
FROM Track
WHERE MediaTypeId = (SELECT TOP(1) MediaTypeId
FROM Track
WHERE Name = 'Rehab');`
const q3 = `SELECT p.PlaylistId, p.Name, COUNT(p.PlaylistId) AS "Nbr de chansons", SUM(t.Milliseconds) AS "Durée totale", AVG(t.Milliseconds) AS "Durée moyenne"
FROM Playlist p
JOIN PlaylistTrack pt
ON p.PlaylistId = pt.PlaylistId
JOIN Track t
ON pt.TrackId = t.TrackId
GROUP BY p.PlaylistId, p.Name;`
const q4 = `SELECT p.PlaylistId, p.Name, COUNT(p.PlaylistId) AS "Nombres de chansons", SUM(t.Milliseconds) AS "Durée totale", AVG(t.Milliseconds) AS "Durée moyenne"
FROM Playlist p
JOIN PlaylistTrack pt
ON p.PlaylistId = pt.PlaylistId
JOIN Track t
ON pt.TrackId = t.TrackId
GROUP BY p.PlaylistId, p.Name
HAVING SUM(t.Milliseconds) > AVG(t.Milliseconds);`
const q5 = ``
const q6 = `SELECT c.CustomerId
FROM Customer c
JOIN Invoice i
ON i.CustomerId = c.CustomerId
WHERE i.Total IN
(SELECT i.Total
FROM Invoice i
WHERE c.Country LIKE 'France');`
const q7 = `SELECT c.Country, MIN(i.Total) AS 'Moins élevée', MAX(i.Total) AS 'Plus élevée', AVG(i.Total) AS 'Total moyen', COUNT(i.InvoiceId) AS 'Nombre total'
FROM Customer c
JOIN Invoice i
ON c.CustomerId = i.CustomerId
GROUP BY c.Country;`
const q8 = `SELECT *, (select sum(UnitPrice) from Track) / (select count(*) from Track) as "Prix Moyen", med.Name as "Media name", (select sum(UnitPrice) from Track join MediaType on MediaType.MediaTypeId = Track.MediaTypeId where MediaType.Name = med.Name) / (select count(*) from Track join MediaType on MediaType.MediaTypeId = Track.MediaTypeId where MediaType.Name = med.Name) 
From Track
join MediaType med on med.MediaTypeId = Track.MediaTypeId
where UnitPrice > ((select sum(UnitPrice) from Track) / (select count(*) from Track));`
const q9 = ``
const q10 = ``
const q11 = ``
const q12 = ``
const q13 = ``
const q14 = ``
const q15 = ``
const q16 = ``
const q17 = ``
const q18 = ``
const q19 = ``
const q20 = ``
const q21 = ``
const q22 = ``
const q23 = ``
const q24 = ``
const q25 = ``
const q26 = ``











































// NE PAS TOUCHER CETTE SECTION
const tp = {name: name, promo: promo, queries: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26]}
module.exports = tp
