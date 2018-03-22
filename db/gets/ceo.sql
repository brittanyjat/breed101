SELECT ceo
FROM traits INNER JOIN breeds ON (traits.id = breeds.id)
WHERE traits.id = $1;