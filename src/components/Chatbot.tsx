import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// Initialize the API conditionally to safely handle missing keys
const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;

interface Message {
    role: 'user' | 'model';
    text: string;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: 'Olá! Sou o assistente virtual do escritório Dr. Luiz Henrique Mamprin. Como posso ajudar com suas dúvidas em Direito Penal ou de Família hoje?' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Use a ref to store the chat session
    const chatSessionRef = useRef<any>(null);

    useEffect(() => {
        if (isOpen && !chatSessionRef.current && ai) {
            try {
                chatSessionRef.current = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction: 'Você é o assistente virtual inteligente do escritório de advocacia criminal e de família do Dr. Luiz Henrique Mamprin. O escritório atua em Fernandópolis, SP. Seja profissional, acolhedor e ético. Nunca dê conselhos jurídicos finais, pois cada caso é único. Seu objetivo é orientar o usuário (sobre divórcios, habeas corpus, Maria da Penha, pensão alimentícia, etc.) e incentivá-lo a agendar uma consulta física ou online. Seja muito cordial.'
                    }
                });
            } catch (e) {
                console.error('Error initializing chat:', e);
            }
        }
    }, [isOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        if (!ai) {
            setMessages(prev => [...prev, { role: 'model', text: 'A API do assistente virtual não está configurada no momento. Por favor, utilize o WhatsApp.' }]);
            return;
        }

        const userText = input.trim();
        setMessages(prev => [...prev, { role: 'user', text: userText }]);
        setInput('');
        setIsTyping(true);

        try {
            if (chatSessionRef.current) {
                const response = await chatSessionRef.current.sendMessage({ message: userText });
                setMessages(prev => [...prev, { role: 'model', text: response.text || '...' }]);
            } else {
                // Fallback stateless
                const historyContents = messages.map(m => ({ role: m.role, parts: [{ text: m.text }] }));
                historyContents.push({ role: 'user', parts: [{ text: userText }] });
                const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: historyContents,
                    config: {
                        systemInstruction: 'Você é assistente do Dr. Mamprin...'
                    }
                });
                setMessages(prev => [...prev, { role: 'model', text: response.text || '...' }]);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [...prev, { role: 'model', text: 'Desculpe, ocorreu um erro de conexão. Por favor, tente novamente ou entre em contato via WhatsApp.' }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-50 bg-blue-800 hover:bg-blue-900 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center border border-blue-700/20"
                >
                    <MessageSquare className="w-6 h-6" />
                </button>
            )}

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-6 right-6 z-50 w-[350px] h-[500px] bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-neutral-800 p-4 border-b border-neutral-700 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center p-0.5">
                                    <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center">
                                        <Bot className="w-5 h-5 text-blue-700" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-neutral-100 font-semibold text-sm">Assistente IA</h3>
                                    <p className="text-blue-700 text-xs">Dr. Mamprin Advogados</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-neutral-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                                ? 'bg-blue-800 text-white rounded-tr-sm'
                                                : 'bg-neutral-800 text-neutral-200 border border-neutral-700 rounded-tl-sm'
                                            }`}
                                    >
                                        {msg.role === 'model' && (
                                            <div className="flex items-center gap-2 mb-1">
                                                <Bot className="w-3 h-3 text-blue-700" />
                                                <span className="text-xs text-blue-700 font-medium">Assistente IA</span>
                                            </div>
                                        )}
                                        {msg.role === 'user' && (
                                            <div className="flex items-center justify-end gap-2 mb-1">
                                                <span className="text-xs text-blue-300 font-medium">Você</span>
                                                <User className="w-3 h-3 text-blue-300" />
                                            </div>
                                        )}
                                        <span className="leading-relaxed whitespace-pre-wrap">{msg.text}</span>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-neutral-800 border border-neutral-700 p-3 rounded-2xl rounded-tl-sm text-sm text-blue-700">
                                        Digitando...
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-neutral-900 border-t border-neutral-700">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex gap-2"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Digite sua dúvida..."
                                    className="flex-1 bg-neutral-800 text-white rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-700 border border-neutral-700"
                                    disabled={isTyping}
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isTyping}
                                    className="bg-blue-800 hover:bg-blue-900 disabled:opacity-50 text-white p-2 rounded-xl transition-colors flex items-center justify-center"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
