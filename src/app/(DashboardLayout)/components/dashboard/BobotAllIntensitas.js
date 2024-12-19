import Image from "next/image";
import { Card, CardBody, CardTitle, CardSubtitle, Table, Button } from "reactstrap";
import user1 from "/public/images/users/user1.jpg";
import user2 from "/public/images/users/user2.jpg";
import user3 from "/public/images/users/user3.jpg";
import user4 from "/public/images/users/user4.jpg";
import user5 from "/public/images/users/user5.jpg";
import { useRouter } from "next/navigation";
import { db } from "../../../../../public/firebaseConfig";
import { getDocs, getDoc, collection, updateDoc, deleteDoc, doc, addDoc } from "firebase/firestore";

const tableData = [
  {
    jenis: 'Tidak Pernah',
    bobot: '0',
  },
  {
    jenis: 'Jarang',
    bobot: '0,25',
  },
  {
    jenis: 'Cukup Sering',
    bobot: '0,5',
  },
  {
    jenis: 'Sering',
    bobot: '0,75',
  },
  {
    jenis: 'Sangat Sering',
    bobot: '1,0',
  },
];

const BobotAllIntensitas = ({dataIntensitas}) => {
  const router = useRouter();

  const handleEditClick = (tdata) => {
    router.push(`/admin/bobot-intensitas?id=${tdata.id}`);
  };

  const handleDeleteClick = async (id) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
    
    if (confirmDelete) {
      try {
        // Hapus data dari Firebase Firestore
        await deleteDoc(doc(db, "dataIntensitas", id));
        alert("Data berhasil dihapus.");
        location.reload();
      } catch (error) {
        console.error("Gagal menghapus data:", error);
        alert("Terjadi kesalahan saat menghapus data.");
      }
    }
  };
  return (
    <>
      <div className="table-responsive">
        <Table className="text-nowrap mt-3 align-middle table-striped" borderless>
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>Intensitas</th>
              <th>Bobot Intensitas</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataIntensitas.map((tdata, index) => (
              <tr key={index} className="border-top text-center">
                <td>
                  {index + 1}
                </td>
                <td>{tdata.namaIntensitas}</td>
                <td>
                  {tdata.bobotIntensitas}
                </td>
                <td>
                  <div className="d-flex justify-content-center align-items-center">
                    <Button className="border-0 bg-transparent p-0" onClick={() => handleEditClick(tdata)}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.32 6.176H5C3.895 6.176 3 7.125 3 8.294V18.882C3 20.052 3.895 21 5 21H16C17.105 21 18 20.052 18 18.882V11.132L14.086 15.276C13.7442 15.6415 13.2991 15.8941 12.81 16L10.129 16.568C8.379 16.938 6.837 15.305 7.187 13.453L7.723 10.614C7.82 10.102 8.058 9.631 8.407 9.262L11.32 6.176Z" fill="#62825d" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.8462 4.318C19.7451 4.06203 19.5969 3.82731 19.4092 3.626C19.2247 3.42913 19.0022 3.27164 18.7552 3.163C18.5118 3.05614 18.249 3.00096 17.9832 3.00096C17.7174 3.00096 17.4545 3.05614 17.2112 3.163C16.9642 3.27164 16.7417 3.42913 16.5572 3.626L16.0112 4.204L18.8632 7.224L19.4092 6.645C19.5988 6.44523 19.7473 6.2101 19.8462 5.953C20.0522 5.42747 20.0522 4.84354 19.8462 4.318ZM17.4502 8.721L14.5972 5.7L9.82019 10.76C9.74971 10.8351 9.70217 10.9288 9.68319 11.03L9.14719 13.87C9.07719 14.24 9.38619 14.566 9.73519 14.492L12.4172 13.925C12.5148 13.9033 12.6036 13.8527 12.6722 13.78L17.4502 8.721Z" fill="#62825d" />
                      </svg>
                    </Button>
                    <span className="mx-1">|</span>
                    <Button className="border-0 bg-transparent p-0" onClick={() => handleDeleteClick(tdata.id)}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.19667 20.0217 5.00067 19.5507 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8043 20.021 18.413 20.413C18.0217 20.805 17.5507 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#62825d" />
                      </svg>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default BobotAllIntensitas;
