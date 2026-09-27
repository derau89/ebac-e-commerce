export type GuideStatus =
  "Pendiente" |
  "En tránsito" |
  "Entregado";

export interface History {
  date: string;
  status: GuideStatus;
}

export interface Guide {
  estado: GuideStatus;
  destinatario: string;
  numeroGuia: string;
  origen: string;
  destino: string;
  fecha: string;
  historial: History[];
}