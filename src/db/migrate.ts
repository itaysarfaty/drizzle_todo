import { db } from '.'
import { migrate } from 'drizzle-orm/libsql/migrator'

async function main() {
    console.log('Running migrations')

    await migrate(db, { migrationsFolder: 'drizzle' })

    console.log('Migrated successfully')

    process.exit(0)
}

main().catch((e) => {
    console.error('Migration failed')
    console.error(e)
    process.exit(1)
})
