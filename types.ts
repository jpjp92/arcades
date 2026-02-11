
export interface GameInfo {
  id: string;
  title: string;
  category: string;
  description: string;
  color: string;
  hoverColor: string;
  url: string;
  textColor?: string;
  titleStyle?: 'solid' | 'outline';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
