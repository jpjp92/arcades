import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';
import { BRUTAL_CLASSES } from '../constants';

const AIGameMaster: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', text: '안녕! 나는 Arcade Station의 AI Game Master야. 어떤 게임을 해보고 싶어?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Use process.env as defined in vite.config.ts
    const apiKey = (process.env.GEMINI_API_KEY as string);
    const genAI = new GoogleGenAI({ apiKey, apiVersion: 'v1alpha' });

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // In @google/genai v1+, we use models.generateContent
            const history = messages.map(msg => ({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.text }],
            }));

            const result = await genAI.models.generateContent({
                model: "gemini-2.5-flash",
                contents: [...history, { role: 'user', parts: [{ text: input }] }],
            });

            const responseText = result.response.text() || "미안, 대답을 생성하지 못했어.";
            setMessages(prev => [...prev, { role: 'model', text: responseText }]);
        } catch (error) {
            console.error('AI Error:', error);
            setMessages(prev => [...prev, { role: 'model', text: '미안, 지금은 대화가 조금 어려워. API 키를 확인해줄래?' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className={`
          w-[320px] sm:w-[400px] h-[500px] 
          bg-black text-[#A3E635] 
          ${BRUTAL_CLASSES.border} 
          shadow-[12px_12px_0px_0px_rgba(163,230,53,0.5)]
          flex flex-col mb-6 animate-slide-up
        `}>
                    {/* Header */}
                    <div className="p-4 border-b-4 border-[#A3E635] flex justify-between items-center bg-[#1a1a1a]">
                        <div className="font-black uppercase italic tracking-tighter text-xl text-[#A3E635]">
                            AI Game Master
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="font-black text-2xl leading-none hover:scale-125 transition-transform text-[#A3E635]"
                        >
                            ×
                        </button>
                    </div>

                    {/* Messages */}
                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm"
                    >
                        {messages.map((msg, i) => (
                            <div key={i} className={`${msg.role === 'user' ? 'text-white' : 'text-[#A3E635]'}`}>
                                <span className="font-black mr-2">
                                    {msg.role === 'user' ? '>' : '$'}
                                </span>
                                {msg.text}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="animate-pulse text-[#A3E635]">Thinking...</div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t-4 border-[#A3E635] bg-[#1a1a1a] flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type your command..."
                            className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-[#A3E635]/30"
                            autoFocus
                        />
                        <button
                            onClick={handleSend}
                            className="font-black uppercase text-xs border-2 border-[#A3E635] px-2 py-1 hover:bg-[#A3E635] hover:text-black transition-colors"
                        >
                            Execute
                        </button>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
          w-16 h-16 
          bg-[#FFD600] 
          ${BRUTAL_CLASSES.border} 
          shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
          hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
          hover:translate-x-[4px] hover:translate-y-[4px]
          transition-all
          flex items-center justify-center
          relative
          group
        `}
            >
                {/* Neo-Brutalist Icon */}
                <div className="relative w-8 h-8">
                    {/* Main Circle */}
                    <div className="absolute inset-0 bg-black rounded-full"></div>
                    {/* Inner Circle */}
                    <div className="absolute inset-[6px] bg-[#A3E635] rounded-full"></div>
                    {/* Center Dot */}
                    <div className="absolute inset-[12px] bg-black rounded-full"></div>
                    {/* Top accent line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-4 h-1 bg-black"></div>
                </div>
                {!isOpen && (
                    <div className="absolute -top-12 right-0 bg-black text-white text-[10px] font-black uppercase px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        Help me, Master!
                        <div className="absolute top-full right-4 border-[6px] border-transparent border-t-black"></div>
                    </div>
                )}
            </button>
        </div>
    );
};

export default AIGameMaster;
