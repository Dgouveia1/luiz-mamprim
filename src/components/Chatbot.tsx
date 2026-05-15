import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;

interface Message {
    role: 'user' | 'model';
    text: string;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: 'Olá! Sou o assistente virtual do escritório do Dr. Luiz Henrique Mamprin. Como posso ajudar com suas dúvidas em Direito Penal ou de Família hoje?' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
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

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
                const historyContents = messages.map(m => ({ role: m.role, parts: [{ text: m.text }] }));
                historyContents.push({ role: 'user', parts: [{ text: userText }] });
                const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: historyContents,
                    config: { systemInstruction: 'Você é assistente do Dr. Mamprin...' }
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
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label="Abrir assistente virtual"
                    className="fixed bottom-6 right-6 z-40 bg-[var(--accent)] hover:bg-[var(--accent-bright)] text-[#1a1408] p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center"
                >
                    <MessageSquare className="w-6 h-6" />
                </button>
            )}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-6 right-6 z-40 w-[min(360px,calc(100vw-32px))] h-[min(520px,calc(100vh-100px))] bg-[var(--bg-elev)] border border-[var(--border)] rounded-[var(--radius-lg)] shadow-2xl flex flex-col overflow-hidden"
                    >
                        <div className="bg-[var(--bg-elev-2)] p-4 border-b border-[var(--border-soft)] flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-[#1a1408]">
                                    <Bot className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-[var(--text)] font-[var(--font-display)] text-base leading-none">Assistente IA</h3>
                                    <p className="text-[var(--accent)] text-[11px] font-[var(--font-mono)] tracking-[0.08em] uppercase mt-1">Dr. Mamprin</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                aria-label="Fechar assistente"
                                className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[var(--bg)]">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                                ? 'bg-[var(--accent)] text-[#1a1408] rounded-tr-sm'
                                                : 'bg-[var(--bg-elev)] text-[var(--text)] border border-[var(--border-soft)] rounded-tl-sm'
                                            }`}
                                    >
                                        {msg.role === 'model' && (
                                            <div className="flex items-center gap-1.5 mb-1 text-[var(--accent)]">
                                                <Bot className="w-3 h-3" />
                                                <span className="text-[10px] font-[var(--font-mono)] tracking-[0.08em] uppercase">Assistente</span>
                                            </div>
                                        )}
                                        {msg.role === 'user' && (
                                            <div className="flex items-center justify-end gap-1.5 mb-1 text-[#1a1408]/70">
                                                <span className="text-[10px] font-[var(--font-mono)] tracking-[0.08em] uppercase">Você</span>
                                                <User className="w-3 h-3" />
                                            </div>
                                        )}
                                        <span className="whitespace-pre-wrap">{msg.text}</span>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-[var(--bg-elev)] border border-[var(--border-soft)] p-3 rounded-2xl rounded-tl-sm text-sm text-[var(--accent)]">
                                        Digitando…
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="p-3 bg-[var(--bg-elev)] border-t border-[var(--border-soft)]">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex gap-2"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Digite sua dúvida…"
                                    className="flex-1 bg-[var(--bg)] text-[var(--text)] rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--accent)] border border-[var(--border-soft)] placeholder:text-[var(--text-muted)]"
                                    disabled={isTyping}
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isTyping}
                                    aria-label="Enviar"
                                    className="bg-[var(--accent)] hover:bg-[var(--accent-bright)] disabled:opacity-50 text-[#1a1408] p-2.5 rounded-full transition-colors flex items-center justify-center"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
