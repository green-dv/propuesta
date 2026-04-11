import { pool } from '../../lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { respuesta, dia, hora } = body

    if (!respuesta) {
      return NextResponse.json(
        { error: "Faltan datos" },
        { status: 400 }
      )
    }

    const diaValido = dia === "" ? null : dia;
    const horaValida = hora === "" ? null : hora;

    const result = await pool.query(
      `INSERT INTO salida (respuesta, dia, hora)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [respuesta, diaValido, horaValida]
    )

    return NextResponse.json({
      message: "exito",
      data: result.rows[0], 
    })

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: error },
      { status: 500 }
    )
  }
}
