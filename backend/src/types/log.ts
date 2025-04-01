export type LogData = {
  id: number;
  url_chamada: string;
  codigo_status: number;
  corpo_resposta: string;
  metodo_requisicao: string;
  ip_cliente: string;
  usuario_agente: string;
  data_criacao: Date;
  tempo_resposta: number;
  cabecalhos: string;
  mensagem_erro: string | null;
};

export type CreateLog = {
  url_chamada: string;
  codigo_status: number;
  corpo_resposta: string;
  metodo_requisicao: string;
  ip_cliente: string;
  usuario_agente: string;
  tempo_resposta: number;
  cabecalhos: string;
  mensagem_erro: string | null;
};
