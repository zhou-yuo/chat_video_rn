import request from '@/utils/request';
interface MessageType {
  list: {
    id: number;
    name: string;
  }[]
}
// 获取消息列表接口
export function getMessageList(): Promise<MessageType> {
  return request<MessageType>({
    url: '/message/list',
    method: 'get',
  });
}