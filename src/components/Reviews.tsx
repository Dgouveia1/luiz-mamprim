import { Star } from "lucide-react";
import { motion } from "motion/react";

const reviews = [
  {
    author: "Daiani Viegas",
    rating: 5,
    comment: "Excelente profissional, responsável, ágil e dedicado a cumprir seu compromisso com seus clientes! Deixa bem claro as leis, não mede esforços para que seu cliente saiba os pontos fortes e fracos do processo.",
    date: "Fevereiro de 2025"
  },
  {
    author: "João Vitor Rodrigues",
    rating: 5,
    comment: "O melhor advogado da região Dr. Luiz Mamprin, super indico 100% aprovado!",
    date: "Fevereiro de 2025"
  },
  {
    author: "Joice Muniz",
    rating: 5,
    comment: "Ótimo atendimento, muito prestativo e excelente profissional recomendo a todos.",
    date: "Maio de 2024"
  },
  {
    author: "Ingrid Marina",
    rating: 5,
    comment: "Um ótimo profissional, resolveu meu problema, muito prestativo e atencioso recomendo a todos de olhos fechados",
    date: "Junho de 2024"
  },
  {
    author: "Francislaine Kojima",
    rating: 5,
    comment: "Sempre a disposição pra melhor acessorar juridicamente nas questões do dia a dia.",
    date: "Março de 2025"
  },
  {
    author: "Carmen lucia patricio cavallini",
    rating: 5,
    comment: "Fui bem atendida com gentileza e tive meu problema resolvido com sucesso",
    date: "Fevereiro de 2025"
  }
];

export default function Reviews() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-2xl border border-neutral-700 hover:border-blue-500/50 transition-colors shadow-lg"
        >
          <div className="flex gap-1 mb-4">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
            ))}
          </div>
          <p className="text-slate-300 mb-6 italic text-sm leading-relaxed">"{review.comment}"</p>
          <div className="flex items-center gap-3 mt-auto border-t border-neutral-700/50 pt-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-800 to-blue-800 flex items-center justify-center text-white font-bold text-lg">
              {review.author.charAt(0)}
            </div>
            <div>
              <h4 className="text-white font-medium text-sm">{review.author}</h4>
              <p className="text-neutral-500 text-xs">{review.date}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
