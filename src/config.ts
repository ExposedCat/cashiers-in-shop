const pgPromiseConfiguration = {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    database: process.env.POSTGRES_DB || 'shop-db',
    user: process.env.POSTGRES_USER || 'shop-admin',
    password: process.env.POSTGRES_PASSWORD || 'uck202urP',
    max: 30
}

export {
    pgPromiseConfiguration
}