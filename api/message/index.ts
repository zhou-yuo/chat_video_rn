import request from '@/utils/request';
import { MessageListResponse } from './types';

// 获取消息列表接口
export function getMessageList(): Promise<MessageListResponse> {
  return request<MessageListResponse>({
    url: '/message/list',
    method: 'get',
  });
}