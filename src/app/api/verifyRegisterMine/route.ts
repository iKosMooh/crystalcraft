import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { lastName } = await req.json();
    if (!lastName) {
      return NextResponse.json({ message: 'O usuário é obrigatório.' }, { status: 400 });
    }
    const user = await prisma.nlogin.findFirst({
      where: { last_name: lastName },
    });
    if (user) {
      return NextResponse.json({ message: 'Usuário ' + lastName + ' encontrado.' });
    } else {
      return NextResponse.json({ message: 'Nenhum usuário com o nome ' + lastName + ' encontrado.' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: 'Erro ao processar a requisição.', error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Erro desconhecido ao processar a requisição.' }, { status: 500 });
    }
  }
}
