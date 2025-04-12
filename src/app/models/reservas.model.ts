export interface ReservaResponse {
  id: number;
  usuario: string;
  sala: string;
  descricao: string;
  hora_inicio: Date;
  hora_fim: Date;
  status: "Aprovado" | "Recusado" | "Pendente";
}