import { ReservaDto } from "../models/DTOs/reserva.dto";
import { ReservaResponse } from "../models/reservas.model";
import { extractDate, extractHours } from "../utils/data.util";

export function reservaMapper(reserva: ReservaResponse): ReservaDto {
    return {
        requester: reserva.usuario,
        room: reserva.sala,
        subject: reserva.descricao,
        date: extractDate(new Date(reserva.hora_inicio)),
        start: extractHours(new Date(reserva.hora_inicio)),
        end: extractHours(new Date(reserva.hora_fim)),
        status: reserva.status
    }
}