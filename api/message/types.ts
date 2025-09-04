
interface Message {
  id: number;
  name: string;
}

export interface MessageListResponse {
  list: Message[],
  count?: number,
}