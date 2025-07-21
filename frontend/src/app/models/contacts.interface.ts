export interface Contacts {
    id: number;
    nome_completo: string;
    data_nascimento: string;
    email: string;
    profissao: string,
    celular: string;
    telefone?: string;
    tem_whatsapp?: number;
    notificacoes_email?: number;
    notificacoes_SMS?: number;
    atualizado_em?: string;
    criado_em?: string;
    event?: any;
}