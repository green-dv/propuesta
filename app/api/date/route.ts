import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { respuesta, intereses, dia, hora } = body;

    // Validación básica
    if (!respuesta || !dia || !hora) {
      return NextResponse.json(
        { error: "Faltan datos" },
        { status: 400 }
      );
    }

    console.log("Nueva respuesta:", { respuesta, intereses,dia, hora });

    return NextResponse.json({
      message: "Si lees esto eres gay :v okno",
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}