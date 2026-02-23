export default function Map() {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-700">
      <iframe
        src="https://maps.google.com/maps?q=Av.+Manoel+Marquês+Rosa,+1075+-+Centro,+Fernandópolis+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização do Escritório"
      ></iframe>
    </div>
  );
}
