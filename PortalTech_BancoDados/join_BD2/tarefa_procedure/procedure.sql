CREATE PROCEDURE diario_produtos_vendidos (@data DATE)
AS
BEGIN
  SELECT 
    data, 
    SUM(quantidade) AS quantidade_vendida
  FROM 
    vendas
  WHERE 
    data = @data
  GROUP BY 
    data
END


-- executando
EXEC diario_produtos_vendidos '2023-02-06'
