import { NextResponse } from 'next/server'
import { pool } from '../..//lib/db'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const result = await pool.query(
        `INSERT INTO accesos (fecha)
        VALUES (NOW() AT TIME ZONE 'America/La_Paz')
        RETURNING *`
    )

    return NextResponse.json({
      message: 'log guardado',
      data: result.rows[0],
    })

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: 'Error en servidor' },
      { status: 500 }
    )
  }
}