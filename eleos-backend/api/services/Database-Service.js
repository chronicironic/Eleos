const mariadb = require('mariadb');

module.exports = {
    pool: mariadb.Pool,
    async createConnection() {
        const pool = await this.createPool();
        return await pool.getConnection();
    },
    async createPool() {
        if( !this.pool ) {
            console.log(process.env.DB_HOST, process.env.DB_PORT, process.env.DB_USERNAME, process.env.DB_PASSWORD)
            this.pool = mariadb.createPool({
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                user: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD
            });
        }
        return this.pool;
    },
}