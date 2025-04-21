const karyaList = [
  {
    id: 1,
    name: "Lukisan Abstrak",
    description: "Karya seni ekspresif dari jurusan DKV.",
    price: "Rp 150.000",
    image: "./",
  },
  {
    id: 2,
    name: "Meja Kayu Mini",
    description: "Kerajinan handmade dari jurusan TKJ.",
    price: "Rp 250.000",
    image: "https://via.placeholder.com/300x200.png?text=Meja",
  },
  {
    id: 3,
    name: "Aplikasi Kasir",
    description: "Aplikasi desktop buatan siswa RPL.",
    price: "Rp 100.000",
    image: "https://via.placeholder.com/300x200.png?text=Aplikasi",
  },
  {
    id: 4,
    name: "Tote Bag Eco",
    description: "Produk ramah lingkungan dari jurusan Tata Busana.",
    price: "Rp 80.000",
    image: "https://via.placeholder.com/300x200.png?text=Tote+Bag",
  },
];

const KaryaSiswa = () => {
  return (
    <div className="container py-5 bg-light">
      <h1 className="text-center text-success mb-4">Karya Siswa</h1>
      <p className="text-center text-muted mb-5">
        Temukan dan dukung karya kreatif dari siswa SMK terbaik!
      </p>
      <div className="row g-4">
        {karyaList.map((karya) => (
          <div className="col-12 col-sm-6 col-lg-3" key={karya.id}>
            <div className="card h-100 shadow-sm border-success">
              <img
                src={karya.image}
                className="card-img-top"
                alt={karya.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-success">{karya.name}</h5>
                <p className="card-text small text-muted">
                  {karya.description}
                </p>
                <div className="mt-auto">
                  <h6 className="text-success fw-bold">{karya.price}</h6>
                  <button className="btn btn-success mt-2 w-100">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KaryaSiswa;
