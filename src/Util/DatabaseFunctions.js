const sql = import('mssql')

//Connection parameters for the Azure SQL Server
const config = {
  user: 'GeneralUser', // sql user
  password: 'rZln04HZ3$*B', //sql user password
  server: 'task-tracker.database.windows.net',
  database: 'Production',
  options: {
    trustedconnection: true,
    enableArithAbort: true,
  },
  port: 1433
}

//Calls entire specified table from SQL Server
export async function getTable(tableName) {
  try {
    let pool = await sql.connect(config);
    let products = await pool.request().query('SELECT * from ' + tableName);
    console.log(products.recordsets)
    return products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}


