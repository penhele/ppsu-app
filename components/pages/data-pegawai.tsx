import TableView from "@/components/tables/table-view";
import { getPegawai } from "@/lib/data";
import { PegawaiStatus } from "@prisma/client";
import SectionHeader from "@/components/header";

const DataPegawai = async () => {
  const pegawai = await getPegawai();
  if (!pegawai) return 0;

  const items = [
    { title: "Total Pegawai", total: pegawai.length },
    {
      title: "Aktif",
      total: pegawai.filter((item) => item.status === PegawaiStatus.AKTIF)
        .length,
    },
    {
      title: "Cuti",
      total: pegawai.filter((item) => item.status === PegawaiStatus.CUTI)
        .length,
    },
    {
      title: "Tidak Aktif",
      total: pegawai.filter((item) => item.status === PegawaiStatus.TIDAK_AKTIF)
        .length,
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Data Pegawai"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sed delectus possimus tenetur fugiat nam?"
      />

      <div className="grid grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center py-8 rounded-xl border bg-white"
          >
            <h2 className="text-sm text-gray-500">{item.title}</h2>
            <span className="text-lg">{item.total}</span>
          </div>
        ))}
      </div>

      <TableView />
    </div>
  );
};

export default DataPegawai;
