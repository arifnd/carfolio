const TermsOfService = () => {
  return (
    <section id="terms" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Syarat & Ketentuan
          </h2>
          
          <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">1. Ketentuan Umum</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dengan menggunakan layanan katalog mobil ini, Anda menyetujui untuk mematuhi 
                seluruh syarat dan ketentuan yang berlaku. Kami berhak mengubah ketentuan ini 
                sewaktu-waktu tanpa pemberitahuan sebelumnya.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">2. Informasi Produk</h3>
              <p className="text-muted-foreground leading-relaxed">
                Semua informasi mengenai spesifikasi, harga, dan ketersediaan mobil yang 
                ditampilkan dalam katalog ini bersifat indikatif dan dapat berubah sewaktu-waktu. 
                Untuk informasi yang lebih akurat dan terkini, silakan hubungi kami secara langsung.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">3. Harga dan Pembayaran</h3>
              <p className="text-muted-foreground leading-relaxed">
                Harga yang tercantum belum termasuk biaya administrasi, asuransi, dan pajak yang berlaku. 
                Harga dapat berubah tanpa pemberitahuan sebelumnya. Metode pembayaran dan skema kredit 
                akan dijelaskan secara detail saat konsultasi.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">4. Privasi dan Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kami menghormati privasi Anda dan berkomitmen untuk melindungi informasi pribadi yang 
                Anda berikan. Data yang dikumpulkan hanya akan digunakan untuk keperluan layanan konsultasi 
                dan tidak akan dibagikan kepada pihak ketiga tanpa persetujuan Anda.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">5. Kontak dan Layanan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Layanan konsultasi tersedia melalui WhatsApp pada jam kerja. Kami akan merespons 
                pertanyaan Anda dalam waktu 1x24 jam pada hari kerja. Untuk informasi lebih lanjut, 
                silakan hubungi tim customer service kami.
              </p>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
              <h3 className="text-lg font-semibold mb-2 text-primary">Butuh Bantuan?</h3>
              <p className="text-foreground/80 mb-4">
                Jika Anda memiliki pertanyaan mengenai syarat dan ketentuan ini, jangan ragu untuk menghubungi kami.
              </p>
              <button 
                onClick={() => window.open('https://wa.me/6281234567890?text=Halo, saya ingin bertanya mengenai syarat dan ketentuan', '_blank')}
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Hubungi via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;