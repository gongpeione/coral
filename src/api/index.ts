import UParams from 'uparams';
import $fetch from '../utils/fetch';
import config from '../config';

function fakeRequest<T> (data: any, delay = 2000): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), delay));
}

const uparams = UParams();
const mockFlag = !!uparams.mock;
const { api } = config;

export enum CARD_TYPE {
  VIDEO = 1,
  CARD = 2,
  POSTER = 3,
  POSTERS = 4,
};
export interface ILotteryResult {
  /** 1 - 视频，2 - 卡片，3 - 单页海报，4 - 多页海报 */
  type: CARD_TYPE,
  url: string,
  card: number,
}
export interface IUserInfo {
  avatar: string,
  name: string,
  work_age: number,
  day: number,
  msg: string,
}
export interface IBindRequest {
  employee_id: number,
  name: string,
  code: string
}

export const getCard = () => !mockFlag
  ? $fetch.post<ILotteryResult>(`${api}/user/lottery`)
  : fakeRequest<ILotteryResult>({
    type: 4,
    url: "https://www.baidu.com", // 视频 url
    card: 5,
    // card: [1, 2, 3, 4, 5][~~(Math.random() * 4 + 1)] // 卡片 id
  });

export const getStatus = () => !mockFlag
  ? $fetch.get<{ cards: number[], count: number, all: number, end_time: number }>(`${api}/user/cards`)
  : Promise.resolve({
    cards: [1, 2, 3, 4, 5, 6],
    count: 10, // 已经获得的卡片数（去重）
    all: 1, // 是否集齐
    end_time:( new Date('Sun Jan 15 2020 01:45:16 GMT+0800 (China Standard Time)')).getTime() / 1000 + 1 // 开奖时间
    // end_time:( new Date('Sun Jan 09 2020 02:29:16 GMT+0800 (China Standard Time)')).getTime() + (11 * 60 * 60 + 23 * 60 + 23) * 1000 // 开奖时间
  });

export type Reward = { lucky: number, type: number };
export const getReward = () => !mockFlag
  ? $fetch.get<Reward>(`${api}/user/prize`)
  : fakeRequest<Reward>({
    lucky: 0, // 0 - 未中奖，1 - 已中奖
    type: 1 // 奖品的类型
  });

export const bindUserInfo = ({ employee_id, name, code }: { employee_id: string, name: string, code: string }) => !mockFlag
  ? $fetch.post<IUserInfo>(`${api}/user/info/code`, { employee_id, name, code })
  : Promise.resolve({
    avatar: "https://www.baidu.com",
    name,
    work_age: 2,
  } as IUserInfo);

export const getUserInfo = () => !mockFlag
  ? $fetch.get(`${api}/user/info`)
  : fakeRequest<IUserInfo>({
    avatar: "https://www.baidu.com",
    name: "张三",
    year: 2,
    day: 569,
  });

export type RewardList = Array<{ name: string, type: number }>;
export const getRewardList = () => !mockFlag
  ? $fetch.get<RewardList>(`${api}/lottery`)
  : fakeRequest<RewardList>([
    { name: 'ddd', type: 1 },
    { name: 'dd1', type: 2 },
    { name: 'ddd2', type: 3 },
    { name: 'ddd3', type: 1 },
    { name: 'ddd4', type: 2 },
    { name: 'ddd', type: 1 },
    { name: 'dd1', type: 2 },
    { name: 'ddd2', type: 3 },
    { name: 'ddd3', type: 1 },
    { name: 'ddd4', type: 2 },
    { name: 'ddd', type: 1 },
    { name: 'dd1', type: 2 },
    { name: 'ddd2', type: 3 },
    { name: 'ddd3', type: 1 },
    { name: 'ddd4', type: 2 },
    { name: 'ddd', type: 1 },
    { name: 'dd1', type: 2 },
    { name: 'ddd2', type: 3 },
    { name: 'ddd3', type: 1 },
    { name: 'ddd4', type: 2 },
    { name: 'ddd', type: 1 },
    { name: 'dd1', type: 2 },
    { name: 'ddd2', type: 3 },
    { name: 'ddd3', type: 1 },
    { name: 'ddd4', type: 2 },
    { name: 'ddd', type: 1 },
    { name: 'dd1', type: 2 },
    { name: 'ddd2', type: 3 },
    { name: 'ddd3', type: 1 },
    { name: 'ddd4', type: 2 },
    { name: 'ddd', type: 1 },
    { name: 'dd1', type: 2 },
    { name: 'ddd2', type: 3 },
    { name: 'ddd3', type: 1 },
    { name: 'ddd4', type: 2 },
    { name: 'ddd', type: 1 },
    { name: 'dd1', type: 2 },
    { name: 'ddd2', type: 3 },
    { name: 'ddd3', type: 1 },
    { name: 'ddd4', type: 2 },
  ]);
