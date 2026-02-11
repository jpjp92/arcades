
import { GameInfo } from './types';

export const GAMES: GameInfo[] = [
  {
    id: 'minion-puzzle',
    title: 'Minion\nPuzzle',
    category: 'Puzzle',
    description: '지능적인 퍼즐 해결의 시간! 미니언즈와 함께 조각을 맞춰보세요.',
    color: 'bg-[#FFD600]',
    hoverColor: 'hover:bg-[#FFE033]',
    url: 'https://minion-puzzle.vercel.app/',
    titleStyle: 'solid'
  },
  {
    id: 'minion-match',
    title: 'Minion\nMatch',
    category: 'Memory',
    description: '똑같은 미니언을 찾아라! 당신의 기억력을 테스트하는 매치 게임.',
    color: 'bg-[#3E64FF]',
    hoverColor: 'hover:bg-[#5C7CFF]',
    url: 'https://minions-match.vercel.app/',
    textColor: 'text-white',
    titleStyle: 'outline'
  },
  {
    id: 'hanbok-match',
    title: 'Hanbok\nMatch',
    category: 'Animals',
    description: '한복 입은 귀여운 동물들의 짝을 찾아주세요! 전통과 귀여움의 만남.',
    color: 'bg-[#FF70A6]',
    hoverColor: 'hover:bg-[#FF8DB8]',
    url: 'https://hanbok-match.vercel.app/',
    titleStyle: 'solid'
  }
];

export const BRUTAL_CLASSES = {
  border: 'border-[4px] border-black',
  shadow: 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
  shadowHover: 'hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-8px] hover:translate-y-[-8px]',
  shadowActive: 'active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]',
  transition: 'transition-all duration-300 cubic-bezier(0.175, 0.885, 0.32, 1.275)'
};
