CREATE OR REPLACE FUNCTION public.get_cashier_experience(cashierid integer)
    RETURNS integer
    LANGUAGE plpgsql
AS $$
    BEGIN
        RETURN (
            SELECT
                SUM(experience)
            FROM (
                SELECT
                    CashiersShops."cashierId" as id,
                    ((COALESCE (CashiersShops."dateEnd", CAST (NOW() as Date)) - CashiersShops."dateStart") / 365) as experience
                FROM
                    "CashiersShops" as CashiersShops
                WHERE
                    CashiersShops."cashierId" = cashierId
            ) AS CashierExperienceList
        );
    END;
$$