export default function Map() {
  return (
    <div className="w-full h-[400px] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-soft)]">
      <iframe
        src="https://maps.google.com/maps?q=Av.+Manoel+Marqu%C3%AAs+Rosa,+1075+-+Centro,+Fernand%C3%B3polis+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização do Escritório"
      ></iframe>
    </div>
  );
}
